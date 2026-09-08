<script setup>
import { ref } from 'vue'

const homeUrl = import.meta.env.BASE_URL

const collectorCaptures = [
  { label: 'SHAKE', image: 'collector-shake.webp', alt: 'Processing Gesture Data Collector showing six-axis IMU traces while the current label is SHAKE' },
  { label: 'LEFT', image: 'collector-left.webp', alt: 'Processing Gesture Data Collector showing six-axis IMU traces while the current label is LEFT' },
  { label: 'RIGHT', image: 'collector-right.webp', alt: 'Processing Gesture Data Collector showing six-axis IMU traces while the current label is RIGHT' },
  { label: 'ROTATE CW', image: 'collector-cw.webp', alt: 'Processing Gesture Data Collector showing six-axis IMU traces while the current label is ROTATE CW' },
  { label: 'ROTATE CCW', image: 'collector-ccw.webp', alt: 'Processing Gesture Data Collector showing six-axis IMU traces while the current label is ROTATE CCW' },
]

const activeCollector = ref(collectorCaptures[0])

const researchArc = [
  ['BUILD', 'Reliable embodied input'],
  ['LEARN', 'Map action to response'],
  ['DIVERGE', 'Encounter swarm autonomy'],
  ['EXPLAIN', 'Expose collective cues'],
  ['PREDICT', 'Revise the mental model'],
]

const gestures = [
  { code: 'LEFT', input: 'Lateral motion', effect: 'Collective drift left', image: 'left.jpg' },
  { code: 'RIGHT', input: 'Lateral motion', effect: 'Collective drift right', image: 'right.jpg' },
  { code: 'ROTATE CW', input: 'Clockwise rotation', effect: 'Collective CW rotation', image: 'rotate-cw.jpg' },
  { code: 'ROTATE CCW', input: 'Counter-clockwise rotation', effect: 'Collective CCW rotation', image: 'rotate-ccw.jpg' },
  { code: 'SHAKE', input: 'Reciprocating motion', effect: 'Temporary disturbance', image: 'shake.jpg' },
]

const thresholdFailures = [
  { title: 'Translation was biphasic', text: 'Lateral movement included acceleration and braking, so AY could reverse sign during one gesture.', signal: 'AY ±' },
  { title: 'Rotation overlapped with shake', text: 'Both could generate high peak GZ, so instantaneous angular velocity was ambiguous.', signal: 'peak GZ' },
  { title: 'Shake was temporal', text: 'Shake was better characterized by repeated acceleration changes over time than by one large spike.', signal: 'ΔA / time' },
]

const classifierRules = [
  ['Jerk energy', 'SHAKE', '> 15 across 800 ms'],
  ['Integrated GZ', 'ROTATE CW / CCW', 'signed angle beyond ±25°'],
  ['First AY pulse', 'LEFT / RIGHT', 'negative / positive beyond ±0.08'],
  ['Neutral return', 'RE-ARM', '250 ms stable hold'],
]

const experimentAFlow = [
  ['PRE', 'PRE Mapping', 'Randomized action cards and unlabeled behavior icons · confidence 1–7'],
  ['EXPLORE', '45s Exploration', 'Learn through bodily action and visual collective response'],
  ['TASK', '5 Formal Tasks', 'Two translations · two rotations · disturbance–recovery'],
  ['REPORT', 'Subjective Measures', 'Cognitive load · perceived control · predictability'],
  ['POST', 'POST Mapping', 'New random order · repeat mapping and confidence'],
]

const tasks = [
  ['MOVE LEFT / RIGHT', 'Guide the swarm center into a target and hold for ~700 ms; the corresponding gesture must have occurred.'],
  ['ROTATE CW / CCW', 'Produce sustained collective tangential motion around the swarm center for ~900 ms.'],
  ['DISTURB + RECOVER', 'Cause temporary disorder, then allow alignment and collective order to recover.'],
]

const mappingConfidence = [
  { id: 'P01', pre: 5.8, post: 4.6 },
  { id: 'P02', pre: 6.0, post: 7.0 },
  { id: 'P03', pre: 5.6, post: 6.0 },
  { id: 'P04', pre: 6.2, post: 6.0 },
  { id: 'P05', pre: 4.0, post: 6.8 },
  { id: 'P06', pre: 5.2, post: 4.6 },
]

const confidenceScale = [1, 2, 3, 4, 5, 6, 7]
const confidenceY = value => 30 + (7 - value) * 50

const experimentBFlow = [
  ['01', 'Influence right'],
  ['02', 'Encounter wall'],
  ['03', 'Autonomy activates'],
  ['04', 'Heterogeneity emerges'],
  ['05', 'Cue is rendered'],
  ['06', 'Freeze at partial commitment'],
  ['07', 'Predict + rate confidence'],
]

const cueConditions = [
  { name: 'NO CUE', question: 'Read behavior alone', text: 'Participants infer intent from positions, headings, movement, and formation.' },
  { name: 'GLOBAL CUE', question: 'What is the collective trying to do?', text: 'A soft collective hull and aggregate direction expose group-level structure without directly stating the answer.' },
  { name: 'LOCAL CUE', question: 'Why is this agent behaving differently?', text: 'Selective elastic links reveal local relational tension for probing, lagging, or deviating agents.' },
]

const taskSuccess = [
  { task: 'Move Right', value: 17 },
  { task: 'Move Left', value: 33 },
  { task: 'Rotate CW', value: 50 },
  { task: 'Rotate CCW', value: 50 },
  { task: 'Disturb + Recover', value: 100 },
]

const cueResults = [
  { condition: 'NO CUE', accuracy: 17, predictability: 2.83, emphasis: false },
  { condition: 'GLOBAL CUE', accuracy: 39, predictability: 5.33, emphasis: true },
  { condition: 'LOCAL CUE', accuracy: 17, predictability: 3.00, emphasis: false },
]

</script>

