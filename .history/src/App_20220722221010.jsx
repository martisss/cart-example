import { Card, Toast, Button } from 'antd-mobile'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { useRef } from 'react'
import { forwardRef, useEffect, useState } from 'react'
import useParabola from './components/useParabola'

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
  const endRef = useRef()
  const startRef = useRef()
  const [startRefId, setStartRefId] = useState(0)
  const handleButtonClick = (e) => {
    startRef.current = e.currentTarget
    setStartRefId(startRef.current.id)
    // console.log(startRef.current.id)
    // console.log(endRef.current)
  }
  const beforeRun = () => console.log('beforerun')
  const run = useParabola(startRef, endRef, beforeRun)
  useEffect(() => {
    // console.log(startRef.current)
    console.log('startRef change')
    run.running()
  }, [startRefId])

  useEffect(() => {
    if (startRef && endRef && innerRef) {
      beforeRun()
      const flyOuterRef = innerRef.current.flyOuterRef.current
      const flyInnerRef = innerRef.current.flyInnerRef.current

      // 现在起点距离终点的距离
      const startDot = startRef.current.getBoundingClientRect()
      const endDot = endRef.current.getBoundingClientRect()

      // 中心点的水平垂直距离
      const offsetX =
        endDot.left + endDot.width / 4 - (startDot.left + startDot.width / 2)
      // let offsetY = endDot.top + endDot.height / 2 - (startDot.top + startDot.height / 2);
      const offsetY =
        endDot.top + endDot.height / 4 - (startDot.top + startDot.height / 2)

      // 页面滚动尺寸
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop || 0
      const scrollLeft =
        document.documentElement.scrollLeft || document.body.scrollLeft || 0
      if (!isRunning) {
        // 初始定位
        flyOuterRef.style.display = 'block'
        flyOuterRef.style.left = `${
          startDot.left + scrollLeft + startRef.current.clientWidth / 2
        }px`
        flyOuterRef.style.top = `${
          startDot.top + scrollTop + startRef.current.clientHeight / 2
        }px`

        // 开始动画
        flyOuterRef.style.transform = `translateX(${offsetX}px)`
        flyInnerRef.style.transform = `translateY(${offsetY}px)`

        // 动画标志量
        isRunning = true
        setTimeout(() => {
          flyOuterRef.style.display = 'none'
          flyOuterRef.style.left = ''
          flyOuterRef.style.top = ''
          flyOuterRef.style.transform = ''
          flyInnerRef.style.transform = ''
          isRunning = false

          afterRun()
        }, runTime)
      }
    }
  }, [])
  return (
    <div>
      <Main handleButtonClick={handleButtonClick} run={run}></Main>
      <Footer ref={endRef} />
      <flyOuter />
    </div>
  )
}
const flyOuter = React.forwardRef(
  (
    { children, flyOuterStyle = {}, flyInnerStyle = {}, runTime = 0.8 },
    ref
  ) => {
    const flyOuterRef = useRef()
    const flyInnerRef = useRef()
    useImperativeHandle(ref, () => ({ flyOuterRef, flyInnerRef }))

    // 运动小球外层样式
    const flyOuter_Style = Object.assign(
      {
        position: 'absolute',
        width: '20px',
        height: '20px',
        transition: `transform ${runTime}s`,
        display: 'none',
        margin: ' -20px 0 0 -20px',
        transitionTimingFunction: 'linear',
        zIndex: 3,
      },
      flyOuterStyle
    )

    // 运动小球内层样式
    const flyInner_Style = Object.assign(
      {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#FF8A2B',
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: '1',
        transition: `transform ${runTime}s`,
        justifyContent: 'center',
        alignItems: 'center',
        // transitionTimingFunction: 'cubic-bezier(.55,0,.85,.36)', // 向上抛物线的右边
        transitionTimingFunction: 'cubic-bezier(0, 0, .25, 1.3)', // 向下抛物线的左边
      },
      flyInnerStyle
    )

    return (
      <div style={flyOuter_Style} ref={flyOuterRef}>
        <div style={flyInner_Style} ref={flyInnerRef}>
          {children}
        </div>
      </div>
    )
  }
)

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
