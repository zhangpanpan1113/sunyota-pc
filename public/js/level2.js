(() => {
  /* 获取外包裹容器 */
  var itemNodes = document.querySelectorAll('.masker-animation')
  var init = function () {
    initEvent()
    /* 数字跳转函数 */
    changeNumberFn()
  }

  /* 事件入口函数 */
  var initEvent = function () {
    /* 进入遮罩层事件 */
    itemNodes.forEach(item => {
      item.addEventListener('mouseenter', onItemMouseEnter)
      item.addEventListener('mouseleave', onItemMouseLeave)
    })
  }

  /* 改变藏品数字显示组件 */
  var changeNumberFn = function () {
    /* 定义初始化number */
    var initNumber = 513257;
    var totalAmount = 1863404;
    var timer = setInterval(function () {
      var matchNum = Math.floor(Math.random() * 4000 + 2000)
      if (initNumber >= totalAmount) {
        amountNum.innerHTML = totalAmount.toLocaleString()
        clearInterval(timer)
        return
      }
      amountNum.innerHTML = (initNumber += matchNum).toLocaleString()
    }, 5)
  }

  /* 鼠标进入事件 */
  var onItemMouseEnter = function (e) {
    doAnimation.call(this, e)
  }

  /* 鼠标离开事件 */
  var onItemMouseLeave = function (e) {
    doAnimation.call(this, e)
  }

  /* 动画运行函数 */
  var doAnimation = function (e) {
    var mX = e.pageX
    var mY = e.pageY
    var oT = getElementTop(this)
    var oB = oT + this.offsetHeight
    var oL = getElementLeft(this)
    var oR = oL + this.offsetWidth
    /* 计算差值 */
    var distanceT = Math.abs(mY - oT)
    var distanceB = Math.abs(mY - oB)
    var distanceL = Math.abs(mX - oL)
    var distanceR = Math.abs(mX - oR)
    /* 获取最小的值 */
    var minNum = Math.min(distanceT, distanceB, distanceL, distanceR)
    switch (minNum) {
      case distanceT:
        changeStyle.call(this, e.type === 'mouseenter' ? { css: { top: -this.offsetHeight + 'px', left: 0 }, animation: { top: 0 } } : { animation: { top: -this.offsetHeight + 'px' } })
        break
      case distanceB:
        changeStyle.call(this, e.type === 'mouseenter' ? { css: { top: this.offsetHeight + 'px', left: 0 }, animation: { top: 0 } } : { animation: { top: this.offsetHeight + 'px' } })
        break
      case distanceL:
        changeStyle.call(this, e.type === 'mouseenter' ? { css: { left: -this.offsetWidth + 'px', top: 0 }, animation: { left: 0 } } : { animation: { left: -this.offsetWidth + 'px' } })
        break
      case distanceR:
        changeStyle.call(this, e.type === 'mouseenter' ? { css: { left: this.offsetWidth + 'px', top: 0 }, animation: { left: 0 } } : { animation: { left: this.offsetWidth + 'px' } })
        break
    }
  }

  var changeStyle = function (data) {
    this.lastElementChild.style.transition = 'none'
    this.lastElementChild.style.display = 'block'
    if (data.hasOwnProperty('css')) {
      for (var key in data['css']) {
        this.lastElementChild.style[key] = data['css'][key]
      }
    }
    this.lastElementChild.style.transition = 'all .3s linear';
    setTimeout(function () {
      for (var key in data.animation) {
        this.lastElementChild.style[key] = data.animation[key]
      }
    }.bind(this), 30)
  }

  /* 获取距离顶部的位置 */
  const getElementTop = function (el) {
    let totalTop = el.offsetTop
    let current = el.offsetParent
    while (current !== null) {
      totalTop += current.offsetTop
      current = current.offsetParent
    }
    return totalTop
  }
  /* 递归获取距离左面的位置 */
  const getElementLeft = function (el) {
    let totalLeft = el.offsetLeft
    let current = el.offsetParent
    while (current !== null) {
      totalLeft += current.offsetLeft
      current = current.offsetParent
    }
    return totalLeft
  }
  init();
})()
