

## **CURSOR PROMPT - CSS FIXES \& SCROLL ANIMATIONS**

### **PART 1: FIX BUTTON ACTIVE/FOCUS STATE ISSUES**

**Problem:** Buttons turn white when clicked/selected and navigation tabs have incorrect active states.

**Solution - Update your Tailwind config and add custom CSS:**

#### **1. Remove all dark mode related code first:**

- Remove `darkMode: 'class'` from tailwind.config.js
- Remove all `dark:` prefixed classes from all components
- Remove theme toggle component and related state management


#### **2. Fix Button Active/Focus States - Add to globals.css:**

```css
/* Remove default button outlines and fix active states */
button:focus {
  outline: none !important;
}

button:focus-visible {
  outline: 2px solid #2563EB;
  outline-offset: 2px;
}

/* Prevent white background on button click */
button:active {
  outline: none !important;
  background-color: inherit !important;
}

/* Fix for navigation buttons specifically */
.nav-button {
  background-color: transparent;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: rgba(37, 99, 235, 0.1);
  transform: translateY(-2px);
}

.nav-button:active {
  background-color: rgba(37, 99, 235, 0.2) !important;
  transform: translateY(0);
}

.nav-button.active {
  background-color: #2563EB !important;
  color: white !important;
}

/* Fix for primary action buttons */
.btn-primary {
  background-color: #2563EB;
  color: white;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #1E40AF;
  transform: scale(1.05);
}

.btn-primary:active {
  background-color: #1E3A8A !important;
  transform: scale(0.98);
}

/* Fix for secondary buttons */
.btn-secondary {
  background-color: white;
  border: 2px solid #2563EB;
  color: #2563EB;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #2563EB;
  color: white;
}

.btn-secondary:active {
  background-color: #1E40AF !important;
  color: white !important;
  border-color: #1E40AF;
}

/* Remove webkit tap highlight on mobile */
* {
  -webkit-tap-highlight-color: transparent;
}

/* Fix input focus states */
input:focus,
textarea:focus,
select:focus {
  outline: none !important;
  border-color: #2563EB;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```


#### **3. Update Tailwind Classes for Buttons:**

**Replace all button classes with these patterns:**

```jsx
// Navigation buttons
<button className="nav-button px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50 active:bg-blue-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
  About
</button>

// Active navigation button
<button className="nav-button active px-4 py-2 rounded-lg font-medium bg-blue-600 text-white">
  Home
</button>

// Primary action buttons (CTA)
<button className="btn-primary px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl active:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
  View Projects
</button>

// Secondary buttons
<button className="btn-secondary px-6 py-3 rounded-lg font-semibold hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
  Contact Me
</button>

// Icon buttons
<button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
  <Icon />
</button>
```


***

### **PART 2: ADD SCROLL ANIMATIONS (Scale on Scroll Effect)**

**Add these scroll-triggered animations that make elements scale up as they come into view:**

#### **1. Install required package (if not already installed):**

```bash
npm install react-intersection-observer
```


#### **2. Add scroll animation utilities to globals.css:**

```css
/* Scroll Animation Base Styles */
.scroll-animate {
  opacity: 0;
  transform: scale(0.8) translateY(40px);
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-animate.in-view {
  opacity: 1;
  transform: scale(1) translateY(0);
}

/* Scale animation - starts small, grows to normal size */
.scale-in {
  opacity: 0;
  transform: scale(0.5);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-in.in-view {
  opacity: 1;
  transform: scale(1);
}

/* Staggered animation for lists */
.scroll-animate-stagger:nth-child(1) { transition-delay: 0.1s; }
.scroll-animate-stagger:nth-child(2) { transition-delay: 0.2s; }
.scroll-animate-stagger:nth-child(3) { transition-delay: 0.3s; }
.scroll-animate-stagger:nth-child(4) { transition-delay: 0.4s; }
.scroll-animate-stagger:nth-child(5) { transition-delay: 0.5s; }
.scroll-animate-stagger:nth-child(6) { transition-delay: 0.6s; }

/* Card hover with scale */
.card-hover {
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: scale(1.05) translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* Skill bar animation on scroll */
.skill-bar {
  width: 0%;
  transition: width 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.skill-bar.in-view {
  width: var(--skill-percentage);
}

/* Pulse effect on scroll */
@keyframes pulse-scale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

.pulse-on-view.in-view {
  animation: pulse-scale 2s ease-in-out infinite;
}

/* Smooth reveal from bottom */
.reveal-bottom {
  opacity: 0;
  transform: translateY(60px);
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-bottom.in-view {
  opacity: 1;
  transform: translateY(0);
}

/* Smooth reveal with rotation */
.reveal-rotate {
  opacity: 0;
  transform: scale(0.8) rotate(-5deg);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.reveal-rotate.in-view {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}
```


