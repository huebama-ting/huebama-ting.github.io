import { Suspense, lazy, useEffect, useState } from "react";

import { CoopReportContent } from "src/app/types/coop-report";
import { DynamicImport } from "src/app/types/dynamic-import";

const CoopReportContentView = lazy(
  () => import("src/app/components/coop-report/CoopReportContentView"),
);
const Loading = lazy(() => import("src/app/shared/Loading"));
const Page = lazy(() => import("src/app/shared/Layout"));
const ReportSelect = lazy(
  () => import("src/app/components/coop-report/ReportSelect"),
);

export function CoopReport() {
  const [moduleList, setModuleList] = useState<
    DynamicImport<CoopReportContent>[]
  >([]);
  const [report, setReport] = useState<CoopReportContent>();

  useEffect(() => {
    const reportData = [];
    const fileImports = import.meta.glob<CoopReportContent>(
      "@assets/coop-reports/*.json",
    );
    const files = Object.entries(fileImports);

    for (const [modulePath, moduleImport] of files) {
      reportData.push({ fileName: modulePath, module: moduleImport });
    }

    setModuleList(reportData);
  }, []);

  const handleChange = async (
    _: React.SyntheticEvent | null,
    reportModule: (() => Promise<CoopReportContent>) | null,
  ) => {
    if (reportModule) {
      const reportContent = await reportModule();
      console.log(reportContent);

      setReport(reportContent);
    }
  };

  return (
    <Suspense fallback={<Loading />}>
      <Page>
        <ReportSelect
          reportModuleList={moduleList}
          onChange={(_, reportModule) => handleChange(_, reportModule)}
        />
        <CoopReportContentView report={report} />
      </Page>
    </Suspense>
  );
}

export default CoopReport;
