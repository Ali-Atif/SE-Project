import { PageHeader, Table, StatusBadge } from '@/components/dashboard'
import { usersData } from '@/data/usersData'

const userColumns = [
  {
    key: 'name',
    label: 'Name',
    render: (row) => (
      <div className="flex items-center gap-3">
        <span className="admin-avatar-sm">{row.name.charAt(0)}</span>
        <span className="font-medium text-text">{row.name}</span>
      </div>
    ),
  },
  { key: 'email', label: 'Email' },
  {
    key: 'role',
    label: 'Role',
    render: (row) => (
      <span className="text-sm text-text-muted">{row.role}</span>
    ),
  },
  {
    key: 'status',
    label: 'Status',
    render: (row) => <StatusBadge status={row.status} />,
  },
]

export default function Users() {
  return (
    <div className="admin-page">
      <PageHeader
        title="Users"
        description="Manage and monitor all registered users."
      >
        <button type="button" className="btn btn-primary btn-sm">
          Add User
        </button>
      </PageHeader>

      <div className="admin-card">
        <Table columns={userColumns} data={usersData} keyField="id" />
      </div>
    </div>
  )
}
