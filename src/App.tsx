import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollNavigator from './components/layout/ScrollNavigator'
import Home from './pages/Home'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
      <ScrollNavigator />
    </div>
  )
}

export default App
