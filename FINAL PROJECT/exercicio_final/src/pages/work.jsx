import Nav from "../components/nav";
import Footer from "../components/footer";
import Brands from "../components/brands";
import SimpleHeader from "../components/SimpleHeader";
import ContentText from "../components/ContentText";
import GridImages from "../components/GridImages";
import SimpleMedia from "../components/SimpleMedia";

export default function Work() {
  return (
    <div>
      <Nav />
      <SimpleHeader />
      <SimpleMedia />
      <ContentText
        title="Title 01"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at neque vel sapien sagittis maximus. Maecenas faucibus ut justo eu feugiat. Integer efficitur velit ipsum, ultricies ultrices purus laoreet nec. Curabitur id consectetur risus, eu hendrerit tellus. Aliquam suscipit elementum neque eget porta. Praesent ac egestas ligula. Morbi elementum tellus nibh, eget hendrerit tortor faucibus et."
      />
      <ContentText
        title="Title 02"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at neque vel sapien sagittis maximus. Maecenas faucibus ut justo eu feugiat. Integer efficitur velit ipsum, ultricies ultrices purus laoreet nec. Curabitur id consectetur risus, eu hendrerit tellus. Aliquam suscipit elementum neque eget porta. Praesent ac egestas ligula. Morbi elementum tellus nibh, eget hendrerit tortor faucibus et."
      />
      <ContentText
        title="Title 03"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at neque vel sapien sagittis maximus. Maecenas faucibus ut justo eu feugiat. Integer efficitur velit ipsum, ultricies ultrices purus laoreet nec. Curabitur id consectetur risus, eu hendrerit tellus. Aliquam suscipit elementum neque eget porta. Praesent ac egestas ligula. Morbi elementum tellus nibh, eget hendrerit tortor faucibus et."
      />
      <GridImages />
      <ContentText
        title="Title 04"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at neque vel sapien sagittis maximus. Maecenas faucibus ut justo eu feugiat. Integer efficitur velit ipsum, ultricies ultrices purus laoreet nec. Curabitur id consectetur risus, eu hendrerit tellus. Aliquam suscipit elementum neque eget porta. Praesent ac egestas ligula. Morbi elementum tellus nibh, eget hendrerit tortor faucibus et."
      />
      <Brands />
      <Footer />
    </div>
  );
}
