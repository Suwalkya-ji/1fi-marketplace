# 1Fi Shop & Marketplace — Frontend Assignment

An implementation of the **1Fi Marketplace** feature integrated directly into the 1Fi Shop experience. This project was developed as part of the **1Fi SDE Intern Assignment**, replicating the real-world design, aesthetics, and interaction flow seen on `https://app.1fi.in/shop`.

---

## 💡 Overview & Thought Process

The goal of this assignment is to extend the existing 1Fi Shop with a dedicated **1Fi Marketplace** tab, enabling users to discover electronics, customize product configurations (colors & storage variants), explore **0% No-Cost EMI plans**, and complete a purchase flow with instant feedback.

### Key Focus Areas
- **Pixel & Brand Fidelity**: Replicated 1Fi's exact design language — official Geist font family, brand purple (`#4A15D1`), muted container background (`#f7f7f8`), rounded-2xl cards, and the signature floating bottom dock.
- **Smooth Interaction & Responsiveness**: Mobile-first architecture framed within an authentic `540px` device container with fluid transitions, active states, and full viewport responsiveness across desktop and mobile screens.
- **Clean Component Architecture**: Built purely with React 18, Vite, and Tailwind CSS without third-party UI bloat or complex external dependencies.
- **Realistic Data & State Lifecycle**: Includes asynchronous API handling with simulated network delay, shimmering skeleton loaders, friendly error states with live retry, empty search fallbacks, and non-intrusive toast notifications.

---

## 📱 User Flow

```
1Fi Shop Home
   │
   ├── [Top Brands]
   ├── [Nearby Stores]
   └── [1Fi Marketplace] ◄── Active Tab
            │
            ├── 1. Browse & Filter (Search keyword / Category pills / Sort)
            │
            ├── 2. Product Card (Starting 0% EMI & Instant pricing)
            │        │
            │        ▼
            ├── 3. Product Details Modal
            │        ├── Thumbnail Gallery Preview
            │        ├── Color Finish Selector
            │        ├── Storage / Spec Variant Switcher (Live price updates)
            │        ├── Interactive 0% EMI Tenures (3M, 6M, 9M, 12M, 18M, 24M)
            │        └── Dynamic CTA ("Continue with 12-month EMI")
            │
            └── 4. Order Confirmation Modal (Clean summary with selected EMI schedule)
```

---

## ✨ Features

### 1. 3-Tab Shop Switcher
- **Top Brands**: Visual list of top brand partners.
- **Nearby Stores**: Store discovery with interactive city selector (`Jaipur`, `Delhi NCR`, `Bengaluru`, `Mumbai`) and live search.
- **1Fi Marketplace**: Full product catalog with real-time filtering and 0% EMI options.

### 2. Product Discovery & Filtering
- **Search Capsule**: Instant debounced search querying product titles, brands, and categories.
- **Category Pills**: Filter by `All`, `Smartphones`, `Laptops`, `Audio & Wearables`, and `Tablets`.
- **Sort Options**: Sort products by price (Low to High / High to Low), popular ratings, or best discount.

### 3. Interactive Product Details & Variant Configuration
- **Image Gallery**: Multi-angle product photo preview.
- **Color Selector**: Dynamic swatch selector reflecting selected finish.
- **Variant Selector**: Seamlessly switch specs (e.g. 128GB vs 256GB vs 512GB) with immediate price recalculations.
- **0% EMI Tenure Calculator**: Real-time breakdown of monthly installments across 3, 6, 9, 12, 18, and 24-month tenures.
- **Contextual Action Button**: The primary CTA label updates dynamically based on the active tenure choice (e.g. `Continue with 6-month EMI`).

### 4. Edge Cases & Resilience
- **Skeleton Shimmer**: Displays authentic placeholder cards while fetching catalogue data.
- **Error State**: Graceful error handling with an actionable **"Try Again"** button to retry API requests.
- **Empty State**: Clear search feedback when no items match with a one-click **"Reset Filters"** button.

---

## 🛠️ Tech Stack

| Technology | Role |
| :--- | :--- |
| **React 18** | UI component architecture and declarative state |
| **Vite** | Blazing-fast development server and optimized bundle build |
| **Tailwind CSS v3** | Modern utility-first styling with custom design tokens |
| **PostCSS & Autoprefixer** | Cross-browser CSS compatibility |
| **Google Fonts (Geist)** | 1Fi's official typography |

---

## 📁 Project Structure

```text
Shop/
├── index.html                 # HTML entry with Geist font & viewport configuration
├── package.json               # Scripts & dependencies (React 18, Vite, Tailwind CSS)
├── tailwind.config.js         # Custom 1Fi colors, typography, and spacing tokens
├── postcss.config.js          # PostCSS build configuration
├── vite.config.js             # Vite React configuration
├── .gitignore                 # Git ignore rules for node_modules, logs, and build artifacts
│
└── src/
    ├── main.jsx               # Application entry point mounting AppProvider
    ├── App.jsx                # Core Shop container and tab router
    ├── index.css              # Tailwind imports and root CSS custom properties
    │
    ├── components/            # Modular UI components
    │   ├── HeroBanner.jsx     # Official 1Fi promotional hero banner
    │   ├── ShopTabs.jsx       # 3-way tab selector with active indicators
    │   ├── TopBrandsList.jsx  # Top Brands partner list view
    │   ├── NearbyStoresList.jsx # Nearby stores with city selector & store cards
    │   ├── FilterBar.jsx      # Search input, sort dropdown, and category pills
    │   ├── ProductCard.jsx    # Reusable marketplace card with 0% EMI badge
    │   ├── ProductGrid.jsx    # Grid manager with Loading, Error, and Empty states
    │   ├── ProductDetailModal.jsx # Product modal with variant picking & EMI calculator
    │   ├── ConfirmationModal.jsx  # Clean purchase & EMI summary
    │   ├── BottomDock.jsx     # Floating capsule navigation dock
    │   └── Toast.jsx          # Notification toast system
    │
    ├── context/
    │   └── AppContext.jsx     # React Context state management
    │
    ├── data/
    │   └── mockData.js        # Product catalog, brand partners, and store fixtures
    │
    └── services/
        └── marketplaceApi.js  # Asynchronous API layer with latency & error simulation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) installed on your machine.

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone <repo-url>
   cd Shop
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` to explore the app.

### Build for Production

```bash
npm run build
```
