# EasyRabbitSolutions 3D Landing Page

High-performance startup landing page built with:

- Next.js (App Router)
- React Three Fiber + @react-three/drei
- Tailwind CSS
- Framer Motion
- Lucide React

## 1) Setup Commands

```bash
npm install
npm run dev
```

App runs at http://localhost:3000.

## 2) Project Structure

```text
src/
	app/
		globals.css
		layout.js
		loading.js
		page.js
	components/
		hero/
			Hero3D.js
		layout/
			Navbar.js
		sections/
			ServicesSection.js
			ProcessSection.js
			PortfolioSection.js
			ContactSection.js
		services/
			ServiceCard.js
		three/
			SceneCanvas.js
			AbstractScene.js
		ui/
			SectionHeading.js
	lib/
		content.js
		device.js
		utils.js
Dockerfile
docker-compose.yml
tailwind.config.js
```

## 3) Where To Customize Content

- Update headline, tagline, CTA labels in `src/lib/content.js`.
- Replace service offerings in `src/lib/content.js`.
- Replace process steps and portfolio case studies in `src/lib/content.js`.
- Replace contact details and real submission endpoint in `src/components/sections/ContactSection.js`.
- Replace temporary logo marker in `src/components/layout/Navbar.js`.

## 4) 3D Scene Setup and Performance

- Main scene entry: `src/components/hero/Hero3D.js`.
- Canvas wrapper and rendering config: `src/components/three/SceneCanvas.js`.
- Geometry, lighting, interaction animation: `src/components/three/AbstractScene.js`.
- Low-power fallback hook: `src/lib/device.js`.

Current optimization strategy:

- Dynamic import for Canvas component.
- Reduced DPR and demand-based frame loop on constrained devices.
- Mobile/reduced-motion/low-power gradient fallback in Hero.
- `output: "standalone"` in Next config for lean deployment images.

## 5) Build and Run (Production)

```bash
npm run build
npm run start
```

## 6) Docker Deployment (Self-Hosted)

Build image:

```bash
docker build -t easyrabbit-landing .
```

Run container:

```bash
docker run -p 3000:3000 --name easyrabbit-web easyrabbit-landing
```

Or with compose:

```bash
docker compose up --build
```

## 7) Notes

- Contact form is UI-only by default and ready to wire to your API/CRM.
- The page includes placeholders for real services, team/process details, portfolio proof, and brand assets.
