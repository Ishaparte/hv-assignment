Below is the cleaned and professional **README.md** without emojis.

---

# Paisana Homepage – Next.js + Sanity CMS

This project is a fully CMS-driven homepage inspired by the design and layout of Paisana Studio.
The website is built with **Next.js (App Router)** and **Sanity CMS**, featuring scroll-based animations, responsive layouts, and modular components.

---

## Features

* Editable content through Sanity CMS (Hero, Solutions, Plans, Footer).
* Dynamic rendering using GROQ queries.
* Scroll fade and blur animations using Framer Motion.
* Fully responsive across desktop, tablet, and mobile.
* Sanity Image CDN integration for optimized media delivery.
* Clean, component-based architecture.

---

## Tech Stack

| Technology            | Purpose                            |
| --------------------- | ---------------------------------- |
| Next.js (App Router)  | Frontend framework and routing     |
| Sanity CMS v3         | Headless content management system |
| GROQ                  | Query language for CMS data        |
| Framer Motion         | Scroll animations and transitions  |
| CSS                   | Styling and responsive design      |
| Intersection Observer | Scroll detection logic             |

---

## Project Structure

```
root/
│
├── sanity.config.js
├── /sanity/
│   ├── schemaTypes/
│   │   ├── hero.js
│   │   ├── solutions.js
│   │   ├── plan.js
│   │   ├── footer.js
│
├── /src/app/
│   ├── page.js
│   ├── /components/
│   │   ├── Hero.jsx
│   │   ├── Section.jsx
│   │   ├── Plans.jsx
│   │   ├── Footer.jsx
│   │   └── ScrollFadeWrapper.jsx
│   ├── /styles/
│   │   ├── hero.css
│   │   ├── section.css
│   │   ├── plans.css
│   │   └── footer.css
│   ├── /api/sanity/
│       └── fetchData.js
```

---

## Sanity Setup Instructions

1. Install Sanity CLI globally:

```bash
npm install -g sanity
```

2. Initialize Sanity (if not already created):

```bash
sanity init
```

3. Add schema files inside:

```
sanity/schemaTypes/
```

4. Run Sanity Studio:

```bash
npm run sanity
```

This opens the CMS interface where you can manage:

* Hero content
* Solutions section
* Plan entries (Standard, Pro, Premium)
* Footer details

---

## Running the Project Locally

1. Install dependencies:

```bash
npm install
```

2. Create an environment file:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_token_here
```

3. Run the development server:

```bash
npm run dev
```

The site will be available at:

```
http://localhost:3000
```

---

## How Data Fetching Works

All content for the homepage is fetched via:

```
src/app/api/sanity/fetchData.js
```

Each section is retrieved with a GROQ query:

* Hero
* Solutions
* Plans (sorted manually: Standard → Pro → Premium)
* Footer

The data is passed into components through `page.js`.

---

## Scroll Animation Logic

The file:

```
ScrollFadeWrapper.jsx
```

controls scroll-based fade and blur effects using:

* Intersection Observer
* Framer Motion animations

Each section (Hero, Solutions, Plans, Footer) is wrapped with this component.

---

## Responsive Design

All styling files use responsive breakpoints for:

* Large desktop screens
* Tablets
* Small mobile devices

Ensuring the layout adjusts cleanly without breaking functionality.

---

## Deployment

This project can be deployed on:

* Vercel (recommended for Next.js)
* Netlify
* Any platform that supports Node.js applications

For Sanity CMS deployment, use:

```bash
sanity deploy
```

---



If you want, I can also generate a **PROJECT OVERVIEW PDF**, **API Documentation**, or **Sanity Content Editing Guide**.
