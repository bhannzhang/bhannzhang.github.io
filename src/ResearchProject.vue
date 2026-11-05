<template>
  <main class="case-study delivery-study">
    <ResearchPageTopbar :home-url="homeUrl" />

    <article>
      <section class="hero section-shell">
        <p class="eyebrow">Human–Autonomy Interaction · 2018–2021</p>
        <h1>Communicating Intent in Autonomous Delivery Encounters</h1>
        <p class="hero__summary">A three-stage research program on how delivery vehicles can negotiate shared space with pedestrians through legible, socially appropriate external communication.</p>
        <div class="hero__meta" aria-label="Project summary">
          <span>Campus field exploration</span><span>China–Germany study</span><span>Physical eHMI prototype</span><span>AutomotiveUI 2020</span>
        </div>
        <figure class="hero-figure">
          <img :src="asset('autonomous-delivery-hero.jpg')" alt="Autonomous delivery vehicle traveling through a pedestrian-oriented urban campus" />
        </figure>
      </section>

      <section class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">01 · Research Background &amp; Questions</p><h2>When the driver disappears, how should the vehicle speak?</h2></header>
        <div class="section-body prose">
          <p>Autonomous delivery vehicles share crossings, narrow streets, and campus paths with pedestrians. In these encounters, vehicle motion alone may not explain whether the system has detected a person, who should move first, or what the vehicle is asking the pedestrian to do.</p>
          <p>This project examined communication as a social interaction problem as well as an interface problem. The work asked how an autonomous delivery vehicle could make its intent understandable, how communication stance affected trust and compliance, and how several output channels could be coordinated in a working prototype.</p>
        </div>
        <div class="question-grid" aria-label="Research questions">
          <article><span>RQ1</span><h3>Legibility</h3><p>Which cues help a pedestrian understand the vehicle’s intent and requested action?</p></article>
          <article><span>RQ2</span><h3>Social stance</h3><p>How do polite, neutral, and dominant requests shape compliance, acceptance, and trust?</p></article>
          <article><span>RQ3</span><h3>Context</h3><p>Do responses change between encounter scenarios and participant samples in China and Germany?</p></article>
          <article><span>RQ4</span><h3>Embodiment</h3><p>How can speech, expression, light, sensing, and motion be combined in a physical platform?</p></article>
        </div>
      </section>

      <section class="section-surface"><div class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">02 · Research Evolution</p></header>
        <ol class="research-timeline" aria-label="Research program timeline">
          <li><span>Stage A</span><time>Early collaboration</time><h3>Campus delivery exploration</h3><p>Field-oriented Wizard-of-Oz work and early external-display concepts developed with the Mitsubishi campus-delivery collaboration.</p><small>Evidence retained: concept render and field-test photograph.</small></li>
          <li><span>Stage B</span><time>AutomotiveUI 2020</time><h3>Intercultural video study</h3><p>A China–Germany collaboration tested three communication strategies in crosswalk and street encounters.</p><small>Evidence retained: formal publication metadata and abstract.</small></li>
          <li><span>Stage C</span><time>Master’s thesis · 2021</time><h3>Independent physical prototype</h3><p>The later thesis translated the research into a new vehicle form and a multimodal Arduino-based platform.</p><small>Evidence retained: form render and annotated prototype image.</small></li>
        </ol>
      </div></section>

      <section class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">03 · Initial Research / Wizard-of-Oz Exploration</p></header>
        <figure class="evidence-figure evidence-figure--wide"><img :src="asset('wizard-of-oz-field.jpg')" alt="Small delivery-vehicle model and pedestrian figure on a model street used for early Wizard-of-Oz exploration" /><figcaption><strong>Retained field-study photograph.</strong> A small vehicle and pedestrian figure were used to stage road encounters. No participant count or outcome is inferred from this image.</figcaption></figure>
        <dl class="method-ledger">
          <div><dt>Research purpose</dt><dd>Explore how a delivery vehicle could request, yield, or negotiate movement around pedestrians.</dd></div>
          <div><dt>Method evidence</dt><dd>Wizard-of-Oz setup and scenario staging are supported by the retained photograph and existing project record.</dd></div>
          <div><dt>Evidence boundary</dt><dd>The repository does not contain the original protocol, participant file, interview guide, or coded observations.</dd></div>
        </dl>
      </section>

      <section class="section-surface"><div class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">04 · Communication Strategy Design</p><h2>Varying the social force of the vehicle’s request</h2></header>
        <div class="section-body prose"><p>The published study compared three communication strategies ranging from polite to dominant. This manipulation treated the vehicle’s request as a social act: the requested behavior could remain similar while the degree of deference or pressure changed.</p></div>
        <div class="strategy-scale" aria-label="Communication strategy comparison">
          <article><span>01</span><h3>Polite</h3><p>A deferential request that leaves more social agency with the pedestrian.</p></article>
          <article><span>02</span><h3>Neutral</h3><p>A direct request without the additional deference or pressure of the other conditions.</p></article>
          <article><span>03</span><h3>Dominant</h3><p>A more forceful request that places greater priority on the vehicle’s desired action.</p></article>
        </div>
        <p class="method-caveat">The local archive does not contain the final videos or exact message scripts. These descriptions therefore represent the published experimental factor, not a reconstruction of the stimulus wording.</p>
        <div class="scenario-heading"><p class="mini-label">Scenario matrix</p><h3>Two encounter structures</h3></div>
        <div class="scenario-matrix">
          <div class="scenario-matrix__corner">Vehicle request</div><div class="scenario-matrix__head">Crosswalk</div><div class="scenario-matrix__head">Street encounter</div>
          <div class="scenario-matrix__label">Pedestrian position</div><div>Pedestrian at a marked crossing</div><div>Pedestrian and vehicle meeting on the street</div>
          <div class="scenario-matrix__label">Interaction question</div><div>Would the pedestrian comply when the vehicle requested priority?</div><div>Would the pedestrian make space for the approaching vehicle?</div>
        </div>
      </div></section>

      <section class="section-shell editorial-section intercultural-study">
        <header class="section-heading"><p class="kicker">05 · Intercultural Study — China &amp; Germany</p><h2>A published online video study of strategy, scenario, and cultural context</h2></header>
        <div class="section-body prose">
          <p>The AutomotiveUI 2020 study evaluated the same three communication strategies in two pedestrian–vehicle scenarios. Participants watched scenario videos online and reported their responses. The published abstract identifies compliance, acceptance, and trust as the measured outcomes.</p>
          <p>The formal record reports a Chinese sample of 56 participants and a German sample of 34 participants. These 90 participants belong to this study only; they are not combined with the earlier exploration or the later thesis evaluation.</p>
        </div>
        <div class="study-design" role="img" aria-label="Study design: three strategies and two scenarios shown to Chinese and German samples, measuring compliance, acceptance, and trust">
          <div class="study-design__inputs"><p class="mini-label">Experimental factors</p><strong>3 strategies</strong><span>Polite · Neutral · Dominant</span><strong>2 scenarios</strong><span>Crosswalk · Street</span></div>
          <div class="study-design__arrow" aria-hidden="true">→</div>
          <div class="study-design__samples"><p class="mini-label">Online video samples</p><div><strong>N=56</strong><span>China</span></div><div><strong>N=34</strong><span>Germany</span></div></div>
          <div class="study-design__arrow" aria-hidden="true">→</div>
          <div class="study-design__outcomes"><p class="mini-label">Reported measures</p><span>Compliance</span><span>Acceptance</span><span>Trust</span></div>
        </div>
        <section class="published-findings" aria-labelledby="published-findings-title">
          <div><p class="mini-label">Published findings</p><h3 id="published-findings-title">What the formal record supports</h3></div>
          <ol><li><span>01</span><p>The polite strategy increased compliance in the Chinese sample, but not in the German sample.</p></li><li><span>02</span><p>Polite communication positively affected trust and acceptance in both samples.</p></li><li><span>03</span><p>The results show that a communication strategy cannot be interpreted apart from scenario and cultural context.</p></li></ol>
        </section>
      </section>

      <section class="section-surface"><div class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">06 · Design Framework &amp; Iteration</p><h2>Translating social findings into a new vehicle concept</h2></header>
        <div class="section-body prose"><p>The master’s thesis phase reframed the project as an embodied interaction system. Instead of relying on a single text display, the new concept coordinated vehicle form with visual, auditory, and movement cues. The retained repository documents the final form direction and hardware platform, but not the intermediate sketch set or complete iteration log.</p></div>
        <div class="framework-grid">
          <article><span>01</span><h3>Intent before decoration</h3><p>Every output should clarify what the vehicle has detected, intends to do, or requests from the pedestrian.</p></article>
          <article><span>02</span><h3>Coordinated modalities</h3><p>Expression, speech, light, and motion should reinforce the same interaction state.</p></article>
          <article><span>03</span><h3>Social stance as a variable</h3><p>The vehicle’s tone changes the relationship implied by an otherwise similar request.</p></article>
          <article><span>04</span><h3>Context-sensitive behavior</h3><p>Crossings and oncoming encounters create different expectations about priority and compliance.</p></article>
        </div>
        <figure class="evidence-figure prototype-form"><img :src="asset('prototype-form.png')" alt="Spherical autonomous delivery vehicle form developed for the master's thesis" /><figcaption><strong>Thesis form development.</strong> The retained render documents the independently redesigned vehicle concept. Intermediate sketches and decision records are still needed to show the full iteration history.</figcaption></figure>
      </div></section>

      <section class="section-shell editorial-section physical-prototype">
        <header class="section-heading"><p class="kicker">07 · Physical Prototype &amp; Multimodal Interaction</p><h2>A working platform for sensing, expression, speech, light, and motion</h2></header>
        <div class="section-body prose">
          <p>The thesis prototype combined an Arduino-class controller with ultrasonic sensing, line following, drive wheels, a facial-expression display, a speaker, and an external speech module. The annotated image is the strongest retained evidence of the implemented hardware.</p>
        </div>
        <figure class="evidence-figure evidence-figure--wide prototype-hardware"><img :src="asset('arduino-prototype.png')" alt="Annotated physical autonomous-delivery prototype with ultrasonic sensors, expression display, line sensor, speaker, speech module, wheels, and chassis" /><figcaption><strong>Annotated physical prototype.</strong> Retained labels identify the ultrasonic sensing module, line-following module, expression display, speaker, speech module, wheels, and vehicle chassis.</figcaption></figure>
        <div class="interaction-sequence"><div><p class="mini-label">Documented interaction sequence</p><h3>From environmental cue to coordinated vehicle response</h3></div><ol><li><span>01</span><p>Sense proximity or route position.</p></li><li><span>02</span><p>Select the relevant interaction state.</p></li><li><span>03</span><p>Coordinate expression, speech, light, and movement.</p></li><li><span>04</span><p>Observe pedestrian response and continue or stop.</p></li></ol></div>
      </section>

      <section class="section-surface"><div class="section-shell editorial-section">
        <section class="publications" aria-labelledby="publications-title">
          <div><p class="mini-label">Selected outputs</p><h3 id="publications-title">Publications and thesis record</h3></div>
          <ul>
            <li><span>AutomotiveUI 2020</span><div><strong>Designing Communication Strategies of Autonomous Vehicles with Pedestrians: An Intercultural Study</strong><p>Mirjam Lanzer, Franziska Babel, Fei Yan, Bihan Zhang, Fang You, Jianmin Wang, and Martin Baumann · pp. 122–131</p><a href="https://doi.org/10.1145/3409120.3410653" target="_blank" rel="noreferrer">DOI 10.1145/3409120.3410653 <b aria-hidden="true">↗</b></a></div></li>
            <li><span>CHCI 2019</span><div><strong>Human–Machine Interface Design of an Exterior Display for an Unmanned Delivery Vehicle</strong><p>Conference presentation; complete bibliographic record is listed on the main site.</p></div></li>
            <li><span>Master’s thesis · 2021</span><div><strong>Autonomous-delivery vehicle communication and physical prototype</strong><p>Listed by the site as a Tongji University Outstanding Master’s Thesis; the thesis PDF is not yet stored in this repository.</p></div></li>
          </ul>
          <a class="text-link" :href="`${homeUrl}#publications`">View the full publication record <span aria-hidden="true">→</span></a>
        </section>
      </div></section>
    </article>

    <footer class="footer section-shell"><p>Research case study · evidence reviewed November 2026</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
