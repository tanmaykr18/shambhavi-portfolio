## **CURSOR PROMPT FOR TANMAY KUMAR'S PORTFOLIO**

Create a modern, responsive personal portfolio website for a MERN stack developer using React + Vite. The portfolio should be professional, visually appealing, and showcase restaurant management expertise and AI integration skills.

### **PROJECT SETUP \& STRUCTURE:**

**Initialize with:**

```bash
npm create vite@latest tanmay-portfolio -- --template react
cd tanmay-portfolio
npm install
```

**Required Packages to Install:**

```bash
npm install react-router-dom framer-motion lucide-react react-intersection-observer emailjs-com
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```


### **PROJECT FOLDER STRUCTURE:**

```
src/
  ├── components/
  │   ├── common/
  │   │   ├── Header.jsx
  │   │   ├── Footer.jsx
  │   │   ├── LoadingSpinner.jsx
  │   │   └── ScrollToTop.jsx
  │   ├── home/
  │   │   ├── Hero.jsx
  │   │   ├── About.jsx
  │   │   ├── Skills.jsx
  │   │   └── FeaturedProjects.jsx
  │   ├── projects/
  │   │   ├── ProjectCard.jsx
  │   │   ├── ProjectModal.jsx
  │   │   └── ProjectFilter.jsx
  │   ├── experience/
  │   │   ├── WorkExperience.jsx
  │   │   └── Timeline.jsx
  │   └── contact/
  │       └── ContactForm.jsx
  ├── pages/
  │   ├── Home.jsx
  │   ├── About.jsx
  │   ├── Projects.jsx
  │   ├── Experience.jsx
  │   └── Contact.jsx
  ├── data/
  │   └── portfolio.json
  ├── hooks/
  │   ├── useScrollAnimation.js
  │   └── useTheme.js
  ├── utils/
  │   └── animations.js
  ├── styles/
  │   └── globals.css
  └── App.jsx
```


### **PAGES TO BUILD (5 Main Pages):**

1. **Home Page** - Hero section, brief about, featured projects, skills preview
2. **About Page** - Detailed bio, education, certifications, achievements
3. **Projects Page** - All projects with filtering, detailed modals
4. **Experience Page** - Work timeline, detailed job descriptions
5. **Contact Page** - Contact form, social links, location

### **DESIGN REQUIREMENTS:**

**Color Scheme:**

- Primary: \#2563EB (Blue)
- Secondary: \#1E40AF (Dark Blue)
- Accent: \#F59E0B (Amber)
- Background: \#F8FAFC (Light Gray)
- Text: \#1F2937 (Dark Gray)

**Typography:**

- Headers: Inter, system-ui, sans-serif (Bold 600-700)
- Body: Inter, system-ui, sans-serif (Regular 400-500)

**Animations:**

- Smooth scroll animations using Framer Motion
- Fade in/slide up effects for sections
- Hover animations on cards and buttons
- Loading transitions between pages


### **KEY FEATURES TO IMPLEMENT:**

1. **Responsive Design** - Mobile-first approach, works on all devices
2. **Dark/Light Mode Toggle** - Theme switcher with persistent storage
3. **Smooth Animations** - Framer Motion for page transitions and scroll animations
4. **Project Filtering** - Filter projects by technology stack
5. **Contact Form** - Working contact form using EmailJS
6. **SEO Optimized** - Meta tags, proper heading structure
7. **Fast Loading** - Optimized images, lazy loading
8. **Interactive Elements** - Hover effects, animated counters

### **JSON DATA STRUCTURE (portfolio.json):**

