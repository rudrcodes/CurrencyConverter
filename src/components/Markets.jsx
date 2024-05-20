import React from 'react'
import Table from 'react-bootstrap/Table';

const Markets = () => {
  return (
    <div className='min-w-[400px] min-h-[500px] bg-blue-900 p-6 rounded-lg'>
      <h1 className='text-2xl text-bold text-white my-2'>Markets</h1>
      <Table striped bordered hover>

        <tbody>
          <tr>
            <td>EUR/USD</td>
            <td>1.05</td>
          </tr>
          <tr>
            <td>USD/INR</td>
            <td>80.05</td>
          </tr>
          <tr>
            <td>AUD/USD</td>
            <td>0.67</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Markets