#### **3. Create a custom hook for scroll animations - useScrollAnimation.js:**

```javascript
import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optionally unobserve after animation triggers once
          // observer.unobserve(entry.target);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};
```


#### **4. Usage examples in components:**

```jsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// In your component:

// For project cards
function ProjectCard({ project }) {
  const [ref, isVisible] = useScrollAnimation(0.2);
  
  return (
    <div 
      ref={ref}
      className={`card-hover scroll-animate ${isVisible ? 'in-view' : ''} bg-white rounded-xl p-6 shadow-lg`}
    >
      {/* Card content */}
    </div>
  );
}

// For skills section with scale effect
function SkillCard({ skill, percentage }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  
  return (
    <div 
      ref={ref}
      className={`scale-in ${isVisible ? 'in-view' : ''} bg-white p-6 rounded-lg`}
    >
      <h3 className="font-semibold mb-3">{skill}</h3>
      <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
        <div 
          className={`skill-bar bg-blue-600 h-full ${isVisible ? 'in-view' : ''}`}
          style={{'--skill-percentage': `${percentage}%`}}
        />
      </div>
    </div>
  );
}

// For grid items with stagger effect
function ProjectGrid({ projects }) {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <div 
          key={project.id}
          className={`scroll-animate scroll-animate-stagger ${isVisible ? 'in-view' : ''} card-hover bg-white rounded-xl p-6`}
        >
          {/* Project content */}
        </div>
      ))}
    </div>
  );
}

// For section headers
function SectionHeader({ title, subtitle }) {
  const [ref, isVisible] = useScrollAnimation(0.4);
  
  return (
    <div ref={ref} className={`reveal-bottom ${isVisible ? 'in-view' : ''} text-center mb-12`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 text-lg">{subtitle}</p>
    </div>
  );
}
```


#### **5. Apply to specific sections:**

**Skills Section:**

```jsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {skills.map((skill, index) => (
    <div 
      key={index}
      ref={skillRefs[index]}
      className={`scale-in ${isVisible[index] ? 'in-view' : ''} bg-white p-4 rounded-lg text-center hover:shadow-lg transition-shadow`}
    >
      <div className="text-4xl mb-2">{skill.icon}</div>
      <p className="font-semibold">{skill.name}</p>
    </div>
  ))}
</div>
```

**Project Cards:**

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {projects.map((project) => (
    <div 
      key={project.id}
      className="scroll-animate card-hover bg-white rounded-xl overflow-hidden shadow-lg"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  ))}
</div>
```


***

### **IMPLEMENTATION CHECKLIST:**

1. ✅ Remove all dark mode code and classes
2. ✅ Add button state fixes to globals.css
3. ✅ Update all button components with new classes
4. ✅ Add scroll animation CSS to globals.css
5. ✅ Create useScrollAnimation hook
6. ✅ Apply scroll animations to:
    - Project cards (scale-in effect)
    - Skills grid (scale-in with stagger)
    - Section headers (reveal-bottom)
    - About section cards (reveal-rotate)
    - Contact form (scroll-animate)
7. ✅ Test button states (hover, active, focus) on all buttons
8. ✅ Test scroll animations on all sections
9. ✅ Ensure responsive behavior on mobile

