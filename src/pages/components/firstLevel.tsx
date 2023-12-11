const FirstLevelComponent = () => {
  return (
    <div id="firstLevel" className="level1">
      <div className="level1-left">
        <div className="level1-left-top">
          <div className="news-txt">
            <div className="top-contianer">
              <div className="title">
                <div className="top-title">
                  <img className="arrow-left" src="./img/main_public-icon1.png" alt="" />
                  <span className="txt mr-40">经营范围</span>
                  <span className="txt">资讯</span>
                  <img className="arrow-right" src="./img/main_public-icon2.png" alt="" />
                </div>
                <div className="right-fish-wp">
                  <img src="./img/main_fish.png" alt="" />
                  <div className="text-wp">
                    <span className="mb_-5">更</span>
                    <span>多</span>
                  </div>
                </div>
              </div>
              <div className="content mt_15">
                <div className="ellipsis-wrapper flex-x-cener">
                  <img src="./img/main_index-icon2-1.png" alt="" />
                  <div className="ellipsis-txt ft_16">
                    &#8203;``【oaicite:0】``&#8203;第一类增值电信业务；第二类增值电信业务
                  </div>
                </div>
                <div className="ellipsis-wrapper mt_10 mb_20 flex-x-cener">
                  <img src="./img/main_index-icon2-1.png" alt="" />
                  <div className="ellipsis-txt ft_16">
                    互联网信息服务
                  </div>
                </div>
              </div>
            </div>
            <ul className="bottom-container mt_20">
              <li className="nes-item flex-x-cener">
                <div className="news-item-txt ellipsis-txt">
                  信息咨询服务
                </div>
                <div className="right-date">
                  <span className="ft_22">03</span>
                  <span className="small-txt">/ 17</span>
                </div>
              </li>
              <li className="nes-item mt_10 flex-x-cener">
                <span className="news-item-txt ellipsis-txt">
                  技术服务、技术开发、技术咨询、技术交流、技术转让、技术推广
                </span>
                <div className="right-date">
                  <span className="ft_22">04</span>
                  <span className="small-txt">/ 30</span>
                </div>
              </li>
              <li className="nes-item mt_10 flex-x-cener">
                <span className="news-item-txt ellipsis-txt">
                  数据处理服务 网络与信息安全软件开发 网络技术服务
                </span>
                <div className="right-date">
                  <span className="ft_22">04</span>
                  <span className="small-txt">/ 30</span>
                </div>
              </li>
              <li className="nes-item mt_10 flex-x-cener">
                <span className="news-item-txt ellipsis-txt">
                  互联网销售（除销售需要许可的商品） 互联网安全服务 信息安全设备销售 信息系统集成服务
                </span>
                <div className="right-date">
                  <span className="ft_22">04</span>
                  <span className="small-txt">/ 30</span>
                </div>
              </li>
              <li className="nes-item mt_10 flex-x-cener">
                <span className="news-item-txt ellipsis-txt">
                  软件开发  </span>
                <div className="right-date">
                  <span className="ft_22">04</span>
                  <span className="small-txt">/ 30</span>
                </div>
              </li>
            </ul>
          </div>
          <div className="fish-img-wp">
            <img className="scene-bg" src="./img/main_level1_left_img.jpg" alt="" />
          </div>
        </div>
        <div className="level1-left-bottom mt_30">
          {/* Your canvas or image replacement code goes here */}
          <div id="canvasContainer" className="canvas-container"></div>
          {/* <img className="vase-img" src="./img/main_vase.png" alt=""> */}
          <img src="./img/main_level1_bottom_bng.jpg" alt="" />
        </div>
      </div>
      <div className="level-right">
        {/* The content for the right side goes here */}
      </div>
    </div>
  );
};

export default FirstLevelComponent;