import './App.css'
import CurrencyConverter from './components/CurrencyConverter'
import Markets from './components/Markets';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    // <div className='bg-gray-100 '>

    <div className='App  h-full w-screen  p-4 '>
      <ToastContainer />
      <div className='container h-full  justify-center lg:justify-between gap-10 p-10'>
        <Markets />
        <CurrencyConverter />
      </div>
      {/* </div> */}
    </div>
  )
}

export default App
