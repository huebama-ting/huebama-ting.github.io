import styled from "@emotion/styled";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
import { useState } from "react";

import {
  CDN_BASE_URL,
  DOLL_INFO_REPO_FILES_PATH,
} from "src/app/shared/constants";
import { Doll } from "src/app/types/doll";

interface DollCardProps {
  doll: Doll;
}

const Image = styled.img`
  /* stylelint-disable-next-line custom-property-pattern */
  border-radius: var(--CardCover-radius);
`;

export function DollCard(props: DollCardProps) {
  const imageUrl = `${CDN_BASE_URL}/${DOLL_INFO_REPO_FILES_PATH}/${props.doll.cardImageUrl}`;
  const [loading, setLoading] = useState<boolean>(true);

  return (
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
                "linear-gradient(to bottom, rgba(0,0,0,0) 75%, rgba(0,0,0,1))",
            }}
          ></Box>
        </Skeleton>
      </CardCover>
      <CardContent>
        <Typography
          level="body-lg"
          fontWeight="lg"
          mt="14.5rem"
          textColor="#bbb"
        >
          {props.doll.nameEn}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DollCard;
