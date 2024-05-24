interface Company {
  name: string;
  description: string;
}

interface Job {
  position: string;
  tasks: string[];
  uniqueAspect: string;
}

interface WorkTermSkill {
  skill: string;
  use: string;
  knowledgeSource: string;
}

interface GoalContent {
  name: string;
  outcome: string;
}

interface Goal {
  mainGoals: GoalContent[];
  miscGoals: GoalContent[];
}

interface Bonus {
  quotes: string[];
  explanations: string[];
}

interface Conclusion {
  endingNote: string;
  specialThanks: string[];
}

export interface CoopReportContent {
  title: string;
  term: string;
  company: Company;
  job: Job;
  workTermSkills: WorkTermSkill[];
  goal: Goal;
  bonus: Bonus;
  conclusion: Conclusion;
}
