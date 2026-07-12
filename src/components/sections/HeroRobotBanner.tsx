import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Cpu,
  Shield,
  BarChart3,
  Network,
  Zap,
  ArrowRight,
} from 'lucide-react'

interface BannerSlide {
  id: number
  icon: typeof Cpu
  title: string
  highlight: string
  desc: string
  gradient: string
  metric: string
  metricLabel: string
}

const slides: BannerSlide[] = [
  {
    id: 0,
    icon: Cpu,
    title: 'AI 智能运维',
    highlight: '预测性故障预警',
    desc: '融合大模型能力，实现告警智能降噪与根因分析，让运维从被动响应转向主动预防',
    gradient: 'from-cyan-500 to-blue-600',
    metric: '99.9%',
    metricLabel: '预测准确率',
  },
  {
    id: 1,
    icon: BarChart3,
    title: '数字驾驶舱',
    highlight: '全局可视化掌控',
    desc: '核心运行指标以可视化大屏集中呈现，实时数据刷新，多维度分析让决策有据可依',
    gradient: 'from-violet-500 to-purple-600',
    metric: '30+',
    metricLabel: '数据维度',
  },
  {
    id: 2,
    icon: Shield,
    title: '安全合规',
    highlight: '等保三级认证',
    desc: '信创全栈适配，国密算法加密，完整审计日志追溯，满足政务与金融行业合规要求',
    gradient: 'from-emerald-500 to-teal-600',
    metric: '99.99%',
    metricLabel: '系统可用性',
  },
  {
    id: 3,
    icon: Network,
    title: '开放生态',
    highlight: 'API 无缝集成',
    desc: '开放标准接口与合作伙伴生态，支持深度定制与二次开发，构建可持续演进的运维体系',
    gradient: 'from-amber-500 to-orange-600',
    metric: '500+',
    metricLabel: '生态合作伙伴',
  },
  {
    id: 4,
    icon: Zap,
    title: '智能巡检',
    highlight: '全自动无人值守',
    desc: '智能巡检路线规划，移动端实时上报，异常自动派单闭环，巡检效率提升 10 倍',
    gradient: 'from-pink-500 to-rose-600',
    metric: '10x',
    metricLabel: '效率提升',
  },
]

const HeroRobotBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isSliding, setIsSliding] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  // 自动循环切换 Banner
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setIsSliding(true)
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setTimeout(() => setIsSliding(false), 800)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  // 手动切换
  const goToSlide = (index: number) => {
    if (index === currentSlide) return
    setDirection(index > currentSlide ? 1 : -1)
    setIsSliding(true)
    setCurrentSlide(index)
    setTimeout(() => setIsSliding(false), 800)
  }

  const currentBanner = slides[currentSlide]
  const CurrentIcon = currentBanner.icon

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      {/* 外层光晕 */}
      <div className="absolute -inset-8 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-full blur-3xl opacity-50 animate-pulse-slow" />

      <div className="relative flex items-center justify-center gap-0">
        {/* 左侧：机器人（简化版，手伸向 Banner） */}
        <RobotWithTouch isSliding={isSliding} direction={direction} />

        {/* 右侧：Banner 显示屏 */}
        <div className="relative flex-1 max-w-md -ml-4 z-10">
          {/* 屏幕外框 */}
          <div className="relative rounded-3xl bg-gradient-to-br from-dark-900 to-slate-800 p-1.5 shadow-2xl border border-white/10">
            {/* 屏幕内容区 */}
            <div className="relative rounded-[20px] overflow-hidden bg-white h-[340px]">
              {/* 顶部状态栏 */}
              <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 py-2 bg-white/80 backdrop-blur-md border-b border-light-100">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <span className="text-[10px] font-medium text-dark-900/40 tracking-wider">YOUMU · LIVE</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[10px] text-green-600 font-medium">实时</span>
                </div>
              </div>

              {/* Banner 滑动内容区 */}
              <div className="relative h-full pt-9">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={{
                      enter: (dir: number) => ({
                        opacity: 0,
                        x: dir > 0 ? '100%' : '-100%',
                        scale: 0.9,
                      }),
                      center: {
                        opacity: 1,
                        x: '0%',
                        scale: 1,
                      },
                      exit: (dir: number) => ({
                        opacity: 0,
                        x: dir > 0 ? '-30%' : '30%',
                        scale: 0.95,
                      }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="absolute inset-0 pt-9"
                  >
                    {/* 渐变背景 */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentBanner.gradient} opacity-5`} />

                    {/* 内容 */}
                    <div className="relative h-full flex flex-col justify-between p-6">
                      {/* 顶部：图标 + 标签 */}
                      <div>
                        <motion.div
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                          className={`inline-flex w-12 h-12 rounded-2xl bg-gradient-to-br ${currentBanner.gradient} items-center justify-center mb-4 shadow-lg`}
                        >
                          <CurrentIcon className="w-6 h-6 text-white" />
                        </motion.div>

                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r ${currentBanner.gradient} bg-clip-text text-transparent rounded-full text-xs font-semibold mb-3`}>
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${currentBanner.gradient}`} />
                          {currentBanner.highlight}
                        </div>

                        <h3 className="text-2xl font-bold text-dark-900 mb-2">
                          {currentBanner.title}
                        </h3>
                        <p className="text-sm text-dark-900/60 leading-relaxed">
                          {currentBanner.desc}
                        </p>
                      </div>

                      {/* 底部：数据指标 */}
                      <div className="flex items-end justify-between">
                        <div>
                          <div className={`text-3xl font-bold bg-gradient-to-r ${currentBanner.gradient} bg-clip-text text-transparent`}>
                            {currentBanner.metric}
                          </div>
                          <div className="text-xs text-dark-900/50 mt-0.5">
                            {currentBanner.metricLabel}
                          </div>
                        </div>
                        <button className="inline-flex items-center gap-1 px-3 py-1.5 bg-dark-900 text-white rounded-full text-xs font-medium hover:gap-2 transition-all">
                          了解更多
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 滑动同步反馈：扫描光带 */}
              <AnimatePresence>
                {isSliding && (
                  <motion.div
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: '100%', opacity: [0, 1, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className={`absolute top-9 bottom-0 left-0 w-32 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none z-30 skew-x-12`}
                  />
                )}
              </AnimatePresence>

              {/* 触摸点反馈光晕（机器人手指接触位置） */}
              <motion.div
                className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none"
                animate={{
                  scale: isSliding ? [1, 1.8, 1] : 1,
                  opacity: isSliding ? [0.6, 1, 0.6] : 0.5,
                }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${currentBanner.gradient} blur-md opacity-60`} />
                <div className="absolute inset-0 w-8 h-8 rounded-full border-2 border-white/60" />
              </motion.div>
            </div>
          </div>

          {/* 底部指示器 */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {slides.map((slide, i) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(i)}
                className="group relative"
                aria-label={`切换到 ${slide.title}`}
              >
                <motion.div
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'w-8' : 'w-1.5'
                  }`}
                  style={{
                    background: i === currentSlide
                      ? `linear-gradient(to right, ${getGradientColors(slide.gradient)})`
                      : 'rgba(13, 110, 253, 0.2)',
                  }}
                  whileHover={{ scale: 1.2 }}
                />
              </button>
            ))}
          </div>

          {/* 底部提示文字 - 整合AI在线状态 */}
          <motion.div
            key={`hint-${currentSlide}`}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mt-4"
          >
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-green-500 animate-ping" />
              </div>
              <span className="text-xs text-dark-900/60">AI 助手在线</span>
            </div>
            <div className="h-3 w-px bg-dark-900/10" />
            <span className="text-xs text-dark-900/40">智能演示 · {currentSlide + 1} / {slides.length}</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// 辅助函数：获取渐变颜色
function getGradientColors(gradient: string): string {
  const map: Record<string, string> = {
    'from-cyan-500 to-blue-600': '#06B6D4, #2563EB',
    'from-violet-500 to-purple-600': '#8B5CF6, #9333EA',
    'from-emerald-500 to-teal-600': '#10B981, #0D9488',
    'from-amber-500 to-orange-600': '#F59E0B, #EA580C',
    'from-pink-500 to-rose-600': '#EC4899, #E11D48',
  }
  return map[gradient] || '#0D6EFD, #6366F1'
}

// 简化版机器人组件 - 手伸向 Banner
interface RobotProps {
  isSliding: boolean
  direction: number
}

const RobotWithTouch = ({ isSliding, direction }: RobotProps) => {
  return (
    <motion.div
      className="relative z-20 flex-shrink-0"
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <svg viewBox="0 0 160 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 h-40 md:w-36 md:h-44">
        <defs>
          <linearGradient id="heroRobotBody" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0D6EFD" />
            <stop offset="50%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#0D6EFD" />
          </linearGradient>
          <linearGradient id="heroRobotFace" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>
          <linearGradient id="heroRobotAccent" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3DA4FF" />
            <stop offset="100%" stopColor="#818CF8" />
          </linearGradient>
          <filter id="heroRobotGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="heroRobotSglow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* 地面投影 */}
        <motion.ellipse
          cx="80" cy="192" rx="40" ry="6"
          fill="url(#heroRobotBody)"
          opacity="0.1"
          animate={{ opacity: [0.08, 0.15, 0.08], rx: [36, 42, 36] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* 底座 */}
        <ellipse cx="80" cy="188" rx="35" ry="7" fill="#E2E8F0" />
        <rect x="52" y="175" width="56" height="13" rx="6" fill="#F1F5F9" />
        <motion.rect
          x="56" y="173" width="48" height="4" rx="2"
          fill="url(#heroRobotAccent)"
          opacity="0.6"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* 身体 */}
        <g>
          <rect x="45" y="95" width="70" height="80" rx="18" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
          <rect x="52" y="102" width="56" height="65" rx="12" fill="white" stroke="#E2E8F0" strokeWidth="1" />

          {/* 胸口核心 */}
          <motion.g filter="url(#heroRobotSglow)">
            <circle cx="80" cy="135" r="14" fill="url(#heroRobotBody)" opacity="0.9" />
            <motion.circle
              cx="80" cy="135" r="6" fill="white" opacity="0.8"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.circle
              cx="80" cy="135" r="18" fill="none"
              stroke="url(#heroRobotAccent)"
              strokeWidth="1" strokeDasharray="3 2" opacity="0.4"
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              style={{ transformOrigin: '80px 135px' }}
            />
          </motion.g>

          {/* 状态灯 */}
          <circle cx="58" cy="115" r="2.5" fill="#10B981">
            <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="66" cy="115" r="2.5" fill="#F59E0B">
            <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="74" cy="115" r="2.5" fill="#3B82F6">
            <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* 左臂（机器人左侧，自然下垂） */}
        <motion.g
          style={{ originX: '45px', originY: '110px' }}
          animate={{ rotate: -8 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <rect x="28" y="103" width="18" height="42" rx="9" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
          <rect x="31" y="140" width="12" height="10" rx="5" fill="url(#heroRobotBody)" opacity="0.8" />
        </motion.g>

        {/* 右臂（伸向 Banner，抚摸动作） */}
        <motion.g
          style={{ originX: '115px', originY: '110px' }}
          animate={{
            rotate: isSliding
              ? [35, 45, 35]  // 滑动时手臂上下移动（抚摸动作）
              : 35,            // 静止时手臂伸向 Banner
          }}
          transition={{
            duration: isSliding ? 0.8 : 0.8,
            repeat: isSliding ? Infinity : 0,
            ease: 'easeInOut',
          }}
        >
          {/* 手臂 */}
          <rect x="115" y="103" width="18" height="42" rx="9" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
          {/* 手腕 */}
          <rect x="118" y="140" width="12" height="8" rx="4" fill="url(#heroRobotBody)" opacity="0.8" />
          {/* 手掌（指向 Banner） */}
          <motion.g
            animate={{
              x: isSliding ? [0, direction * 3, 0] : 0,  // 手指随滑动方向微移
            }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <circle cx="124" cy="150" r="7" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
            {/* 指尖光点（触摸 Banner 的位置） */}
            <motion.circle
              cx="131" cy="150" r="3"
              fill="url(#heroRobotAccent)"
              filter="url(#heroRobotGlow)"
              animate={{
                scale: isSliding ? [1, 1.5, 1] : 1,
                opacity: isSliding ? [0.6, 1, 0.6] : 0.5,
              }}
              transition={{ duration: 0.8, repeat: isSliding ? Infinity : 0, ease: 'easeInOut' }}
            />
          </motion.g>
        </motion.g>

        {/* 头部 */}
        <motion.g
          animate={{ rotate: [0, 2, 0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '80px 62px' }}
        >
          <rect x="38" y="25" width="84" height="70" rx="26" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
          <rect x="48" y="38" width="64" height="44" rx="16" fill="url(#heroRobotFace)" />

          {/* 眼睛 - 左 */}
          <motion.g filter="url(#heroRobotGlow)">
            <ellipse cx="63" cy="60" rx="9" ry="11" fill="url(#heroRobotBody)" opacity="0.9" />
            <ellipse cx="63" cy="60" rx="5" ry="7" fill="white" opacity="0.4" />
            <motion.ellipse
              cx="63" cy="60" rx="3" ry="4" fill="white" opacity="0.9"
              animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.5, 0.55, 1] }}
              style={{ transformOrigin: '63px 60px' }}
            />
          </motion.g>

          {/* 眼睛 - 右（看向 Banner 方向） */}
          <motion.g filter="url(#heroRobotGlow)">
            <ellipse cx="97" cy="60" rx="9" ry="11" fill="url(#heroRobotBody)" opacity="0.9" />
            <ellipse cx="97" cy="60" rx="5" ry="7" fill="white" opacity="0.4" />
            <motion.g
              animate={{ x: [0, 2, 0, 1, 0], y: [0, -1, 0, 1, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <motion.ellipse
                cx="97" cy="60" rx="3" ry="4" fill="white" opacity="0.9"
                animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.45, 0.5, 0.55, 1] }}
                style={{ transformOrigin: '97px 60px' }}
              />
            </motion.g>
          </motion.g>

          {/* 嘴巴 - 微笑 */}
          <motion.rect
            x="72" y="72" width="16" height="3" rx="1.5"
            fill="url(#heroRobotBody)" opacity="0.6"
            animate={{ width: [16, 20, 16], x: [72, 70, 72], rx: [1.5, 3, 1.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <rect x="52" y="30" width="56" height="3" rx="1.5" fill="url(#heroRobotAccent)" opacity="0.7" />
          <rect x="42" y="48" width="4" height="22" rx="2" fill="#E2E8F0" />
          <rect x="114" y="48" width="4" height="22" rx="2" fill="#E2E8F0" />
        </motion.g>

        {/* 天线 */}
        <g>
          <rect x="77" y="12" width="6" height="16" rx="3" fill="url(#heroRobotBody)" opacity="0.8" />
          <motion.circle
            cx="80" cy="10" r="5" fill="url(#heroRobotBody)" filter="url(#heroRobotSglow)"
            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.circle
            cx="80" cy="10" r="7" fill="none"
            stroke="url(#heroRobotAccent)" strokeWidth="1" opacity="0.4"
            animate={{ scale: [0.8, 1.6], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: '80px 10px' }}
          />
        </g>

        {/* 浮动粒子 */}
        <motion.g animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
          <circle cx="25" cy="70" r="1.5" fill="url(#heroRobotBody)" opacity="0.5">
            <animate attributeName="cy" values="70;58;70" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="140" cy="80" r="1.5" fill="url(#heroRobotAccent)" opacity="0.5">
            <animate attributeName="cy" values="80;68;80" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <circle cx="20" cy="120" r="1" fill="url(#heroRobotBody)" opacity="0.4">
            <animate attributeName="cy" values="120;108;120" dur="2.8s" repeatCount="indefinite" />
          </circle>
        </motion.g>
      </svg>
    </motion.div>
  )
}

export default HeroRobotBanner
