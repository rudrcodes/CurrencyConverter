import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

const Markets = () => {
  const usdVal = useSelector(state => state.changeValues.USD).toFixed(2)
  const audVal = useSelector(state => state.changeValues.AUD).toFixed(2)
  const inrVal = useSelector(state => state.changeValues.INR).toFixed(2)
  return (
    <div className='w-[290px] md:min-w-[400px] md:min-h-[500px] bg-blue-900 p-6 rounded-lg'>
      <h1 className='text-2xl text-bold text-white my-2'>Markets</h1>
      <Table striped bordered hover>

        <tbody>
          <tr>
            <td>EUR/USD</td>
            <td>{usdVal}</td>
          </tr>
          <tr>
            <td>USD/INR</td>
            <td>{inrVal}</td>
          </tr>
          <tr>
            <td>AUD/USD</td>
            <td>{audVal}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Markets