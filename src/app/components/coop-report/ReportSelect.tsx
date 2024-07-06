import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";

interface ReportSelectProps {
  wtrList: string[];
  onChange: (
    _: React.SyntheticEvent | null,
    reportFileName: string | null,
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
        {props.wtrList.map((fileName: string, index: number) => (
          <Option key={fileName} value={fileName}>{`Co-op Work Term Report ${
            index + 1
          }`}</Option>
        ))}
      </Select>
    </FormControl>
  );
}

export default ReportSelect;
