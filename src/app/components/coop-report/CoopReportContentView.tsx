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
  const cardClassName = "card";
  const contentClassName = "card-content";
  const dividerClassName = "divider";
  const titleClassName = "card-title";

  if (!props.report) {
    return null;
  }

  return (
    <Stack>
      <Title>{props.report.title}</Title>
      <Title order={2} className={styles["term"]}>
        {props.report.term}
      </Title>

      <Divider label="Job Information" className={styles[dividerClassName]} />

      <Paper withBorder className={styles[cardClassName]}>
        <Text className={styles[titleClassName]}>
          {props.report.company.name}
        </Text>
        <Text className={styles[contentClassName]}>Company</Text>
        <Text className={styles[contentClassName]}>
          {props.report.company.description}
        </Text>
      </Paper>

      <Paper withBorder className={styles[cardClassName]}>
        <Text className={styles[titleClassName]}>
          {props.report.job.position}
        </Text>
        <Text className={styles[contentClassName]}>Job Description</Text>
        <List>
          {props.report.job.tasks.map((t) => (
            <List.Item key={generateKey(t)}>{t}</List.Item>
          ))}
        </List>
      </Paper>

      <Paper withBorder className={styles[cardClassName]}>
        <Text className={styles[titleClassName]}>Unique Aspect of the Job</Text>
        <Text className={styles[contentClassName]}>
          {props.report.job.uniqueAspect}
        </Text>
      </Paper>

      <Divider label="Skills" className={styles[dividerClassName]} />

      <Accordion>
        {props.report.workTermSkills.map((wts) => (
          <Accordion.Item key={generateKey(wts.skill)} value={wts.skill}>
            <Accordion.Control>{wts.skill}</Accordion.Control>
            <Accordion.Panel>
              <Text className={styles[contentClassName]}>{wts.use}</Text>
              <br />
              <Text className={styles[contentClassName]}>
                {wts.knowledgeSource}
              </Text>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>

      <Divider label="Goals" className={styles[dividerClassName]} />

      <Tabs>
        <Tabs.List>
          {props.report.goal.mainGoals.map((g) => (
            <Tabs.Tab key={generateKey(g.name)} value={g.name}>
              <Text className={styles["tab-title-text"]}>{g.name}</Text>
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {props.report.goal.mainGoals.map((g) => (
          <Tabs.Panel
            key={generateKey(g.outcome, 0, g.outcome.length / 10)}
            value={g.name}
          >
            <Text className={styles["tab-content-text"]}>{g.outcome}</Text>
          </Tabs.Panel>
        ))}
      </Tabs>

      {props.report.goal.miscGoals.map((m) => (
        <Paper
          withBorder
          key={generateKey(m.name, 0, 5)}
          className={styles[cardClassName]}
        >
          <Text className={styles[titleClassName]}>{m.name}</Text>
          <Text className={styles[contentClassName]}>{m.outcome}</Text>
        </Paper>
      ))}

      <Divider label="Bonus" className={styles[dividerClassName]} />

      {props.report.bonus.quotes.map((q) => (
        <Blockquote cite="Anonymous" key={generateKey(q, 0, q.length / 10)}>
          {q}
        </Blockquote>
      ))}

      <Paper withBorder className={styles[cardClassName]}>
        {props.report.bonus.explanations.map((e) => (
          <Text
            key={generateKey(e, 0, e.length / 10)}
            className={styles[contentClassName]}
          >
            {e}
          </Text>
        ))}
      </Paper>

      <Divider
        label="Conclusion and Acknowledgements"
        className={styles[dividerClassName]}
      />

      <Text className={styles[contentClassName]}>
        {props.report.conclusion.endingNote}
      </Text>

      <Paper withBorder className={styles[cardClassName]}>
        <Text className={styles[titleClassName]}>Special Thanks</Text>

        {props.report.conclusion.specialThanks.map((st) => (
          <Text key={generateKey(st)} className={styles[contentClassName]}>
            {st}
          </Text>
        ))}
      </Paper>
    </Stack>
  );
}

export default CoopReportContentView;
