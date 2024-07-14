import styled from "@emotion/styled";
import Typography from "@mui/joy/Typography";
import { Suspense, lazy } from "react";

import homeIconPng from "src/assets/images/home-icon.png";
import homeIconWebp from "src/assets/images/home-icon.webp";

const Loading = lazy(() => import("src/app/shared/Loading"));
const Page = lazy(() => import("src/app/shared/Layout"));

const Image = styled.img`
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 50%;
`;

export function Home() {
  return (
    <Suspense fallback={<Loading />}>
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
    </Suspense>
  );
}

export default Home;
