export const Header = () => {
  
  return (
    <div className="header-container">
      <div className="flex-x-cener">
        <img className="mr-70 logo" src="./img/header/logo.png" alt="Logo" />
        <div id="headerNavMain" className="header-nav-main">
          <span className="nav-list-title">首页</span>
          <span className="nav-list-title" data="n1">
            许可项目
          </span>
          <span className="nav-list-title" data="n2">
            经营范围
          </span>
          <span className="nav-list-title" data="n3">
            关于我们
          </span>
        </div>
        <div className="header-nav-setting flex-x-cener">
          <div className="setting-item-list">
            <div className="item-title classify-nav">
              <i className="icon iconfont icon-user2"></i>
              <i className="icon iconfont icon-sanjiao"></i>
            </div>
          </div>
          <div className="setting-item-list">
            <div id="searchNav" className="item-title">
              <i className="icon iconfont icon-Search"></i>
              <i className="icon iconfont icon-sanjiao"></i>
            </div>
            <div id="serachInput" className="item-masker-container search">
              <input className="search-input" type="text" />
              <i className="icon input-serach iconfont icon-Search"></i>
            </div>
          </div>
          <div className="setting-item-list">
            <div className="item-title">
              <i id="iconMenuBtn" className="icon iconfont icon-menu1"></i>
            </div>
          </div>
        </div>
      </div>

      <div id="navigatorMasker" className="navigator-masker-container">
        <div className="nav-list-masker-container n1">
          <span>技术进出口</span>
          <span>货物进出口</span>
          <span>进出口代理</span>
        </div>
      </div>
    </div>
  );
};
