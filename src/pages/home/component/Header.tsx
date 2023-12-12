export const Header = () => {
  return (
    <div className="header-container">
      <div className="flex-x-cener">
        <img className="mr-70 logo" src="./img/header/logo.png" alt="Logo" />
        <div id="headerNavMain" className="header-nav-main">
          <span
            className="nav-list-title"
            onClick={() => {
              window.location.href = "/home.html";
            }}
          >
            首页
          </span>
          <span className="nav-list-title" data="n1">
            产品类型
          </span>
          <span className="nav-list-title" data="n2">
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
    </div>
  );
};
