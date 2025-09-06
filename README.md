# StudyPortal - Modern Dark-Themed Web Application

A comprehensive platform for exam and placement preparation built with React.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Authentication
- Google OAuth-style login simulation
- Protected routes with authentication context
- Persistent login state using localStorage

### Exam Preparation
- Branch-wise study materials (CSE, ECE, ME, CE, EEE)
- Toggle between Notes and Previous Year Questions (PYQs)
- Downloadable PPT cards with preview and search functionality
- Responsive grid layout for study materials

### Placement Preparation
- **Aptitude**: Logical Reasoning, Quantitative, Verbal Ability
- **DSA**: Arrays, Linked Lists, Trees, Graphs, Dynamic Programming
- **Interview**: Behavioral Questions, System Design, HR Round
- Latest placement updates with company information
- Progress tracking and success statistics

### Practice Interface
- Comprehensive question database with difficulty levels
- External practice links (LeetCode integration)
- Downloadable resources (PDFs, Videos, Articles)
- Advanced filtering and search capabilities
- Responsive table layout with hover effects

## 🎨 Design System

### Color Palette
- **Primary Background**: #000000 (Pure Black)
- **Secondary Background**: #111827 (Dark Gray)
- **Primary Text**: #FFFFFF (White)
- **Secondary Text**: #9CA3AF (Light Gray)
- **Accent Colors**:
  - Blue: #3B82F6 (Primary actions)
  - Green: #10B981 (Success/Downloads)
  - Purple: #8B5CF6 (DSA sections)
  - Yellow: #F59E0B (Warnings)
  - Red: #EF4444 (Errors/Logout)

### Typography
- **Font**: Inter (300-800 weights)
- **Headings**: 600-700 weight
- **Body Text**: 400 weight
- **Buttons**: 500 weight

### Animations & Effects
- 0.3s ease-in-out transitions on all interactive elements
- Scale transforms (hover: scale-105)
- Glassmorphism effects with backdrop-blur
- Glow shadows on hover states
- Smooth color transitions

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── Button.tsx          # Reusable button with variants
│   ├── Card.tsx            # Glassmorphism card component
│   └── Navbar.tsx          # Fixed navigation with logout
├── context/
│   └── AuthContext.tsx     # Authentication state management
├── pages/
│   ├── LoginPage.tsx       # Google OAuth-style login
│   ├── HomePage.tsx        # Main dashboard with navigation cards
│   ├── ExamPreparationPage.tsx    # Branch selection and materials
│   ├── PlacementPreparationPage.tsx # Three main preparation categories
│   ├── AptitudeSubtopicsPage.tsx   # Aptitude subtopics
│   ├── DSASubtopicsPage.tsx        # DSA learning path
│   ├── InterviewSubtopicsPage.tsx  # Interview preparation
│   └── PracticePage.tsx     # Question practice interface
└── App.tsx                 # Router configuration
```

### Responsive Design
- **Mobile First**: 320px+ base design
- **Breakpoints**: 
  - sm: 640px (tablets)
  - md: 768px (small desktops)
  - lg: 1024px (large desktops)
  - xl: 1280px (extra large)

### State Management
- React Context for authentication
- localStorage for persistent login
- Component-level state for UI interactions

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Features Overview

### Login Experience
- Clean, centered login interface
- Simulated Google OAuth integration
- Smooth transitions and hover effects
- Company branding with logo and tagline

### Navigation
- Fixed navbar with blur background
- Logo click returns to home
- User info display on larger screens
- One-click logout with confirmation

### Study Materials
- Dynamic filtering by branch and content type
- Card-based layout with hover animations
- Download simulation with progress feedback
- Empty states for better UX

### Practice System
- Comprehensive question database
- External platform integration
- Resource management with type indicators
- Advanced search and filtering
- Progress tracking and statistics

## 🎯 Performance Optimizations

- **Code Splitting**: Route-based lazy loading
- **Image Optimization**: External CDN usage (Pexels)
- **CSS Optimization**: Tailwind purging unused styles
- **Bundle Analysis**: Vite optimization features
- **Lazy Loading**: Component-level lazy loading

## 🔧 Customization

### Adding New Topics
1. Update the topic arrays in respective pages
2. Add routing in App.tsx
3. Create practice questions in PracticePage.tsx
4. Update navigation links

### Styling Modifications
- Modify `tailwind.config.js` for design system changes
- Update color variables in component files
- Adjust animations in the config file

### Adding Authentication
- Replace mock authentication with real OAuth
- Update AuthContext with API calls
- Add proper error handling
- Implement token refresh logic

## 🚀 Deployment

The application is production-ready and can be deployed to:
- **Netlify**: Connect GitHub repository
- **Vercel**: Import project and deploy
- **AWS S3 + CloudFront**: Static hosting
- **Traditional Hosting**: Upload build folder

### Build Commands
```bash
npm run build      # Creates optimized production build
npm run preview    # Preview production build locally
```

## 📞 Support

For technical support or feature requests:
- Create GitHub issues for bugs
- Submit pull requests for contributions
- Contact development team for custom features

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**StudyPortal** - Empowering students to achieve their academic and career goals through comprehensive preparation resources.