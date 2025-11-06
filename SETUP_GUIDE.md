# Portfolio Setup Guide

## ✅ What Has Been Built

Your modern, responsive portfolio website is now complete! Here's what has been implemented according to your specifications:

### 🎯 Core Features Implemented

1. ✅ **5 Main Pages**
   - Home (Hero, About, Skills, Featured Projects)
   - About (Education, Certifications, Achievements)
   - Projects (Filterable project gallery with modals)
   - Experience (Work timeline with detailed descriptions)
   - Contact (Working contact form with social links)

2. ✅ **Design & Styling**
   - Tailwind CSS with custom color scheme (Blue #2563EB, Amber #F59E0B)
   - Dark/Light mode toggle with persistent storage
   - Responsive design (mobile-first approach)
   - Inter font family throughout

3. ✅ **Animations & Interactions**
   - Framer Motion for smooth page transitions
   - Scroll animations using React Intersection Observer
   - Hover effects on cards and buttons
   - Smooth navigation with React Router

4. ✅ **Components Structure**
   - Common: Header, Footer, LoadingSpinner, ScrollToTop
   - Home: Hero, About, Skills, FeaturedProjects
   - Projects: ProjectCard, ProjectModal, ProjectFilter
   - Experience: WorkExperience, Timeline
   - Contact: ContactForm (EmailJS ready)

5. ✅ **Data Management**
   - Centralized portfolio.json with all your information
   - Easy to update without touching code

## 🚀 Getting Started

### The Dev Server is Already Running!

Your portfolio is currently running at: **http://localhost:5173**

Open your browser and visit this URL to see your portfolio live!

### To Stop the Server

Press `Ctrl + C` in the terminal

### To Start Again

```bash
cd tanmay-portfolio
npm run dev
```

## 📝 Next Steps

### 1. Add Your Images

Place these files in the appropriate directories:

```
public/
  ├── images/
  │   ├── profile.jpg              # Your profile photo (400x400px recommended)
  │   └── projects/
  │       ├── invoice-system.jpg
  │       ├── video-generation.jpg
  │       ├── restaurant-dashboard.jpg
  │       └── ai-chatbot.jpg
  └── documents/
      └── tanmay-kumar-resume.pdf
```

**Note:** If images are not found, placeholders will be displayed automatically.

### 2. Configure EmailJS (Optional)

To make the contact form work:

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Update these lines in `src/components/contact/ContactForm.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID';
const userId = 'YOUR_USER_ID';
```

### 3. Customize Your Data

Edit `src/data/portfolio.json` to update:
- Personal information
- Skills
- Projects
- Experience
- Education
- Certifications

### 4. Update Colors (Optional)

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: '#2563EB',    // Your primary color
  secondary: '#1E40AF',  // Your secondary color
  accent: '#F59E0B',     // Your accent color
}
```

## 🎨 Features Showcase

### Dark/Light Mode
- Toggle button in the header (moon/sun icon)
- Automatically saves your preference
- Smooth transitions between modes

### Project Filtering
- Filter projects by category (All, AI/Backend, AI/Frontend, Full Stack)
- Click on any project card for detailed modal view
- Live demo and GitHub links

### Smooth Animations
- Fade-in effects on scroll
- Page transition animations
- Hover effects on interactive elements
- Stagger animations for lists

### Responsive Design
- Mobile: Hamburger menu, single column layout
- Tablet: 2-column grids
- Desktop: 3-column grids, full navigation

## 📦 Build for Production

When ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

Preview the production build:

```bash
npm run preview
```

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy! (automatic)

### Option 2: Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Option 3: GitHub Pages
1. Install: `npm install -D gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Deploy: `npm run deploy`

## 📁 Project Structure

```
tanmay-portfolio/
├── public/                 # Static assets
│   ├── images/            # Profile and project images
│   └── documents/         # Resume PDF
├── src/
│   ├── components/        # React components
│   │   ├── common/       # Shared components
│   │   ├── home/         # Home page components
│   │   ├── projects/     # Project components
│   │   ├── experience/   # Experience components
│   │   └── contact/      # Contact form
│   ├── pages/            # Page components
│   ├── data/             # Portfolio data (JSON)
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   └── styles/           # Global styles
├── index.html            # HTML template
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```

## 🔧 Available Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📚 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool (super fast!)
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **EmailJS** - Contact form emails
- **React Intersection Observer** - Scroll animations

## ⚡ Performance

Your portfolio is optimized for:
- Fast loading times
- Smooth animations (60 FPS)
- SEO-friendly
- Mobile-responsive
- Accessibility

## 🎯 SEO Optimized

The portfolio includes:
- Meta tags for search engines
- Open Graph tags for social media
- Proper heading structure
- Semantic HTML
- Alt tags for images

## 💡 Tips

1. **Images**: Use optimized images (WebP format recommended, max 200KB per image)
2. **Resume**: Keep your PDF resume under 1MB
3. **Content**: Update portfolio.json regularly with new projects
4. **Testing**: Test on multiple devices and browsers
5. **Performance**: Use Lighthouse in Chrome DevTools to check performance

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 5173
# Then restart: npm run dev
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Check file paths in portfolio.json
- Ensure images are in the `public/images/` directory
- Use forward slashes in paths: `/images/profile.jpg`

## 📞 Support

If you need help:
1. Check the README.md file
2. Review the code comments
3. Check the console for errors (F12 in browser)

## 🎉 You're All Set!

Your portfolio is ready to showcase your skills to the world! 

**Current Status:** ✅ Running at http://localhost:5173

Happy coding! 🚀

