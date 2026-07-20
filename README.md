# Zero to One Company — Premium Landing (v2)

Zero to One Company의 기존 홈페이지([zero-to-one-landing](https://karma7000.github.io/zero-to-one-landing/index.html))를
글로벌 B2B 컨설팅펌 수준으로 리뉴얼한 프로젝트입니다.

> **기존 홈페이지는 그대로 운영됩니다.** 이 프로젝트는 별도 폴더/저장소로 완전히 독립되어 있으며, 기존 `zero-to-one-landing`은 백업 겸 현재 운영 사이트로 유지됩니다.

---

## 1. 무엇이 달라졌나

| 항목 | 기존 (v1) | 신규 (v2) |
|---|---|---|
| 디자인 톤 | 오렌지·크림 캐주얼 톤 | Navy·Blue·Gray·White 기반 글로벌 컨설팅펌 톤 |
| 서비스 구조 | 텍스트 나열 | 3대 서비스 축 + 카드 UI + 프로세스 플로우차트 + 국가/플랫폼 칩 |
| 신뢰 신호 | About 페이지에 매몰 | 홈 히어로 상단에 즉시 노출 (경력·프레임워크) |
| 애니메이션 | 없음 | Sticky header, Scroll reveal, Hover, Smooth scroll |
| 코드 구조 | 단일 CSS 파일 | `css/`, `js/`, `assets/` 분리 |
| SEO | meta 최소 | OG/Twitter 카드, JSON-LD, sitemap.xml, robots.txt |
| 접근성 | 이모지 아이콘, 낮은 대비 | Semantic HTML, skip link, aria 속성, SVG 아이콘 |
| 기능 | 카카오톡/전화/이메일 링크 | **동일 링크 100% 유지** (변경 없음) + AI 진단 서비스 연동 |
| 스크롤 성능 | nav에 `backdrop-filter` 상시 적용, 카드 hover에서 `box-shadow` 직접 애니메이션 | `backdrop-filter` 제거(불투명 배경), 카드 그림자는 opacity 트랜지션 pseudo-element로 전환, scroll 리스너 rAF 쓰로틀링 |

기존 사이트에 없던 정보(마켓플레이스 플랫폼별 세부 서비스, 9개국 B2B 진출 서비스 목록, 글로벌 비즈니스 자문 항목)는
실제 사업 범위를 기반으로 구조화하여 추가했으며, 허위 실적·고객사·수치는 일체 포함하지 않았습니다.

### AI 해외진출 진단 서비스 연동

Zero to One Company가 별도로 운영 중인 **AI 해외진출 진단 서비스**([zero-to-one-ai-report.vercel.app](https://zero-to-one-ai-report.vercel.app), 저장소: `karma7000/zero-to-one-ai-report`)를
`ai-diagnosis.html` 신규 페이지와 홈/서비스/문의 페이지 곳곳에 연결했습니다.

- 국가·제품 정보를 입력하면 AI가 해외진출 매력도·이커머스/오프라인 채널·사업성을 분석 (건당 20,000원, Toss Payments 결제)
- 정식 컨설팅과의 관계를 "AI 진단(빠른 자가진단) → 정식 컨설팅(심층 실행 파트너십)"으로 명확히 구분해 안내
- 리포트 예시 화면(매력도 스코어·채널 적합도 바)은 실제 수치가 아닌 **UI 설명용 목업**이며, 실제 예시 리포트는 [샘플 리포트](https://zero-to-one-ai-report.vercel.app/sample) 링크로 직접 확인 가능

> 이 AI 서비스는 별도 Next.js 프로젝트로 이미 배포되어 있으며, 이 저장소(v2 정적 사이트)의 일부가 아닙니다. 링크로만 연결됩니다.

---

## 2. 폴더 구조

```
zero-to-one-premium/
├── index.html            # 홈
├── about.html             # 회사소개 (Philosophy·Vision·Value, CEO 프로필, GRS)
├── services.html          # 서비스 3대 축 + 3단계 프로세스 + 5단계 로드맵
├── ai-diagnosis.html      # AI 해외진출 진단 서비스 소개 + 외부 앱 연결
├── contact.html           # 문의 채널 + 상담 플로우 + FAQ
├── 404.html                # GitHub Pages 커스텀 404
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css          # 디자인 시스템 (CSS 변수 기반)
├── js/
│   └── main.js             # sticky header, mobile nav, scroll reveal(rAF), FAQ 아코디언
└── assets/
    ├── favicon.svg
    └── images/
        ├── og-cover.png       # 소셜 공유 미리보기 이미지
        └── business-card.png  # 실제 명함 (about.html CEO 프로필에 노출)
```

- **의존성 없음**: 순수 HTML/CSS/JS. 빌드 도구, 패키지 매니저, 프레임워크 불필요.
- 폰트는 Pretendard를 CDN(jsDelivr)에서 로드합니다 (`font-display: swap` 적용).

---

## 3. 로컬에서 확인하기

별도 서버 없이 `index.html`을 브라우저로 열어도 되지만, 상대경로/캐시 이슈를 피하려면 간단한 로컬 서버 사용을 권장합니다.

```bash
# Python이 설치되어 있다면
cd zero-to-one-premium
python -m http.server 5500
# → http://localhost:5500 접속

# 또는 VS Code의 Live Server 확장 사용
```

---

## 4. GitHub Pages 배포 방법

### 방법 A — 새 저장소로 배포 (권장)

1. GitHub에서 새 저장소 생성 (예: `zero-to-one-premium`)
2. 로컬에서 이 폴더를 저장소에 연결하고 푸시

   ```bash
   cd zero-to-one-premium
   git init
   git add .
   git commit -m "Initial commit: Zero to One premium landing v2"
   git branch -M main
   git remote add origin https://github.com/karma7000/zero-to-one-premium.git
   git push -u origin main
   ```

3. GitHub 저장소 → **Settings → Pages**
4. **Source**를 `Deploy from a branch`로 설정
5. **Branch**를 `main` / `/(root)`로 선택 후 **Save**
6. 1~2분 후 `https://karma7000.github.io/zero-to-one-premium/` 에서 접속 가능

### 방법 B — 기존 계정에 브랜치로 추가

같은 저장소 내에서 별도 브랜치(`v2` 등)로 관리하고 싶다면, Pages 소스를 해당 브랜치로 지정하면 됩니다.
단, 이 경우 기존 v1 배포와 URL이 겹치지 않도록 **반드시 별도 저장소 또는 별도 경로**를 사용하세요.

> ⚠️ 기존 `zero-to-one-landing` 저장소의 `main` 브랜치나 Pages 설정은 절대 변경하지 마세요. v1은 계속 별도로 운영됩니다.

### 배포 후 체크리스트

- [ ] 4개 페이지(index/about/services/contact) 모두 정상 로드
- [ ] 카카오톡 상담 버튼 → `https://open.kakao.com/o/sWDRY35h` 정상 연결
- [ ] 전화 버튼 → `tel:010-2314-6335` 동작
- [ ] 이메일 버튼 → `mailto:karma700@naver.com` 동작
- [ ] 모바일 뷰에서 햄버거 메뉴 동작
- [ ] `sitemap.xml`, `robots.txt`의 URL을 실제 배포 도메인에 맞게 확인/수정

---

## 5. 콘텐츠 수정 가이드

- **문구/서비스 항목 수정**: 각 HTML 파일에서 직접 텍스트 수정 (템플릿 엔진 없음)
- **색상/타이포 등 디자인 토큰 수정**: `css/style.css` 최상단 `:root { ... }` 변수만 수정하면 전체 사이트에 반영됩니다.
- **카카오톡/연락처 변경**: `https://open.kakao.com/o/sWDRY35h`, `010-2314-6335`, `karma700@naver.com` 문자열을 전체 파일에서 검색·치환하세요.

---

## 6. 성능·품질 목표

- Lighthouse Performance/Accessibility/Best Practices/SEO 90점 이상을 목표로 설계
- Semantic HTML(`header`, `nav`, `main`, `section`, `footer`), `aria-*` 속성, `skip-link` 적용
- 이미지 1장(OG 이미지) 외 전 그래픽 요소는 SVG로 처리하여 용량 최소화
- `prefers-reduced-motion` 대응 (모션 최소화 사용자 배려)
