import styled from "@emotion/styled";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
import { Suspense, lazy, useState } from "react";

import homeIconPng from "src/assets/images/home-icon.png";
import homeIconWebp from "src/assets/images/home-icon.webp";

const Loading = lazy(() => import("src/app/shared/components/Loading"));
const Page = lazy(() => import("src/app/shared/components/Layout"));

const Image = styled.img`
  max-width: 10rem;
  max-height: 10rem;
  border-radius: 50%;
`;

export function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <Skeleton
          loading={loading}
          variant="circular"
          width="10rem"
          height="10rem"
        >
          <picture
            onLoad={() => {
              setLoading(false);
            }}
          >
            <source type="image/webp" srcSet={homeIconWebp} />
            <source type="image/png" srcSet={homeIconPng} />
            <Image
              src={homeIconPng}
              width={160}
              height={160}
              alt="Icon showing a lazy egg"
              loading="lazy"
            />
          </picture>
        </Skeleton>
        <Typography level="h1">Hello world!</Typography>
      </Page>
    </Suspense>
  );
}

export default Home;
