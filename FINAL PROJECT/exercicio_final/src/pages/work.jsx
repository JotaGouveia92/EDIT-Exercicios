import Nav from "../components/nav";
import Footer from "../components/footer";
import SimpleHeader from "../components/SimpleHeader";
import ContentText from "../components/ContentText";
import GridImages from "../components/GridImages";
import SimpleMedia from "../components/SimpleMedia";
import InfoNumbers from "../components/InfoNumbers";
import Brands from "../components/Brands";

export default function Work() {
  return (
    <div>
      <Nav />
      <SimpleHeader
        label="McDonald's"
        title=" Emotional Campaign - Mood de Mac"
        text="In the fast-paced, visually overwhelming world we live in, it's no
              surprise that minimalism has become a powerful trend in the realm
              of visual design."
        date="2024"
      />
      <SimpleMedia
        image="images/artwork/mcdonalds_campaign.jpg"
        alt="campanha mcdonalds"
      />
      <InfoNumbers
        items={[
          { title: "+62k", subtitle: "Participants" },
          { title: "+7k", subtitle: "Scans" },
          { title: "+30k", subtitle: "Coupons redemeed" },
          { title: "+761k", subtitle: "Unique Users" },
        ]}
      />
      <ContentText
        title="The Essence of Minimalism"
        text="At its core, minimalism is about distilling a design down to its essential elements, eliminating excess and focusing on what truly matters. By reducing visual clutter, minimalism allows for better comprehension and a more immersive experience. The use of clean lines, ample white space, and minimal color palettes creates a sense of calmness and sophistication, inviting viewers to engage with the design in a more meaningful way."
      />
      <ContentText
        title="Clarity and Communication"
        text="One of the key strengths of minimalism lies in its ability to convey messages with clarity and precision. By stripping away unnecessary details, minimalistic designs emphasize the core message or concept, making it easier for viewers to understand and remember. Whether it's a logo, a website, or an advertisement, minimalism cuts through the noise and delivers a clear and impactful visual statement."
      />
      <ContentText
        title="Enhanced User Experience"
        text="Minimalist design principles also play a crucial role in enhancing the user experience. In today's digital landscape, where attention spans are shrinking, simplicity is paramount. Minimalistic interfaces, with their intuitive navigation and uncluttered layouts, provide users with a seamless and enjoyable experience. By reducing cognitive load, minimalism allows users to focus on the content or functionality, leading to higher engagement and satisfaction."
      />
      <GridImages />
      <Brands />
      <Footer />
    </div>
  );
}
