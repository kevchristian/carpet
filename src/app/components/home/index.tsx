import Image from "next/image";
import BackgroundImage from "./backgroundImage";
import Carousel from "./carousel";
import Navigation from "../navigation";
import Footer from "../navigation/footer";
import Counter from "./dataNumbers";
import CompanySlider from "./company";
export default function HomePage() {
  return (
    <>
      <BackgroundImage
        image={
          <Image
            src="/images/group1.png"
            alt="Image Alt Text"
            className="object-cover object-center"
            fill
          />
        }
      >
      </BackgroundImage>
        <CompanySlider/>
      <Carousel />
      <Counter />
      <Footer />
    </>
    
  );
}