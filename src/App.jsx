import './App.css'
import Benefits from './components/Benefits'
import FAQs from './components/FAQs'
import Header from './components/Header'
import MainInfo from './components/MainInfo'
import PopCorn from './components/PopCorn'

function App() {

  return (
    <>
      <div className="background-wrapper">
        <Header />
        <MainInfo />
      </div>
      <main style={{backgroundColor: 'black', color: 'white'}}>
        <PopCorn />
        <Benefits />
        <FAQs />
      </main>
      <aside></aside>
      <footer></footer>
    </>
  )
}

export default App
