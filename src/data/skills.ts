import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages-frameworks',
    title: 'Languages & Core Stack',
    items: [
      'C#',
      '.NET 8 / .NET Core',
      'ASP.NET Core',
      'MediatR / CQRS',
      'Blazor & SignalR',
      'TypeScript',
      'React',
      'Angular',
    ],
  },
  {
    id: 'data-architecture',
    title: 'Data & Persistence',
    items: [
      'SQL Server',
      'PostgreSQL',
      'EF Core',
      'Redis Caching',
      'Snowflake & Snowpark',
      'Azure Service Bus',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & Infrastructure',
    items: [
      'Azure App Services',
      'AWS Services',
      'Docker Containers',
      'CI/CD Pipelines',
      'GitHub Actions',
      'OpenTelemetry',
    ],
  },
  {
    id: 'ai-compliance',
    title: 'AI & Domain Compliance',
    items: [
      'Azure OpenAI Services',
      'Snowflake Cortex',
      'pgvector RAG Pipelines',
      'HIPAA & HITECH Compliance',
      'HL7 FHIR R4 Standards',
      'OAuth 2.0 / PCI-DSS',
    ],
  },
];