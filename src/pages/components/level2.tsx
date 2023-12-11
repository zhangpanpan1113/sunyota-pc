const Level2Component = () => {
  return (
    <div className="level2 mt_30">
      <div className="level2-left">
        <div className="top-title w_252">
          <img
            className="arrow-left"
            src="./img/main_public-icon1.png"
            alt=""
          />
          <span className="txt mr-40">产品</span>
          <span className="txt">介绍</span>
          <img
            className="arrow-right"
            src="./img/main_public-icon2.png"
            alt=""
          />
        </div>
 
        <div className="button-container">
          <div className="button-item">
           自助类型
            <div id="line2" style={{ position: "absolute", inset: 0 }}>
              {/* Your SVG path for line2 */}
            </div>
          </div>
        </div>
      </div>

      <div className="level2-right">
        <div className="img-item masker-animation">
          <img
            src="http://5b0988e595225.cdn.sohucs.com/images/20190712/3a9351fd66f74c858b2d6655deca9429.png"
            alt=""
          />
          <div className="level2-masker-wp">
            <p>自助服务平台</p>
            <p>自助服务平台</p>
            <p>自助服务平台</p>
            <p></p>
            <p className="jj">自助服务平台 </p>
          </div>
        </div>
        <div className="img-item masker-animation">
          <img
            src="http://5b0988e595225.cdn.sohucs.com/images/20190712/3a9351fd66f74c858b2d6655deca9429.png"
            alt=""
          />
          <div className="level2-masker-wp">
            <p>自助服务平台</p>
          </div>
        </div>
        <div className="img-item masker-animation">
          <img
            src="http://5b0988e595225.cdn.sohucs.com/images/20190712/3a9351fd66f74c858b2d6655deca9429.png"
            alt=""
          />
          <div className="level2-masker-wp">
            <p>自助服务平台</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Level2Component;
