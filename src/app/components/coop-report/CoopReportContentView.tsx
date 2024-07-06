import styled from "@emotion/styled";
import Accordion from "@mui/joy/Accordion";
import AccordionDetails from "@mui/joy/AccordionDetails";
import AccordionGroup from "@mui/joy/AccordionGroup";
import AccordionSummary from "@mui/joy/AccordionSummary";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Divider from "@mui/joy/Divider";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import Stack from "@mui/joy/Stack";
import { SxProps } from "@mui/joy/styles/types";
import Tab from "@mui/joy/Tab";
import TabList from "@mui/joy/TabList";
import TabPanel from "@mui/joy/TabPanel";
import Tabs from "@mui/joy/Tabs";
import Typography from "@mui/joy/Typography";

import { CoopReportContent } from "src/app/types/coop-report";
import { generateKey } from "src/app/utils/react-key-generator";

interface CoopReportContentViewProps {
  report: CoopReportContent | undefined;
}

const Quote = styled.blockquote`
  padding: 1rem;
  background-color: var(--joy-palette-background-level3);
`;

const cardTextStyles: SxProps = {
  marginBottom: "0.5rem",
  marginTop: "0.5rem",
};
const dividerStyles: SxProps = {
  marginBottom: "2rem",
  marginTop: "2rem",
};

export function CoopReportContentView(props: CoopReportContentViewProps) {
  if (!props.report) {
    return null;
  }

  return (
    <Stack
      alignItems={"center"}
      spacing={4}
      sx={{
        textAlign: "center",
        width: {
          xs: "15rem",
          sm: "30rem",
          md: "40rem",
          lg: "45rem",
          xl: "55rem",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "1rem", md: "2rem", lg: "3rem" },
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        {props.report.title}
      </Typography>
      <Typography level="h2">{props.report.term}</Typography>

      <Divider sx={dividerStyles}>Job Information</Divider>
      <Card>
        <Box>
          <Typography level="title-lg" sx={cardTextStyles}>
            {props.report.company.name}
          </Typography>
          <Typography level="title-sm">Company</Typography>
          <Typography level="body-md" sx={cardTextStyles}>
            {props.report.company.description}
          </Typography>
        </Box>
      </Card>
      <Card>
        <Box>
          <Typography level="title-lg" sx={cardTextStyles}>
            {props.report.job.position}
          </Typography>
          <Typography level="title-sm">Job Description</Typography>
          <List>
            {props.report.job.tasks.map((t) => (
              <ListItem key={generateKey(t)}>
                <Typography level="body-md">{t}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
      </Card>
      <Card>
        <Box>
          <Typography level="title-lg" sx={cardTextStyles}>
            Unique Aspect of the Job
          </Typography>
          <Typography level="body-md" sx={cardTextStyles}>
            {props.report.job.uniqueAspect}
          </Typography>
        </Box>
      </Card>

      <Divider sx={dividerStyles}>Skills</Divider>
      <Box>
        <AccordionGroup>
          {props.report.workTermSkills.map((wts) => (
            <Accordion key={generateKey(wts.skill)}>
              <AccordionSummary sx={{ fontSize: "1.25rem" }}>
                {wts.skill}
              </AccordionSummary>
              <AccordionDetails>
                <Typography level="body-md">{wts.use}</Typography>
                <br />
                <Typography level="body-md">{wts.knowledgeSource}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </AccordionGroup>
      </Box>

      <Divider sx={dividerStyles}>Goals</Divider>
      <Box>
        <Tabs>
          <TabList>
            {props.report.goal.mainGoals.map((g) => (
              <Tab key={generateKey(g.name)}>
                <Typography level="body-md">{g.name}</Typography>
              </Tab>
            ))}
          </TabList>
          {props.report.goal.mainGoals.map((g, index) => (
            <TabPanel
              key={generateKey(g.outcome, 0, g.outcome.length / 10)}
              value={index}
            >
              <Typography level="body-md">{g.outcome}</Typography>
            </TabPanel>
          ))}
        </Tabs>
      </Box>
      {props.report.goal.miscGoals.map((m) => (
        <Card key={generateKey(m.name, 0, 5)}>
          <Box>
            <Typography level="title-lg">{m.name}</Typography>
            <br />
            <Typography level="body-md">{m.outcome}</Typography>
          </Box>
        </Card>
      ))}

      <Divider sx={dividerStyles}>Bonus</Divider>
      {props.report.bonus.quotes.map((q) => (
        <Quote key={generateKey(q, 0, q.length / 10)}>
          <Typography level="body-md">{q}</Typography>
          <footer>—Anonymous</footer>
        </Quote>
      ))}
      <Card>
        <Box>
          {props.report.bonus.explanations.map((e) => (
            <Typography
              level="body-md"
              key={generateKey(e, 0, e.length / 10)}
              sx={{ padding: "1rem 0" }}
            >
              {e}
            </Typography>
          ))}
        </Box>
      </Card>

      <Divider sx={dividerStyles}>Conclusion and Acknowledgements</Divider>
      <Typography level="body-md">
        {props.report.conclusion.endingNote}
      </Typography>
      <Card>
        <Box>
          <Typography level="title-lg" sx={cardTextStyles}>
            Special Thanks
          </Typography>
          {props.report.conclusion.specialThanks.map((st) => (
            <Typography
              level="body-md"
              key={generateKey(st)}
              sx={cardTextStyles}
            >
              {st}
            </Typography>
          ))}
        </Box>
      </Card>
    </Stack>
  );
}

export default CoopReportContentView;
