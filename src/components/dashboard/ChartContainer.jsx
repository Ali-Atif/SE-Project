import { ResponsiveContainer } from 'recharts'
import { CHART_RESIZE_DEBOUNCE } from '@/shared/constants/charts'

export default function ChartContainer({ height = 300, children }) {
  return (
    <div className="admin-chart-container">
      <ResponsiveContainer width="100%" height={height} debounce={CHART_RESIZE_DEBOUNCE}>
        {children}
      </ResponsiveContainer>
    </div>
  )
}
