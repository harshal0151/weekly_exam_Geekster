
import './App.css'
import About from './pages/About'
import Sidebar from './components/Sidebar'

function App() {
  

  return (

    <div className='main'>
      <div className='sidebar'>
      <Sidebar/>
      </div>
     <div className='page'>
     <About/>
     </div>
    </div>
  
    
  )
}

export default App
