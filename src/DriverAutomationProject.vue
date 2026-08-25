<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#research-projects`"><span aria-hidden="true">&larr;</span> Back to research</a>
    </header>

    <article>
      <section class="hero shell">
        <div class="eyebrow">Driver–Automation Interaction · Shanghai Auto-Industry Foundation Project</div>
        <h1>Driver Behavior and HMI Strategy under ACC and LKA Automation</h1>
        <p class="lede">
          A scenario-based investigation of how drivers monitor, interpret, and respond to adaptive cruise
          control and lane-keeping automation—especially when traffic conditions push the system toward its boundaries.
        </p>
        <div class="chips"><span>Faculty-appointed Student Project Lead</span><span>10 driving scenarios</span><span>30 participants</span><span>Simulator + road-test grounding</span></div>
        <figure class="hero-figure">
          <img :src="asset('acc-simulator.jpg')" alt="Driver view of an ACC simulator scenario with a lead vehicle" />
          <figcaption>A controlled ACC following scenario used to connect automation behavior, HMI state, and driver response.</figcaption>
        </figure>
      </section>

      <section class="shell two-column">
        <div><p class="kicker">Research question</p><h2>What do drivers need to understand when partial automation changes state or reaches a limit?</h2></div>
        <div class="prose">
          <p>
            ACC and LKA redistribute control rather than remove the driver from the loop. The research therefore
            examined the interaction between system behavior, interface feedback, driver monitoring, and intervention
            across routine and boundary conditions.
          </p>
          <p>
            I served as the faculty-appointed student project lead, developed ten test scenarios, helped define the
            experimental structure, and collected and analyzed behavioral data from thirty participants.
          </p>
        </div>
      </section>

      <section class="metrics-band">
        <div class="shell metric-grid">
          <div><strong>10</strong><span>scenario-based test conditions</span></div>
          <div><strong>30</strong><span>study participants</span></div>
          <div><strong>ACC + LKA</strong><span>longitudinal and lateral automation</span></div>
          <div><strong>3 lenses</strong><span>situation awareness, trust, and workload</span></div>
        </div>
      </section>

      <section class="shell approach">
        <p class="kicker">Research approach</p>
        <h2>From system behavior to measurable human response</h2>
        <ol class="steps">
          <li><span>01</span><div><h3>Ground the study in real systems</h3><p>Compared production-vehicle behavior and HMI patterns to identify recurring states, transitions, and limitations.</p></div></li>
          <li><span>02</span><div><h3>Build a scenario taxonomy</h3><p>Mapped highway and urban conditions across routine use, traffic disturbances, target changes, and system boundaries.</p></div></li>
          <li><span>03</span><div><h3>Operationalize the experiment</h3><p>Converted control conditions into ten repeatable simulator scenarios with observable driver-response points.</p></div></li>
          <li><span>04</span><div><h3>Study drivers in context</h3><p>Collected behavioral and subjective evidence from thirty participants rather than evaluating the interface in isolation.</p></div></li>
          <li><span>05</span><div><h3>Translate evidence into HMI strategy</h3><p>Connected system state, target status, automation limits, and driver action to clearer interface requirements.</p></div></li>
        </ol>
      </section>

      <section class="scenario-section">
        <div class="shell">
          <p class="kicker">Scenario framework</p>
          <h2>Ten scenarios covered normal operation and boundary conditions</h2>
          <div class="roadmap" aria-label="Ten representative ACC and LKA scenario families">
            <div v-for="(scenario, index) in scenarios" :key="scenario" class="scenario">
              <span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ scenario }}</strong>
            </div>
          </div>
          <p class="scenario-note">The framework separated nominal automation from transitions that require renewed attention, interpretation, or intervention.</p>
        </div>
      </section>

      <section class="shell evidence">
        <div>
          <p class="kicker">Experimental evidence</p>
          <h2>A simulator made system transitions repeatable</h2>
          <p class="prose">
            The experimental environment combined a driver-facing simulator, configurable traffic situations,
            interface states, and behavioral observation. This allowed the same critical sequence to be reproduced
            across participants while preserving the temporal relationship between automation and driver action.
          </p>
        </div>
        <div class="evidence-grid">
          <figure><img :src="asset('simulator-rig.jpg')" alt="Physical driving simulator rig with windshield and display mounts" /><figcaption><strong>Physical setup.</strong> A configurable driving-simulation environment for repeatable studies.</figcaption></figure>
          <figure class="data-figure">
            <div class="data-figure__visual" role="img" aria-label="Abstract data streams for driver behavior, vehicle state, and subjective ratings">
              <div><span>Driver behavior</span><i></i><i></i><i></i><i></i></div>
              <div><span>Vehicle state</span><i></i><i></i><i></i><i></i></div>
              <div><span>Subjective ratings</span><i></i><i></i><i></i><i></i></div>
            </div>
            <figcaption><strong>Triangulated evidence.</strong> Driver behavior, vehicle state, and subjective ratings were interpreted together.</figcaption>
          </figure>
        </div>
      </section>

      <section class="evaluation">
        <div class="shell evaluation__inner">
          <div><p class="kicker">Evaluation logic</p><h2>Three human-factors lenses connected interface feedback to driver behavior</h2></div>
          <div class="lens-grid">
            <article><span>01</span><h3>Situation awareness</h3><p>Whether the driver could perceive the system state, understand what it meant, and anticipate what would happen next.</p></article>
            <article><span>02</span><h3>Trust</h3><p>Whether system behavior and feedback supported calibrated reliance rather than over-trust or unnecessary intervention.</p></article>
            <article><span>03</span><h3>Workload</h3><p>Whether monitoring, interpreting, and responding to automation imposed avoidable cognitive or physical demand.</p></article>
          </div>
        </div>
      </section>

      <section class="shell implications">
        <div><p class="kicker">Research contribution</p><h2>A reusable bridge between automation logic and HMI evaluation</h2></div>
        <div class="implication-list">
          <p><span>System</span>Represent automation as changing states, targets, and capabilities—not a single on/off function.</p>
          <p><span>Interface</span>Make current mode, target status, transition, and limitation legible before intervention becomes urgent.</p>
          <p><span>Evaluation</span>Judge an HMI through driver understanding and behavior across scenarios, not visual preference alone.</p>
          <p><span>Evidence</span>Produced a scenario framework, experimental protocol, behavioral dataset, and design recommendations.</p>
        </div>
      </section>

      <section class="disclosure">
        <div class="shell disclosure__inner"><strong>Public research summary</strong><p>Raw participant recordings, partner-specific control parameters, detailed data tables, and internal deliverables are intentionally omitted.</p></div>
      </section>
    </article>

    <footer class="footer shell">
      <p>Interested in this research?</p><a href="mailto:bhannzhang@gmail.com">bhannzhang@gmail.com</a>
      <a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a>
    </footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/driver-automation/${filename}`
const scenarios = [
  'Steady following', 'Vehicle cut-in', 'Vehicle cut-out', 'Target acceleration', 'Target deceleration',
  'Target loss', 'Lane keeping', 'Lane departure', 'Lane change', 'Combined-function transition'
]
</script>

<style lang="scss" scoped>
.case-study {
  --accent: #ff8d66;
  --accent-soft: #ffc8b5;
  min-height: 100vh;
  color: #f8f6f4;
  background: radial-gradient(circle at 78% 6%, rgba(178, 67, 35, .22), transparent 33rem), #0b0b0d;
}
.shell, .topbar { width: min(1120px, calc(100% - 3rem)); margin: 0 auto; }
.topbar { min-height: 80px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,.1); }
.brand { font-weight: 700; letter-spacing: -.02em; }
.back-link { color: #bbb4b1; font-size: .9rem; }
.back-link:hover { color: white; }
.hero { padding: 7rem 0 5rem; }
.eyebrow, .kicker { color: var(--accent-soft); font-size: .75rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
h1 { max-width: 1020px; margin: 1.2rem 0 1.5rem; font-size: clamp(2.7rem, 6.2vw, 5.55rem); line-height: 1; letter-spacing: -.055em; }
h2 { margin-top: .75rem; font-size: clamp(1.8rem, 3.5vw, 3rem); line-height: 1.1; letter-spacing: -.035em; }
.lede { max-width: 830px; color: #c2bcba; font-size: clamp(1.08rem, 2vw, 1.35rem); line-height: 1.7; }
.chips { display: flex; flex-wrap: wrap; gap: .6rem; margin: 2.1rem 0 3rem; }
.chips span { padding: .55rem .85rem; border: 1px solid rgba(255,141,102,.35); border-radius: 999px; color: #ffded3; font-size: .78rem; }
figure { margin: 0; }
figure img { width: 100%; display: block; background: #18171a; }
figcaption { margin-top: .75rem; color: #938c89; font-size: .8rem; line-height: 1.5; }
.hero-figure img { aspect-ratio: 16 / 8.5; object-fit: cover; border-radius: 1.25rem; }
.two-column, .implications { padding: 6rem 0; display: grid; grid-template-columns: .85fr 1.15fr; gap: clamp(3rem, 8vw, 7rem); border-top: 1px solid rgba(255,255,255,.1); }
.prose { color: #b7b0ad; line-height: 1.8; }
.prose p + p { margin-top: 1.25rem; }
.metrics-band { padding: 3rem 0; background: #f2e5df; color: #211713; }
.metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.metric-grid div { min-height: 130px; padding: 1.2rem; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid rgba(33,23,19,.14); }
.metric-grid div:last-child { border-right: 0; }
.metric-grid strong { font-size: clamp(1.5rem, 3vw, 2.6rem); letter-spacing: -.055em; }
.metric-grid span { color: #685852; font-size: .8rem; }
.approach { padding: 6rem 0; }
.steps { margin-top: 3rem; list-style: none; display: grid; grid-template-columns: repeat(5, 1fr); }
.steps li { min-height: 245px; padding: 1.25rem; border-top: 1px solid #754835; border-right: 1px solid rgba(255,255,255,.09); }
.steps li > span, .lens-grid article > span { color: var(--accent); font: 600 .8rem var(--font-mono); }
.steps h3, .lens-grid h3 { margin: 2.8rem 0 .55rem; font-size: 1rem; }
.steps p, .lens-grid p { color: #96908e; font-size: .85rem; line-height: 1.65; }
.scenario-section { padding: 6rem 0; background: #151317; }
.roadmap { margin-top: 3rem; display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid #6b4031; border-left: 1px solid rgba(255,255,255,.08); }
.scenario { min-height: 120px; padding: 1rem; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid rgba(255,255,255,.08); border-bottom: 1px solid rgba(255,255,255,.08); }
.scenario span { color: var(--accent); font: 600 .72rem var(--font-mono); }
.scenario strong { font-size: .9rem; }
.scenario-note { max-width: 720px; margin-top: 2rem; color: #aaa3a0; line-height: 1.7; }
.evidence { padding: 6rem 0; display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(3rem, 7vw, 6rem); }
.evidence .prose { margin-top: 1.5rem; }
.evidence-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.evidence-grid figure { padding: .6rem; background: #171619; border-radius: 1rem; }
.evidence-grid img { aspect-ratio: 4 / 3; object-fit: cover; border-radius: .65rem; }
.evidence-grid figcaption { padding: 0 .35rem .35rem; }
.evidence-grid strong { color: #ded8d5; }
.data-figure { display: flex; flex-direction: column; }
.data-figure__visual { flex: 1; min-height: 0; aspect-ratio: 4 / 3; padding: 1.4rem; display: flex; flex-direction: column; justify-content: center; gap: 1rem; border-radius: .65rem; background: linear-gradient(145deg, #272127, #171a21); }
.data-figure__visual div { display: grid; grid-template-columns: 7.5rem repeat(4, 1fr); align-items: center; gap: .45rem; }
.data-figure__visual span { color: #c9c1be; font-size: .7rem; }
.data-figure__visual i { height: .5rem; border-radius: 999px; background: #443c3b; }
.data-figure__visual div:nth-child(1) i:nth-of-type(2),
.data-figure__visual div:nth-child(1) i:nth-of-type(4),
.data-figure__visual div:nth-child(2) i:nth-of-type(1),
.data-figure__visual div:nth-child(2) i:nth-of-type(3),
.data-figure__visual div:nth-child(3) i:nth-of-type(2),
.data-figure__visual div:nth-child(3) i:nth-of-type(3) { background: var(--accent); }
.evaluation { padding: 6rem 0; background: #f2e5df; color: #211713; }
.evaluation .kicker { color: #9b482d; }
.evaluation__inner { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(3rem, 7vw, 6rem); }
.lens-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.lens-grid article { padding: 1.35rem; border: 1px solid rgba(33,23,19,.15); border-radius: 1rem; background: rgba(255,255,255,.45); }
.lens-grid article > span { color: #9b482d; }
.lens-grid h3 { margin-top: 2.8rem; }
.lens-grid p { color: #675954; }
.implication-list p { padding: 1rem 0; display: grid; grid-template-columns: 7rem 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.11); color: #bbb4b1; line-height: 1.65; }
.implication-list span { color: var(--accent-soft); font-size: .76rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.disclosure { padding: 2.5rem 0; background: #171619; }
.disclosure__inner { display: grid; grid-template-columns: .45fr 1.55fr; gap: 2rem; }
.disclosure__inner strong { color: var(--accent-soft); }
.disclosure__inner p { color: #aaa3a0; }
.footer { padding: 4rem 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.1); }
.footer > p { color: #8f8886; }
.footer > a:not(.back-link) { font-size: clamp(1.4rem, 3vw, 2.4rem); font-weight: 700; letter-spacing: -.04em; }
.footer .back-link { grid-column: 2; }
@media (max-width: 820px) {
  .shell, .topbar { width: min(100% - 2rem, 1120px); }
  .topbar { min-height: 68px; }
  .hero { padding: 4.5rem 0 3.5rem; }
  .two-column, .implications, .evidence, .evaluation__inner { padding: 4rem 0; grid-template-columns: 1fr; gap: 2rem; }
  .metric-grid, .steps, .roadmap, .evidence-grid, .lens-grid { grid-template-columns: 1fr; }
  .metric-grid div { min-height: 105px; border-right: 0; border-bottom: 1px solid rgba(33,23,19,.14); }
  .metric-grid div:last-child { border-bottom: 0; }
  .approach, .scenario-section, .evaluation { padding: 4rem 0; }
  .steps li { min-height: auto; border-right: 0; }
  .steps h3 { margin-top: 1.25rem; }
  .scenario { min-height: 95px; }
  .data-figure__visual { min-height: 230px; }
  .disclosure__inner, .footer { grid-template-columns: 1fr; }
  .footer .back-link { grid-column: auto; }
}
</style>
