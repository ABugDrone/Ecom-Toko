# Toko Digital Ecosystem

A modern, responsive website showcasing the Toko digital ecosystem - Building Africa's digital future through technology, commerce & education.

![Toko Ecosystem](https://img.shields.io/badge/Toko-Digital%20Ecosystem-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.17-blue?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4.19-purple?style=flat-square&logo=vite)

## 🌟 Overview

The Toko Digital Ecosystem website represents the comprehensive digital platform of Ecom Toko Enterprise, showcasing innovative solutions across education, e-commerce, fintech, and SaaS. This modern web application highlights our commitment to empowering individuals, businesses, and communities through technology-driven solutions.

## 🚀 Features

### 🎯 Core Sections
- **Homepage**: Hero section, statistics, technology services preview, and client testimonials
- **About**: Company story, mission, and team information
- **Services**: Comprehensive IT consulting and development services
- **Products**: Ecosystem of digital platforms and solutions
- **Technologies**: Detailed technology stack and service offerings
- **Portfolio**: Project showcase with client testimonials
- **Blog**: Insights and updates from the Toko ecosystem
- **Contact**: Multiple contact methods and location information

### 💼 Business Impact
- **1,500+ Learners Trained** through Toko Academy
- **95% Success Rate** in educational programs
- **20+ Satisfied Clients** across various industries
- **15+ Corporate Partners** and technology alliances

### 🛠 Technology Stack
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library
- **Build Tool**: Vite for fast development and building
- **Routing**: React Router DOM for SPA navigation
- **Icons**: Lucide React for consistent iconography
- **Animations**: Custom CSS animations and transitions

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Footer.tsx      # Site footer with navigation
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Navbar.tsx      # Navigation header
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Homepage
│   ├── About.tsx       # About page
│   ├── Services.tsx    # Services page
│   ├── Products.tsx    # Products page
│   ├── Technologies.tsx # Technologies page
│   ├── Portfolio.tsx   # Portfolio page
│   ├── Blog.tsx        # Blog page
│   └── Contact.tsx     # Contact page
├── assets/             # Static assets (images)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── test/               # Test files
```

## 🎨 Design System

### Color Palette
- **Primary**: Teal/Green theme representing growth and technology
- **Secondary**: Dark backgrounds for professional appearance
- **Accent**: Complementary colors for highlights and CTAs

### Components
- **Glass Cards**: Translucent cards with backdrop blur effects
- **Hover Animations**: Smooth transitions and lift effects
- **Gradient Backgrounds**: Modern gradient overlays
- **Responsive Grids**: Flexible layouts for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ABugDrone/Ecom-Toko.git
   cd Ecom-Toko
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🌐 Deployment

The project is configured for easy deployment on various platforms:

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

### Netlify
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## 🏢 Toko Ecosystem Platforms

### Educational
- **Toko Academy**: Digital learning platform for tech skills
- **Corporate Training**: Custom curriculum for organizations

### Technology Services
- **Software Development**: Custom applications and systems
- **Web Development**: Responsive and scalable web platforms
- **Mobile App Development**: iOS and Android solutions
- **Cloud & DevOps**: Infrastructure and deployment automation
- **AI & Data Solutions**: Machine learning and analytics

### Digital Platforms
- **TokoPay**: Chat-based fintech solution
- **Riba Africa**: Multi-store e-commerce platform
- **Dinki Africa**: African fashion marketplace
- **Bloom Shorts**: Short-form content platform
- **WhatsApp Scheduler Pro**: Communication automation tool

## 🤝 Contributing

We welcome contributions to improve the Toko Digital Ecosystem website!

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Standards
- Use TypeScript for type safety
- Follow React best practices
- Maintain consistent code formatting
- Write meaningful commit messages
- Test your changes thoroughly

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full-featured experience with animations
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Optimized for small screens with collapsible navigation

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configurations:
```env
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=info@toko.com.ng
```

### Customization
- **Colors**: Modify `tailwind.config.ts` for theme customization
- **Fonts**: Update font imports in `src/index.css`
- **Content**: Edit page components for content updates

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial page load with lazy loading
- **SEO Optimized**: Semantic HTML and meta tags

## 🛡 Security

- **HTTPS**: Secure connections enforced
- **Content Security Policy**: XSS protection
- **Dependency Updates**: Regular security updates
- **Input Validation**: Sanitized user inputs

## 📞 Support & Contact

### Toko Academy
- **Website**: [tokoacademy.org](https://tokoacademy.org)
- **Email**: academy@tokoacademy.org

### Ecom Toko Enterprise
- **Email**: info@toko.com.ng
- **Phone**: +234 808 825 6055, +234 812 856 1493
- **Location**: 2 Bekaji Road, Bekaji, Yola, Jimeta 640261, Adamawa, Nigeria

### Social Media
- **Instagram**: [@tokoacademy](https://instagram.com/tokoacademy)
- **Twitter**: [@tokoacademy](https://x.com/tokoacademy)
- **LinkedIn**: [Toko Academy](https://linkedin.com/company/tokoacademy)

## 📄 License

This project is proprietary software owned by Ecom Toko Enterprise. All rights reserved.

## 🙏 Acknowledgments

- **shadcn/ui**: For the beautiful component library
- **Tailwind CSS**: For the utility-first CSS framework
- **Lucide**: For the comprehensive icon set
- **React Team**: For the amazing React framework
- **Vite Team**: For the lightning-fast build tool

---

**Built with ❤️ by the Toko Technologies Team**

*Empowering Africa's digital transformation through innovative technology solutions.*