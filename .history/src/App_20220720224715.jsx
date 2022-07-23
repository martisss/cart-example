import { Outlet } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
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
    <>
    <Main>

    </Main>
      <Footer />
    </>
  )
}

const Main = () => {
  return <MainW
}

const Footer = () => {
  return (
    <FooterWrapper>
      <div style={{ width: '5rem' }}>购物车</div>
      <div>去支付</div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
`

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
