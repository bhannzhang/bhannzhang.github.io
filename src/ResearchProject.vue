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
          <figcaption>Autonomous delivery vehicle concept in a pedestrian-oriented campus setting.</figcaption>
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
        <div class="evidence-gallery evidence-gallery--wizard" aria-label="Wizard-of-Oz prototype and field exploration photographs">
          <figure><img :src="asset('wizard-of-oz-field.jpg')" alt="Small delivery-vehicle model and pedestrian figure on a model street used for early Wizard-of-Oz exploration" /><figcaption>Early staged encounter study.</figcaption></figure>
          <figure><img :src="asset('wizard-of-oz-prototype.png')" alt="Cardboard Wizard-of-Oz delivery vehicle prototype shown from the rear and front" /><figcaption>Full-scale Wizard-of-Oz prototype.</figcaption></figure>
          <figure><img :src="asset('wizard-of-oz-campus-test.png')" alt="Covered Wizard-of-Oz delivery vehicle tested with pedestrians and a cyclist on a campus road" /><figcaption>Campus field exploration.</figcaption></figure>
        </div>
        <dl class="method-ledger">
          <div><dt>Research purpose</dt><dd>Explore how a delivery vehicle could request, yield, or negotiate movement around pedestrians.</dd></div>
          <div><dt>Method evidence</dt><dd>Wizard-of-Oz setup and scenario staging are supported by the retained photograph and existing project record.</dd></div>
          <div><dt>Evidence boundary</dt><dd>The repository does not contain the original protocol, participant file, interview guide, or coded observations.</dd></div>
        </dl>
      </section>

      <section class="section-surface"><div class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">04 · Scenario / Communication Strategy Design</p><h2>Two encounters, three communication tones</h2></header>
        <div class="section-body prose"><p>Two pedestrian–vehicle scenarios were tested, each with polite, neutral, and dominant communication tones. Every stimulus was presented in both German and Chinese.</p></div>
        <div class="stimulus-grid" aria-label="German and Chinese communication stimuli">
          <article class="stimulus-scenario">
            <p class="mini-label">A · Head-on Scenario</p>
            <div class="stimulus-row"><strong>Polite</strong><p><span lang="de">Könnten Sie bitte aus dem Weg gehen?</span><span lang="zh-CN">请您让开，好吗？</span></p></div>
            <div class="stimulus-row"><strong>Neutral</strong><p><span lang="de">Gehen Sie bitte aus dem Weg.</span><span lang="zh-CN">请您让开。</span></p></div>
            <div class="stimulus-row"><strong>Dominant</strong><p><span lang="de">Gehen Sie aus dem Weg!</span><span lang="zh-CN">让开！</span></p></div>
          </article>
          <article class="stimulus-scenario">
            <p class="mini-label">B · Crossing Scenario</p>
            <div class="stimulus-row"><strong>Polite</strong><p><span lang="de">Könnten Sie bitte warten?</span><span lang="zh-CN">请您稍等下，好吗？</span></p></div>
            <div class="stimulus-row"><strong>Neutral</strong><p><span lang="de">Warten Sie bitte.</span><span lang="zh-CN">请您稍等。</span></p></div>
            <div class="stimulus-row"><strong>Dominant</strong><p><span lang="de">Warten Sie!</span><span lang="zh-CN">稍等一下！</span></p></div>
          </article>
        </div>
      </div></section>

      <section class="section-shell editorial-section intercultural-study">
        <header class="section-heading"><p class="kicker">05 · Experimental Procedure</p><h2>From randomized video stimuli to interview</h2></header>
        <div class="section-body prose"><p>Participants viewed six short clips in randomized order, completed a questionnaire after each clip, and finished with an open-ended interview. The complete session lasted approximately one hour.</p></div>
        <div class="procedure-flow" aria-label="Experimental procedure">
          <div class="procedure-step"><span>01</span><strong>Participant starts</strong></div>
          <div class="procedure-arrow" aria-hidden="true">→</div>
          <div class="procedure-step"><span>02</span><strong>Randomized video block</strong><small>2 scenarios × 3 strategies<br />6 clips · ~20 s each</small></div>
          <div class="procedure-arrow" aria-hidden="true">→</div>
          <div class="procedure-step"><span>03</span><strong>Questionnaire</strong><small>After each clip · 6–8 min</small></div>
          <div class="procedure-arrow" aria-hidden="true">↻</div>
          <div class="procedure-step"><span>04</span><strong>Complete all conditions</strong><small>Repeat until all 6 stimuli are reviewed</small></div>
          <div class="procedure-arrow" aria-hidden="true">→</div>
          <div class="procedure-step"><span>05</span><strong>Open-ended interview</strong><small>5–10 min</small></div>
          <div class="procedure-arrow" aria-hidden="true">→</div>
          <div class="procedure-step"><span>06</span><strong>End</strong><small>~1 hour total</small></div>
        </div>
        <p class="procedure-note"><span>Randomized order</span> The six video stimuli were shuffled to reduce order effects.</p>
        <div class="section-body prose study-context">
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
        <header class="section-heading"><p class="kicker">06 · Wizard of Oz Insights</p><h2>Observed behavior that shaped later interaction decisions</h2></header>
        <div class="section-body prose"><p>The campus exploration showed how people noticed, interpreted, and moved around the staged vehicle. These observations informed later decisions about state communication, timing, visibility, and route planning.</p></div>
        <div class="insight-grid">
          <article><span>01</span><h3>Children approached</h3><p>Children were especially curious; some watched, approached, or tried to touch the robot and its screen.</p></article>
          <article><span>02</span><h3>Stillness looked like an obstacle</h3><p>Many pedestrians walked around a stationary robot, making a sudden restart potentially confusing or unsafe.</p></article>
          <article><span>03</span><h3>People slowed to interpret</h3><p>Pedestrians often reduced their pace near the robot to observe it and infer its state.</p></article>
          <article><span>04</span><h3>Routes created constraints</h3><p>Bottlenecks, obstacles, steps, and curb-like transitions complicated route planning.</p></article>
          <article><span>05</span><h3>Approach direction mattered</h3><p>A robot approaching from behind was often noticed late; a head-on approach was easier to interpret.</p></article>
          <article><span>06</span><h3>Awareness preceded yielding</h3><p>Most pedestrians yielded only after they had clearly noticed the robot.</p></article>
          <article><span>07</span><h3>Slow motion was ambiguous</h3><p>At crossing-like situations, people could not always tell whether the robot had stopped or was still moving slowly.</p></article>
          <article><span>08</span><h3>Prompts needed timing logic</h3><p>Delayed responses and prompts left active suggested a need for automatic timing and auto-close behavior.</p></article>
        </div>
        <aside class="design-implications">
          <p class="mini-label">Design implications</p>
          <ul><li>Communicate vehicle state clearly.</li><li>Time prompts carefully, especially from behind.</li><li>Treat head-on and crossing encounters differently.</li><li>Plan for bottlenecks and limited visibility.</li><li>Use audible or visual prompts when awareness is low.</li></ul>
        </aside>
      </div></section>

      <section><div class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">Prototype Development · Design Framework &amp; Iteration</p><h2>Translating social findings into a new vehicle concept</h2></header>
        <div class="section-body prose"><p>The master’s thesis phase reframed the project as an embodied interaction system. Instead of relying on a single text display, the new concept coordinated vehicle form with visual, auditory, and movement cues. The retained repository documents the final form direction and hardware platform, but not the intermediate sketch set or complete iteration log.</p></div>
        <div class="framework-grid">
          <article><span>01</span><h3>Intent before decoration</h3><p>Every output should clarify what the vehicle has detected, intends to do, or requests from the pedestrian.</p></article>
          <article><span>02</span><h3>Coordinated modalities</h3><p>Expression, speech, light, and motion should reinforce the same interaction state.</p></article>
          <article><span>03</span><h3>Social stance as a variable</h3><p>The vehicle’s tone changes the relationship implied by an otherwise similar request.</p></article>
          <article><span>04</span><h3>Context-sensitive behavior</h3><p>Crossings and oncoming encounters create different expectations about priority and compliance.</p></article>
        </div>
        <div class="evidence-gallery evidence-gallery--concept" aria-label="Autonomous delivery vehicle concept views and details">
          <figure><img :src="asset('delivery-concept-views.png')" alt="Autonomous delivery vehicle concept shown in perspective, rear, and side views" /><figcaption>Vehicle form and principal views.</figcaption></figure>
          <figure><img :src="asset('delivery-concept-details.png')" alt="Autonomous delivery vehicle concept details showing the roof, sensor housing, and wheel" /><figcaption>Sensor, roof, and wheel details.</figcaption></figure>
        </div>
      </div></section>

      <section class="section-surface"><div class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">07 · Pedestrian Behavior Analysis</p><h2>Decision paths in crossing and head-on encounters</h2></header>
        <div class="section-body prose"><p>The two analyses map how pedestrians detect an approaching vehicle, infer whether it is autonomous, look for acknowledgement, and negotiate who proceeds first. They separate crossing behavior from the simpler forward-looking checks used in a head-on encounter.</p></div>
        <div class="evidence-gallery evidence-gallery--behavior" aria-label="Pedestrian behavior flowcharts for crossing and head-on scenarios">
          <figure><img :src="asset('pedestrian-behavior-crossing.png')" alt="Flowchart of pedestrian decisions in a crossing scenario" /><figcaption>Crossing scenario: detection, acknowledgement, and yielding decisions.</figcaption></figure>
          <figure><img :src="asset('pedestrian-behavior-head-on.png')" alt="Flowchart of pedestrian decisions in a head-on road encounter" /><figcaption>Head-on scenario: forward awareness, acknowledgement, and priority.</figcaption></figure>
        </div>
      </div></section>

      <section class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">08 · Expression Display Design</p><h2>Seven display states for intent and social feedback</h2></header>
        <div class="section-body prose"><p>The LED matrix used distinct facial and symbolic patterns to communicate normal operation, stopping, priority, maintenance, gratitude, and yielding. Prototype photographs connect each pattern to its implemented display state.</p></div>
        <figure class="evidence-figure expression-display"><img :src="asset('expression-display-design.png')" alt="Seven LED matrix expression patterns, prototype displays, and their intended meanings" /><figcaption>Expression patterns, prototype output, and intended meanings.</figcaption></figure>
      </section>

      <section class="section-shell editorial-section">
        <header class="section-heading"><p class="kicker">09 · Information Control Strategy Requirements</p><h2>Matching communication content to encounter stage</h2></header>
        <div class="section-body prose"><p>Each scenario was decomposed into driving, warning, noticing, and interaction stages. The diagrams connect those stages to regular driving information, pedestrian warnings, and explicit interaction messages.</p></div>
        <div class="evidence-gallery evidence-gallery--requirements" aria-label="Information control requirements for two encounter scenarios">
          <figure><img :src="asset('info-control-crossing.png')" alt="Crossing scenario stages and information control parameters" /><figcaption>Crossing scenario: stage evolution and required information.</figcaption></figure>
          <figure><img :src="asset('info-control-head-on.png')" alt="Head-on scenario stages and information control parameters" /><figcaption>Head-on scenario: stage evolution and required information.</figcaption></figure>
        </div>
      </section>

      <section class="section-shell editorial-section physical-prototype">
        <header class="section-heading"><p class="kicker">10 · Arduino Implementation</p><h2>A working platform for sensing, expression, speech, light, and motion</h2></header>
        <div class="section-body prose">
          <p>The thesis prototype combined an Arduino-class controller with ultrasonic sensing, line following, drive wheels, a facial-expression display, a speaker, and an external speech module. The annotated photographs document the implemented hardware and drive base.</p>
        </div>
        <div class="evidence-gallery evidence-gallery--hardware" aria-label="Annotated prototype hardware photographs">
          <figure><img :src="asset('prototype-hardware-overview.png')" alt="Annotated prototype overview showing the ultrasonic sensor, screen, patrol module, speaker, speech module, wheels, and vehicle base" /><figcaption>Upper assembly and multimodal interface components.</figcaption></figure>
          <figure><img :src="asset('prototype-drive-base.png')" alt="Annotated underside of the prototype showing the left and right DC motors and independent power supply" /><figcaption>Drive base, motors, and independent power supply.</figcaption></figure>
        </div>
        <div class="interaction-sequence"><div><p class="mini-label">Documented interaction sequence</p><h3>From environmental cue to coordinated vehicle response</h3></div><ol><li><span>01</span><p>Sense proximity or route position.</p></li><li><span>02</span><p>Select the relevant interaction state.</p></li><li><span>03</span><p>Coordinate expression, speech, light, and movement.</p></li><li><span>04</span><p>Observe pedestrian response and continue or stop.</p></li></ol></div>
        <div class="code-showcase"><div><p class="mini-label">Arduino implementation</p><h3>Distance-triggered motion, speech, and expression control</h3><p>The retained controller code coordinates distance sensing, drive speed, audio playback, and LED-matrix states.</p></div><pre tabindex="0" aria-label="Arduino controller source code"><code>{{ controllerCode }}</code></pre></div>
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
import controllerCode from './autonomous-delivery-controller.txt?raw'

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
figcaption { padding-top: .65rem; color: var(--research-muted); font-size: .7rem; line-height: 1.5; }

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
.evidence-figure--wide img { max-height: 680px; object-position: center; }
.evidence-gallery { grid-column: 1 / -1; display: grid; gap: .75rem; }
.evidence-gallery figure { min-width: 0; }
.evidence-gallery img { height: 100%; border: 1px solid var(--research-line); background: var(--research-surface); object-fit: cover; }
.evidence-gallery--wizard { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.evidence-gallery--wizard img { aspect-ratio: 4 / 3; }
.evidence-gallery--concept { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.evidence-gallery--concept img { aspect-ratio: 2.1 / 1; }
.evidence-gallery--hardware,
.evidence-gallery--behavior,
.evidence-gallery--requirements { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.evidence-gallery--hardware img { aspect-ratio: 1.85 / 1; object-fit: contain; background: #fff; }
.evidence-gallery--behavior img { height: min(72vw, 920px); object-fit: contain; object-position: top center; background: #0b0f14; }
.evidence-gallery--requirements img { aspect-ratio: 1.78 / 1; object-fit: contain; background: #0b0f14; }
.expression-display img { aspect-ratio: 1.92 / 1; object-fit: contain; background: #0b0f14; }

.method-ledger { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-block: 1px solid var(--research-line); }
.method-ledger > div { padding: 1.2rem; border-right: 1px solid var(--research-line); }
.method-ledger > div:last-child { border-right: 0; }
.method-ledger dt { color: var(--research-accent); font: 600 .68rem/1.4 var(--font-mono); text-transform: uppercase; letter-spacing: .08em; }
.method-ledger dd { margin-top: .55rem; color: var(--research-muted); font-size: .8rem; line-height: 1.65; }

.strategy-scale { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.stimulus-grid { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-block: 1px solid var(--research-line); }
.stimulus-scenario { padding: 1.25rem; }
.stimulus-scenario + .stimulus-scenario { border-left: 1px solid var(--research-line); }
.stimulus-row { display: grid; grid-template-columns: 5.5rem minmax(0, 1fr); gap: 1rem; padding: 1rem 0; border-bottom: 1px solid color-mix(in srgb, var(--research-line) 70%, transparent); }
.stimulus-row:last-child { border-bottom: 0; }
.stimulus-row strong { color: var(--research-accent); font: 600 .68rem/1.5 var(--font-mono); text-transform: uppercase; }
.stimulus-row p { margin: 0; }
.stimulus-row span { display: block; color: var(--research-text); font-size: .82rem; line-height: 1.55; }
.stimulus-row span + span { margin-top: .28rem; color: var(--research-muted); }

.procedure-flow { grid-column: 1 / -1; display: grid; grid-template-columns: 1fr auto 1.25fr auto 1fr auto 1.2fr auto 1fr auto .7fr; align-items: stretch; border-block: 1px solid var(--research-line); }
.procedure-step { padding: 1rem .85rem; min-height: 8.5rem; }
.procedure-step > span { display: block; color: var(--research-accent); font: 600 .66rem var(--font-mono); }
.procedure-step strong { display: block; margin-top: 1.25rem; font-size: .78rem; line-height: 1.4; }
.procedure-step small { display: block; margin-top: .45rem; color: var(--research-muted); font-size: .66rem; line-height: 1.5; }
.procedure-arrow { display: grid; place-items: center; width: 1.5rem; color: var(--research-accent); border-inline: 1px solid var(--research-line); }
.procedure-note { grid-column: 1 / -1; margin: 0; color: var(--research-muted); font-size: .72rem; }
.procedure-note span { margin-right: .65rem; color: var(--research-accent); font: 600 .66rem var(--font-mono); text-transform: uppercase; }
.study-context { grid-column: 1 / -1; max-width: 54rem; }

.insight-grid { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-block: 1px solid var(--research-line); }
.insight-grid article { padding: 1.1rem; border-right: 1px solid var(--research-line); border-bottom: 1px solid var(--research-line); }
.insight-grid article:nth-child(4n) { border-right: 0; }
.insight-grid article:nth-last-child(-n+4) { border-bottom: 0; }
.insight-grid span { color: var(--research-accent); font: 600 .66rem var(--font-mono); }
.insight-grid h3 { margin: .8rem 0 .4rem; font-size: .88rem; }
.insight-grid p { color: var(--research-muted); font-size: .72rem; line-height: 1.55; }
.design-implications { grid-column: 1 / -1; display: grid; grid-template-columns: 12rem 1fr; gap: 1.5rem; align-items: start; }
.design-implications ul { display: flex; flex-wrap: wrap; gap: .55rem 1.5rem; list-style: none; }
.design-implications li { color: var(--research-muted); font-size: .74rem; line-height: 1.5; }
.design-implications li::before { content: '→'; margin-right: .45rem; color: var(--research-accent); }
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

.prototype-hardware img { max-height: none; object-fit: contain; background: #fff; }
.code-showcase { grid-column: 1 / -1; display: grid; grid-template-columns: minmax(220px, 4fr) minmax(0, 8fr); gap: 2rem; padding-block: 1.2rem; border-block: 1px solid var(--research-line); }
.code-showcase h3 { margin: .45rem 0; font-size: 1rem; }
.code-showcase p:last-child { color: var(--research-muted); font-size: .76rem; line-height: 1.6; }
.code-showcase pre { max-height: 30rem; margin: 0; padding: 1.1rem; overflow: auto; overscroll-behavior: contain; border: 1px solid var(--research-line); background: color-mix(in srgb, var(--research-surface) 78%, #000); color: var(--research-text); font: 500 .7rem/1.65 var(--font-mono); tab-size: 2; white-space: pre; }
.code-showcase pre:focus-visible { outline: 1px solid var(--research-accent); outline-offset: 2px; }

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
  .publications,
  .code-showcase { grid-template-columns: 1fr; }
  .publications .text-link { grid-column: 1; }
  .procedure-flow { grid-template-columns: 1fr; }
  .procedure-step { min-height: 0; }
  .procedure-arrow { width: auto; min-height: 2rem; transform: rotate(90deg); border-inline: 0; border-block: 1px solid var(--research-line); }
  .insight-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .insight-grid article:nth-child(4n) { border-right: 1px solid var(--research-line); }
  .insight-grid article:nth-child(2n) { border-right: 0; }
  .insight-grid article:nth-last-child(-n+4) { border-bottom: 1px solid var(--research-line); }
  .insight-grid article:nth-last-child(-n+2) { border-bottom: 0; }
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
  .evidence-gallery--wizard,
  .evidence-gallery--concept,
  .evidence-gallery--hardware,
  .evidence-gallery--behavior,
  .evidence-gallery--requirements,
  .stimulus-grid,
  .insight-grid { grid-template-columns: 1fr; }
  .stimulus-scenario + .stimulus-scenario { border-left: 0; border-top: 1px solid var(--research-line); }
  .insight-grid article,
  .insight-grid article:nth-child(2n),
  .insight-grid article:nth-child(4n),
  .insight-grid article:nth-last-child(-n+4) { border-right: 0; border-bottom: 1px solid var(--research-line); }
  .insight-grid article:last-child { border-bottom: 0; }
  .design-implications { grid-template-columns: 1fr; gap: .8rem; }
  .evidence-gallery--behavior img { height: auto; max-height: none; }
}
</style>
