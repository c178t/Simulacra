"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, X } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";

type Film = {
  slug: string;
  title: string;
  year: string;
  duration: string;
  synopsis: string;
  why: ReactNode;
  funFacts: string[];
  director: string;
  countries: Array<{ name: string; flag: string }>;
  awards: Array<{
    icon: "oscar" | "globe" | "bafta" | "saturn" | "bear" | "record" | "laurel" | "trophy" | "medal";
    label: string;
  }>;
  visual: string;
  accent: string;
};

const films: Film[] = [
  {
    slug: "welt-am-draht",
    title: "Welt am Draht",
    year: "1973",
    duration: "212 min",
    synopsis:
      "Fred Stiller is a cybernetics engineer who takes over a government-funded project after his predecessor mysteriously dies. Simulacron-1 is a supercomputer capable of hosting a virtual world populated by more than 9,000 conscious identity units who believe their reality is real. As Stiller investigates irregularities, colleagues vanish, records change, and his own reliability becomes unstable. The film unfolds through reflective surfaces, sterile offices, and long conversations as the systems built to explain his reality become harder to trust.",
    why:
      "This film treats artificial reality as a philosophical problem rather than a gimmick. Fassbinder's deliberate European art-cinema approach gives the festival historical depth and a different rhythm from effects-heavy simulation films. It also introduces simulation as a system embedded inside corporate, scientific, and political structures, showing that questions about simulated existence were already deeply rooted in cinema before modern cyberspace imagery.",
    funFacts: [
      "Fassbinder was notoriously prolific; he shot the 212-minute film on 16mm in just 44 days.",
    ],
    director: "Rainer Werner Fassbinder",
    countries: [{ name: "West Germany", flag: "west-germany" }],
    awards: [
      { icon: "medal", label: "Grimme Award (1974): Honorable Mention for Rainer Werner Fassbinder" },
    ],
    visual: "wire-orb",
    accent: "rgba(196, 238, 224, 0.72)",
  },
  {
    slug: "tron",
    title: "TRON",
    year: "1982",
    duration: "96 min",
    synopsis:
      "Kevin Flynn is a talented computer programmer and arcade game designer who gets digitized and transported inside the mainframe of his former employer by a power-hungry artificial intelligence known as the Master Control Program. In this electronic world, programs take on humanoid forms and compete in combat challenges and high-stakes games designed by the controlling master program. Flynn gets mistaken for a program as he tries to navigate the digital landscape full of glowing grids, buildings, and geometric architecture, and he is forced to engage in stylized virtual combat. As Flynn moves deeper through the system, the distinction between a user and a program becomes less clear. Flynn must team up with heroic security and utility programs to escape. This film poses the question of what happens when a person enters the machine and has to play by the machine's rules.",
    why:
      "This film belongs in the film festival because it is one of the earliest films that visually depict a digital simulation as a navigable space. It turns one of the most abstract things, computing processes, into something tangible for the audience to experience. Simulation becomes literal and not metaphorical, which bridges early conceptual films and later, more complex depictions of virtual reality. This film emphasizes structure, rules, and control within a digital system, which reinforces the theme of the festival while contributing pop-art and a distinct aesthetic that shaped future representations of cyberspace.",
    funFacts: [
      "The entire film was created using just 2MB of memory and 330MB of storage.",
    ],
    director: "Steven Lisberger",
    countries: [{ name: "United States", flag: "usa" }],
    awards: [
      { icon: "saturn", label: "Saturn Awards (1983): Best Costumes for Elois Jenssen and Rosanna Norton" },
      { icon: "record", label: "Guinness World Record (1982): First use of computer-generated animation in a feature film" },
      { icon: "oscar", label: "Academy Scientific and Technical connection: Ken Perlin later won a 1997 Technical Achievement Award for Perlin Noise, first created for TRON" },
    ],
    visual: "render-grid",
    accent: "rgba(70, 235, 255, 0.66)",
  },
  {
    slug: "kokaku-kidotai",
    title: "Kōkaku Kidōtai (攻殻機動隊)",
    year: "1995",
    duration: "82 min",
    synopsis:
      "In a technologically advanced future, most humans have replaced parts of their bodies with cybernetic implants. Major Motoko Kusanagi is a cyborg security agent who pursues a mysterious hacker known as the Puppet Master. The Puppet Master can remotely seize control of people’s cybernetic bodies and overwrite their memories to turn them into puppets. While she hunts, she tries to understand the boundaries between mind, body, and networked consciousness. Kusanagi navigates a world where memories can be altered, bodies can be replaced, and identity is no longer tied to a single physical form. Kusanagi starts to question her own existence as she confronts the nature of the entity she pursues. The film includes a visual style that feels both tactical and abstract. The narrative of the film gradually shifts from external pursuit to internal inquiry, exploring what it means to be human in a fully mediated world.",
    why: (
      <>
        This film belongs in the festival because it pushes the concept of simulation beyond the external environment and expands it into the structure of identity itself. 
        Rather than creating a whole separate artificial virtual world, it suggests that reality is already mediated through technology, memory, and networks. This film creates a crucial conceptual bridge linking virtual simulations 
        with philosophical questions about consciousness. This film also expands the geographic and stylistic conversations by introducing animation and Japanese cyberpunk styles. The restrained pacing and visual precision of the 
        film contrast effectively with more action-driven entries in this list, while its themes resonate strongly with films like <i>The Matrix</i>.
      </>
    ),
    funFacts: [
      "The production team traveled to a facility in Guam to shoot real firearms at different materials so they could accurately animate bullet impacts.",
    ],
    director: "Mamoru Oshii",
    countries: [
      { name: "Japan", flag: "japan" },
      { name: "United Kingdom", flag: "uk" },
    ],
    awards: [
      { icon: "laurel", label: "Yokohama Film Festival (1996): Best Screenplay for Kazunori Itô" },
      { icon: "trophy", label: "World Animation Celebration (1997): Best Theatrical Feature Film and Best Director of Animation for Mamoru Oshii" },
      { icon: "medal", label: "Fantasporto (1997): International Fantasy Film Award Special Mention for Mamoru Oshii" },
    ],
    visual: "memory-wave",
    accent: "rgba(204, 255, 234, 0.66)",
  },
  {
    slug: "the-truman-show",
    title: "The Truman Show",
    year: "1998",
    duration: "103 min",
    synopsis:
      "Truman Burbank is just a normal guy who lives a seemingly ordinary life in a picturesque town, surrounded by friends, coworkers, and a good routine. Slowly, small inconsistencies start to build up, disrupting the normalcy and leading him to question his environment. His entire life unfolds within a controlled setting that was designed for constant observation. The world around him operates with hidden systems designed to shape his experiences and limit his freedom. As Truman discovers this, he starts to test the boundaries of his reality. Imagine living a constructed experience that is meant as a spectacle for others to observe and subtly control you.",
    why:
      "This film belongs in the festival because it makes the genre of simulation sci-fi accessible to a mass audience. It shows that simulation does not always require advanced technology and can emerge from control, observation, and performance. This is a perspective that broadens the festival’s definition of simulation sci-fi by connecting it to surveillance culture and media construction. Its recognizable setting and emotional grounding help it balance the other, more abstract films in the lineup. This film also allows for the demonstration of how a simulation could operate in everyday contexts and not just futuristic “cyberpunk” ones by focusing on a lived experience in a controlled environment.",
    funFacts: [
      "Jim Carrey took a significant pay cut to play Truman, accepting $12 million instead of his then-standard $20 million to prove he could handle dramatic roles.",
    ],
    director: "Peter Weir",
    countries: [{ name: "United States", flag: "usa" }],
    awards: [
      { icon: "globe", label: "Golden Globe Awards (1999): Best Actor Drama, Best Supporting Actor, and Best Original Score" },
      { icon: "bafta", label: "BAFTA Awards (1999): Best Direction, Best Original Screenplay, and Best Production Design" },
      { icon: "saturn", label: "Saturn Awards (1999): Best Fantasy Film and Best Writer" },
      { icon: "laurel", label: "Hugo Awards (1999): Best Dramatic Presentation" },
      { icon: "trophy", label: "MTV Movie Awards (1999): Best Male Performance for Jim Carrey" },
      { icon: "medal", label: "National Board of Review (1998): Best Supporting Actor for Ed Harris" },
      { icon: "laurel", label: "London Critics Circle Film Awards (1999): Director of the Year and Screenwriter of the Year" },
      { icon: "trophy", label: "The film won over 30 awards globally" },
    ],
    visual: "portal-ring",
    accent: "rgba(255, 235, 178, 0.66)",
  },
  {
    slug: "the-matrix",
    title: "The Matrix",
    year: "1999",
    duration: "136 min",
    synopsis:
      "Neo is a programmer who discovers that the world he inhabits is not real but a sophisticated simulation that is created and maintained by machines. Humanity has lost a war against artificial intelligence and has become enslaved. Neo discovers that there are people who know about this illusion in his world, and that there is a conflict between those who want to accept the illusion and those who want to break free from it. The film moves between the simulated environment and the reality outside it, exploring how perception can be controlled and manipulated. The Matrix combines action cinema with philosophical unease. As Neo joins the underground rebellion of those who want to break free from the illusion, he must understand how to fight the machines' enforcers.",
    why:
      "This film should be in the festival because it is the most widely recognized simulation sci-fi film of the modern era. This film sits at the intersection of a blockbuster spectacle and conceptual sci-fi, which makes it ideal for a program that wants both accessibility and intellectual rigor. It also helps to unify the rest of the lineup, where the earlier films build towards it and later films respond to it. The rest of the festival can be read as variations on its core question of how reality is constructed.",
    funFacts: [
      "The iconic green digital rain was created by production designer Simon Whiteley using characters scanned from his wife's Japanese cookbooks.",
    ],
    director: "Lana Wachowski and Lilly Wachowski",
    countries: [
      { name: "United States", flag: "usa" },
      { name: "Australia", flag: "australia" },
    ],
    awards: [
      { icon: "oscar", label: "Academy Awards (2000): Best Film Editing, Best Sound, Best Sound Effects Editing, and Best Visual Effects" },
      { icon: "bafta", label: "BAFTA Awards (2000): Best Sound and Best Achievement in Special Visual Effects" },
      { icon: "saturn", label: "Saturn Awards (2000): Best Science Fiction Film and Best Director" },
      { icon: "trophy", label: "MTV Movie Awards (2000): Best Movie, Best Male Performance, and Best Fight" },
      { icon: "trophy", label: "Empire Awards (2000): Best Film and Best Debut for Carrie-Anne Moss" },
      { icon: "medal", label: "Golden Reel Awards (2000): Best Sound Editing for Effects and Foley" },
      { icon: "laurel", label: "National Film Registry (2012): Inducted as culturally, historically, or aesthetically significant" },
    ],
    visual: "light-door",
    accent: "rgba(80, 255, 150, 0.68)",
  },
  {
    slug: "existenz",
    title: "eXistenZ",
    year: "1999",
    duration: "97 min",
    synopsis:
      "Allegra Geller is the world’s most celebrated game designer who is attacked by an assassin who believes virtual reality is deforming human existence. In this world, technology is organic and invasive. Gamers use “game pods,” which are fleshy, organ-like devices that connect directly to their nervous systems. This creates an intimate relationship between the user and the system. Ted Pikul is a bodyguard for Allegra and helps her escape the assassin. As Allegra and Ted enter the game to determine if her master game pod was damaged in the attack, they descend through layers of simulation, and the boundaries between the real physical world and the game begin to dissolve.",
    why: (
      <>
      This film belongs in the festival because it complicates and tackles the simulation theme in a way that the other titles in the festival don’t. It tackles the philosophical questions of reality through a unique, visceral, and grotesque lens. This film was released in the same year as <i>The Matrix</i> but focuses more on the intersection of biology and technology. The film shows how simulation changes the body, desire, and trust itself. This film also seems to foresee the many concerns of artificial intelligence, augmented reality, and the psychological impact of immersive gaming. It also strengthens the lineup by keeping the simulation theme from feeling repetitive and focusing on nested layers of reality, like <i>Inception</i>.
      </>
    ),
    funFacts: [
      "The film did poorly at the box office but later developed a cult following, and contemporary writing often treats it as an overlooked classic of body-horror virtual reality.",
    ],
    director: "David Cronenberg",
    countries: [
      { name: "Canada", flag: "canada" },
      { name: "United Kingdom", flag: "uk" },
      { name: "France", flag: "france" },
    ],
    awards: [
      { icon: "bear", label: "Berlin International Film Festival (1999): Silver Bear for Outstanding Artistic Achievement" },
      { icon: "trophy", label: "Amsterdam Fantastic Film Festival (1999): Silver Scream Award" },
      { icon: "medal", label: "Genie Awards (2000): Best Achievement in Editing for Ronald Sanders" },
      { icon: "laurel", label: "Sitges Catalonian International Film Festival: Best Screenplay for David Cronenberg" },
    ],
    visual: "black-cube",
    accent: "rgba(255, 190, 154, 0.62)",
  },
  {
    slug: "papurika",
    title: "Papurika (パプリカ)",
    year: "2006",
    duration: "90 min",
    synopsis:
      "Scientists have developed a device known as the “DC mini,” which allows therapists to enter and record their patients’ dreams to better understand their subconscious. Dr. Atsuko Chiba is a researcher who lives a double life. She illegally uses the device to enter patients’ dreams under the guise of her alter ego, “Paprika,” who is a charismatic “dream detective” who provides therapy. Unfortunately, the device gets stolen before it is officially regulated, and it gets abused by a thief to invade the minds of people while they are awake, forcing them into a nightmare. The boundary between dreams and reality begins to dissolve as dreams start to influence the real world.",
    why:
      "This film belongs in this film festival because it pushes simulation sci-fi into the realm of dreams rather than a computer-generated environment. The film also plays with the idea of layered realities through nested dreams where characters experience false awakenings, which makes the audience question even more which level of the story is the “real world.” This film explores a new idea of shared simulation where the simulation is fueled by the combination of the imagination and madness of every human mind connected. Finally, it adds visual diversity through its animated form.",
    funFacts: [
      "Despite being a high-tech 2006 film, Susumu Hirasawa composed and sequenced the score using an Amiga 4000 computer.",
    ],
    director: "Satoshi Kon",
    countries: [{ name: "Japan", flag: "japan" }],
    awards: [
      { icon: "trophy", label: "Tokyo Anime Awards (2007): Best Feature Film and Best Music" },
      { icon: "trophy", label: "Newport Beach Film Festival (2007): Feature Film Award for Best Animation" },
      { icon: "laurel", label: "Montréal Festival of New Cinema (2006): Public's Choice Award" },
      { icon: "medal", label: "Fantasporto (2007): Critics' Choice Award for Satoshi Kon" },
      { icon: "medal", label: "Chlotrudis Awards (2008): Best Design" },
    ],
    visual: "triangle-gate",
    accent: "rgba(255, 122, 196, 0.64)",
  },
  {
    slug: "avatar",
    title: "Avatar",
    year: "2009",
    duration: "162 min",
    synopsis:
      "Humans explore a lush alien moon called Pandora. Pandora is an extremely beautiful but equally dangerous environment that is filled with bioluminescent flora and massive predators. Its natural inhabitants are called the Na’vi. Humans traveled there to obtain and mine a rare, valuable mineral called “Unobtanium,” to solve Earth’s energy crisis. Due to the toxic atmosphere for humans, they are forced to use artificially created human-Na’vi hybrids, which they can control by linking their minds directly into the hybrid bodies. Through this system, the humans can experience another world while being physically separate from it. As the characters spend more time in these hybrid bodies, their sense of identity begins to shift.",
    why:
      "This film belongs in this festival because it broadens simulation sci-fi beyond screens and virtual worlds into bodily mediation. It explores the mental transfer of consciousness into a surrogate body, which is sort of like a “biological simulation” of an alien experience. It makes simulation a physical and sensory phenomenon. This film broadens the festival’s thematic range while remaining focused on mediated reality. By emphasizing the connection between identity and physical form, it complements other entries that focus on perception and consciousness. One major theme in simulation is the perfection of experience, which, through an Avatar body, one could fully experience.",
    funFacts: [
      "Sam Worthington was living in his car when he auditioned for Jake Sully.",
      "Matt Damon was offered the role along with 10% of the profits, a decision later estimated to have cost him more than $600 million.",
    ],
    director: "James Cameron",
    countries: [
      { name: "United States", flag: "usa" },
      { name: "United Kingdom", flag: "uk" },
    ],
    awards: [
      { icon: "oscar", label: "Academy Awards (2010): Best Art Direction, Best Cinematography, and Best Visual Effects" },
      { icon: "globe", label: "Golden Globe Awards (2010): Best Motion Picture Drama and Best Director" },
      { icon: "bafta", label: "BAFTA Awards (2010): Best Production Design and Best Special Visual Effects" },
      { icon: "saturn", label: "Saturn Awards (2010): 10 wins including Best Science Fiction Film and Best Director" },
      { icon: "trophy", label: "Critics' Choice Movie Awards (2010): Best Action Movie, Art Direction, Cinematography, Editing, Sound, and Visual Effects" },
      { icon: "trophy", label: "Empire Awards (2010): Best Film, Best Director, and Best Actress for Zoe Saldaña" },
      { icon: "trophy", label: "The film earned 91 wins from 131 nominations worldwide" },
    ],
    visual: "planet-dome",
    accent: "rgba(70, 190, 255, 0.68)",
  },
];

