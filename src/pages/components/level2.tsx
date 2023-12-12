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
          <span className="txt mr-40">运维</span>
          <span className="txt">服务</span>
          <img
            className="arrow-right"
            src="./img/main_public-icon2.png"
            alt=""
          />
        </div>
 
        <div className="button-container">
          <div className="button-item">
          提高设备使用率，减少沟通成本，降低设备故障恢复时间
            <div id="line2" style={{ position: "absolute", inset: 0 }}>
            医院日常银医设备在使用过程中，经常会遇到硬件及软件相关问题，包括打印机缺纸、卡纸，程序报错，读卡异常、屏幕显示异常等。为了方便医院，厂商，患者能在银医系统便用中更便利的快速处理相关问题，我们针对已上线和即将上线的业务，为院方开发了融威众邦“云运维”服务平台。平台旨在帮助医院解决众多设备使用过程中的各类问题，及时报修，提高设备使用率，减少沟通成本，降低设备故障恢复时间，同时最重要的是提高患者就医体验。
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
      </div>
    </div>
  );
};

export default Level2Component;
