"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, Search, Sparkles, ChevronDown, Orbit } from "lucide-react";
import { useMemo, useState } from "react";

type Film = {
  title: string;
  year: string;
  duration: string;
  categories: string[];
  synopsis: string;
  why: string;
  funFacts: string[];
  director: string;
  country: string;
  flag: "iceland" | "japan" | "canada" | "france" | "brazil" | "india" | "kenya" | "norway";
  awards: Array<"prism" | "sphere" | "ring">;
  visual: string;
  accent: string;
};

const films: Film[] = [
  {
    title: "Cortex",
    year: "2024",
    duration: "24 min",
    categories: ["Sci-Fi", "Mystery"],
    synopsis:
      "In a simulated future, a scientist discovers a glitch in reality that threatens to unravel the fabric of existence itself.",
    why:
      "Cortex challenges our perception of reality and explores the consequences of playing god with technology through stark, visionary simulation imagery.",
    funFacts: [
      "The triangular structure was inspired by theoretical models of light bending near black holes.",
      "Over 600 VFX shots were used to create the simulated environments.",
      "The score was generated using AI-assisted composition tools.",
    ],
    director: "Lena Voss",
    country: "Iceland",
    flag: "iceland",
    awards: ["prism", "sphere", "ring"],
    visual: "triangle-gate",
    accent: "rgba(163, 224, 255, 0.72)",
  },
  {
    title: "Quant",
    year: "2023",
    duration: "19 min",
    categories: ["Sci-Fi", "Thriller"],
    synopsis:
      "A suspended object above a dead valley becomes the proof of an experiment that remembers every choice its observers make.",
    why:
      "Quant compresses cosmic scale into a quiet psychological thriller about observation, memory, and the cost of measuring the unknowable.",
    funFacts: [
      "The cube was animated with procedural light maps instead of a traditional texture.",
      "Most exterior shots were built from scanned volcanic terrain.",
      "The sound team recorded server fans and bowed metal for the cube's presence.",
    ],
    director: "Mara Chen",
    country: "Japan",
    flag: "japan",
    awards: ["sphere", "ring", "prism"],
    visual: "black-cube",
    accent: "rgba(226, 237, 241, 0.64)",
  },
  {
    title: "Aelf",
    year: "2024",
    duration: "15 min",
    categories: ["Animation", "Sci-Fi"],
    synopsis:
      "An artificial myth wakes inside a geometric sun and begins rewriting the memories of the machine that generated it.",
    why:
      "Aelf brings handmade animation language into a synthetic world, turning machine logic into something ritualistic and strange.",
    funFacts: [
      "Every frame was first blocked as a wire sculpture before being rendered digitally.",
      "The glowing orb contains 1,024 animated connection points.",
      "Its invented alphabet appears only for single-frame flashes.",
    ],
    director: "Orin Vale",
    country: "Canada",
    flag: "canada",
    awards: ["ring", "sphere", "prism"],
    visual: "wire-orb",
    accent: "rgba(204, 255, 234, 0.62)",
  },
  {
    title: "Meeton",
    year: "2022",
    duration: "22 min",
    categories: ["Sci-Fi", "Drama"],
    synopsis:
      "A lonely archivist steps through a circular gate to meet the version of herself that survived a different timeline.",
    why:
      "Meeton gives the festival a human counterweight: an intimate drama about identity wrapped inside elegant portal science fiction.",
    funFacts: [
      "The portal ring was built as a partial practical set for actor reflections.",
      "Cloud movement was simulated from archival weather data.",
      "The final scene uses the same camera move twice, one timeline apart.",
    ],
    director: "Iris Moreau",
    country: "France",
    flag: "france",
    awards: ["sphere", "prism", "ring"],
    visual: "portal-ring",
    accent: "rgba(196, 238, 224, 0.58)",
  },
  {
    title: "Nexus",
    year: "2023",
    duration: "18 min",
    categories: ["Sci-Fi", "Mystery"],
    synopsis:
      "In the corridor between two mirrored cities, a courier carries a message that can only be read by someone who does not exist.",
    why:
      "Nexus turns architecture into narrative, using a single impossible passage to ask what remains of a person after duplication.",
    funFacts: [
      "The corridor set was rendered from a six-meter miniature scan.",
      "No shot uses a perfectly horizontal line.",
      "The central doorway emits light based on the actor's distance from it.",
    ],
    director: "Theo Kael",
    country: "Norway",
    flag: "norway",
    awards: ["prism", "ring", "sphere"],
    visual: "light-door",
    accent: "rgba(191, 245, 255, 0.68)",
  },
  {
    title: "Solitude Protocol",
    year: "2024",
    duration: "26 min",
    categories: ["Sci-Fi", "Thriller"],
    synopsis:
      "The final resident of a planetary simulation receives a maintenance signal from outside the sky.",
    why:
      "Solitude Protocol is a haunting study of isolation, using simulation collapse as a metaphor for grief and survival.",
    funFacts: [
      "The planetary dome is a single simulated atmosphere rendered at multiple time scales.",
      "The lead actor performed against no green screen, only projected light.",
      "Its radio signal motif repeats every 26 seconds.",
    ],
    director: "Rafa Silva",
    country: "Brazil",
    flag: "brazil",
    awards: ["ring", "prism", "sphere"],
    visual: "planet-dome",
    accent: "rgba(179, 229, 255, 0.62)",
  },
  {
    title: "Afterimage Loop",
    year: "2025",
    duration: "21 min",
    categories: ["Sci-Fi", "Drama"],
    synopsis:
      "A performer trapped in a rehearsal engine discovers that every failed take has continued living beyond the frame.",
    why:
      "Afterimage Loop captures the uncanny feeling of endless optimization and the emotional debris left behind by discarded versions.",
    funFacts: [
      "The script contains seven scenes that repeat with one changed object.",
      "Motion blur was tuned manually to make each loop feel slightly unstable.",
      "The final take was performed backward and reversed in edit.",
    ],
    director: "Naya Rao",
    country: "India",
    flag: "india",
    awards: ["sphere", "prism", "ring"],
    visual: "memory-wave",
    accent: "rgba(219, 238, 255, 0.66)",
  },
  {
    title: "The Ninth Render",
    year: "2023",
    duration: "17 min",
    categories: ["Animation", "Mystery"],
    synopsis:
      "Eight worlds collapse cleanly, but the ninth render develops weather, language, and an unsettling need to be watched.",
    why:
      "The Ninth Render is playful, eerie, and precise, making world-building itself the subject of the mystery.",
    funFacts: [
      "The grid world was generated from failed layout tests.",
      "Its weather system was trained on corrupted satellite imagery.",
      "The director hid nine tiny suns across the short.",
    ],
    director: "Amina Okoth",
    country: "Kenya",
    flag: "kenya",
    awards: ["prism", "sphere", "ring"],
    visual: "render-grid",
    accent: "rgba(199, 255, 235, 0.64)",
  },
];

