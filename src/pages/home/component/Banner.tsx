import "../../../css/banner.less";
import { Carousel } from "antd";
const contentStyle: React.CSSProperties = {
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
  overflow: "hidden",
  paddingTop: "9%",
  paddingBottom: "9%",
  position: "relative",
};
export const Banner = () => {
  return (
    <div className="banner-container">
      <div id="imgContainer" className="img-container">
        <div style={contentStyle}>
          <h1>公司简介</h1>
          <h3>
            信息技术有限公司是面向医疗、金融、通讯、交通行业提供专业自助综合解决方案并集研发生产销售于一体的高新技术企业，拥有五金精密制造及硬件、软件、系统集成分体全产业链，其中研发人员占比
            75%。其团队曾获得硬件、新型外观相关专利过千件，其中发明专利几百件，软件著作权近千项，助力ODM、OEM代工获关联专利近千项，是国内仅有拥有自助制造链（钣金精密制造链、组装研发链）的少数全产业家自助生产商之一。
          </h3>
        </div>
      </div>
    </div>
  );
};

// // export default Banner;
// // import { Carousel } from "antd";
// const contentStyle: React.CSSProperties = {
//   height: "250px",
//   width: "100%",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
//   overflow: 'hidden',
//   paddingBottom: '47%',
//   position: 'relative'
// };
// // const bannerImg: React.CSSProperties = {
// //   width: "100%",
// //   height: "100%",
// //   position: "absolute",
// //   left: 0,
// //   top: 0,
// //   transform: "scale(1)",
// //   opacity: 0,
// // };

// const Banner: React.FC = () => (
//   <Carousel autoplay style={contentStyle}>
//     <div>
//       <h3 style={contentStyle}>1</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>2</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>3</h3>
//     </div>
//     <div>
//       <h3 style={contentStyle}>4</h3>
//     </div>
//   </Carousel>
// );

// export default Banner;
