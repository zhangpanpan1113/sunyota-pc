(function () {
  var init = function () {
    initEvent();
    /* 初始化调整内容显示 */
    if (window.scrollY > imgContainer.offsetHeight / 3) {
      firstLevel.classList.add('show')
    }
    setTimeout(function () {
      bottomWp.classList.add('run-animation')
    }, 500)
    /* 初始化调整侧边栏位置信息 */
    onResizeScreen()
  }

  var initEvent = function () {
    /* 返回顶部操作 */
    window.addEventListener('scroll', onWindowScroll);
    /* 返回顶部 */
    returnTop.addEventListener('click', onReturnTopClick)
    /* 侧边栏收缩按钮 */
    sideBarCloseBtn.addEventListener('click', onSideBarCloseBtnClick)
    /* 调整侧边栏及主体内容margin值 */
    window.addEventListener('resize', onResizeScreen)
  }

  /* DOM加载完成事件 */
  var onResizeScreen = function () {
    /* 屏幕宽度小于1692使用JS调整margin值 */
    if (window.innerWidth < 1692) {
      main.style.margin = '30px 40px 0'
      sideBar.style.right = '0'
    } else {
      main.style.margin = '30px auto 0'
      sideBar.style.right = '90px'
    }
  }

  /* 侧边栏收缩按钮 */
  var onSideBarCloseBtnClick = function () {
    var status = this.getAttribute('data')
    if (status === 'show') {
      sideBarMiddle.style.height = 0
      this.setAttribute('data', 'close')
      this.innerHTML = '导'
    } else {
      sideBarMiddle.style.height = '398px'
      this.setAttribute('data', 'show')
      this.innerHTML = '&times;'
    }
  }

  /* 侧边栏返回顶部事件绑定函数 */
  var onReturnTopClick = function () {
    var timer = setInterval(function () {
      if (window.scrollY <= 0) {
        clearInterval(timer)
        return
      }
      window.scrollTo(0, window.scrollY - 80)
    }, 10)
  }

  /* 鼠标滚轮事件 */
  var onWindowScroll = function () {
    if (imgContainer.classList.contains('show')) return
    if (this.scrollY > imgContainer.offsetHeight / 3) {
      firstLevel.classList.add('show')
    }
    if (this.scrollY > window.innerHeight) {
      sideBar.style.opacity = 1
    } else {
      sideBar.style.opacity = 0
    }
  }

  init();
})()