const introSections = [
  {
    title: "Historical Overview",
    body: (
      <>
        The simulation sci-fi genre
        emerged as a fascinating evolution of the philosophical question: &quot;How do I know what is
        real?&quot; There have been many thought experiments early on by philosophers such as Plato with
        Plato&apos;s Allegory of the Cave and Descartes&apos; &quot;Evil Demon&quot;, which both challenge our trust in
        our sensory experiences. By the mid-20th century, these abstract ideas transitioned in
        literature into more computer-generated cities which laid the groundwork for the 1970s and
        1980s with films like <i>World on a Wire</i> and <i>TRON</i>. These films gave us a
        visualization of what the &quot;inside&quot; of a machine could look like by imagining the digital
        world as something tangible.
        {" "}
        In the late 1990s, this genre reached its cultural peak with the &quot;Cyberpunk Explosion&quot; with
        films like <i>The Matrix</i> and <i>eXistenZ</i>. It seems that these films reflect a
        pre-millennial fear about the growing dependence of humans on technology and the internet.
        The genre has now evolved past the trope of being &quot;trapped in a computer&quot; to more organic
        and psychological aspects such as seen in <i>Avatar</i> and <i>Paprika</i> and multilayers
        of reality. But the genre still keeps the same core idea with which it started and continues
        to explore the idea that our entire universe is a coded program.
      </>
    ),
    visual: "about-city",
    glyph: "timeline",
  },
  {
    title: "Defining Characteristics",
    body: (
      <>
        Recurring visual motifs include mirrors, reflections, and screens to signal instability of
        the perceived world. Stories following this genre frequently follow an arc where the
        protagonist &quot;wakes up&quot; and becomes disillusioned, discovering hidden layers of reality.
        Visually, this genre usually employs a gritty monochrome look for the &quot;real&quot; world and a
        saturated, sterile look for the simulation to help the audience navigate the layers of
        reality themselves.
      </>
    ),
    visual: "about-cube",
    glyph: "poly",
  },
  {
    title: "Cultural Significance",
    body: (
      <>
        In our digital-first era, simulation sci-fi serves as a cultural mirror against the rapid
        dilution of our &quot;real&quot; world, a world full of deepfakes, AI-generated content, and
        immersive technologies. The genre helps us explore our existential fears regarding
        corporate/state surveillance and the idea that our environment is manufactured to shape our
        perception of truth. It also urges us to &quot;wake up&quot; to the systems that govern our everyday
        lives and to pay attention to the world around us.
      </>
    ),
    visual: "about-dome",
    glyph: "signal",
  },
];

