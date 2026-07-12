import { useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import {
  ArrowRight,
  ChevronDown,
  BarChart3,
  Shield,
  Zap,
  Server,
  Check,
  Users,
  DatabaseBackup,
  Package,
  ClipboardCheck,
  AlertTriangle,
  Wifi,
  Network,
  Globe,
  FileText,
  LayoutDashboard,
  Building2,
  Landmark,
  GraduationCap,
  Wallet,
  Factory,
  Heart,
  Mail,
  Phone,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare,
  Sparkles,
  Target,
  Rocket,
  Award,
  Layers,
} from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'
import AIRobot from '@/components/ui/AIRobot'
import Pricing from '@/components/sections/Pricing'
import Partnership from '@/components/sections/Partnership'
import HeroRobotBanner from '@/components/sections/HeroRobotBanner'

const features = [
  {
    id: 'visitor',
    title: '访客管理',
    description: '智能化访客登记与权限管理，确保机房安全可控',
    icon: Users,
    longDescription:
      '完善的访客管理系统，支持预约登记、身份核验、权限分配、访问轨迹追踪等全流程管理，确保机房访问安全可追溯。',
    features: [
      '在线预约与审批流程',
      '身份核验与登记',
      '访问权限精细化控制',
      '访问轨迹与录像回放',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'backup',
    title: '备份管理',
    description: '自动化数据备份与恢复策略，保障数据安全',
    icon: DatabaseBackup,
    longDescription:
      '全方位数据备份解决方案，支持多种备份策略、自动备份调度、增量备份、异地容灾等功能，保障核心数据安全。',
    features: [
      '全量/增量/差异备份',
      '自动备份调度策略',
      '备份数据加密存储',
      '快速恢复与演练',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'room',
    title: '机房管理',
    description: '机房基础设施全生命周期管理',
    icon: Server,
    longDescription:
      '机房环境与设备综合管理平台，涵盖动力环境监控、机柜管理、容量规划、能效优化等核心功能。',
    features: [
      '温湿度环境监控',
      'UPS与配电管理',
      '机柜空间可视化',
      '能效分析与优化',
    ],
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 'asset',
    title: '资产管理',
    description: 'IT资产全生命周期数字化管理',
    icon: Package,
    longDescription:
      '从采购入库到报废处置的资产全生命周期管理，支持资产盘点、状态追踪、维保管理、折旧计算等功能。',
    features: [
      '资产档案数字化',
      '条码/RFID快速盘点',
      '资产状态实时追踪',
      '维保与合同管理',
    ],
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 'inspection',
    title: '机房巡检',
    description: '规范化巡检流程，确保机房稳定运行',
    icon: ClipboardCheck,
    longDescription:
      '智能化巡检管理系统，支持巡检计划制定、巡检任务派发、移动巡检、异常上报与闭环处理。',
    features: [
      '巡检计划自动生成',
      '巡检路线智能规划',
      '移动巡检APP支持',
      '异常上报与派单',
    ],
    color: 'from-cyan-500 to-sky-500',
  },
  {
    id: 'fault',
    title: '故障处置',
    description: '快速响应与闭环管理，提升运维效率',
    icon: AlertTriangle,
    longDescription:
      '故障管理平台，实现故障发现、告警通知、工单派发、处理跟踪、复盘分析的全流程闭环管理。',
    features: [
      '多渠道告警接入',
      '智能告警分级降噪',
      '故障工单自动派发',
      '处理过程实时追踪',
    ],
    color: 'from-rose-500 to-red-500',
  },
  {
    id: 'network',
    title: '网络管理',
    description: '全方位网络监控与性能优化',
    icon: Wifi,
    longDescription:
      '企业级网络管理平台，支持网络拓扑自动发现、性能监控、故障诊断、配置管理、流量分析等功能。',
    features: [
      '网络设备自动发现',
      '实时性能监控',
      '链路质量分析',
      '配置备份与对比',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'topology',
    title: '拓扑图绘制',
    description: '可视化网络架构，直观展示网络全貌',
    icon: Network,
    longDescription:
      '专业的网络拓扑绘制工具，支持自动发现与手动绘制，提供丰富的设备图标与连线样式。',
    features: [
      '网络自动发现',
      '拖拽式拓扑绘制',
      '丰富设备图标库',
      '多层级拓扑展示',
    ],
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 'ipam',
    title: 'IP地址管理',
    description: 'IP地址资源统一规划与管理',
    icon: Globe,
    longDescription:
      '专业的IP地址管理系统，支持IP地址规划、分配、监控、回收全生命周期管理。',
    features: [
      'IP地址池管理',
      '子网划分与规划',
      'IP占用实时检测',
      'IP冲突告警',
    ],
    color: 'from-teal-500 to-cyan-600',
  },
  {
    id: 'logs',
    title: '操作日志',
    description: '全面审计追踪，确保操作可追溯',
    icon: FileText,
    longDescription:
      '统一的操作日志管理平台，采集各类系统操作日志，提供日志查询、审计分析、合规报告等功能。',
    features: [
      '多源日志采集',
      '日志全文检索',
      '操作行为审计',
      '合规报告生成',
    ],
    color: 'from-slate-500 to-gray-600',
  },
  {
    id: 'docs',
    title: '智能文档管理',
    description: '知识库智能化管理，助力团队高效协作',
    icon: FileText,
    longDescription:
      '智能文档管理系统，支持文档分类、版本控制、全文检索、知识图谱等功能，让团队知识沉淀与共享更高效。',
    features: [
      '智能文档分类与标签',
      '版本控制与历史追溯',
      '全文检索与智能推荐',
      '团队协作与权限管理',
    ],
    color: 'from-zinc-500 to-slate-600',
  },
  {
    id: 'dashboard',
    title: '数字驾驶舱',
    description: '数据可视化大屏，全局掌控机房状态',
    icon: LayoutDashboard,
    longDescription:
      '数据可视化驾驶舱，将机房核心指标以可视化方式呈现，支持自定义仪表盘、实时数据刷新。',
    features: [
      '可视化大屏展示',
      '实时数据刷新',
      '多维度数据分析',
      '自定义仪表盘',
    ],
    color: 'from-primary-500 to-accent-600',
  },
]

const solutions = [
  { title: '企业数字化转型', icon: Building2, color: 'from-blue-500 to-indigo-600', desc: '为中大型企业提供一体化数字化运维解决方案' },
  { title: '政务数字化', icon: Landmark, color: 'from-red-500 to-orange-600', desc: '满足政务系统安全合规要求的智能化管理方案' },
  { title: '智慧教育', icon: GraduationCap, color: 'from-green-500 to-teal-600', desc: '为高校和教育机构提供智慧校园数字化运维' },
  { title: '金融科技', icon: Wallet, color: 'from-purple-500 to-violet-600', desc: '满足金融行业高可用性要求的智能运维方案' },
  { title: '智能制造', icon: Factory, color: 'from-amber-500 to-orange-600', desc: '为制造企业提供工业互联网与IT设施协同管理' },
  { title: '智慧医疗', icon: Heart, color: 'from-pink-500 to-rose-600', desc: '为医疗机构提供安全可靠的数字化运维服务' },
]

const stats = [
  { value: 500, suffix: '+', label: '企业客户', desc: '遍布各行业的企业级客户' },
  { value: 99.99, suffix: '%', label: '系统可用性', desc: '全年稳定运行保障', decimal: 2 },
  { value: 30, suffix: '+', label: '核心功能模块', desc: '全方位数字化运维能力' },
  { value: 24, suffix: '/7', label: '技术支持', desc: '全天候专业技术服务' },
]

const milestones = [
  { year: '2018', title: '柚木成立', desc: '专注数字化运维管理领域' },
  { year: '2019', title: '产品1.0', desc: '首个版本正式发布' },
  { year: '2020', title: '快速成长', desc: '服务100+企业客户' },
  { year: '2021', title: '功能完善', desc: '12大功能模块全部上线' },
  { year: '2022', title: '市场拓展', desc: '覆盖全国主要城市' },
  { year: '2023', title: '产品升级', desc: '数字驾驶舱功能上线' },
  { year: '2024', title: 'AI赋能', desc: 'AI智能运维功能上线' },
  { year: '2025', title: '生态布局', desc: '开放平台与合作伙伴生态' },
  { year: '2026', title: '持续创新', desc: '打造行业领先的智慧运维平台' },
]

const Home = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  })
  const { scrollYProgress } = useScroll()
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95])

  const CountUpNumber = ({ end, suffix, decimals = 0 }: { end: number; suffix: string; decimals?: number }) => {
    const { count, ref } = useCountUp({ end, decimals })
    return (
      <span ref={ref}>
        {count}
        {suffix}
      </span>
    )
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', company: '', phone: '', email: '', interest: '', message: '' })
    }, 12000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Section transition helper
  const WaveDivider = ({ flip = false, color = '#F8FAFC' }: { flip?: boolean; color?: string }) => (
    <div className={`absolute left-0 right-0 pointer-events-none ${flip ? 'top-0' : 'bottom-0'}`}>
      <svg
        className="w-full h-16 md:h-24"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: flip ? 'rotate(180deg)' : 'none' }}
      >
        <path
          d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
          fill={color}
        />
      </svg>
    </div>
  )

  const SectionDivider = () => (
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-light-100 to-transparent pointer-events-none" />
  )

  return (
    <div className="relative">
      {/* 1. Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <div className="absolute inset-0 bg-grid opacity-40" />
          <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px]" />
          <div className="hero-glow top-1/4 right-1/4 w-[500px] h-[500px] opacity-60" />
          <div className="hero-glow bottom-1/4 left-1/4 w-[400px] h-[400px] opacity-40" />
          <div className="absolute top-20 left-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 opacity-60 rotate-12 animate-float" />
          <div className="absolute bottom-32 right-16 w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/10 to-primary-500/10 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 mb-8 bg-white/80 backdrop-blur border border-light-200 rounded-full shadow-soft"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                <span className="text-sm font-medium text-dark-900/80">AI 智能运维 · 2026 全新升级</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-dark-900 mb-6 leading-[1.1] tracking-tight"
              >
                柚木
                <span className="text-shimmer">信息化管理系统</span>
                <br />
                <span className="gradient-text">AI 驱动的智慧运维</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-lg md:text-xl text-dark-900/60 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed"
              >
                融合 AI 智能运维与开放生态，涵盖资产管理、智能巡检、数字驾驶舱等 30+ 核心功能，
                助力企业数字化、智能化升级，构建可持续演进的智慧运维体系
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
              >
                <button
                  onClick={() => scrollTo('contact')}
                  className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-full font-semibold hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="relative z-10">预约产品演示</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </button>
                <button
                  onClick={() => scrollTo('features')}
                  className="inline-flex items-center gap-2 px-8 py-4 text-dark-900 bg-white border border-light-200 rounded-full font-medium hover:bg-light-100 hover:shadow-soft transition-all duration-300"
                >
                  <Sparkles className="w-5 h-5 text-primary-500" />
                  探索全部功能
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-dark-900/50"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {['#3B82F6', '#10B981', '#F59E0B', '#8B5CF6'].map((color, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                  <span>500+ 企业信赖</span>
                </div>
                <div className="h-4 w-px bg-light-300" />
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1">4.9/5 满意度</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex justify-center lg:justify-end"
            >
              <HeroRobotBanner />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-dark-900/40">向下滚动探索更多</span>
          <button onClick={() => scrollTo('features')} className="group">
            <div className="w-8 h-12 rounded-full border-2 border-dark-900/20 flex items-start justify-center p-1.5 group-hover:border-primary-500/50 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 rounded-full bg-dark-900/40 group-hover:bg-primary-500 transition-colors"
              />
            </div>
          </button>
        </motion.div>

        <SectionDivider />
        <WaveDivider color="#F8FAFC" />
      </section>

      {/* 2. Stats Section (衔接元素) */}
      <section className="py-16 bg-light-100 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-center relative"
              >
                {index < 3 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gradient-to-b from-transparent via-light-300 to-transparent" />
                )}
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 tracking-tight">
                  <CountUpNumber end={stat.value} suffix={stat.suffix} decimals={stat.decimal || 0} />
                </div>
                <div className="text-base font-semibold text-dark-900 mb-1">{stat.label}</div>
                <p className="text-sm text-dark-900/50">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Features Section */}
      <section id="features" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-300 to-transparent" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
                <Layers className="w-4 h-4" />
                核心功能
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
                30+ 核心功能模块
                <br />
                <span className="gradient-text">覆盖数字化运维全场景</span>
              </h2>
              <p className="text-lg text-dark-900/60 max-w-xl">
                从基础设施到应用服务，从日常运维到智能决策，全面满足企业数字化、智能化运维需求
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-primary-500/15 via-accent-500/15 to-primary-500/15 rounded-full blur-3xl opacity-60" />
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [2, -1, 2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <AIRobot pose="features" size={240} />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: index * 0.04, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative bg-white rounded-2xl p-6 border border-light-200 hover:border-transparent hover:shadow-soft-lg transition-all duration-300 cursor-pointer card-glow overflow-hidden"
                >
                  <div className={`absolute -top-12 -right-12 w-24 h-24 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 shadow-md`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-base font-bold text-dark-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-dark-900/55 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-light-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-1.5">
                      {feature.features.slice(0, 2).map((f) => (
                        <span key={f} className="inline-flex items-center gap-1 text-xs text-dark-900/60">
                          <Check className="w-3 h-3 text-primary-500" />
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Dashboard Showcase Section */}
      <section id="dashboard" className="py-24 lg:py-32 bg-light-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-300 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
                <LayoutDashboard className="w-4 h-4" />
                数字驾驶舱
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
                数据可视化
                <br />
                <span className="gradient-text">全局掌控运维状态</span>
              </h2>
              <p className="text-lg text-dark-900/60 mb-10 leading-relaxed">
                数字驾驶舱将核心运行指标以可视化大屏方式集中呈现，实时数据刷新，多维度数据分析，
                让管理者一目了然，决策有据可依。
              </p>

              <div className="space-y-4">
                {[
                  { icon: BarChart3, title: '实时数据展示', desc: '系统运行状态秒级刷新，关键指标一目了然' },
                  { icon: Layers, title: '多维度分析', desc: '按区域、按类型、按时间多维度数据分析' },
                  { icon: Target, title: '自定义仪表盘', desc: '可自由配置关注的指标卡片和展示布局' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
                    className="flex gap-4 p-4 bg-white rounded-xl border border-light-200 hover:border-primary-200 hover:shadow-soft transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-lg shadow-primary-500/20">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-0.5">{item.title}</h4>
                      <p className="text-sm text-dark-900/60">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-3xl opacity-40" />
              
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <div className="bg-dark-900 p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/20 rounded-full blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
                    
                    {/* 扫描线效果 */}
                    <motion.div
                      className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/40 to-transparent z-20"
                      animate={{ top: ['0%', '100%', '0%'] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                    />

                    <div className="relative z-10 space-y-4">
                      {/* CPU/内存/存储 - 数值流动动画 */}
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { label: 'CPU', baseVal: 72, color: 'text-blue-400', barColor: 'from-blue-500 to-cyan-400' },
                          { label: '内存', baseVal: 65, color: 'text-violet-400', barColor: 'from-violet-500 to-purple-400' },
                          { label: '存储', baseVal: 58, color: 'text-emerald-400', barColor: 'from-emerald-500 to-teal-400' },
                        ].map((item, i) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="bg-white/5 rounded-lg p-3 text-center border border-white/10 relative overflow-hidden"
                          >
                            <motion.div
                              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${item.barColor} opacity-20`}
                              style={{ height: '100%' }}
                              animate={{ scaleY: [0, item.baseVal / 100, (item.baseVal - 5) / 100, item.baseVal / 100, 0], opacity: [0, 0.3, 0.2, 0.3, 0] }}
                              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
                            />
                            <motion.div
                              className={`text-2xl font-bold ${item.color} relative z-10`}
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}
                            >
                              {item.baseVal}%
                            </motion.div>
                            <div className="text-xs text-white/50 relative z-10">{item.label}使用率</div>
                          </motion.div>
                        ))}
                      </div>

                      {/* 网络流量趋势 - 流动柱状图 */}
                      <div className="h-32 bg-white/5 rounded-lg p-3 border border-white/10 flex items-end gap-1 relative overflow-hidden">
                        {Array.from({ length: 24 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-primary-600/80 to-primary-400 rounded-t relative overflow-hidden"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.03, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            style={{ transformOrigin: 'bottom', height: `${30 + Math.sin(i * 0.5) * 25 + 15}%` }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-transparent via-white/20 to-transparent"
                              animate={{ y: ['100%', '-100%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: i * 0.05 }}
                            />
                          </motion.div>
                        ))}
                        {/* 流动光带 */}
                        <motion.div
                          className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-primary-400/20 to-transparent pointer-events-none"
                          animate={{ x: ['0%', '100%'] }}
                          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          style={{ left: '-48px' }}
                        />
                      </div>

                      {/* 告警分布 + 在线率 */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                          <div className="text-xs text-white/50 mb-2">告警分布</div>
                          <div className="flex gap-1 h-6 overflow-hidden rounded">
                            {[
                              { w: 70, color: 'bg-emerald-500', label: '正常' },
                              { w: 20, color: 'bg-amber-500', label: '警告' },
                              { w: 10, color: 'bg-red-500', label: '故障' },
                            ].map((item, i) => (
                              <motion.div
                                key={i}
                                className={`${item.color} relative overflow-hidden`}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                style={{ transformOrigin: 'left', width: `${item.w}%` }}
                              >
                                <motion.div
                                  className="absolute inset-0 bg-white/20"
                                  animate={{ x: ['-100%', '200%'] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                                />
                              </motion.div>
                            ))}
                          </div>
                          <div className="flex justify-between mt-1.5 text-[10px] text-white/40">
                            <span>正常 70%</span>
                            <span>警告 20%</span>
                            <span>故障 10%</span>
                          </div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-3 border border-white/10 relative overflow-hidden">
                          <div className="text-xs text-white/50 mb-2">在线率</div>
                          <motion.div
                            className="text-xl font-bold text-emerald-400"
                            animate={{ opacity: [0.7, 1, 0.7] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          >
                            99.99%
                          </motion.div>
                          {/* 迷你脉冲圆环 */}
                          <div className="absolute top-2 right-2">
                            <div className="relative w-6 h-6">
                              <motion.div
                                className="absolute inset-0 rounded-full border-2 border-emerald-400/40"
                                animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                              />
                              <div className="absolute inset-1.5 rounded-full bg-emerald-400/60" />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* 底部数据流 */}
                      <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                        <motion.span
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          ●
                        </motion.span>
                        <motion.div
                          className="flex-1 overflow-hidden whitespace-nowrap"
                          animate={{ x: ['100%', '-100%'] }}
                          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                        >
                          [SYS] Node-01 OK · Node-02 OK · Node-03 OK · Network: 1.2Gbps · Latency: 3ms · Uptime: 99.99% · AI Monitor Active
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute -bottom-16 -right-8"
                >
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-2xl" />
                    <motion.div
                      animate={{ y: [0, -6, 0], rotate: [-3, 2, -3] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <AIRobot pose="dashboard" size={140} />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Solutions Section */}
      <section id="solutions" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-300 to-transparent" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                行业解决方案
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
                深耕各行业
                <br />
                <span className="gradient-text">赋能数字化转型</span>
              </h2>
              <p className="text-lg text-dark-900/60 max-w-xl">
                柚木信息以开放生态连接各行各业，深刻理解不同行业的数字化运维需求，提供量身定制的智能化解决方案
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-accent-500/15 via-primary-500/15 to-accent-500/15 rounded-full blur-3xl opacity-60" />
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [-2, 3, -2] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <AIRobot pose="solutions" size={220} />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative bg-light-100 rounded-2xl p-8 border border-light-200 hover:bg-white hover:border-transparent hover:shadow-soft-lg transition-all duration-500 overflow-hidden"
                >
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                  
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-dark-900/60 leading-relaxed mb-6">
                    {solution.desc}
                  </p>

                  <button
                    onClick={() => scrollTo('contact')}
                    className="inline-flex items-center gap-2 text-primary-500 font-medium text-sm group-hover:gap-3 transition-all"
                  >
                    了解方案详情
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Pricing Section */}
      <Pricing />

      {/* 7. Partnership Section */}
      <Partnership />

      {/* 8. About / Timeline Section */}
      <section id="about" className="py-24 lg:py-32 bg-light-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-300 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                关于柚木
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6 leading-tight">
                智慧运维 · 开放生态
                <br />
                <span className="gradient-text">让数字化更简单高效</span>
              </h2>
              <p className="text-dark-900/60 leading-relaxed mb-8">
                柚木信息成立于 2018 年，是一家专注于数字化、智能化运维管理的技术企业。
                我们的团队由资深技术专家组成，以开放生态理念打造可持续演进的智慧运维平台。
              </p>
              <p className="text-dark-900/60 leading-relaxed mb-8">
                经过 8 年深耕，柚木信息化管理系统已服务超过 500 家企业客户，
                涵盖金融、政府、教育、制造、医疗等多个行业，帮助客户实现从基础设施到业务运营的全面数字化、智能化升级。
              </p>
              
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Rocket, label: '持续创新' },
                  { icon: Shield, label: '安全可靠' },
                  { icon: Users, label: '客户至上' },
                  { icon: Zap, label: '快速响应' },
                ].map((v) => (
                  <div key={v.label} className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-light-200 shadow-sm">
                    <v.icon className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium text-dark-900/80">{v.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="relative pl-8 md:pl-12">
                <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-300 to-transparent" />
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, x: 20 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="absolute -top-6 -right-4 z-10"
                >
                  <div className="relative">
                    <div className="absolute -inset-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-xl" />
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <AIRobot pose="about" size={100} />
                    </motion.div>
                  </div>
                </motion.div>

                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={milestone.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.6 }}
                      className="relative"
                    >
                      <div className="absolute -left-8 md:-left-12 top-1 w-6 h-6 md:w-7 md:h-7 rounded-full bg-white border-2 border-primary-500 flex items-center justify-center shadow-md">
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-primary-500" />
                      </div>
                      <div className="bg-white rounded-xl p-5 border border-light-200 shadow-sm hover:shadow-soft transition-shadow">
                        <div className="text-primary-500 font-bold text-lg mb-1">{milestone.year}</div>
                        <h4 className="font-semibold text-dark-900 mb-0.5">{milestone.title}</h4>
                        <p className="text-sm text-dark-900/60">{milestone.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Contact Section */}
      <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-300 to-transparent" />
        <div className="absolute top-1/2 -left-48 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute -inset-8 bg-gradient-to-br from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-full blur-3xl opacity-60" />
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative"
                >
                  <AIRobot pose="contact" size={260} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -top-2 -right-2 bg-white rounded-2xl px-4 py-2.5 shadow-soft-lg border border-light-200"
                >
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                    </span>
                    <span className="text-sm font-semibold text-dark-900">在线为您服务</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-50 text-primary-600 rounded-full text-sm font-medium mb-6">
                <Mail className="w-4 h-4" />
                联系咨询
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
                开启您的
                <span className="gradient-text">智慧运维之旅</span>
              </h2>
              <p className="text-lg text-dark-900/60 max-w-xl">
                填写以下表单，我们的专业顾问将在 24 小时内与您联系，为您提供定制化数字化解决方案
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 space-y-5"
            >
              {[
                { icon: Mail, title: '商务邮箱', lines: ['97088968@qq.com', '97088969@qq.com'] },
                { icon: Clock, title: '服务时间', lines: ['工作日 9:00 - 18:00', '7×24 小时技术支持'] },
                { icon: Globe, title: '官方网站', lines: ['infosys.youmu75.com'] },
              ].map((info, idx) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="flex gap-4 p-5 bg-white rounded-2xl border border-light-200 hover:shadow-soft hover:border-primary-200 transition-all duration-300 cursor-default group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center shadow-md shadow-primary-500/20 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="text-sm text-dark-900/50 mb-0.5">{info.title}</div>
                    {info.lines.map((line) => (
                      <div key={line} className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors">{line}</div>
                    ))}
                  </div>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-primary-500 via-accent-500 to-primary-600 text-white"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
                <div className="relative z-10">
                  <h4 className="font-bold text-lg mb-4">为什么选择柚木？</h4>
                  <ul className="space-y-3">
                    {['专业技术团队，8年行业深耕', '500+企业客户信赖之选', '7×24小时技术支持服务', '灵活定制，按需扩展'].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-xl opacity-50" />
                <form onSubmit={handleSubmit} className="relative bg-white rounded-3xl p-6 md:p-8 lg:p-10 border border-light-200 shadow-soft-lg">
                  <div className="mb-8 pb-6 border-b border-light-100">
                    <h3 className="text-xl font-bold text-dark-900 mb-1">填写咨询信息</h3>
                    <p className="text-sm text-dark-900/50">我们将在 24 小时内与您取得联系</p>
                  </div>
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-6"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center"
                      >
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-2xl font-bold text-dark-900 mb-3"
                      >
                        提交成功！
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-dark-900/60 mb-6"
                      >
                        感谢您的咨询，我们的顾问将在 24 小时内与您联系
                      </motion.p>

                      {/* 邮箱优先联系提示弹窗 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative mt-4 p-5 bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-200 rounded-2xl text-left overflow-hidden"
                      >
                        <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary-500/10 rounded-full blur-2xl" />
                        <div className="relative flex items-start gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-dark-900 mb-1.5 flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-primary-500" />
                              建议优先通过邮箱联系我们
                            </h4>
                            <p className="text-xs text-dark-900/70 leading-relaxed mb-3">
                              为确保您能更快获取回复，我们强烈建议您同步发送一封邮件至商务邮箱，
                              我们的商务团队会对邮件咨询进行优先处理，通常可在 2 小时内回复。
                            </p>
                            <div className="flex flex-wrap items-center gap-2">
                              <a
                                href="mailto:97088968@qq.com?subject=柚木信息化管理系统 - 产品咨询"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-primary-600 rounded-full text-xs font-medium hover:shadow-soft transition-all border border-primary-200"
                              >
                                <Mail className="w-3 h-3" />
                                97088968@qq.com
                              </a>
                              <a
                                href="mailto:97088969@qq.com?subject=柚木信息化管理系统 - 产品咨询"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-primary-600 rounded-full text-xs font-medium hover:shadow-soft transition-all border border-primary-200"
                              >
                                <Mail className="w-3 h-3" />
                                97088969@qq.com
                              </a>
                            </div>
                            <p className="text-[11px] text-dark-900/50 mt-2.5 flex items-center gap-1">
                              <Zap className="w-3 h-3 text-amber-500" />
                              邮件咨询平均响应时间：2 小时 · 表单咨询响应时间：24 小时
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-dark-900">
                            您的姓名 <span className="text-red-500">*</span>
                          </label>
                          <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 group-focus-within:scale-110 transition-transform">
                              <User className="w-5 h-5" />
                            </div>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-3.5 bg-light-50 border border-light-200 rounded-2xl text-dark-900 placeholder-dark-900/30 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all"
                              placeholder="请输入您的姓名"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-dark-900">
                            公司名称
                          </label>
                          <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 group-focus-within:scale-110 transition-transform">
                              <Building className="w-5 h-5" />
                            </div>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3.5 bg-light-50 border border-light-200 rounded-2xl text-dark-900 placeholder-dark-900/30 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all"
                              placeholder="请输入公司名称"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-dark-900">
                            联系电话 <span className="text-red-500">*</span>
                          </label>
                          <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 group-focus-within:scale-110 transition-transform">
                              <Phone className="w-5 h-5" />
                            </div>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="w-full pl-12 pr-4 py-3.5 bg-light-50 border border-light-200 rounded-2xl text-dark-900 placeholder-dark-900/30 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all"
                              placeholder="请输入手机号码"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="block text-sm font-medium text-dark-900">
                            电子邮箱
                          </label>
                          <div className="relative group">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 group-focus-within:scale-110 transition-transform">
                              <Mail className="w-5 h-5" />
                            </div>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full pl-12 pr-4 py-3.5 bg-light-50 border border-light-200 rounded-2xl text-dark-900 placeholder-dark-900/30 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all"
                              placeholder="请输入邮箱地址"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-dark-900">
                          感兴趣的功能模块
                        </label>
                        <div className="relative group">
                          <select
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-light-50 border border-light-200 rounded-2xl text-dark-900 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all appearance-none cursor-pointer pr-12"
                          >
                            <option value="">请选择感兴趣的功能</option>
                            <option value="all">全部功能</option>
                            <option value="visitor">访客管理</option>
                            <option value="asset">资产管理</option>
                            <option value="inspection">机房巡检</option>
                            <option value="network">网络管理</option>
                            <option value="dashboard">数字驾驶舱</option>
                            <option value="other">其他</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-900/40 pointer-events-none">
                            <ChevronDown className="w-5 h-5" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-dark-900">
                          需求描述
                        </label>
                        <div className="relative group">
                          <div className="absolute left-4 top-4 text-primary-500 group-focus-within:scale-110 transition-transform">
                            <MessageSquare className="w-5 h-5" />
                          </div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full pl-12 pr-4 py-3.5 bg-light-50 border border-light-200 rounded-2xl text-dark-900 placeholder-dark-900/30 focus:border-primary-500 focus:bg-white focus:ring-4 focus:ring-primary-500/10 transition-all resize-none"
                            placeholder="请简要描述您的需求，我们将为您定制专属解决方案..."
                          />
                        </div>
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-gradient-to-r from-primary-500 to-accent-600 rounded-2xl font-semibold hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 btn-ripple group"
                      >
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        提交咨询
                      </motion.button>

                      <p className="text-xs text-dark-900/40 text-center">
                        提交即表示您同意我们的隐私政策，我们将妥善保管您的信息
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
