import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts'
import { useAppSelector, useChartAnimation } from '@/hooks'
import {
  selectDashboardStats,
  selectAnalyticsData,
  selectRecentActivity,
} from '@/features/dashboard'
import {
  StatCard,
  ChartCard,
  ChartContainer,
  Table,
  StatusBadge,
  PageHeader,
} from '@/components/dashboard'
import { CHART_MARGIN, CHART_TOOLTIP_STYLE, CHART_COLORS } from '@/shared/constants/charts'

const activityColumns = [
  { key: 'user', label: 'User' },
  { key: 'action', label: 'Action' },
  { key: 'target', label: 'Target' },
  { key: 'time', label: 'Time' },
  {
    key: 'status',
    label: 'Status',
    render: (row) => <StatusBadge status={row.status} />,
  },
]

export default function Dashboard() {
  const stats = useAppSelector(selectDashboardStats)
  const analyticsData = useAppSelector(selectAnalyticsData)
  const recentActivity = useAppSelector(selectRecentActivity)
  const chartAnimation = useChartAnimation()

  return (
    <div className="admin-page">
      <PageHeader
        title="Dashboard"
        description="Welcome back! Here's what's happening with your business today."
      />

      <div className="admin-stat-grid">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>

      <div className="admin-chart-grid">
        <ChartCard
          title="Revenue Overview"
          description="Monthly revenue performance"
          className="admin-chart-wide"
        >
          <ChartContainer height={300}>
            <AreaChart data={analyticsData} margin={CHART_MARGIN}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={CHART_COLORS.primary} stopOpacity={0.25} />
                  <stop offset="95%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="month"
                tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={CHART_TOOLTIP_STYLE}
                formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                fill="url(#revenueGradient)"
                {...chartAnimation}
              />
            </AreaChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title="User Growth" description="New users per month">
          <ChartContainer height={300}>
            <BarChart data={analyticsData} margin={CHART_MARGIN}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis
                dataKey="month"
                tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fill: 'var(--color-text-muted)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip contentStyle={CHART_TOOLTIP_STYLE} />
              <Bar
                dataKey="users"
                fill={CHART_COLORS.secondary}
                radius={[4, 4, 0, 0]}
                {...chartAnimation}
              />
            </BarChart>
          </ChartContainer>
        </ChartCard>
      </div>

      <ChartCard title="Recent Activity" description="Latest actions across your platform">
        <Table columns={activityColumns} data={recentActivity} keyField="id" />
      </ChartCard>
    </div>
  )
}
