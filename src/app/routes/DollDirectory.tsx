import Box from "@mui/joy/Box";
import { Suspense, lazy, useEffect, useState } from "react";

import { Doll } from "src/app/types/doll";

const DollCard = lazy(() => import("src/app/components/doll/DollCard"));
const Loading = lazy(() => import("src/app/shared/Loading"));
const Page = lazy(() => import("src/app/shared/Layout"));

export function DollDirectory() {
  const [dolls, setDolls] = useState<Doll[]>([]);

  useEffect(() => {
    async function loadData() {
      const dollData: Doll[] = [];
      const fileImports = import.meta.glob<Doll>("@assets/dolls/*.json");
      const files = Object.entries(fileImports);

      for (const [_, moduleImport] of files) {
        dollData.push(await moduleImport());
      }

      setDolls(dollData);
    }

    void loadData();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <Box
          display="flex"
          flexWrap="wrap"
          gap="2rem 1rem"
          justifyContent="center"
        >
          {dolls.map((doll) => (
            <Suspense key={doll.path} fallback={<Loading />}>
              <DollCard doll={doll} />
            </Suspense>
          ))}
        </Box>
      </Page>
    </Suspense>
  );
}

export default DollDirectory;
