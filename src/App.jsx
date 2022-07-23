import { Card, Toast, Button } from 'antd-mobile'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { forwardRef, useEffect, useState, useImperativeHandle } from 'react'
import { ParabolaBall, run } from './components/Parabola'
import { Tabs } from 'antd-mobile'
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
    // 动画开始
    run(startRef, endRef, parabolaRef, runningRef)
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
      <ToTop role="button">
        <Top1></Top1>
        <Top2>顶部</Top2>
      </ToTop>
      <ParabolaBall ref={parabolaRef}></ParabolaBall>
    </div>
  )
}

const ToTop = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  bottom: 0.8rem;
  position: fixed;
  right: 0.16rem;
  max-width: 768px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: '0px';
  color: #58595b;
  background: #fff;
  text-align: center;
  z-index: 101;
  opacity: 0;
  transition: bottom 0.8s ease, opacity 0.6s ease;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e2e2;
  border-radius: 50%;
`

const Top2 = styled.div`
  width: 100%;
  height: 0.14rem;
  line-height: 0.14rem;
  font-size: 0.1rem;
  text-align: center;
`

const Top1 = styled.div`
  width: 0.18rem;
  height: 0.1rem;
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAeCAMAAABQZB20AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUdwTFhZW19fX19fX1lZXFhaW2ZmZoODg1hZW1hZW1hZW1paXVhZW1hZW1lZXV5eXllZW1haW1hZXFlZW1hZW1haXFhaXFhZW1hbW11dXVhZW1xcXFpaX1lZW1haXFpaXFhaW1hZW01rcNoAAAAhdFJOUwDcGg2irQgDzO38UPn1QxPVl4x2uGs5wFwi5Sgug39jxk2tiRMAAADlSURBVHja1dTbEoIgEAZgSQ08n/KElv7v/5IxFk5ZCnsp4wUs8zE7y6Jz7tEL0dPVIAE5UNUYIFDfSFNNADmOEkFDUWkCOSyJJilJsX4pCyO4KEZ+eU0vOeLITnUh8kwvshxhZ6OmEEKp1QmEk1nVQOt+BtwWqE2qAm7X79D1BlTH6g74Sm2cD9yPVKkU/w1z5cpdxAvA4393PKBQO7t7e0fqE42ZmPPX9Xo4B+Oha7y9ncp4N627UTNQW3TC/OUyYdV5ne47Wp/z5W2siill/aaYdgJJSnjB4j31WEP4yzDPOcl4Aq6DEQSE0oAMAAAAAElFTkSuQmCC');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50%;
`

const Main = ({ handleButtonClick, run }) => {
  return (
    <MainWrapper>
      <Tabs>
        <Tabs.Tab title="水果" key="fruits">
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
        </Tabs.Tab>
        <Tabs.Tab title="蔬菜" key="vegetables">
          西红柿
          <img
            src={'./assets/react.svg'}
            alt=""
            width={'25px'}
            height={'25px'}
          />
        </Tabs.Tab>
        <Tabs.Tab title="动物" key="animals">
          蚂蚁
        </Tabs.Tab>
      </Tabs>
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
      <div style={{ width: '5rem' }}>
        <img
          aria-hidden="true"
          ref={ref}
          data-src="https://funimg-1.pddpic.com/vgt/8124ecca-c2ad-43ca-8f1f-1146926f49c5.png.slim.png?imageView2/2/w/1300/q/80/format/webp"
          data-retry-count="0"
          src="https://funimg-1.pddpic.com/vgt/8124ecca-c2ad-43ca-8f1f-1146926f49c5.png.slim.png?imageView2/2/w/1300/q/80/format/webp"
          data-was-processed="true"
        />
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
