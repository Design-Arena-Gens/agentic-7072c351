import Link from "next/link";
import styles from "./page.module.css";

const learningPaths = [
  {
    title: "Tech Foundations",
    description:
      "Master coding fundamentals and build a standout portfolio with a step-by-step roadmap from zero to launch-ready projects.",
    highlights: [
      "Weekly skill goals across HTML, CSS, JavaScript, and Python",
      "Capstone website & app milestones with real rubrics",
      "Career inspiration from engineers who started like you",
    ],
    cta: {
      label: "Start the tech journey",
      href: "https://www.freecodecamp.org/learn/",
    },
  },
  {
    title: "Creative & Design Studio",
    description:
      "Develop your visual voice with design thinking, UX research, and hands-on tools trusted by top creative teams.",
    highlights: [
      "Figma and Adobe tutorials with downloadable practice files",
      "Design critiques checklist to stay focused every week",
      "Portfolio storytelling lessons from industry mentors",
    ],
    cta: {
      label: "Explore design tracks",
      href: "https://www.coursera.org/specializations/ui-ux-design",
    },
  },
  {
    title: "Business & Leadership Lab",
    description:
      "Turn your ideas into launch-ready ventures with entrepreneurship courses, finance crash-courses, and leadership training.",
    highlights: [
      "Customer discovery playbook and pitch deck templates",
      "Finance mini-lessons for budgets, pricing, and KPIs",
      "Mentor talks from founders and community leaders",
    ],
    cta: {
      label: "Build a venture plan",
      href: "https://www.coursera.org/specializations/wharton-entrepreneurship",
    },
  },
] as const;

const courseCatalog = [
  {
    category: "STEM & Technology",
    description:
      "Strengthen analytical thinking with computer science, engineering, and data science essentials.",
    resources: [
      {
        name: "CS50: Introduction to Computer Science",
        provider: "Harvard University",
        href: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
      },
      {
        name: "MIT OpenCourseWare: Introductory Programming",
        provider: "MIT OpenCourseWare",
        href: "https://ocw.mit.edu/collections/introductory-programming/",
      },
      {
        name: "Khan Academy: Master Math & Science",
        provider: "Khan Academy",
        href: "https://www.khanacademy.org/",
      },
      {
        name: "edX: Data Science for Everyone",
        provider: "edX",
        href: "https://www.edx.org/learn/data-science",
      },
    ],
  },
  {
    category: "Creative & Design",
    description:
      "Sharpen your eye for detail with art direction, illustration, UI/UX, and storytelling resources.",
    resources: [
      {
        name: "Google UX Design Professional Certificate",
        provider: "Coursera",
        href: "https://www.coursera.org/professional-certificates/google-ux-design",
      },
      {
        name: "Figma Learn Design",
        provider: "Figma",
        href: "https://www.figma.com/resources/learn-design/",
      },
      {
        name: "Skillshare: Graphic Design Hub",
        provider: "Skillshare",
        href: "https://www.skillshare.com/en/browse/graphic-design",
      },
      {
        name: "Domestika: Illustration Courses",
        provider: "Domestika",
        href: "https://www.domestika.org/en/courses/category/4-illustration",
      },
    ],
  },
  {
    category: "Business & Entrepreneurship",
    description:
      "Grow from idea to launch with strategy, marketing, finance, and leadership masterclasses.",
    resources: [
      {
        name: "Wharton Entrepreneurship Specialization",
        provider: "Coursera",
        href: "https://www.coursera.org/specializations/wharton-entrepreneurship",
      },
      {
        name: "Harvard Online: CORe Business Fundamentals",
        provider: "Harvard Business School Online",
        href: "https://online.hbs.edu/programs/core/",
      },
      {
        name: "edX: Project Management MicroMasters",
        provider: "RIT / edX",
        href: "https://www.edx.org/micromasters/ritx-project-management",
      },
      {
        name: "Y Combinator Startup Library",
        provider: "Y Combinator",
        href: "https://www.ycombinator.com/library",
      },
    ],
  },
  {
    category: "Wellbeing & Personal Growth",
    description:
      "Balance mind and body with productivity science, resilience training, and wellness essentials.",
    resources: [
      {
        name: "Learning How to Learn",
        provider: "Coursera",
        href: "https://www.coursera.org/learn/learning-how-to-learn",
      },
      {
        name: "FutureLearn: Mindfulness & Wellbeing",
        provider: "FutureLearn",
        href: "https://www.futurelearn.com/subjects/psychology-and-mental-health-courses",
      },
      {
        name: "MindTools: Productivity Skills",
        provider: "MindTools",
        href: "https://www.mindtools.com/pages/main/newMN_HTE.htm",
      },
      {
        name: "University of Pennsylvania Resilience Skills",
        provider: "edX",
        href: "https://www.edx.org/learn/psychology/university-of-pennsylvania-resilience-skills-in-a-time-of-uncertainty",
      },
    ],
  },
] as const;

