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
              <li v-for="(stage, index) in workflowStages" :key="stage.title" :style="{ '--stage-offset': `${index * 14.5}%` }">
                <div class="workflow-task"><p>{{ stage.detail }}</p></div>
                <span class="workflow-bar"><small>{{ String(index + 1).padStart(2, '0') }}</small><strong>{{ stage.title }}</strong></span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section class="scenario-section">
        <div class="shell">
          <p class="kicker">03 · Scenario taxonomy</p>
          <h2>Organizing the moments that change driver attention</h2>
          <p class="scenario-note">ACC and LKA scenarios covered routine use, target transitions, system boundaries, and driver intervention.</p>
          <div class="roadmap" aria-label="Four families of ACC and lane-assistance scenarios">
            <div v-for="(scenario, index) in scenarios" :key="scenario.title" class="scenario">
              <span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ scenario.title }}</strong><p>{{ scenario.examples }}</p>
              <img :src="asset(scenario.image)" :alt="scenario.alt" loading="lazy" decoding="async" />
            </div>
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
        <figure class="benchmark-photo">
          <img :src="asset('benchmark-road-test.png')" alt="Two vehicles positioned together during on-road benchmarking" width="546" height="358" loading="lazy" decoding="async" />
          <figcaption>Vehicles used in the on-road comparison.</figcaption>
        </figure>
        <div class="event-strip" aria-label="Sequence of a vehicle cut-in event">
          <div><span>01</span><strong>Traffic event</strong><small>A vehicle enters the lane</small></div>
          <div><span>02</span><strong>System response</strong><small>Target and control state change</small></div>
          <div><span>03</span><strong>HMI feedback</strong><small>The driver sees the new state</small></div>
          <div><span>04</span><strong>Driver response</strong><small>Monitoring or intervention</small></div>
        </div>
        <div class="benchmark-captures">
          <figure><img :src="asset('benchmark-tesla.png')" alt="Tesla Model X synchronized video and vehicle-data review" width="630" height="340" loading="lazy" decoding="async" /><figcaption>Tesla Model X · synchronized video and vehicle-data review</figcaption></figure>
          <figure><img :src="asset('benchmark-volvo.png')" alt="Volvo S90 synchronized video and vehicle-data review" width="634" height="340" loading="lazy" decoding="async" /><figcaption>Volvo S90 · synchronized video and vehicle-data review</figcaption></figure>
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
        <div class="prose"><p>The ACC and lane-assistance concepts brought activation, target status, guidance, warning, and unavailable states into a shared visual language across the cluster and HUD. The design explored how feedback could prepare a driver for a system response.</p></div>
        <figure class="prototype-development"><img :src="asset('hmi-development.png')" alt="Kanzi Studio development workspace showing an ACC interface preview" width="1871" height="1034" loading="lazy" decoding="async" /><figcaption>Interface development in Kanzi Studio.</figcaption></figure>
        <div class="prototype-media-grid">
          <figure><img :src="asset('hmi-normal-distance.jpg')" alt="ACC dashboard concept showing a normal following distance in blue" width="1920" height="720" loading="lazy" decoding="async" /><figcaption>ACC concept · normal following distance</figcaption></figure>
          <figure><img :src="asset('hmi-warning-distance.jpg')" alt="ACC dashboard concept showing a short warning distance in red" width="1920" height="720" loading="lazy" decoding="async" /><figcaption>ACC concept · warning distance</figcaption></figure>
        </div>
        <div class="prototype-media-grid">
          <figure><video :src="asset('acc-demo.mp4')" :poster="asset('acc-demo-poster.jpg')" controls preload="metadata" playsinline width="640" height="336" aria-label="ACC interface demonstration" /><figcaption>ACC interface demonstration</figcaption></figure>
          <figure><video :src="asset('curve-ldw-demo.mp4')" :poster="asset('curve-ldw-demo-poster.jpg')" controls preload="metadata" playsinline width="640" height="336" aria-label="Lane-departure warning demonstration on a curve" /><figcaption>Curve LDW interface demonstration</figcaption></figure>
        </div>
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
          <div class="test-matrix">
            <h3>Ordered test tasks</h3>
            <div class="test-matrix__switch" role="group" aria-label="Test task system">
              <button v-for="system in ['ACC', 'LKA']" :key="system" type="button" :aria-pressed="selectedFlow === system" @click="selectedFlow = system">{{ system }} · {{ testTasks[system].length }} tasks</button>
            </div>
            <div v-for="system in ['ACC', 'LKA']" v-show="selectedFlow === system" :key="system" class="test-matrix__scroll" :aria-label="`${system} test tasks in sequence`" tabindex="0">
              <table>
                <colgroup><col class="col-road" /><col class="col-number" /><col class="col-title" /><col class="col-instruction" /><col class="col-image" /><col class="col-measure" /><col class="col-measure" /><col class="col-measure" /></colgroup>
                <thead><tr><th scope="col">Road</th><th scope="col">No.</th><th scope="col">Test task</th><th scope="col">Task instruction</th><th scope="col">Scenario image</th><th scope="col">Real vehicle</th><th scope="col">Simulator</th><th scope="col">Participant</th></tr></thead>
                <tbody>
                  <tr v-for="(task, index) in testTasks[system]" :key="task.number" :class="{ 'test-matrix__section-start': index > 0 && task.category !== testTasks[system][index - 1].category }">
                    <td>{{ task.category }}</td><td>{{ String(task.number).padStart(2, '0') }}</td><th scope="row">{{ task.title }}</th><td>{{ task.instruction }}</td>
                    <td><div class="test-matrix__images"><img v-for="(filename, imageIndex) in task.images" :key="filename" :src="asset(`tasks/${filename}`)" :alt="`${system} task ${task.number} diagram${task.images.length > 1 ? ` ${imageIndex + 1}` : ''}`" loading="lazy" decoding="async" /></div></td>
                    <td>{{ task.realVehicle || '—' }}</td><td>{{ task.simulator || '—' }}</td><td>{{ task.participant || '—' }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
import { ref } from 'vue'
import ResearchPageTopbar from './components/ResearchPageTopbar.vue'
import testTasks from './data/driverTestTasks.json'

const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/driver-automation/${filename}`
const scenarios = [
  { title: 'Routine operation', examples: 'Activation · steady following · lane keeping', image: 'routine-operation.jpg', alt: 'Activation, deactivation, stable car-following, and lane keeping scenarios' },
  { title: 'Target transitions', examples: 'Cut-in · cut-out · target acceleration', image: 'target-transitions.jpg', alt: 'Cut-in, cut-out, target change, and target moving away scenarios' },
  { title: 'System boundaries', examples: 'Curves · congestion · obstacles · unavailable states', image: 'system-boundaries.jpg', alt: 'Low-speed driving, curves, slopes, congestion, and unavailable-system scenarios' },
  { title: 'Driver intervention', examples: 'Braking · lane change · steering override', image: 'driver-intervention.jpg', alt: 'Lane change, braking, steering, and takeover scenarios' },
]
const workflowStages = [
  { phase: 'Evidence', title: 'China-FOT naturalistic driving data analysis', detail: 'Recorded driving and vehicle context' },
  { phase: 'Scenarios', title: 'Scenario and hazardous-condition extraction', detail: 'Transitions, critical events, system limits' },
  { phase: 'Benchmark', title: 'Vehicle benchmarking', detail: 'Tesla Model X · Volvo S90 · SAIC engineering vehicle' },
  { phase: 'Analysis', title: 'Driver behavior and vehicle-control analysis', detail: 'Monitoring, intervention, and control response' },
  { phase: 'Design', title: 'HMI information architecture and prototype design', detail: 'Mode, target, guidance, and warnings' },
  { phase: 'Evaluation', title: 'Real-vehicle experience and simulator validation', detail: 'Road observations and proposed simulator protocol' },
]
const selectedFlow = ref('ACC')
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
.workflow-chart__inner { min-width: 1120px; }
.workflow-axis, .workflow-steps li { display: grid; grid-template-columns: minmax(260px, 2fr) repeat(6, minmax(0, 1fr)); }
.workflow-axis { background: #252024; }
.workflow-axis > span { padding: .9rem .7rem; border-right: 1px solid rgba(255,255,255,.12); color: var(--accent-soft); font: 600 .78rem var(--font-mono); text-align: center; }
.workflow-axis > span:first-child { color: #d8d0cc; text-align: left; text-transform: uppercase; }
.workflow-axis small { display: block; margin-top: .35rem; color: #aaa3a0; font-family: var(--font-mono); font-size: .7rem; font-weight: 400; }
.workflow-steps { display: block; margin: 0; padding: 0; list-style: none; }
.workflow-steps li { min-height: 94px; border-top: 1px solid rgba(255,255,255,.1); background: #141215; }
.workflow-task { padding: .9rem 1rem; border-right: 1px solid rgba(255,255,255,.12); }
.workflow-task p { margin: 0; color: #aaa3a0; font-size: .75rem; line-height: 1.4; }
.workflow-bar { grid-column: 2 / -1; align-self: center; display: flex; align-items: center; gap: .6rem; box-sizing: border-box; width: 27%; min-height: 72px; margin-left: var(--stage-offset); padding: .65rem 1.35rem .65rem .7rem; clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%); background: rgba(255,141,102,.75); color: #211713; }
.workflow-bar small { font: 700 .68rem var(--font-mono); }
.workflow-bar strong { font-size: .72rem; line-height: 1.3; }
.scenario-section { padding: 6rem 0; background: #151317; }
.roadmap { margin-top: 3rem; display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid #6b4031; border-left: 1px solid rgba(255,255,255,.08); }
.scenario { padding: 1.2rem; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,.08); border-bottom: 1px solid rgba(255,255,255,.08); }
.scenario span { color: var(--accent); font: 600 .72rem var(--font-mono); }
.scenario strong { margin-top: 1rem; font-size: 1rem; }
.scenario p { color: #aaa3a0; font-size: .8rem; line-height: 1.6; }
.scenario img { display: block; width: 100%; height: auto; margin-top: auto; border-radius: .55rem; }
.scenario-note { max-width: 850px; margin-top: 2rem; color: #aaa3a0; line-height: 1.7; }
.scenario-note strong { color: #f8f6f4; }
.test-matrix { margin-top: 3rem; }
.test-matrix h3 { margin-bottom: 1rem; font-size: 1.35rem; }
.test-matrix__switch { display: flex; gap: .6rem; margin-bottom: 1rem; }
.test-matrix__switch button { padding: .75rem 1rem; border: 1px solid rgba(255,255,255,.18); border-radius: .5rem; background: #1c191d; color: #bbb4b1; font: 700 .85rem var(--font-mono); cursor: pointer; }
.test-matrix__switch button[aria-pressed="true"] { border-color: var(--accent); background: rgba(255,141,102,.13); color: #fff; }
.test-matrix__switch button:focus-visible, .test-matrix__scroll:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
.test-matrix__scroll { height: 680px; overflow: auto; border: 1px solid rgba(255,255,255,.16); border-radius: .7rem; background: #1c191d; }
.test-matrix table { width: 1340px; table-layout: fixed; border-collapse: separate; border-spacing: 0; font-size: .78rem; line-height: 1.45; }
.test-matrix .col-road { width: 80px; }
.test-matrix .col-number { width: 50px; }
.test-matrix .col-title { width: 185px; }
.test-matrix .col-instruction { width: 280px; }
.test-matrix .col-image { width: 145px; }
.test-matrix .col-measure { width: 200px; }
.test-matrix th, .test-matrix td { padding: .85rem; border-right: 1px solid rgba(255,255,255,.1); border-bottom: 1px solid rgba(255,255,255,.1); text-align: left; vertical-align: top; white-space: pre-line; overflow-wrap: anywhere; }
.test-matrix thead th { position: sticky; top: 0; z-index: 1; background: #30262a; color: var(--accent-soft); font-size: .72rem; letter-spacing: .04em; }
.test-matrix tbody tr:nth-child(even) { background: rgba(255,255,255,.025); }
.test-matrix tbody th { font-weight: 600; }
.test-matrix tbody td { color: #c9c2bf; }
.test-matrix tbody td:nth-child(2) { color: var(--accent); font-family: var(--font-mono); font-weight: 700; }
.test-matrix tbody tr.test-matrix__section-start > * { border-top: 2px solid var(--accent); }
.test-matrix__images { display: flex; gap: .35rem; }
.test-matrix__images img { display: block; width: 100%; min-width: 0; max-height: 100px; object-fit: contain; border-radius: .25rem; background: #d5d5d5; }
.test-matrix__images:has(img + img) img { width: 50%; }
.evidence { padding: 6rem 0; display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(3rem, 7vw, 6rem); }
.evidence .prose { margin-top: 1.5rem; }
.benchmark { grid-template-columns: .85fr 1.15fr; }
.event-strip { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--accent); }
.event-strip div { min-height: 130px; padding: 1.2rem; display: flex; flex-direction: column; border-right: 1px solid rgba(255,255,255,.1); border-bottom: 1px solid rgba(255,255,255,.1); }
.event-strip div:last-child { border-right: 0; }
.event-strip span { color: var(--accent); font: 600 .75rem var(--font-mono); }
.event-strip strong { margin-top: 1rem; }
.event-strip small { margin-top: .4rem; color: #aaa3a0; }
.benchmark-photo { min-width: 0; }
.benchmark-photo img, .benchmark-captures img { display: block; width: 100%; height: auto; border: 1px solid rgba(255,255,255,.12); border-radius: .65rem; }
.benchmark-captures { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.benchmark-captures figure { min-width: 0; }
.evaluation { padding: 6rem 0; background: #f2e5df; color: #211713; }
.evaluation .kicker { color: #9b482d; }
.evaluation__inner { display: grid; grid-template-columns: .8fr 1.2fr; gap: clamp(3rem, 7vw, 6rem); }
.requirement-list p { display: grid; grid-template-columns: .8fr 1.2fr; gap: 1rem; margin: 0; padding: 1rem 0; border-top: 1px solid rgba(33,23,19,.18); line-height: 1.6; }
.requirement-list span { color: #675954; }
.prototype-development, .prototype-media-grid { grid-column: 1 / -1; }
.prototype-media-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.prototype-media-grid figure { min-width: 0; }
.prototype-section img, .prototype-section video { display: block; width: 100%; height: auto; border: 1px solid rgba(255,255,255,.12); border-radius: .65rem; }
.prototype-section video { aspect-ratio: 40 / 21; background: #080808; }
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
  .event-strip { grid-template-columns: repeat(2, 1fr); }
  .event-strip div:nth-child(2n) { border-right: 0; }
  .footer { grid-template-columns: 1fr; }
  .footer .back-link { grid-column: auto; }
}
@media (max-width: 560px) {
  .metric-grid, .roadmap, .event-strip, .method-grid, .requirement-list p { grid-template-columns: 1fr; }
  .benchmark-captures { grid-template-columns: 1fr; }
  .prototype-media-grid { grid-template-columns: 1fr; }
  .metric-grid div, .scenario, .event-strip div { border-right: 0; }
  .scenario, .event-strip div { min-height: auto; }
  .requirement-list p { gap: .4rem; }
  .simulator-figure img { aspect-ratio: 4 / 3; }
}
</style>

<style lang="scss" scoped>
@use './styles/research-detail-system';
</style>