```json
{
  "personal": {
    "name": "Tanmay Kumar",
    "title": "MERN Stack Developer & Founding Engineer",
    "email": "tanmaykumar18102002@gmail.com",
    "phone": "+91-7061745715",
    "location": "Ghaziabad, Uttar Pradesh, India",
    "linkedin": "https://linkedin.com/in/tanmay-kumar",
    "github": "https://github.com/tanmay-kumar",
    "tagline": "Building scalable restaurant management systems and AI-powered applications",
    "bio": "I am a MERN stack developer and problem solver focused on building scalable restaurant management systems and AI-powered applications. I have extensive experience in backend development, database operations, API authentication, and GenAI integration. I specialize in creating data-driven solutions that improve operational efficiency and decision-making in fast-moving startup environments where ownership and impact are important.",
    "avatar": "/images/profile.jpg",
    "resume": "/documents/tanmay-kumar-resume.pdf"
  },
  "skills": {
    "languages": ["JavaScript", "Python"],
    "frameworks": ["Node.js", "React.js", "Express.js", "MongoDB", "RESTful APIs", "Bootstrap", "Redux"],
    "tools": ["MongoDB Atlas", "Google Cloud Storage", "Gemini API", "GitHub", "VS Code", "JWT"],
    "backend": ["Database Operations", "API Development", "Authentication Systems", "Data Processing", "Server Architecture"],
    "ai": ["Gemini API Integration", "Prompt Engineering", "Video Generation (Veo3)", "GenAI Applications", "OCR Processing", "Automated Content Creation"],
    "soft": ["Problem Solving", "Team Collaboration", "Quick Learning", "Analytical Thinking", "Communication"]
  },
  "experience": [
    {
      "id": 1,
      "title": "Founding Engineer",
      "company": "cactus.ai",
      "location": "Remote",
      "startDate": "Jun 2024",
      "endDate": "Present",
      "current": true,
      "description": "Architected comprehensive restaurant management platform with full-stack MERN implementation. Built advanced invoice extraction system using Gemini OCR for automated vendor data processing and ingredient mapping. Engineered recipe automation system by fetching POS menu data and implementing Gemini context caching to generate complete recipes with ingredients, quantities, and cooking instructions. Developed inventory management system with multi-unit conversions and automated ingredient tracking based on POS sales integration. Designed super admin panel for global tenant management and centralized restaurant data administration. Engineered robust backend APIs with Node.js and Express.js, implementing secure authentication and database operations. Created dynamic MongoDB collections with automated workflows and interactive dashboards for real-time financial metrics and profit analytics using React.js.",
      "technologies": ["Node.js", "React.js", "MongoDB", "Express.js", "Gemini API", "Google Cloud Storage"],
      "achievements": [
        "Built comprehensive restaurant management platform serving multiple restaurants",
        "Automated invoice processing reducing manual data entry by 90%",
        "Implemented AI-powered recipe generation system",
        "Developed inventory management with real-time tracking",
        "Created super admin panel for multi-tenant management"
      ]
    }
  ],
  "projects": [
    {
      "id": 1,
      "title": "Advanced Invoice Extraction System",
      "shortDescription": "AI-powered invoice processing system for restaurant supply chain automation",
      "description": "Built comprehensive invoice processing system using Node.js and Gemini OCR for restaurant supply chain automation. Implemented vendor-specific parsing rules with dynamic MongoDB collections and ingredient mapping algorithms. Created context caching system with Gemini API for optimized data extraction and automated JSON output processing. Developed column mapping system for various vendor formats, reducing manual data entry by 90%.",
      "technologies": ["Node.js", "MongoDB", "Gemini API", "Express.js", "OCR Processing"],
      "category": "AI/Backend",
      "featured": true,
      "image": "/images/projects/invoice-system.jpg",
      "liveUrl": "#",
      "githubUrl": "#",
      "features": [
        "Vendor-specific invoice parsing",
        "Automated ingredient mapping",
        "Context caching with Gemini API",
        "Dynamic MongoDB collections",
        "90% reduction in manual data entry"
      ]
    },
    {
      "id": 2,
      "title": "AI-Powered Video Generation System",
      "shortDescription": "Sophisticated prompt generation system for Veo3 video creation",
      "description": "Engineered sophisticated prompt generation system for Veo3 video creation using advanced prompts. Integrated Gemini API for automated content transformation and JSON output processing. Built dynamic video generation workflows for product visualizations and marketing content, achieving 85% automation in content creation pipeline.",
      "technologies": ["JavaScript", "Node.js", "Gemini API", "Veo3", "AI Prompting"],
      "category": "AI/Frontend",
      "featured": true,
      "image": "/images/projects/video-generation.jpg",
      "liveUrl": "#",
      "githubUrl": "#",
      "features": [
        "Advanced AI prompt engineering",
        "Automated content transformation",
        "Video generation workflows",
        "Product visualization system",
        "85% automation achievement"
      ]
    },
    {
      "id": 3,
      "title": "Restaurant Management Dashboard",
      "shortDescription": "Comprehensive MERN stack application for restaurant operations",
      "description": "Developed comprehensive MERN stack application for restaurant operations management. Implemented real-time analytics for food costs, menu pricing, and profit tracking. Built secure authentication system with role-based access control. Created responsive frontend with React.js and robust backend APIs with Express.js and MongoDB.",
      "technologies": ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Chart.js"],
      "category": "Full Stack",
      "featured": true,
      "image": "/images/projects/restaurant-dashboard.jpg",
      "liveUrl": "#",
      "githubUrl": "#",
      "features": [
        "Real-time analytics dashboard",
        "Food cost tracking",
        "Menu pricing optimization",
        "Role-based authentication",
        "Responsive design"
      ]
    },
    {
      "id": 4,
      "title": "Voice-Controlled AI Chatbot",
      "shortDescription": "Interactive chatbot with Gemini AI integration and voice features",
      "description": "Developed interactive chatbot using vanilla JavaScript with Gemini AI API integration. Implemented speech-to-text functionality and text-to-speech output with dark mode toggle. Created auto-resizing interface with dynamic API response handling for seamless user experience.",
      "technologies": ["JavaScript", "HTML5", "CSS3", "Gemini API", "Web Speech API"],
      "category": "AI/Frontend",
      "featured": false,
      "image": "/images/projects/ai-chatbot.jpg",
      "liveUrl": "#",
      "githubUrl": "#",
      "features": [
        "Voice recognition integration",
        "Text-to-speech output",
        "Dark mode support",
        "Auto-resizing interface",
        "Real-time AI responses"
      ]
    }
  ],
  "education": [
    {
      "degree": "B. Tech - Computer Science and Engineering",
      "institution": "SRM Institute of Science and Technology, Delhi NCR Campus",
      "startDate": "Sep 2020",
      "endDate": "Jul 2024",
      "cgpa": "8.15",
      "description": "Focused on software engineering, data structures, algorithms, and web development."
    }
  ],
  "certifications": [
    {
      "title": "Introduction to Front-End Development by Meta",
      "issuer": "Coursera",
      "date": "Dec 2023",
      "credential": "#"
    },
    {
      "title": "Programming with JavaScript by Meta", 
      "issuer": "Coursera",
      "date": "Nov 2023",
      "credential": "#"
    }
  ],
  "achievements": [
    {
      "title": "Hackathon Winner - IIT Patna",
      "description": "Developed Chrome extension with AI-powered text summarization and code explanation features using Gemini API. Implemented voice functionality for content reading and instant webpage text analysis.",
      "date": "2024"
    }
  ]
}
```


