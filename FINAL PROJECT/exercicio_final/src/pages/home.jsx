import ArtworksGrid from "../components/artworksGrid";
import Brands from "../components/brands";
import CtaBlock from "../components/CtaBlock";
import Footer from "../components/footer";
import Header from "../components/Header";
import InfoNumbers from "../components/InfoNumbers";
import Nav from "../components/nav";
import Wot from "../components/Wot";
import Path from "../components/Path";
import ContentMedia from "../components/ContentMedia";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <InfoNumbers
        items={[
          { title: "+8", subtitle: "Years of Experience" },
          { title: "+10", subtitle: "Happy Clients" },
          { title: "+20", subtitle: "Launched Campaigns" },
          { title: "+30", subtitle: "Design Materials" },
        ]}
      />
      <ContentMedia />
      <Wot />
      <ArtworksGrid />
      <Path />
      <Brands />
      <CtaBlock />
      <Footer />
    </>
  );
}
