import { lazy, useEffect, useState } from "react";

import { Page } from "src/app/shared/Layout";
import { Doll } from "src/app/types/doll";

const DollCard = lazy(() => import("src/app/components/doll/DollCard"));

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
    <Page>
      {dolls.map((doll) => (
        <DollCard key={doll.cardImageUrl} doll={doll} />
      ))}
    </Page>
  );
}

export default DollDirectory;
