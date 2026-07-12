import { Mail, MapPin, ExternalLink } from 'lucide-react'
import Logo from '@/components/ui/Logo'

const Footer = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('hero')
              }}
              className="flex items-center gap-3 mb-6"
            >
              <Logo size={44} />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white leading-tight">
                  柚木信息化管理系统
                </span>
                <span className="text-[10px] text-white/50 tracking-wider">
                  YOUMU INFO SYSTEM
                </span>
              </div>
            </a>
            <p className="text-sm text-white/60 max-w-sm mb-6 leading-relaxed">
              柚木信息化管理系统，融合 AI 智能运维与开放生态，为企业提供一体化数字化、智能化运维解决方案，助力企业构建可持续演进的智慧运维体系。
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary-400" />
                </div>
                <div className="flex flex-col">
                  <span>97088968@qq.com</span>
                  <span>97088969@qq.com</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary-400" />
                </div>
                <span>infosys.youmu75.com</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">产品功能</h3>
            <ul className="space-y-2.5">
              {['访客管理', '资产管理', '机房巡检', '数字驾驶舱', '网络管理'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo('features')}
                    className="text-sm text-white/50 hover:text-primary-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">解决方案</h3>
            <ul className="space-y-2.5">
              {['企业数字化转型', '政务数字化', '智慧教育', '金融科技', '智慧医疗'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollTo('solutions')}
                    className="text-sm text-white/50 hover:text-primary-400 transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">快速链接</h3>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => scrollTo('pricing')}
                  className="text-sm text-white/50 hover:text-primary-400 transition-colors text-left"
                >
                  版本定价
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('partnership')}
                  className="text-sm text-white/50 hover:text-primary-400 transition-colors text-left"
                >
                  合作分销
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="text-sm text-white/50 hover:text-primary-400 transition-colors text-left"
                >
                  关于我们
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="text-sm text-white/50 hover:text-primary-400 transition-colors text-left"
                >
                  联系咨询
                </button>
              </li>
              <li>
                <a
                  href="https://infosys.youmu75.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/50 hover:text-primary-400 transition-colors flex items-center gap-1"
                >
                  访问官网
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            © 2026 柚木信息化管理系统. 保留所有权利.
          </p>
          <div className="flex items-center gap-6">
            <button className="text-xs text-white/40 hover:text-white/60 transition-colors">
              隐私政策
            </button>
            <button className="text-xs text-white/40 hover:text-white/60 transition-colors">
              服务条款
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
