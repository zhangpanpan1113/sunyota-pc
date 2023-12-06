
import Level2Component from "../components/level2";
import Level3Component from "../components/level3";
import { Banner } from "./component/Banner";
import { Footer } from "./component/Footer";
import { Header } from "./component/Header";

export default function Home(){
  return (
    <>
    <Header/>
    <Banner/>
    <Level2Component/>
    <Level3Component/>
    <Footer/>
    </>
  )
}