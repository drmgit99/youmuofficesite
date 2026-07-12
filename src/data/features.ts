import {
  Users,
  DatabaseBackup,
  Server,
  Package,
  ClipboardCheck,
  AlertTriangle,
  Wifi,
  Network,
  Globe,
  FileText,
  Settings,
  LayoutDashboard,
} from 'lucide-react'

export interface Feature {
  id: string
  title: string
  description: string
  icon: React.ElementType
  longDescription: string
  features: string[]
  color: string
}

export const features: Feature[] = [
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
      '访客数据统计分析',
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
      '备份状态实时监控',
    ],
    color: 'from-green-500 to-emerald-500',
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
      '容量规划与预警',
      '能效分析与优化',
    ],
    color: 'from-purple-500 to-violet-500',
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
      '折旧与价值评估',
    ],
    color: 'from-orange-500 to-amber-500',
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
      '巡检报告自动生成',
    ],
    color: 'from-teal-500 to-cyan-500',
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
      '智能告警分级与降噪',
      '故障工单自动派发',
      '处理过程实时追踪',
      '故障知识库与复盘',
    ],
    color: 'from-red-500 to-rose-500',
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
      '网络流量分析',
    ],
    color: 'from-indigo-500 to-blue-500',
  },
  {
    id: 'topology',
    title: '网络拓扑图绘制',
    description: '可视化网络架构，直观展示网络全貌',
    icon: Network,
    longDescription:
      '专业的网络拓扑绘制工具，支持自动发现与手动绘制，提供丰富的设备图标与连线样式，生成专业拓扑图。',
    features: [
      '网络自动发现',
      '拖拽式拓扑绘制',
      '丰富设备图标库',
      '多层级拓扑展示',
      '拓扑图导出分享',
    ],
    color: 'from-sky-500 to-blue-500',
  },
  {
    id: 'ipam',
    title: 'IP地址管理',
    description: 'IP地址资源统一规划与管理',
    icon: Globe,
    longDescription:
      '专业的IP地址管理系统，支持IP地址规划、分配、监控、回收全生命周期管理，提升IP资源利用效率。',
    features: [
      'IP地址池管理',
      '子网划分与规划',
      'IP占用实时检测',
      'IP冲突告警',
      '使用情况统计分析',
    ],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    id: 'logs',
    title: '操作日志管理',
    description: '全面审计追踪，确保操作可追溯',
    icon: FileText,
    longDescription:
      '统一的操作日志管理平台，采集各类系统操作日志，提供日志查询、审计分析、合规报告等功能。',
    features: [
      '多源日志采集',
      '日志全文检索',
      '操作行为审计',
      '合规报告生成',
      '日志归档与备份',
    ],
    color: 'from-slate-500 to-gray-600',
  },
  {
    id: 'settings',
    title: '系统设置',
    description: '灵活的系统配置与个性化定制',
    icon: Settings,
    longDescription:
      '强大的系统配置中心，支持组织机构管理、权限配置、系统参数设置、个性化定制等功能。',
    features: [
      '组织架构管理',
      '角色权限配置',
      '系统参数设置',
      '个性化界面定制',
      '第三方系统集成',
    ],
    color: 'from-zinc-500 to-slate-500',
  },
  {
    id: 'dashboard',
    title: '数字驾驶舱',
    description: '数据可视化大屏，全局掌控机房状态',
    icon: LayoutDashboard,
    longDescription:
      '数据可视化驾驶舱，将机房核心指标以可视化方式呈现，支持自定义仪表盘、实时数据刷新、多维度分析。',
    features: [
      '可视化大屏展示',
      '实时数据刷新',
      '多维度数据分析',
      '自定义仪表盘',
      '数据下钻与联动',
    ],
    color: 'from-primary-500 to-primary-700',
  },
]

export interface Stat {
  value: number
  suffix: string
  label: string
  description: string
}

export const stats: Stat[] = [
  {
    value: 500,
    suffix: '+',
    label: '企业客户',
    description: '遍布各行业的企业级客户',
  },
  {
    value: 99.99,
    suffix: '%',
    label: '系统可用性',
    description: '全年稳定运行保障',
  },
  {
    value: 12,
    suffix: '大功能',
    label: '核心功能模块',
    description: '全方位机房运维管理',
  },
  {
    value: 24,
    suffix: '/7',
    label: '技术支持',
    description: '全天候专业技术服务',
  },
]
