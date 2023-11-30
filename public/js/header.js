(() => {
  var navList = document.querySelectorAll('.nav-list-title');
  var init = function () {
    initEvent()
  }

  /* 事件绑定函数 */
  var initEvent = function () {
    /* 头部导航标题鼠标事件 */
    navList.forEach(function (navListItem) {
      navListItem.addEventListener('mouseenter', onNavListItemMouseenter)
    })

    /* 整体内容移除事件绑定 */
    navigatorMasker.addEventListener('mouseleave', onNavMaskerMouseleave)

    /* 搜索按钮事件绑定 */
    searchNav.addEventListener('click', onSearchNavClick)

    /* 点击其他按钮隐藏搜索框 */
    document.querySelectorAll('.classify-nav').forEach(function (node) {
      node.addEventListener('mouseenter', onClassifyNavmouseenter)
    })

    /* 头部遮罩层事件相关 */
    iconMenuBtn.addEventListener('click', onIconMenuBtnClick)
    closeBtn.addEventListener('click', onCloseBtnClick);

  }

  /* 鼠标滑过其他内容隐藏输入框 + 导航条 */
  var onClassifyNavmouseenter = function () {
    serachInput.style.display = 'none'
    /* 隐藏导航条 */
    onNavMaskerMouseleave()
  }

  /* 搜索点击事件 */
  var onSearchNavClick = function () {
    serachInput.style.display = 'flex'
  }

  /* 导航鼠标划入事件绑定 */
  var onNavListItemMouseenter = function () {
    /* 获取当前点击内容索引值 */
    var targetIndex = this.getAttribute('data')
    /* 当前划过元素添加高亮状态 */
    navList.forEach(function (navListItem) {
      navListItem.classList.remove('on')
    })
    this.classList.add('on')

    /* 初始化调整高度值 */
    document.querySelectorAll('.nav-list-masker-container').forEach(function (node) {
      node.style.opacity = 0
      node.style.height = '0px'
    })

    /* 判断是否有data属性在进行高度添加 */
    if (targetIndex) {
      /* 求出距离中心原点位置 */

      // 获取当前列表内容的总宽度值
      var spanList = document.querySelector('.' + targetIndex).querySelectorAll('span')
      var totalWidth = 0
      spanList.forEach(function (node) {
        totalWidth += node.offsetWidth
      })

      /* 移动当前元素的marginLeft值 */
      // 调整到当前title的位置的中心点，
      // 在剪掉当前内容的宽度的一半 
      document.querySelector('.' + targetIndex).style.paddingLeft = this.offsetLeft + this.offsetWidth / 2 - totalWidth / 2 + 'px'

      // 显示当前得到焦点内容
      document.querySelector('.' + targetIndex).style.opacity = 1
      document.querySelector('.' + targetIndex).style.height = '50px'
    }
  }

  /* 导航条移除元素事件 */
  var onNavMaskerMouseleave = function (e) {
    navList.forEach(function (navListItem) {
      navListItem.classList.remove('on')
    })
    document.querySelectorAll('.nav-list-masker-container').forEach(function (node) {
      node.style.height = '0px'
    })
  }

  /* 菜单按钮事件绑定函数 */
  var onIconMenuBtnClick = function () {
    headerRightMasker.style.zIndex = 999
    headerRightMasker.style.opacity = 1
  }

  /* 遮罩层关闭按钮点击事件函数 */
  var onCloseBtnClick = function () {
    headerRightMasker.style.opacity = 0
    setTimeout(function () {
      headerRightMasker.style.zIndex = -1
    }, 300)
  }
  init();
})()