import ResearchPageTopbar from './components/ResearchPageTopbar.vue'

const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/autonomous-delivery/${filename}`
</script>

<style lang="scss" scoped>
@use './styles/research-detail-system';

.delivery-study {
  --research-accent: #a98bff;
  --delivery-accent-soft: color-mix(in srgb, var(--research-accent) 14%, transparent);
}

.section-surface { border-block: 1px solid var(--research-line); background: var(--research-surface); }
.editorial-section { padding-block: 4.75rem; display: grid; grid-template-columns: minmax(230px, 4fr) minmax(0, 8fr); gap: 2rem clamp(3rem, 7vw, 7rem); }
.section-heading { grid-column: 1; }
.section-body { grid-column: 2; }
.section-heading h2 { max-width: 22rem; }
.section-body > p:first-child { margin-top: 0; }
.section-body > p + p { margin-top: 1rem; }
figure { margin: 0; }
figure img { width: 100%; display: block; }
figcaption strong { color: var(--research-text); font-weight: 600; }

.hero-figure { margin-top: 3rem; border-top: 1px solid var(--research-line); }
.hero-figure img { min-height: 420px; object-fit: cover; image-rendering: auto; }

.question-grid,
.research-timeline,
.strategy-scale,
.framework-grid { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-block: 1px solid var(--research-line); }

.question-grid article,
.research-timeline li,
.strategy-scale article,
.framework-grid article { padding: 1.35rem; border-right: 1px solid var(--research-line); }
.question-grid article:last-child,
.research-timeline li:last-child,
.strategy-scale article:last-child,
.framework-grid article:last-child { border-right: 0; }
.question-grid span,
.research-timeline li > span,
.strategy-scale span,
.framework-grid span { color: var(--research-accent); font: 600 .68rem/1.4 var(--font-mono); }
.question-grid h3,
.research-timeline h3,
.strategy-scale h3,
.framework-grid h3 { margin: 1.25rem 0 .6rem; }
.question-grid p,
.research-timeline p,
.strategy-scale p,
.framework-grid p { color: var(--research-muted); font-size: .8rem; line-height: 1.65; }

.research-timeline { grid-template-columns: repeat(3, minmax(0, 1fr)); list-style: none; }
.research-timeline time { display: block; margin-top: .4rem; color: var(--research-muted); font: 500 .68rem/1.4 var(--font-mono); }
.research-timeline small { display: block; margin-top: 1rem; color: var(--research-muted); font-size: .7rem; line-height: 1.55; }

.evidence-figure { grid-column: 1 / -1; }
.evidence-figure img { border: 1px solid var(--research-line); background: var(--research-surface); object-fit: cover; }
.evidence-figure figcaption { padding-top: .8rem; }
.evidence-figure--wide img { max-height: 680px; object-position: center; }

.method-ledger { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-block: 1px solid var(--research-line); }
.method-ledger > div { padding: 1.2rem; border-right: 1px solid var(--research-line); }
.method-ledger > div:last-child { border-right: 0; }
.method-ledger dt { color: var(--research-accent); font: 600 .68rem/1.4 var(--font-mono); text-transform: uppercase; letter-spacing: .08em; }
.method-ledger dd { margin-top: .55rem; color: var(--research-muted); font-size: .8rem; line-height: 1.65; }

.strategy-scale { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.method-caveat { grid-column: 1 / -1; margin: 0; color: var(--research-muted); font-size: .72rem; line-height: 1.6; }
.scenario-heading { grid-column: 1 / -1; margin-top: 1.5rem; }
.scenario-heading h3 { margin-top: .45rem; font-size: 1.15rem; }
.scenario-matrix { grid-column: 1 / -1; display: grid; grid-template-columns: minmax(150px, .7fr) repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--research-line); border-left: 1px solid var(--research-line); }
.scenario-matrix > div { padding: 1rem; color: var(--research-muted); font-size: .8rem; line-height: 1.55; border-right: 1px solid var(--research-line); border-bottom: 1px solid var(--research-line); }
.scenario-matrix__corner,
.scenario-matrix__head,
.scenario-matrix__label { color: var(--research-text) !important; font-weight: 600; }
.scenario-matrix__head { color: var(--research-accent) !important; }

.study-design { grid-column: 1 / -1; display: grid; grid-template-columns: 1.2fr auto 1fr auto 1fr; align-items: stretch; border-block: 1px solid var(--research-line); }
.study-design__inputs,
.study-design__samples,
.study-design__outcomes { padding: 1.35rem; }
.study-design__inputs strong { display: block; margin-top: .85rem; color: var(--research-text); font-size: .86rem; }
.study-design__inputs > span { color: var(--research-muted); font-size: .76rem; }
.study-design__samples { display: grid; grid-template-columns: 1fr 1fr; gap: .8rem; }
.study-design__samples .mini-label { grid-column: 1 / -1; }
.study-design__samples div { padding-left: .8rem; border-left: 1px solid var(--research-line); }
.study-design__samples strong { display: block; font-size: 1.35rem; }
.study-design__samples span { color: var(--research-muted); font-size: .75rem; }
.study-design__outcomes span { display: block; margin-top: .8rem; color: var(--research-text); font-size: .8rem; }
.study-design__arrow { display: grid; place-items: center; color: var(--research-accent); border-inline: 1px solid var(--research-line); }

.published-findings { grid-column: 1 / -1; display: grid; grid-template-columns: minmax(220px, 4fr) minmax(0, 8fr); gap: 2rem; }
.published-findings h3 { margin-top: .5rem; }
.published-findings ol { list-style: none; border-top: 1px solid var(--research-line); }
.published-findings li { padding: 1rem 0; display: grid; grid-template-columns: 2.5rem 1fr; gap: 1rem; border-bottom: 1px solid var(--research-line); }
.published-findings li span { color: var(--research-accent); font: 600 .68rem var(--font-mono); }
.published-findings li p { color: var(--research-muted); font-size: .82rem; line-height: 1.65; }

.prototype-form img { max-height: 610px; object-fit: contain; }
.prototype-hardware img { max-height: none; object-fit: contain; background: #fff; }

.interaction-sequence { grid-column: 1 / -1; display: grid; grid-template-columns: minmax(220px, 4fr) minmax(0, 8fr); gap: 2rem; }
.interaction-sequence h3 { margin-top: .5rem; }
.interaction-sequence ol { list-style: none; border-top: 1px solid var(--research-line); }
.interaction-sequence li { padding: .85rem 0; display: grid; grid-template-columns: 2.5rem 1fr; border-bottom: 1px solid var(--research-line); }
.interaction-sequence li span { color: var(--research-accent); font: 600 .68rem var(--font-mono); }
.interaction-sequence li p { color: var(--research-muted); font-size: .8rem; }

.publications { grid-column: 1 / -1; display: grid; grid-template-columns: minmax(220px, 4fr) minmax(0, 8fr); gap: 2rem; padding-top: 1rem; }
.publications h3 { margin-top: .5rem; }
.publications ul { list-style: none; border-top: 1px solid var(--research-line); }
.publications li { padding: 1.1rem 0; display: grid; grid-template-columns: 9rem 1fr; gap: 1rem; border-bottom: 1px solid var(--research-line); }
.publications li > span { color: var(--research-accent); font: 600 .68rem/1.4 var(--font-mono); text-transform: uppercase; }
.publications strong { color: var(--research-text); font-size: .86rem; line-height: 1.45; }
.publications li p { margin-top: .35rem; color: var(--research-muted); font-size: .72rem; line-height: 1.55; }
.publications li a { display: inline-block; margin-top: .55rem; color: var(--research-accent); font-size: .72rem; }
.publications .text-link { grid-column: 2; color: var(--research-accent); font-size: .8rem; }

@media (max-width: 900px) {
  .editorial-section { padding-block: 3.5rem; grid-template-columns: 1fr; gap: 1.75rem; }
  .section-heading,
  .section-body { grid-column: 1; }
  .section-heading h2 { max-width: 38rem; }
  .hero-figure img { min-height: 300px; }
  .question-grid,
  .framework-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .question-grid article:nth-child(2),
  .framework-grid article:nth-child(2) { border-right: 0; }
  .question-grid article:nth-child(-n+2),
  .framework-grid article:nth-child(-n+2) { border-bottom: 1px solid var(--research-line); }
  .study-design { grid-template-columns: 1fr; }
  .study-design__arrow { min-height: 36px; transform: rotate(90deg); border-inline: 0; border-block: 1px solid var(--research-line); }
  .published-findings,
  .interaction-sequence,
  .publications { grid-template-columns: 1fr; }
  .publications .text-link { grid-column: 1; }
}

@media (max-width: 620px) {
  .research-timeline,
  .question-grid,
  .strategy-scale,
  .framework-grid,
  .method-ledger { grid-template-columns: 1fr; }
  .research-timeline li,
  .question-grid article,
  .strategy-scale article,
  .framework-grid article,
  .method-ledger > div { padding: 1rem 0; border-right: 0; border-bottom: 1px solid var(--research-line); }
  .research-timeline li:last-child,
  .question-grid article:last-child,
  .strategy-scale article:last-child,
  .framework-grid article:last-child,
  .method-ledger > div:last-child { border-bottom: 0; }
  .scenario-matrix { grid-template-columns: 7.5rem minmax(12rem, 1fr) minmax(12rem, 1fr); overflow-x: auto; }
  .publications li { grid-template-columns: 1fr; gap: .4rem; }
  .prototype-form img { min-height: 300px; object-fit: cover; }
}
</style>