const boosters = [
  {
    title: "Weekly Study Planner (Notion)",
    description:
      "Duplicate this template to schedule classes, track deliverables, and celebrate wins every Friday.",
    href: "https://www.notion.so/templates/study-planner",
    badge: "Template",
  },
  {
    title: "Scholarship & Grant Finder",
    description:
      "Search thousands of verified scholarships tailored to your background, GPA, and dream program.",
    href: "https://www.fastweb.com/",
    badge: "Funding",
  },
  {
    title: "Virtual Study Sessions",
    description:
      "Join body-doubling rooms and focus communities that keep you accountable through live co-working.",
    href: "https://www.focusmate.com/",
    badge: "Accountability",
  },
  {
    title: "Internship & Early Career Boards",
    description:
      "Bookmark internship, volunteer, and research boards designed for students building experience.",
    href: "https://www.notion.so/notionhq/Internships-and-Apprenticeships-Board-cc9375a18f0c49b18e1e7b87cbca6b2c",
    badge: "Opportunities",
  },
] as const;

const impactStats = [
  {
    label: "Verified learning tracks",
    value: "12+",
  },
  {
    label: "Scholarship & planning tools",
    value: "25",
  },
  {
    label: "Minutes saved searching",
    value: "∞",
  },
] as const;

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.hero}>
          <span className={styles.heroBadge}>Dream Student Hub</span>
          <h1 className={styles.heroTitle}>
            All the learning links you need to turn goals into milestones.
          </h1>
          <p className={styles.heroDescription}>
            Build a study plan, explore curated courses, and plug into tools
            trusted by students worldwide. Everything here is reviewed, free (or
            worth the price), and ready for your next win.
          </p>
          <div className={styles.heroActions}>
            <Link
              href="https://www.notion.so/templates/study-planner"
              className={styles.buttonPrimary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Build my study plan
            </Link>
            <Link
              href="#catalog"
              className={styles.buttonSecondary}
            >
              Browse all subjects
            </Link>
          </div>
          <div className={styles.heroStats} role="list">
            {impactStats.map((stat) => (
              <div key={stat.label} className={styles.heroStat} role="listitem">
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </header>

        <main className={styles.mainContent}>
          <section className={styles.section} aria-labelledby="paths-heading">
            <div className={styles.sectionHeader}>
              <h2 id="paths-heading" className={styles.sectionTitle}>
                Curated learning paths
              </h2>
              <p className={styles.sectionSubtitle}>
                Pick a roadmap crafted for ambitious learners. Each path
                includes weekly focus areas, community picks, and trusted
                mentors.
              </p>
            </div>
            <div className={styles.cardGrid}>
              {learningPaths.map((path) => (
                <article key={path.title} className={styles.pathCard}>
                  <h3 className={styles.cardTitle}>{path.title}</h3>
                  <p className={styles.cardDescription}>{path.description}</p>
                  <ul className={styles.highlightList}>
                    {path.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                  <Link
                    href={path.cta.href}
                    className={styles.linkButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {path.cta.label}
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <section
            id="catalog"
            className={styles.section}
            aria-labelledby="catalog-heading"
          >
            <div className={styles.sectionHeader}>
              <h2 id="catalog-heading" className={styles.sectionTitle}>
                Course catalog by dream
              </h2>
              <p className={styles.sectionSubtitle}>
                Save hours of searching with handpicked playlists across every
                subject. Mix and match to build a plan for your semester, gap
                year, or lifelong journey.
              </p>
            </div>
            <div className={styles.catalogGrid}>
              {courseCatalog.map((area) => (
                <article key={area.category} className={styles.catalogCard}>
                  <div className={styles.catalogHeader}>
                    <h3 className={styles.cardTitle}>{area.category}</h3>
                    <p className={styles.cardDescription}>
                      {area.description}
                    </p>
                  </div>
                  <ul className={styles.resourceList}>
                    {area.resources.map((resource) => (
                      <li key={resource.href}>
                        <Link
                          href={resource.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.resourceLink}
                        >
                          <span className={styles.resourceName}>
                            {resource.name}
                          </span>
                          <span className={styles.resourceProvider}>
                            {resource.provider}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section
            className={styles.section}
            aria-labelledby="toolkit-heading"
          >
            <div className={styles.sectionHeader}>
              <h2 id="toolkit-heading" className={styles.sectionTitle}>
                Productivity boosters
              </h2>
              <p className={styles.sectionSubtitle}>
                Download planners, funding guides, and community spaces that
                keep you energized when deadlines pile up.
              </p>
            </div>
            <div className={styles.boosterGrid}>
              {boosters.map((tool) => (
                <article key={tool.title} className={styles.boosterCard}>
                  <span className={styles.boosterBadge}>{tool.badge}</span>
                  <h3 className={styles.cardTitle}>{tool.title}</h3>
                  <p className={styles.cardDescription}>{tool.description}</p>
                  <Link
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkButton}
                  >
                    Launch resource
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div>
            <h2 className={styles.footerTitle}>Ready to dream louder?</h2>
            <p className={styles.footerDescription}>
              Bookmark this hub and share it with friends who are building bold
              futures. New links drop every month — your next breakthrough might
              be one click away.
            </p>
          </div>
          <Link
            href="https://forms.gle/YMDW5Sh81K7i6arMA"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonPrimary}
          >
            Suggest a resource
          </Link>
        </footer>
      </div>
    </div>
  );
}
