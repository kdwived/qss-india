# Image inventory and sources

Reviewed 19 October 2026. Existing routes, metadata and service text are preserved.

## Navigation inventory

Services overview: `/services`.
Detail pages: `/services/government-outsourcing`, `/services/security-services`, `/services/hospitality`, `/services/housekeeping`, `/services/manpower-outsourcing`, `/services/event-security`, `/services/office-administration`.

Security overview: `/security`, with existing anchors `#guards`, `#supervisors`, `#bouncers`, `#event`, `#residential`, `#commercial`, `#surveillance`, `#emergency`. There are no separate bodyguard, PSO or industrial-security routes in either dropdown.

## Local images selected

- Homepage: all three original PNG banners in `public/new qss/hero/`. Full graphics use contain within an 8:3 frame; CTA sits below the artwork. First image has high fetch priority; subsequent banners low fetch priority. Continuous 4.5-second rotation, 1-second crossfade, decoded-image readiness and reduced-motion support.
- Services overview: uniformed guards (11.59.35 AM), team formation (11.39.52 AM), and the cleaning, reception, workforce and administration images below.
- Security detail: team formation (11.39.52 AM), guards (11.59.35 AM), `pso.jpeg`, entrance guards (12.07.58 PM), CCTV and fire training.
- Event detail: `event security.jpeg` and `bouncer.jpeg`.
- Manpower detail: team formation (11.39.52 AM), representing an actual QSS deployment.
- Security divisions: guards (11.59.35 AM), officers (11.48.30 AM), `bouncer.jpeg` and `personal bodyguard.jpeg` for the existing VIP/close-protection content, `event security.jpeg`, entrance guards (12.07.58 PM), commercial formation (11.39.52 AM), CCTV and fire training.

All abbreviated times above refer to `WhatsApp Image 2026-10-17 at <time>.jpeg` in the original `public/new qss/` folder. Original local files were not renamed or moved.

## External photographs

Downloaded from each Pexels photo page using its Free download link. Locally resized to a maximum 1600px edge, EXIF orientation corrected and converted to WebP at quality 82. Sources are real photographs, visually inspected. No live remote image URLs are used at runtime.

Pexels license: https://www.pexels.com/license/ (free website/commercial use and modification permitted; no endorsement implied). These are illustrative service photographs, not claims that the stock subjects are QSS employees, government clients or QSS premises.

- `public/images/services/housekeeping-cleaning.webp`: Tima Miroshnichenko, https://www.pexels.com/photo/cleaners-cleaning-the-tiled-floor-6195278/ — housekeeping detail and overview.
- `public/images/services/hospitality-reception.webp`: Quang Nguyen Vinh, https://www.pexels.com/photo/receptionist-behind-the-front-desk-in-a-luxurious-hotel-14036250/ — hospitality detail and overview.
- `public/images/services/office-administration.webp`: Mizuno K, https://www.pexels.com/photo/people-working-on-computers-in-an-office-12903173/ — office administration detail and overview.
- `public/images/services/workforce-planning.webp`: fauxels, https://www.pexels.com/photo/working-in-front-of-the-computer-3184355/ — government outsourcing support-staff illustration and overview.
- `public/images/services/surveillance-cameras.webp`: Giant Asparagus, https://www.pexels.com/photo/cctv-surveillance-camera-on-urban-wall-37591157/ — surveillance division and security detail capability.
- `public/images/services/fire-safety-training.webp`: Alejandro Quinonez, https://www.pexels.com/photo/men-with-fire-extinguisher-16894598/ — emergency response division and security detail capability.

No missing image assets remain for the existing dropdown pages. The government photograph illustrates the computer-operator/support role, not a government location. Industrial security is mentioned within existing commercial/security content; no new service or route was created.

## Responsive verification

Layout bounds and broken loaded-image checks passed on 20 page templates at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920px (180 combinations). Includes all dropdown routes and a representative district page, rather than all generated district routes individually. Mobile accordion links, desktop toggle/keyboard Escape behavior, tablet menu/header alignment, and mobile anchor navigation were checked in the browser. No forms were submitted.

Production verification: Next.js production build completed successfully, including lint/type validation and all 102 static pages. Build output was isolated with `QSS_BUILD_DIR=.next/production-check` to avoid the running dev server output. Standalone lint passed with no warnings or errors. Initial sandboxed font requests failed; the successful build used permitted network access for the existing Google Fonts.

Remaining preview issue: the in-app development browser still reports an extra `style` attribute on `body` during hydration. The server-rendered HTML has no body style attribute. The navbar no longer mutates body styling on initial mount; the warning was also observed before that correction. It is not a broken image or production build error, and it has not been suppressed.
