# olion Design Specification

> `oiloil-ui-ux-guide`의 `design` 상담으로 정했다 (2026-10-08).
> Style family: `editorial` 기반, 글꼴은 Pretendard 단일로 바꿈.

## 1. Design direction

- **Product**: olion(olion.dev) 회사 랜딩페이지. 개인의 하루에 맞춘 도구를 만드는 회사를 소개하고 소식을 받을 사람을 모은다.
- **Concept**: 정체성은 "한 사람을 위한 소프트웨어", 메인 카피는 "좋아하는 일엔 더 오래, 귀찮은 일은 맡기세요". 제품 예시는 "당신이 하는 일 / 맡겨도 되는 일"로 나눠 보여준다.
- **Products**: 이름과 화면을 공개하지 않는다. 다루는 영역만 보이고 모두 "준비중"으로 표시한다.
- **Style family**: `editorial`(미색 바탕, 선으로 나누는 구획, 넉넉한 여백, 절제된 강조색). 단, 명조 대신 **Pretendard 하나만** 쓴다(사용자 결정). 명조가 빠진 만큼 잡지 느낌은 굵은 가로선, 크기 대비, 여백으로 낸다.
- **References**: 없음. 스타일 비교 페이지에서 C(잡지 같은 편집)를 골랐다.
- **Tone**: 차분함, 단정함, 사람 중심
- **Hard constraints**: 다크 모드 지원, 모바일 대응(16px 좌우 여백, 가로 스크롤 없음), 본문 텍스트 WCAG AA 대비
- **Locale**: primary `en` (2026-10-08 영어로 변경), secondary 없음

## 2. Color

### Brand
- `--color-primary`: `#a3301f` — 짙은 빨강. 링크, CTA 글자, 작은 라벨, 비교표 라벨에만 쓴다. 면(배경)으로 깔지 않는다. 대비 6.7:1
- `--color-primary-hover`: `#7f2517`
- `--color-primary-subtle`: `#f4e6e2` — 선택 영역(::selection) 정도에만
- `--color-secondary`: N/A — 강조색은 하나만 쓴다

### Neutrals (따뜻한 회색 쪽)
- `--color-bg`: `#fbfaf7`
- `--color-surface`: N/A — 면을 나누지 않고 선으로 나눈다
- `--color-rule-strong`: `#161513` — 섹션·표 시작의 2px 굵은 선
- `--color-border`: `#d8d3c9` — 1px 얇은 구분선
- `--color-text`: `#161513` (17.5:1)
- `--color-text-secondary`: `#5e5a53` (6.6:1)
- `--color-text-muted`: `#757068` (4.7:1) — "준비중", 각주, 보조 라벨

### Semantic
- `--color-success`: `#2f6b3f`
- `--color-warning`: `#8a5a00`
- `--color-error`: `#b42318` — 강조색과 색이 비슷하므로 오류는 색만으로 알리지 않고 항상 문구를 함께 쓴다
- `--color-info`: `#1f4e79`

### Dark mode
시스템 설정을 따르고, 수동 전환도 지원한다(`data-theme="light|dark"`).

- `--color-bg`: `#151412`
- `--color-rule-strong`: `#ecebe7`
- `--color-border`: `#3a3833`
- `--color-text`: `#ecebe7` (15.4:1)
- `--color-text-secondary`: `#a8a49c` (7.4:1)
- `--color-text-muted`: `#8c887f` (5.2:1)
- `--color-primary`: `#e27a64` (6.3:1) — 어두운 바탕에서 읽히도록 밝힌 빨강
- `--color-primary-hover`: `#ec9682`
- `--color-primary-subtle`: `#3a201b`
- `--color-success`: `#6fbf87` · `--color-warning`: `#e0b25a` · `--color-error`: `#f08a7e` · `--color-info`: `#7fb2e5`

## 3. Typography

| Role | Font | Weights | Source |
|---|---|---|---|
| Heading | Pretendard | 700, 800 | jsDelivr `orioncactus/pretendard@v1.3.9` (static) 또는 self-host |
| Body | Pretendard | 400, 500, 600 | 동일 |
| Mono | N/A | — | 코드 샘플이 없음 |

- **이탤릭 금지.** 강조는 굵기와 색으로만 한다.
- **밑줄 금지.** 링크도 밑줄 없이 강조색 글자로 표시한다(§8).
- 한국어 줄바꿈: `word-break: keep-all`.

### Type scale (px)
12 / 13 / 14 / 16 / 18 / 20 / 28 / 36 / 48 / 60

- Hero 제목: `clamp(36px, 6vw, 60px)`, 700, letter-spacing `-0.03em`, line-height 1.2
- 섹션 제목: 28px, 700, `-0.02em`
- 리드 문단: 18px, `--color-text-secondary`
- 본문: 16px / 라벨: 12–13px, 600, letter-spacing `0.06–0.08em`

### Body measure
- 리드·본문 문단 최대 폭 `34em`(한글 기준 한 줄 약 34자)
- Line-height: 본문 1.7, 제목 1.2–1.3

