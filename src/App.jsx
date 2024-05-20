import './App.css'
import CurrencyConverter from './components/CurrencyConverter'
import Markets from './components/Markets';
import 'bootstrap/dist/css/bootstrap.min.css';
// npm install -D tailwindcss postcss autoprefixer
// npx tailwindcss init -p

function App() {

  return (
    <div className='App'>
      <div className='container'>
        <Markets />
        <CurrencyConverter />
      </div>
    </div>
  )
}

export default App
