import Nav from "../components/nav";
import Footer from "../components/footer";
import WorkList from "../components/WorkList";
import MainHeader from "../components/MainHeader";
import CtaBlock from "../components/CtaBlock";
import SimpleMedia from "../components/SimpleMedia";
import Brands from "../components/Brands";

export default function AboutMe() {
  return (
    <>
      <Nav />
      <MainHeader
        tag="Projects"
        title="Innovative designer for a"
        highlight="digital age"
        description="I bring over 8 years of experience designing user-focused digital interfaces that are both intuitive and impactful - helping brands deliver seamless, engaging experiences."
      />
      <SimpleMedia
        image="images/personal_images/Eu_pessoal.jpg"
        alt="a minha foto pessoal"
      />
      <WorkList />
      <Brands />
      <CtaBlock />
      <Footer />
    </>
  );
}