## 4. Spacing

- Base unit: `4px`
- Allowed scale: `4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96`
- Density: `spacious`
- 섹션 위아래: 데스크톱 96px, 모바일(≤600px) 64px
- 콘텐츠 최대 폭 960px, 좌우 여백 24px(모바일 16px)
- 스케일 밖의 값은 코드 주석에 이유를 적는다.

## 5. Radius

- `--radius-sm`: `2px` — 포커스 링
- `--radius-md`: `4px` — 작은 버튼(테마 전환 등), 입력창
- `--radius-lg`: N/A — 큰 둥근 모서리는 쓰지 않는다
- `--radius-full`: 쓰지 않는다(알약형 배지 금지)

## 6. Elevation / shadow

Flat. 그림자는 쓰지 않고 선으로만 구분한다.

## 7. Motion

- Vocabulary: `minimal`
- 상태 변화(hover, 테마 전환): 200ms
- 섹션 등장: 600ms, opacity 0→1 + translateY 8px→0, 한 번만 실행
- Easing: `ease`
- Allowed: fade, fade + 짧은 translate
- Forbidden: bounce, 패럴랙스, 자동 재생 영상, 스크롤을 붙잡는 연출
- `prefers-reduced-motion: reduce`이면 등장 애니메이션 없이 바로 보인다.

## 7a. Container strategy

- **Strategy**: `divider`
- 섹션 사이: 1px `--color-border`
- 표·목록·비교 블록의 시작: 2px `--color-rule-strong`
- 블록 안 칸 나누기: 세로 1px `--color-border`
- 카드(배경이나 테두리로 감싼 박스)는 쓰지 않는다.

## 7b. Icon system

- **Set**: `lucide` (필요할 때만)
- **Weight**: `regular` (stroke 1.5)
- **Treatment**: `monochrome`, `currentColor`
- **Sizes**: 16 / 20px
- 기본은 아이콘 없이 글자로 해결한다. CTA 끝의 `→`는 글자로 넣는다.

## 7c. Decoration

| Surface | Gradients | Textures | Motifs |
|---|---|---|---|
| Marketing landing | none | none | 미정 — `oil-ui` 시안 단계에서 정한다 (§11) |

## 8. Component conventions

### 링크 / CTA
- 본문 링크: `--color-primary`, weight 600, 밑줄 없음. hover 시 `--color-primary-hover`
- 주 CTA: 텍스트 링크 형태. `--color-primary`, 16px, weight 600, 끝에 `→`. 화살표가 누를 수 있다는 신호이므로 빼지 않는다.
- 꽉 찬 색 버튼은 쓰지 않는다.
- 포커스: `2px solid --color-primary` outline, offset 3px, radius 2px

### 작은 버튼 (테마 전환 등)
- 배경 없음, 1px `--color-border`, 글자 `--color-text-secondary`, 13px, padding 4px 10px, radius 4px
- hover: 글자와 테두리를 `--color-text`로

### Inputs
- 이메일 수집 폼을 붙일 때: 배경 없음, 1px `--color-border` 테두리, radius 4px, 16px 글자, padding 12px
- focus: 테두리 `--color-text` + 포커스 링
- error: 테두리 `--color-error` + 입력창 아래 오류 문구(무엇이 문제인지와 고치는 방법)
- 성공·실패·전송 중 상태를 모두 정의한 뒤 붙인다.

### "준비중" 표시
- `--color-text-muted`, 13px, 배경·테두리 없는 글자. 이탤릭 금지.

### Cards
쓰지 않는다. 묶음은 §7a의 선으로 표현한다.

## 9. Surfaces

- **Marketing landing**: 위 규칙을 지킨다. 섹션 구성, 첫 화면 구성, 주 시각 요소는 `oil-ui`로 2–3개 방향을 비교해 정한다.
- Dashboard / Form / Long-form content: N/A — 아직 없는 화면이다.

## 10. Anti-patterns for this project

- 제품 이름, 스크린샷, 기능 상세를 노출하지 않는다.
- 카드 격자, 그림자, 둥근 알약형 배지
- 밑줄, 이탤릭, 명조
- 강조색으로 넓은 면을 칠하거나 강조색을 하나 더 추가하기
- 그라데이션 배경, 3D 일러스트, 흔한 "AI" 연출(빛나는 구체, 반짝이 아이콘)
- "AI가 다 해드립니다" 같은 과장 문구. 실제 제품에서 맡기는 일은 계산·정리·기억 같은 구체적인 일로 쓴다.

## 11. Open questions

- 랜딩의 섹션 구성과 첫 화면 시각 요소(이미지·일러스트·타이포만) — `oil-ui` 단계
- 섹션 제목과 문구 확정
- 소식 받기 방식: 지금은 hi@olion.dev 메일 링크. 이메일 수집 폼을 둘지
- 로고: 지금은 Pretendard 800 글자 "olion"
