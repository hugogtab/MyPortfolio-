# Interactive Visualization Templates

This directory contains **9 placeholder HTML templates** (3 per discipline) ready for your custom interactive visualizations.

## 📁 File Structure

```
public/
├── AI Visualizations (Cyan theme: #00d4ff)
│   ├── ai-architecture-viz.html
│   ├── ai-model-explorer.html
│   └── ai-training-dynamics.html
│
├── Physics & Quantum (Purple theme: #aa66ff)
│   ├── bell-test.html
│   ├── quantum-simulation.html
│   └── physics-visualization.html
│
└── FEM & Simulation (Orange theme: #ff6b35)
    ├── fem-mesh-viewer.html
    ├── pfd-simulation.html
    └── solver-convergence.html
```

## 🎨 Quick Start Guide

### Option 1: Replace Entire File
1. Open any template file (e.g., `ai-architecture-viz.html`)
2. **Delete all content**
3. Paste your complete HTML visualization code
4. Ensure your code includes a "Back to Portfolio" button:
   ```html
   <a href="/" class="btn">← Back to Portfolio</a>
   ```
5. Save the file

### Option 2: Keep Template Structure
1. Open the template file
2. Keep the `<head>` section and basic styles
3. Replace the placeholder content in `<body>`
4. Add your JavaScript at the bottom before `</body>`

## 📝 Template Features

Each template includes:
- ✅ Responsive layout
- ✅ Dark theme matching your portfolio
- ✅ "Back to Portfolio" button
- ✅ Instructions for customization
- ✅ Placeholder for custom code
- ✅ Color-coded by discipline

## 🔧 Common Customizations

### Adding Three.js

```html
<script type="importmap">
  {
    "imports": {
      "three": "https://unpkg.com/three@0.160.0/build/three.module.js",
      "three/addons/": "https://unpkg.com/three@0.160.0/examples/jsm/"
    }
  }
</script>

<script type="module">
  import * as THREE from 'three';
  import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

  // Your Three.js code here
</script>
```

### Adding D3.js

```html
<script src="https://d3js.org/d3.v7.min.js"></script>
<script>
  // Your D3 code here
</script>
```

### Adding Canvas-based Visualization

```html
<canvas id="myCanvas"></canvas>
<script>
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  // Your canvas code here
</script>
```

## 🎯 Example: Bell Test Lab

The `bell-test.html` file is a working example showing:
- Complete standalone HTML structure
- Three.js 3D visualization
- Interactive controls
- Real-time simulation
- Responsive design

Use it as a reference for structure and best practices.

## 📋 Checklist Before Publishing

- [ ] Updated `<title>` in `<head>` section
- [ ] Removed or updated placeholder text
- [ ] Tested visualization loads correctly
- [ ] "Back to Portfolio" button works
- [ ] Responsive on mobile devices
- [ ] No console errors
- [ ] External scripts load successfully

## 🔗 How They're Linked

All templates are automatically linked in your portfolio:

1. **Visualizations Section**: Grid of 9 cards with "Launch Experiment" buttons
2. **Direct Access**: `/filename.html` (e.g., `/ai-architecture-viz.html`)
3. **Categorized**: Organized by AI, Physics, and FEM disciplines

## 💡 Tips

1. **Keep It Self-Contained**: Each HTML file should be completely standalone
2. **Use CDN Links**: Load libraries from CDNs for easier deployment
3. **Optimize Assets**: Minimize file sizes for faster loading
4. **Test Locally**: Open the HTML file in your browser before deploying
5. **Match Portfolio Theme**: Use dark backgrounds (#111) and accent colors

## 🎨 Color Themes by Discipline

- **AI**: Cyan (#00d4ff) - Modern, tech-focused
- **Physics**: Purple (#aa66ff) - Scientific, quantum-inspired
- **FEM**: Orange (#ff6b35) - Engineering, simulation-focused

## 🚀 Deployment

Files in `/public/` are automatically served at the root of your Next.js site:
- `public/bell-test.html` → `yoursite.com/bell-test.html`
- `public/ai-architecture-viz.html` → `yoursite.com/ai-architecture-viz.html`

No additional configuration needed!

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [D3.js Documentation](https://d3js.org/)
- [Canvas API Reference](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [WebGL Fundamentals](https://webglfundamentals.org/)

---

**Ready to showcase your work?** Just paste your code and go! 🚀
