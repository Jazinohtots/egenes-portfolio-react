export interface WorkItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  /** Optional alternate tag list */
  tags?: string[];
  /** Deployment/status text (e.g. 'DEPLOYED', 'PRODUCTION') */
  status?: string;
  /** Public URL for the live system */
  liveUrl?: string;
  /** Source code repository URL */
  githubUrl?: string;
  /** Generic link fallback */
  link?: string;
}

export interface CurrentProject {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  /** 0–100 progress percentage for current build completion */
  progress?: number;
  /** Status label (e.g., 'ACTIVE BUILD', 'IN PROGRESS', 'NEAR COMPLETION') */
  status?: string;
}

export interface ExperienceItem {
  id: string;
  date: string;
  role: string;
  company: string;
  description: string;
  isEducation?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
  /** Optional alias for items array to support varied component props */
  skills?: string[];
}