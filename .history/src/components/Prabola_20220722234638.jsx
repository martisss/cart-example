const run = (parabolaRef) => {
  const flyOuterNode = parabolaRef?.current?.flyOuterRef.current
  const flyInnerNode = parabolaRef?.current?.flyInnerRef.current
  // 现在起点距离终点的距离
  const startDot = startRef?.current?.getBoundingClientRect()
  const endDot = endRef?.current?.getBoundingClientRect()

  // 中心点的水平垂直距离
  const offsetX =
    endDot?.left + endDot?.width / 4 - (startDot?.left + startDot?.width / 2)
  // let offsetY = endDot.top + endDot.height / 2 - (startDot.top + startDot.height / 2);
  const offsetY =
    endDot?.top + endDot?.height / 4 - (startDot?.top + startDot?.height / 2)

  // 页面滚动尺寸
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop || 0
  const scrollLeft =
    document.documentElement.scrollLeft || document.body.scrollLeft || 0
  if (!runningRef.current) {
    // 初始定位
    flyOuterNode.style.display = 'block'
    flyOuterNode.style.left = `${
      startDot?.left + scrollLeft + startRef?.current.clientWidth / 2
    }px`
    flyOuterNode.style.top = `${
      startDot?.top + scrollTop + startRef?.current.clientHeight / 2
    }px`

    // 开始动画
    flyOuterNode.style.transform = `translateX(${offsetX}px)`
    flyInnerNode.style.transform = `translateY(${offsetY}px)`

    // 动画标志量
    runningRef.current = true
    // setTimeout => ontransitioned
    // setTimeout计时不准
    flyOuterNode.ontransitionend = () => {
      flyOuterNode.style.display = 'none'
      flyOuterNode.style.left = ''
      flyOuterNode.style.top = ''
      flyOuterNode.style.transform = ''
      flyInnerNode.style.transform = ''
      runningRef.current = false
    }
  }
}

const ParabolaB = React.forwardRef(
  (
    { children, flyOuterStyle = {}, flyInnerStyle = {}, runTime = 0.4 },
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
        backgroundColor: '#e02e24',
        color: '#ffffff',
        textAlign: 'center',
        lineHeight: '1',
        transition: `transform ${runTime}s`,
        justifyContent: 'center',
        alignItems: 'center',
        // transitionTimingFunction: 'cubic-bezier(.55,0,.85,.36)', // 向上抛物线的右边
        transitionTimingFunction: 'cubic-bezier(0.5, -0.5, 1, 1)', // 向下抛物线的左边
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
