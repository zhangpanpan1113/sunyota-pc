(() => {
  /*
   获取所有需要操作图片节点列表
   初始化调整当前图片的currentIndex值
   点击内容箭头事件绑定
   实现快速动画函数创建 animation15 
    - 当前索引值下的动画快速完成  透明度 1.5倍效果实现 定义动画执行时间
    - 执行完成清空当前效果 保留当前的index值操作
    - 改变当前索引值，判断当前的是add还是calc，调整currentIndex值
   执行animation11动画
      定义下一张动画的 透明度 大小比例。定义动画执行时间。规定动画的延迟执行时间
      优化处理
        当目前有正在做动画的函数，falg值为true
   底部icon图标事件绑定
      执行animation15动画
      调整当前的currentIndex值
   */
  var timer = null
  var currentIndex = 0
  var targetIndex = null
  var imgList = document.querySelectorAll('.banner-img')
  var navList = document.querySelectorAll('.nav-icon-list')
  var flag = true
  var init = function () {
    /* 定义运行函数 */
    imgList[currentIndex].style.opacity = 1
    setTimeout(() => {
      animation11()
    }, 300)
    runTransformScale();
    initEvent()
  }

  var initEvent = function () {
    arrowContainer.addEventListener('click', onArrowContainerClick)
    /* 底部图标事件绑定 */
    navList.forEach(function (node, index) {
      node.addEventListener('click', onNavListClick.bind(node, index))
    })
  }

  /* 底部图标事件处理 */
  var onNavListClick = function (index) {
    if (!flag || index === currentIndex) return
    clearInterval(timer)
    flag = false
    /*  */
    animation15('add')
    currentIndex = index;
    animation11()
    runTransformScale();
    navList.forEach(node => {
      node.classList.remove('active')
    })
    navList[currentIndex].classList.add('active')
  }

  /* 点击按箭头事件绑定 */
  var onArrowContainerClick = function (e) {
    /* 优化操作处理 */
    clearInterval(timer)
    if (!flag) return
    flag = false

    animation15(e.target.classList.contains('arrow-right') ? 'add' : 'sub')
    animation11()
    runTransformScale();
  }

  /* 运行函数 */
  var runTransformScale = function () {
    timer = setInterval(() => {
      animation15('add')
      animation11()
    }, 4000);
  }

  var animation11 = function () {
    /* 调整当前图片透明度，显示大小倍数 定义动画执行时间 */
    imgList[currentIndex].style.opacity = 1
    imgList[currentIndex].style.transform = 'scale(1.1)'
    imgList[currentIndex].style.transition = 'transform 4s .6s linear,opacity 1s linear'
  }

  var animation15 = function (calc) {
    // 当前类动画执行1秒钟快速完成
    imgList[currentIndex].style.opacity = 0
    imgList[currentIndex].style.transform = 'scale(1.5)'
    imgList[currentIndex].style.transition = 'all .8s ease'

    /* 处理做完动画的样式为空 */
    targetIndex = currentIndex
    setTimeout(function () {
      imgList[targetIndex].style = ''
      flag = true
    }, 1000)

    if (calc === 'add') {
      currentIndex = ++currentIndex % imgList.length;
    } else {
      --currentIndex
      if (currentIndex < 0) {
        currentIndex = imgList.length - 1
      }
    }
    /* 底部按钮添加点击高亮状态 */
    navList.forEach(node => {
      node.classList.remove('active')
    })
    navList[currentIndex].classList.add('active')
  }

  init();
})()