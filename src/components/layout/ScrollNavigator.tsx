import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const sections = [
  { id: 'hero', label: '首页' },
  { id: 'features', label: '核心功能' },
  { id: 'dashboard', label: '数字驾驶舱' },
  { id: 'solutions', label: '解决方案' },
  { id: 'pricing', label: '版本定价' },
  { id: 'partnership', label: '合作分销' },
  { id: 'about', label: '关于我们' },
  { id: 'contact', label: '联系咨询' },
]

const ScrollNavigator = () => {
  const [activeSection, setActiveSection] = useState('hero')
  const [showBackTop, setShowBackTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollTop / docHeight)
      setShowBackTop(scrollTop > 400)

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i].id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* 右侧section指示器 */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => handleClick(section.id)}
            className="group relative flex items-center justify-end gap-2"
          >
            <span
              className={`absolute right-6 whitespace-nowrap text-xs font-medium px-2.5 py-1 rounded-lg transition-all duration-300 ${
                activeSection === section.id
                  ? 'opacity-100 text-white bg-primary-500'
                  : 'opacity-0 group-hover:opacity-100 text-dark-900/60 bg-white shadow-soft border border-light-200'
              }`}
            >
              {section.label}
            </span>
            <motion.div
              className={`rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'w-3 h-3 bg-primary-500'
                  : 'w-2 h-2 bg-dark-900/20 group-hover:bg-primary-400'
              }`}
              whileHover={{ scale: 1.3 }}
            />
          </button>
        ))}

        {/* 滚动进度条 */}
        <div className="mt-2 w-px h-16 bg-light-300 rounded-full overflow-hidden relative">
          <motion.div
            className="absolute top-0 left-0 right-0 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full"
            style={{ height: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>

      {/* 返回顶部按钮 */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-white shadow-soft-lg border border-light-200 flex items-center justify-center group hover:shadow-glow transition-shadow"
          >
            <ArrowUp className="w-5 h-5 text-primary-500 group-hover:-translate-y-0.5 transition-transform" />
            {/* 滚动进度环 */}
            <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="rgba(13, 110, 253, 0.15)"
                strokeWidth="2"
              />
              <motion.circle
                cx="24"
                cy="24"
                r="22"
                fill="none"
                stroke="#0D6EFD"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 22}`}
                style={{ strokeDashoffset: 2 * Math.PI * 22 * (1 - scrollProgress) }}
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScrollNavigator
