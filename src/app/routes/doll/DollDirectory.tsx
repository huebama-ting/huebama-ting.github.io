import { Group } from "@mantine/core";
import { Suspense, lazy, useEffect, useState } from "react";

import { Doll } from "src/app/types/doll";

import styles from "./styles/doll-directory.module.css";

const DollCard = lazy(() => import("src/app/components/doll/DollCard"));
const Loading = lazy(() => import("src/app/shared/components/Loading"));

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
      <Group className={styles["doll-directory-container"]}>
        {dolls.map((doll) => (
          <Suspense key={doll.path} fallback={<Loading />}>
            <DollCard doll={doll} />
          </Suspense>
        ))}
      </Group>
    </Suspense>
  );
}

export default DollDirectory;
