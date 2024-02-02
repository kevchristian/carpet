import Image from "next/image";
import BackgroundImage from "./backgroundImage";
import Carousels from "./carousel";
import Footer from "../navigation/footer";
import Counter from "./dataNumbers";


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
      <Carousels />
      <Counter />
      <Footer />
    </>
    
  );
}