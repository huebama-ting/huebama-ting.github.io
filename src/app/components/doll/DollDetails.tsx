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

interface DollSkinImageProps {
  readonly imageUrl: string;
  readonly dollName: string;
}

const Carousel = lazy(() => import("src/app/shared/components/Carousel"));
const Loading = lazy(() => import("src/app/shared/components/Loading"));
const DollRarity = lazy(() => import("src/app/components/doll/DollRarity"));

const sizeStyles = `
  width: 20rem;
  height: 20rem;

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
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

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
        <DollRarity rarity={props.skinStage} />
        <span>) Art</span>
      </>
    );
  } else {
    return (
      <>
        <DollRarity rarity={props.skinStage} />
        <AfterRarityText> Art</AfterRarityText>
      </>
    );
  }
}

function DollSkinImage(props: DollSkinImageProps) {
  return (
    <ImageContainer>
      <picture>
        <Source
          type="image/webp"
          srcSet={`${props.imageUrl}.webp`}
          width={320}
          height={320}
        />
        <Image
          src={`${props.imageUrl}.png`}
          width={320}
          height={320}
          alt={`Doll - ${props.dollName}`}
          loading="lazy"
        />
      </picture>
    </ImageContainer>
  );
}

export function DollDetails(props: DollProps) {
  const baseSkins = ["stage-1", "stage-2", "stage-3"];
  const imageUrl = `${CDN_BASE_URL}/${DOLL_INFO_REPO_IMAGES_PATH}`;
  const rarityPresent = !!props.doll.baseRarity;

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
      border={1}
      borderColor="lightsteelblue"
      borderRadius="0.5rem"
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
              <div key={skinName} className="glide__slide">
                <FlexContainer>
                  {rarityPresent && (
                    <RarityText
                      skinStage={skinRarity(skinName)}
                      baseRarity={props.doll.baseRarity}
                    />
                  )}
                </FlexContainer>
                <DollSkinImage
                  imageUrl={`${imageUrl}/${skinName}/${props.doll.path}`}
                  dollName={props.doll.nameEn}
                />
              </div>
            ))}
          </Carousel>
        </Suspense>
      </Grid>
    </Grid>
  );
}

export default DollDetails;