export default function Home() {
  const [selectedFilm, setSelectedFilm] = useState<Film | null>(null);
  const [view, setView] = useState<"introduction" | "films">("introduction");

  const showFilms = () => {
    setView("films");
    setSelectedFilm(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showFilm = (film: Film) => {
    setSelectedFilm(film);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const showIntroduction = () => {
    setView("introduction");
    setSelectedFilm(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030505] text-white">
      <div className={`site-background pointer-events-none fixed inset-0 z-0 ${selectedFilm ? "site-background-film" : ""}`}>
        <div className="site-atmosphere" />
        <div className="site-network" aria-hidden="true">
          <span className="network-line network-line-left" />
          <span className="network-line network-line-right" />
          <span className="network-node network-node-left-top" />
          <span className="network-node network-node-left-mid" />
          <span className="network-node network-node-right-top" />
          <span className="network-node network-node-right-mid" />
          <span className="network-drop network-drop-one" />
          <span className="network-drop network-drop-two" />
          <span className="network-drop network-drop-three" />
        </div>
        <div className="star-field" />
        <div className="site-vignette" />
      </div>

      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center justify-between px-5 py-4 sm:px-9 lg:px-12"
      >
        <button className="group min-w-0" type="button" onClick={showFilms} aria-label="Simulacra Film Festival">
          <SimulacraLogo variant="header" />
        </button>

        <nav className="glass-pill absolute left-1/2 top-4 flex -translate-x-1/2 items-center gap-1 p-1">
          <button
            className={`rounded-full px-7 py-3 text-sm font-medium transition hover:text-white ${
              view === "introduction" && !selectedFilm
                ? "bg-white/[0.08] text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.14)]"
                : "text-white/86"
            }`}
            type="button"
            onClick={showIntroduction}
          >
            Introduction
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

      <section id={view} className="relative z-10 mx-auto w-full max-w-[1500px] px-5 pb-12 pt-10 sm:px-9 sm:pt-16 lg:px-12">
        <AnimatePresence mode="wait">
          {selectedFilm ? (
            <FilmDetail
              key="film-detail"
              film={selectedFilm}
              onBack={() => {
                setSelectedFilm(null);
              }}
            />
          ) : view === "introduction" ? (
            <IntroductionScreen key="introduction" onGoToFilms={showFilms} />
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

              </div>

              <motion.div
                className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {films.map((film, index) => (
                    <FilmCard
                      key={film.title}
                      film={film}
                      index={index}
                      onSelect={() => showFilm(film)}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

function IntroductionScreen({ onGoToFilms }: { onGoToFilms: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="about-screen"
    >
      <section className="about-logo-stage" aria-label="Simulacra Film Festival">
        <SimulacraLogo variant="about" />
        <p className="about-logo-copy">
          A festival dedicated to simulation science fiction in all its forms, exploring distant worlds, advanced technologies, and the timeless question of whether our reality is real.
        </p>
      </section>

      <section className="about-section-list" aria-label="About science fiction">
        {introSections.map((section, index) => (
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

      <div className="about-finale-mark" aria-hidden="true">
        <span />
      </div>

      <motion.button
        className="go-films-button"
        type="button"
        onClick={onGoToFilms}
        whileHover={{ scale: 1.015 }}
        whileFocus={{ scale: 1.015 }}
        transition={{ duration: 0.14, ease: [0.22, 1, 0.36, 1] }}
      >
        Go to Films
      </motion.button>
    </motion.div>
  );
}

function SimulacraLogo({ variant }: { variant: "header" | "about" }) {
  return (
    <div className={`simulacra-logo simulacra-logo-${variant}`}>
      <AssetImage
        src="/assets/logo/simulacra-logo.png"
        alt="Simulacra Film Festival"
        className="simulacra-logo-image"
        fallback={
          <>
            <div className="simulacra-mark" aria-hidden="true">
              <span className="logo-laurel logo-laurel-left" />
              <span className="logo-orb">
                <span className="logo-orb-left" />
                <span className="logo-orb-grid" />
                <span className="logo-orb-pixels" />
              </span>
              <span className="logo-laurel logo-laurel-right" />
            </div>
            <div className="simulacra-wordmark">
              <span>Simulacra</span>
              <small>Film Festival</small>
            </div>
          </>
        }
      />
    </div>
  );
}

function AssetImage({
  src,
  alt,
  className,
  fallback,
}: {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
}) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return fallback;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}

function FilmCard({
  film,
  index,
  onSelect,
}: {
  film: Film;
  index: number;
  onSelect: () => void;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 34, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.98 }}
      whileHover={{ scale: 1.035 }}
      transition={{
        opacity: { duration: 0.55, delay: index * 0.05 },
        y: { duration: 0.9, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] },
        scale: { duration: 0.14, ease: [0.22, 1, 0.36, 1] },
      }}
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className="film-card group"
      tabIndex={0}
      role="button"
    >
      <div className="relative grid gap-0">
        <motion.div
          className="film-visual-frame relative aspect-[16/7.6] overflow-hidden border-b border-white/10"
        >
          <AssetImage
            src={`/assets/films/${film.slug}/cover.jpg`}
            alt={`${film.title} cover`}
            className="asset-fill"
            fallback={<PlaceholderVisual film={film} />}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.24),transparent_32%),linear-gradient(to_top,rgba(2,4,4,0.78),transparent_42%)]" />
        </motion.div>

        <motion.div
          className="relative px-6 py-5 sm:px-7"
        >
          <div className="min-w-0">
            <h2 className="truncate text-xl font-medium tracking-normal text-white sm:text-2xl">
              {film.title}
            </h2>
            <p className="mt-3 flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 text-sm text-white/58 sm:text-base">
              <span>{film.duration}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
              <span>{film.year}</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

function FilmDetail({ film, onBack }: { film: Film; onBack: () => void }) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const [sampledAccent, setSampledAccent] = useState(film.accent);
  const flares = useMemo(
    () =>
      Array.from({ length: 5 }, (_, index) => ({
        id: `${film.slug}-flare-${index}`,
        x: -14 + Math.random() * 128,
        y: -10 + Math.random() * 82,
        width: 32 + Math.random() * 36,
        height: 22 + Math.random() * 32,
        opacity: 0.28 + Math.random() * 0.34,
        delay: -Math.random() * 8,
        duration: 11 + Math.random() * 8,
      })),
    [film.slug],
  );
  const heroImage = {
    src: `/assets/films/${film.slug}/hero.jpg`,
    alt: `${film.title} still`,
  };
  const directorImage = {
    src: `/assets/films/${film.slug}/director.jpg`,
    alt: `${film.director}, director of ${film.title}`,
  };

  useEffect(() => {
    let isMounted = true;
    const image = new Image();

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 48;
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext("2d", { willReadFrequently: true });

      if (!context) {
        return;
      }

      context.drawImage(image, 0, 0, size, size);
      const pixels = context.getImageData(0, 0, size, size).data;
      let bestColor = { r: 190, g: 235, b: 225 };
      let bestScore = 0;

      for (let index = 0; index < pixels.length; index += 16) {
        const r = pixels[index];
        const g = pixels[index + 1];
        const b = pixels[index + 2];
        const a = pixels[index + 3];
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const brightness = max / 255;
        const saturation = max === 0 ? 0 : (max - min) / max;

        if (a < 200 || brightness < 0.18 || brightness > 0.94 || saturation < 0.12) {
          continue;
        }

        const score = saturation * 1.35 + brightness * 0.55;

        if (score > bestScore) {
          bestScore = score;
          bestColor = { r, g, b };
        }
      }

      if (isMounted && bestScore > 0) {
        setSampledAccent(`rgb(${bestColor.r}, ${bestColor.g}, ${bestColor.b})`);
      }
    };

    image.onerror = () => {
      if (isMounted) {
        setSampledAccent(film.accent);
      }
    };

    setSampledAccent(film.accent);
    image.src = heroImage.src;

    return () => {
      isMounted = false;
    };
  }, [film.accent, heroImage.src]);

  return (
    <motion.div
      className="film-detail-stage"
      style={{ "--film-accent": sampledAccent } as React.CSSProperties}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        className="film-detail-flares"
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
      >
        {flares.map((flare) => (
          <span
            key={flare.id}
            className="film-flare"
            style={
              {
                "--flare-x": `${flare.x}%`,
                "--flare-y": `${flare.y}%`,
                "--flare-width": `${flare.width}vw`,
                "--flare-height": `${flare.height}vw`,
                "--flare-opacity": flare.opacity,
                "--flare-delay": `${flare.delay}s`,
                "--flare-duration": `${flare.duration}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </motion.div>

      <button className="glass-back-button" type="button" onClick={onBack}>
        <ArrowLeft className="h-4 w-4" strokeWidth={2} />
        <span>Back to Films</span>
      </button>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:gap-11">
        <div className="min-w-0">
          <button
            className="film-detail-hero image-zoom-trigger"
            type="button"
            onClick={() => setLightboxImage(heroImage)}
            aria-label={`View full image for ${film.title}`}
          >
            <AssetImage
              src={heroImage.src}
              alt={heroImage.alt}
              className="asset-fill"
              fallback={<PlaceholderVisual film={film} />}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.18),transparent_28%),linear-gradient(to_top,rgba(1,3,3,0.64),transparent_48%)]" />
          </button>

          <div className="mt-8">
            <h1 className="text-[clamp(3.4rem,7vw,6.6rem)] font-medium leading-none tracking-normal text-white">
              {film.title}
            </h1>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-lg text-white/58 sm:text-xl">
              <span>{film.duration}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              <span>{film.year}</span>
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

        <motion.aside
          className="film-info-panel"
          initial={{ opacity: 0, x: 56 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}
          transition={{ duration: 0.62, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            className="director-portrait image-zoom-trigger"
            type="button"
            onClick={() => setLightboxImage(directorImage)}
            aria-label={`View full image of ${film.director}`}
          >
            <AssetImage
              src={directorImage.src}
              alt={directorImage.alt}
              className="asset-fill"
              fallback={
                <>
                  <div className="director-halo" />
                  <div className="director-head" />
                  <div className="director-body" />
                </>
              }
            />
          </button>

          <div className="mt-6">
            <p className="text-sm text-white/60">Director</p>
            <h2 className="mt-2 text-2xl font-medium text-white">{film.director}</h2>
          </div>

          <div className="film-info-divider" />

          <div>
            <p className="text-sm text-white/60">Country</p>
            <div className="country-list mt-4">
              {film.countries.map((country) => (
                <div key={country.name} className="country-entry" aria-label={country.name} tabIndex={0}>
                  <span className={`flag flag-${country.flag}`} aria-hidden="true" />
                  <span className="country-label">{country.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="film-info-divider" />

          <div>
            <p className="text-sm text-white/60">Awards</p>
            <div className="award-list mt-5">
              {film.awards.map((award, index) => (
                <div key={`${award.label}-${index}`} className="award-entry" aria-label={award.label} tabIndex={0}>
                  <span className={`award-icon award-${award.icon}`} aria-hidden="true" />
                  <span className="award-label">{award.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>

      <AnimatePresence>
        {lightboxImage ? (
          <motion.div
            className="image-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxImage.alt}
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="image-lightbox-close"
              type="button"
              onClick={() => setLightboxImage(null)}
              aria-label="Close full image"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>
            <motion.img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="image-lightbox-image"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
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
