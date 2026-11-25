<template>
  <main class="case-study">
    <ResearchPageTopbar :home-url="homeUrl" />

    <article>
      <section class="hero shell">
        <div class="eyebrow">Driver–Automation Interaction · Shanghai Auto-Industry Foundation Project</div>
        <h1>Making Driver Assistance Legible</h1>
        <p class="lede">
          A research and HMI design project connecting natural driving behavior, vehicle benchmarks, and
          interface concepts for adaptive cruise control (ACC) and lane assistance (LKA/LDW).
        </p>
        <div class="chips"><span>2017–2019</span><span>ACC + LKA/LDW</span><span>32 drivers in the natural-driving dataset</span><span>Road tests + simulator</span></div>
        <figure class="hero-figure">
          <img :src="asset('acc-simulator.jpg')" alt="Driver view of an ACC simulator scenario with a lead vehicle" />
          <figcaption>A following scenario in the driving simulator, linking vehicle behavior with what the driver can see.</figcaption>
        </figure>
      </section>

      <section class="shell two-column">
        <div><p class="kicker">01 · Project context</p><h2>When assistance changes state, what does the driver know?</h2></div>
        <div class="prose">
          <p>
            ACC manages speed and following distance; lane assistance responds to the vehicle's position on the road.
            Both can change behavior as traffic, targets, and road conditions change. The interface has to make those
            changes understandable while the driver remains responsible for the journey.
          </p>
          <p>
            This collaboration moved from natural-driving data and vehicle tests to scenario design, interface
            concepts, and a driving-simulator platform. It examined how system feedback and driver behavior meet
            during routine use and safety-relevant transitions.
          </p>
        </div>
      </section>

      <section class="metrics-band">
        <div class="shell metric-grid">
          <div><strong>32</strong><span>drivers in the natural-driving dataset</span></div>
          <div><strong>ACC</strong><span>longitudinal control and target changes</span></div>
          <div><strong>LKA / LDW</strong><span>lane support and departure feedback</span></div>
          <div><strong>HMI</strong><span>instrument cluster, HUD, and warning concepts</span></div>
        </div>
      </section>

      <section class="shell approach">
        <p class="kicker">02 · Research pipeline</p>
        <h2>From observed driving to interface decisions</h2>
        <div class="workflow-chart" aria-label="Six-stage research and design workflow">
          <div class="workflow-chart__inner">
            <div class="workflow-axis"><span>Research workstream</span><span v-for="(stage, index) in workflowStages" :key="stage.phase">{{ String(index + 1).padStart(2, '0') }}<small>{{ stage.phase }}</small></span></div>
            <ol class="workflow-steps">
              <li v-for="(stage, index) in workflowStages" :key="stage.title" :style="{ '--stage-column': index + 2 }">
                <div class="workflow-task"><h3>{{ stage.title }}</h3><p>{{ stage.detail }}</p></div>
                <span class="workflow-bar" :aria-label="`Phase ${index + 1}: ${stage.title}`">{{ String(index + 1).padStart(2, '0') }}</span>
              </li>
            </ol>
          </div>
        </div>
        <p class="workflow-note">Research phases are shown in sequence, not to calendar scale.</p>
      </section>

      <section class="scenario-section">
        <div class="shell">
          <p class="kicker">03 · Scenario taxonomy</p>
          <h2>Organizing the moments that change driver attention</h2>
          <p class="scenario-note">A ten-task ACC record captured representative experiences. The broader ACC and LKA maps also covered target transitions, complex traffic, road geometry, and driver intervention.</p>
          <div class="roadmap" aria-label="Four families of ACC and lane-assistance scenarios">
            <div v-for="(scenario, index) in scenarios" :key="scenario.title" class="scenario">
              <span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ scenario.title }}</strong><p>{{ scenario.examples }}</p>
            </div>
          </div>
          <p class="scenario-note"><strong>Two linked systems:</strong> ACC scenarios followed speed, distance, and target selection. LKA/LDW scenarios followed lane position, departure, guidance, and intentional lane changes.</p>
          <div class="scenario-maps">
            <article v-for="map in scenarioMaps" :key="map.system" class="scenario-map">
              <header><span>{{ map.system }}</span><h3>{{ map.title }}</h3></header>
              <div class="scenario-branch">
                <h4>Highway</h4>
                <ul><li v-for="item in map.highway" :key="item">{{ item }}</li></ul>
              </div>
              <div class="scenario-branch">
                <h4>Urban roads</h4>
                <ul><li v-for="item in map.urban" :key="item">{{ item }}</li></ul>
                <div class="scenario-subbranch">
                  <h5>Complex-area variations</h5>
                  <p v-if="map.complexNote">{{ map.complexNote }}</p>
                  <ul><li v-for="item in map.complex" :key="item">{{ item }}</li></ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="shell evidence benchmark">
        <div>
          <p class="kicker">04 · Vehicle benchmarking</p>
          <h2>Compare what the car does with what the interface says</h2>
          <p class="prose">
            Road and closed-course work compared Tesla Model X and Volvo S90 behavior with the design needs of an
            SAIC engineering vehicle. The team examined following, cut-in, cut-out, and lane-departure cases: when a
            target was detected, when the car reacted, and when the HMI changed.
          </p>
          <p class="prose">Time headway (THW) and time to collision (TTC) described longitudinal situations. Distance and time to the lane line (DTLC and TTLC) described lateral ones.</p>
        </div>
        <div class="event-strip" aria-label="Sequence of a vehicle cut-in event">
          <div><span>01</span><strong>Traffic event</strong><small>A vehicle enters the lane</small></div>
          <div><span>02</span><strong>System response</strong><small>Target and control state change</small></div>
          <div><span>03</span><strong>HMI feedback</strong><small>The driver sees the new state</small></div>
          <div><span>04</span><strong>Driver response</strong><small>Monitoring or intervention</small></div>
        </div>
      </section>

      <section class="evaluation">
        <div class="shell evaluation__inner">
          <div><p class="kicker">05 · HMI requirements</p><h2>Turn system signals into answers a driver can use</h2></div>
          <div class="requirement-list">
            <p><strong>Is the function active?</strong><span>Distinguish activation, standby, cancellation, and unavailability.</span></p>
            <p><strong>What is the car responding to?</strong><span>Show the tracked target and following relationship when they change.</span></p>
            <p><strong>What will happen next?</strong><span>Signal deceleration, guidance, or a change in automation behavior.</span></p>
            <p><strong>How urgent is it?</strong><span>Match warning strength and channel to the situation.</span></p>
            <p><strong>What should I do?</strong><span>Clarify when the driver needs to monitor, adjust, or take control.</span></p>
          </div>
        </div>
      </section>

      <section class="shell evidence prototype-section">
        <div><p class="kicker">06 · Interface concept</p><h2>Coordinating state, target, and warning cues</h2></div>
        <div class="prose"><p>The ACC and lane-assistance concepts brought activation, target status, guidance, warning, and unavailable states into a shared visual language across the cluster and HUD. The design explored how feedback could prepare a driver for a system response.</p><p>Detailed iteration boards and partner-specific interface screens are being reviewed for a public-safe excerpt.</p></div>
        <figure class="media-placeholder"><div role="img" aria-label="Reserved space for an approved and translated HMI prototype excerpt"><span>HMI prototype excerpt</span><strong>Image pending review</strong><small>Approved crop or masked version · English labels</small></div><figcaption>Reserved for a selected ACC or lane-assistance state sequence.</figcaption></figure>
      </section>

      <section class="scenario-section methods-section">
        <div class="shell">
          <p class="kicker">07 · Evaluation design</p><h2>Study the driver alongside the vehicle</h2>
          <p class="scenario-note">The project combined vehicle observations and road-test experiences with protocols for controlled HMI evaluation. The simulator documents specify proposed comparisons and measures.</p>
          <div class="method-grid">
            <article><span>Field experience</span><h3>Real vehicles and task scripts</h3><p>ACC activation, following-distance adjustment, cut-in, cut-out, lane change, and lane-departure tasks supported observation and interview.</p></article>
            <article><span>Simulator protocol</span><h3>Repeatable HMI comparisons</h3><p>The proposed study compared an original cluster, a revised cluster, and a revised cluster with a windshield HUD.</p></article>
            <article><span>Measures</span><h3>Behavior and interpretation</h3><p>Plans included vehicle and driver actions, situation awareness, trust, workload, usability, and open-ended feedback.</p></article>
          </div>
          <figure class="simulator-figure"><img :src="asset('simulator-rig.jpg')" alt="Physical driving simulator rig with display mounts" /><figcaption>Driving-simulator setup for repeatable automation scenarios.</figcaption></figure>
        </div>
      </section>

      <section class="shell implications">
        <div><p class="kicker">08 · Outputs and reflection</p><h2>Connecting control logic with human understanding</h2></div>
        <div class="implication-list">
          <p><span>Scenarios</span>ACC and LKA/LDW maps spanning routine use, target changes, limits, and intervention.</p>
          <p><span>Evidence</span>Natural-driving analysis, vehicle benchmarking, and observed driver responses.</p>
          <p><span>Design</span>Cluster and HUD concepts for mode, target, guidance, and warning states.</p>
          <p><span>Methods</span>Road-test scripts, interviews, and a simulator evaluation protocol.</p>
          <p><span>Learning</span>Interface timing needs to be considered alongside vehicle response and the driver's view of the road.</p>
        </div>
      </section>

    </article>

    <footer class="footer shell">
      <p>Interested in this research?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a>
      <a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a>
    </footer>
  </main>
