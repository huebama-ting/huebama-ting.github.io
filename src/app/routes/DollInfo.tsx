import { Suspense, lazy } from "react";
import { useLoaderData } from "react-router-dom";

import { Doll } from "src/app/types/doll";

const DollDetails = lazy(() => import("src/app/components/doll/DollDetails"));
const Loading = lazy(() => import("src/app/shared/Loading"));
const Page = lazy(() => import("src/app/shared/Layout"));

export function DollInfo() {
  const doll = useLoaderData() as Doll;

  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <DollDetails doll={doll} />
      </Page>
    </Suspense>
  );
}

export default DollInfo;
