import type { ExperienceItem } from '../types';

export const experience: ExperienceItem[] = [
  {
    id: 'flatiron',
    date: 'Aug 2025 — Present',
    role: 'Senior Software Engineer',
    company: 'Flatiron Health',
    description:
      'Architecting HIPAA-compliant microservice APIs in C# / .NET Core 8 for a member ' +
      'eligibility and benefits enrollment platform — CQRS with MediatR, event-driven ' +
      'communication over Azure Service Bus, containerized deployment on Azure, and ' +
      'Blazor Server admin tooling with SignalR for real-time enrollment visibility.',
  },
  {
    id: 'cognizant',
    date: 'Jan 2025 — Mar 2025',
    role: 'Senior Software Engineer',
    company: 'Cognizant',
    description:
      'Architected core backend services for a clinical AI platform using C# / .NET 8, ' +
      'including HL7 FHIR R4 ingestion pipelines, Snowflake Cortex + Azure OpenAI ' +
      'integration for automated coding and summarization, and Blazor / React dashboards ' +
      'for real-time patient risk scores.',
  },
  {
    id: 'sabal',
    date: 'Jan 2024 — Oct 2024',
    role: 'Software Engineer',
    company: 'Sabal Tech Inc.',
    description:
      'Built backend services in C# / .NET Core for a statewide Medicaid modernization ' +
      'project, engineering HIPAA-aligned RESTful APIs and data models with ASP.NET Core ' +
      'and Entity Framework across multiple client-facing healthcare projects.',
  },
  {
    id: 'gm-financial',
    date: 'Dates not specified on resume',
    role: 'Full-Stack Developer',
    company: 'GM Financial',
    description:
      'Integrated third-party payment gateways with .NET Core 3 and Angular, and built ' +
      'tokenized, encrypted API endpoints in compliance with PCI-DSS for subscription ' +
      'billing and order workflows.',
  },
  {
    id: 'fedex',
    date: 'Aug 2023 — Dec 2023',
    role: 'Backend Developer',
    company: 'FedEx',
    description:
      'Developed server-side logic in C# and .NET Framework for a web-based healthcare ' +
      'platform, and designed relational database schemas in SQL Server and Entity ' +
      'Framework for secure storage of sensitive clinical records.',
  },
  {
    id: 'education',
    date: 'Education',
    role: 'B.S. Computational Science',
    company: 'University of Washington',
    description: '',
    isEducation: true,
  },
];
