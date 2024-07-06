import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";

import { CoopReportContent } from "src/app/types/coop-report";
import { DynamicImport } from "src/app/types/dynamic-import";

interface ReportSelectProps {
  reportModuleList: DynamicImport<CoopReportContent>[];
  onChange: (
    _: React.SyntheticEvent | null,
    reportModule: (() => Promise<CoopReportContent>) | null,
  ) => Promise<void>;
}

export function ReportSelect(props: ReportSelectProps) {
  return (
    <FormControl>
      <FormLabel>Work Term Report</FormLabel>
      <Select
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={props.onChange}
        placeholder="Choose a work term report..."
        size="md"
        sx={{ minWidth: "16rem" }}
      >
        {props.reportModuleList.map((reportModule, index) => (
          <Option
            key={reportModule.fileName}
            value={reportModule.module}
          >{`Co-op Work Term Report ${index + 1}`}</Option>
        ))}
      </Select>
    </FormControl>
  );
}

export default ReportSelect;
