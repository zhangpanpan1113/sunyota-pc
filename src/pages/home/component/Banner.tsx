import { Carousel } from "antd";
const contentStyle: React.CSSProperties = {
  textAlign: "center",
  // background: "#364d79",
  color:"blue",
  overflow: "hidden",
  paddingTop: "700px",
  paddingBottom: "9%",
  position: "relative",
  backgroundImage: `url(../../../../../../public/img/banner/banner_bg_1.jpg)`,
};
export const Banner = () => {
  return (
    <div className="banner-container">
      <div id="imgContainer" className="img-container">
        <div style={contentStyle}>
          {/* <h1>公司简介</h1>
          <h3>
            信息技术有限公司是面向医疗、金融、通讯、交通行业提供专业自助综合解决方案并集研发生产销售于一体的高新技术企业，拥有五金精密制造及硬件、软件、系统集成分体全产业链.
          </h3> */}
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
