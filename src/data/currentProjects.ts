import type { CurrentProject } from '../types';

export const currentProjects: CurrentProject[] = [
  {
    id: 'mednotes-ai',
    tag: 'PERSONAL PROJECT',
    title: 'MedNotes AI',
    description:
      "A smaller, personal version of the note-summarization tools I've worked on " +
      'professionally — a .NET 8 API that turns a rough visit transcript into a ' +
      "structured SOAP note. Still keeping a human review step in there; I don't trust " +
      "an LLM to have the last word on a medical record, mine included.",
    stack: ['.NET 8 Minimal API', 'Azure OpenAI', 'Blazor'],
    progress: 65,
  },
  {
    id: 'netcore-kit',
    tag: 'OPEN SOURCE',
    title: 'NetCore.Kit',
    description:
      'An open-source starter template for .NET 8 services, mostly so I stop rebuilding ' +
      'the same CQRS/EF Core scaffolding every time I start something new — validation, ' +
      'logging, and auditable data access, wired up once. Not glamorous, just useful.',
    stack: ['.NET 8', 'MediatR', 'EF Core', 'Docker'],
    progress: 40,
  },
  {
    id: 'ledger',
    tag: 'PERSONAL PROJECT',
    title: 'Ledger',
    description:
      'A budgeting app for myself — tracking recurring bills and spend patterns, mainly ' +
      "as an excuse to mess with event-driven patterns somewhere that isn't a work " +
      'codebase. React front end, .NET 8 API, Postgres.',
    stack: ['React', '.NET 8 Minimal API', 'PostgreSQL'],
    progress: 80,
  },
];