const categories = ["All Categories", "Animation", "Drama", "Mystery", "Sci-Fi", "Thriller"];
const aboutSections = [
  {
    title: "Historical Overview",
    body: "Science fiction has captivated audiences for over a century, evolving from early literary visions of the future to a global cinematic force. From Metropolis to Blade Runner and beyond, sci-fi has continuously reimagined our world and what lies beyond it.",
    visual: "about-city",
    glyph: "timeline",
  },
  {
    title: "Defining Characteristics",
    body: "Sci-fi explores speculative concepts such as space exploration, artificial intelligence, time travel, alternate realities, and dystopian futures. It blends imaginative storytelling with scientific possibilities to challenge perception and inspire wonder.",
    visual: "about-cube",
    glyph: "poly",
  },
  {
    title: "Cultural Significance",
    body: "Science fiction reflects our hopes, fears, and the rapidly changing world around us. It serves as a mirror and a map, questioning our choices today while envisioning the possibilities of tomorrow.",
    visual: "about-dome",
    glyph: "signal",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [expandedFilm, setExpandedFilm] = useState<string | null>(null);
  const [isPreviewLocked, setIsPreviewLocked] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [view, setView] = useState<"about" | "films">("films");

  const visibleFilms = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return films.filter((film) => {
      const categoryMatch =
        category === "All Categories" || film.categories.includes(category);
      const searchable =
        `${film.title} ${film.year} ${film.duration} ${film.categories.join(" ")} ${film.synopsis}`.toLowerCase();
      return categoryMatch && searchable.includes(normalizedQuery);
    });
  }, [category, query]);

  const previewFilm = (title: string) => {
    if (isPreviewLocked || expandedFilm === title) {
      return;
    }

    setExpandedFilm(title);
    setIsPreviewLocked(true);
  };

  const showFilms = () => {
    setView("films");
    setSelectedFilm(null);
    setExpandedFilm(null);
    setIsPreviewLocked(false);
  };

  const showAbout = () => {
    setView("about");
    setSelectedFilm(null);
    setExpandedFilm(null);
    setIsPreviewLocked(false);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#030505] text-white">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(174,220,211,0.20),transparent_30%),radial-gradient(circle_at_16%_84%,rgba(75,148,134,0.16),transparent_34%),linear-gradient(115deg,#020303_0%,#050908_48%,#101a18_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.08]" />
        <div className="star-field absolute inset-0 opacity-70" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black to-transparent" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-4 sm:px-9 lg:px-12"
      >
        <button className="group flex min-w-0 items-center gap-3" type="button" onClick={showFilms} aria-label="Simulacra Film Festival">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/20 bg-white/[0.06] shadow-glass-soft backdrop-blur-xl">
            <Orbit className="h-7 w-7 text-white/80 transition-transform duration-500 group-hover:rotate-45" strokeWidth={1.35} />
          </span>
          <span className="hidden leading-none sm:block">
            <span className="block text-[13px] font-medium uppercase tracking-[0.52em] text-white/85">
              Simulacra
            </span>
            <span className="mt-2 block text-[9px] font-medium uppercase tracking-[0.58em] text-white/50">
              Film Festival
            </span>
          </span>
        </button>

        <nav className="glass-pill absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-1 p-1">
          <button
            className={`rounded-full px-7 py-3 text-sm font-medium transition hover:text-white ${
              view === "about" && !selectedFilm
                ? "bg-white/[0.08] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]"
                : "text-white/86"
            }`}
            type="button"
            onClick={showAbout}
          >
            About
          </button>
          <button
            className={`rounded-full px-8 py-3 text-sm font-medium transition hover:text-white ${
              view === "films" || selectedFilm
                ? "bg-white/[0.08] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]"
                : "text-white/86"
            }`}
            type="button"
            onClick={showFilms}
          >
            Films
          </button>
        </nav>
      </motion.header>

      <section id={view} className="mx-auto w-full max-w-[1500px] px-5 pb-12 pt-10 sm:px-9 sm:pt-16 lg:px-12">
        <AnimatePresence mode="wait">
          {selectedFilm ? (
            <FilmDetail
              key="film-detail"
              film={selectedFilm}
              onBack={() => {
                setSelectedFilm(null);
                setExpandedFilm(null);
                setIsPreviewLocked(false);
              }}
            />
          ) : view === "about" ? (
            <AboutScreen key="about" />
          ) : (
            <motion.div
              key="films-list"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-2xl"
                >
                  <h1 className="text-[clamp(4.4rem,9vw,8rem)] font-semibold leading-[0.83] tracking-normal text-white drop-shadow-[0_0_28px_rgba(255,255,255,0.22)]">
                    Films
                  </h1>
                  <p className="mt-6 max-w-xl text-base leading-7 text-white/54 sm:text-lg">
                    Explore the official selection of films pushing the boundaries of imagination, technology, and reality.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-6 sm:items-end"
                >
                  <label className="glass-control flex h-14 w-full items-center gap-3 px-5 sm:w-[284px]">
                    <Search className="h-5 w-5 shrink-0 text-white/86" strokeWidth={1.8} />
                    <input
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search films..."
                      className="min-w-0 flex-1 bg-transparent text-[15px] text-white outline-none placeholder:text-white/42"
                      aria-label="Search films"
                    />
                  </label>

                  <div className="flex w-full items-center gap-4 sm:w-auto">
                    <label className="glass-control relative h-12 flex-1 sm:w-[214px] sm:flex-none">
                      <select
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                        className="h-full w-full appearance-none bg-transparent px-5 pr-11 text-sm font-medium text-white outline-none"
                        aria-label="Filter by category"
                      >
                        {categories.map((item) => (
                          <option key={item} value={item} className="bg-[#101414] text-white">
                            {item}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/82" />
                    </label>
                    <button className="glass-button h-12 w-12 shrink-0" type="button" aria-label="Festival highlights">
                      <Sparkles className="h-5 w-5" strokeWidth={1.8} />
                    </button>
                  </div>
                </motion.div>
              </div>

              <motion.div
                layout
                className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
                onMouseLeave={() => {
                  setExpandedFilm(null);
                  setIsPreviewLocked(false);
                }}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setExpandedFilm(null);
                    setIsPreviewLocked(false);
                  }
                }}
              >
                <AnimatePresence mode="popLayout">
                  {visibleFilms.map((film, index) => (
                    <FilmCard
                      key={film.title}
                      film={film}
                      index={index}
                      isExpanded={expandedFilm === film.title}
                      onPreview={() => previewFilm(film.title)}
                      onPreviewSettled={() => setIsPreviewLocked(false)}
                      onSelect={() => setSelectedFilm(film)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>

              {visibleFilms.length === 0 ? (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-12 rounded-[28px] border border-white/12 bg-white/[0.05] p-8 text-center text-white/60 backdrop-blur-2xl"
                >
                  No placeholder films match this search.
                </motion.p>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

function AboutScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="about-screen"
    >
      <section className="about-hero">
        <div className="about-hero-copy">
          <h1>About</h1>
          <p>
            Simulacra Film Festival celebrates the boundless imagination of sci-fi cinema, where technology meets humanity and the future mirrors our present.
          </p>
        </div>
        <div className="about-portal-scene" aria-hidden="true">
          <div className="about-portal-ring" />
          <div className="about-portal-figure" />
        </div>
      </section>

      <section className="about-logo-stage" aria-label="Simulacra Film Festival">
        <div className="simulacra-emblem-large" aria-hidden="true">
          <span className="laurel laurel-left" />
          <span className="emblem-globe" />
          <span className="laurel laurel-right" />
        </div>
        <h2>Simulacra</h2>
        <p className="about-logo-subtitle">Film Festival</p>
        <p className="about-logo-copy">
          A festival dedicated to science fiction in all its forms, exploring distant worlds, advanced technologies, and the timeless questions of what it means to be human.
        </p>
      </section>

      <section className="about-section-list" aria-label="About science fiction">
        {aboutSections.map((section, index) => (
          <motion.article
            key={section.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="about-info-card"
          >
            <div className={`about-glyph about-glyph-${section.glyph}`} aria-hidden="true">
              <span />
            </div>
            <div className="about-info-copy">
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </div>
            <div className={`about-card-visual ${section.visual}`} aria-hidden="true" />
          </motion.article>
        ))}
      </section>

      <p className="about-closing">
        Simulacra Film Festival is more than a celebration of films. It is a portal to infinite worlds of thought, imagination, and discovery.
      </p>
      <div className="about-finale-mark" aria-hidden="true">
        <span />
      </div>
    </motion.div>
  );
}

function FilmCard({
  film,
  index,
  isExpanded,
  onPreview,
  onPreviewSettled,
  onSelect,
}: {
  film: Film;
  index: number;
  isExpanded: boolean;
  onPreview: () => void;
  onPreviewSettled: () => void;
  onSelect: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 34, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      transition={{
        layout: { duration: 1.15, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.55, delay: index * 0.05 },
        y: { duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
      }}
      onLayoutAnimationComplete={() => {
        if (isExpanded) {
          onPreviewSettled();
        }
      }}
      onMouseEnter={onPreview}
      onFocus={onPreview}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className={`film-card group ${isExpanded ? "film-card-expanded md:col-span-2" : ""}`}
      tabIndex={0}
      role="button"
    >
      <div
        className={`relative grid gap-0 ${
          isExpanded ? "md:grid-cols-[minmax(260px,1.18fr)_minmax(250px,0.82fr)] md:items-stretch" : ""
        }`}
      >
        <motion.div
          layout
          className={`film-visual-frame relative overflow-hidden border-white/10 ${
            isExpanded ? "m-4 aspect-[16/9] rounded-[18px] border md:m-7" : "aspect-[16/7.6] border-b"
          }`}
        >
          <PlaceholderVisual film={film} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.24),transparent_32%),linear-gradient(to_top,rgba(2,4,4,0.78),transparent_42%)]" />
        </motion.div>

        <motion.div
          layout
          className={`relative flex items-end justify-between gap-4 ${
            isExpanded ? "px-6 pb-7 pt-0 md:min-h-[250px] md:flex-col md:items-start md:justify-center md:px-0 md:py-8 md:pr-8" : "px-6 py-5 sm:px-7"
          }`}
        >
          <div className="min-w-0">
            <h2 className="truncate text-xl font-medium tracking-normal text-white sm:text-2xl">
              {film.title}
            </h2>
            <p className="mt-3 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/58 sm:text-base">
              <span>{isExpanded ? film.year : film.duration}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
              <span className="truncate">{film.categories.join(", ")}</span>
            </p>

            <AnimatePresence initial={false}>
              {isExpanded ? (
                <motion.div
                  key="preview-copy"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                  className="mt-6 hidden md:block"
                >
                  <div className="mb-5 h-px w-full bg-gradient-to-r from-white/24 via-white/14 to-transparent" />
                  <p className="max-w-[34ch] text-base leading-7 text-white/62">
                    {film.synopsis}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>

          <button className="glass-button h-12 w-12 shrink-0 text-white/90 transition group-hover:border-white/24 group-hover:bg-white/[0.12]" type="button" aria-label={`Open ${film.title}`} onClick={onSelect}>
            <Sparkles className="h-5 w-5" strokeWidth={1.9} />
          </button>
        </motion.div>
      </div>
    </motion.article>
  );
}

function FilmDetail({ film, onBack }: { film: Film; onBack: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <button className="glass-back-button" type="button" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" strokeWidth={2} />
        <span>Back to Films</span>
      </button>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-11">
        <div className="min-w-0">
          <div className="film-detail-hero">
            <PlaceholderVisual film={film} />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(to_top,rgba(1,3,3,0.64),transparent_48%)]" />
          </div>

          <div className="mt-8">
            <h1 className="text-[clamp(3.4rem,7vw,6.6rem)] font-medium leading-none tracking-normal text-white">
              {film.title}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-lg text-white/58 sm:text-xl">
              <span>{film.year}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              <span>{film.categories.join(", ")}</span>
            </p>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/12 to-transparent" />

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <section>
              <h2 className="text-xl font-medium text-white">Synopsis</h2>
              <p className="mt-4 text-base leading-8 text-white/62">{film.synopsis}</p>
            </section>

            <section>
              <h2 className="text-xl font-medium text-white">Why This Film</h2>
              <p className="mt-4 text-base leading-8 text-white/62">{film.why}</p>
            </section>
          </div>

          <div className="mt-8 h-px bg-gradient-to-r from-white/18 via-white/10 to-transparent" />

          <section className="mt-7">
            <h2 className="text-xl font-medium text-white">Fun Facts</h2>
            <ul className="mt-4 space-y-2 text-base leading-7 text-white/62">
              {film.funFacts.map((fact) => (
                <li key={fact} className="flex gap-3">
                  <span className="mt-3 h-1 w-1 shrink-0 rounded-full bg-white/58" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="film-info-panel">
          <div className="director-portrait">
            <div className="director-halo" />
            <div className="director-head" />
            <div className="director-body" />
          </div>

          <div className="mt-6">
            <p className="text-sm text-white/60">Director</p>
            <h2 className="mt-2 text-2xl font-medium text-white">{film.director}</h2>
          </div>

          <div className="film-info-divider" />

          <div>
            <p className="text-sm text-white/60">Country</p>
            <div className="mt-4 flex items-center gap-4">
              <span className={`flag flag-${film.flag}`} aria-hidden="true" />
              <span className="text-lg text-white">{film.country}</span>
            </div>
          </div>

          <div className="film-info-divider" />

          <div>
            <p className="text-sm text-white/60">Awards</p>
            <div className="mt-5 flex items-end gap-7">
              {film.awards.map((award, index) => (
                <span key={`${award}-${index}`} className={`award-icon award-${award}`} aria-label={`${award} award`} role="img" />
              ))}
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}

function PlaceholderVisual({ film }: { film: Film }) {
  return (
    <div className={`placeholder-visual ${film.visual}`} style={{ "--accent": film.accent } as React.CSSProperties}>
      <div className="horizon" />
      <div className="figure" />
      <div className="visual-core" />
    </div>
  );
}
