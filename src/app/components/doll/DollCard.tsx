import styled from "@emotion/styled";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import { applySolidInversion } from "@mui/joy/colorInversion";
import Link from "@mui/joy/Link";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
import { useLayoutEffect, useRef, useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import {
  CDN_BASE_URL,
  DOLL_INFO_REPO_IMAGES_PATH,
} from "src/app/shared/constants";
import "src/app/shared/styles/animation.css";
import { DollProps } from "src/app/types/doll";

const Image = styled.img`
  /* stylelint-disable-next-line custom-property-pattern */
  border-radius: var(--CardCover-radius);
`;

export function DollCard(props: DollProps) {
  const cardsPath = "cards";
  const imageUrl = `${CDN_BASE_URL}/${DOLL_INFO_REPO_IMAGES_PATH}/${cardsPath}/${props.doll.path}`;
  const [loading, setLoading] = useState<boolean>(true);
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (ref.current && ref.current.offsetWidth < ref.current.scrollWidth) {
      ref.current.classList.add("animate");
    } else {
      ref.current?.classList.remove("animate");
    }
  }, [ref]);

  return (
    <Link component={RouterLink} to={props.doll.path}>
      <Card sx={{ height: "16rem", width: "8rem" }}>
        <CardCover>
          <Skeleton loading={loading}>
            <picture
              onLoad={() => {
                setLoading(false);
              }}
            >
              <source
                type="image/webp"
                width="256"
                height="512"
                srcSet={`${imageUrl}.webp`}
              />
              <Image
                src={`${imageUrl}.png`}
                width="256"
                height="512"
                alt={`Doll - ${props.doll.nameEn}`}
                loading="lazy"
              />
            </picture>
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              borderRadius="var(--CardCover-radius)"
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 77.5%, rgba(0,0,0,1))",
              }}
            ></Box>
          </Skeleton>
        </CardCover>
        <CardContent sx={{ display: "flex", flexDirection: "column-reverse" }}>
          <Box
            overflow="hidden"
            m="0 -0.5rem -0.75rem"
            sx={[applySolidInversion("neutral")]}
          >
            <Typography
              level="body-lg"
              fontWeight="lg"
              whiteSpace="nowrap"
              display="flex"
              ref={ref}
            >
              {props.doll.nameEn}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

export default DollCard;
