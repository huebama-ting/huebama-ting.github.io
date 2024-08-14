import { ComboboxItem, Select } from "@mantine/core";

import styles from "./styles/coop-report-select.module.css";

interface CoopReportSelectProps {
  readonly fileList: string[];
  readonly onChange: (value: string | null, option: ComboboxItem) => void;
}

export function ReportSelect(props: CoopReportSelectProps) {
  const options = props.fileList.map((fileName, index) => {
    return {
      value: fileName,
      label: `Co-op Work Term Report ${index + 1}`,
    };
  });

  return (
    <Select
      onChange={props.onChange}
      placeholder="Choose a work term report..."
      data={options}
      className={styles["report-select"]}
    />
  );
}

export default ReportSelect;
