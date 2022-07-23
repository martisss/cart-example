
import { Card, Toast, Button } from 'antd-mobile'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="test" element={<Test></Test>}></Route> */}
        {/* <Route path="about" element={<About />}></Route> */}
        {/* <Route path="homedetail" element={<HomeDetail />}></Route> */}
      </Routes>
    </div>
  )
}


function Home() {
  console.log('test ')
  return (
    <>
      <Main></Main>
      <Footer />
    </>
  )
}

const Main = () => {
  return (
    <MainWrapper>
      <Card
        title={
          <div>
            卡片标题
          </div>
        }
        // onBodyClick={onBodyClick}
        // onHeaderClick={onHeaderClick}
        style={{ borderRadius: '16px' }}
      >
        <div>卡片内容</div>
        <div onClick={(e) => e.stopPropagation()}>
          <Button
            color="primary"
            onClick={() => {
              Toast.show('点击了底部按钮')
            }}
          >
            底部按钮
          </Button>
        </div>
      </Card>
      {/* <h1>test</h1> */}
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  width: ;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
`

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
