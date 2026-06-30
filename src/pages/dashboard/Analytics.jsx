import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  Legend,
} from 'recharts'
import { useChartAnimation } from '@/hooks'
import { StatCard, ChartCard, ChartContainer, Table, PageHeader } from '@/components/dashboard'
import {
  analyticsCards,
  monthlyRevenueData,
  progressMetrics,
  monthlyReports,
} from '@/data/analyticsData'
import { CHART_MARGIN, CHART_TOOLTIP_STYLE, CHART_COLORS } from '@/shared/constants/charts'

const reportColumns = [
  { key: 'month', label: 'Month' },
  { key: 'revenue', label: 'Revenue' },
  { key: 'orders', label: 'Orders' },
  {
    key: 'growth',
    label: 'Growth',
    render: (row) => (
      <span className="font-medium text-success">
        {row.growth}
      </span>
    ),
  },
]

export default function Analytics() {
  const chartAnimation = useChartAnimation()

  return (
    <div className="admin-page">
      <PageHeader
        title="Analytics"
        description="Deep insights into your business performance."
      />

      <div className="admin-stat-grid">
        {analyticsCards.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>

      <div className="admin-chart-grid">
        <ChartCard
          title="Revenue vs Target"
          description="Monthly revenue compared to targets"
          className="admin-chart-wide"
        >
          <ChartContainer height={320}>
            <LineChart data={monthlyRevenueData} margin={CHART_MARGIN}>
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
                formatter={(value) => [`$${value.toLocaleString()}`, '']}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                dot={{ fill: CHART_COLORS.primary, r: 4 }}
                name="Revenue"
                {...chartAnimation}
              />
              <Line
                type="monotone"
                dataKey="target"
                stroke={CHART_COLORS.muted}
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={false}
                name="Target"
                {...chartAnimation}
              />
            </LineChart>
          </ChartContainer>
        </ChartCard>

        <ChartCard title="Revenue Trend" description="6-month revenue area chart">
          <ChartContainer height={320}>
            <AreaChart data={monthlyRevenueData.slice(0, 6)} margin={CHART_MARGIN}>
              <defs>
                <linearGradient id="analyticsGradient" x1="0" y1="0" x2="0" y2="1">
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
                fill="url(#analyticsGradient)"
                {...chartAnimation}
              />
            </AreaChart>
          </ChartContainer>
        </ChartCard>
      </div>

      <div className="admin-chart-grid">
        <ChartCard title="Performance Metrics" description="Key performance indicators">
          <div className="flex flex-col gap-5">
            {progressMetrics.map((metric) => (
              <div key={metric.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-medium text-text">{metric.label}</span>
                  <span className="text-text-muted">{metric.value}%</span>
                </div>
                <div className="admin-progress-track">
                  <div
                    className="admin-progress-bar"
                    style={{
                      width: `${metric.value}%`,
                      backgroundColor: metric.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        <ChartCard title="Monthly Reports" description="Revenue and order summaries">
          <Table columns={reportColumns} data={monthlyReports} keyField="month" />
        </ChartCard>
      </div>
    </div>
  )
}
