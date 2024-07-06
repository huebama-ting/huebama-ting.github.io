import styled from "@emotion/styled";
import Typography from "@mui/joy/Typography";

import { Page } from "src/app/shared/Layout";
import homeIconPng from "src/assets/images/home_icon.png";
import homeIconWebp from "src/assets/images/home_icon.webp";

const Image = styled.img`
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 50%;
`;

export function Home() {
  return (
    <Page>
      <picture>
        <source type="image/webp" srcSet={homeIconWebp} />
        <source type="image/png" srcSet={homeIconPng} />
        <Image
          src={homeIconPng}
          width="1000"
          height="1000"
          alt="Icon showing a lazy egg"
          loading="lazy"
        />
      </picture>
      <Typography level="h1">Hello world!</Typography>
    </Page>
  );
}

export default Home;
