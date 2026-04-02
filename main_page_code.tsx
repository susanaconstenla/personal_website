// @ts-nocheck
import React from "react";

type Project = {
  slug: string;
  title: string;
  summary: string;
  body: string[];
};

type Publication = {
  title: string;
  citation: string;
  journal: string;
  description: string;
  link: string;
};

const projects: Project[] = [
  {
    slug: "predictability",
    title: "Predictability of socioeconomic indicators",
    summary:
      "Establishes the predictability of child malnutrition using machine learning, as developed in my PNAS paper. This work provides the empirical and methodological foundation for the early warning system currently deployed in partnership with the Government of Kenya.",
    body: [
      "This project studies the predictability of child malnutrition using machine learning, with a focus on whether high-frequency monitoring can improve predictive performance for rapidly evolving humanitarian indicators.",
      "The research combines supervised machine learning methods with remotely sensed covariates and time-series anthropometric data to estimate short-term changes in child wasting prevalence.",
      "This work forms the empirical and methodological foundation for the early warning system currently deployed in partnership with the Government of Kenya."
    ]
  },
  {
    slug: "implementation",
    title: "Implementation and evaluation of predictive systems for humanitarian response and social protection",
    summary:
      "Design and integration of ML-based predictive systems within policy environments, combined with causal inference approaches for evaluation.",
    body: [
      "This project focuses on the deployment of predictive systems within real policy environments, particularly for humanitarian response and social protection.",
      "It examines how predictive tools can be integrated into operational workflows and decision-making institutions, while also being evaluated using experimental and quasi-experimental causal inference methods.",
      "The goal is not only to build predictive models, but also to understand whether and how they improve policy effectiveness in practice."
    ]
  },
  {
    slug: "continuity",
    title: "Scalability and continuity of ML-based predictive models under distribution shift",
    summary:
      "Methodological work on maintaining predictive performance under distribution shift, with a focus on stability over time and across contexts.",
    body: [
      "This project develops methods to maintain the performance of machine learning-based predictive models when data-generating processes change over time or across settings.",
      "It focuses on issues of retraining, sample size, and model continuity under distribution shift, especially in applications that depend on costly survey-based data.",
      "The broader objective is to understand how predictive systems can remain scalable and reliable in volatile environments."
    ]
  }
];

const publications: Publication[] = [
  {
    title: "High-frequency monitoring enables machine learning-based forecasting of acute child malnutrition for early warning",
    citation: "Constenla-Villoslada, S., Liu, Y., McBride, L., Ouma, C., Mutanda, N., Barrett, C.B. (2025).",
    journal: "PNAS",
    description: "The number of acutely food insecure people worldwide has doubled since 2017, increasing demand for early warning systems that can predict food emergencies. We explore whether updating training data with high-frequency monitoring can improve machine learning models’ predictive performance for child acute malnutrition.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:u5HHmVD_uO8C",
  },
  {
    title: "Large-scale land restoration improved drought resilience in Ethiopia",
    citation: "Constenla-Villoslada, S., Liu, Y., Wen, J. et al. (2022).",
    journal: "Nature Sustainability",
    description: "Anthropogenic land degradation, exacerbated by climate change, threatens rural livelihoods in developing economies. This study combines satellite data and quasi-experimental methods to evaluate the impacts of the World Bank’s Sustainable Land Management Program in Ethiopia.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:2osOgNQ5qMEC",
  },
  {
    title: "Caveat utilitor: A comparative assessment of resilience measurement approaches",
    citation: "Upton, J., Constenla-Villoslada, S., Barrett, C.B. (2022).",
    journal: "Journal of Development Economics",
    description: "We compare three widely used resilience measurement approaches using panel data from Ethiopia and Niger. The measures yield substantially different household rankings and exhibit only modest predictive accuracy for food security outcomes.",
    link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=dx0Se4AAAAAJ&citation_for_view=dx0Se4AAAAAJ:d1gkVwhDpl0C",
  },
];

