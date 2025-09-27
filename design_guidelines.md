# Portfolio Design Guidelines for Kaleshwar Lakaram

## Design Approach
**Selected Approach**: Reference-Based Design inspired by modern developer portfolios like GitHub profiles and Linear's clean aesthetic, emphasizing technical credibility and professional presentation.

## Core Design Elements

### Color Palette
**Primary Colors:**
- Dark: 220 15% 12% (deep slate background)
- Light: 210 20% 98% (off-white background)

**Accent Colors:**
- Primary: 220 100% 60% (vibrant blue for CTAs and highlights)
- Secondary: 142 76% 36% (emerald green for success states and skills)

**Text Colors:**
- Primary text: 220 13% 91% (dark mode) / 220 13% 18% (light mode)
- Secondary text: 220 9% 64% (muted for descriptions)

### Typography
- **Primary Font**: Inter (Google Fonts) - clean, technical readability
- **Accent Font**: JetBrains Mono (Google Fonts) - for code snippets and technical elements
- **Hierarchy**: text-4xl/3xl for headings, text-lg for body, text-sm for metadata

### Layout System
**Spacing Units**: Consistent use of Tailwind units 4, 6, 8, 12, 16 for harmonious rhythm
- Container max-width: max-w-6xl
- Section spacing: py-16 for desktop, py-12 for mobile
- Component spacing: gap-6 between cards, gap-4 within components

### Component Library

**Navigation**:
- Fixed header with smooth scroll navigation
- Mobile hamburger menu with slide-out drawer
- Active section highlighting

**Hero Section**:
- Large typography introduction
- Animated typing effect for roles/skills
- Social links with hover animations
- Professional headshot placeholder (circular, top-right)

**Skills Section**:
- Grouped by categories (Frontend, Backend, etc.)
- Tag-style badges with category color coding
- Grid layout responsive to screen size

**Projects Section**:
- Card-based layout with project screenshots
- Technology stack badges
- External link buttons with icons
- Hover effects revealing more details

**Education & Certificates**:
- Timeline-style layout
- Institution logos/icons
- Achievement highlighting (CGPA, percentages)

## Visual Treatments

**Gradients**: Subtle blue-to-emerald gradients for hero background overlay and card borders

**Cards**: Elevated appearance with border-gray-200/20 borders and subtle shadows

**Buttons**: Primary blue filled buttons, outline variants with backdrop-blur for hero section

**Icons**: Heroicons for consistency, technical icons for skills and social links

## Images
- **Hero Image**: Professional headshot (256x256px, circular crop, positioned top-right of hero section)
- **Project Screenshots**: 16:9 aspect ratio mockups for each project (600x338px recommended)
- **Institution Logos**: Small logos for education institutions (64x64px)
- **Technology Icons**: SVG icons for skills badges and project tech stacks

## Responsive Strategy
- **Desktop**: Multi-column layouts, side-by-side content
- **Tablet**: Adjusted spacing, maintained card layouts
- **Mobile**: Single column, stacked navigation, touch-friendly targets

## Key Interactions
- Smooth scroll between sections
- Subtle hover animations on cards and buttons
- Mobile-first responsive behavior
- Loading animations for dynamic content

This design balances technical professionalism with modern web aesthetics, ensuring Kaleshwar's portfolio stands out while maintaining credibility in the development community.