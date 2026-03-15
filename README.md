# Music Academy UI

A modern, responsive music academy website built with React and Vite, featuring a beautiful gradient design and smooth animations.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with gradient effects and glass morphism
- **Smooth Animations**: Engaging animations and transitions throughout
- **Course Catalog**: Showcase of various music courses including Piano, Guitar, Vocals, Drums, and more
- **Instructor Profiles**: Meet the expert instructors section
- **Navigation**: Smooth scroll navigation with fixed header

## Tech Stack

- **React 19.2.0**: Modern React with hooks
- **Vite 7.2.4**: Fast build tool and dev server
- **Tailwind CSS 4.1.18**: Utility-first CSS framework
- **Google Fonts**: Poppins and Playfair Display fonts

## Project Structure

```
src/
├── components/
│   └── MusicAcademy/
│       ├── MusicAcademy.jsx    # Main container component
│       ├── Header.jsx           # Navigation header
│       ├── Hero.jsx             # Hero section with CTA
│       ├── Courses.jsx          # Courses grid section
│       ├── Instructors.jsx      # Instructors profiles
│       └── Footer.jsx           # Footer with links
├── index.css                    # Global styles and component styles
└── main.jsx                     # App entry point
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to view the application.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Components Overview

### Header
- Fixed navigation bar with smooth scroll links
- "Enroll Now" call-to-action button
- Responsive mobile menu

### Hero Section
- Eye-catching headline with gradient text
- Dual call-to-action buttons
- Animated floating music notes

### Courses Section
- Grid layout of 6 music courses
- Course cards with icons, descriptions, and details
- Hover effects and animations
- Courses include: Piano, Guitar, Vocals, Drums, Music Theory, and Violin

### Instructors Section
- Grid layout of instructor profiles
- Avatar placeholders with initials
- Instructor specialties and experience
- Professional bio descriptions

### Footer
- Multi-column layout with sections:
  - About Music Academy
  - Quick links
  - Contact information
  - Social media links

## Design Features

- **Color Scheme**:
  - Primary: Indigo (#6366f1)
  - Secondary: Pink (#ec4899)
  - Accent: Amber (#f59e0b)
  - Dark backgrounds with gradient overlays

- **Typography**:
  - Headings: Playfair Display (serif)
  - Body: Poppins (sans-serif)

- **Effects**:
  - Glass morphism cards
  - Gradient text and buttons
  - Smooth hover transitions
  - Floating animations

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive breakpoints for mobile, tablet, and desktop

## License

MIT

## Contributing

Feel free to submit issues and enhancement requests!
