import styled from "@emotion/styled";
import Grid from "@mui/joy/Grid";
import Typography from "@mui/joy/Typography";
import { useState } from "react";

import {
  CDN_BASE_URL,
  DOLL_INFO_REPO_IMAGES_PATH,
  mql,
} from "src/app/shared/constants";
import { DollProps } from "src/app/types/doll";

const sizeStyles = `
  ${mql["md"]} {
    width: 384px;
    height: 384px;
  }
  ${mql["lg"]} {
    width: 512px;
    height: 512px;
  }
`;

const Image = styled.img`
  ${sizeStyles}
`;
const Source = styled.source`
  ${sizeStyles}
`;

export function DollDetails(props: DollProps) {
  const [stage, _] = useState<string>("stage-3");
  const imageUrl = `${CDN_BASE_URL}/${DOLL_INFO_REPO_IMAGES_PATH}/${stage}/${props.doll.path}`;

  return (
    <Grid
      container
      spacing={2}
      flexGrow={1}
      sx={{ border: "0.125rem solid #bbb", borderRadius: "0.5rem" }}
    >
      <Grid xs={12} mb="1rem">
        <Typography level="title-lg" textAlign="center">
          {props.doll.nameEn}
        </Typography>
      </Grid>
      <Grid xs={12} container justifyContent="center" alignItems="center">
        <picture>
          <Source
            type="image/webp"
            width="256"
            height="256"
            srcSet={`${imageUrl}.webp`}
          />
          <Image
            src={`${imageUrl}.png`}
            width="256"
            height="256"
            alt={`Doll - ${props.doll.nameEn}`}
            loading="lazy"
          />
        </picture>
      </Grid>
    </Grid>
  );
}

export default DollDetails;
