import ArtworksGrid from "../components/artworksGrid";
import Brands from "../components/brands";
import CtaBlock from "../components/CtaBlock";
import Footer from "../components/footer";
import Header from "../components/Header";
import InfoNumbers from "../components/InfoNumbers";
import Nav from "../components/nav";
import Wot from "../components/Wot";
import Path from "../components/Path";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <InfoNumbers />
      <Wot />
      <ArtworksGrid />
      <Path />
      <Brands />
      <CtaBlock />
      <Footer />
    </>
  );
}
