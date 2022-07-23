import { Card, Toast, Button } from 'antd-mobile'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { useRef } from 'react'

const data = [
  {
    id: nanoid(),
    name: 'xxx',
  },
  {
    id: nanoid(),
    name: 'xxx',
  },
  {
    id: nanoid(),
    name: 'xxx',
  },
  {
    id: nanoid(),
    name: 'xxx',
  },
]
const App = function () {
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
    <div>
      <Main></Main>
      <Footer />
    </div>
  )
}

const Main = () => {
  const startRef = useRef()
  const 
  return (
    <MainWrapper>
      {data.map((item) => (
        <Card
          key={item.id}
          title={<div>卡片标题</div>}
          style={{ borderRadius: '16px', marginBottom: '10px' }}
        >
          <Flex>
            <div>
              <div>{item.id}</div>
              <div>{item.name}</div>
            </div>
            <div onClick={(e) => e.stopPropagation()}>
              <Button color="primary" onClick={(e) => handleButtonClick(e)}>
                加入购物车
              </Button>
            </div>
          </Flex>
        </Card>
      ))}
    </MainWrapper>
  )
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const MainWrapper = styled.div`
  width: 375px;
  height: 100%;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  background-color: #fff;
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

export default App
