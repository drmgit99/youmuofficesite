import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Check,
  Sparkles,
  Building2,
  Landmark,
  Cpu,
  Crown,
  ArrowRight,
  Star,
  Shield,
  Zap,
} from 'lucide-react'

type PlanId = 'basic' | 'enterprise' | 'government' | 'ai' | 'custom'

interface Plan {
  id: PlanId
  name: string
  tagline: string
  price: number | null
  priceUnit: string
  description: string
  icon: typeof Sparkles
  gradient: string
  glow: string
  features: string[]
  highlighted?: boolean
  badge?: string
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: '基础版',
    tagline: '小型团队起步之选',
    price: 8999,
    priceUnit: '元（买断制）',
    description: '一次付费，永久使用，适合小型团队和初创企业快速上手数字化运维管理',
    icon: Sparkles,
    gradient: 'from-sky-400 to-blue-500',
    glow: 'shadow-sky-500/30',
    features: [
      '10 大核心功能模块',
      '支持 5 个管理员账号',
      '单机部署，快速上线',
      '基础数据可视化看板',
      '工单系统与告警通知',
      '社区版技术支持',
      '季度版本更新',
    ],
  },
  {
    id: 'enterprise',
    name: '企业基础版',
    tagline: '中型企业优选方案',
    price: 8999,
    priceUnit: '元/年',
    description: '适合成长型企业，提供完整的数字化运维能力与协作支持',
    icon: Building2,
    gradient: 'from-indigo-500 to-violet-600',
    glow: 'shadow-violet-500/40',
    highlighted: true,
    badge: '热门推荐',
    features: [
      '20+ 核心功能模块',
      '支持 50 个管理员账号',
      '集群部署，高可用架构',
      '高级数据驾驶舱与自定义大屏',
      '资产全生命周期管理',
      '智能巡检与故障闭环',
      'API 开放接口',
      '7×24 小时专属技术支持',
      '月度版本更新与优化',
    ],
  },
  {
    id: 'government',
    name: '政务基础版',
    tagline: '政务合规安全之选',
    price: null,
    priceUnit: '咨询获取',
    description: '面向政府机构，满足等保合规与信创要求的本地化部署方案',
    icon: Landmark,
    gradient: 'from-red-500 to-orange-600',
    glow: 'shadow-orange-500/30',
    features: [
      '30+ 核心功能模块',
      '不限管理员账号数量',
      '信创全栈适配（国产化）',
      '等保三级合规认证',
      '国密算法数据加密',
      '完整审计日志与追溯',
      '私有化部署，数据本地化',
      '专属项目经理与运维团队',
      '定制化需求开发支持',
    ],
  },
  {
    id: 'ai',
    name: 'AI 智维版',
    tagline: 'AI 赋能智能运维',
    price: null,
    priceUnit: '咨询获取',
    description: '融合 AI 大模型能力，实现预测性运维与智能决策的下一代方案',
    icon: Cpu,
    gradient: 'from-cyan-500 to-emerald-500',
    glow: 'shadow-cyan-500/40',
    badge: 'AI 驱动',
    features: [
      '包含企业版全部功能',
      'AI 智能告警分析与降噪',
      '预测性故障预警与根因分析',
      'AI 智能巡检助手',
      '自然语言数据查询（NL2SQL）',
      '智能运维知识图谱',
      'AI 工单自动派发与处理建议',
      '大模型私有化部署支持',
      '持续模型训练与优化',
    ],
  },
  {
    id: 'custom',
    name: '定制版',
    tagline: '专属定制极致方案',
    price: null,
    priceUnit: '咨询获取',
    description: '面向大型集团与特殊场景，提供从架构到功能的深度定制服务',
    icon: Crown,
    gradient: 'from-amber-500 via-pink-500 to-purple-600',
    glow: 'shadow-purple-500/40',
    badge: '尊享定制',
    features: [
      '全部功能模块无限制开放',
      '不限账号数量与节点规模',
      '专属架构设计与混合云部署',
      '深度业务系统集成定制',
      '独立品牌与白标定制',
      '专属研发团队驻场支持',
      'SLA 99.99% 服务保障',
      '战略合作与生态共建',
      '终身免费升级与技术演进',
    ],
  },
]

