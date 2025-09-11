import Nav from "../components/nav";
import Footer from "../components/footer";
import Brands from "../components/brands";
import WorkList from "../components/WorkList";
import MainHeader from "../components/MainHeader";
import CtaBlock from "../components/CtaBlock";

export default function AboutMe() {
  return (
    <>
      <Nav />
      <MainHeader
        tag="Projects"
        title="Innovative designer for a "
        highlight="digital age"
        description="With over +8 years of experience, I specialize in creating intuitive
            and user-centered interfaces for a wide range of digital products
            and experiences. Far far away, behind the world mountains, far from"
      />
      <WorkList />
      <Brands />
      <CtaBlock />
      <Footer />
    </>
  );
}
