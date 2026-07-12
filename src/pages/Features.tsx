import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { features } from '@/data/features'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { useState } from 'react'

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id)
  const active = features.find((f) => f.id === activeFeature)!
  const ActiveIcon = active.icon

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
              产品功能
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              12 大核心功能
              <br />
              <span className="gradient-text">覆盖机房运维全场景</span>
            </h1>
            <p className="text-lg text-dark-900/60 max-w-2xl mx-auto">
              从基础设施到应用服务，从日常运维到应急处置，全面满足企业机房管理需求
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature Tabs */}
      <section className="py-12 bg-light-100 sticky top-16 z-30 border-y border-light-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFeature === feature.id
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'bg-white text-dark-900/70 hover:bg-white/80 hover:text-dark-900'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {feature.title}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Active Feature Detail */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <div
                className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${active.color} flex items-center justify-center mb-8`}
              >
                <ActiveIcon className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                {active.title}
              </h2>
              <p className="text-lg text-dark-900/60 mb-8 leading-relaxed">
                {active.longDescription}
              </p>

              <div className="space-y-4 mb-10">
                {active.features.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary-500" />
                    </div>
                    <span className="text-dark-900/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-white bg-primary-500 rounded-full font-medium hover:bg-primary-600 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                >
                  预约演示
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#all-features"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-dark-900 bg-light-100 rounded-full font-medium hover:bg-light-200 transition-all duration-300"
                >
                  查看全部功能
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-light-100 to-white rounded-3xl border border-light-200 shadow-xl p-8 flex items-center justify-center relative overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${active.color} opacity-5`}
                />
                <div className="relative z-10 text-center">
                  <div
                    className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${active.color} flex items-center justify-center shadow-2xl`}
                  >
                    <ActiveIcon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">
                    {active.title}
                  </h3>
                  <p className="text-dark-900/50">智能化 {active.title} 解决方案</p>
                </div>

                <div className="absolute top-8 left-8 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
                <div className="absolute bottom-8 right-8 w-16 h-16 rounded-xl bg-white shadow-lg flex items-center justify-center">
                  <Check className="w-8 h-8 text-green-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Features Grid */}
      <section id="all-features" className="py-20 lg:py-28 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                全部功能模块
              </h2>
              <p className="text-lg text-dark-900/60">
                12 大功能模块，全方位覆盖机房运维管理需求
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <ScrollReveal key={feature.id} delay={index * 0.05}>
                  <div
                    onClick={() => {
                      setActiveFeature(feature.id)
                      window.scrollTo({ top: 300, behavior: 'smooth' })
                    }}
                    className="group bg-white rounded-2xl p-6 border border-light-200 hover:border-primary-200 hover:shadow-xl hover:shadow-dark-900/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-dark-900/60 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
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
              想了解更多功能细节？
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              预约产品演示，我们的专家团队将为您详细介绍每一个功能模块
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-dark-900 bg-white rounded-full font-medium hover:bg-light-100 transition-all duration-300"
            >
              预约产品演示
              <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}

export default Features
