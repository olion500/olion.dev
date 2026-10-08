# olion Design Specification

> `oiloil-ui-ux-guide`의 `design` 상담과 `oil-ui` 시안 작업으로 정했다 (2026-10-08).
> Style family: `editorial` 기반, 글꼴은 Pretendard 하나만 쓴다.
> 구현: `site/index.html`(템플릿) + `PRINCIPLES.md`(원칙 원문) → `npm run build` → `dist/`

## 1. Design direction

- **Product**: olion.dev 회사 랜딩페이지. 회사가 일하는 원칙을 보여주고, 소식을 받을 사람을 모은다.
- **Concept**: "Software for one." — 한 번에 한 사람을 위한 소프트웨어. 메인 카피는 "More time for what you love. Leave the chores to us."
- **Structure**: 37signals처럼 원칙 목록이 페이지의 중심이다. 원칙은 번호 붙은 아코디언(00–06)으로 보여준다. 원문은 `PRINCIPLES.md`에서 고치고, 빌드가 HTML로 넣는다.
- **Products**: 이름만 공개하고 모두 "Coming soon"으로 표시한다. 스크린샷과 기능 상세는 보여주지 않는다.
  - A Little Brew — For your morning cup
  - Backtest — For your money rules
  - Homeward — For the home you'll find
- **Style family**: `editorial`(미색 바탕, 선으로 나누는 구획, 넉넉한 여백, 절제된 강조색). 명조 대신 Pretendard만 쓰고, 잡지 느낌은 굵은 가로선과 크기 대비, 여백으로 낸다.
- **References**: 37signals.com(원칙 목록 구조와 짧은 글), mymind(두 박자 슬로건)
- **Tone**: 차분함, 단정함, 짧고 단정한 문장
- **Hard constraints**: 다크 모드 지원, 모바일 대응(16px 좌우 여백, 가로 스크롤 없음), 본문 텍스트 WCAG AA 대비, 외부 CDN 없이 열림(글꼴·스크립트 self-host)
- **Locale**: primary `en`, secondary 없음

## 2. Color

### Brand
- `--accent`: `#a3301f` — 짙은 빨강. 링크, CTA, 열린 아코디언 행, 히어로의 "one."에만 쓴다. 면(배경)으로 깔지 않는다. 대비 6.7:1
- `--accent-hover`: `#7f2517`
- Secondary: 없음 — 강조색은 하나만 쓴다

### Neutrals (따뜻한 회색 쪽)
- `--bg`: `#fbfaf7`
- `--rule-strong`: `#161513` — 섹션·목록 시작의 2px 굵은 선, 상단바 아래 선
- `--rule`: `#d8d3c9` — 1px 얇은 구분선
- `--text`: `#161513` (17.5:1)
- `--text-2`: `#5e5a53` (6.6:1) — 보조 문장, 아이콘 기본색
- `--muted`: `#757068` (4.7:1) — 번호, 라벨, "Coming soon", 각주

### Semantic
지금 페이지에는 쓰지 않는다. 입력 폼을 붙일 때 아래 값을 쓴다.
- success `#2f6b3f` · warning `#8a5a00` · error `#b42318` · info `#1f4e79`
- error는 강조색과 색이 비슷하므로 오류는 색만으로 알리지 않고 항상 문구를 함께 쓴다.

### Dark mode
시스템 설정을 따르고, 상단바 아이콘으로 수동 전환한다(`data-theme="light|dark"`).

- `--bg` `#151412` · `--rule-strong` `#ecebe7` · `--rule` `#3a3833`
- `--text` `#ecebe7` (15.4:1) · `--text-2` `#a8a49c` (7.4:1) · `--muted` `#8c887f` (5.2:1)
- `--accent` `#e27a64` (6.3:1) · `--accent-hover` `#ec9682`
- dark semantic: success `#6fbf87` · warning `#e0b25a` · error `#f08a7e` · info `#7fb2e5`

## 3. Typography

| Role | Font | Weights | Source |
|---|---|---|---|
| 전체 | Pretendard Variable | 400–800 | `site/fonts/pretendard-latin.woff2` (self-host, pretendard@1.3.9을 Latin만 남겨 21KB로 줄임. 다른 글자를 쓰면 `scripts/subset-font.sh`를 다시 돌린다) |

