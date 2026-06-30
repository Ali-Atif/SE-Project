import { useStableTableScroll } from '@/hooks'

const statusStyles = {
  Active: 'badge-success',
  Inactive: 'bg-slate-500/10 text-slate-600 dark:text-slate-400',
  Pending: 'badge-warning',
  success: 'badge-success',
  info: 'badge-info',
  error: 'bg-red-500/10 text-red-700 dark:text-red-400',
}

function StatusBadge({ status }) {
  const style = statusStyles[status] ?? statusStyles.Inactive
  return (
    <span className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${style}`}>
      {status}
    </span>
  )
}

export default function Table({ columns, data, keyField = 'id' }) {
  const scrollRef = useStableTableScroll()

  return (
    <div ref={scrollRef} className="admin-table-wrap" tabIndex={0}>
      <table className="admin-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} scope="col">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row[keyField]}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export { StatusBadge }
