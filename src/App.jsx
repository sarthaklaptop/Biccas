import './App.css'
import {Navbar, Hero, Rating, Features,
  Benefit, Plans, GetStarted, Footer} from './components' 
import navbarBg from "./assets/navbarBg.png"
import mainBg from "./assets/mainBg.png"


function App() {

  return (
    <div className=' ' >
      <div className=' w-11/12 flex flex-col mx-auto '>
        <div className='' style={{ backgroundImage: `url(${navbarBg}), url(${mainBg})`}}>
          <Navbar/>
          <Hero/>
          <Rating/>
        </div>
{/* bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white-100  to-green-100 */}
{/* bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-white-100  to-green-100 */}

        <div className='  bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] to-white  from-green-100'>
        <Features/>
          <Benefit/>
        </div>
        <Plans/>

        <GetStarted/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
