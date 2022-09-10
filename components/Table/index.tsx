import styles from './Table.module.scss'

import TableActions from './TableActions'

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

interface User {
  name: string
  email: string
  role: string
  description?: string
  regDate: string
  lastLogin: string
}

const defaultData: User[] = [
  {
    name: 'tanner',
    email: 'email@tanner.com',
    role: 'admin',
    description: 'This user is commonly used for administration purposes',
    regDate: '11/11/2010',
    lastLogin: '12/11/2010',
  },
  {
    name: 'tandy',
    email: 'email@tandy.com',
    role: 'moder',
    description: 'Content moderation',
    regDate: '11/11/2020',
    lastLogin: '12/11/2020',
  },
  {
    name: 'joe',
    email: 'email@joe.com',
    role: 'sudo admin',
    regDate: '01/01/1',
    lastLogin: '12/11/2020',
  },
]

const columnHelper = createColumnHelper<User>()

const columns = [
  columnHelper.accessor('name', {
    cell: info => info.getValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor(row => row.email, {
    id: 'email',
    cell: info => info.getValue(),
    header: () => <span>Last Name</span>,
    footer: info => info.column.id,
  }),
  columnHelper.accessor('email', {
    header: () => 'Email',
    cell: info => info.renderValue(),
    footer: info => info.column.id,
  }),
  columnHelper.accessor('role', {
    header: 'Role',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('description', {
    header: 'Description',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('regDate', {
    header: 'Reg date',
    footer: info => info.column.id,
  }),
  columnHelper.accessor('lastLogin', {
    header: 'Last login',
    footer: info => info.column.id,
  }),
]

function Table() {
  const table = useReactTable({
    data: defaultData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className={styles.tableContiner}>
      <TableActions />
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              <th className={styles.checkAll}>
                <input type="checkbox" />
              </th>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              <td className={styles.check}>
                <input type="checkbox" />
              </td>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
