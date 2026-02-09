# Doctor's Aid 2.0 🏥

A modern, premium healthcare management platform built with React. Features a stunning glassmorphism UI with dark/light mode support.

![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### 🎨 Premium UI/UX
- **Glassmorphism Design** - Modern glass-like cards with blur effects
- **Dark/Light Mode** - One-click theme toggle with system preference detection
- **Custom Cursors** - Unique cursor design throughout the app
- **Micro-interactions** - Button ripples, hover lifts, smooth animations
- **Responsive Layout** - Works seamlessly on desktop and mobile

### 👥 Multi-Role System
- **Doctor Portal** - Patient management, appointments, health predictions
- **Patient Portal** - View records, appointments, health insights
- **Staff Portal** - Administrative tasks, patient intake, records management

### 🔮 Health Predictions
- Heart Disease Risk Assessment
- Diabetes Risk Prediction

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/doctors-aid-2.0.git

# Navigate to project
cd doctors-aid-2.0

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── common/          # Shared components (HomePage, Button, Card, ThemeToggle)
│   ├── doctor/          # Doctor-specific pages
│   ├── patient/         # Patient-specific pages
│   ├── staff/           # Staff-specific pages
│   └── predictions/     # Health prediction components
├── context/
│   └── ThemeContext.js  # Dark/Light mode management
├── styles/
│   ├── common/          # Design tokens, global styles
│   ├── doctor/          # Doctor page styles
│   ├── patient/         # Patient page styles
│   ├── staff/           # Staff page styles
│   └── predictions/     # Prediction page styles
└── App.js               # Main routing
```

---

## 🎨 Design System

### Color Palette

| Token | Light | Dark |
|-------|-------|------|
| Background | `#F8FAFC` | `#0F172A` |
| Primary Accent | `#2563EB` | `#3B82F6` |
| Success | `#059669` | `#10B981` |
| Text Primary | `#0F172A` | `#F1F5F9` |

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

---

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [React Router](https://reactrouter.com/) - Client-side routing
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling with custom properties

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run development server |
| `npm run build` | Create production build |
| `npm test` | Run test suite |

---

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Akshat**

---

## 🙏 Acknowledgments

- Design inspired by modern SaaS platforms (Linear, Vercel, Raycast)
- Icons from custom SVG designs
