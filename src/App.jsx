import dbData from './component/data'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './component/heroPage'
import Navbar from './component/navbar'


function App() {
  

  return (
    <>
 <Navbar/>
 <div className='d-flex flex-wrap gap-3 justify-content-center'>
  {dbData.map((item , index)=><Hero abc={item} key={index}/>)}
 </div>
   
    </>
  )
}

export default App
