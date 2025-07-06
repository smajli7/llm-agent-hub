# 🚀 LLM Agent Hub - Complete Setup Guide

This guide will walk you through setting up the LLM Agent Hub from scratch. The application is built with Angular 17, TailwindCSS, and TypeScript.

## 📋 Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v18.10.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v9.0.0 or higher) - comes with Node.js
- **Git** - [Download here](https://git-scm.com/)

## 🛠️ Installation Steps

### Step 1: Clone or Create the Project

If you received this as files, navigate to the project directory:
```bash
cd llm-agent-hub
```

If you're cloning from Git:
```bash
git clone <repository-url>
cd llm-agent-hub
```

### Step 2: Install Node.js Dependencies

```bash
npm install
```

This will install all required packages including:
- Angular 17
- TailwindCSS
- TypeScript
- All other dependencies

### Step 3: Install Angular CLI Globally

```bash
npm install -g @angular/cli@latest
```

### Step 4: Verify Installation

Check that everything is installed correctly:
```bash
node --version    # Should be v18.10.0 or higher
npm --version     # Should be v9.0.0 or higher
ng version        # Should show Angular CLI 17.x
```

## 🏃‍♂️ Running the Application

### Development Server

Start the development server:
```bash
ng serve
```

Or using npm:
```bash
npm start
```

The application will be available at: **http://localhost:4200**

The app will automatically reload when you make changes to the source files.

### Production Build

To build the application for production:
```bash
ng build --configuration production
```

Or using the npm script:
```bash
npm run build:prod
```

## 📁 Project Structure Explained

```
llm-agent-hub/
├── src/
│   ├── app/
│   │   ├── components/          # Reusable UI components
│   │   │   ├── header/         # Top navigation bar
│   │   │   └── sidebar/        # Side navigation menu
│   │   ├── pages/              # Page components (routed)
│   │   │   ├── home/           # Landing page
│   │   │   ├── introduction/   # Introduction content
│   │   │   └── ...             # Other content pages
│   │   ├── services/           # Business logic services
│   │   │   ├── theme.service.ts      # Dark/light mode
│   │   │   └── navigation.service.ts # Navigation state
│   │   ├── app.component.*     # Root component
│   │   └── app.routes.ts       # Routing configuration
│   ├── styles.scss             # Global styles
│   └── index.html              # Main HTML file
├── tailwind.config.js          # TailwindCSS configuration
├── angular.json                # Angular project configuration
└── package.json                # Dependencies and scripts
```

## 🎨 Key Features

### 🌙 Dark/Light Mode
- Automatically detects system preference
- Manual toggle in header
- Persists user choice in localStorage

### 📱 Responsive Design
- Mobile-first approach
- Collapsible sidebar on mobile
- Adaptive layouts for all screen sizes

### 🎯 Interactive Learning
- Progress tracking across sections
- Interactive quizzes (when implemented)
- Flashcard system (when implemented)
- Smooth animations and transitions

## 🚀 Deployment to GitHub Pages

### Prerequisites for Deployment
1. GitHub account
2. Repository for your project
3. gh-pages package (already included)

### Deployment Steps

1. **Build for GitHub Pages:**
   ```bash
   npm run build:prod
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

Your app will be available at: `https://yourusername.github.io/your-repo-name/`

## 🧪 Development Commands

```bash
# Start development server
ng serve
npm start

# Build for production
ng build --production
npm run build:prod

# Run tests (when configured)
ng test
npm test

# Check for linting issues
ng lint

# Update Angular
ng update

# Add new component
ng generate component pages/new-page

# Add new service
ng generate service services/new-service
```

## 🎯 Adding New Content Pages

To add a new content page (e.g., for additional paper sections):

1. **Generate the component:**
   ```bash
   ng generate component pages/new-section
   ```

2. **Add route in `app.routes.ts`:**
   ```typescript
   {
     path: 'new-section',
     loadComponent: () => import('./pages/new-section/new-section.component').then(m => m.NewSectionComponent),
     title: 'New Section Title'
   }
   ```

3. **Add to navigation in `navigation.service.ts`:**
   ```typescript
   {
     id: 'new-section',
     title: 'New Section',
     route: '/new-section',
     icon: 'fas fa-star',
     description: 'Description of the new section'
   }
   ```

## 🎨 Customizing the Design

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
colors: {
  'lavender': {
    // Your custom color palette
  }
}
```

### Fonts
Update `src/index.html` to change fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:
```javascript
fontFamily: {
  'sans': ['YourFont', 'system-ui', 'sans-serif'],
}
```

## 🔧 Troubleshooting

### Common Issues

**1. "Cannot find module '@angular/core'"**
- Run: `npm install`
- If still failing: `rm -rf node_modules package-lock.json && npm install`

**2. "ng: command not found"**
- Install Angular CLI globally: `npm install -g @angular/cli`

**3. TailwindCSS styles not applying**
- Check that `postcss.config.js` exists
- Verify TailwindCSS imports in `styles.scss`

**4. Dark mode not working**
- Check browser console for errors
- Verify ThemeService is properly injected

**5. Routing not working**
- Ensure all page components are created
- Check that routes are properly configured in `app.routes.ts`

### Performance Issues

**1. Slow loading**
- Enable lazy loading (already implemented)
- Check network tab in browser dev tools

**2. Memory issues**
- Check for memory leaks in components
- Ensure proper cleanup in `ngOnDestroy`

## 📞 Getting Help

If you encounter issues:

1. **Check the browser console** for error messages
2. **Verify all dependencies** are installed correctly
3. **Check Node.js and npm versions** meet requirements
4. **Search existing issues** in the repository
5. **Create a new issue** with detailed error information

## 🎓 Learning Resources

To understand the codebase better:

- **Angular Documentation**: https://angular.io/docs
- **TailwindCSS Documentation**: https://tailwindcss.com/docs
- **TypeScript Handbook**: https://www.typescriptlang.org/docs/

## ✅ Success Checklist

- [ ] Node.js and npm installed
- [ ] Dependencies installed successfully
- [ ] Development server starts without errors
- [ ] Application loads at http://localhost:4200
- [ ] Navigation works between pages
- [ ] Dark/light mode toggle functions
- [ ] Responsive design works on mobile
- [ ] Production build completes successfully

## 🎉 You're Ready!

Once you've completed these steps, you'll have a fully functional LLM Agent Hub running locally. The application provides an interactive learning experience for understanding LLM agents and the Reflexion framework.

**Happy Learning!** 🧠✨ 