### **COMPONENT SPECIFICATIONS:**

**Header Component:**

- Sticky navigation with smooth scroll
- Logo/name on left, navigation menu on right
- Mobile hamburger menu with smooth animations
- Active page highlighting
- Dark/light mode toggle

**Hero Section:**

- Animated typing effect for tagline
- Professional profile image with subtle animations
- Call-to-action buttons (View Work, Contact Me, Download Resume)
- Particle background or gradient animation
- Social media links with hover effects

**Projects Section:**

- Grid layout (3 columns desktop, 2 tablet, 1 mobile)
- Filter buttons by technology/category
- Project cards with hover effects
- Modal popup for detailed project view
- Live demo and GitHub buttons

**Skills Section:**

- Animated skill bars or circular progress indicators
- Grouped by category (Frontend, Backend, AI/ML, Tools)
- Icon representations for each skill
- Animation on scroll into view

**Contact Form:**

- Name, email, subject, message fields
- Form validation with error states
- EmailJS integration for working contact form
- Success/error feedback messages
- Loading states during submission


### **STYLING INSTRUCTIONS:**

**Use Tailwind CSS with custom components:**

- Consistent spacing using Tailwind spacing scale
- Custom gradient backgrounds and button styles
- Responsive grid layouts and flexible components
- Smooth transitions and hover effects
- Professional color scheme throughout

**Animation Guidelines:**

- Fade-in animations for sections on scroll
- Smooth page transitions using Framer Motion
- Hover animations on interactive elements
- Loading states with skeleton screens
- Stagger animations for lists and grids


### **PERFORMANCE OPTIMIZATIONS:**

- Lazy loading for images and components
- Code splitting for different routes
- Optimized bundle size with tree shaking
- Fast loading with proper image formats
- SEO meta tags for all pages

**Build this portfolio to showcase a professional MERN stack developer specializing in restaurant management systems and AI integration. Make it modern, interactive, and fully responsive. The design should reflect technical expertise while remaining user-friendly and visually appealing.**

***