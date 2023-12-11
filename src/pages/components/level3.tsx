const Level3Component = () => {
  return (
    <div className="level3">
      <div className="level3-left">
        <div className="top-title special">
          <img
            className="arrow-left"
            src="./img/main_public-icon1.png"
            alt=""
          />
          <span>自助服务系统</span>
          <img
            className="arrow-right"
            src="./img/main_public-icon2.png"
            alt=""
          />
        </div>
        <div className="left-main-content">
          <div className="content-item">
            <h3>医疗自助终端-自助服务平台</h3>
            基于平台之上，实现门诊自助业务、住院自助业务、院外应用拓展业务等。借助自助服务平台，可以将业务规划的更合理，更有弹性；通过业务功能复用，可以降低总体投入；通过统一安全机制，可以确保业务的稳定安全；通过统一的实时监控，可以实时查看自助设备的运行状态，方便客户运营和维护。
          </div>
          <div className="content-item">
            <h3>医疗自助终端-门诊自助系统</h3>
            <p>
              新增门诊自助系统，通过投放自助服务终端（含机上软件），实现：发就诊卡、就诊卡充值、就诊卡余额查询、当日挂号、预约挂号、预约取号、复诊取号、门诊扣费、门诊退费、门诊费用清单打印、化验单打印等功能。
            </p>
          </div>
          <div className="content-item">
            <h3>医疗自助终端- 住院自助系统</h3>
            <p>
              新增住院自助系统，通过投放自助服务终端（含机上软件），实现：住院登记（通过二代身份证、就诊卡）、住院费预存、住院费用清单查询、打印等功能。
            </p>
          </div>
          <div className="content-item">
            <h3>医疗自助终端- 院外拓展应用</h3>
            <p>
              借助银行网银、电信运营商、网站运营商等院外资源，可以为医院提供院外拓展业务应用，如：网银
              /ATM 预约挂号、网银 /ATM
              缴费、网站预约挂号；化验单取单短信提醒等。
            </p>
          </div>
        </div>
      </div>
      {/* <div className="level3-right">
        <img src="./img/main_level3_right.jpg" alt="" />
      </div> */}
    </div>
  );
};

export default Level3Component;
