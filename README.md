# Shambhavi Singh's Portfolio

A modern, responsive personal portfolio website built with React + Vite, showcasing LLM & Python engineering expertise, machine learning projects, and data analysis skills.

## 🚀 Features

- ✨ Modern and responsive design
- 🎨 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🎯 Project filtering by technology stack
- 📧 Working contact form with EmailJS integration
- ⚡ Fast loading with Vite
- 🎭 SEO optimized

## 🛠️ Technologies Used

- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Email Service:** EmailJS
- **Scroll Animations:** React Intersection Observer

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/tanmaykr18/shambhavi-portfolio.git
cd shambhavi-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Configure EmailJS (Optional):
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Add environment variables in `.env` file or Vercel:
     ```
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```

4. Start the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

6. Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
  ├── components/
  │   ├── common/          # Reusable components (Header, Footer, etc.)
  │   ├── home/            # Home page components
  │   ├── projects/        # Project-related components
  │   ├── experience/      # Experience-related components
  │   └── contact/         # Contact form component
  ├── pages/               # Page components
  ├── data/                # Portfolio data (JSON)
  ├── hooks/               # Custom React hooks
  ├── utils/               # Utility functions and animations
  └── styles/              # Global styles
```

## 🎨 Customization

### Update Personal Information

All content is dynamically loaded from `src/data/portfolio.json`. Simply edit this file to update:
- Personal details (name, email, location, etc.)
- Skills and expertise categories
- Work experience
- Projects (with images)
- Education
- Certifications

The entire portfolio is data-driven, so any changes to the JSON file will automatically reflect in the UI.

### Update Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#2563EB',    // Your primary color
  secondary: '#1E40AF',  // Your secondary color
  accent: '#F59E0B',     // Your accent color
}
```

### Add Images

Place your images in the `public/images/` directory and update the paths in `portfolio.json`:
- Profile picture: `/images/profile.jpg`
- Project images: `/images/projects/[project-name].png` (or `.jpg`)


## 📄 Pages

1. **Home** - Hero section, brief about, featured projects, skills preview with interactive modals
2. **About** - Detailed bio, education, certifications
3. **Projects** - All projects with filtering and detailed modals
4. **Experience** - Work timeline with detailed job descriptions
5. **Contact** - Contact form, social links, and location

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Optimizations

- Lazy loading for images
- Code splitting for routes
- Optimized bundle size
- Fast loading times
- SEO meta tags

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Contact

**Shambhavi Singh**
- Email: shambhavisingh2713@gmail.com
- LinkedIn: [linkedin.com/in/shambhavi-singh-b99234212](https://linkedin.com/in/shambhavi-singh-b99234212)
- GitHub: [github.com/Shambhavi-2713](https://github.com/Shambhavi-2713)

---

Built with ❤️ using React + Vite
