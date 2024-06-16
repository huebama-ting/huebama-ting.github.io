import Sheet from "@mui/joy/Sheet";
import { Suspense, lazy, useState } from "react";

import { REPORT_COUNT } from "src/app/shared/constants";
import { Container } from "src/app/shared/Layout";
import { Loading } from "src/app/shared/Loading";
import { CoopReportContent } from "src/app/types/coop-report";

const CoopReportContentView = lazy(
  () => import("src/app/components/CoopReportContentView"),
);
const ReportSelect = lazy(() => import("src/app/components/ReportSelect"));

function countAmount(): string[] {
  const list: string[] = [];

  for (let index = 1; index <= REPORT_COUNT; index++) {
    list.push(`wtr_${index}`);
  }

  return list;
}

export function CoopReport() {
  const wtrList: string[] = countAmount();
  const [report, setReport] = useState<CoopReportContent>();

  const handleChange = async (
    _: React.SyntheticEvent | null,
    reportFileName: string | null,
  ) => {
    const reportContent: CoopReportContent = (await import(
      `../../assets/coop-reports/${reportFileName}.json`
    )) as CoopReportContent;

    setReport(reportContent);
  };

  return (
    <Sheet>
      <Container>
        <Suspense fallback={<Loading />}>
          <ReportSelect
            wtrList={wtrList}
            onChange={(_, reportFileName) => handleChange(_, reportFileName)}
          />
          <CoopReportContentView report={report} />
        </Suspense>
      </Container>
    </Sheet>
  );
}
