import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Feature } from '@/data/features'

interface FeatureCardProps {
  feature: Feature
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = feature.icon

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="group relative bg-white rounded-2xl p-6 border border-light-200 hover:border-light-300 hover:shadow-xl hover:shadow-dark-900/5 transition-all duration-300 h-full"
    >
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-7 h-7 text-white" />
      </div>

      <h3 className="text-lg font-semibold text-dark-900 mb-2 group-hover:text-primary-600 transition-colors">
        {feature.title}
      </h3>

      <p className="text-sm text-dark-900/60 leading-relaxed mb-4">
        {feature.description}
      </p>

      <Link
        to="/features"
        className="inline-flex items-center gap-1 text-sm text-primary-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity"
      >
        了解详情
        <ArrowUpRight className="w-4 h-4" />
      </Link>

      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-50/0 via-primary-50/0 to-primary-50/50 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.div>
  )
}

export default FeatureCard
