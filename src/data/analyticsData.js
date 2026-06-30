import { TrendingUp, Target, Zap, BarChart3 } from 'lucide-react'

export const analyticsCards = [
  {
    id: 'growth',
    title: 'Growth Rate',
    value: '24.8%',
    change: '+3.2%',
    trend: 'up',
    icon: TrendingUp,
  },
  {
    id: 'conversion',
    title: 'Conversion',
    value: '3.42%',
    change: '+0.8%',
    trend: 'up',
    icon: Target,
  },
  {
    id: 'engagement',
    title: 'Engagement',
    value: '68.5%',
    change: '+5.1%',
    trend: 'up',
    icon: Zap,
  },
  {
    id: 'retention',
    title: 'Retention',
    value: '91.2%',
    change: '-1.3%',
    trend: 'down',
    icon: BarChart3,
  },
]

export const monthlyRevenueData = [
  { month: 'Jan', revenue: 24000, target: 22000 },
  { month: 'Feb', revenue: 28000, target: 26000 },
  { month: 'Mar', revenue: 31000, target: 29000 },
  { month: 'Apr', revenue: 35000, target: 32000 },
  { month: 'May', revenue: 39000, target: 36000 },
  { month: 'Jun', revenue: 42000, target: 40000 },
  { month: 'Jul', revenue: 45000, target: 42000 },
  { month: 'Aug', revenue: 47000, target: 44000 },
  { month: 'Sep', revenue: 46000, target: 45000 },
  { month: 'Oct', revenue: 48000, target: 46000 },
  { month: 'Nov', revenue: 50000, target: 48000 },
  { month: 'Dec', revenue: 52000, target: 50000 },
]

export const progressMetrics = [
  { label: 'Sales Target', value: 87, color: 'var(--color-chart-1)' },
  { label: 'Customer Satisfaction', value: 94, color: 'var(--color-chart-2)' },
  { label: 'Project Completion', value: 72, color: 'var(--color-chart-3)' },
  { label: 'Team Utilization', value: 81, color: 'var(--color-chart-4)' },
]

export const monthlyReports = [
  { month: 'January', revenue: '$24,000', orders: 320, growth: '+8.2%' },
  { month: 'February', revenue: '$28,000', orders: 380, growth: '+16.7%' },
  { month: 'March', revenue: '$31,000', orders: 410, growth: '+10.7%' },
  { month: 'April', revenue: '$35,000', orders: 450, growth: '+12.9%' },
  { month: 'May', revenue: '$39,000', orders: 490, growth: '+11.4%' },
  { month: 'June', revenue: '$42,000', orders: 520, growth: '+7.7%' },
]
