# MacroStofft.com live-site audit

**Review date:** 2026-10-26  
**Scope:** Read-only review of the public homepage and linked pages. No WordPress,
DNS, analytics, email, or production changes were made.

## Current verified state

The live site is WordPress-backed and returned HTTP 200 for `/`,
`/how-can-we-help/`, `/about-us/`, and `/contact/` during this review. The
repository branch `docs/public-portfolio` contains public README/security and
contribution documentation, but not the WordPress theme, page source, or
deployment configuration. Website changes therefore require a separate
WordPress/source-access workflow.

Current public navigation includes Home, How can we help, About Us, Our
Partners, and Contact. The homepage also contains a custom section with
What We Do, Proof, Team, Approach, and Contact anchors.

## Defects and conversion risks

### Navigation and links

- **Broken target:** `Our Partners` points to `/#clientsandpartners`, but the
  homepage source contains no `clientsandpartners` anchor. It should point to a
  real partner/proof section or be removed until that content exists.
- **Social placeholders:** footer links currently point to the generic
  `instagram.com`, `facebook.com`, and `x.com` homepages rather than verified
  MacroStofft profiles. These should be replaced only after the accounts are
  confirmed, or omitted.
- **Contact route:** the custom CTA uses `mailto:` links to CEO/CTO addresses.
  That is functional but gives no structured project intake, spam protection,
  qualification, routing, or measurable conversion event.
- **Content-shell risk:** the HTML contains both the WordPress block-theme
  shell and a separate custom branded content section. The browser-rendered
  result should be checked for duplicate navigation, footer, metadata, and
  competing calls to action before any redesign is applied.

### Positioning and proof

- The site names many capabilities—AI, ML, generative AI, agentic AI, and
  superintelligence—but the visitor must infer which business problem to start
  with.
- The current proof section should be tied to specific public demonstrations,
  limitations, and outcomes. Avoid implying production customers, clinical
  deployment, investment advice, or validated medical performance where those
  claims are not documented.
- Healthcare is important to the company, but the homepage should distinguish
  healthcare workflow automation from TEHI research and from general software
  engineering.

### Missing conversion support

- No clearly packaged first step such as a workflow audit, feasibility review,
  or prototype assessment.
- No short form capturing organization, workflow, systems involved, desired
  outcome, and preferred contact method.
- No visible engagement sequence explaining discovery, pilot, validation,
  deployment, and ongoing support.
- No concise FAQ covering data handling, human review, deployment ownership,
  expected inputs, and what MacroStofft will not automate.

## Competitive pattern review

The following public sites were reviewed for positioning and conversion patterns,
not for copying content:

- [Tech in Motion](https://www.techinmotion.net/) leads with healthcare
  outcomes, production history, and a direct project CTA.
- [AIn't Doctor](https://aintdoctor.com/) narrows the offer to clinic workflow
  problems, shows a numbered supervised delivery process, and explains human
  escalation and data boundaries.
- [Futureaiit](https://futureaiit.com/) makes service categories, integrations,
  compliance posture, engagement phases, and a free audit offer explicit.
- [DataArt AI/ML](https://www.dataart.com/services/ai-and-ml) organizes the
  offer around Assess, Build, Accelerate, and Scale rather than a technology
  list alone.

The common conversion lesson is: lead with a costly workflow and credible
outcome, show a bounded process and proof, state security/ownership limits, then
offer one low-friction next step.

## Proposed homepage structure

1. **Hero:** “Practical AI for workflows that cannot afford more friction.”
   Subhead: MacroStofft maps the process, builds the smallest useful system,
   validates it with people in the loop, and supports deployment.
2. **Three entry points:** Healthcare operations; custom AI/ML products;
   secure workflow automation for government, finance, energy, and small
   business.
3. **Outcome cards:** prior-authorization/document workflows, data-quality and
   prediction systems, and supervised agentic automation. Each card should
   identify the user, bottleneck, deliverable, and boundary.
4. **Public proof:** TEHI research MVP, Quant-AI research demonstration,
   privacy-first local tools, and workflow prototypes. Label each as research,
   demonstration, or production work; include limitations.
5. **Delivery path:** Discover → Design → Build → Validate → Deploy/Operate.
6. **Trust section:** data access, human approval, auditability, deployment
   ownership, no-training-on-client-data policy where applicable, and a clear
   distinction between technical controls and legal certification.
7. **Primary CTA:** “Request a workflow assessment.” Use a short form or a
   protected intake address. Keep direct CEO/CTO mailto links as secondary
   options, not the only path.

## Board/owner decisions before implementation

- Confirm which public claims, project names, screenshots, metrics, and logos
  are approved for publication.
- Confirm the official social profiles or remove the placeholder links.
- Decide whether MacroStofft wants a healthcare-first homepage or a broader
  cross-industry entry page with healthcare as the lead vertical.
- Approve the intake destination, retention policy, spam protection, and who
  owns follow-up.
- Confirm whether WordPress remains the editing system or whether the public
  portfolio repository is intended to become the source of truth.

## Recommended next bounded implementation

Create a private homepage prototype in the `docs/public-portfolio` branch with
the proposed information architecture, using only already-approved public
claims and synthetic/demo labels. Validate mobile layout, anchor navigation,
accessible headings, and CTA behavior locally before requesting approval for any
WordPress or public-site change.