const Pricing = () => {
  const [selectedId, setSelectedId] = useState<PlanId>('enterprise')
  const [direction, setDirection] = useState(0)

  const selectedPlan = plans.find((p) => p.id === selectedId)!

  const handleSelect = (id: PlanId) => {
    if (id === selectedId) return
    const oldIndex = plans.findIndex((p) => p.id === selectedId)
    const newIndex = plans.findIndex((p) => p.id === id)
    setDirection(newIndex > oldIndex ? 1 : -1)
    setSelectedId(id)
  }

  const handleConsult = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-300 to-transparent" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
            <Crown className="w-4 h-4" />
            版本与定价
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
            灵活选择
            <span className="gradient-text">专属版本</span>
          </h2>
          <p className="text-lg text-dark-900/60 max-w-2xl mx-auto">
            从初创团队到大型集团，从基础运维到 AI 智维，总有适合您的方案
          </p>
        </motion.div>

        {/* 版本选择器 - 透视3D标签栏 */}
        <div
          className="relative mb-12"
          style={{ perspective: '1200px' }}
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
            {plans.map((plan, index) => {
              const isActive = plan.id === selectedId
              const Icon = plan.icon
              // 透视：选中项突出，其他项后退
              const offset = index - plans.findIndex((p) => p.id === selectedId)
              return (
                <motion.button
                  key={plan.id}
                  onClick={() => handleSelect(plan.id)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.6 }}
                  animate={{
                    rotateY: isActive ? 0 : offset * -8,
                    translateZ: isActive ? 40 : 0,
                    scale: isActive ? 1.05 : 0.95,
                  }}
                  whileHover={{
                    translateZ: isActive ? 50 : 20,
                    scale: isActive ? 1.08 : 1,
                    transition: { duration: 0.3 },
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className={`relative px-4 md:px-6 py-3 md:py-4 rounded-2xl font-semibold transition-colors duration-300 backdrop-blur-xl border ${
                    isActive
                      ? `bg-gradient-to-br ${plan.gradient} text-white border-transparent shadow-2xl ${plan.glow}`
                      : 'bg-white/60 text-dark-900/70 border-light-200 hover:bg-white hover:text-dark-900 hover:shadow-soft'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="text-sm md:text-base whitespace-nowrap">{plan.name}</span>
                  </div>
                  {plan.badge && isActive && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -top-2 -right-2 px-2 py-0.5 text-[10px] font-bold bg-white text-primary-600 rounded-full shadow-soft border border-primary-200"
                    >
                      {plan.badge}
                    </motion.span>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* 价格卡片 - 3D 翻转切换 */}
        <div
          className="relative max-w-5xl mx-auto"
          style={{ perspective: '1600px' }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={selectedId}
              custom={direction}
              variants={{
                enter: (dir: number) => ({
                  opacity: 0,
                  rotateY: dir > 0 ? 35 : -35,
                  x: dir > 0 ? 80 : -80,
                  scale: 0.9,
                }),
                center: {
                  opacity: 1,
                  rotateY: 0,
                  x: 0,
                  scale: 1,
                },
                exit: (dir: number) => ({
                  opacity: 0,
                  rotateY: dir > 0 ? -35 : 35,
                  x: dir > 0 ? -80 : 80,
                  scale: 0.9,
                }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className={`relative rounded-3xl overflow-hidden shadow-2xl ${selectedPlan.glow}`}
            >
              {/* 渐变背景层 */}
              <div className={`absolute inset-0 bg-gradient-to-br ${selectedPlan.gradient} opacity-95`} />
              {/* 装饰光晕 */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/10 rounded-full blur-3xl" />
              {/* 装饰网格 */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* 左侧：版本信息 */}
                <div className="lg:col-span-5 p-8 lg:p-10 text-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                      <selectedPlan.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedPlan.name}</h3>
                      <p className="text-white/70 text-sm">{selectedPlan.tagline}</p>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    {selectedPlan.description}
                  </p>

                  {/* 价格展示 */}
                  <div className="mb-6">
                    {selectedPlan.price !== null ? (
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold">¥{selectedPlan.price.toLocaleString()}</span>
                        <span className="text-white/70 text-sm">/ {selectedPlan.priceUnit}</span>
                      </div>
                    ) : (
                      <div>
                        <div className="text-3xl font-bold mb-1">联系销售获取报价</div>
                        <div className="text-white/70 text-sm">{selectedPlan.priceUnit}</div>
                      </div>
                    )}
                  </div>

                  {/* CTA 按钮 */}
                  {selectedPlan.price !== null ? (
                    <button
                      onClick={handleConsult}
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-dark-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      立即咨询
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      onClick={handleConsult}
                      className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-dark-900 rounded-full font-semibold hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 group"
                    >
                      预约专属顾问
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}

                  {selectedPlan.badge && (
                    <div className="mt-6 inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-medium">
                      <Star className="w-3 h-3 fill-white" />
                      {selectedPlan.badge}
                    </div>
                  )}
                </div>

                {/* 右侧：功能列表 */}
                <div className="lg:col-span-7 p-8 lg:p-10 bg-white/95 backdrop-blur-xl">
                  <h4 className="text-sm font-semibold text-dark-900/80 uppercase tracking-wider mb-5 flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary-500" />
                    版本包含功能
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {selectedPlan.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                        className="flex items-start gap-2.5"
                      >
                        <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${selectedPlan.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-sm text-dark-900/75 leading-snug">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* 底部保障 */}
                  <div className="mt-6 pt-6 border-t border-light-200">
                    <div className="flex flex-wrap items-center gap-4 text-xs text-dark-900/50">
                      <div className="flex items-center gap-1.5">
                        <Shield className="w-3.5 h-3.5 text-emerald-500" />
                        版本升级保障
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                        专属实施服务
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-primary-500" />
                        数据安全承诺
                      </div>
                    </div>
                    <p className="mt-3 text-[10px] text-dark-900/40 leading-relaxed">
                      <span className="font-medium">升级说明：</span>
                      基础版买断后免费升级承诺不少于3年；订阅版订阅期内持续免费升级，中断订阅后免费升级承诺不少于3年。
                      以上承诺不包括新增核心功能，涵盖原功能的升级扩展及问题处理。
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 底部提示 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-sm text-dark-900/50 mt-10"
        >
          所有版本均提供免费演示与试用 · 支持按需升级 · 可叠加购买扩展模块
        </motion.p>
      </div>
    </section>
  )
}

export default Pricing
