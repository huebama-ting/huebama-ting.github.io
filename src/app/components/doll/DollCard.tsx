import styled from "@emotion/styled";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import Typography from "@mui/joy/Typography";

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

  return (
    <Card sx={{ height: "16rem", width: "8rem" }}>
      <CardCover>
        <picture>
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
            alt="Icon showing a lazy egg"
            loading="lazy"
          />
        </picture>
      </CardCover>
      <CardContent>
        <Typography level="body-lg" fontWeight="lg" mt="14.5rem">
          {props.doll.nameEn}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DollCard;
