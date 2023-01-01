import React from 'react'
import { Table } from 'antd'
import { IRouting } from 'redux/types'
import type { ColumnsType } from 'antd/es/table'
import { RootState } from 'redux/reducers/rootReducer'
import { useDispatch, useSelector } from 'react-redux'
import { setLocation } from 'redux/actions/routingSelectAction'

const columns: ColumnsType<IRouting> = [
  {
    title: 'Номер заявки',
    dataIndex: 'n',
    key: 'n',
  },
  {
    title: 'Координаты От lat',
    dataIndex: 'latFrom',
    key: 'latFrom',
  },
  {
    title: 'Координаты От lng',
    dataIndex: 'lngFrom',
    key: 'lngFrom',
  },
  {
    title: 'Координаты До lat',
    dataIndex: 'latFrom',
    key: 'latFrom',
  },
  {
    title: 'Координаты До lng',
    dataIndex: 'lngTo',
    key: 'lngTo',
  },
]

const DataTable: React.FC = () => {
  const dispatch = useDispatch()

  const { pending, routingsData, error } = useSelector(
    (state: RootState) => state.routings,
  )
  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: IRouting[]) => {
      const { latFrom, latTo, lngFrom, lngTo } = selectedRows[0]
      dispatch(setLocation({ latFrom, latTo, lngFrom, lngTo }))
    },

    getCheckboxProps: (record: IRouting) => ({
      disabled: record.n === 'Disabled User',
      name: record.n,
    }),
  }
  // const handleIncrease = () => {
  //   dispatch(setLocation())
  // }

  return (
    <>
      {pending ? (
        <div className="table">Loading...</div>
      ) : error ? (
        <div>Error</div>
      ) : (
        <div className="table">
          <Table
            rowSelection={{
              type: 'radio',
              ...rowSelection,
            }}
            columns={columns}
            dataSource={routingsData}
            bordered
          />
        </div>
      )}
    </>
  )
}

export default DataTable
