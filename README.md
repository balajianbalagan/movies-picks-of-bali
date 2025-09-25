# 🎬 Bali's Movie Recommendations

A beautiful, responsive Next.js application showcasing Bali's personal curated collection of exceptional films. Each movie comes with personal reviews and is categorized by mood and genre for easy discovery.

## ✨ Features

- **🎯 Curated Collection**: Hand-picked movies across 6 different mood categories
- **🔍 Smart Search**: Search by title, director, actors, or genre with intelligent suggestions
- **📱 Responsive Design**: Perfect viewing experience on both mobile and desktop
- **🎨 Modern UI**: Clean, gradient-based design with smooth animations
- **⚡ Fast Performance**: Optimized Next.js build with static export support
- **🎭 Movie Details**: Detailed modals with ratings, reviews, and cast information
- **🏷️ Category Filtering**: Filter movies by mood categories

## 🎭 Movie Categories

- **❤️ Heartwarming**: Movies that warm your heart
- **😭 Emotional**: Films that make you cry
- **💥 Action**: High-octane action films
- **😱 Horror**: Thrilling horror movies
- **🤯 Thriller**: Suspenseful and mind-bending films
- **🧠 Thoughtful**: Deep, philosophical cinema

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movies-of-bali
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build for Production

### Static Export (Recommended)

```bash
npm run build
```

This creates a static export in the `out` folder that can be deployed to any static hosting service.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **Animations**: CSS keyframes and Tailwind transitions

## 📁 Project Structure

```
movies-of-bali/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── MovieCard.tsx   # Individual movie card
│   │   ├── MovieModal.tsx  # Movie detail modal
│   │   ├── SearchBar.tsx   # Search with suggestions
│   │   └── CategoryFilter.tsx # Category filtering
│   ├── data/
│   │   └── movies.ts       # Movie data and categories
│   ├── types/
│   │   └── movie.ts        # TypeScript interfaces
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Main page component
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Adding New Movies

1. Open `app/data/movies.ts`
2. Add your movie to the appropriate category:

```typescript
{
  "title": "Movie Title",
  "year": "2023",
  "language": "English",
  "rating": 4.5,
  "review": "Your personal review here...",
  "genre": "Drama, Action",
  "director": "Director Name",
  "actors": "Actor 1, Actor 2",
  "poster": "https://poster-url.jpg" // Optional
}
```

## 📊 Movie Statistics

- **Total Movies**: 23+ curated films
- **Categories**: 6 mood-based categories
- **Languages**: English, Tamil, Korean, Arabic, French
- **Years**: Spanning from 1980 to 2023

## 👨‍💻 About

Created with ❤️ by Bali - A passionate movie lover and developer who believes in the power of cinema to inspire, educate, and transform.

Every movie in this collection has been personally watched and reviewed to ensure quality recommendations for fellow film enthusiasts.

---

**Made with Next.js + Tailwind CSS**