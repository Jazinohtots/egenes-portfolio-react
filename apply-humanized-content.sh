#!/usr/bin/env bash
# =========================================================
# apply-humanized-content.sh
#
# Overwrites the copy in an EXISTING egenes-portfolio-react
# checkout with the humanized version of the content.
#
# Usage:
#   1. Put this file in the ROOT of your project
#      (same folder as package.json).
#   2. From that folder, run:
#         bash apply-humanized-content.sh
#   3. Review the changes with `git diff`, then commit.
#
# Safe to re-run — it just overwrites the same six files.
# =========================================================

set -euo pipefail

if [ ! -f "package.json" ]; then
  echo "Error: run this from the project root (where package.json lives)."
  exit 1
fi

echo "Patching src/components/Hero.tsx ..."
cat > src/components/Hero.tsx << 'EOF'
import TopologyDiagram from './TopologyDiagram';
import Ticker from './Ticker';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">// SENIOR SOFTWARE ENGINEER — 10+ YRS — USA</p>
          <h1>
            I build the backend
            <br />
            healthcare systems <em>run on.</em>
          </h1>
          <p className="hero-sub">
            Most of my career has been backend work for industries that can't afford to
            get it wrong — healthcare, government Medicaid, and payments. I build the
            .NET systems and AI integrations underneath those platforms: the parts that
            have to be secure, compliant, and boring in the best way.
          </p>
          <div className="hero-actions">
            <a href="#work" className="btn btn-primary">View Selected Work</a>
            <a href="/resume.pdf" className="btn btn-ghost" download>Download Résumé</a>
          </div>
        </div>

        <TopologyDiagram />
      </div>

      <Ticker />
    </section>
  );
}
EOF

echo "Patching src/components/About.tsx ..."
cat > src/components/About.tsx << 'EOF'
import Reveal from './Reveal';

