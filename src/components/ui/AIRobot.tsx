import { motion } from 'framer-motion'

type Pose = 'hero' | 'features' | 'dashboard' | 'solutions' | 'about' | 'contact'

interface AIRobotProps {
  pose?: Pose
  size?: number
  className?: string
}

const poseConfig: Record<Pose, {
  bodyY: number
  headTilt: number
  leftArm: number
  rightArm: number
  eyeGlow: number
  scale: number
  floatRange: number
  floatDuration: number
  blinkInterval: number
}> = {
  hero: {
    bodyY: 0, headTilt: 0, leftArm: -12, rightArm: 12,
    eyeGlow: 1, scale: 1, floatRange: 12, floatDuration: 4, blinkInterval: 5,
  },
  features: {
    bodyY: -5, headTilt: 10, leftArm: 35, rightArm: -15,
    eyeGlow: 1.2, scale: 1, floatRange: 8, floatDuration: 5, blinkInterval: 4,
  },
  dashboard: {
    bodyY: 0, headTilt: -8, leftArm: -25, rightArm: 20,
    eyeGlow: 1.5, scale: 1, floatRange: 6, floatDuration: 3.5, blinkInterval: 6,
  },
  solutions: {
    bodyY: -3, headTilt: 6, leftArm: 20, rightArm: -20,
    eyeGlow: 1.1, scale: 1, floatRange: 10, floatDuration: 6, blinkInterval: 4.5,
  },
  about: {
    bodyY: 0, headTilt: -3, leftArm: 5, rightArm: -5,
    eyeGlow: 0.9, scale: 0.95, floatRange: 5, floatDuration: 4.5, blinkInterval: 3.5,
  },
  contact: {
    bodyY: -8, headTilt: -5, leftArm: -30, rightArm: 45,
    eyeGlow: 1.3, scale: 1.05, floatRange: 12, floatDuration: 4, blinkInterval: 5,
  },
}