</template>

<script setup>
import ResearchPageTopbar from './components/ResearchPageTopbar.vue'

const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/driver-automation/${filename}`
const scenarios = [
  { title: 'Routine operation', examples: 'Activation · steady following · lane keeping' },
  { title: 'Target transitions', examples: 'Cut-in · cut-out · target acceleration' },
  { title: 'System boundaries', examples: 'Curves · congestion · obstacles · unavailable states' },
  { title: 'Driver intervention', examples: 'Braking · lane change · steering override' },
]
const workflowStages = [
  { phase: 'Evidence', title: 'China-FOT naturalistic driving data analysis', detail: 'Recorded driving and vehicle context' },
  { phase: 'Scenarios', title: 'Scenario and hazardous-condition extraction', detail: 'Transitions, critical events, system limits' },
  { phase: 'Benchmark', title: 'Vehicle benchmarking', detail: 'Tesla Model X · Volvo S90 · SAIC engineering vehicle' },
  { phase: 'Analysis', title: 'Driver behavior and vehicle-control analysis', detail: 'Monitoring, intervention, and control response' },
  { phase: 'Design', title: 'HMI information architecture and prototype design', detail: 'Mode, target, guidance, and warnings' },
  { phase: 'Evaluation', title: 'Real-vehicle experience and simulator validation', detail: 'Road observations and proposed simulator protocol' },
]
const scenarioMaps = [
  {
    system: 'ACC', title: 'Adaptive Cruise Control',
    highway: [
      'Activate ACC while driving on a highway',
      'No lead vehicle ahead',
      'Lead vehicle ahead',
      'With no lead target, a vehicle cuts in from an adjacent lane (straight-road or lane-change setting)',
      'With no lead target, approach a slower vehicle ahead',
      'Lead vehicle cuts out, leaving no lead target (straight-road or lane-change setting)',
      'Lead vehicle accelerates away',
      'Toll plaza ahead',
      'Switch ACC off while driving on a highway',
    ],
    urban: [
      'Enter a congested road segment',
      'Drive through a curve',
      'Drive on a slope',
      'Adjacent vehicle cuts in, changing the lead target',
      'Lead vehicle cuts out, changing the lead target',
    ],
    complex: [
      'Pedestrians, non-motorized vehicles, or cars ahead',
      'Obstacle ahead',
      'Traffic signal or sign ahead',
      'Ego vehicle changes lanes while a vehicle approaches from behind',
    ],
  },
  {
    system: 'LKA', title: 'Lane Keeping Assistance',
    highway: [
      'Activate LKA while driving on a highway',
      'Drift left or right on a straight road',
      'Drift left or right, then decide to change lanes',
      'Change lanes without activating LKA',
      'Switch LKA off while driving on a highway',
    ],
    urban: [
      'Drift left or right on a curved road',
      'Drift left or right on a curve, then decide to change lanes',
      'Change lanes on a curve without activating LKA',
    ],
    complexNote: 'Each context appears with left/right lane drift on both straight and curved roads.',
    complex: [
      'Pedestrians, non-motorized vehicles, or cars ahead',
      'Obstacle ahead',
      'Traffic signal or sign ahead',
      'Vehicle approaching from behind',
    ],
  },
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
.workflow-chart { margin-top: 3rem; overflow-x: auto; border: 1px solid rgba(255,255,255,.12); border-radius: .75rem; }
.workflow-chart__inner { min-width: 850px; }
.workflow-axis, .workflow-steps li { display: grid; grid-template-columns: minmax(260px, 2fr) repeat(6, minmax(0, 1fr)); }
.workflow-axis { background: #252024; }
.workflow-axis > span { padding: .9rem .7rem; border-right: 1px solid rgba(255,255,255,.12); color: var(--accent-soft); font: 600 .78rem var(--font-mono); text-align: center; }
.workflow-axis > span:first-child { color: #d8d0cc; text-align: left; text-transform: uppercase; }
.workflow-axis small { display: block; margin-top: .35rem; color: #aaa3a0; font-family: var(--font-mono); font-size: .7rem; font-weight: 400; }
.workflow-steps { display: block; margin: 0; padding: 0; list-style: none; }
.workflow-steps li { min-height: 94px; border-top: 1px solid rgba(255,255,255,.1); background: #141215; }
.workflow-task { padding: .9rem 1rem; border-right: 1px solid rgba(255,255,255,.12); }
.workflow-task h3 { margin: 0 0 .25rem; font-size: .88rem; line-height: 1.3; }
.workflow-task p { margin: 0; color: #aaa3a0; font-size: .75rem; line-height: 1.4; }
.workflow-bar { grid-column: var(--stage-column); align-self: center; display: flex; align-items: center; min-height: 42px; margin: .4rem .25rem; padding: .6rem .8rem; clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%); background: rgba(255,141,102,.7); color: #211713; font: 700 .8rem var(--font-mono); }
.workflow-note { margin: .7rem 0 0; color: #96908e; font-size: .75rem; }
.scenario-section { padding: 6rem 0; background: #151317; }
.roadmap { margin-top: 3rem; display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid #6b4031; border-left: 1px solid rgba(255,255,255,.08); }
.scenario { min-height: 190px; padding: 1.2rem; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,.08); border-bottom: 1px solid rgba(255,255,255,.08); }
.scenario span { color: var(--accent); font: 600 .72rem var(--font-mono); }
.scenario strong { margin-top: 2rem; font-size: 1rem; }
.scenario p { color: #aaa3a0; font-size: .8rem; line-height: 1.6; }
.scenario-note { max-width: 850px; margin-top: 2rem; color: #aaa3a0; line-height: 1.7; }
.scenario-note strong { color: #f8f6f4; }
.scenario-maps { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; margin-top: 3rem; }
.scenario-map { padding: 1.5rem; border: 1px solid rgba(255,141,102,.25); border-radius: 1rem; background: #1c191d; }
.scenario-map header { display: flex; align-items: baseline; gap: 1rem; padding-bottom: 1.2rem; border-bottom: 1px solid rgba(255,255,255,.12); }
.scenario-map header span { color: var(--accent); font: 700 1.5rem var(--font-mono); }
.scenario-map h3 { margin: 0; font-size: 1.15rem; }
.scenario-branch { margin: 1.4rem 0 0 .35rem; padding: 0 0 0 1.2rem; border-left: 1px solid rgba(255,141,102,.5); }
.scenario-branch h4, .scenario-subbranch h5 { position: relative; margin: 0 0 .6rem; color: var(--accent-soft); font-size: .84rem; letter-spacing: .05em; text-transform: uppercase; }
.scenario-branch h4::before, .scenario-subbranch h5::before { content: ''; position: absolute; left: -1.55rem; top: .3rem; width: .55rem; height: .55rem; border-radius: 50%; background: var(--accent); }
.scenario-branch ul { margin: 0; padding: 0; list-style: none; }
.scenario-branch li { padding: .55rem 0; border-bottom: 1px solid rgba(255,255,255,.08); color: #c5bfbc; font-size: .84rem; line-height: 1.5; }
.scenario-subbranch { margin-top: 1rem; padding: .9rem 0 0 1rem; border-left: 1px solid rgba(255,141,102,.3); }
.scenario-subbranch h5::before { left: -1.35rem; width: .4rem; height: .4rem; }
.scenario-subbranch p { margin: 0 0 .3rem; color: #96908e; font-size: .78rem; line-height: 1.5; }
.evidence { padding: 6rem 0; display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(3rem, 7vw, 6rem); }
.evidence .prose { margin-top: 1.5rem; }
.benchmark { grid-template-columns: .85fr 1.15fr; }
.event-strip { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--accent); }
.event-strip div { min-height: 130px; padding: 1.2rem; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,.1); border-bottom: 1px solid rgba(255,255,255,.1); }
.event-strip div:nth-child(2n) { border-right: 0; }
.event-strip span { color: var(--accent); font: 600 .75rem var(--font-mono); }
.event-strip strong { margin-top: 1rem; }
.event-strip small { margin-top: .4rem; color: #aaa3a0; }
.evaluation { padding: 6rem 0; background: #f2e5df; color: #211713; }
.evaluation .kicker { color: #9b482d; }
.evaluation__inner { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(3rem, 7vw, 6rem); }
.requirement-list p { display: grid; grid-template-columns: .8fr 1.2fr; gap: 1rem; margin: 0; padding: 1rem 0; border-top: 1px solid rgba(33,23,19,.18); line-height: 1.6; }
.requirement-list span { color: #675954; }
.prototype-section .media-placeholder { grid-column: 1 / -1; }
.media-placeholder > div { min-height: 320px; padding: 2rem; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; border: 1px dashed rgba(255,200,181,.4); border-radius: 1rem; background: linear-gradient(135deg, #221b1c, #151417); }
.media-placeholder span { color: var(--accent); font: 600 .72rem var(--font-mono); letter-spacing: .12em; text-transform: uppercase; }
.media-placeholder strong { margin: 1rem 0 .5rem; font-size: clamp(1.5rem, 3vw, 2.5rem); }
.media-placeholder small { color: #aaa3a0; }
.method-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-top: 3rem; }
.method-grid article { padding: 1.4rem; border: 1px solid rgba(255,255,255,.1); border-radius: 1rem; background: rgba(255,255,255,.025); }
.method-grid span { color: var(--accent); font: 600 .75rem var(--font-mono); text-transform: uppercase; }
.method-grid h3 { margin: 1.4rem 0 .5rem; }
.method-grid p { margin-bottom: 0; color: #aaa3a0; font-size: .88rem; line-height: 1.65; }
.simulator-figure { margin-top: 2rem; }
.simulator-figure img { aspect-ratio: 16 / 8; object-fit: cover; border-radius: 1rem; }
.implication-list p { padding: 1rem 0; display: grid; grid-template-columns: 7rem 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.11); color: #bbb4b1; line-height: 1.65; }
.implication-list span { color: var(--accent-soft); font-size: .76rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
.footer { padding: 4rem 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.1); }
.footer > p { color: #8f8886; }
.footer > a:not(.back-link) { font-size: clamp(1.4rem, 3vw, 2.4rem); font-weight: 700; letter-spacing: -.04em; }
.footer .back-link { grid-column: 2; }
@media (max-width: 820px) {
  .shell, .topbar { width: min(100% - 2rem, 1120px); }
  .topbar { min-height: 68px; }
  .hero { padding: 4.5rem 0 3.5rem; }
  .two-column, .implications, .evidence, .evaluation__inner { padding: 4rem 0; grid-template-columns: 1fr; gap: 2rem; }
  .metric-grid, .roadmap, .method-grid { grid-template-columns: 1fr 1fr; }
  .metric-grid div { min-height: 105px; border-right: 0; border-bottom: 1px solid rgba(33,23,19,.14); }
  .metric-grid div:last-child { border-bottom: 0; }
  .approach, .scenario-section, .evaluation { padding: 4rem 0; }
  .scenario { min-height: 160px; }
  .scenario-maps { grid-template-columns: 1fr; }
  .prototype-section .media-placeholder { grid-column: auto; }
  .footer { grid-template-columns: 1fr; }
  .footer .back-link { grid-column: auto; }
}
@media (max-width: 560px) {
  .metric-grid, .roadmap, .event-strip, .method-grid, .requirement-list p { grid-template-columns: 1fr; }
  .metric-grid div, .scenario, .event-strip div { border-right: 0; }
  .scenario, .event-strip div { min-height: auto; }
  .requirement-list p { gap: .4rem; }
  .simulator-figure img { aspect-ratio: 4 / 3; }
}
</style>

<style lang="scss" scoped>
@use './styles/research-detail-system';
</style>
