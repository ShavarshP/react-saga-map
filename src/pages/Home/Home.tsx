import React from 'react'
import { Map } from 'components/Map'
import { useQuery } from 'react-query'
import { useDispatch } from 'react-redux'
import { DataTable } from 'components/DataTable'
import { getRoutingsData } from 'redux/actions/routingsActions'

function Home() {
  const dispatch = useDispatch()

  useQuery('invoices', () => {
    dispatch(getRoutingsData())
  })

  return (
    <>
      <DataTable />
      <Map />
    </>
  )
}

export default Home
