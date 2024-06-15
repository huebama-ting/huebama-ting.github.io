import styled from "@emotion/styled";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Link } from "react-router-dom";

import { Container } from "src/app/components/Layout";
import homeIconPng from "src/assets/images/home_icon.png";
import homeIconWebp from "src/assets/images/home_icon.webp";

const Image = styled.img`
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 50%;
`;

export function Home() {
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
        <Link to={"coop-report"}>Co-op Work Term Reports</Link>
      </Container>
    </Sheet>
  );
}
