<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#research-projects`">
        <span aria-hidden="true">&larr;</span> Back to research
      </a>
    </header>

    <article>
      <section class="hero section-shell">
        <div class="eyebrow">Human–Autonomy Interaction · 2018–2021</div>
        <h1>Social Acceptance and External Communication for Autonomous Delivery Vehicles</h1>
        <p class="hero__summary">
          A multi-stage research program examining how an autonomous delivery vehicle can communicate
          intent, negotiate right-of-way, and earn pedestrians’ trust in everyday public spaces.
        </p>
        <div class="hero__meta">
          <span>Project Lead</span>
          <span>Cross-cultural HRI</span>
          <span>Multimodal eHMI</span>
          <span>81 participants across two studies</span>
        </div>
        <figure class="hero__visual">
          <img :src="asset('campus-delivery-concept.jpg')" alt="Autonomous campus delivery vehicle concept" />
          <figcaption>The research began with a campus autonomous delivery vehicle collaboration.</figcaption>
        </figure>
      </section>

      <section class="section-shell overview-grid">
        <div>
          <p class="section-kicker">Research question</p>
          <h2>How should a driverless delivery vehicle communicate with pedestrians?</h2>
        </div>
        <div class="prose">
          <p>
            The work focused on social acceptance—not only whether people could understand a vehicle’s
            message, but whether its communication style affected trust, comfort, compliance, and the
            perceived distribution of power in a street encounter.
          </p>
          <p>
            The project developed from an industry–university campus-delivery collaboration into an
            intercultural study with Ulm University, then into an independently redesigned master’s thesis
            prototype and comparative evaluation.
          </p>
        </div>
      </section>

      <section class="section-shell role-panel">
        <div>
          <p class="section-kicker">Role & collaboration</p>
          <h2>Research leadership across design, study execution, and prototyping</h2>
        </div>
        <div class="role-panel__body">
          <p>
            I led the Mitsubishi campus-delivery project and was responsible for the core research and design
            work. For the intercultural study, I collaborated with the Ulm University team, who adapted the
            communication strategies for German language and culture and conducted parallel testing in Germany.
          </p>
          <dl>
            <div><dt>Methods</dt><dd>Wizard-of-Oz, interviews, prototyping, comparative evaluation</dd></div>
            <div><dt>Contexts</dt><dd>China and Germany; crossing and oncoming encounters</dd></div>
            <div><dt>Prototype</dt><dd>Arduino, light, facial display, speech, motion, obstacle sensing</dd></div>
          </dl>
        </div>
      </section>

      <section class="section-shell">
        <p class="section-kicker">Research approach</p>
        <h2>From observed interaction to a working multimodal system</h2>
        <ol class="process">
          <li>
            <span class="process__number">01</span>
            <div><h3>Study real encounters</h3><p>Tested crossing and oncoming scenarios with polite, neutral, and dominant communication strategies.</p></div>
          </li>
          <li>
            <span class="process__number">02</span>
            <div><h3>Compare cultural contexts</h3><p>Examined how language and cultural background shaped pedestrian response in China and Germany.</p></div>
          </li>
          <li>
            <span class="process__number">03</span>
            <div><h3>Translate findings into design</h3><p>Built a framework around trust, information legibility, right-of-way coordination, and affective design.</p></div>
          </li>
          <li>
            <span class="process__number">04</span>
            <div><h3>Prototype and evaluate</h3><p>Developed a multimodal Arduino prototype and compared it with the earlier design in a second study.</p></div>
          </li>
        </ol>

        <div class="evidence-grid">
          <figure>
            <img :src="asset('wizard-of-oz-field.jpg')" alt="Wizard-of-Oz test setup with a small vehicle and pedestrian figures" />
            <figcaption><strong>Wizard-of-Oz study.</strong> Controlled encounters made communication strategy and right-of-way behavior testable.</figcaption>
          </figure>
          <figure>
            <img :src="asset('arduino-prototype.png')" alt="Arduino autonomous vehicle prototype with external display and sensors" />
            <figcaption><strong>Functional prototype.</strong> Facial display, speech, lighting, movement, and sensing were integrated into one platform.</figcaption>
          </figure>
        </div>
      </section>

      <section class="findings">
        <div class="section-shell">
          <p class="section-kicker">Key findings</p>
          <h2>Clearer, earlier, and multimodal communication improved the interaction</h2>
          <div class="metrics">
            <div class="metric"><strong>43.8% → 87.5%</strong><span>early recognition</span></div>
            <div class="metric"><strong>4.80s → 3.60s</strong><span>mean task completion time</span></div>
            <div class="metric"><strong>2.70s → 2.30s</strong><span>mean information recognition time</span></div>
          </div>
          <div class="finding-notes">
            <p>Polite strategies generally supported higher acceptance and compliance.</p>
            <p>Text-only projection was vulnerable to ambiguity, message length, viewing angle, and lighting.</p>
            <p>The redesigned prototype improved perceived usefulness, ease of use, satisfaction, trust, and overall acceptance.</p>
          </div>
        </div>
      </section>

      <section class="section-shell prototype-section">
        <div>
          <p class="section-kicker">Design translation</p>
          <h2>A distinct prototype for the master’s thesis</h2>
          <p class="prose">
            The thesis required a new design rather than a reuse of the earlier vehicle. I redefined the
            function, redesigned the exterior, and developed a physical demonstration platform to test how
            coordinated visual, auditory, and motion cues could reduce ambiguity.
          </p>
        </div>
        <figure>
          <img :src="asset('prototype-form.png')" alt="Spherical autonomous vehicle prototype form" />
          <figcaption>Form development for the independently redesigned thesis prototype.</figcaption>
        </figure>
      </section>

      <section class="section-shell outputs">
        <div>
          <p class="section-kicker">Research outputs</p>
          <h2>Publications, thesis, and design IP</h2>
        </div>
        <ul>
          <li><span>AutomotiveUI 2020</span><strong>Designing Communication Strategies of Autonomous Vehicles with Pedestrians: An Intercultural Study</strong></li>
          <li><span>HHME 2019</span><strong>Study on Pedestrian Interaction with Unmanned Logistics Vehicles Based on Cognitive Acceptance</strong></li>
          <li><span>Master’s thesis</span><strong>Tongji University Outstanding Master’s Thesis, 2021</strong></li>
          <li><span>Additional outputs</span><strong>Journal of Graphics papers and related design patents</strong></li>
        </ul>
        <a class="text-link" :href="`${homeUrl}#publications`">View full publication record <span aria-hidden="true">&rarr;</span></a>
      </section>
    </article>

    <footer class="footer section-shell">
      <p>Interested in this research?</p>
      <a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a>
      <a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a>
    </footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/autonomous-delivery/${filename}`
</script>

<style lang="scss" scoped>
.case-study {
  --page-accent: #9a7cff;
  --page-accent-soft: #d9ceff;
  min-height: 100vh;
  background:
    radial-gradient(circle at 78% 8%, rgba(72, 38, 150, 0.28), transparent 30rem),
    #09090c;
  color: #f7f5fb;
}

.section-shell,
.topbar {
  width: min(1120px, calc(100% - 3rem));
  margin: 0 auto;
}

.topbar {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.brand { font-weight: 700; letter-spacing: -0.02em; }
.back-link { color: #c8c3d3; font-size: 0.9rem; transition: color .2s ease; }
.back-link:hover { color: white; }

.hero { padding: 7rem 0 5rem; }
.eyebrow,
.section-kicker {
  color: var(--page-accent-soft);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .13em;
  text-transform: uppercase;
}

h1 {
  max-width: 980px;
  margin: 1.2rem 0 1.5rem;
  font-size: clamp(2.75rem, 6.5vw, 5.8rem);
  line-height: .99;
  letter-spacing: -.055em;
}

h2 {
  margin-top: .75rem;
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  line-height: 1.1;
  letter-spacing: -.035em;
}

.hero__summary {
  max-width: 780px;
  color: #c8c3d3;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
  line-height: 1.65;
}

.hero__meta { display: flex; flex-wrap: wrap; gap: .6rem; margin: 2.1rem 0 3rem; }
.hero__meta span { padding: .55rem .85rem; border: 1px solid rgba(217, 206, 255, .35); border-radius: 999px; color: #e7e0ff; font-size: .78rem; }

figure { margin: 0; }
figure img { width: 100%; background: #17171e; }
figcaption { margin-top: .75rem; color: #918b9e; font-size: .8rem; line-height: 1.5; }
.hero__visual img { aspect-ratio: 16 / 8.5; object-fit: cover; border-radius: 1.25rem; }

.overview-grid,
.role-panel,
.prototype-section,
.outputs { padding: 6rem 0; display: grid; grid-template-columns: .85fr 1.15fr; gap: clamp(3rem, 8vw, 7rem); border-top: 1px solid rgba(255, 255, 255, .1); }
.prose { color: #b7b1c0; font-size: 1rem; line-height: 1.8; }
.prose p + p { margin-top: 1.25rem; }

.role-panel__body > p { color: #c8c3d3; line-height: 1.75; }
dl { margin-top: 2.25rem; }
dl div { padding: 1rem 0; display: grid; grid-template-columns: 7rem 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.1); }
dt { color: #888191; font-size: .78rem; text-transform: uppercase; letter-spacing: .08em; }
dd { color: #e5e1e9; }

.process { margin: 3rem 0 4.5rem; list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.process li { padding: 1.5rem; display: flex; gap: 1.25rem; background: #15151b; border: 1px solid rgba(255,255,255,.09); border-radius: 1rem; }
.process__number { color: var(--page-accent); font: 600 .8rem var(--font-mono); }
.process h3 { margin-bottom: .45rem; font-size: 1rem; }
.process p { color: #9d97a7; font-size: .86rem; line-height: 1.6; }

.evidence-grid { padding-bottom: 6rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
.evidence-grid figure { padding: .65rem; background: #15151b; border-radius: 1rem; }
.evidence-grid img { aspect-ratio: 4 / 3; object-fit: cover; border-radius: .65rem; }
.evidence-grid figcaption { padding: 0 .4rem .35rem; }
.evidence-grid strong { color: #ddd7e7; }

.findings { padding: 6rem 0; background: #e9e2ff; color: #171320; }
.findings .section-kicker { color: #5f37cf; }
.metrics { margin: 3rem 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.metric { padding: 1.5rem; min-height: 150px; display: flex; flex-direction: column; justify-content: space-between; background: rgba(255,255,255,.6); border: 1px solid rgba(49,5,169,.14); border-radius: 1rem; }
.metric strong { font-size: clamp(1.45rem, 3vw, 2.4rem); letter-spacing: -.05em; }
.metric span { color: #574f63; font-size: .82rem; }
.finding-notes { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
.finding-notes p { padding-top: 1.2rem; border-top: 1px solid rgba(23,19,32,.2); line-height: 1.65; }

.prototype-section figure img { aspect-ratio: 16 / 9; object-fit: cover; border-radius: 1rem; }
.prototype-section .prose { margin-top: 1.4rem; }

.outputs ul { list-style: none; }
.outputs li { padding: 1.2rem 0; display: grid; grid-template-columns: 9rem 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.12); }
.outputs li span { color: #8f8899; font-size: .78rem; text-transform: uppercase; letter-spacing: .06em; }
.outputs li strong { font-weight: 500; line-height: 1.5; }
.text-link { display: inline-block; margin-top: 2rem; color: var(--page-accent-soft); }

.footer { padding: 4rem 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.1); }
.footer > p { color: #8f8899; }
.footer > a:not(.back-link) { font-size: clamp(1.4rem, 3vw, 2.4rem); font-weight: 700; letter-spacing: -.04em; }
.footer .back-link { grid-column: 2; }

@media (max-width: 760px) {
  .section-shell, .topbar { width: min(100% - 2rem, 1120px); }
  .topbar { min-height: 68px; }
  .hero { padding: 4.5rem 0 3.5rem; }
  .overview-grid, .role-panel, .prototype-section, .outputs { padding: 4rem 0; grid-template-columns: 1fr; gap: 2rem; }
  .process, .evidence-grid, .metrics, .finding-notes { grid-template-columns: 1fr; }
  .process { margin-bottom: 3rem; }
  .evidence-grid { padding-bottom: 4rem; }
  .findings { padding: 4rem 0; }
  .metric { min-height: 125px; }
  .outputs li { grid-template-columns: 1fr; gap: .35rem; }
  .footer { grid-template-columns: 1fr; }
  .footer .back-link { grid-column: auto; }
}
</style>