- **이탤릭 금지.** 강조는 굵기와 색으로만 한다.
- **밑줄 금지.** 링크도 밑줄 없이 강조색 글자로 표시한다.
- 숫자 번호는 `font-variant-numeric: tabular-nums`.

### Type scale
| 용도 | 크기 | 굵기 / 자간 |
|---|---|---|
| 히어로 제목 | `clamp(56px, 10vw, 128px)`, line-height .98 | 800 / `-0.055em` |
| 히어로 문구 | `clamp(22px, 2.4vw, 30px)` | 650 / `-0.025em` |
| 아코디언 행 | `clamp(24px, 3.2vw, 40px)` | 700 / `-0.035em` |
| 섹션 제목 | `clamp(30px, 3.6vw, 46px)` | 750 / `-0.04em` |
| 제품 이름 | 22px (모바일 17px) | 700 |
| 본문 | 19px (모바일 17px), line-height 1.7 | 400 |
| CTA | 17px | 600 |
| 각주·설명 | 14–15px | 500 |
| 번호·라벨 | 13–15px, 라벨은 대문자 `0.08em` | 600–700 |
| 로고 "olion.dev" | 21px | 800 / `-0.03em` |

### Body measure
- 원칙 본문 최대 폭 `36em`
- 문장 규칙: 한 문장에 하나의 생각, 메타 담화 없음, 주어는 "we"로 통일

## 4. Spacing

- Base unit: `4px`
- Allowed scale: `4 / 8 / 16 / 20 / 24 / 28 / 36 / 40 / 64 / 96`
- Density: `spacious`
- 섹션 위아래: 데스크톱 96px, 모바일(≤760px) 64px
- 콘텐츠 최대 폭 1120px, 좌우 여백 40px(모바일 16px)
- 번호 칸 폭 `--num`: 88px(모바일 44px)

## 5. Radius

- 2px — 포커스 링
- 4px — 아이콘 버튼, 툴팁, 입력창
- 그 이상은 쓰지 않는다(알약형 배지 금지)

## 6. Elevation / shadow

Flat. 그림자는 쓰지 않고 선으로만 구분한다.

## 7. Motion

라이브러리 없이 CSS + 짧은 inline JS로 만든다. `html.motion` 클래스가 있을 때만(=JS 켜짐, 동작 줄이기 꺼짐) 숨김·등장 상태를 건다.

| 장면 | 방식 | 값 |
|---|---|---|
| 첫 진입 | 히어로 단어가 차례로 떠오르고 문구가 따라옴 | CSS `@keyframes`, `translate 0 60%→0`, 0.8s, 단어마다 80ms 지연 |
| 히어로 스크롤 | 스크롤 연동, `position: sticky`로 첫 화면 고정 | 고정 구간 70vh. JS가 스크롤 위치를 `--s`(0–1)로 쓰고 매 프레임 18%씩 따라감. "Software for" opacity → 0.14, "one." `scale` → 1.45 + 색이 `--text`에서 `--accent`로(`color-mix`) |
| 원칙 목록 등장 | IntersectionObserver, 한 번 | `translate 24px→0`, 0.6s, 행마다 60ms, `cubic-bezier(.34,1.4,.64,1)` |
| 제품 목록 등장 | 화면에 들어올 때 한 번 | 위쪽 선이 `clip-path`로 그어지고 행이 왼쪽에서 들어옴 |
| 아코디언 열기 | CSS transition | `grid-template-rows 0fr→1fr` 0.5s, 본문 페이드, `+` 45도 회전 |
| hover·테마 전환 | CSS transition | 0.2–0.3s |

- 공통 easing: `cubic-bezier(.2,.7,.2,1)`
- 금지: 큰 bounce, 패럴랙스, 자동 재생 영상, 반복 재생되는 등장 연출
- `prefers-reduced-motion: reduce`이면 모션을 모두 끄고, 히어로 고정도 풀고, transition도 없앤다.
- 색은 JS로 직접 넣지 않는다. 테마를 바꿔도 따라가도록 CSS 변수로 섞는다.
- 진입 애니메이션은 `translate`, 스크롤 확대는 `scale` 속성으로 나눠서 서로 덮어쓰지 않게 한다.

