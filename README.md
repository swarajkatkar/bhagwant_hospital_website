# Shree Bhagwant Superspeciality Hospital - React + Tailwind CSS

A modern, fully responsive hospital website built with React and Tailwind CSS. This project converts a static HTML/CSS/JavaScript codebase into a scalable React component architecture while maintaining the exact same design.

## 🎯 Features

- ✅ **React Components**: Modular, reusable component structure
- ✅ **Tailwind CSS**: Utility-first CSS framework for styling
- ✅ **Responsive Design**: Mobile-first approach, works on all devices
- ✅ **Interactive Features**:
  - Sticky header with scroll effects
  - Day/Night theme toggle in hero section
  - Modal dialogs for doctor profiles
  - Lightbox gallery with keyboard navigation
  - Contact form with validation
  - Smooth scroll navigation
  - Back-to-top button
  - Mobile-responsive menu

- ✅ **Sections**:
  - Header with Navigation
  - Hero Section with CTA
  - Quick Highlights
  - About Us
  - Doctors with Profiles
  - Services/Departments
  - Facilities Gallery
  - Image Gallery with Lightbox
  - Contact Form with Map
  - Footer with Links

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header with mobile menu
│   ├── Hero.jsx            # Hero section with day/night toggle
│   ├── Highlights.jsx      # Core specialties showcase
│   ├── About.jsx           # About hospital section
│   ├── Doctor.jsx          # Doctors with modals
│   ├── Services.jsx        # Services/departments
│   ├── Facilities.jsx      # Hospital facilities grid
│   ├── Gallery.jsx         # Image gallery with lightbox
│   ├── Contact.jsx         # Contact form + info
│   └── Footer.jsx          # Footer with links
├── App.jsx                 # Main app component
├── index.js                # React entry point
└── index.css               # Global styles & Tailwind

public/
├── index.html              # HTML template
└── images/                 # Image assets

tailwind.config.js          # Tailwind customization
postcss.config.js           # PostCSS configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone/Navigate to the project**:
```bash
cd /Users/swaraj.k/Desktop/Bhagawant_superspeciality_hospital
```

2. **Install dependencies**:
```bash
npm install
```

3. **Copy image assets** (if moving from old project):
```bash
# Make sure images folder exists in public/
cp -r images public/
```

4. **Start development server**:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#0B5ED7',
  'primary-dark': '#0848B0',
  'primary-light': '#EBF2FF',
  'text-dark': '#1A1A2E',
  'text-body': '#4A5568',
}
```

### Fonts
The project uses the **Inter** font family from Google Fonts (already integrated).

### Content
Update component content in each file in `src/components/`:
- Edit text, headings, descriptions
- Update phone numbers, addresses
- Modify doctor information
- Change service descriptions

## 🔧 Key Component Features

### Header
- Sticky navigation bar
- Responsive mobile menu
- Logo and branding
- Call-to-action button
- Automatic color switching on scroll

### Hero
- Full-height hero section
- Day/night theme toggle with background transitions
- Call and directions CTAs
- Scroll indicator animation

### Doctors Section
- Half modal dialog system
- Doctor profiles with qualifications
- Reactive state management
- Smooth animations

### Gallery
- Image grid layout
- Lightbox viewer
- Keyboard navigation (arrow keys, escape)
- Image counter and captions
- Lazy loading

### Contact Form
- Input validation
- Success confirmation message
- Responsive layout
- Embedded Google Map

### Footer
- Back-to-top button
- Contact information
- Quick links
- Social media links
- Operating hours

## 📱 Responsive Breakpoints

The design uses Tailwind's standard breakpoints:
- `sm`: 640px (tablets)
- `md`: 768px (small laptops)
- `lg`: 1024px (desktops)
- `xl`: 1280px (large screens)

## 🎯 Performance Optimizations

- Image lazy loading (`loading="lazy"`)
- Intersection Observer for scroll animations
- CSS transitions instead of JS animations
- Component splitting for better modularity
- Tailwind CSS tree-shaking for smaller bundle

## 📞 Contact Information

**Shree Bhagwant Superspeciality Hospital**
- 📍 Gate No. 634, Bhagwant Colony, Barshi – 413401, Solapur
- 📞 70579 93990 (Primary) | 77208 58586 (Secondary) | (02184) 226231
- 🕐 Emergency: 24/7 | OPD: 9 am – 6 pm

## 📄 License

This project is proprietary and created for Shree Bhagwant Superspeciality Hospital.

## 🔄 Migration Notes

This React version maintains 100% design parity with the original HTML/CSS/JS version. All interactive features have been converted to React hooks and state management:

- Vanilla JS event listeners → React hooks (useEffect, useState)
- DOM manipulation → React components & props
- Vanilla transitions → Tailwind CSS classes
- Intersection Observer → Same API, used in React

The component structure makes it easy to:
- Add new sections
- Modify existing components
- Add backend connectivity
- Implement state management (Redux, Context API)
- Deploy to various platforms

## 🟢 Getting Ready for Production

Before deploying, ensure:
1. ✅ All images are in `public/images/`
2. ✅ Phone numbers are verified
3. ✅ Contact form has backend integration
4. ✅ Meta tags are updated in `public/index.html`
5. ✅ Build is tested: `npm run build`
6. ✅ Environment variables are set (if any)

## 📞 Support

For issues or questions, refer to the component files in `src/components/` for detailed comments and implementation details.
