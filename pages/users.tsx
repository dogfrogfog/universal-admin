import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'

import PageTitle from '../ui-kit/Title'
import Table from '../components/Table'

const Users: NextPage = () => {
  return (
    <div>
      <PageTitle title="admin app users" />
      <Table />
    </div>
  )
}

export default Users
