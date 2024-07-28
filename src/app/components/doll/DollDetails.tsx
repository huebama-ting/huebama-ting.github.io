import styled from "@emotion/styled";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { Suspense, lazy } from "react";

import {
  CDN_BASE_URL,
  DOLL_INFO_REPO_IMAGES_PATH,
  MEDIA_QUERIES,
} from "src/app/shared/constants";
import { DollProps } from "src/app/types/doll";

const Carousel = lazy(() => import("src/app/shared/Carousel"));
const Loading = lazy(() => import("src/app/shared/Loading"));

const sizeStyles = `
  ${MEDIA_QUERIES["md"]} {
    width: 32rem;
    height: 32rem;
  }

  ${MEDIA_QUERIES["lg"]} {
    width: 40rem;
    height: 40rem;
  }
`;
const carouselStyles = `
  margin: 1rem;
  width: 16rem;

  ${MEDIA_QUERIES["md"]} {
    width: 32rem;
  }

  ${MEDIA_QUERIES["lg"]} {
    width: 40rem;
  }
`;

const Image = styled.img`
  ${sizeStyles}
`;
const Source = styled.source`
  ${sizeStyles}
`;

export function DollDetails(props: DollProps) {
  const baseSkins = ["stage-1", "stage-2", "stage-3"];
  const imageUrl = `${CDN_BASE_URL}/${DOLL_INFO_REPO_IMAGES_PATH}`;

  return (
    <Grid
      container
      spacing={2}
      flexGrow={1}
      sx={{ border: "1px solid #bbb", borderRadius: "0.5rem" }}
    >
      <Grid xs={12}>
        <Typography level="title-lg" textAlign="center">
          {props.doll.nameEn}
        </Typography>
      </Grid>
      <Grid xs={12} container justifyContent="center" alignItems="center">
        <Suspense fallback={<Loading />}>
          <Carousel styles={carouselStyles}>
            {baseSkins.map((skinName) => (
              <picture key={skinName} className="glide__slide">
                <Source
                  type="image/webp"
                  width={256}
                  height={256}
                  srcSet={`${imageUrl}/${skinName}/${props.doll.path}.webp`}
                />
                <Image
                  src={`${imageUrl}/${skinName}/${props.doll.path}.png`}
                  width={256}
                  height={256}
                  alt={`Doll - ${props.doll.nameEn}`}
                  loading="lazy"
                />
              </picture>
            ))}
          </Carousel>
        </Suspense>
      </Grid>
    </Grid>
  );
}

export default DollDetails;
