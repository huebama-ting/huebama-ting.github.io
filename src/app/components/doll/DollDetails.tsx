import { Carousel } from "@mantine/carousel";
import { Center, Grid, Group, Image, Title } from "@mantine/core";
import { Suspense, lazy } from "react";

import {
  CDN_BASE_URL,
  DOLL_INFO_REPO_IMAGES_PATH,
} from "src/app/shared/constants";
import { DollProps } from "src/app/types/doll";

import styles from "./styles/doll-details.module.css";

interface RarityTextProps {
  readonly skinStage: number;
  readonly baseRarity: number;
}

interface DollSkinImageProps {
  readonly imageUrl: string;
  readonly dollName: string;
}

// const Carousel = lazy(() => import("src/app/shared/components/Carousel"));
const Loading = lazy(() => import("src/app/shared/components/Loading"));
const DollRarity = lazy(() => import("src/app/components/doll/DollRarity"));

// const sizeStyles = `
//   width: 20rem;
//   height: 20rem;

//   ${MEDIA_QUERIES["md"]} {
//     width: 32rem;
//     height: 32rem;
//   }

//   ${MEDIA_QUERIES["lg"]} {
//     width: 40rem;
//     height: 40rem;
//   }
// `;
// const carouselStyles = `
//   margin: 0 1rem 1rem;
//   width: 20rem;

//   ${MEDIA_QUERIES["md"]} {
//     width: 32rem;
//   }

//   ${MEDIA_QUERIES["lg"]} {
//     width: 40rem;
//   }
// `;

// const FlexContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin: 0.25rem 0 0.5rem;
// `;
// const Image = styled.img`
//   ${sizeStyles}
// `;
// const ImageContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;

//   ${sizeStyles}
// `;
// const Source = styled.source`
//   ${sizeStyles}
// `;

function RarityText(props: RarityTextProps) {
  let RarityText: JSX.Element;

  if (props.skinStage === props.baseRarity) {
    RarityText = (
      <>
        <span>Base (</span>
        <DollRarity rarity={props.skinStage} />
        <span>) Art</span>
      </>
    );
  } else {
    RarityText = (
      <>
        <DollRarity rarity={props.skinStage} />
        <span className={styles["after-rarity-text"]}> Art</span>
      </>
    );
  }

  return RarityText;
}

function DollSkinImage(props: DollSkinImageProps) {
  return (
    <Center py="1rem">
      <picture>
        <source
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
          className={styles["doll-image"]}
        />
      </picture>
    </Center>
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
    <Center className={styles["container"]}>
      <Grid className={styles["intro-container"]}>
        <Grid.Col span={12}>
          <Title className={styles["doll-name"]}>{props.doll.nameEn}</Title>
        </Grid.Col>
        <Grid.Col span={12}>
          <Suspense fallback={<Loading />}>
            <Carousel
              loop
              nextControlProps={{ "aria-label": "Next carousel slide" }}
              previousControlProps={{ "aria-label": "Previous carousel slide" }}
            >
              {baseSkins.map((skinName) => (
                <Carousel.Slide key={skinName}>
                  <Group className={styles["rarity-container"]}>
                    {rarityPresent && (
                      <RarityText
                        skinStage={skinRarity(skinName)}
                        baseRarity={props.doll.baseRarity}
                      />
                    )}
                  </Group>
                  <DollSkinImage
                    imageUrl={`${imageUrl}/${skinName}/${props.doll.path}`}
                    dollName={props.doll.nameEn}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Suspense>
        </Grid.Col>
      </Grid>
    </Center>
  );
}

export default DollDetails;
