import Typography from "@mui/joy/Typography";
import { useLoaderData } from "react-router-dom";

import { Page } from "src/app/shared/Layout";
import { Doll } from "src/app/types/doll";

export function DollInfo() {
  const doll = useLoaderData() as Doll;
  return (
    <Page>
      <Typography>{doll.nameEn}</Typography>
    </Page>
  );
}

export default DollInfo;
