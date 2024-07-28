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

interface RarityTextProps {
  readonly skinStage: number;
  readonly baseRarity: number;
}

const Carousel = lazy(() => import("src/app/shared/Carousel"));
const Loading = lazy(() => import("src/app/shared/Loading"));
const Rarity = lazy(() => import("src/app/components/doll/Rarity"));

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
  margin: 0 1rem 1rem;
  width: 20rem;

  ${MEDIA_QUERIES["md"]} {
    width: 32rem;
  }

  ${MEDIA_QUERIES["lg"]} {
    width: 40rem;
  }
`;

const AfterRarityText = styled.span`
  white-space: pre;
`;
const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.25rem 0 0.5rem;
`;
const Image = styled.img`
  ${sizeStyles}
`;
const Source = styled.source`
  ${sizeStyles}
`;

function RarityText(props: RarityTextProps) {
  if (props.skinStage === props.baseRarity) {
    return (
      <>
        <span>Base (</span>
        <Rarity rarity={props.skinStage} />
        <span>) Art</span>
      </>
    );
  } else {
    return (
      <>
        <Rarity rarity={props.skinStage} />
        <AfterRarityText> Art</AfterRarityText>
      </>
    );
  }
}

export function DollDetails(props: DollProps) {
  const baseSkins = ["stage-1", "stage-2", "stage-3"];
  const imageUrl = `${CDN_BASE_URL}/${DOLL_INFO_REPO_IMAGES_PATH}`;

  const skinRarity = (skinStage: string) => {
    let skinRarity = 0;

    if (skinStage === baseSkins[0]) {
      skinRarity = props.doll.baseRarity;
    } else if (skinStage === baseSkins[1]) {
      skinRarity = 3.5;
    } else if (skinStage === baseSkins[2]) {
      skinRarity = 4;
    }

    return skinRarity;
  };

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
      <Grid
        xs={12}
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Suspense fallback={<Loading />}>
          <Carousel styles={carouselStyles}>
            {baseSkins.map((skinName) => (
              <div key={skinName}>
                <FlexContainer>
                  <RarityText
                    skinStage={skinRarity(skinName)}
                    baseRarity={props.doll.baseRarity}
                  />
                </FlexContainer>
                <picture className="glide__slide">
                  <Source
                    type="image/webp"
                    width={320}
                    height={320}
                    srcSet={`${imageUrl}/${skinName}/${props.doll.path}.webp`}
                  />
                  <Image
                    src={`${imageUrl}/${skinName}/${props.doll.path}.png`}
                    width={320}
                    height={320}
                    alt={`Doll - ${props.doll.nameEn}`}
                    loading="lazy"
                  />
                </picture>
              </div>
            ))}
          </Carousel>
        </Suspense>
      </Grid>
    </Grid>
  );
}

export default DollDetails;
