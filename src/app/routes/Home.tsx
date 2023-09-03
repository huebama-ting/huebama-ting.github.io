import styled from "@emotion/styled";

import homeIconPng from "src/app/assets/home_icon.png";
import homeIconWebp from "src/app/assets/home_icon.webp";
import { Container } from "src/app/components/Layout";

const Image = styled.img`
  border-radius: 50%;
  max-width: 10rem;
  max-height: 10rem;
`;
const Title = styled.h1`
  text-align: center;
`;

function Home() {
  return (
    <Container>
      <picture>
        <source type="image/webp" srcSet={homeIconWebp} />
        <source type="image/png" srcSet={homeIconPng} />
        <Image
          src={homeIconPng}
          width="1000"
          height="1000"
          alt="Icon showing a lazy egg"
        />
      </picture>
      <Title>Hello world!</Title>
    </Container>
  );
}

export default Home;