export default function About() {
  return (
    <section className="about" id="about">
      <Reveal as="div" className="panel">
        <div className="panel-corner tl"></div>
        <div className="panel-corner tr"></div>
        <div className="panel-corner bl"></div>
        <div className="panel-corner br"></div>

        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">01 / ABOUT</p>
            <p>
              I'm a senior software engineer who ended up specializing in the systems
              nobody sees — the ingestion pipelines, eligibility engines, and audit
              trails that keep regulated platforms honest. Most of what I build sits at
              the intersection of distributed .NET systems and applied AI: getting large
              language models to do real, auditable work in places where being wrong
              isn't an option.
            </p>
            <p>
              I'm based in the U.S., currently working in healthcare and payer tech, and
              I like problems that come with real constraints — compliance, uptime,
              other people's data. If it's regulated and hard, I'm probably interested.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat">
              <span className="stat-value">10+</span>
              <span className="stat-label">years in production engineering</span>
            </div>
            <div className="stat">
              <span className="stat-value">3</span>
              <span className="stat-label">regulated industries — health, gov, fintech</span>
            </div>
            <div className="stat">
              <span className="stat-value">HIPAA</span>
              <span className="stat-label">compliant systems shipped to production</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
EOF

echo "Patching src/data/work.ts ..."
cat > src/data/work.ts << 'EOF'
import type { WorkItem } from '../types';

export const workItems: WorkItem[] = [
  {
    id: 'sys-01',
    tag: 'SYS-01 · HEALTHCARE AI',
    title: 'Clinical Intelligence Layer',
    description:
      'Built a .NET 8 service that pulls patient records from a handful of different ' +
      'EHR systems over HL7 FHIR, cleans them up, and hands them to Azure OpenAI and ' +
      'Snowflake Cortex to draft ICD-10/CPT codes and visit summaries. A physician still ' +
      'reviews everything — it just gives them a first draft instead of a blank page.',
    stack: ['C# / .NET 8', 'ASP.NET Core', 'Snowflake Cortex', 'Azure OpenAI', 'HL7 FHIR R4'],
  },
  {
    id: 'sys-02',
    tag: 'SYS-02 · HEALTHCARE PAYER',
    title: 'Member Eligibility & Enrollment Platform',
    description:
      'A set of HIPAA-compliant microservices that handle member eligibility and ' +
      'enrollment. CQRS via MediatR keeps the request flow predictable, Azure Service ' +
      'Bus with retry policies means nothing silently drops, and a Blazor admin console ' +
      'lets the ops team see enrollment status in real time instead of digging through logs.',
    stack: ['ASP.NET Core', 'MediatR / CQRS', 'Azure Service Bus', 'PostgreSQL', 'Blazor + SignalR'],
  },
  {
    id: 'sys-03',
    tag: 'SYS-03 · GOVERNMENT HEALTHCARE',
    title: 'Statewide Medicaid Claims Modernization',
    description:
      'Replaced a legacy overnight batch process for a state Medicaid claims system ' +
      'with something that processes claims same-day. Built the HIPAA-aligned APIs in ' +
      'ASP.NET Core and Entity Framework, with a React front end for providers to ' +
      'actually use.',
    stack: ['C# / .NET Core', 'Entity Framework', 'Azure', 'React', 'REST APIs'],
  },
  {
    id: 'sys-04',
    tag: 'SYS-04 · FINTECH',
    title: 'Secure Payment Gateway Integration',
    description:
      'Wired up checkout across a few different third-party payment gateways and built ' +
      'the tokenized, encrypted API layer to keep it PCI-DSS compliant — the ' +
      'boring-but-critical part of making sure a subscription renews correctly and no ' +
      "card number ends up somewhere it shouldn't. .NET Core on the back end, Angular on the front.",
    stack: ['.NET Core', 'Angular', 'PCI-DSS', 'REST APIs', 'OAuth 2.0'],
  },
];
EOF

echo "Patching src/data/currentProjects.ts ..."
cat > src/data/currentProjects.ts << 'EOF'
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
EOF

echo "Patching src/components/SelectedWork.tsx ..."
cat > src/components/SelectedWork.tsx << 'EOF'
import { workItems } from '../data/work';
import WorkCard from './WorkCard';

export default function SelectedWork() {
  return (
    <section className="work" id="work">
      <p className="section-label">02 / SELECTED WORK</p>
      <h2 className="section-title">Systems I've architected</h2>
      <p className="section-intro">
        Four projects that give a decent sense of what I actually do day to day —
        kept general on purpose, since the real client code isn't mine to share.
      </p>

      <div className="work-grid">
        {workItems.map((item) => (
          <WorkCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
EOF

echo "Patching src/components/CurrentBuilds.tsx ..."
cat > src/components/CurrentBuilds.tsx << 'EOF'
import { currentProjects } from '../data/currentProjects';
import ProjectCard from './ProjectCard';

export default function CurrentBuilds() {
  return (
    <section className="current" id="current">
      <p className="section-label">03 / CURRENT BUILDS</p>
      <h2 className="section-title">What I'm building right now</h2>
      <p className="section-intro">
        A few things I build on the side, mostly to stay sharp on AI tooling and .NET
        patterns I don't always get to touch at work.
      </p>

      <div className="current-grid">
        {currentProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
EOF

echo "Patching src/components/Contact.tsx ..."
cat > src/components/Contact.tsx << 'EOF'
import Reveal from './Reveal';

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <Reveal as="div" className="panel">
        <div className="panel-corner tl"></div>
        <div className="panel-corner tr"></div>
        <div className="panel-corner bl"></div>
        <div className="panel-corner br"></div>

        <p className="section-label">06 / CONTACT</p>
        <h2 className="section-title">Let's talk.</h2>
        <p className="section-intro">
          Open to senior and staff-level roles in healthcare, fintech, or applied AI.
          Email's the fastest way to reach me.
        </p>

        <div className="contact-grid">
          <a href="mailto:egenesbj@gmail.com" className="contact-link">
            <span className="contact-label">EMAIL</span>
            <span className="contact-value">egenesbj@gmail.com</span>
          </a>
          <a href="#" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-label">LINKEDIN</span>
            <span className="contact-value">add your profile URL</span>
          </a>
          <a href="#" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-label">GITHUB</span>
            <span className="contact-value">add your profile URL</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
EOF

echo ""
echo "Done. Seven files updated:"
echo "  src/components/Hero.tsx"
echo "  src/components/About.tsx"
echo "  src/components/SelectedWork.tsx"
echo "  src/components/CurrentBuilds.tsx"
echo "  src/components/Contact.tsx"
echo "  src/data/work.ts"
echo "  src/data/currentProjects.ts"
echo ""
echo "Run 'npm run dev' to preview, or 'git diff' to review before committing."
