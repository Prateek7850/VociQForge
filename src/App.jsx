import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
// import StudioPlayground from './Components/StudioPlayground'
import Features from './Components/Features'
import Footer from './Components/Footer'
import StatsBanner from './Components/StatsBanner'
import TrustedPartners from './Components/TrustedParteners'
import StudioPlayground from './Components/Studio/StudioPlayGround'

function App() {


  return (
    <>
<div className="min-h-screen bg-[#FAF8F5] text-[#6B5D54] font-sans antialiased selection:bg-[#6F4E37] selection:text-[#FAF8F5]">
      <Header />
      <main>
        <Hero />
        <StatsBanner/>
        
        {/* <StudioPlayground /> */}
        <StudioPlayground/>
        <Features />
      
      </main>
          <TrustedPartners/>
      <Footer />
    </div>

    </>
  )
}

export default App
