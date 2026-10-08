#!/bin/sh
# Rebuild site/fonts/pretendard-latin.woff2 from the full Pretendard variable font.
# The page is English, so only Latin and the few symbols it uses are kept.
# Rerun this if the page starts using characters outside the list below (e.g. Korean).
set -eu
cd "$(dirname "$0")/.."
tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT
curl -sSfL -o "$tmp/full.woff2" \
  https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/variable/woff2/PretendardVariable.woff2
pyftsubset "$tmp/full.woff2" \
  --unicodes="U+0020-007E,U+00A0,U+00A9,U+00D7,U+2013,U+2014,U+2018,U+2019,U+201C,U+201D,U+2026,U+2192" \
  --layout-features='kern,liga,calt,tnum' \
  --flavor=woff2 \
  --output-file=site/fonts/pretendard-latin.woff2
ls -l site/fonts/pretendard-latin.woff2
