import Advantage from "./components/Advantage"
import Hero from "./components/Hero"
import Social from "./components/Social"
import Testimonial from "./components/Testimonial"


function App() {

  return (
    <>
  
    <div className='min-h-[50em] w-full flex flex-col item-center px-[108px]'>
      <Hero />
      <Social />
      <Advantage />
      <Testimonial />
    </div>


    </>
  )
}

export default App
