import { Image, Skeleton, Stack, Title } from "@mantine/core";
import { Suspense, lazy, useState } from "react";

import homeIconPng from "src/assets/images/home-icon.png";
import homeIconWebp from "src/assets/images/home-icon.webp";

import styles from "./home.module.css";

const Loading = lazy(() => import("src/app/shared/components/Loading"));

export function Home() {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <Suspense fallback={<Loading />}>
      <Stack align="center">
        <Skeleton height={160} circle visible={loading}>
          <picture
            onLoad={() => {
              setLoading(false);
            }}
          >
            <source type="image/webp" srcSet={homeIconWebp} />
            <Image
              className={styles["image"]}
              src={homeIconPng}
              width={160}
              height={160}
              alt="Icon showing a lazy egg"
              loading="lazy"
            />
          </picture>
        </Skeleton>
        <Title order={1}>Hello world!</Title>
      </Stack>
    </Suspense>
  );
}

export default Home;
