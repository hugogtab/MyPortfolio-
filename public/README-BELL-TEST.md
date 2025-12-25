# Bell Test Lab Setup

## Installation

To complete the Bell Test Lab setup, save your complete Bell Test HTML file as:

```
/public/bell-test.html
```

The file should contain:
- All HTML structure from your original Bell Test code
- The complete CSS styles
- The Three.js import map
- The complete JavaScript module with the Bell Test simulation

## Current Setup

The portfolio is now configured to:
- Show "Bell Test: Interactive Quantum Lab" in the Featured Work section
- Display it in the Visualizations section
- Link to `/bell-test` which redirects to `/bell-test.html`

## Files Created

1. `/app/bell-test/page.tsx` - Next.js route that redirects to the static HTML
2. `/app/page.tsx` - Updated with Bell Test links and descriptions
3. `/public/bell-test.html` - **You need to place your complete HTML file here**

Simply copy the complete Bell Test HTML (with all JavaScript included inline) to the public folder, and it will work immediately.
