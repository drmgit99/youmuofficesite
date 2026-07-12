import { motion } from 'framer-motion'
import { Users, Award, Clock, Headphones, ArrowRight, Building } from 'lucide-react'
import ScrollReveal from '@/components/animations/ScrollReveal'

const milestones = [
  { year: '2018', title: '公司成立', desc: '专注机房运维管理领域' },
  { year: '2019', title: '产品1.0', desc: '首个版本正式发布' },
  { year: '2020', title: '快速成长', desc: '服务100+企业客户' },
  { year: '2021', title: '功能完善', desc: '12大功能模块全部上线' },
  { year: '2022', title: '市场拓展', desc: '覆盖全国主要城市' },
  { year: '2023', title: '产品升级', desc: '数字驾驶舱功能上线' },
  { year: '2024', title: '持续创新', desc: 'AI智能运维功能研发中' },
]

const values = [
  {
    icon: Users,
    title: '客户至上',
    desc: '始终以客户需求为中心，提供最优质的产品与服务',
  },
  {
    icon: Award,
    title: '追求卓越',
    desc: '不断打磨产品细节，追求极致的用户体验',
  },
  {
    icon: Clock,
    title: '快速响应',
    desc: '7×24小时技术支持，快速响应客户问题',
  },
  {
    icon: Headphones,
    title: '专业服务',
    desc: '专业的实施与服务团队，保障项目成功落地',
  },
]

const team = [
  { name: '团队规模', value: '200+', desc: '专业技术与服务人员' },
  { name: '研发占比', value: '60%', desc: '持续产品创新投入' },
  { name: '平均经验', value: '8年', desc: '丰富的行业经验' },
  { name: '服务客户', value: '500+', desc: '遍布各行业的企业客户' },
]

const About = () => {
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
              关于我们
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
              专注机房运维
              <br />
              <span className="gradient-text">让管理更简单高效</span>
            </h1>
            <p className="text-lg text-dark-900/60 max-w-2xl mx-auto">
              我们是一支专注于机房运维管理的技术团队，致力于用技术让机房管理更简单、更高效、更智能
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Company Intro */}
      <section className="py-20 lg:py-28 bg-light-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-white rounded-3xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-2xl">
                        <Building className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-dark-900 mb-2">
                        智慧机房
                      </h3>
                      <p className="text-dark-900/50">专注机房运维 6 年</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <span className="text-primary-500 text-sm font-semibold mb-4 block">
                  公司简介
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-6">
                  我们是谁
                </h2>
                <div className="space-y-4 text-dark-900/70 leading-relaxed">
                  <p>
                    智慧机房成立于 2018
                    年，是一家专注于机房运维管理软件研发的高新技术企业。我们的团队由来自各大科技公司的资深技术专家组成，拥有丰富的机房运维和软件开发经验。
                  </p>
                  <p>
                    经过多年的深耕细作，我们的产品已经服务了超过 500
                    家企业客户，涵盖金融、政府、教育、制造、医疗等多个行业，帮助客户实现机房管理的数字化、智能化转型。
                  </p>
                  <p>
                    我们始终坚持以客户需求为中心，持续投入产品研发，不断打磨产品细节，致力于为客户提供最优质的机房运维管理解决方案。
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary-500 text-sm font-semibold mb-4 block">
                团队实力
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                专业团队，值得信赖
              </h2>
              <p className="text-lg text-dark-900/60">
                拥有丰富行业经验的专业团队，为您提供最优质的服务
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-3">
                    {item.value}
                  </div>
                  <div className="text-lg font-semibold text-dark-900 mb-1">
                    {item.name}
                  </div>
                  <p className="text-sm text-dark-900/50">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 lg:py-28 bg-light-100">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary-500 text-sm font-semibold mb-4 block">
                发展历程
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                我们的成长足迹
              </h2>
              <p className="text-lg text-dark-900/60">
                一步步走来，不断成长壮大
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-light-300 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <ScrollReveal key={milestone.year} delay={index * 0.08}>
                  <div
                    className={`flex flex-col md:flex-row items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1 md:text-right">
                      {index % 2 === 0 && (
                        <div className="inline-block bg-white rounded-2xl p-6 shadow-sm border border-light-200">
                          <div className="text-primary-500 font-bold text-2xl mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-lg font-semibold text-dark-900 mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-dark-900/60 text-sm">
                            {milestone.desc}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-md z-10 flex-shrink-0" />

                    <div className="flex-1">
                      {index % 2 === 1 && (
                        <div className="inline-block bg-white rounded-2xl p-6 shadow-sm border border-light-200">
                          <div className="text-primary-500 font-bold text-2xl mb-2">
                            {milestone.year}
                          </div>
                          <h3 className="text-lg font-semibold text-dark-900 mb-1">
                            {milestone.title}
                          </h3>
                          <p className="text-dark-900/60 text-sm">
                            {milestone.desc}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-primary-500 text-sm font-semibold mb-4 block">
                核心价值观
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 mb-4">
                我们的信念
              </h2>
              <p className="text-lg text-dark-900/60">
                这些价值观指引我们前行
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <ScrollReveal key={value.title} delay={index * 0.1}>
                  <div className="bg-light-100 rounded-2xl p-8 text-center hover:bg-white hover:shadow-xl hover:shadow-dark-900/5 transition-all duration-300 h-full">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-dark-900/60 text-sm leading-relaxed">
                      {value.desc}
                    </p>
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
              加入我们，一起创造未来
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              我们正在寻找志同道合的伙伴，如果你对机房运维领域充满热情，欢迎加入我们
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-dark-900 bg-white rounded-full font-medium hover:bg-light-100 transition-all duration-300"
            >
              联系我们
              <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </motion.div>
  )
}

export default About
