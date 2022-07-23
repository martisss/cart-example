const animateCSS = (node, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    console.log(1111)
    console.log(node.classList)
    const animationName = `${prefix}${animation}`;
    node.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

export default animateCSS