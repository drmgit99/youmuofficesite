import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from '@/components/ui/Logo'

const navLinks = [
  { name: '首页', href: '#hero' },
  { name: '核心功能', href: '#features' },
  { name: '数字驾驶舱', href: '#dashboard' },
  { name: '解决方案', href: '#solutions' },
  { name: '版本定价', href: '#pricing' },
  { name: '合作分销', href: '#partnership' },
  { name: '关于我们', href: '#about' },
  { name: '联系咨询', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.substring(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass border-b border-light-300/60 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#hero')
            }}
            className="flex items-center gap-3 group"
          >
            <Logo size={40} animated />
            <div className="flex flex-col">
              <span className="text-base font-bold text-dark-900 leading-tight group-hover:text-primary-600 transition-colors">
                柚木信息
              </span>
              <span className="text-[10px] text-dark-900/50 tracking-wider">
                YOUMU INFO SYSTEM
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1)
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive
                      ? 'text-primary-600'
                      : 'text-dark-900/70 hover:text-dark-900 hover:bg-light-100'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary-500 rounded-full"
                    />
                  )}
                </a>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                handleNavClick('#contact')
              }}
              className="group px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-full hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">预约演示</span>
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="relative z-10"
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2 text-dark-900 hover:bg-light-100 rounded-lg transition-colors"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMobileMenuOpen ? 'close' : 'menu'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden glass border-t border-light-200/60"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, index) => {
                const sectionId = link.href.substring(1)
                const isActive = activeSection === sectionId
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`block px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      isActive
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-dark-900/80 hover:bg-light-100'
                    }`}
                  >
                    {link.name}
                  </motion.a>
                )
              })}
              <div className="pt-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="block w-full px-4 py-3 text-center text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-xl hover:shadow-lg transition-shadow"
                >
                  预约演示
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
