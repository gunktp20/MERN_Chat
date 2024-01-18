import './App.css'
import { BrowserRouter , Route, Routes} from 'react-router-dom'
import { Register } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
