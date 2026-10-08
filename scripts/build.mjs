// Build dist/ from site/ and PRINCIPLES.md.
// PRINCIPLES.md format:
//   ## 01. Title        -> one accordion item (number + title)
//   plain paragraph     -> <p>
//   > note              -> <p class="not"> (the "what this doesn't mean" line)
import { readFile, writeFile, rm, cp } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const src = new URL('site/', root);
const out = new URL('dist/', root);

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function parsePrinciples(md) {
  return md.split(/^## /m).slice(1).map((block) => {
    const [heading, ...rest] = block.split('\n');
    const m = heading.match(/^(\d+)\.\s+(.+)$/);
    if (!m) throw new Error(`Bad heading in PRINCIPLES.md: "## ${heading}"`);
    const paras = rest.join('\n').trim().split(/\n\s*\n/).map((p) => p.replace(/\s*\n\s*/g, ' ').trim());
    if (!paras.length || !paras[0]) throw new Error(`Principle ${m[1]} has no body`);
    return { n: m[1], title: m[2].trim(), paras };
  });
}

function renderItem({ n, title, paras }, i) {
  const id = `p${n}`;
  const body = paras
    .map((p) => (p.startsWith('>') ? `<p class="not">${escape(p.replace(/^>\s*/, ''))}</p>` : `<p>${escape(p)}</p>`))
    .join('');
  return `      <li${i === 0 ? ' class="open"' : ''} style="--i:${i}">` +
    `<h2><button class="row" type="button" aria-expanded="${i === 0}" aria-controls="${id}">` +
    `<span class="n">${n}</span><span>${escape(title)}</span><span class="ic" aria-hidden="true">+</span></button></h2>` +
    `<div class="panel" id="${id}"><div class="inner"><div class="body">${body}</div></div></div></li>`;
}

const marker = '<!-- @principles -->';
const [template, md] = await Promise.all([
  readFile(new URL('index.html', src), 'utf8'),
  readFile(new URL('PRINCIPLES.md', root), 'utf8'),
]);
if (!template.includes(marker)) throw new Error(`site/index.html is missing ${marker}`);

const principles = parsePrinciples(md);
const html = template.replace(marker, principles.map(renderItem).join('\n'));

await rm(out, { recursive: true, force: true });
await cp(src, out, { recursive: true });
await writeFile(new URL('index.html', out), html);
console.log(`dist/index.html: ${principles.length} principles, ${(Buffer.byteLength(html) / 1024).toFixed(1)} KB`);
