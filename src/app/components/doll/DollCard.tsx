import {
  Anchor,
  AspectRatio,
  Card,
  Image,
  Overlay,
  Skeleton,
  Text,
} from "@mantine/core";
import { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  CDN_BASE_URL,
  DOLL_INFO_REPO_IMAGES_PATH,
} from "src/app/shared/constants";
import sharedStyles from "src/app/shared/styles/animation.module.css";
import { DollProps } from "src/app/types/doll";

import styles from "./styles/doll-card.module.css";

export function DollCard(props: DollProps) {
  const cardsPath = "cards";
  const imageUrl = `${CDN_BASE_URL}/${DOLL_INFO_REPO_IMAGES_PATH}/${cardsPath}/${props.doll.path}`;
  const [loading, setLoading] = useState<boolean>(true);
  const ref = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    if (ref.current && ref.current.offsetWidth < ref.current.scrollWidth) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ref.current.classList.add(sharedStyles["animate"]!);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      ref.current?.classList.remove(sharedStyles["animate"]!);
    }
  }, [ref]);

  return (
    <Anchor component={Link} to={props.doll.path}>
      <Card withBorder className={styles["card"]}>
        <Card.Section className={styles["card-section"]}>
          <AspectRatio ratio={192 / 384}>
            <Skeleton visible={loading}>
              <picture
                onLoad={() => {
                  setLoading(false);
                }}
              >
                <source
                  type="image/webp"
                  width="192"
                  height="384"
                  srcSet={`${imageUrl}.webp`}
                />
                <Image
                  src={`${imageUrl}.png`}
                  width="192"
                  height="384"
                  alt={`Doll - ${props.doll.nameEn}`}
                  loading="lazy"
                />
              </picture>
            </Skeleton>

            <Overlay className={styles["card-overlay"]}>
              <Text ref={ref} className={styles["doll-name"]}>
                {props.doll.nameEn}
              </Text>
            </Overlay>
          </AspectRatio>
        </Card.Section>
      </Card>
    </Anchor>
  );
}

export default DollCard;
