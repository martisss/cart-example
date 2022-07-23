import { Outlet } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="test" element={<Test></Test>}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="homedetail" element={<HomeDetail />}></Route>
      </Routes>
    </div>
  )
}

function HomeDetail() {
  return <div>HomeDetail</div>
}

function Test() {
  return <div>test</div>
}

function Home() {
  console.log('test ')
  return (
    <div>
      
    </div>
  )
}


const Footer = 





function About() {
  return (
    <div>
      <main>
        <h2>Welcome to the about page</h2>
      </main>
      <nav>
        <ol>
          <Link to="/">home</Link>
          <Link to="/about">about</Link>
        </ol>
      </nav>
    </div>
  )
}
export default App