<template>
  <main class="swarm-page">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#research-projects`"><span aria-hidden="true">&larr;</span> Back to selected research</a>
    </header>

    <article>
      <section class="hero shell">
        <div class="hero__meta">
          <p>Independent Research · HRI · Ongoing · 2026</p>
          <div><span>Swarm HRI</span><span>Embodied influence</span><span>Collective legibility</span><span>n = 6 pilot</span></div>
        </div>
        <figure class="hero__visual">
          <img :src="homeUrl + 'images/research/embodied-swarm/swarm-card-cover.webp'" alt="Embodied Swarm Interaction overview showing a handheld controller influencing an autonomous swarm around a segmented wall" />
          <figcaption>System concept: bodily input temporarily influences collective dynamics while the swarm retains autonomous behavior.</figcaption>
        </figure>
      </section>

      <section class="research-question section-dark">
        <div class="shell question-grid">
          <div>
            <p class="kicker">01 · Research question</p>
            <h1>How can embodied interaction support users in building and revising mental models of autonomous robotic swarms?</h1>
            <p>Human users influence the collective rather than puppeteering individual robots. Bodily motion is the interaction medium; the research contribution concerns learning, predictability, collective legibility, and the interpretation of autonomy.</p>
          </div>
        </div>
        <div class="shell arc" aria-label="Research process from embodied action to mental model revision">
          <article v-for="(step, index) in researchArc" :key="step[0]"><span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ step[0] }}</strong><small>{{ step[1] }}</small></article>
        </div>
        <p class="shell arc-caption">Embodied Action → Observe Collective Response → Build Mental Model → Encounter Autonomous Divergence → Interpret Collective Cues → Revise Mental Model</p>
      </section>

      <section class="prestudy section-mid">
        <div class="shell">
          <div class="section-heading">
            <p class="kicker">02 · Pre-study / Prototype validation</p>
            <h2>From Sensor Thresholds to Temporal Interaction</h2>
            <p>Before studying mental models, the embodied input and swarm response first had to become reliable enough to support a controlled participant study.</p>
          </div>

          <div class="controller-row">
            <figure class="interaction-photo">
              <img :src="homeUrl + 'images/research/embodied-swarm/physical/interaction-setup.jpg'" alt="A participant holds the cylindrical embodied controller while influencing a simulated robot swarm on a laptop" />
              <figcaption><strong>Physical interaction setup.</strong> A hand-held tangible controller maps embodied gestures to the behavior of a simulated robot swarm.</figcaption>
            </figure>
            <aside class="controller-rationale">
              <p class="mini-label">Research rationale</p>
              <h3>Why an embodied controller?</h3>
              <p>I needed a small set of repeatable bodily actions that could be performed consistently while still feeling physically distinct. A single-hand controller allowed me to isolate five embodied motions and observe how participants learned their relationship to collective swarm behavior.</p>
              <div class="rationale-flow" aria-label="Process from bodily action to mental model formation"><span>Bodily Action</span><i>→</i><span>Temporary Swarm Influence</span><i>→</i><span>Observed Collective Response</span><i>→</i><strong>Mental Model Formation</strong></div>
              <div class="rationale-principles"><article><span>01</span><div><strong>Limited gesture set</strong><p>Five distinct gestures kept the action space small enough to learn and compare.</p></div></article><article><span>02</span><div><strong>Influence, not direct control</strong><p>Each gesture temporarily perturbed collective dynamics rather than specifying individual robot trajectories.</p></div></article></div>
            </aside>
          </div>

          <section class="gesture-gallery" aria-labelledby="gesture-gallery-title">
            <div class="gesture-gallery__heading">
              <p class="mini-label">Gesture = temporary influence</p>
              <h3 id="gesture-gallery-title">Five embodied actions, five collective responses</h3>
            </div>
            <div class="gesture-gallery__grid">
              <article v-for="gesture in gestures" :key="gesture.code" class="gesture-card">
                <img :src="homeUrl + 'images/research/embodied-swarm/gestures/' + gesture.image" :alt="'Hand-held controller performing ' + gesture.code + ' gesture'" loading="lazy" />
                <div><strong>{{ gesture.code }}</strong><small>{{ gesture.input }} → {{ gesture.effect }}</small></div>
              </article>
            </div>
          </section>

          <section class="motion-process">
            <div class="motion-process__heading">
              <p class="kicker">Prototype iteration · Signal reasoning</p>
              <h2>From Raw Motion to Temporal Features</h2>
              <p>The recognizer emerged through collecting motion, diagnosing why frame-level rules failed, and matching each gesture to a feature that represented its temporal structure.</p>
            </div>

            <div class="collector-section">
              <div class="collector-copy">
                <span class="part-number">01</span>
                <p class="mini-label">Collecting labeled motion data</p>
                <h3>Record first. Tune later.</h3>
                <p>Instead of continuing to tune arbitrary thresholds, I recorded labeled six-axis IMU motion at 50 Hz and inspected how each gesture unfolded over time.</p>
                <div class="collector-meta"><span><strong>5</strong> gesture classes</span><span><strong>50 Hz</strong> sampling</span><span><strong>~800 ms</strong> labeled windows</span></div>
              </div>
              <figure class="collector-gallery">
                <div class="collector-gallery__top"><span>PROCESSING GESTURE DATA COLLECTOR</span><strong>REAL CAPTURE · {{ activeCollector.label }}</strong></div>
                <div class="collector-gallery__image"><img :src="homeUrl + 'images/research/embodied-swarm/collector/' + activeCollector.image" :alt="activeCollector.alt" /></div>
                <div class="collector-gallery__tabs" role="group" aria-label="Choose a captured gesture state"><button v-for="capture in collectorCaptures" :key="capture.label" type="button" :class="{ active: activeCollector.label === capture.label }" :aria-pressed="activeCollector.label === capture.label" @click="activeCollector = capture">{{ capture.label }}</button></div>
                <figcaption>Real Processing interface captures showing synchronized AX, AY, AZ, GX, GY, and GZ traces with the active 800 ms gesture label.</figcaption>
              </figure>
            </div>

            <div class="failure-section">
              <div class="part-heading"><span class="part-number">02</span><div><p class="mini-label">Why instantaneous thresholds failed</p><h3>One frame could not represent one gesture.</h3></div></div>
              <div class="failure-cards"><article v-for="failure in thresholdFailures" :key="failure.title"><span>{{ failure.signal }}</span><h4>{{ failure.title }}</h4><p>{{ failure.text }}</p></article></div>
            </div>

            <div class="feature-section">
              <div class="part-heading"><span class="part-number">03</span><div><p class="mini-label">Feature redesign</p><h3>Three motion structures required three forms of evidence.</h3></div></div>

              <article class="feature-block feature-block--translation">
                <div class="feature-copy"><span>A · TRANSLATION</span><h4>First Lateral Pulse</h4><p>LEFT and RIGHT were classified using the polarity of the first significant AY pulse after motion onset.</p><dl><div><dt>Negative first pulse</dt><dd>LEFT</dd></div><div><dt>Positive first pulse</dt><dd>RIGHT</dd></div></dl></div>
                <figure><img :src="homeUrl + 'images/research/embodied-swarm/translation-first-pulse.webp'" alt="Representative LEFT and RIGHT AY signals with the first significant lateral pulse annotated" loading="lazy" /><figcaption>Representative labeled windows from the recorded gesture CSV.</figcaption></figure>
              </article>

              <article class="feature-block feature-block--rotation">
                <figure><img :src="homeUrl + 'images/research/embodied-swarm/rotation-integrated-gz.webp'" alt="Accumulated gyroscope Z over time for representative clockwise and counter-clockwise rotations" loading="lazy" /><figcaption>Accumulated GZ, calculated across each temporal window.</figcaption></figure>
                <div class="feature-copy"><span>B · ROTATION</span><h4>Integrated Gyroscope Z</h4><p>Rotation was identified from accumulated angular displacement rather than peak GZ.</p><blockquote>Integrating GZ separated sustained rotation from brief angular disturbance.</blockquote></div>
              </article>

              <article class="feature-block feature-block--shake">
                <div class="feature-copy"><span>C · DISTURBANCE</span><h4>Accumulated Jerk Energy</h4><p>Shake was detected through accumulated frame-to-frame acceleration change across the gesture window.</p><code>Jerk energy ≈ Σ(|ΔAX| + |ΔAY| + |ΔAZ|)</code></div>
                <figure><img :src="homeUrl + 'images/research/embodied-swarm/shake-jerk-energy.webp'" alt="Real shake AX, AY, and AZ traces with jerk-energy comparison across the five gesture classes" loading="lazy" /><figcaption>One recorded SHAKE window plus class-level descriptive comparison. This is not classifier accuracy.</figcaption></figure>
              </article>
            </div>

            <div class="final-classifier">
              <div class="part-heading"><span class="part-number">04</span><div><p class="mini-label">Final classifier</p><h3>One window. One feature decision. One event.</h3></div></div>
              <div class="final-classifier__flow"><span>Motion onset</span><i>→</i><span>Temporal gesture window</span><i>→</i><span>First AY pulse<br>Integrated GZ<br>Jerk energy</span><i>→</i><span>Classify gesture</span><i>→</i><span>Neutral lock</span><i>→</i><strong>Single event<br>to Processing</strong></div>
              <div class="rule-grid"><article v-for="rule in classifierRules" :key="rule[0]"><span>{{ rule[0] }}</span><strong>{{ rule[1] }}</strong><small>{{ rule[2] }}</small></article></div>
            </div>

            <blockquote class="motion-process__conclusion">“The final recognizer was not built by stacking more thresholds, but by matching each gesture to the temporal feature that best represented its motion structure.”</blockquote>
          </section>

          <div class="swarm-validation">
            <div><p class="mini-label">Swarm prototype validation</p><h3>Input changes collective tendency—not individual trajectories.</h3><p>Processing maintains separation, alignment, cohesion, and local self-organization. Drift, rotation, and disturbance are bounded influences that decay, leaving the collective responsive but never fully scripted.</p></div>
            <div class="flocking-model"><span>SEPARATION</span><b>+</b><span>ALIGNMENT</span><b>+</b><span>COHESION</span><i>→</i><strong>AUTONOMOUS COLLECTIVE</strong></div>
          </div>
        </div>
      </section>

      <section class="experiment-a section-dark">
        <div class="shell">
          <div class="section-heading">
            <p class="kicker">03 · Experiment A · Building a mental model</p>
            <h2>How do people learn the relationship between bodily motion and collective response?</h2>
            <p>Experiment A begins after prototype validation. It examines how first-time users form an action–response model through expectation, exploration, performance, and reflection.</p>
          </div>

          <ol class="experiment-a-flow">
            <li v-for="(item, index) in experimentAFlow" :key="item[0]"><span>{{ item[0] }}</span><strong>{{ item[1] }}</strong><small>{{ item[2] }}</small><i v-if="index < experimentAFlow.length - 1">→</i></li>
          </ol>

          <div class="experiment-a-support">
            <figure class="experiment-interface experiment-interface--a">
              <div><span>EXPERIMENT A · REAL INTERFACE</span><img :src="homeUrl + 'images/research/embodied-swarm/experiment-a-interface.webp'" alt="Experiment A interface showing current embodied input, collective state, task progress, target, and simulated swarm" loading="lazy" /></div>
              <figcaption>The formal-task interface exposed current input, collective state, task progress, remaining time, the simulated swarm, and its target.</figcaption>
            </figure>
            <div class="task-list"><p class="mini-label">Formal task completion logic</p><article v-for="task in tasks" :key="task[0]"><strong>{{ task[0] }}</strong><p>{{ task[1] }}</p></article><aside>READY lasts 3 seconds and is not timed. Each trial ends on success or at the 60-second timeout.</aside></div>
          </div>

          <div class="measure-strip">
            <article><span>Objective</span><strong>PRE / POST mapping</strong><small>accuracy · confidence · response time</small></article>
            <article><span>Behavioral</span><strong>Formal tasks</strong><small>success · completion time</small></article>
            <article><span>Subjective</span><strong>After interaction</strong><small>load · control · predictability</small></article>
          </div>

        </div>
      </section>

      <section class="transition section-accent">
        <div class="shell transition-grid">
          <div class="transition-copy"><p class="kicker">04 · From influence to autonomy</p><h2>When influence is no longer control.</h2><p>Experiment A asked, “What happens when I move?” Experiment B introduced autonomous divergence to ask, “Can I still interpret and predict the collective when it no longer fully follows my input?”</p></div>
          <div class="transition-model"><span>Experiment A</span><strong>Build an action–response model</strong><i>→</i><span>Experiment B</span><strong>Revise it under autonomy</strong></div>
        </div>
      </section>

      <section class="experiment-b section-mid">
        <div class="shell experiment-b-intro">
          <div><p class="kicker">05 · Experiment B · Revising a mental model</p><h2>Can an explanatory cue clarify an emerging group intention?</h2><p>Participants continue influencing the swarm toward a goal. Near a segmented wall, autonomous routing activates: most agents begin bypassing above or below, while lagging and gap-probing agents preserve local disagreement.</p></div>
          <figure class="experiment-interface experiment-interface--b">
            <div><span>EXPERIMENT B · REAL INTERFACE</span><img :src="homeUrl + 'images/research/embodied-swarm/experiment-b-interface.webp'" alt="Experiment B collective legibility interface showing the swarm, segmented wall, target, current input, system state, trial number, and global cue condition" loading="lazy" /></div>
            <figcaption>The collective-legibility task introduced the segmented wall, autonomous routing, randomized cue condition, and a nine-trial prediction sequence.</figcaption>
          </figure>
        </div>

        <div class="shell experiment-b-flow"><article v-for="item in experimentBFlow" :key="item[0]"><span>{{ item[0] }}</span><strong>{{ item[1] }}</strong></article></div>

        <div class="shell cue-comparison">
          <article v-for="cue in cueConditions" :key="cue.name">
            <span>{{ cue.name }}</span>
            <div class="cue-visual" :class="`cue-${cue.name.split(' ')[0].toLowerCase()}`">
              <span class="cue-wall cue-wall--top"></span><span class="cue-wall cue-wall--bottom"></span>
              <i v-for="i in 12" :key="i"></i>
              <b v-if="cue.name === 'GLOBAL CUE'" class="cue-hull"></b>
              <svg v-if="cue.name === 'LOCAL CUE'" class="cue-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M34 72 L53 63 L58 48 L66 57 M53 63 L42 55 M58 48 L51 35" /></svg>
              <span class="cue-goal"><span></span></span>
            </div>
            <h3>{{ cue.question }}</h3><p>{{ cue.text }}</p>
          </article>
        </div>

        <div class="shell freeze-section">
          <div><p class="mini-label">Freeze-logic iteration</p><h3>Capture collective intention before unanimity.</h3><p>An early freeze could be ambiguous; a late freeze revealed the answer; an over-constrained condition could never trigger. The revised logic combines a decision region, partial commitment, remaining minority behavior, persistence, and a fallback.</p></div>
          <div class="freeze-diagram"><article><span>Eligible agents</span><strong>≥ 35%</strong></article><i>+</i><article><span>Committed</span><strong>55–78%</strong></article><i>+</i><article><span>Minority</span><strong>≥ 12%</strong></article><i>+</i><article><span>Persistent</span><strong>700 ms</strong></article><b>↓</b><strong>FREEZE → PREDICT</strong><small>Fallback: freeze immediately above ~78% commitment.</small></div>
        </div>

        <div class="shell prediction-panel"><span>Primary objective outcome</span><h3>“What will the swarm do next?”</h3><div><i>Through gaps</i><i>Above wall</i><i>Below wall</i><i>Stop / regroup</i></div><p>Prediction accuracy · response time · confidence 1–7. Each participant completed nine randomized trials: three per cue condition.</p></div>
      </section>

      <section class="mapping-check section-dark">
        <div class="shell mapping-check-grid">
          <div class="mapping-check-copy">
            <p class="kicker">06 · PRE / POST Mapping Check</p>
            <h2>Did interaction improve participants’ mental model?</h2>
            <p class="mapping-method">I used an icon-to-behavior mapping task before and after interaction to probe whether participants could more confidently link bodily actions to collective swarm responses.</p>
            <aside class="mapping-takeaway"><span>Key Takeaway</span><p>All participants matched the mappings correctly in both PRE and POST, producing a clear ceiling effect. Mean confidence increased slightly after interaction, suggesting greater certainty even though correctness did not change.</p></aside>
          </div>

          <div class="mapping-evidence">
            <section class="accuracy-mini" aria-labelledby="mapping-accuracy-title">
              <div><span>A</span><h3 id="mapping-accuracy-title">Mapping Accuracy</h3><small>n = 6</small></div>
              <div class="accuracy-row"><strong>PRE</strong><i><b></b></i><span>100%</span></div>
              <div class="accuracy-row"><strong>POST</strong><i><b></b></i><span>100%</span></div>
              <p>All participants were correct in both phases.</p>
            </section>

            <section class="confidence-plot" aria-labelledby="mapping-confidence-title">
              <header><div><span>B</span><h3 id="mapping-confidence-title">Confidence</h3></div><p>Participant-level change · scale 1–7</p></header>
              <svg viewBox="0 0 1000 420" role="img" aria-label="Paired slope chart showing confidence before and after interaction for six participants and the group mean">
                <g class="confidence-grid"><template v-for="value in confidenceScale" :key="value"><line x1="125" x2="875" :y1="confidenceY(value)" :y2="confidenceY(value)" /><text x="96" :y="confidenceY(value) + 5">{{ value }}</text></template></g>
                <g class="confidence-participants"><g v-for="participant in mappingConfidence" :key="participant.id"><line x1="260" x2="740" :y1="confidenceY(participant.pre)" :y2="confidenceY(participant.post)" /><circle cx="260" :cy="confidenceY(participant.pre)" r="7" /><circle cx="740" :cy="confidenceY(participant.post)" r="7" /><text x="225" :y="confidenceY(participant.pre) + 4">{{ participant.id }}</text></g></g>
                <g class="confidence-mean"><line x1="260" x2="740" :y1="confidenceY(5.47)" :y2="confidenceY(5.83)" /><circle cx="260" :cy="confidenceY(5.47)" r="11" /><circle cx="740" :cy="confidenceY(5.83)" r="11" /><text x="275" :y="confidenceY(5.47) - 12">5.47</text><text x="755" :y="confidenceY(5.83) - 12">5.83</text></g>
                <g class="confidence-axis"><text x="260" y="390">PRE</text><text x="740" y="390">POST</text><text x="24" y="210" transform="rotate(-90 24 210)">Confidence (1–7)</text></g>
              </svg>
              <div class="confidence-summary"><span><strong>5.47 / 7</strong> PRE mean confidence</span><i>→</i><span><strong>5.83 / 7</strong> POST mean confidence</span></div>
            </section>
          </div>
        </div>
        <div class="shell mapping-interpretation-wide"><strong>Interpretation</strong><p>I found that the mapping check produced a ceiling effect: all participants were already correct before interaction, so the measure could not capture improvement in mapping accuracy. I therefore relied more heavily on formal task performance and later prediction measures to examine mental-model formation.</p></div>
      </section>

      <section class="experiment-a-findings section-mid">
        <div class="shell findings-header">
          <div><p class="kicker">07 · Experiment A Findings</p><h2>Knowing the mapping was not the same as successfully enacting it.</h2></div>
          <p>Small-scale exploratory pilot, n = 6. Results are reported descriptively.</p>
        </div>
        <div class="shell experiment-a-results">
          <div class="knowledge-enactment">
            <p class="mini-label">Conceptual distinction</p>
            <div><span>Mapping Knowledge<small>PRE / POST accuracy</small></span><strong>100% → 100%</strong></div>
            <i>≠</i>
            <div><span>Successful Enactment<small>formal task success</small></span><strong>17%–100%</strong></div>
            <p>Knowing the mapping did not guarantee successful control. While participants were already correct in the PRE / POST mapping check, formal task success varied considerably across behaviors.</p>
          </div>
          <figure class="task-success-chart">
            <figcaption><span>Formal task success</span><small>ranked from lowest to highest</small></figcaption>
            <div v-for="result in taskSuccess" :key="result.task" class="task-bar"><strong>{{ result.task }}</strong><i><b :style="{ width: `${result.value}%` }"></b></i><span>{{ result.value }}%</span></div>
            <p>Performance varied substantially across embodied tasks: disturbance/recovery was consistently completed, while directional translation was considerably harder. Rotation fell between these two extremes.</p>
          </figure>
        </div>
        <div class="shell findings-secondary">
          <aside class="finding-takeaway"><span>Key Takeaway</span><p><strong>Participants understood what each gesture was intended to do, but that knowledge did not translate uniformly into successful collective outcomes.</strong> Disturbance and recovery was completed consistently, whereas directional translation was substantially less reliable and rotation fell between these two extremes. I therefore treat mapping knowledge and successful enactment as distinct layers of the mental model rather than interchangeable evidence.</p></aside>
          <div class="subjective-compact"><span>Experience after embodied interaction</span><dl><div><dt>Cognitive load</dt><dd>4.83 / 7</dd></div><div><dt>Perceived control</dt><dd>4.00 / 7</dd></div><div><dt>Predictability</dt><dd>4.00 / 7</dd></div></dl><p>Participants reported moderate cognitive demand, perceived control, and predictability.</p></div>
        </div>
      </section>

      <section class="experiment-b-findings section-dark">
        <div class="shell findings-header">
          <div><p class="kicker">08 · Experiment B Findings</p><h2>Global cues showed the strongest descriptive pattern.</h2></div>
          <p>Small-scale exploratory pilot, n = 6. Results are reported descriptively.</p>
        </div>
        <div class="shell cue-results" aria-label="Experiment B results organized by cue condition">
          <article v-for="result in cueResults" :key="result.condition" :class="{ emphasized: result.emphasis }">
            <header><span>{{ result.condition }}</span><small v-if="result.emphasis">STRONGEST PATTERN</small></header>
            <div class="cue-measure"><p>Prediction accuracy</p><div><i><b :style="{ width: `${result.accuracy}%` }"></b></i><strong>{{ result.accuracy }}%</strong></div></div>
            <div class="cue-measure"><p>Perceived predictability</p><div><i><b :style="{ width: `${result.predictability / 7 * 100}%` }"></b></i><strong>{{ result.predictability.toFixed(2) }} / 7</strong></div></div>
          </article>
        </div>
        <div class="shell experiment-b-summary">
          <aside class="finding-takeaway"><span>Key Takeaway</span><p>Global Cue showed the strongest descriptive pattern across both prediction accuracy and perceived predictability. Local Cue did not show the same advantage in this small exploratory pilot.</p></aside>
          <div class="subjective-compact"><span>Overall experience in Experiment B</span><dl><div><dt>Cognitive load</dt><dd>5.33 / 7</dd></div><div><dt>Perceived control</dt><dd>5.00 / 7</dd></div></dl></div>
        </div>
      </section>

      <section class="reflection section-accent">
        <div class="shell reflection-heading">
          <p class="kicker">09 · Research Reflection</p>
          <h2>From Mapping to Collective Interpretation</h2>
          <p>The two studies suggest a progression from learning action–response mappings to interpreting autonomous collective behavior.</p>
        </div>
        <ol class="shell reflection-progression">
          <li><span>01 · Learn the Mapping</span><strong>Participants could understand what each gesture meant.</strong><small>PRE / POST mapping accuracy<br><b>100% → 100%</b></small></li>
          <li><span>02 · Enact the Behavior</span><strong>Understanding the mapping did not guarantee reliable collective outcomes.</strong><small>Formal task success range<br><b>17–100%</b></small></li>
          <li><span>03 · Encounter Autonomy</span><strong>Once the swarm began making autonomous routing decisions, the interaction shifted from control to interpretation.</strong></li>
          <li><span>04 · Read Collective Intent</span><strong>In this pilot, group-level explanatory cues showed the clearest descriptive advantage for anticipating swarm behavior.</strong><small><b>Global Cue</b> showed the strongest descriptive pattern.</small></li>
        </ol>
        <p class="shell reflection-conclusion">Embodied interaction was useful for establishing a simple action–response model, but collective autonomy introduced a second layer of interpretation. The design challenge shifted from making gestures understandable to making autonomous group behavior legible.</p>
      </section>

      <section class="physical-development section-dark">
        <div class="shell physical-heading">
          <p class="kicker">10 · Physical Prototype Development</p>
          <h2>Refining the Physical Controller</h2>
          <p>The controller progressed from a low-fidelity cardboard enclosure to a modular 3D-printed form. This iteration preserved the same sensing architecture while improving robustness, access to the electronics, and consistency during physical testing.</p>
        </div>
        <figure class="shell prototype-progression">
          <img :src="homeUrl + 'images/research/embodied-swarm/controller-progression-teal.webp'" alt="Four-stage development of the embodied swarm controller, from ESP32 and MPU6050 wiring through exposed and cardboard prototypes to a refined cylindrical enclosure" loading="lazy" />
          <figcaption>Design progression: wiring setup → exposed electronics → cardboard form study → refined cylindrical enclosure.</figcaption>
        </figure>
        <div class="shell prototype-evidence-grid">
          <figure class="prototype-evidence">
            <img :src="homeUrl + 'images/research/embodied-swarm/physical/cardboard-prototype.jpg'" alt="ESP32, inertial sensor, cardboard lid, and cylindrical cardboard enclosure arranged as a low-fidelity controller prototype" loading="lazy" />
            <figcaption><span>01 · Low-fidelity prototype</span><strong>Testing enclosure dimensions and hardware placement</strong><p>Cardboard components provided a quick way to evaluate the cylindrical form, internal volume, and relationship between the sensing hardware and the hand-held enclosure.</p></figcaption>
          </figure>
          <figure class="prototype-evidence">
            <img :src="homeUrl + 'images/research/embodied-swarm/physical/printed-enclosure.jpg'" alt="Three separate components of the white and silver 3D-printed cylindrical controller enclosure" loading="lazy" />
            <figcaption><span>02 · 3D-printed enclosure</span><strong>Separating the shell into accessible components</strong><p>The printed top surface, electronics base, and removable shell support repeatable assembly while keeping the ESP32 and IMU accessible during iteration.</p></figcaption>
          </figure>
          <figure class="prototype-evidence">
            <img :src="homeUrl + 'images/research/embodied-swarm/physical/hardware-integration.jpg'" alt="ESP32 and MPU6050 inertial sensor mounted and wired inside the controller base" loading="lazy" />
            <figcaption><span>03 · Hardware integration</span><strong>Connecting sensing and control inside the printed base</strong><p>The ESP32 and MPU6050 were mounted as an accessible internal assembly so motion sensing could be tested and recalibrated throughout fabrication.</p></figcaption>
          </figure>
          <figure class="prototype-evidence prototype-evidence--assembled">
            <img :src="homeUrl + 'images/research/embodied-swarm/physical/assembled-controller.jpg'" alt="Completed cylindrical embodied swarm controller with its USB cable" loading="lazy" />
            <figcaption><span>04 · Assembled controller</span><strong>A robust hand-held form for repeatable physical testing</strong><p>The finished enclosure contains the sensing architecture used in the pilot while providing a consistent surface and grip for the five embodied gestures.</p></figcaption>
          </figure>
        </div>
        <aside class="shell physical-rationale"><span>Design rationale</span><p>The enclosure separates the removable upper shell from the electronics base, allowing the ESP32 and IMU to remain accessible during iteration.</p></aside>
      </section>

      <section class="future-directions section-mid">
        <div class="shell future-heading">
          <p class="kicker">11 · Future Directions</p>
          <h2>From Prototype to Research Platform</h2>
          <p>The pilot established a working embodied–swarm interaction loop. The next step is to expand both the interaction vocabulary and the autonomy being interpreted.</p>
        </div>

        <ol class="shell future-grid">
          <li>
            <header><span>01</span><h3>Richer Embodied Input</h3></header>
            <dl><div><dt>Current limitation</dt><dd>The controller intentionally constrains interaction to five repeatable single-hand gestures.</dd></div><div><dt>Next step</dt><dd>I will explore coordinated two-hand input, continuous motion, or compound gestures.</dd></div></dl>
            <blockquote>How does a richer embodied vocabulary affect the way users form mental models of collective behavior?</blockquote>
          </li>
          <li>
            <header><span>02</span><h3>Physical Swarm Deployment</h3></header>
            <dl><div><dt>Current limitation</dt><dd>The current experiments use a simulated swarm to maintain repeatable collective dynamics.</dd></div><div><dt>Next step</dt><dd>I will transfer the same interaction logic to a small physical robot swarm.</dd></div></dl>
            <blockquote>How does mental-model formation change when collective behavior becomes spatial, noisy, and physically embodied?</blockquote>
          </li>
          <li>
            <header><span>03</span><h3>Adaptive Collective Explanations</h3></header>
            <dl><div><dt>Current limitation</dt><dd>Experiment B compares only two explanatory levels: global collective intent and local relational behavior.</dd></div><div><dt>Next step</dt><dd>I will explore adaptive or multimodal explanations that change according to swarm uncertainty, user confidence, or collective state.</dd></div></dl>
            <blockquote>When should a swarm explain the collective, and when should it explain individual behavior?</blockquote>
          </li>
          <li>
            <header><span>04</span><h3>Stronger Mental-Model Measures</h3></header>
            <dl><div><dt>Current limitation</dt><dd>The PRE / POST icon-mapping task produced a ceiling effect and was not sensitive enough to capture learning differences.</dd></div><div><dt>Next step</dt><dd>I will use richer probes such as trajectory prediction, explanation generation, transfer to unseen swarm behaviors, and confidence calibration.</dd></div></dl>
            <blockquote>How can changes in users’ mental models be measured beyond simple mapping accuracy?</blockquote>
          </li>
        </ol>

        <aside class="shell limitations-note">
          <span>Current limitations</span>
          <ul><li>n = 6 exploratory pilot</li><li>Simulated rather than physical swarm</li><li>Autonomy tested in one constrained routing scenario</li><li>PRE / POST mapping instrument showed a ceiling effect</li></ul>
        </aside>

      </section>

    </article>

    <footer class="footer shell"><p>Interested in this research?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<style lang="scss" scoped>
