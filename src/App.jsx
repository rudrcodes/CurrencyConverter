import './App.css'
import CurrencyConverter from './components/CurrencyConverter'
import Markets from './components/Markets';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='App bg-gray-100'>
      <ToastContainer />
      <div className='container  justify-center lg:justify-between'>
        <Markets />
        <CurrencyConverter />
      </div>
    </div>
  )
}

export default App