## 7a. Container strategy

- **Strategy**: `divider`
- 섹션·목록의 시작: 2px `--rule-strong`
- 행 사이: 1px `--rule`
- 카드(배경이나 테두리로 감싼 박스)는 쓰지 않는다.

## 7b. Icon system

- **Set**: `lucide`, inline SVG
- **Stroke**: 1.5, round cap/join
- **Size**: 20px 아이콘, 36px 클릭 영역
- **Color**: `--text-2`, hover 시 `--accent`
- **사용처**: 상단바에만 쓴다. Principles(book-open), Contact(mail), 테마 전환(moon / sun)
- 아이콘만 있는 버튼에는 `aria-label`을 달고, 마우스 기기에서는 hover 시 같은 이름의 툴팁을 띄운다(`@media (hover: hover)`).
- CTA 끝의 `→`, 아코디언의 `+`는 아이콘이 아니라 글자로 넣는다.

## 7c. Decoration

| Surface | Gradients | Textures | Motifs |
|---|---|---|---|
| Marketing landing | none | none | none — 타이포그래피만 |

## 8. Component conventions

### 상단바
- sticky, 높이 60px, 아래 2px `--rule-strong`
- 왼쪽: 로고 "olion.dev"(맨 위로 이동), 오른쪽: 아이콘 버튼 3개

### 링크 / CTA
- 링크: `--accent`, weight 600, 밑줄 없음. hover 시 `--accent-hover`
- CTA: 텍스트 링크, 끝에 `→`. 꽉 찬 색 버튼은 쓰지 않는다.
- 포커스: `2px solid --accent` outline, offset 3px, radius 2px
- 연락처: `hello@olion.dev` (소식 받기도 메일 링크)

### 아코디언 (원칙)
- 행: 번호 | 제목 | `+`. 버튼 전체가 클릭 영역, `aria-expanded`와 `aria-controls`
- 한 번에 하나만 열린다. 처음에는 00이 열려 있다.
- 열린 행: 제목·번호·`+`가 `--accent`, `+`는 45도 회전해 `×`
- 닫힌 패널은 `inert`로 포커스에서 뺀다.
- `?open=N`으로 특정 원칙을 연 상태로 열 수 있다.
- 오해 방지 문장(`p.not`, 마크다운의 `>` 줄): 본문 아래 1px 선, 15px 650 `--text-2`

### 제품 목록
- 이름(22px 700) + 한 줄 설명(14px `--text-2`) | 오른쪽에 "Coming soon"(13px `--muted`)

### Inputs (아직 없음)
- 이메일 수집 폼을 붙일 때: 배경 없음, 1px `--rule` 테두리, radius 4px, 16px 글자, padding 12px
- focus: 테두리 `--text` + 포커스 링, error: 테두리 error 색 + 입력창 아래 오류 문구
- 성공·실패·전송 중 상태를 모두 정의한 뒤 붙인다.

## 9. Surfaces

- **Landing** (`site/index.html`): 상단바 → 히어로("Software for one." + 문구 + Get updates) → Principles 아코디언 00–06 → What we're making → 푸터(© 2026 olion.dev, hello@olion.dev)
- 그 밖의 화면: 아직 없다.

## 10. Anti-patterns for this project

- 제품 스크린샷, 기능 상세, 출시일 약속
- 카드 격자, 그림자, 둥근 알약형 배지
- 밑줄, 이탤릭, 명조
- 강조색으로 넓은 면을 칠하거나 강조색을 하나 더 추가하기
- 그라데이션 배경, 3D 일러스트, 흔한 "AI" 연출(빛나는 구체, 반짝이 아이콘)
- 긴 설명 문단. 원칙 하나는 3–4문장 안에서 끝낸다.
- 외부 CDN에 의존하는 글꼴·스크립트, 무거운 애니메이션 라이브러리

## 11. Open questions

- 소식 받기: 지금은 hello@olion.dev 메일 링크. 이메일 수집 폼을 둘지
- 제품 이름 "Backtest"의 상표·검색 구분 문제
- 커스텀 도메인 olion.dev 연결 (`make deploy`는 `olion-dev.<계정>.workers.dev`에 올린다)
