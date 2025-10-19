# Calcutta &lt;Hack/&gt; - Premium Vintage Hackathon Website

A beautifully crafted website for India's most prestigious heritage-meets-innovation hackathon, celebrating the vintage aesthetics and iconic symbols of Kolkata.

## 🏛️ Features

- **Vintage Calcutta Aesthetic**: Aged paper textures, ornate borders, and sepia tones
- **Iconic Symbols**: Yellow taxis, blue buses, historic trams, Howrah Bridge, and Victoria Memorial
- **Premium Design**: Elegant typography with Cinzel and Playfair Display fonts
- **Responsive Layout**: Beautiful on all devices
- **Smooth Animations**: Floating icons and fade-in effects
- **Complete Sections**:
  - Hero with ornate framing
  - About the hackathon
  - Event timeline
  - Hackathon tracks
  - Prizes & perks
  - Registration section
  - Footer with quick links

## 🎨 Design Elements

- **Color Palette**: Vintage sepia, dark brown, gold accents
- **Typography**: Display font (Cinzel) + Serif font (Playfair Display)
- **Decorative Elements**: Ornate corners, stamp effects, aged paper backgrounds
- **Icons**: Kolkata symbols (trams, buses, landmarks)

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📦 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **Framer Motion** - Animations (optional, ready for enhancement)

## 🎯 Customization

### Update Event Details
Edit the dates, location, and other details in `src/App.jsx`:
- Hero section: Update date, location, participant count
- Timeline: Modify event schedule
- Prizes: Update prize amounts and categories
- Registration: Update fees and contact information

### Modify Color Scheme
Edit `tailwind.config.js` to change the vintage color palette:
```js
colors: {
  vintage: {
    sepia: '#F4E5C2',
    dark: '#3E2C1D',
    brown: '#6B4423',
    gold: '#D4AF37',
    yellow: '#FFD700',
    blue: '#4A90E2',
  }
}
```

### Add More Sections
Create new components in `src/App.jsx` and add them to the main App component.

## 📱 Sections Included

1. **Navigation** - Fixed header with smooth scroll links
2. **Hero** - Grand introduction with ornate borders
3. **About** - Heritage meets innovation
4. **Timeline** - Event schedule with vintage styling
5. **Tracks** - Hackathon categories
6. **Prizes** - Prize pool and awards
7. **Register** - Call-to-action for registration
8. **Footer** - Links and contact information

## 🎨 Kolkata Heritage Elements

- 🚕 Yellow Ambassador Taxis
- 🚋 Historic Trams (First in Asia)
- 🚌 Blue Buses
- 🌉 Howrah Bridge
- 🏛️ Victoria Memorial

## 📄 License

Created for Calcutta &lt;Hack/&gt; 2024

---

**Made with ❤️ celebrating the heritage of Kolkata**