.swarm-page {
  --bg: #071116;
  --bg-mid: #10252a;
  --bg-soft: #173136;
  --panel: #0b1b20;
  --panel-2: #142b30;
  --text: #eef6f2;
  --muted: #9fb0b5;
  --line: #355057;
  --teal: #9bded5;
  --teal-bright: #43c8c5;
  --ochre: #e1aa5a;
  --coral: #dc755e;
  min-height: 100vh;
  color: var(--text);
  background: var(--bg);
  font-family: 'Inter', sans-serif;
}

.shell { width: min(1240px, calc(100% - 3rem)); margin-inline: auto; }
.section-dark, .section-mid, .section-accent { padding: 7rem 0; }
.section-dark { background: var(--bg); }
.section-mid { background: var(--bg-mid); }
.section-accent { background: #15383c; }
.topbar { height: 72px; padding: 0 max(1.5rem, calc((100vw - 1240px)/2)); display: flex; align-items: center; justify-content: space-between; background: var(--bg); border-bottom: 1px solid #1e353b; }
.brand { font-weight: 700; }
.back-link { display: flex; gap: .5rem; align-items: center; color: var(--muted); font-size: .84rem; }
.back-link:hover { color: var(--teal); }
.kicker, .mini-label { color: var(--teal); font-size: .72rem; font-weight: 800; letter-spacing: .14em; line-height: 1.4; text-transform: uppercase; }
.kicker { display: block; margin: 0 0 .85rem; }
.section-heading { max-width: 850px; }
.section-heading h2, .transition h2, .experiment-b-intro h2 { margin: 0 0 1.2rem; font-size: clamp(2.3rem, 5vw, 4.7rem); line-height: .98; letter-spacing: -.055em; }
.section-heading > p:last-child, .transition-copy > p:last-child, .experiment-b-intro > div:first-child > p:last-child { max-width: 800px; color: var(--muted); line-height: 1.75; }

.hero { padding: 3rem 0 5rem; }
.hero__meta { margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between; gap: 1rem; color: var(--muted); font-size: .74rem; }
.hero__meta > p { color: var(--teal); font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.hero__meta div { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: .45rem; }
.hero__meta span { padding: .35rem .65rem; border: 1px solid var(--line); border-radius: 999px; }
.hero__visual { margin: 0; border: 1px solid #1f3940; border-radius: 20px; overflow: hidden; background: #071116; box-shadow: 0 28px 80px rgba(0,0,0,.35); }
.hero__visual img { width: 100%; aspect-ratio: 16/9; object-fit: cover; }
.hero__visual figcaption, .evidence-figure figcaption { padding: .75rem 0; color: #81949a; font-size: .73rem; line-height: 1.55; }

.question-grid { display: block; }
.question-grid > div { max-width: 1080px; }
.question-grid h1 { margin: 0; font-size: clamp(2.8rem, 6.2vw, 5.8rem); line-height: .98; letter-spacing: -.06em; }
.question-grid > div > p:last-child { margin-top: 2rem; max-width: 890px; color: var(--muted); font-size: 1.05rem; line-height: 1.8; }
.arc { margin-top: 5rem; display: grid; grid-template-columns: repeat(5, 1fr); border: 1px solid var(--line); }
.arc article { min-height: 170px; padding: 1.4rem; border-right: 1px solid var(--line); }
.arc article:last-child { border-right: 0; }
.arc span, .arc small { display: block; color: #799097; font-size: .67rem; }
.arc strong { display: block; margin: 2.7rem 0 .35rem; color: var(--teal); font-size: 1.05rem; }
.arc-caption { margin-top: 1rem; color: #789097; font-size: .75rem; text-align: center; }

.prototype-progression { margin: 4rem auto 0; }
.prototype-progression img { display: block; width: 100%; border: 1px solid #315057; border-radius: 18px; background: #071116; box-shadow: 0 24px 70px rgba(0,0,0,.24); }
.prototype-progression figcaption { padding: .8rem .2rem 0; color: #82969c; font-size: .72rem; line-height: 1.55; }

.controller-row { margin-top: 4rem; display: grid; grid-template-columns: 1.08fr .92fr; gap: 1rem; align-items: stretch; }
.interaction-photo { margin: 0; overflow: hidden; border: 1px solid #315057; border-radius: 18px; background: #0a191e; }
.interaction-photo img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
.interaction-photo figcaption { padding: .85rem 1rem 1rem; color: #82969c; font-size: .7rem; line-height: 1.55; }
.interaction-photo figcaption strong { color: #dce8e4; }
.controller-rationale, .debug-note, .classifier-flow, .swarm-validation, .ui-placeholder, .task-list, .freeze-section, .prediction-panel { border: 1px solid var(--line); border-radius: 18px; background: var(--panel); }
.ui-placeholder > span { color: var(--teal); font-size: .66rem; font-weight: 800; letter-spacing: .12em; }
.controller-rationale { padding: 1.8rem; }
.controller-rationale h3 { margin: .8rem 0 1rem; font-size: 1.65rem; letter-spacing: -.035em; }
.controller-rationale > p:nth-of-type(2) { color: var(--muted); font-size: .82rem; line-height: 1.7; }
.rationale-flow { margin-top: 1.7rem; display: grid; grid-template-columns: repeat(7, auto); gap: .35rem; align-items: center; }
.rationale-flow span, .rationale-flow strong { min-height: 52px; padding: .5rem; display: flex; align-items: center; justify-content: center; border: 1px solid #355159; color: #d9e6e2; font-size: .58rem; line-height: 1.35; text-align: center; }
.rationale-flow strong { color: #071116; border-color: var(--teal); background: var(--teal); }
.rationale-flow i { color: var(--ochre); font-style: normal; }
.rationale-principles { margin-top: 1.7rem; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; border-top: 1px solid #294147; }
.rationale-principles article { padding: 1rem 0 0; display: grid; grid-template-columns: 25px 1fr; gap: .65rem; }
.rationale-principles article > span { color: var(--ochre); font-size: .66rem; }
.rationale-principles strong { color: var(--teal); font-size: .76rem; }
.rationale-principles p { margin-top: .35rem; color: var(--muted); font-size: .69rem; line-height: 1.55; }
.gesture-gallery { margin-top: 4.5rem; padding-top: 3rem; border-top: 1px solid var(--line); }
.gesture-gallery__heading { display: flex; align-items: end; justify-content: space-between; gap: 1rem; }
.gesture-gallery__heading h3 { margin: 0; max-width: 720px; font-size: clamp(1.6rem, 3vw, 2.5rem); letter-spacing: -.035em; }
.gesture-gallery__grid { margin-top: 1.6rem; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 1rem; }
.gesture-card { grid-column: span 2; overflow: hidden; border: 1px solid var(--line); border-radius: 16px; background: var(--panel); }
.gesture-card:nth-child(4) { grid-column: 2 / span 2; }
.gesture-card:nth-child(5) { grid-column: span 2; }
.gesture-card img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
.gesture-card > div { padding: .9rem 1rem 1rem; }
.gesture-card strong, .gesture-card small { display: block; }
.gesture-card strong { color: var(--teal); font-size: .78rem; letter-spacing: .06em; }
.gesture-card small { margin-top: .28rem; color: var(--muted); font-size: .7rem; line-height: 1.5; }

.motion-process { margin-top: 7rem; padding-top: 6rem; border-top: 1px solid var(--line); }
.motion-process__heading { max-width: 900px; }
.motion-process__heading h2 { margin: .7rem 0 1.1rem; font-size: clamp(2.6rem, 5vw, 5rem); line-height: .98; letter-spacing: -.055em; }
.motion-process__heading > p:last-child { max-width: 780px; color: var(--muted); line-height: 1.75; }
.part-number { flex: 0 0 auto; color: var(--ochre); font-size: 1.8rem; font-weight: 800; letter-spacing: -.04em; }
.part-heading { display: flex; gap: 1.2rem; align-items: flex-start; }
.part-heading h3 { margin-top: .45rem; font-size: 1.35rem; }

.collector-section { margin-top: 4rem; display: grid; grid-template-columns: .7fr 1.3fr; gap: 2.5rem; align-items: center; }
.collector-copy h3 { margin: .7rem 0 1rem; font-size: 2rem; letter-spacing: -.035em; }
.collector-copy > p:last-of-type { color: var(--muted); line-height: 1.75; }
.collector-copy .part-number { display: block; margin-bottom: 1.3rem; }
.collector-meta { margin-top: 2rem; display: flex; flex-wrap: wrap; gap: .6rem; }
.collector-meta span { padding: .7rem .8rem; border-left: 2px solid var(--teal-bright); color: var(--muted); font-size: .68rem; background: rgba(7,17,22,.36); }
.collector-meta strong { display: block; margin-bottom: .2rem; color: var(--text); font-size: .95rem; }
.collector-gallery { min-width: 0; margin: 0; padding: 1rem; border: 1px solid #426168; background: #071216; box-shadow: 0 24px 60px rgba(0,0,0,.22); }
.collector-gallery__top { display: flex; justify-content: space-between; gap: 1rem; color: #789097; font-size: .62rem; letter-spacing: .08em; }
.collector-gallery__top strong { color: var(--teal); }
.collector-gallery__image { margin: 1rem 0; overflow: hidden; border: 1px solid #31494f; background: #f6f6f6; }
.collector-gallery__image img { width: 100%; aspect-ratio: 1.51 / 1; object-fit: contain; }
.collector-gallery__tabs { display: flex; flex-wrap: wrap; gap: .45rem; }
.collector-gallery__tabs button { padding: .45rem .7rem; color: #8fa1a7; border: 1px solid #314b52; border-radius: 999px; background: transparent; font-size: .66rem; font-weight: 700; transition: color .2s ease, border-color .2s ease, background .2s ease; }
.collector-gallery__tabs button:hover { color: var(--text); border-color: var(--teal); }
.collector-gallery__tabs button.active { color: #061014; border-color: var(--teal); background: var(--teal); }
.collector-gallery figcaption { padding: .9rem 0 0; color: var(--muted); font-size: .7rem; }

.failure-section { margin-top: 5rem; }
.failure-cards { margin-top: 1.8rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); }
.failure-cards article { min-height: 205px; padding: 1.4rem; background: #0b1c21; }
.failure-cards article > span { color: var(--coral); font-family: var(--font-mono); font-size: .72rem; }
.failure-cards h4 { margin: 2.2rem 0 .7rem; font-size: 1.05rem; }
.failure-cards p { color: var(--muted); font-size: .78rem; line-height: 1.65; }

.feature-section { margin-top: 5rem; }
.feature-block { margin-top: 1.2rem; display: grid; align-items: center; overflow: hidden; border-top: 1px solid var(--line); background: #0a181d; }
.feature-block--translation { grid-template-columns: .65fr 1.35fr; }
.feature-block--rotation { grid-template-columns: 1.35fr .65fr; background: #11282d; }
.feature-block--shake { grid-template-columns: .58fr 1.42fr; }
.feature-copy { padding: 2.2rem; }
.feature-copy > span { color: var(--teal); font-size: .67rem; font-weight: 800; letter-spacing: .12em; }
.feature-copy h4 { margin: .75rem 0 1rem; font-size: 1.75rem; letter-spacing: -.035em; }
.feature-copy p, .feature-copy blockquote { color: var(--muted); font-size: .84rem; line-height: 1.7; }
.feature-copy blockquote { margin-top: 1.2rem; padding-left: 1rem; border-left: 2px solid var(--ochre); }
.feature-copy dl { margin-top: 1.4rem; }
.feature-copy dl div { padding: .65rem 0; border-top: 1px solid #284149; }
.feature-copy dt { color: var(--muted); font-size: .67rem; }
.feature-copy dd { margin: .15rem 0 0; color: var(--teal); font-size: .82rem; font-weight: 800; }
.feature-copy code { display: block; margin-top: 1.2rem; padding: .8rem; color: var(--ochre); background: #061014; font-size: .72rem; }
.feature-block figure { margin: 0; padding: 1.2rem; }
.feature-block figure img { width: 100%; border: 1px solid #29454b; }
.feature-block figure figcaption { margin-top: .6rem; color: #82969c; font-size: .68rem; }

.final-classifier { margin-top: 5rem; padding-top: 4rem; border-top: 1px solid var(--line); }
.final-classifier__flow { margin: 2rem 0 1rem; display: grid; grid-template-columns: 1fr auto 1.15fr auto 1.4fr auto 1fr auto .8fr auto 1.1fr; gap: .55rem; align-items: stretch; }
.final-classifier__flow span, .final-classifier__flow strong { padding: 1rem .8rem; display: flex; align-items: center; justify-content: center; min-height: 88px; border: 1px solid #39565d; color: #d9e7e3; text-align: center; font-size: .7rem; line-height: 1.45; }
.final-classifier__flow strong { color: #061014; background: var(--teal); border-color: var(--teal); }
.final-classifier__flow i { align-self: center; color: var(--ochre); font-style: normal; }
.motion-process__conclusion { margin: 4rem auto 0; max-width: 920px; color: var(--text); font-size: clamp(1.35rem, 2.6vw, 2.3rem); font-weight: 600; line-height: 1.45; letter-spacing: -.025em; text-align: center; }

.iteration-grid { margin-top: 1rem; display: grid; grid-template-columns: repeat(5, 1fr); gap: .7rem; }
.iteration-grid article { min-height: 255px; padding: 1.3rem; border-top: 2px solid var(--teal-bright); background: var(--panel); }
.iteration-grid article > span { color: var(--teal); font-weight: 800; }
.iteration-grid article > small { float: right; color: var(--ochre); font-size: .62rem; }
.iteration-grid h3 { margin: 3rem 0 .75rem; font-size: 1rem; }
.iteration-grid p { color: var(--muted); font-size: .77rem; line-height: 1.65; }
.debug-note { margin-top: 1rem; padding: 2rem; display: grid; grid-template-columns: 1.2fr .8fr; gap: 3rem; align-items: center; }
.debug-note h3 { margin: .7rem 0; font-size: 1.3rem; }
.debug-note p:last-child { color: var(--muted); line-height: 1.65; }
.debug-note pre { margin: 0; padding: 1.2rem; overflow: auto; border-radius: 12px; color: var(--teal); background: #061014; font-size: .75rem; }
.evidence-figure { margin: 3rem 0 0; }
.evidence-figure img { width: 100%; border: 1px solid #28434a; border-radius: 18px; }
.classifier-flow { margin-top: 1rem; padding: 2rem; }
.flow-line { margin: 1.7rem 0; display: grid; grid-template-columns: repeat(9, auto); gap: .7rem; align-items: center; }
.flow-line span { padding: .8rem; text-align: center; color: #ddecE8; border: 1px solid #39555c; border-radius: 10px; font-size: .75rem; }
.flow-line i { color: var(--teal); font-style: normal; }
.rule-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--line); }
.rule-grid article { padding: 1.2rem; background: #0b181d; }
.rule-grid span, .rule-grid small { display: block; color: var(--muted); font-size: .66rem; }
.rule-grid strong { display: block; margin: .55rem 0; color: var(--teal); font-size: .86rem; }
.swarm-validation { margin-top: 1rem; padding: 2rem; display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
.swarm-validation h3 { margin: .7rem 0; font-size: 1.4rem; }
.swarm-validation p:last-child { color: var(--muted); line-height: 1.65; }
.flocking-model { display: flex; flex-wrap: wrap; gap: .6rem; align-items: center; justify-content: center; }
.flocking-model span, .flocking-model strong { padding: .75rem; border: 1px solid var(--line); font-size: .68rem; }
.flocking-model strong { color: #071116; background: var(--teal); border-color: var(--teal); }
.flocking-model b, .flocking-model i { color: var(--ochre); font-style: normal; }

.experiment-a-flow { margin: 4rem 0 0; display: grid; grid-template-columns: repeat(5, 1fr); list-style: none; border: 1px solid var(--line); }
.experiment-a-flow li { position: relative; min-height: 210px; padding: 1.4rem; border-right: 1px solid var(--line); }
.experiment-a-flow li:last-child { border: 0; }
.experiment-a-flow span, .experiment-a-flow small { display: block; }
.experiment-a-flow span { color: var(--ochre); font-size: .7rem; font-weight: 800; }
.experiment-a-flow strong { display: block; margin: 2.5rem 0 .6rem; color: var(--teal); }
.experiment-a-flow small { color: var(--muted); font-size: .72rem; line-height: 1.55; }
.experiment-a-flow i { position: absolute; right: -.6rem; top: 45%; z-index: 2; color: var(--teal); font-style: normal; }
.experiment-a-support { margin-top: 1rem; display: grid; grid-template-columns: .85fr 1.15fr; gap: 1rem; }
.ui-placeholder, .task-list { padding: 1.6rem; }
.experiment-interface { min-width: 0; margin: 0; }
.experiment-interface > div { padding: .8rem; border: 1px solid #355057; border-radius: 16px; background: #071216; }
.experiment-interface > div > span { display: block; margin: .15rem .2rem .75rem; color: var(--teal); font-size: .66rem; font-weight: 800; letter-spacing: .12em; }
.experiment-interface img { display: block; width: 100%; border-radius: 10px; background: #f5f5f5; }
.experiment-interface figcaption { padding: .75rem .2rem 0; color: #82969c; font-size: .7rem; line-height: 1.55; }
.experiment-interface--a img { aspect-ratio: 1.51 / 1; object-fit: contain; }
.experiment-interface--b img { aspect-ratio: 1.62 / 1; object-fit: contain; }
.ui-mock { margin: 1.5rem 0; min-height: 260px; padding: 1.3rem; display: flex; flex-direction: column; gap: 1rem; border-radius: 12px; color: #7f9399; background: #071116; }
.ui-mock b { color: var(--teal); font-size: .72rem; }
.ui-mock i { display: block; width: 70%; height: 1px; background: #34545b; }
.ui-mock i:nth-of-type(2) { width: 45%; }
.ui-mock small { margin-top: auto; }
.ui-placeholder > p { color: var(--muted); font-size: .75rem; }
.task-list article { padding: 1rem 0; border-bottom: 1px solid #263e44; }
.task-list article strong { color: var(--teal); font-size: .76rem; }
.task-list article p, .task-list aside { margin-top: .35rem; color: var(--muted); font-size: .74rem; line-height: 1.55; }
.task-list aside { padding-top: 1rem; color: var(--ochre); }
.measure-strip { margin-top: 1rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); }
.measure-strip article { padding: 1.3rem; background: var(--panel); }
.measure-strip span, .measure-strip small { display: block; color: var(--muted); font-size: .68rem; }
.measure-strip strong { display: block; margin: .45rem 0; font-size: .88rem; }
.transition-grid { display: grid; grid-template-columns: 1.25fr .75fr; gap: 4rem; align-items: center; }
.transition h2 { font-size: clamp(2.5rem, 5vw, 4.6rem); }
.transition-model { padding: 1.5rem; border: 1px solid #4e7477; background: rgba(6,20,23,.35); }
.transition-model span, .transition-model strong { display: block; }
.transition-model span { color: var(--teal); font-size: .67rem; text-transform: uppercase; }
.transition-model strong { margin: .4rem 0 1rem; font-size: .85rem; }
.transition-model i { color: var(--ochre); font-style: normal; }

.experiment-b-intro { display: grid; grid-template-columns: .95fr 1.05fr; gap: 4rem; align-items: center; }
.experiment-b-flow { margin-top: 3rem; display: grid; grid-template-columns: repeat(7, 1fr); gap: 1px; background: var(--line); }
.experiment-b-flow article { min-height: 120px; padding: 1rem; background: var(--panel); }
.experiment-b-flow span { color: var(--ochre); font-size: .66rem; }
.experiment-b-flow strong { display: block; margin-top: 2rem; font-size: .76rem; line-height: 1.4; }
.cue-comparison { margin-top: 1rem; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.cue-comparison article { padding: 1.5rem; border: 1px solid var(--line); border-radius: 16px; background: var(--panel); }
.cue-comparison article > span { color: var(--teal); font-size: .69rem; font-weight: 800; }
.cue-comparison h3 { margin: 1.3rem 0 .6rem; font-size: 1rem; }
.cue-comparison p { color: var(--muted); font-size: .76rem; line-height: 1.6; }
.cue-visual { position: relative; height: 190px; margin-top: 1rem; border: 1px solid #29454b; border-radius: 12px; overflow: hidden; background: #071216; }
.cue-visual::after { content: ''; position: absolute; inset: 0; opacity: .22; background-image: linear-gradient(#244047 1px, transparent 1px), linear-gradient(90deg, #244047 1px, transparent 1px); background-size: 28px 28px; }
.cue-visual i { position: absolute; z-index: 3; width: 9px; height: 9px; border-radius: 50%; background: var(--teal); box-shadow: 0 0 8px rgba(155,222,213,.35); }
.cue-visual i::after { content: ''; position: absolute; left: 11px; top: 3px; width: 8px; height: 1px; background: rgba(155,222,213,.48); transform: rotate(-18deg); }
.cue-visual i:nth-of-type(1) { left: 18%; top: 62%; }.cue-visual i:nth-of-type(2) { left: 32%; top: 38%; }.cue-visual i:nth-of-type(3) { left: 41%; top: 28%; }.cue-visual i:nth-of-type(4) { left: 51%; top: 35%; }.cue-visual i:nth-of-type(5) { left: 60%; top: 27%; }.cue-visual i:nth-of-type(6) { left: 69%; top: 42%; }.cue-visual i:nth-of-type(7) { left: 42%; top: 55%; }.cue-visual i:nth-of-type(8) { left: 53%; top: 63%; }.cue-visual i:nth-of-type(9) { left: 66%; top: 57%; }.cue-visual i:nth-of-type(10) { left: 74%; top: 70%; }.cue-visual i:nth-of-type(11) { left: 34%; top: 72%; background: var(--ochre); box-shadow: 0 0 8px rgba(225,170,90,.4); }.cue-visual i:nth-of-type(12) { left: 58%; top: 48%; background: var(--ochre); box-shadow: 0 0 8px rgba(225,170,90,.4); }
.cue-visual i:nth-of-type(11)::after, .cue-visual i:nth-of-type(12)::after { background: rgba(225,170,90,.55); }
.cue-wall { position: absolute; left: 25%; z-index: 4; width: 9px; height: 54px; background: #73828a; box-shadow: 0 0 0 1px rgba(197,216,221,.2); }
.cue-wall--top { top: 0; }.cue-wall--bottom { bottom: 0; }
.cue-goal { position: absolute; right: 6%; top: 50%; z-index: 4; width: 42px; height: 42px; border: 1px dashed rgba(155,222,213,.38); border-radius: 50%; transform: translateY(-50%); }
.cue-goal > span { position: absolute; inset: 11px; border: 2px solid #80c99a; border-radius: 50%; box-shadow: 0 0 9px rgba(128,201,154,.35); }
.cue-hull { position: absolute; left: 29%; top: 15%; z-index: 2; width: 51%; height: 69%; border: 2px solid rgba(155,222,213,.58); border-radius: 48% 42% 52% 45%; background: rgba(67,200,197,.09); transform: rotate(4deg); }
.cue-hull::after { content: ''; position: absolute; left: 29%; top: 48%; width: 50%; border-top: 2px dashed rgba(155,222,213,.55); transform: rotate(-8deg); }
.cue-links { position: absolute; inset: 0; z-index: 2; width: 100%; height: 100%; }
.cue-links path { fill: none; stroke: rgba(155,222,213,.82); stroke-width: 1.8; vector-effect: non-scaling-stroke; filter: drop-shadow(0 0 3px rgba(67,200,197,.35)); }
.freeze-section { margin-top: 1rem; padding: 2rem; display: grid; grid-template-columns: .8fr 1.2fr; gap: 3rem; align-items: center; }
.freeze-section h3 { margin: .7rem 0; font-size: 1.35rem; }
.freeze-section p:last-child { color: var(--muted); line-height: 1.65; }
.freeze-diagram { display: grid; grid-template-columns: repeat(7, auto); gap: .55rem; align-items: center; }
.freeze-diagram article { padding: .9rem; border: 1px solid var(--line); }
.freeze-diagram span, .freeze-diagram small { display: block; color: var(--muted); font-size: .62rem; }
.freeze-diagram article strong { display: block; margin-top: .35rem; color: var(--teal); font-size: .76rem; }
.freeze-diagram i { color: var(--ochre); font-style: normal; }
.freeze-diagram > b { grid-column: 1 / -1; text-align: center; color: var(--ochre); }
.freeze-diagram > strong, .freeze-diagram > small { grid-column: 1 / -1; text-align: center; }
.freeze-diagram > strong { padding: .8rem; color: #071116; background: var(--teal); }
.prediction-panel { margin-top: 1rem; padding: 2rem; text-align: center; }
.prediction-panel > span { color: var(--teal); font-size: .67rem; font-weight: 800; text-transform: uppercase; }
.prediction-panel h3 { margin: .8rem 0 1.2rem; font-size: 1.7rem; }
.prediction-panel div { display: flex; justify-content: center; flex-wrap: wrap; gap: .6rem; }
.prediction-panel i { padding: .55rem .8rem; border: 1px solid var(--line); border-radius: 999px; color: #d4e2de; font-size: .75rem; font-style: normal; }
.prediction-panel p { margin: 1.2rem auto 0; max-width: 760px; color: var(--muted); font-size: .78rem; }

.mapping-check { border-bottom: 1px solid #1c3339; }
.mapping-check-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: clamp(3rem, 6vw, 6.5rem); align-items: stretch; }
.mapping-check-copy { display: flex; flex-direction: column; }
.mapping-check-copy h2 { margin: 0; max-width: 560px; font-size: clamp(2.5rem, 4.8vw, 4.6rem); line-height: .98; letter-spacing: -.055em; }
.mapping-method { margin-top: 1.6rem; max-width: 560px; color: var(--muted); line-height: 1.75; }
.mapping-takeaway { margin-top: 3rem; padding: 1.5rem 0 1.5rem 1.5rem; border-left: 3px solid var(--ochre); background: linear-gradient(90deg, rgba(225,170,90,.09), transparent 82%); }
.mapping-takeaway span { color: var(--ochre); font-size: .69rem; font-weight: 800; letter-spacing: .13em; text-transform: uppercase; }
.mapping-takeaway p { margin-top: .8rem; color: #dce8e4; font-size: 1rem; line-height: 1.7; }
.mapping-evidence { padding-left: clamp(2rem, 4vw, 4rem); border-left: 1px solid var(--line); }
.accuracy-mini { padding-bottom: 3rem; border-bottom: 1px solid var(--line); }
.accuracy-mini > div:first-child, .confidence-plot header, .confidence-plot header > div { display: flex; align-items: baseline; gap: .85rem; }
.accuracy-mini > div:first-child > span, .confidence-plot header span { color: var(--ochre); font-size: .72rem; font-weight: 800; }
.accuracy-mini h3, .confidence-plot h3 { font-size: 1.35rem; letter-spacing: -.02em; }
.accuracy-mini > div:first-child small { margin-left: auto; color: var(--muted); font-size: .68rem; }
.accuracy-row { margin-top: 1.25rem; display: grid; grid-template-columns: 54px 1fr 52px; gap: .9rem; align-items: center; }
.accuracy-row strong, .accuracy-row span { font-size: .75rem; }
.accuracy-row strong { color: var(--teal); }
.accuracy-row span { color: #dce8e4; text-align: right; }
.accuracy-row > i { height: 5px; overflow: hidden; background: #1b343a; }
.accuracy-row > i > b { display: block; width: 100%; height: 100%; background: var(--teal-bright); }
.accuracy-mini > p { margin: 1rem 0 0 69px; color: var(--muted); font-size: .7rem; }
.confidence-plot { padding-top: 3rem; }
.confidence-plot header { justify-content: space-between; }
.confidence-plot header > p { color: var(--muted); font-size: .68rem; }
.confidence-plot svg { display: block; width: 100%; height: auto; margin-top: 1.4rem; overflow: visible; }
.confidence-grid line { stroke: #29434a; stroke-width: 1; }
.confidence-grid text { fill: #789097; font-size: 15px; text-anchor: end; }
.confidence-participants line { stroke: rgba(155,222,213,.48); stroke-width: 2; }
.confidence-participants circle { fill: #9bded5; stroke: #071116; stroke-width: 3; }
.confidence-participants text { fill: #91a5aa; font-size: 13px; text-anchor: end; }
.confidence-mean line { stroke: var(--ochre); stroke-width: 4; }
.confidence-mean circle { fill: var(--ochre); stroke: #071116; stroke-width: 4; }
.confidence-mean text { fill: var(--ochre); font-size: 16px; font-weight: 800; }
.confidence-axis text { fill: #9fb0b5; font-size: 15px; font-weight: 700; text-anchor: middle; }
.confidence-summary { display: flex; align-items: center; justify-content: center; gap: 1.2rem; color: var(--muted); font-size: .69rem; }
.confidence-summary span { display: flex; flex-direction: column; gap: .25rem; }
.confidence-summary strong { color: #dce8e4; font-size: .92rem; }
.confidence-summary i { color: var(--ochre); font-style: normal; }
.mapping-interpretation-wide { margin-top: 3.4rem; padding-top: 1.5rem; display: grid; grid-template-columns: 190px 1fr; gap: 2rem; border-top: 1px solid #355057; }
.mapping-interpretation-wide strong { color: var(--teal); font-size: .68rem; letter-spacing: .1em; text-transform: uppercase; }
.mapping-interpretation-wide p { max-width: 980px; color: var(--muted); font-size: .76rem; line-height: 1.7; }

.findings-header { display: grid; grid-template-columns: 1fr .38fr; gap: 4rem; align-items: end; }
.findings-header h2 { margin: 0; max-width: 930px; font-size: clamp(2.5rem, 5vw, 4.8rem); line-height: .98; letter-spacing: -.055em; }
.findings-header > p { padding-bottom: .35rem; color: var(--muted); font-size: .72rem; line-height: 1.65; }
.experiment-a-results { margin-top: 4rem; display: grid; grid-template-columns: .8fr 1.2fr; gap: 1px; background: var(--line); }
.knowledge-enactment, .task-success-chart { padding: clamp(1.8rem, 3.5vw, 3.2rem); background: var(--panel); }
.knowledge-enactment > div { margin-top: 2.2rem; display: flex; align-items: flex-end; justify-content: space-between; gap: 1.5rem; }
.knowledge-enactment > div span, .knowledge-enactment > div small { display: block; }
.knowledge-enactment > div span { color: var(--text); font-size: 1rem; font-weight: 700; }
.knowledge-enactment > div small { margin-top: .35rem; color: var(--muted); font-size: .67rem; font-weight: 400; }
.knowledge-enactment > div strong { color: var(--teal); font-size: 1.2rem; white-space: nowrap; }
.knowledge-enactment > i { display: block; margin: 1.1rem 0 0; color: var(--ochre); font-size: 1.5rem; font-style: normal; text-align: center; }
.knowledge-enactment > p:last-child { margin-top: 2.4rem; padding-top: 1.4rem; border-top: 1px solid #284147; color: var(--muted); font-size: .8rem; line-height: 1.7; }
.task-success-chart { margin: 0; }
.task-success-chart figcaption { display: flex; justify-content: space-between; gap: 1rem; margin-bottom: 2rem; }
.task-success-chart figcaption span { color: var(--teal); font-weight: 800; }
.task-success-chart figcaption small { color: var(--muted); font-size: .67rem; }
.task-bar { margin-top: 1.2rem; display: grid; grid-template-columns: 150px 1fr 48px; gap: 1rem; align-items: center; }
.task-bar strong, .task-bar span { font-size: .72rem; }
.task-bar strong { color: #d8e5e1; }
.task-bar span { color: var(--ochre); text-align: right; }
.task-bar > i { height: 8px; background: #1d363c; }
.task-bar > i > b { display: block; height: 100%; background: var(--teal-bright); }
.task-success-chart > p { margin-top: 2.5rem; padding-top: 1.3rem; border-top: 1px solid #284147; color: var(--muted); font-size: .78rem; line-height: 1.7; }
.findings-secondary, .experiment-b-summary { margin-top: 1px; display: grid; grid-template-columns: 1.2fr .8fr; gap: 1px; background: var(--line); }
.finding-takeaway, .subjective-compact { padding: 1.8rem; background: #0b1b20; }
.finding-takeaway { border-left: 3px solid var(--ochre); }
.finding-takeaway > span, .subjective-compact > span { color: var(--ochre); font-size: .68rem; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; }
.finding-takeaway p { margin-top: .75rem; color: #dce8e4; font-size: 1rem; line-height: 1.55; }
.finding-takeaway p > strong { display: block; margin-bottom: .65rem; color: var(--text); font-size: 1.12rem; line-height: 1.55; }
.subjective-compact > span { color: var(--teal); }
.subjective-compact dl { margin-top: 1rem; }
.subjective-compact dl div { padding: .45rem 0; display: flex; justify-content: space-between; gap: 1rem; border-top: 1px solid #294147; }
.subjective-compact dt { color: var(--muted); font-size: .72rem; }
.subjective-compact dd { color: #dce8e4; font-size: .76rem; font-weight: 800; }
.subjective-compact > p { margin-top: .9rem; color: var(--muted); font-size: .7rem; line-height: 1.55; }
.cue-results { margin-top: 4rem; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.cue-results article { padding: 2rem; border-right: 1px solid var(--line); background: #08171b; }
.cue-results article:last-child { border-right: 0; }
.cue-results article.emphasized { background: linear-gradient(180deg, rgba(67,200,197,.12), #0b1b20); box-shadow: inset 0 3px 0 var(--teal-bright); }
.cue-results header { min-height: 30px; display: flex; justify-content: space-between; gap: 1rem; }
.cue-results header > span { color: var(--teal); font-size: .76rem; font-weight: 800; }
.cue-results header small { color: var(--ochre); font-size: .6rem; letter-spacing: .08em; }
.cue-measure { margin-top: 2.2rem; }
.cue-measure > p { color: var(--muted); font-size: .7rem; }
.cue-measure > div { margin-top: .65rem; display: grid; grid-template-columns: 1fr 72px; gap: 1rem; align-items: center; }
.cue-measure i { height: 7px; background: #20383e; }
.cue-measure i b { display: block; height: 100%; background: #668e91; }
.cue-results article.emphasized .cue-measure i b { background: var(--teal-bright); }
.cue-measure strong { color: #dce8e4; font-size: .76rem; text-align: right; }
.experiment-b-summary { grid-template-columns: 1.35fr .65fr; }
.reflection-heading { max-width: 920px; }
.reflection-heading h2, .physical-heading h2 { margin: 0; font-size: clamp(2.5rem, 5vw, 4.8rem); line-height: .98; letter-spacing: -.055em; }
.reflection-heading > p:last-child, .physical-heading > p:last-child { margin-top: 1.35rem; max-width: 820px; color: #b7c8c7; line-height: 1.75; }
.reflection-progression { position: relative; margin-top: 4.5rem; padding: 0; display: grid; grid-template-columns: repeat(4, 1fr); list-style: none; border-top: 1px solid #5a7d7f; border-bottom: 1px solid #5a7d7f; }
.reflection-progression li { position: relative; min-height: 290px; padding: 2rem 1.7rem 1.8rem 0; display: flex; flex-direction: column; }
.reflection-progression li + li { padding-left: 1.7rem; border-left: 1px solid rgba(155,222,213,.24); }
.reflection-progression li:not(:last-child)::after { content: '→'; position: absolute; top: -16px; right: -13px; z-index: 1; width: 26px; height: 30px; display: grid; place-items: center; color: var(--ochre); background: #15383c; font-size: 1rem; }
.reflection-progression span { color: var(--teal); font-size: .68rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; }
.reflection-progression strong { margin-top: 1.25rem; color: var(--text); font-size: .96rem; line-height: 1.58; }
.reflection-progression small { margin-top: auto; padding-top: 1.5rem; color: #abc0c0; font-size: .69rem; line-height: 1.55; }
.reflection-progression small b { color: var(--ochre); font-size: .78rem; }
.reflection-conclusion { margin-top: 2.2rem; padding: 1.5rem 0 0 1.5rem; max-width: 1000px; color: #dce8e4; font-size: 1rem; line-height: 1.7; border-left: 3px solid var(--ochre); }
.physical-heading { max-width: 920px; }
.physical-heading > p:last-child { color: var(--muted); }
.prototype-evidence-grid { margin-top: 4.5rem; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem; }
.prototype-evidence { margin: 0; overflow: hidden; border: 1px solid #315057; border-radius: 18px; background: #0a191e; }
.prototype-evidence img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; }
.prototype-evidence figcaption { padding: 1.25rem 1.4rem 1.45rem; }
.prototype-evidence figcaption span, .physical-rationale > span { display: block; color: var(--teal); font-size: .68rem; font-weight: 800; letter-spacing: .11em; text-transform: uppercase; }
.prototype-evidence figcaption strong { display: block; margin-top: .65rem; color: #dce8e4; font-size: 1.05rem; line-height: 1.35; }
.prototype-evidence figcaption p { margin-top: .55rem; color: #82969c; font-size: .74rem; line-height: 1.65; }
.prototype-evidence--assembled img { object-position: center 52%; }
.physical-rationale { margin-top: 1rem; padding: 1.5rem 1.8rem; display: grid; grid-template-columns: 190px 1fr; gap: 2rem; align-items: baseline; border-top: 1px solid #315057; border-bottom: 1px solid #315057; }
.physical-rationale p { color: #c3d1ce; font-size: .82rem; line-height: 1.65; }
.future-directions { padding-top: 5.5rem; padding-bottom: 5.5rem; }
.future-heading { max-width: 980px; }
.future-heading h2 { margin: 0; font-size: clamp(2.5rem, 5vw, 4.8rem); line-height: .98; letter-spacing: -.055em; }
.future-heading > p:last-child { margin-top: 1.35rem; max-width: 820px; color: var(--muted); line-height: 1.75; }
.future-grid { margin-top: 3.2rem; padding: 0; display: grid; grid-template-columns: repeat(2, 1fr); list-style: none; border-top: 1px solid #365158; border-left: 1px solid #365158; }
.future-grid > li { padding: 1.6rem; border-right: 1px solid #365158; border-bottom: 1px solid #365158; }
.future-grid header { display: flex; gap: 1rem; align-items: baseline; }
.future-grid header span { color: var(--ochre); font-size: .7rem; font-weight: 800; }
.future-grid h3 { margin: 0; color: var(--text); font-size: 1.3rem; letter-spacing: -.025em; }
.future-grid dl { margin-top: 1.35rem; }
.future-grid dl div { padding: .65rem 0; display: grid; grid-template-columns: 110px 1fr; gap: 1rem; border-top: 1px solid #294147; }
.future-grid dt { color: var(--teal); font-size: .65rem; font-weight: 800; letter-spacing: .06em; text-transform: uppercase; }
.future-grid dd { margin: 0; color: var(--muted); font-size: .75rem; line-height: 1.6; }
.future-grid blockquote { margin: 1rem 0 0; padding: .2rem 0 .2rem 1.1rem; color: #dce8e4; font-size: .82rem; font-style: normal; line-height: 1.55; border-left: 2px solid var(--ochre); }
.limitations-note { margin-top: 2rem; padding: 1.1rem 0; display: grid; grid-template-columns: 180px 1fr; gap: 2rem; align-items: start; border-top: 1px solid #365158; border-bottom: 1px solid #365158; }
.limitations-note > span { color: var(--teal); font-size: .68rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; }
.limitations-note ul { margin: 0; padding: 0; display: grid; grid-template-columns: repeat(2, 1fr); gap: .7rem 2rem; list-style: none; }
.limitations-note li { position: relative; padding-left: 1rem; color: #93a8ad; font-size: .72rem; line-height: 1.5; }
.limitations-note li::before { content: ''; position: absolute; left: 0; top: .55em; width: 5px; height: 5px; border-radius: 50%; background: var(--ochre); }
.footer { padding: 4rem 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid #1c3339; }
.footer > p { color: #82959b; }
.footer > a:not(.back-link) { color: var(--text); font-size: clamp(1.3rem, 3vw, 2.3rem); font-weight: 700; }
.footer > a:not(.back-link):hover { color: var(--teal); }
.footer .back-link { grid-column: 2; }

@media (max-width: 980px) {
  .question-grid, .controller-row, .experiment-a-support, .transition-grid, .experiment-b-intro, .freeze-section, .swarm-validation, .mapping-check-grid, .findings-header, .experiment-a-results { grid-template-columns: 1fr; }
  .reflection-progression { grid-template-columns: repeat(2, 1fr); }
  .future-grid { grid-template-columns: 1fr; }
  .future-grid > li { min-height: 0; }
  .reflection-progression li:nth-child(3) { border-left: 0; border-top: 1px solid rgba(155,222,213,.24); }
  .reflection-progression li:nth-child(4) { border-top: 1px solid rgba(155,222,213,.24); }
  .reflection-progression li:nth-child(2)::after { display: none; }
  .mapping-evidence { padding-left: 0; border-left: 0; }
  .arc, .iteration-grid, .experiment-a-flow { grid-template-columns: repeat(2, 1fr); }
  .gesture-gallery__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .gesture-card, .gesture-card:nth-child(4), .gesture-card:nth-child(5) { grid-column: auto; }
  .experiment-b-flow { grid-template-columns: repeat(4, 1fr); }
  .rule-grid { grid-template-columns: repeat(2, 1fr); }
  .flow-line { grid-template-columns: 1fr; }
  .flow-line i { text-align: center; transform: rotate(90deg); }
  .cue-comparison, .cue-results { grid-template-columns: 1fr; }
  .cue-results article { border-right: 0; border-bottom: 1px solid var(--line); }
  .cue-results article:last-child { border-bottom: 0; }
  .collector-section, .feature-block--translation, .feature-block--rotation, .feature-block--shake { grid-template-columns: 1fr; }
  .feature-block--rotation figure { order: 2; }
  .final-classifier__flow { grid-template-columns: 1fr; }
  .final-classifier__flow i { text-align: center; transform: rotate(90deg); }
  .rationale-flow { grid-template-columns: 1fr; }
  .rationale-flow i { text-align: center; transform: rotate(90deg); }
}

@media (max-width: 640px) {
  .shell { width: min(100% - 2rem, 1240px); }
  .section-dark, .section-mid, .section-accent { padding: 5rem 0; }
  .topbar { height: auto; padding: 1rem; gap: 1rem; }
  .hero__meta { align-items: flex-start; flex-direction: column; }
  .hero__meta div { justify-content: flex-start; }
  .arc, .iteration-grid, .experiment-a-flow, .rule-grid, .experiment-b-flow, .measure-strip, .findings-secondary, .experiment-b-summary { grid-template-columns: 1fr; }
  .arc article, .experiment-a-flow li { border-right: 0; border-bottom: 1px solid var(--line); }
  .debug-note { grid-template-columns: 1fr; }
  .failure-cards { grid-template-columns: 1fr; }
  .confidence-plot header { align-items: flex-start; flex-direction: column; }
  .confidence-summary { align-items: flex-start; flex-direction: column; }
  .confidence-summary i { transform: rotate(90deg); }
  .freeze-diagram { grid-template-columns: 1fr; }
  .freeze-diagram i { text-align: center; }
  .task-bar { grid-template-columns: 112px 1fr 42px; }
  .mapping-interpretation-wide { grid-template-columns: 1fr; gap: .7rem; }
  .reflection-progression { grid-template-columns: 1fr; }
  .reflection-progression li { min-height: 0; padding: 1.6rem 0; }
  .reflection-progression li + li { padding-left: 0; border-left: 0; border-top: 1px solid rgba(155,222,213,.24); }
  .reflection-progression li:not(:last-child)::after { display: none; }
  .reflection-progression small { margin-top: 1rem; padding-top: 0; }
  .rationale-principles { grid-template-columns: 1fr; }
  .gesture-gallery__heading { align-items: flex-start; flex-direction: column; }
  .gesture-gallery__grid { grid-template-columns: 1fr; }
  .prototype-evidence-grid { grid-template-columns: 1fr; }
  .physical-rationale { grid-template-columns: 1fr; gap: .7rem; }
  .future-grid dl div, .limitations-note { grid-template-columns: 1fr; }
  .limitations-note { gap: 1rem; }
  .limitations-note ul { grid-template-columns: 1fr; }
  .footer { grid-template-columns: 1fr; }
  .footer .back-link { grid-column: auto; }
}
</style>
