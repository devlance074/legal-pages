# Devlance Legal Center

A modern, ultra-clean React application for displaying legal policies including Terms & Conditions, Privacy Policy, and Return & Refund Policy. Built with React, TypeScript, Tailwind CSS, and featuring dark mode support with professional styling similar to Stripe and Linear.

## ✨ Features

- **Three Legal Policy Pages**: Terms & Conditions, Privacy Policy, and Return & Refund Policy
- **Modern Design**: Clean, professional styling with excellent typography
- **Dark Mode Support**: Seamless light/dark theme switching with persistent preferences
- **Mobile-First Responsive**: Optimized for all device sizes from mobile to desktop
- **React Router**: Smooth navigation between pages
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling
- **Lucide Icons**: Beautiful, consistent iconography

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)

You can check your versions by running:
```bash
node --version
npm --version
```

### Installation

1. **Clone or download the project**
   ```bash
   git clone <https://github.com/devlance074/legal-pages.git>
   cd legal-ui-kit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```
   or with yarn:
   ```bash
   yarn dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

### Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Navigation header with logo and theme toggle
│   └── LegalLayout.tsx # Layout wrapper for legal pages
├── pages/              # Page components
│   ├── Home.tsx        # Landing page with policy navigation
│   ├── Terms.tsx       # Terms & Conditions page
│   ├── Privacy.tsx     # Privacy Policy page
│   └── Refund.tsx      # Return & Refund Policy page
├── App.tsx             # Main application component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Updating Legal Content

Each legal page contains placeholder content that you can easily customize:

- **Terms & Conditions**: Edit `src/pages/Terms.tsx`
- **Privacy Policy**: Edit `src/pages/Privacy.tsx`
- **Return & Refund Policy**: Edit `src/pages/Refund.tsx`

### Styling and Branding

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Typography**: Update font settings in the Tailwind configuration
- **Logo**: Replace the "D" logo in `src/components/Header.tsx`
- **Company Information**: Update company name and contact details throughout the pages

### Contact Information

The default contact email is set to `info@devlance.org`. To change this:

1. Search for `info@devlance.org` across all files
2. Replace with your preferred contact email
3. Update any other company-specific information as needed

## 🛠 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📱 Browser Support

This application supports all modern browsers including:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

If you encounter any issues or have questions, please contact us at [info@devlance.org](mailto:info@devlance.org).

## 🙏 Thank You!

Thank you for downloading and using the Devlance Legal Center template! We appreciate your support and hope this template serves your needs well.

### Help Us Grow! 🌟

If you found this template useful, please help us grow the Devlance marketplace by:

- ⭐ Starring this repository
- 🔗 Sharing [devlance.org](https://devlance.org) with your network
- 💬 Telling other developers about our marketplace
- 📝 Leaving a review or feedback

Your support helps us continue creating high-quality, professional templates and tools for the developer community. Together, we can build something amazing!

**Visit [devlance.org](https://devlance.org) to discover more premium templates and resources.**

---

Made with ❤️ by the Devlance Team