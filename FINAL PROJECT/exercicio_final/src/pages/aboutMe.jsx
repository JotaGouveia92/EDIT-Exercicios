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
        title="Innovative designer for a"
        highlight="digital age"
        description="I bring over 8 years of experience designing user-focused digital interfaces that are both intuitive and impactful - helping brands deliver seamless, engaging experiences."
      />
      <WorkList />
      <Brands />
      <CtaBlock />
      <Footer />
    </>
  );
}
