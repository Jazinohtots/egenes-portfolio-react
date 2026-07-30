import type { WorkItem } from '../types';

export const workItems: WorkItem[] = [
  {
    id: 'sys-01',
    tag: 'SYS-01 · HEALTHCARE AI',
    title: 'Clinical Intelligence Layer',
    description:
      'Engineered a .NET 8 pipeline that ingests patient records across heterogeneous EHR systems via HL7 FHIR R4, normalizes data models, and leverages Azure OpenAI and Snowflake Cortex to generate draft ICD-10/CPT coding and encounter summaries. Designed around strict human-in-the-loop workflows so physicians validate recommendations before record commit.',
    stack: ['C# / .NET 8', 'ASP.NET Core', 'Snowflake Cortex', 'Azure OpenAI', 'HL7 FHIR R4'],
  },
  {
    id: 'sys-02',
    tag: 'SYS-02 · HEALTHCARE PAYER',
    title: 'Member Eligibility & Enrollment Engine',
    description:
      'Architected HIPAA-compliant microservices managing real-time member benefits eligibility and automated enrollment processing. Leveraged CQRS via MediatR for predictable state changes, Azure Service Bus with dead-letter queueing for zero-loss message reliability, and a Blazor + SignalR console for live operational telemetry.',
    stack: ['ASP.NET Core', 'MediatR / CQRS', 'Azure Service Bus', 'PostgreSQL', 'Blazor + SignalR'],
  },
  {
    id: 'sys-03',
    tag: 'SYS-03 · GOVTECH HEALTHCARE',
    title: 'Statewide Medicaid Claims Modernization',
    description:
      'Transformed a legacy overnight batch process into a high-throughput, near-real-time ingestion engine for a state Medicaid modernization platform. Built HIPAA-aligned RESTful APIs with EF Core data layers and intuitive web workflows for providers.',
    stack: ['C# / .NET Core', 'Entity Framework', 'Azure Services', 'React', 'REST APIs'],
  },
  {
    id: 'sys-04',
    tag: 'SYS-04 · FINTECH & PAYMENTS',
    title: 'Secure PCI-Compliant Payment Gateway',
    description:
      'Architected multi-provider payment gateway abstractions with tokenized, end-to-end encrypted API contracts under PCI-DSS standards. Built automated transaction retry handlers and reconciliation logging to ensure reliable subscription billing lifecycle management.',
    stack: ['.NET Core', 'Angular', 'PCI-DSS', 'OAuth 2.0 / JWT', 'SQL Server'],
  },
];