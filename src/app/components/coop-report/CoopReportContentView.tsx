import {
  Accordion,
  Blockquote,
  Divider,
  List,
  Paper,
  Stack,
  Tabs,
  Text,
  Title,
} from "@mantine/core";

import { CoopReportContent } from "src/app/types/coop-report";
import { generateKey } from "src/app/utils/react-key-generator";

import styles from "./styles/coop-report-content-view.module.css";

interface CoopReportContentViewProps {
  readonly report: CoopReportContent | undefined;
}

export function CoopReportContentView(props: CoopReportContentViewProps) {
  if (!props.report) {
    return null;
  }

  return (
    <Stack>
      <Title order={1}>{props.report.title}</Title>
      <Title order={2} fw={500}>
        {props.report.term}
      </Title>

      <Divider my="xs" label="Job Information" labelPosition="center" />

      <Paper shadow="xs" p="lg" withBorder>
        <Text size="lg" fw={500} mb="0.5rem" mt="0.5rem">
          {props.report.company.name}
        </Text>
        <Text fw={500} mb="0.5rem" mt="0.5rem">
          Company
        </Text>
        <Text mb="0.5rem" mt="0.5rem">
          {props.report.company.description}
        </Text>
      </Paper>

      <Paper shadow="xs" p="lg" withBorder>
        <Text size="lg" fw={500} mb="0.5rem" mt="0.5rem">
          {props.report.job.position}
        </Text>
        <Text fw={500} mb="0.5rem" mt="0.5rem">
          Job Description
        </Text>
        <List>
          {props.report.job.tasks.map((t) => (
            <List.Item key={generateKey(t)}>{t}</List.Item>
          ))}
        </List>
      </Paper>

      <Paper shadow="xs" p="lg" withBorder>
        <Text size="lg" fw={500} mb="0.5rem" mt="0.5rem">
          Unique Aspect of the Job
        </Text>
        <Text mb="0.5rem" mt="0.5rem">
          {props.report.job.uniqueAspect}
        </Text>
      </Paper>

      <Divider my="xs" label="Skills" labelPosition="center" />

      <Accordion>
        {props.report.workTermSkills.map((wts) => (
          <Accordion.Item key={generateKey(wts.skill)} value={wts.skill}>
            <Accordion.Control>{wts.skill}</Accordion.Control>
            <Accordion.Panel>
              <Text mb="0.5rem" mt="0.5rem">
                {wts.use}
              </Text>
              <br />
              <Text mb="0.5rem" mt="0.5rem">
                {wts.knowledgeSource}
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Divider my="xs" label="Goals" labelPosition="center" />

      <Tabs>
        <Tabs.List>
          {props.report.goal.mainGoals.map((g) => (
            <Tabs.Tab key={generateKey(g.name)} value={g.name}>
              <Text className={styles["tab-text"]}>{g.name}</Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {props.report.goal.mainGoals.map((g) => (
          <Tabs.Panel
            key={generateKey(g.outcome, 0, g.outcome.length / 10)}
            value={g.name}
          >
            <Text m="md">{g.outcome}</Text>
          </Tabs.Panel>
        ))}
      </Tabs>

      {props.report.goal.miscGoals.map((m) => (
        <Paper shadow="xs" p="lg" withBorder key={generateKey(m.name, 0, 5)}>
          <Text size="lg" fw={500} mb="1.5rem" mt="0.5rem">
            {m.name}
          </Text>
          <Text mb="0.5rem" mt="0.5rem">
            {m.outcome}
          </Text>
        </Paper>
      ))}

      <Divider my="xs" label="Bonus" labelPosition="center" />

      {props.report.bonus.quotes.map((q) => (
        <Blockquote cite="Anonymous" key={generateKey(q, 0, q.length / 10)}>
          {q}
        </Blockquote>
      ))}

      <Paper shadow="xs" p="lg" withBorder>
        {props.report.bonus.explanations.map((e) => (
          <Text key={generateKey(e, 0, e.length / 10)} p="1rem 0">
            {e}
          </Text>
        ))}
      </Paper>

      <Divider
        my="xs"
        label="Conclusion and Acknowledgements"
        labelPosition="center"
      />

      <Text mb="0.5rem" mt="0.5rem">
        {props.report.conclusion.endingNote}
      </Text>

      <Paper shadow="xs" p="lg" withBorder>
        <Text size="lg" fw={500} mb="0.5rem" mt="0.5rem">
          Special Thanks
        </Text>

        {props.report.conclusion.specialThanks.map((st) => (
          <Text key={generateKey(st)} mb="0.5rem" mt="0.5rem">
            {st}
          </Text>
        ))}
      </Paper>
    </Stack>
  );
}

export default CoopReportContentView;
