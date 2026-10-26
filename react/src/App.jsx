import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Resources from './components/Resources'
import Footer from './components/Footer'

const skills = [
  'HTML: структура документа, семантичні теги, списки та посилання.',
  'React: компоненти, JSX і передавання даних через props.',
  'Git: відстеження змін і створення комітів.',
  'Chrome DevTools: аналіз мережі та захищеного з’єднання.',
]

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f3ed] font-[Trebuchet_MS,sans-serif] leading-[1.65] text-[#173c34] flow-root">
      <Header
        name="Хомишин Віталій Вікторович"
        role="Студент групи КБ-208 · Кібербезпека та вебтехнології"
      />
      <main className="mx-auto w-[calc(100%-2rem)] my-4 grid max-w-[1120px] grid-cols-1 gap-4 md:w-[calc(100%-4rem)] md:my-6 md:grid-cols-[1.4fr_1fr] md:gap-6">
        <About />
        <Education />
        <Experience />
        <Skills items={skills} />
        <Resources />
      </main>
      <Footer />
    </div>
  )
}
