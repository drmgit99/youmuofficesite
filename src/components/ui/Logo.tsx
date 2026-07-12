import { motion } from 'framer-motion'

interface LogoProps {
  size?: number
  className?: string
  animated?: boolean
}

const Logo = ({ size = 40, className = '', animated = false }: LogoProps) => {
  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      whileHover={animated ? { rotate: 360 } : undefined}
      transition={animated ? { duration: 1, ease: 'easeInOut' } : undefined}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <linearGradient id="logoMain" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D6EFD" />
            <stop offset="50%" stopColor="#4F8DFD" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="logoRind" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>
          <linearGradient id="logoShine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 外层光晕（科技感） */}
        <motion.circle
          cx="24"
          cy="24"
          r="22"
          fill="none"
          stroke="url(#logoMain)"
          strokeWidth="0.5"
          opacity="0.3"
          animate={animated ? { scale: [1, 1.08, 1], opacity: [0.2, 0.4, 0.2] } : undefined}
          transition={animated ? { duration: 3, repeat: Infinity, ease: 'easeInOut' } : undefined}
        />

        {/* 柚子外皮环 */}
        <circle cx="24" cy="24" r="22" fill="url(#logoRind)" />

        {/* 白色内皮层 */}
        <circle cx="24" cy="24" r="20" fill="#F1F5F9" />

        {/* 果肉 - 8瓣分割 */}
        <g>
          <circle cx="24" cy="24" r="18" fill="url(#logoMain)" />

          {/* 8瓣分割线 */}
          <g stroke="#FFFFFF" strokeWidth="1" opacity="0.55" strokeLinecap="round">
            <line x1="24" y1="6" x2="24" y2="24" />
            <line x1="24" y1="24" x2="37" y2="11" />
            <line x1="24" y1="24" x2="42" y2="24" />
            <line x1="24" y1="24" x2="37" y2="37" />
            <line x1="24" y1="24" x2="24" y2="42" />
            <line x1="24" y1="24" x2="11" y2="37" />
            <line x1="24" y1="24" x2="6" y2="24" />
            <line x1="24" y1="24" x2="11" y2="11" />
          </g>
        </g>

        {/* 中心科技光点 */}
        <motion.g filter="url(#logoGlow)">
          <circle cx="24" cy="24" r="5" fill="white" opacity="0.9" />
          <motion.circle
            cx="24"
            cy="24"
            r="3"
            fill="url(#logoMain)"
            animate={animated ? { scale: [1, 1.3, 1] } : undefined}
            transition={animated ? { duration: 2, repeat: Infinity, ease: 'easeInOut' } : undefined}
          />
        </motion.g>

        {/* 顶部高光弧 */}
        <path
          d="M24 4 A18 18 0 0 1 42 24"
          fill="none"
          stroke="url(#logoShine)"
          strokeWidth="3"
          opacity="0.7"
        />

        {/* 科技感电路点 */}
        <g fill="#FFFFFF" opacity="0.6">
          <circle cx="24" cy="8" r="1" />
          <circle cx="40" cy="24" r="1" />
          <circle cx="24" cy="40" r="1" />
          <circle cx="8" cy="24" r="1" />
        </g>

        {/* 连接线 */}
        <g stroke="#FFFFFF" strokeWidth="0.5" opacity="0.4" strokeLinecap="round">
          <line x1="24" y1="13" x2="24" y2="8" />
          <line x1="35" y1="24" x2="40" y2="24" />
          <line x1="24" y1="35" x2="24" y2="40" />
          <line x1="13" y1="24" x2="8" y2="24" />
        </g>
      </svg>
    </motion.div>
  )
}

export default Logo
