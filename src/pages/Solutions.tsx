import { motion } from 'framer-motion'
import {
  Building2,
  Landmark,
  GraduationCap,
  Wallet,
  Factory,
  Heart,
  ArrowRight,
  Check,
} from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'

const solutions = [
  {
    id: 'enterprise',
    title: '企业数据中心',
    description: '为大中型企业数据中心提供一体化运维管理方案',
    icon: Building2,
    color: 'from-blue-500 to-indigo-600',
    features: [
      '多机房统一管理',
      '自动化巡检运维',
      '全面资产管理',
      '智能故障诊断',
    ],
  },
  {
    id: 'government',
    title: '政府机房',
    description: '满足政务机房安全合规要求的管理解决方案',
    icon: Landmark,
    color: 'from-red-500 to-orange-600',
    features: [
      '等保合规支持',
      '严格权限管控',
      '完整审计日志',
      '数据安全保障',
    ],
  },
  {
    id: 'education',
    title: '教育行业',
    description: '为高校和教育机构提供智慧校园机房管理',
    icon: GraduationCap,
    color: 'from-green-500 to-teal-600',
    features: [
      '多校区统一管理',
      '教学资源保障',
      '访客便捷管理',
      '运维成本优化',
    ],
  },
  {
    id: 'finance',
    title: '金融行业',
    description: '满足金融行业高可用性要求的机房管理方案',
    icon: Wallet,
    color: 'from-purple-500 to-violet-600',
    features: [
      '99.99% 高可用',
      '实时监控告警',
      '灾备一体化',
      '合规审计支持',
    ],
  },
  {
    id: 'manufacturing',
    title: '制造业',
    description: '为制造企业提供工业机房与IT设施管理方案',
    icon: Factory,
    color: 'from-amber-500 to-orange-600',
    features: [
      '工业环境适应',
      '设备全生命周期',
      '预测性维护',
      '能效优化管理',
    ],
  },
  {
    id: 'healthcare',
    title: '医疗行业',
    description: '为医疗机构提供安全可靠的机房运维管理',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    features: [
      '业务系统高可用',
      '数据安全防护',
      '精细化权限管理',
      '7×24小时监控',
    ],
  },
]

const caseStudies = [
  {
    company: '某大型国有银行',
    industry: '金融行业',
    result: '运维效率提升 60%',
    description:
      '部署智慧机房管理系统后，实现了全行数据中心的统一管理，运维人员效率大幅提升。',
  },
  {
    company: '某省政府办公厅',
    industry: '政府机关',
    result: '顺利通过等保三级',
    description:
      '完善的审计日志和权限管理，帮助客户顺利通过信息安全等级保护三级测评。',
  },
  {
    company: '某重点大学',
    industry: '教育行业',
    result: '管理成本降低 40%',
    description:
      '多校区机房统一管理平台，大幅减少人工巡检工作量，降低管理成本。',
  },
]

const Solutions = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-white relative overflow-hidden">
        <div className="hero-glow top-0 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <span className="text-primary-500 text-sm font-semibold mb-4 block">
              解决方案
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              行业解决方案
              <br />
              <span className="gradient-text">赋能各行业数字化转型</span>
            </h1>
            <p className="text-lg text-dark-900/60 max-w-2xl mx-auto">
              深耕机房运维领域，为不同行业客户提供量身定制的解决方案
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 lg:py-28 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <ScrollReveal key={solution.id} delay={index * 0.08}>
                  <div className="group bg-white rounded-2xl p-8 border border-light-200 hover:border-transparent hover:shadow-2xl hover:shadow-dark-900/5 transition-all duration-500 h-full relative overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    />
                    <div className="relative z-10">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-dark-900/60 mb-6 leading-relaxed">
                        {solution.description}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {solution.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-sm text-dark-900/70"
                          >
                            <Check className="w-4 h-4 text-primary-500 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      <a
                        href="/contact"
                        className="inline-flex items-center gap-2 text-primary-500 font-medium group-hover:gap-3 transition-all"
                      >
                        了解方案详情
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary-500 text-sm font-semibold mb-4 block">
                客户案例
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                数百家企业的共同选择
              </h2>
              <p className="text-lg text-dark-900/60">
                来自各行业的客户都在使用我们的产品提升机房管理效率
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.company} delay={index * 0.1}>
                <div className="bg-light-100 rounded-2xl p-8 h-full flex flex-col">
                  <div className="text-primary-500 text-sm font-semibold mb-2">
                    {study.industry}
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 mb-4">
                    {study.company}
                  </h3>
                  <div className="text-2xl font-bold gradient-text mb-4">
                    {study.result}
                  </div>
                  <p className="text-dark-900/60 leading-relaxed flex-1">
                    {study.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              为您的行业定制专属方案
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              联系我们的解决方案专家，获取最适合您的机房管理方案
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-dark-900 bg-white rounded-full font-medium hover:bg-light-100 transition-all duration-300"
            >
              咨询行业方案
              <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}

export default Solutions