function ProjectPage({ project }: { project: Project }) {
  if (typeof window !== 'undefined') {
    window.scrollTo(0, 0);
  }
  return (
    <div className="min-h-screen bg-white text-slate-900 font-serif">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-base font-semibold tracking-tight">
            Susana Constenla-Villoslada
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-20">
        <a href="#home" className="font-sans text-sm underline underline-offset-4">
          ← Back to homepage
        </a>
        <h1 className="mt-6 text-4xl font-semibold leading-tight">{project.title}</h1>
        <div className="mt-8 space-y-5 font-sans leading-8 text-slate-700">
          {project.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </main>
    </div>
  );
}

export default function SusanaConsultingWebsite() {
  const currentHash = typeof window !== "undefined" ? (window.location.hash.replace("#", "") || "home") : "home";
  const activeProject = projects.find((project) => project.slug === currentHash);

  if (activeProject) {
    return <ProjectPage project={activeProject} />;
  }

  return (
    <div className="min-h-screen text-slate-900 font-serif bg-white">
      <header className="border-b border-slate-200">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <div className="text-base font-semibold tracking-tight">
            Susana Constenla-Villoslada
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <a href="#work" className="hover:text-slate-900">Research</a>
            <a href="#publications" className="hover:text-slate-900">Publications</a>
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto max-w-5xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_220px] md:items-start">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold leading-tight">
                Bridging machine learning and economics for humanitarian aid and social protection in data-scarce settings
              </h1>
              <p className="mt-6 font-sans text-[17px] leading-8 text-slate-700">
                I am a researcher working at the intersection of economics and machine learning for international development, focusing on the predictability of socioeconomic indicators for social protection and humanitarian response.
              </p>
              <p className="mt-4 font-sans text-[17px] leading-8 text-slate-700">
                I integrate predictive systems into policy environments and evaluate their impact using experimental and quasi-experimental causal inference methods.
              </p>
            </div>

            <div className="md:pt-1">
              <div className="overflow-hidden rounded-sm border border-slate-200 bg-slate-100">
                <img
                  src="/profile.jpeg"
                  alt="Susana Constenla-Villoslada"
                  className="h-[240px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="border-y border-slate-200 bg-slate-50/70">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] text-slate-500">Current research</div>
            <h2 className="mt-2 text-2xl font-semibold">Research pipeline: theory to implementation</h2>
            <p className="mt-4 max-w-3xl font-sans leading-8 text-slate-600">
              My work connects advances in economics and machine learning with applied policy design and evaluation. The projects below represent my current research agenda.
            </p>

            <div className="mt-10 space-y-10">
              {projects.map((p, i) => (
                <div key={i}>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 font-sans text-slate-600 leading-7">{p.summary}</p>
                  <a
                    href={`#${p.slug}`}
                    className="mt-2 inline-block text-sm text-slate-700 underline underline-offset-4"
                  >
                    Read more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="publications" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] text-slate-500">Research output</div>
            <h2 className="mt-2 text-2xl font-semibold">Selected publications</h2>
            <p className="mt-3 font-sans text-sm text-slate-600">
              Full list available on 
              <a href="https://scholar.google.com/citations?user=dx0Se4AAAAAJ&hl=en" className="underline"> Google Scholar</a>.
            </p>

            <div className="mt-8 space-y-6">
              {publications.map((pub, i) => (
                <div key={i}>
                  <a href={pub.link} className="font-medium underline">
                    {pub.title}
                  </a>
                  <div className="font-sans text-sm leading-6">
                    {pub.citation} <em>{pub.journal}</em>.
                  </div>
                  <div className="mt-1 font-sans text-sm text-slate-600">
                    {pub.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-200 bg-stone-50/80">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] text-slate-500">Profile</div>
            <h2 className="mt-2 text-2xl font-semibold">About</h2>
            <div className="mt-6 max-w-3xl font-sans leading-8 text-slate-600 space-y-4">
              <p>
                I am a PhD candidate at the University of California, Berkeley (School of Information), working at the intersection of economics and machine learning for international development. My current research focuses on developing, deploying, and evaluating predictive systems for social protection and humanitarian response, with a primary empirical focus on Kenya.
              </p>
              <p>
                Prior to Berkeley, I completed an M.S. in Applied Economics (Development Economics) at Cornell University as a Fulbright Scholar, where I worked under the supervision of Christopher B. Barrett. I also hold a B.S. in Agricultural Engineering, with honors, from the Polytechnic University of Madrid.
              </p>
              <p>
                After completing my M.S., I worked as a Research Analyst at the International Food Policy Research Institute (IFPRI) in Washington, DC, where I focused on sample design and on the design and implementation of experimental and quasi-experimental impact evaluations for large-scale World Bank development projects across Central America (Honduras), Sub-Saharan Africa (Ethiopia), and South Asia (Nepal).
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="font-sans text-[11px] uppercase tracking-[0.18em] text-slate-500">Contact</div>
            <h2 className="mt-2 text-2xl font-semibold">Get in touch</h2>
            <p className="mt-4 font-sans text-slate-600">
              For research collaborations and policy work, please get in touch.
            </p>
            <div className="mt-6 flex gap-6 text-sm">
              <a href="mailto:your.email@example.com" className="underline">Email</a>
              <a href="https://scholar.google.com/citations?user=dx0Se4AAAAAJ&hl=en" className="underline">Google Scholar</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
