import { Card, Toast, Button } from 'antd-mobile'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { forwardRef, useEffect, useState, useImperativeHandle } from 'react'
import { ParabolaBall, run } from './components/Parabola'
import React from 'react'

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
  // 结束节点
  const endRef = useRef()
  // 起始节点
  const startRef = useRef()
  // 小球
  const parabolaRef = useRef()
  const runningRef = useRef(false)
  const [startRefId, setStartRefId] = useState(0)
  const handleButtonClick = (e) => {
    startRef.current = e.currentTarget
    setStartRefId(e.currentTarget.id)
    run(parabolaRef)
  }

  // const beforeRun = () => console.log('beforerun')
  // const run = useParabola(startRef, endRef, beforeRun)
  useEffect(() => {
    // console.log(startRef.current)
    console.log('startRef change')
  }, [startRefId])

  return (
    <div>
      <Main handleButtonClick={handleButtonClick}></Main>
      <Footer ref={endRef} />
      <ParabolaBall ref={flyRef}></ParabolaBall>
    </div>
  )
}


const Main = ({ handleButtonClick, run }) => {
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
              <div
                id={item.id}
                onClick={(e) => {
                  handleButtonClick(e)
                  // console.log(e.currentTarget)
                  // run.running(1)
                }}
              >
                <Button color="primary">加入购物车</Button>
              </div>
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

const Footer = forwardRef((props, ref) => {
  return (
    <FooterWrapper>
      <div style={{ width: '5rem' }} ref={ref}>
        购物车
      </div>
      <div>去支付</div>
    </FooterWrapper>
  )
})

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100%;
`

export default App
