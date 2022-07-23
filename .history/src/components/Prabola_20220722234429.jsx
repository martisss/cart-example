const run = (probolaRef) => {
  const flyOuterNode = flyRef?.current?.flyOuterRef.current
  const flyInnerNode = flyRef?.current?.flyInnerRef.current
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
