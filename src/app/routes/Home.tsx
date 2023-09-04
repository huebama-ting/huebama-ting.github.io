import styled from "@emotion/styled";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import homeIconPng from "src/app/assets/home_icon.png";
import homeIconWebp from "src/app/assets/home_icon.webp";
import { Container } from "src/app/components/Layout";

const Image = styled.img`
  border-radius: 50%;
  max-width: 10rem;
  max-height: 10rem;
`;

function Home() {
  return (
    <Sheet>
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
        <Typography level="h1">Hello world!</Typography>
      </Container>
    </Sheet>
  );
}

export default Home;
