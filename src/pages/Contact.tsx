import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  User,
  Building,
  MessageSquare,
} from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    interest: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        interest: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: '咨询热线',
      content: '400-888-8888',
      sub: '工作日 9:00-18:00',
    },
    {
      icon: Mail,
      title: '电子邮箱',
      content: 'contact@yminfo.com',
      sub: '24小时内回复',
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '北京市海淀区中关村科技园',
      sub: '欢迎莅临参观',
    },
    {
      icon: Clock,
      title: '技术支持',
      content: '7×24 小时服务',
      sub: '专业技术团队',
    },
  ]

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
              联系我们
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              让我们开始对话
              <br />
              <span className="gradient-text">为您定制专属方案</span>
            </h1>
            <p className="text-lg text-dark-900/60 max-w-2xl mx-auto">
              无论您是想了解产品、预约演示，还是有任何问题，我们都随时欢迎您的咨询
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="pb-16 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <ScrollReveal key={info.title} delay={index * 0.08}>
                  <div className="bg-white rounded-2xl p-6 border border-light-200 hover:shadow-lg hover:shadow-dark-900/5 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <h3 className="text-dark-900/60 text-sm mb-1">
                      {info.title}
                    </h3>
                    <p className="text-lg font-semibold text-dark-900 mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-dark-900/40">{info.sub}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <ScrollReveal>
              <div className="lg:col-span-2">
                <span className="text-primary-500 text-sm font-semibold mb-4 block">
                  预约演示
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                  填写表单，获取专属方案
                </h2>
                <p className="text-dark-900/60 mb-8 leading-relaxed">
                  填写您的信息，我们的专业顾问将在 24
                  小时内与您联系，为您定制最适合的机房管理解决方案。
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">
                        免费产品演示
                      </h4>
                      <p className="text-sm text-dark-900/60">
                        专业顾问一对一演示产品功能
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">
                        定制方案设计
                      </h4>
                      <p className="text-sm text-dark-900/60">
                        根据您的需求定制专属解决方案
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-50 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark-900 mb-1">
                        无任何费用
                      </h4>
                      <p className="text-sm text-dark-900/60">
                        咨询与演示完全免费，无任何隐藏费用
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="lg:col-span-3">
                <form
                  onSubmit={handleSubmit}
                  className="bg-light-100 rounded-3xl p-8 md:p-10"
                >
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-50 flex items-center justify-center">
                        <CheckCircle className="w-10 h-10 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-dark-900 mb-3">
                        提交成功！
                      </h3>
                      <p className="text-dark-900/60">
                        我们的顾问将在 24 小时内与您联系
                      </p>
                    </motion.div>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-dark-900 mb-2">
                            <User className="w-4 h-4 inline mr-2" />
                            您的姓名 *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-light-200 rounded-xl text-dark-900 placeholder-dark-900/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                            placeholder="请输入姓名"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark-900 mb-2">
                            <Building className="w-4 h-4 inline mr-2" />
                            公司名称
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-light-200 rounded-xl text-dark-900 placeholder-dark-900/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                            placeholder="请输入公司名称"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-dark-900 mb-2">
                            <Phone className="w-4 h-4 inline mr-2" />
                            联系电话 *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 bg-white border border-light-200 rounded-xl text-dark-900 placeholder-dark-900/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                            placeholder="请输入手机号码"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark-900 mb-2">
                            <Mail className="w-4 h-4 inline mr-2" />
                            电子邮箱
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white border border-light-200 rounded-xl text-dark-900 placeholder-dark-900/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all"
                            placeholder="请输入邮箱地址"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark-900 mb-2">
                          感兴趣的功能
                        </label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white border border-light-200 rounded-xl text-dark-900 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all appearance-none cursor-pointer"
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
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark-900 mb-2">
                          <MessageSquare className="w-4 h-4 inline mr-2" />
                          需求描述
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-white border border-light-200 rounded-xl text-dark-900 placeholder-dark-900/30 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none"
                          placeholder="请简要描述您的需求..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-primary-500 rounded-xl font-medium hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                      >
                        提交预约
                        <Send className="w-5 h-5" />
                      </button>

                      <p className="text-xs text-dark-900/40 text-center">
                        提交即表示您同意我们的隐私政策，我们将妥善保管您的信息
                      </p>
                    </div>
                  )}
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map / Address Section */}
      <section className="py-20 lg:py-28 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                欢迎莅临参观
              </h2>
              <p className="text-lg text-dark-900/60">
                我们诚邀您来公司参观交流，亲身体验我们的产品
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-light-200">
              <div className="aspect-[21/9] bg-gradient-to-br from-light-100 to-light-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-3" />
                  <p className="text-dark-900/60">
                    北京市海淀区中关村科技园
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact
