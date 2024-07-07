import Typography from "@mui/joy/Typography";
import { Suspense, lazy } from "react";
import { useLoaderData } from "react-router-dom";

import { Doll } from "src/app/types/doll";

const Loading = lazy(() => import("src/app/shared/Loading"));
const Page = lazy(() => import("src/app/shared/Layout"));

export function DollInfo() {
  const doll = useLoaderData() as Doll;

  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <Typography>{doll.nameEn}</Typography>
      </Page>
    </Suspense>
  );
}

export default DollInfo;