const AIRobot = ({ pose = 'hero', size = 200, className = '' }: AIRobotProps) => {
  const c = poseConfig[pose]

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ scale: c.scale }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* 整体漂浮 */}
      <motion.div
        animate={{ y: [0, -c.floatRange, 0] }}
        transition={{ duration: c.floatDuration, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full h-full"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id={`body-${pose}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D6EFD" />
              <stop offset="50%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#0D6EFD" />
            </linearGradient>
            <linearGradient id={`face-${pose}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E293B" />
              <stop offset="100%" stopColor="#0F172A" />
            </linearGradient>
            <linearGradient id={`accent-${pose}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3DA4FF" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
            <filter id={`glow-${pose}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id={`sglow-${pose}`} x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* 地面投影 */}
          <motion.ellipse
            cx="100" cy="178" rx="50" ry="8"
            fill={`url(#body-${pose})`}
            opacity="0.12"
            animate={{ opacity: [0.08, 0.18, 0.08], rx: [45, 52, 45] }}
            transition={{ duration: c.floatDuration, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* 底座 */}
          <motion.g animate={{ y: c.bodyY }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <ellipse cx="100" cy="175" rx="42" ry="9" fill="#E2E8F0" />
            <rect x="68" y="161" width="64" height="14" rx="6" fill="#F1F5F9" />
            <motion.rect
              x="72" y="159" width="56" height="4" rx="2"
              fill={`url(#accent-${pose})`}
              opacity="0.6"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* 身体 */}
            <g>
              <rect x="60" y="95" width="80" height="70" rx="20" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
              <rect x="68" y="102" width="64" height="55" rx="14" fill="white" stroke="#E2E8F0" strokeWidth="1" />

              {/* 胸口核心 - 全息投影风格 */}
              <motion.g filter={`url(#sglow-${pose})`}>
                <circle cx="100" cy="130" r="16" fill={`url(#body-${pose})`} opacity="0.9" />
                <circle cx="100" cy="130" r="10" fill="white" opacity="0.3" />
                <motion.circle
                  cx="100" cy="130" r="6" fill="white" opacity="0.8"
                  animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* 旋转光环 */}
                <motion.circle
                  cx="100" cy="130" r="20" fill="none"
                  stroke={`url(#accent-${pose})`}
                  strokeWidth="1" strokeDasharray="4 3" opacity="0.4"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                  style={{ transformOrigin: '100px 130px' }}
                />
              </motion.g>

              <rect x="75" y="108" width="50" height="2" rx="1" fill="#E2E8F0" />
              <rect x="75" y="152" width="50" height="2" rx="1" fill="#E2E8F0" />

              {/* 状态灯 */}
              <circle cx="78" cy="118" r="3" fill="#10B981">
                <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="88" cy="118" r="3" fill="#F59E0B">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="98" cy="118" r="3" fill="#3B82F6">
                <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* 左臂 */}
            <motion.g
              style={{ originX: '60px', originY: '115px' }}
              animate={{ rotate: -c.leftArm }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <rect x="38" y="108" width="22" height="45" rx="11" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
              <rect x="42" y="148" width="14" height="12" rx="6" fill={`url(#body-${pose})`} opacity="0.8" />
              <circle cx="49" cy="154" r="4" fill="white" opacity="0.5" />
            </motion.g>

            {/* 右臂 */}
            <motion.g
              style={{ originX: '140px', originY: '115px' }}
              animate={{ rotate: c.rightArm }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <rect x="140" y="108" width="22" height="45" rx="11" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
              <rect x="144" y="148" width="14" height="12" rx="6" fill={`url(#body-${pose})`} opacity="0.8" />
              <circle cx="151" cy="154" r="4" fill="white" opacity="0.5" />
            </motion.g>

            {/* 头部 */}
            <motion.g
              style={{ originX: '100px', originY: '90px' }}
              animate={{ rotate: c.headTilt, y: c.bodyY * 0.8 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* 头部微摇摆 */}
              <motion.g
                animate={{ rotate: [0, 2, 0, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                style={{ transformOrigin: '100px 62px' }}
              >
                <rect x="55" y="30" width="90" height="65" rx="28" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="2" />
                <rect x="65" y="42" width="70" height="42" rx="18" fill={`url(#face-${pose})`} />

                {/* 眼睛 - 左 */}
                <motion.g filter={`url(#glow-${pose})`}>
                  <ellipse cx="82" cy="63" rx="10" ry="12" fill={`url(#body-${pose})`} opacity={c.eyeGlow * 0.9} />
                  <ellipse cx="82" cy="63" rx="6" ry="8" fill="white" opacity="0.4" />
                  {/* 瞳孔 - 带视线移动和眨眼 */}
                  <motion.g
                    animate={{
                      x: [0, 2, 0, -1, 0],
                      y: [0, -1, 0, 1, 0],
                    }}
                    transition={{
                      duration: c.blinkInterval,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <motion.ellipse
                      cx="82" cy="63" rx="3" ry="4" fill="white" opacity="0.9"
                      animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                      transition={{
                        duration: c.blinkInterval,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        times: [0, 0.45, 0.5, 0.55, 1],
                      }}
                      style={{ transformOrigin: '82px 63px' }}
                    />
                  </motion.g>
                </motion.g>

                {/* 眼睛 - 右 */}
                <motion.g filter={`url(#glow-${pose})`}>
                  <ellipse cx="118" cy="63" rx="10" ry="12" fill={`url(#body-${pose})`} opacity={c.eyeGlow * 0.9} />
                  <ellipse cx="118" cy="63" rx="6" ry="8" fill="white" opacity="0.4" />
                  <motion.g
                    animate={{
                      x: [0, 2, 0, -1, 0],
                      y: [0, -1, 0, 1, 0],
                    }}
                    transition={{
                      duration: c.blinkInterval,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    <motion.ellipse
                      cx="118" cy="63" rx="3" ry="4" fill="white" opacity="0.9"
                      animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                      transition={{
                        duration: c.blinkInterval,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        times: [0, 0.45, 0.5, 0.55, 1],
                      }}
                      style={{ transformOrigin: '118px 63px' }}
                    />
                  </motion.g>
                </motion.g>

                {/* 嘴巴 - 表情变化 */}
                <motion.rect
                  x="90" y="74" width="20" height="3" rx="1.5"
                  fill={`url(#body-${pose})`} opacity="0.6"
                  animate={{ width: [20, 26, 20], x: [90, 87, 90], rx: [1.5, 3, 1.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />

                <rect x="70" y="36" width="60" height="3" rx="1.5" fill={`url(#accent-${pose})`} opacity="0.7" />
                <rect x="58" y="52" width="4" height="20" rx="2" fill="#E2E8F0" />
                <rect x="138" y="52" width="4" height="20" rx="2" fill="#E2E8F0" />
              </motion.g>

              {/* 天线 - 带信号波 */}
              <g>
                <rect x="97" y="15" width="6" height="18" rx="3" fill={`url(#body-${pose})`} opacity="0.8" />
                <motion.circle
                  cx="100" cy="12" r="6" fill={`url(#body-${pose})`} filter={`url(#sglow-${pose})`}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.circle
                  cx="100" cy="12" r="3" fill="white" opacity="0.6"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
                {/* 信号波 */}
                <motion.circle
                  cx="100" cy="12" r="8" fill="none"
                  stroke={`url(#accent-${pose})`} strokeWidth="1" opacity="0.4"
                  animate={{ scale: [0.75, 1.75], opacity: [0.5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
                  style={{ transformOrigin: '100px 12px' }}
                />
              </g>

              {/* 耳朵传感器 */}
              <circle cx="55" cy="60" r="6" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="2" />
              <motion.circle
                cx="55" cy="60" r="2.5" fill={`url(#body-${pose})`}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
              <circle cx="145" cy="60" r="6" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="2" />
              <motion.circle
                cx="145" cy="60" r="2.5" fill={`url(#body-${pose})`}
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              />
            </motion.g>
          </motion.g>

          {/* 浮动粒子 - 更丰富 */}
          <motion.g animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
            <circle cx="35" cy="80" r="2" fill={`url(#body-${pose})`} opacity="0.5">
              <animate attributeName="cy" values="80;68;80" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="165" cy="90" r="2" fill={`url(#body-${pose})`} opacity="0.5">
              <animate attributeName="cy" values="90;76;90" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="40" cy="130" r="1.5" fill={`url(#body-${pose})`} opacity="0.4">
              <animate attributeName="cy" values="130;118;130" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="160" cy="140" r="1.5" fill={`url(#body-${pose})`} opacity="0.4">
              <animate attributeName="cy" values="140;126;140" dur="3.2s" repeatCount="indefinite" />
            </circle>
            <circle cx="50" cy="50" r="1" fill={`url(#accent-${pose})`} opacity="0.5">
              <animate attributeName="cy" values="50;40;50" dur="2s" repeatCount="indefinite" />
            </circle>
            <circle cx="150" cy="45" r="1" fill={`url(#accent-${pose})`} opacity="0.5">
              <animate attributeName="cy" values="45;35;45" dur="2.3s" repeatCount="indefinite" />
            </circle>
          </motion.g>

          {/* 数据流粒子 - 不同pose不同效果 */}
          {pose === 'dashboard' && (
            <g>
              <circle cx="140" cy="130" r="1.5" fill="#3DA4FF" opacity="0.6">
                <animate attributeName="cx" values="140;60;140" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" values="130;110;130" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="60" cy="120" r="1.5" fill="#818CF8" opacity="0.6">
                <animate attributeName="cx" values="60;140;60" dur="2.5s" repeatCount="indefinite" />
                <animate attributeName="cy" values="120;100;120" dur="2.5s" repeatCount="indefinite" />
              </circle>
            </g>
          )}

          {pose === 'features' && (
            <g>
              <rect x="-3" y="-3" width="6" height="6" rx="1" fill="#3DA4FF" opacity="0.5">
                <animateTransform attributeName="transform" type="translate" values="30,100;170,90;30,100" dur="4s" repeatCount="indefinite" />
              </rect>
            </g>
          )}

          {pose === 'contact' && (
            <g>
              <circle cx="100" cy="40" r="2" fill="#10B981" opacity="0.5">
                <animate attributeName="cx" values="100;160" dur="2s" repeatCount="indefinite" />
                <animate attributeName="cy" values="40;20" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite" />
              </circle>
            </g>
          )}
        </svg>
      </motion.div>
    </motion.div>
  )
}

export default AIRobot
