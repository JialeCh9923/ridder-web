# RIDDER Trader Group - Broker Program Platform

A modern and professional Vue 3 web application for the RIDDER Trader Group broker program.

## Features

- 🔐 **Member Login** - Secure authentication system
- 💼 **Member Wallet** - Home page with broker program details, account balance, and commission information
- 👤 **Member Profile** - User profile page with account information and broker level details
- 🚪 **Member Logout** - Secure logout functionality

## Tech Stack

- **Vue 3** - Progressive JavaScript framework
- **Vue Router** - Official router for Vue.js
- **Pinia** - State management for Vue
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling

## Project Structure

```
ridder-web/
├── src/
│   ├── components/
│   │   └── NavBar.vue          # Navigation bar component
│   ├── router/
│   │   └── index.js            # Vue Router configuration
│   ├── stores/
│   │   └── auth.js             # Pinia store for authentication
│   ├── views/
│   │   ├── Login.vue           # Login page
│   │   ├── Wallet.vue          # Wallet/Home page
│   │   └── Profile.vue         # Profile page
│   ├── App.vue                 # Root component
│   ├── main.js                 # Application entry point
│   └── style.css               # Global styles with Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Usage

### Login
- Navigate to `/login`
- Enter any email and password (demo mode)
- Click "登录 / Login" to authenticate

### Wallet (Home Page)
- Displays account balance, monthly profit, and total commission
- Shows broker program details with different tiers (RD1, RD3, RD5, RD10)
- Displays commission structure and profit sharing information
- Shows AI profit distribution percentages

### Profile
- View user account information
- See broker level details and benefits
- Check financial overview

### Logout
- Click the "登出" button in the navigation bar
- User will be redirected to the login page

## Broker Program Details

The application displays information about:
- **Broker Tiers**: RD1, RD3, RD5, RD10 with different investment levels
- **Commission Levels**: IB, TIB, BIB, MIB with varying commission rates
- **Profit Sharing**: Different percentages based on broker level
- **AI Profit Distribution**: 10% Group, 20% Reward, 70% Member

## Development

The application uses:
- Vue 3 Composition API
- Pinia for state management
- Vue Router for navigation
- Tailwind CSS for styling
- Vite for fast development and building

## License

This project is for demonstration purposes.

