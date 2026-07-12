import { motion } from 'framer-motion'
import {
  HeartHandshake,
  TrendingUp,
  Gift,
  Shield,
  Users,
  Rocket,
  Award,
  Mail,
  ArrowRight,
  Building2,
  Briefcase,
  Globe,
} from 'lucide-react'

const Partnership = () => {
  const handleContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handleEmail = () => {
    window.location.href = 'mailto:97088968@qq.com?subject=柚木信息化管理系统 - 合作分销咨询'
  }

  // 合作模式
  const partnerTypes = [
    {
      icon: Briefcase,
      title: '区域代理商',
      desc: '在指定区域范围内开展产品销售与客户服务',
      color: 'from-blue-500 to-indigo-600',
      benefits: ['区域独家授权', '高额返佣政策', '本地化市场支持', '专属客户经理'],
    },
    {
      icon: Globe,
      title: '行业方案商',
      desc: '面向特定行业提供深度集成与定制化解决方案',
      color: 'from-emerald-500 to-teal-600',
      benefits: ['行业深度支持', '联合解决方案', '技术对接赋能', '联合市场推广'],
    },
    {
      icon: Building2,
      title: '系统集成商',
      desc: '将柚木产品融入整体 IT 项目交付给最终客户',
      color: 'from-amber-500 to-orange-600',
      benefits: ['项目报备保护', '实施认证培训', '项目专项折扣', '技术驻场支持'],
    },
    {
      icon: Users,
      title: '生态合作伙伴',
      desc: '技术互补、资源共享、联合创新的战略合作伙伴',
      color: 'from-purple-500 to-pink-600',
      benefits: ['生态资源对接', '产品深度集成', '联合品牌运营', '优先战略协同'],
    },
  ]

  // 分销权益
  const benefits = [
    {
      icon: TrendingUp,
      title: '丰厚返佣',
      desc: '阶梯式返佣机制，最高可达 40%，业绩越好收益越高',
    },
    {
      icon: Shield,
      title: '项目报备',
      desc: '完善的报备机制，保障合作伙伴商机归属与利益',
    },
    {
      icon: Gift,
      title: '市场支持',
      desc: '市场物料、Demo 环境、培训资源全方位支持',
    },
    {
      icon: Award,
      title: '认证体系',
      desc: '销售认证与技术认证双轨体系，赋能伙伴能力成长',
    },
    {
      icon: Rocket,
      title: '联合营销',
      desc: '联合展会、线上沙龙、客户活动等多形式市场协同',
    },
    {
      icon: HeartHandshake,
      title: '长期共赢',
      desc: '透明的合作政策与持续的伙伴成功服务体系',
    },
  ]

  // 合作流程
  const process = [
    { step: '01', title: '提交申请', desc: '填写合作申请表或邮件联系商务团队' },
    { step: '02', title: '资质审核', desc: '商务团队 3 个工作日内完成资质评估' },
    { step: '03', title: '签署协议', desc: '确认合作模式与权益，签署合作协议' },
    { step: '04', title: '赋能上线', desc: '完成认证培训，开通伙伴后台，正式开展合作' },
  ]

  return (
    <section id="partnership" className="py-24 lg:py-32 bg-light-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-300 to-transparent" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 -left-40 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-3xl" />

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
            <HeartHandshake className="w-4 h-4" />
            合作与分销
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 mb-6 leading-tight">
            携手同行
            <span className="gradient-text">共建智慧运维生态</span>
          </h2>
          <p className="text-lg text-dark-900/60 max-w-2xl mx-auto leading-relaxed">
            柚木信息始终坚持开放共赢的生态理念，诚邀各区域、各行业的合作伙伴加入我们的分销网络，
            共同开拓数字化运维市场的广阔蓝海，共享生态成长红利
          </p>
        </motion.div>

        {/* 合作模式 */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-dark-900 mb-10 text-center"
          >
            多元化合作模式
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerTypes.map((type, index) => {
              const Icon = type.icon
              return (
                <motion.div
                  key={type.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className="group relative bg-white rounded-2xl p-6 border border-light-200 hover:border-transparent hover:shadow-soft-lg transition-all duration-300 overflow-hidden"
                >
                  <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br ${type.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-dark-900 mb-2">{type.title}</h4>
                  <p className="text-sm text-dark-900/60 leading-relaxed mb-4">{type.desc}</p>
                  <ul className="space-y-1.5">
                    {type.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-xs text-dark-900/70">
                        <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${type.color}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 分销权益 */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-dark-900 mb-10 text-center"
          >
            伙伴专属权益
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="flex items-start gap-4 bg-white/60 backdrop-blur rounded-2xl p-5 border border-light-200 hover:bg-white hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-dark-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-dark-900/60 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* 合作流程 */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-dark-900 mb-10 text-center"
          >
            四步开启合作
          </motion.h3>
          <div className="relative">
            {/* 流程连接线 */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-300 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative text-center"
                >
                  <div className="relative inline-flex w-24 h-24 mx-auto mb-5">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 opacity-10" />
                    <div className="relative w-24 h-24 rounded-full bg-white border-2 border-primary-200 flex items-center justify-center">
                      <span className="text-2xl font-bold gradient-text">{item.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <ArrowRight className="hidden lg:block absolute top-1/2 -right-7 -translate-y-1/2 w-5 h-5 text-light-300" />
                    )}
                  </div>
                  <h4 className="text-base font-bold text-dark-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-dark-900/60 leading-relaxed max-w-[200px] mx-auto">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-accent-600 to-primary-700" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="relative z-10 p-8 md:p-12 lg:p-16 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
              className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center"
            >
              <HeartHandshake className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              成为柚木合作伙伴，共享生态红利
            </h3>
            <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              无论您是区域服务商、行业方案商还是系统集成商，我们都欢迎您加入柚木生态网络，
              携手开拓数字化运维千亿级市场，实现业务规模与收益的可持续增长
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={handleContact}
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                提交合作申请
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleEmail}
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur border border-white/30 text-white rounded-full font-medium hover:bg-white/20 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                邮件咨询商务
              </button>
            </div>
            <p className="text-white/60 text-xs mt-6">
              商务合作邮箱：97088968@qq.com · 97088969@qq.com
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Partnership
