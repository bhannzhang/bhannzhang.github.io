<script setup>
import ResearchPageTopbar from './components/ResearchPageTopbar.vue'

const homeUrl = import.meta.env.BASE_URL

const parameters = [
  ['Velocity', 'How quickly the agent advances'],
  ['Acceleration', 'How speed changes over time'],
  ['Pause duration', 'How long movement is interrupted'],
  ['Pause position', 'Where interruption occurs'],
  ['Curvature', 'How far the path departs from a straight line'],
  ['Reversal distance', 'How far the agent corrects or retreats'],
  ['Reversal position', 'Where the backward phase begins'],
  ['Reversal duration', 'How long the correction unfolds'],
  ['Oscillation amplitude', 'How far movement shifts laterally'],
  ['Oscillation frequency', 'How densely the shifts repeat'],
]

const earlyProbes = [
  { name: 'Curiosity', path: 'M60 10 A28 28 0 1 1 59.9 10', duration: '4.2s', issue: 'Orbit, continuity, and repetition were bundled into one exploratory impression.' },
  { name: 'Hesitation', path: 'M8 38 L62 38 L44 38 L112 38', duration: '4.2s', issue: 'Pause, reversal, and timing changed together.' },
  { name: 'Attention', path: 'M8 38 L52 38 Q68 10 82 38 L112 38', duration: '2.8s', issue: 'Its distinction from certainty remained unclear.' },
  { name: 'Avoidance', path: 'M8 38 Q58 4 112 38', duration: '3.4s', issue: 'The motion was expressive, but causality was opaque.' },
]

const labVersions = [
  { version: 'v0.1', title: 'Basic parameter controls', text: 'The first Processing tool exposed low-level motion values. A FileWriter compile issue also made the fragility of the toolchain visible.' },
  { version: 'v0.3', title: 'Position and replay', text: 'Pause position, reversal position and duration, replay, preset naming, and CSV saving were added.' },
  { version: 'v0.4', title: 'Preset library', text: 'CSV presets could be loaded, but PREV / NEXT changed the index while repeatedly displaying P12.' },
  { version: 'v0.4.2', title: 'Row-reference correction', text: 'The preset-row reference was repaired and the interface height was reduced for more reliable study use.' },
  { version: 'v0.5', title: 'Randomized study session', text: 'P01 remained the baseline; P02–P12 were randomized once per session and traversed in a fixed order with Trial X / 12 feedback.' },
]

const probes = [
  { id: 'P01', name: 'Direct', family: 'Baseline', path: 'M8 38 L112 38', note: 'constant velocity' },
  { id: 'P02', name: 'Slow', family: 'Velocity', path: 'M8 38 L112 38', note: '½ baseline speed', slow: true },
  { id: 'P03', name: 'Accelerating', family: 'Acceleration', path: 'M8 38 L112 38', note: 'positive acceleration', accelerate: true },
  { id: 'P04', name: 'Decelerating', family: 'Acceleration', path: 'M8 38 L112 38', note: 'negative acceleration', decelerate: true },
  { id: 'P05', name: 'Early Pause', family: 'Pause', path: 'M8 38 L38 38 M50 38 L112 38', note: 'pause at 25%', pauseX: 44 },
  { id: 'P06', name: 'Late Pause', family: 'Pause', path: 'M8 38 L78 38 M90 38 L112 38', note: 'pause at 75%', pauseX: 84 },
  { id: 'P07', name: 'Small Reversal', family: 'Correction', path: 'M8 38 L66 38 L48 38 L112 38', note: 'short correction' },
  { id: 'P08', name: 'Large Reversal', family: 'Correction', path: 'M8 38 L72 38 L31 38 L112 38', note: 'large retreat' },
  { id: 'P09', name: 'Gentle Oscillation', family: 'Oscillation', path: 'M8 38 C24 12 40 64 56 38 S88 12 112 38', note: 'low frequency' },
  { id: 'P10', name: 'Tremor', family: 'Oscillation', path: 'M8 38 C14 24 20 52 26 38 S38 24 44 38 S56 52 62 38 S74 24 80 38 S92 52 98 38 S106 28 112 38', note: 'high frequency' },
  { id: 'P11', name: 'Curve A', family: 'Curvature', path: 'M8 38 Q60 2 112 38', note: 'positive curvature' },
  { id: 'P12', name: 'Curve B', family: 'Curvature', path: 'M8 38 Q60 74 112 38', note: 'mirrored curvature' },
]

const parameterColumns = ['Velocity', 'Acceleration', 'Pause (ms)', 'Pause pos.', 'Curvature', 'Reversal dist.', 'Reversal pos.', 'Reversal (ms)', 'Osc. amp.', 'Osc. freq.']

const probeParameters = [
  { id: 'P01', values: ['180.00', '0.00', '0', '0.50', '0.00', '0.00', '0.60', '500.00', '0.00', '0.00'] },
  { id: 'P02', values: ['90.57', '0.00', '0', '0.42', '0.00', '0.00', '0.58', '500.00', '0.00', '0.00'] },
  { id: 'P03', values: ['150.23', '0.80', '0', '0.42', '0.00', '0.00', '0.58', '500.00', '0.00', '0.00'] },
  { id: 'P04', values: ['220.23', '-0.80', '0', '0.42', '0.00', '0.00', '0.58', '500.00', '0.00', '0.00'] },
  { id: 'P05', values: ['180.45', '0.00', '900', '0.25', '0.00', '0.00', '0.60', '500.00', '0.00', '0.00'] },
  { id: 'P06', values: ['180.45', '0.00', '900', '0.75', '0.00', '0.00', '0.60', '500.00', '0.00', '0.00'] },
  { id: 'P07', values: ['180.45', '0.00', '0', '0.50', '0.00', '28.09', '0.55', '500.00', '0.00', '0.00'] },
  { id: 'P08', values: ['180.45', '0.00', '0', '0.50', '0.00', '75.00', '0.55', '749.09', '0.00', '0.00'] },
  { id: 'P09', values: ['150.23', '0.00', '0', '0.50', '0.00', '0.00', '0.60', '500.91', '14.05', '0.70'] },
  { id: 'P10', values: ['150.23', '0.00', '0', '0.50', '0.00', '0.00', '0.60', '500.91', '7.09', '3.50'] },
  { id: 'P11', values: ['180.45', '0.00', '0', '0.50', '100.23', '0.00', '0.60', '500.91', '0.00', '0.00'] },
  { id: 'P12', values: ['180.45', '0.00', '0', '0.50', '-100.23', '0.00', '0.60', '500.91', '0.00', '0.00'] },
]

const dataStages = [
  { step: '01', title: 'Reconstruct', text: '72 Study A records and 24 Study B records were reshaped into one observation per participant × stimulus.' },
  { step: '02', title: 'Preserve context', text: 'Records were reordered by P01–P12 while the actual Viewing_Order remained available for audit.' },
  { step: '03', title: 'Code by layer', text: 'Behaviour, state–intention, and perceived movement cues were coded only from their corresponding raw fields.' },
  { step: '04', title: 'Review & aggregate', text: 'Ambiguous cases and negations were manually checked before counts, participant shares, and paired comparisons were produced.' },
]

const evidenceMatrix = [
  { meaning: 'Hesitation', studyA: 'Pauses and reversals often shifted interpretation toward hesitation or reconsideration.', studyB: 'Participants produced interrupted, reversing, and self-correcting sequences.', convergence: 'Strong · multi-feature', implication: 'Compose hesitation as advance → interrupt or reverse → resume.' },
  { meaning: 'Certainty', studyA: 'Direct movement was more often described as calm or stable than explicitly certain.', studyB: 'Participants consistently used straight, continuous, uninterrupted forward motion.', convergence: 'Partial · asymmetric', implication: 'Treat directness and continuity as low-level cues, not a fixed label.' },
  { meaning: 'Avoidance', studyA: 'Curvature was clearly noticed, while explicit avoidance remained uncommon.', studyB: 'Indirect paths, curved detours, and trajectory deviation were repeatedly produced.', convergence: 'Asymmetric', implication: 'Add an obstacle, repulsive target, or distance change to provide relational context.' },
  { meaning: 'Curiosity', studyA: 'Oscillation was noticed but often interpreted as playful, energetic, or uncertain.', studyB: 'Exploratory side motion, small oscillation, and local variation were commonly produced.', convergence: 'Weak · semantic shift', implication: 'Pair oscillation with object-relative inspection or phase-specific exploration.' },
]

const studyB = [
  { meaning: 'Hesitation', features: ['pause', 'interruption', 'reversal', 'irregular timing', 'resume after interruption'] },
  { meaning: 'Certainty', features: ['continuous forward', 'straight path', 'no pause', 'constant speed', 'no reversal'] },
  { meaning: 'Avoidance', features: ['indirect path', 'curved detour', 'trajectory deviation'] },
  { meaning: 'Curiosity', features: ['exploratory side motion', 'small oscillation', 'continuous forward', 'variable timing or speed'] },
]

const findings = [
  { number: '01', title: 'Salience and semantic specificity varied independently.', text: 'Slow speed and curvature were readily noticed but mapped to several meanings.' },
  { number: '02', title: 'Meaning can be sequence-based.', text: 'Hesitation appeared more clearly as advance → interrupt or reverse → resume than as a single parameter.' },
  { number: '03', title: 'Production and perception may be asymmetric.', text: 'Participants produced avoidance through curved detours, while observers did not consistently infer avoidance from curvature alone.' },
  { number: '04', title: 'Oscillation may primarily modulate arousal.', text: 'High-frequency oscillation was more often read as playful or energetic; smaller exploratory oscillations appeared in curiosity production.' },
]

const grammar = [
  { level: '01', title: 'Kinematics', items: ['speed', 'acceleration', 'path geometry'] },
  { level: '02', title: 'Temporal syntax', items: ['pause', 'reversal', 'phase composition'] },
  { level: '03', title: 'Goal relation', items: ['arrive', 'stop short', 'move away', 'overshoot', 'target distance'] },
  { level: '04', title: 'Relational motion', items: ['inspect', 'orbit', 'sidestep', 'approach / withdraw', 'stimulus-triggered movement'] },
]

const labLimits = [
  'Variable pause timing',
  'Multi-event speed variation',
  'Variable frequency',
  'Orbit / circle',
  'Phase-specific oscillation',
  'Multi-stage sequences',
  'Object-relative motion',
  'Target-distance relationships',
]
</script>

<template>
  <main class="case-study">
    <ResearchPageTopbar :home-url="homeUrl" />

    <article>
      <section class="hero shell">
        <div class="hero__copy">
          <p class="eyebrow">Research Exploration · Ongoing · 2026</p>
          <h1>Movement as a Language</h1>
          <p class="lede">Exploring how abstract movement communicates state, intention, and agency in non-anthropomorphic agents.</p>
          <div class="chips"><span>HRI / HCI</span><span>Movement perception</span><span>Research-through-design</span><span>Exploratory pilot</span></div>
        </div>
        <div class="hero__visual" aria-label="Conceptual trajectories for direct, interrupted, reversed, curved, and oscillating movement">
          <svg viewBox="0 0 620 420" role="img">
            <title>Abstract movement trajectory study</title>
            <g class="guide"><line x1="45" y1="92" x2="575" y2="92"/><line x1="45" y1="208" x2="575" y2="208"/><line x1="45" y1="326" x2="575" y2="326"/></g>
            <path class="trace trace--quiet" d="M45 92 L575 92"/>
            <path class="trace" d="M45 208 C135 45 225 365 315 208 S485 55 575 208"/>
            <path class="trace trace--secondary" d="M45 326 L330 326 L245 326 L575 326"/>
            <circle class="agent" cx="315" cy="208" r="14"/>
            <circle class="target" cx="575" cy="208" r="10"/>
          </svg>
          <p>Conceptual overview used to frame the project.</p>
        </div>
      </section>

      <section class="question-band">
        <div class="shell question-grid">
          <p class="kicker">01 · Research question</p>
          <div><h2>Can movement alone make a machine feel intentional?</h2><p>This exploration isolates movement as a communication material. The agent has no face, limbs, or human-like gestures, allowing speed, timing, path, and oscillation to carry the interaction.</p></div>
        </div>
      </section>

      <section class="shell why">
        <div class="section-copy"><p class="kicker">02 · Why movement?</p><h2>What movement communicates without familiar social cues</h2><p>Social robots often communicate through faces, gaze, arms, gestures, or humanoid form. This study isolates movement to examine how speed, acceleration, pause, reversal, curvature, and oscillation shape interpretations of intention and agency.</p></div>
        <ol class="concept-flow" aria-label="Initial conceptual model"><li><span>Input</span><strong>Kinematics</strong><small>measurable motion</small></li><i>↓</i><li><span>Transformation</span><strong>Movement quality</strong><small>temporal pattern</small></li><i>↓</i><li><span>Interpretation</span><strong>Perceived meaning</strong><small>state · intention · agency</small></li></ol>
      </section>

      <section class="parameter-section">
        <div class="shell">
          <div class="section-copy"><p class="kicker">03 · From intuition to parameters</p><h2>Start with movement parameters</h2><p>The study decomposed motion into lower-level properties before assigning semantic labels such as “happy” or “hesitant.” This made each property easier to manipulate systematically.</p></div>
          <div class="parameter-grid"><article v-for="([name, text], index) in parameters" :key="name"><span>{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ name }}</h3><p>{{ text }}</p></article></div>
        </div>
      </section>

      <section class="shell early-probes">
        <div class="section-copy"><p class="kicker">04 · Early motion probes</p><h2>Early probes changed too many variables at once</h2><p>Early Figma probes gave the question a visible form, but speed, path, timing, and oscillation often changed together. The next step was to isolate which properties produced an interpretation.</p></div>
        <div class="probe-row"><article v-for="probe in earlyProbes" :key="probe.name"><svg viewBox="0 0 120 76" role="img" :aria-label="`${probe.name} early movement hypothesis`"><path :d="probe.path"/><circle class="probe-agent" r="4"><animateMotion :path="probe.path" :dur="probe.duration" repeatCount="indefinite" /></circle></svg><h3>{{ probe.name }}</h3><p>{{ probe.issue }}</p></article></div>
        <div class="turning-point"><strong>Initial probes</strong><i>→</i><span>Too many variables changed together</span><i>→</i><strong>Build a parameterized movement lab</strong></div>
        <p class="probe-note">These web animations reconstruct the motion logic of the early Figma probes and document the project’s formative hypotheses.</p>
      </section>

      <section class="lab-section">
        <div class="shell">
          <div class="section-copy"><p class="kicker">05 · Building Movement Lab</p><h2>Movement Lab made the study repeatable</h2><p>Movement Lab is a researcher-side Processing tool for manipulating parameters, building presets, and running repeatable sessions.</p></div>
          <ol class="version-timeline"><li v-for="item in labVersions" :key="item.version"><span>{{ item.version }}</span><div><h3>{{ item.title }}</h3><p>{{ item.text }}</p></div></li></ol>
          <figure class="evidence-figure evidence-figure--dark"><img :src="homeUrl + 'images/research/movement-language/movement-lab-ui.webp'" alt="Movement Lab version 0.5 Processing interface showing a movement path, preset P12, trial progress, and parameter controls" loading="lazy"><figcaption>Movement Lab v0.5 · researcher-side interface for preset playback, randomized study traversal, replay, and parameter inspection.</figcaption></figure>
        </div>
      </section>

      <section class="shell movement-probes">
        <div class="section-copy"><p class="kicker">06 · Movement probes</p><h2>Twelve controlled variations.</h2><p>P01 served as the fixed baseline. P02–P12 varied one movement family at a time and were randomized once within each study session.</p></div>
        <figure class="evidence-figure probe-atlas"><img :src="homeUrl + 'images/research/movement-language/movement-probes.webp'" alt="Diagram of the twelve movement probes: direct, slow, accelerating, decelerating, early and late pause, small and large reversal, two oscillations, and two curved paths" loading="lazy"><figcaption>Study stimulus atlas. Blue indicates forward motion, grey indicates a pause, red indicates reversal, and black marks the target.</figcaption></figure>
        <details class="parameter-audit" open><summary><span>Source parameters</span><strong>P01–P12 parameter matrix · click to collapse</strong></summary><div class="parameter-table-wrap"><table><thead><tr><th>Probe</th><th v-for="column in parameterColumns" :key="column">{{ column }}</th></tr></thead><tbody><tr v-for="row in probeParameters" :key="row.id"><th>{{ row.id }}</th><td v-for="(value, index) in row.values" :key="`${row.id}-${index}`">{{ value }}</td></tr></tbody></table></div><p>Values are drawn from the Movement Lab preset CSV and rounded to two decimals for display. Position values are normalized from 0 to 1.</p></details>
      </section>

      <section class="study-a">
        <div class="shell study-grid">
          <div><p class="kicker">07 · Study A · Movement → Meaning</p><h2>How participants interpreted state and intention from movement</h2><div class="study-meta"><strong>n = 6</strong><span>exploratory pilot</span><span>randomized probes</span></div></div>
          <div class="questions"><p><span>01</span>What do you think this object was doing?</p><p><span>02</span>If it had a state or intention, how would you describe it?</p><p><span>03</span>What part of the movement made you think that?</p><aside>Participants described what the object appeared to be doing, the state or intention they perceived, and the movement cues behind that interpretation.</aside></div>
        </div>
      </section>

      <section class="shell method-correction">
        <div class="section-copy"><p class="kicker">08 · Why Study B changed</p><h2>Redesigning Study B before data collection</h2><p>The initial plan asked participants to express a meaning by adjusting Movement Lab sliders. Those controls would have primed them with the researcher-defined parameter space and turned elicitation into a UI task.</p></div>
        <div class="decision-grid"><article><span>Initial plan</span><h3>Slider elicitation</h3><p>Participants manipulate velocity, pause, reversal, and oscillation directly.</p></article><article class="decision-problem"><span>Method problem</span><h3>Parameter priming</h3><p>The available controls predefine what participants imagine movement can be.</p></article><article class="decision-final"><span>Revised method</span><h3>Paper + think aloud</h3><p>Participants draw and describe movement before researcher translation and participant validation.</p></article></div>
        <ol class="revised-flow"><li>Meaning prompt</li><i>→</i><li>Draw / describe</li><i>→</i><li>Code natural features</li><i>→</i><li>Optional parameterization</li></ol>
      </section>

      <section class="study-b">
        <div class="shell">
          <div class="section-copy"><p class="kicker">09 · Study B · Meaning → Movement</p><h2>Participants produced motion before seeing parameters.</h2><p>Four meaning prompts were used to elicit paths, speed changes, interruptions, corrections, and exploratory behavior.</p></div>
          <div class="meaning-grid"><article v-for="item in studyB" :key="item.meaning"><span>{{ item.meaning }}</span><ul><li v-for="feature in item.features" :key="feature">{{ feature }}</li></ul></article></div>
        </div>
      </section>

      <section class="data-pipeline">
        <div class="shell">
          <div class="section-copy"><p class="kicker">10 · From records to evidence</p><h2>Data cleaning and coding</h2><p>The analysis kept raw descriptions separate from researcher interpretation, preserved presentation order, and documented each revision from open coding to final aggregation.</p></div>
          <div class="data-counts"><article><strong>72</strong><span>Study A records</span><small>6 participants × 12 probes</small></article><article><strong>24</strong><span>Study B records</span><small>6 participants × 4 meanings</small></article><article><strong>3</strong><span>coding layers</span><small>behaviour · state/intention · cue</small></article></div>
          <ol class="data-stage-grid"><li v-for="stage in dataStages" :key="stage.step"><span>{{ stage.step }}</span><h3>{{ stage.title }}</h3><p>{{ stage.text }}</p></li></ol>
          <div class="coding-example"><div><p class="kicker">An anonymized worked example</p><h3>P06 · translated from Chinese</h3><dl><div><dt>Behaviour</dt><dd>“It was moving at varying speeds.”</dd></div><div><dt>State / intention</dt><dd>“Hesitant.”</dd></div><div><dt>Movement cue</dt><dd>“It paused.”</dd></div></dl></div><div class="coding-example__result"><span>Behaviour code</span><strong>variable_speed_motion</strong><span>State code</span><strong>hesitation</strong><span>Cue code</span><strong>pause_present</strong><span>Review status</span><strong>manual review</strong></div></div>
          <aside class="audit-note"><strong>Quality-control rule</strong><p>Known preset manipulations were never used to infer what a participant perceived. Ambiguous cases could remain unspecified, and negations such as “no hesitation” or “no pause” were manually checked before aggregation.</p></aside>
        </div>
      </section>

      <section class="shell coding">
        <div class="section-copy"><p class="kicker">11 · Coding was iterative</p><h2>Separate what participants said from what the researcher knew.</h2><p>The first coding pass joined behavior, state, and cue text to increase keyword matches. This created cross-layer contamination. Coding v2 restricted each raw response to its own code layer and added manual review and negation checks.</p></div>
        <div class="coding-flow"><article><span>Behaviour_Raw</span><strong>Behaviour codes only</strong></article><article><span>State_Intention_Raw</span><strong>State codes only</strong></article><article><span>Movement_Cue_Raw</span><strong>Cue codes only</strong></article></div>
        <blockquote>Code only what the participant perceived.</blockquote>
        <p class="coding-note">Manual review also checked negation such as “no hesitation,” “no pause,” and “no reversal” to reduce keyword false positives.</p>
      </section>

      <section class="evidence-section">
        <div class="shell evidence-grid">
          <div><p class="kicker">12 · Perception map</p><h2>How movement was perceived</h2><p>In this exploratory pilot, direct movement tended to be associated with calmness and stability, while pauses and reversals more often shifted interpretation toward hesitation. High-frequency oscillation was more often read as playful or energetic.</p></div>
          <figure class="evidence-figure evidence-figure--paper"><img :src="homeUrl + 'images/research/movement-language/perception-heatmap.webp'" alt="Heatmap showing perceived states and intentions across twelve movement probes in an exploratory pilot with six participants" loading="lazy"><figcaption>Exploratory pilot, n = 6. Values indicate the number of participants whose responses were coded into each descriptive category.</figcaption></figure>
        </div>
      </section>

      <section class="shell findings">
        <div class="section-copy"><p class="kicker">13 · What emerged</p><h2>Four patterns in how movement was interpreted</h2></div>
        <div class="finding-grid"><article v-for="finding in findings" :key="finding.number"><span>{{ finding.number }}</span><h3>{{ finding.title }}</h3><p>{{ finding.text }}</p></article></div>
      </section>

      <section class="mapping-section">
        <div class="shell mapping-grid">
          <div><p class="kicker">14 · Bidirectional mapping</p><h2>Perception and production showed different patterns</h2><p>The comparison shows where features converged, remained ambiguous, depended on temporal context, or required a relational context.</p></div>
          <div class="mapping-diagram"><article><span>Movement features</span><strong>Movement</strong></article><i>→</i><article class="mapping-center"><span>Study A</span><strong>Perception</strong><b>↕</b><span>Study B</span><strong>Production</strong></article><i>←</i><article><span>Prompts</span><strong>Meaning</strong></article></div>
        </div>
      </section>

      <section class="shell evidence-matrix-section">
        <div class="section-copy"><p class="kicker">15 · A × B evidence matrix</p><h2>Comparing perception and production</h2><p>The table keeps the two study directions visible before they are synthesized into a design space. Its convergence labels summarize patterns from this exploratory pilot.</p></div>
        <p class="table-scroll-note">Swipe horizontally to compare all evidence columns →</p><div class="evidence-matrix-wrap"><table class="evidence-matrix"><thead><tr><th>Meaning</th><th>Study A · perception</th><th>Study B · production</th><th>Convergence</th><th>Design implication</th></tr></thead><tbody><tr v-for="row in evidenceMatrix" :key="row.meaning"><th>{{ row.meaning }}</th><td>{{ row.studyA }}</td><td>{{ row.studyB }}</td><td><span>{{ row.convergence }}</span></td><td>{{ row.implication }}</td></tr></tbody></table></div>
      </section>

      <section class="design-space">
        <div class="shell">
          <div class="section-copy"><p class="kicker">16 · Movement–meaning design space</p><h2>A preliminary map of movement and meaning</h2><p>The map organizes the pilot findings by perceptual salience, semantic specificity, and the relational movements that remain under-tested.</p></div>
          <figure class="evidence-figure evidence-figure--paper evidence-figure--large"><img :src="homeUrl + 'images/research/movement-language/movement-meaning-design-space.webp'" alt="Exploratory movement-meaning design space plotting movement features by perceptual salience and semantic specificity" loading="lazy"><figcaption>Exploratory synthesis of Movement → Meaning and Meaning → Movement evidence. Positions summarize qualitative patterns rather than inferential effect sizes.</figcaption></figure>
          <div class="space-legend"><article><span>Promising patterns</span><p>Pause / interruption · reversal / correction · high-frequency oscillation</p></article><article><span>Visible, semantically broad</span><p>Slow speed · curved / indirect path · curvature direction</p></article><article><span>Relational / under-tested</span><p>Object-relative inspection / orbit emerged in Study B and was not formally tested in Study A.</p></article></div>
        </div>
      </section>

      <section class="shell grammar">
        <div class="section-copy"><p class="kicker">17 · An emerging movement grammar</p><h2>From isolated parameters toward layered organization.</h2><p>The exploration gradually shifted from treating movement as individual settings toward considering how motion is composed across kinematic, temporal, goal-related, and relational layers.</p></div>
        <div class="grammar-grid"><article v-for="item in grammar" :key="item.level"><span>{{ item.level }}</span><h3>{{ item.title }}</h3><ul><li v-for="value in item.items" :key="value">{{ value }}</li></ul></article></div>
      </section>

      <section class="limits-section">
        <div class="shell limits-grid"><div><p class="kicker">18 · Limits of the current Movement Lab</p><h2>Participant-created movements expanded the design space</h2><p>Participant-created movements extended beyond the researcher-defined parameter space, adding pause timing, frequency changes, relational motion, and multi-stage sequences.</p></div><ul><li v-for="item in labLimits" :key="item">{{ item }}</li></ul></div>
      </section>

      <section class="extension-section transition-section">
        <div class="shell extension-layout">
          <div><p class="kicker">19 · From Findings to Design Exploration</p><h2>From Understanding Movement to Designing Intention</h2></div>
          <div class="extension-copy">
            <p>Pauses and reversals were often read as hesitation, while curved paths did not consistently convey avoidance.</p>
            <p>This gap between intended and perceived meaning leads to the next question: how can movement be composed around a specific intention?</p>
            <ol class="research-transition" aria-label="Research transition from perception to design">
              <li><span>01</span><strong>Movement Perception</strong></li><li aria-hidden="true">→</li>
              <li><span>02</span><strong>Movement–Meaning Mapping</strong></li><li aria-hidden="true">→</li>
              <li><span>03</span><strong>Intentional Movement Design</strong></li>
            </ol>
          </div>
        </div>
      </section>

      <section class="extension-section extension-section--surface embodiment-section">
        <div class="shell">
          <div class="extension-layout">
            <div><p class="kicker">20 · From Abstract to Embodied Movement</p><h2>What Changes When Movement Has a Body?</h2></div>
            <div class="extension-copy">
              <p>Movement Lab isolated timing and trajectory through a single abstract point. The next stage asks how an articulated body changes what movement communicates.</p>
            </div>
          </div>
          <div class="embodiment-comparison">
            <article>
              <svg viewBox="0 0 360 150" role="img" aria-label="Abstract point moving along a trajectory"><path d="M34 104 C112 104 116 46 196 46 S278 104 326 104"/><circle cx="34" cy="104" r="11"/><circle class="comparison-target" cx="326" cy="104" r="8"/></svg>
              <h3>Abstract Point</h3>
              <ul><li>Single moving entity</li><li>Trajectory</li><li>Speed and acceleration</li><li>Pause and reversal</li></ul>
            </article>
            <article>
              <svg viewBox="0 0 360 150" role="img" aria-label="Two mobile units connected by a flexible articulated body"><rect x="48" y="72" width="72" height="48" rx="5"/><rect x="240" y="46" width="72" height="48" rx="5"/><path class="comparison-body" d="M120 94 C150 55 208 111 240 70"/><circle cx="70" cy="124" r="8"/><circle cx="99" cy="124" r="8"/><circle cx="261" cy="98" r="8"/><circle cx="290" cy="98" r="8"/></svg>
              <h3>Articulated Physical Body</h3>
              <ul><li>Two coordinated mobile units</li><li>Whole-body trajectory</li><li>Relative movement</li><li>Extension and contraction</li><li>Bending and reconfiguration</li></ul>
            </article>
          </div>
        </div>
      </section>

      <section class="extension-section prototype-stage">
        <div class="shell">
          <div class="extension-layout">
            <div><p class="kicker">21 · Physical Prototype</p><h2>Building an Articulated Robotic Body</h2></div>
            <div class="extension-copy"><p>The planned prototype connects two mobile robots with a horizontal silicone bellows. Coordinating the two units will allow the body to translate, change length, and bend without facial cues.</p></div>
          </div>

          <div class="extension-subsection">
            <div class="subsection-heading"><span>21.1</span><h3>System Configuration</h3></div>
            <div class="structural-grid">
              <article><span>01</span><h3>Mobile Units</h3><p>Two mobile robots provide independent locomotion.</p></article>
              <article><span>02</span><h3>Symmetrical Shells</h3><p>Lightweight 3D-printed enclosures create a visually unified body without an explicit head–tail distinction.</p></article>
              <article><span>03</span><h3>Flexible Connection</h3><p>A horizontal silicone bellows connects the two units and enables visible changes in body configuration.</p></article>
            </div>
            <figure class="prototype-figure prototype-figure--wide"><img :src="homeUrl + 'images/research/movement-language/articulated-robot-system.png'" alt="Articulated mobile robot system shown in extended, contracted, and bent configurations" loading="lazy"></figure>
          </div>

          <div class="extension-subsection">
            <div class="subsection-heading"><span>21.2</span><h3>Mechanical Exploration</h3></div>
            <div class="capability-list">
              <article><h3>Contraction</h3><p>The units move toward each other, shortening and compressing the accordion body.</p></article>
              <article><h3>Extension</h3><p>The units move apart, lengthening the accordion body.</p></article>
              <article><h3>Bending</h3><p>Relative position and orientation change, producing a curved body configuration.</p></article>
              <article><h3>Local Probing</h3><p>One unit advances or retreats while the other remains stationary.</p></article>
            </div>
            <p class="integrity-note">These are intended capabilities, not validated performance claims.</p>
            <div class="placeholder-grid placeholder-grid--four">
              <figure class="prototype-figure"><img :src="homeUrl + 'images/research/movement-language/contraction.png'" alt="Two mobile robots moving toward each other to contract the accordion body" loading="lazy"></figure>
              <figure class="prototype-figure"><img :src="homeUrl + 'images/research/movement-language/extension.png'" alt="Two mobile robots moving apart to extend the accordion body" loading="lazy"></figure>
              <figure class="prototype-figure"><img :src="homeUrl + 'images/research/movement-language/bending-motion.png'" alt="Two mobile robots bending the accordion body along a curved path" loading="lazy"></figure>
              <figure class="prototype-figure"><img :src="homeUrl + 'images/research/movement-language/local-probing.png'" alt="One mobile robot moving while the other remains stationary" loading="lazy"></figure>
            </div>
          </div>
        </div>
      </section>

      <section class="extension-section extension-section--surface expression-stage">
        <div class="shell">
          <div class="extension-layout">
            <div><p class="kicker">22 · Designing Embodied Hesitation</p><h2>From Movement–Meaning Findings to Physical Expressions</h2></div>
            <div class="extension-copy"><p>Studies A and B associated hesitation with changes in speed, interruption, reversal, and resumed motion. Two preliminary conditions translate those findings into movement sequences for a deformable body made from two Sony toio mobile robots and a white accordion-folded connection.</p></div>
          </div>

          <div class="extension-subsection">
            <div class="subsection-heading"><span>22.1</span><h3>Two preliminary movement conditions</h3></div>
            <div class="condition-grid">
              <article class="condition-card">
                <header><span>C1</span><div><h3>Kinematic Hesitation</h3><p>Hesitation is expressed through deceleration, stopping, and resuming while the body remains approximately unchanged.</p></div></header>
                <p class="condition-rationale"><strong>Rationale from Studies A and B</strong>Speed changes and interrupted sequences were repeatedly used to describe or produce hesitant movement. C1 carries that temporal pattern into coordinated whole-body motion.</p>
                <ol class="motion-timeline" aria-label="C1 movement phases">
                  <li><span>01</span><strong>Advance</strong><small>Both robots move forward together at constant speed.</small></li>
                  <li><span>02</span><strong>Decelerate</strong><small>Both robots gradually slow down.</small></li>
                  <li><span>03</span><strong>Stop</strong><small>Both robots stop.</small></li>
                  <li><span>04</span><strong>Resume</strong><small>Both robots continue forward together.</small></li>
                </ol>
                <dl class="condition-spec"><div><dt>Movement relation</dt><dd>Coordinated whole-body motion</dd></div><div><dt>Expected configuration</dt><dd>Approximately constant body length and orientation</dd></div></dl>
                <figure class="condition-media" data-media-path="images/research/movement-language/c1-kinematic-hesitation.mp4"><div class="research-placeholder research-placeholder--animation" role="img" aria-label="Video or GIF placeholder for C1 Kinematic Hesitation"><span>[VIDEO / GIF PLACEHOLDER · C1 KINEMATIC HESITATION]</span></div><figcaption>Recorded C1 demonstration pending.</figcaption></figure>
              </article>

              <article class="condition-card">
                <header><span>C2</span><div><h3>Embodied Hesitation</h3><p>Hesitation is expressed through a stop, relative retreat, visible compression, and resumed forward motion.</p></div></header>
                <p class="condition-rationale"><strong>Rationale from Studies A and B</strong>The advance, interruption, and resumption sequence remains, while relative movement gives the interruption a physical configuration that can be seen in the body.</p>
                <ol class="motion-timeline" aria-label="C2 movement phases">
                  <li><span>01</span><strong>Advance</strong><small>Both robots move forward together at constant speed.</small></li>
                  <li><span>02</span><strong>Stop</strong><small>Both robots stop.</small></li>
                  <li><span>03</span><strong>Compress</strong><small>The front robot retreats while the rear robot stays still.</small></li>
                  <li><span>04</span><strong>Pause</strong><small>The body briefly holds its compressed shape.</small></li>
                  <li><span>05</span><strong>Resume</strong><small>Both robots continue forward.</small></li>
                </ol>
                <dl class="condition-spec"><div><dt>Movement relation</dt><dd>Whole-body motion followed by relative movement</dd></div><div><dt>Expected configuration</dt><dd>Compressed body during the pause</dd></div></dl>
                <figure class="condition-media" data-media-path="images/research/movement-language/c2-embodied-hesitation.mp4"><div class="research-placeholder research-placeholder--animation" role="img" aria-label="Video or GIF placeholder for C2 Embodied Hesitation"><span>[VIDEO / GIF PLACEHOLDER · C2 EMBODIED HESITATION]</span></div><figcaption>Recorded C2 demonstration pending.</figcaption></figure>
              </article>
            </div>
            <p class="integrity-note">C1 and C2 are preliminary physical motion designs. They differ in timing, whole-body displacement, and final configuration as well as deformation, so the comparison does not isolate deformation.</p>
          </div>

          <div class="extension-subsection">
            <div class="subsection-heading"><span>22.2</span><h3>Editable motion parameters</h3></div>
            <div class="table-wrap">
              <table class="motion-parameter-table">
                <thead><tr><th>Parameter</th><th>C1</th><th>C2</th><th>Current evidence</th></tr></thead>
                <tbody>
                  <tr><td>Baseline synchronized forward command</td><td>Speed 25; 800 ms</td><td>Speed 25; 800 ms</td><td>Value in the retained <code>synchronized_forward</code> helper; final condition value not confirmed</td></tr>
                  <tr><td>Gradual deceleration</td><td>Curve and duration TBD</td><td>Not used</td><td>No retained C1 implementation value</td></tr>
                  <tr><td>Relative compression reference</td><td>Not used</td><td>Speed 30; 500 ms; 1.0 s pause</td><td>Early two-robot contraction test only; both robots move, so this is not the final C2 sequence</td></tr>
                  <tr><td>C2 front-robot retreat</td><td>Not used</td><td>Speed and duration TBD</td><td>C2-specific implementation value not yet documented</td></tr>
                  <tr><td>Stop and resume timing</td><td>TBD</td><td>TBD</td><td>To be fixed before evaluation</td></tr>
                </tbody>
              </table>
            </div>
            <p class="integrity-note">Numeric values are copied from retained prototype utilities where available. They are implementation references, not measured trajectories or final experimental settings.</p>
          </div>
        </div>
      </section>

      <section class="extension-section evaluation-stage">
        <div class="shell">
          <div class="extension-layout">
            <div><p class="kicker">23 · Experimental Design</p><h2>Comparing Kinematic and Embodied Expressions of Hesitation</h2></div>
            <div class="extension-copy"><p>The proposed study compares how observers interpret the two motion sequences. It is designed to expose ambiguity, including readings such as waiting, avoidance, and mechanical failure.</p></div>
          </div>

          <div class="extension-subsection">
            <div class="subsection-heading"><span>23.1</span><h3>Research Question &amp; Exploratory Expectations</h3></div>
            <blockquote class="research-question">How does internal body deformation influence observers' interpretation of hesitation in a non-anthropomorphic robot?</blockquote>
            <div class="expectation-grid"><article><h3>C1</h3><p>Deceleration, stopping, and resuming may support a hesitation reading through timing alone.</p></article><article><h3>C2</h3><p>Compression may add a visible cue, but observers may read it as avoidance, waiting, or a mechanical problem.</p></article></div>
            <p class="integrity-note">These are exploratory expectations. The conditions are not yet matched closely enough to attribute any difference to deformation alone.</p>
          </div>

          <div class="extension-subsection">
            <div class="subsection-heading"><span>23.2</span><h3>Experimental Conditions &amp; Controls</h3></div>
            <div class="control-grid"><article><span>Planned controls</span><ul><li>The same two robots and accordion body</li><li>The same starting position and orientation</li><li>The same recording viewpoint and environment</li><li>The same participant instructions and response format</li></ul></article><article><span>Differences still unresolved</span><ul><li>Pause timing and total duration</li><li>Whole-body displacement</li><li>Deceleration versus relative retreat</li><li>Final body configuration</li></ul></article></div>
            <p class="integrity-note">Until these differences are matched or modeled explicitly, the study compares two complete expressions rather than isolating one deformation variable.</p>
          </div>

          <div class="extension-subsection">
            <div class="subsection-heading"><span>23.3</span><h3>Proposed Evaluation Procedure</h3></div>
            <ol class="procedure-list"><li><span>01</span><p>Each participant views both conditions in a within-subject comparison.</p></li><li><span>02</span><p>Presentation order is counterbalanced across participants.</p></li><li><span>03</span><p>After each condition, an open-ended question asks what the robot appeared to be doing or communicating.</p></li><li><span>04</span><p>A follow-up prompt asks which movement cues shaped that interpretation.</p></li><li><span>05</span><p>An optional clarity rating records how clearly the movement communicated its perceived state.</p></li></ol>
            <div class="research-placeholder research-placeholder--wide" data-media-path="images/research/movement-language/proposed-evaluation-setup.jpg" role="img" aria-label="Placeholder for proposed evaluation setup"><span>[MEDIA PLACEHOLDER · PROPOSED EVALUATION SETUP]</span></div>
            <p class="integrity-note">Evaluation is proposed and has not been conducted.</p>
          </div>
        </div>
      </section>

      <section class="extension-section extension-section--surface framework-stage">
        <div class="shell">
          <div class="extension-layout">
            <div><p class="kicker">24 · Evaluation &amp; Findings</p><h2>Understanding How Body Deformation Changes Interpretation</h2></div>
            <div class="extension-copy"><p>Future analysis will compare what people think each condition communicates, which cues they notice, and where interpretations diverge.</p><span class="evaluation-status">Evaluation pending</span></div>
          </div>
          <div class="extension-subsection">
            <div class="subsection-heading"><span>24.1</span><h3>Future result areas</h3></div>
            <div class="result-grid">
              <article><span>01</span><h3>Interpretation Distribution</h3><p>How often each condition is described as hesitation, waiting, avoidance, mechanical failure, or another state.</p><div class="result-placeholder" data-media-path="images/research/movement-language/results-interpretation-distribution.svg">[PLOT PLACEHOLDER · INTERPRETATION DISTRIBUTION]</div></article>
              <article><span>02</span><h3>Perceived Movement Cues</h3><p>Which changes in speed, stopping, retreat, or body configuration participants mention in their explanations.</p><div class="result-placeholder">[PARTICIPANT QUOTATION PLACEHOLDER]</div><div class="result-placeholder">[CODED CUE ANALYSIS PLACEHOLDER]</div></article>
              <article><span>03</span><h3>Cross-condition Comparison</h3><p>Where interpretations and cited cues differ between C1 and C2 without treating deformation as an isolated cause.</p><div class="result-placeholder" data-media-path="images/research/movement-language/results-cross-condition.svg">[COMPARISON PLOT PLACEHOLDER]</div><div class="result-placeholder">[ANALYSIS PLACEHOLDER]</div></article>
            </div>
            <p class="integrity-note">No participant data, statistics, quotations, or conclusions are reported because the evaluation has not yet been run.</p>
          </div>
        </div>
      </section>

      <section class="extension-section reflection-stage">
        <div class="shell">
          <div class="extension-layout">
            <div><p class="kicker">25 · Reflection &amp; Design Implications</p><h2>What Does a Deformable Body Add to Movement Communication?</h2></div>
            <div class="extension-copy"><p>The prototype creates an observable change inside the robot's body, but its communicative value remains open. Evidence is needed to separate what observers learn from deformation from what they infer from timing and displacement.</p></div>
          </div>
          <div class="reflection-grid">
            <article><span>01</span><h3>Information beyond whole-body motion</h3><p>Does internal deformation add a cue that observers would miss from trajectory and speed alone?</p></article>
            <article><span>02</span><h3>Meaning of contraction</h3><p>Is compression read as hesitation, or does it suggest waiting, retreat, avoidance, or mechanical trouble?</p></article>
            <article><span>03</span><h3>Physical constraints</h3><p>Motor limits, friction, connector stiffness, and recovery time may shape the movement as much as the intended expression.</p></article>
            <article><span>04</span><h3>Evidence before principles</h3><p>Transferable guidance would require repeated observations across participants, motion settings, contexts, and other deformable platforms.</p></article>
          </div>
        </div>
      </section>
    </article>

    <footer class="footer shell"><p>Interested in this exploration?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<style lang="scss" scoped>
.case-study{--accent:#d7a765;--accent-soft:#f0d6ae;--paper:#eceae5;--ink:#181719;min-height:100vh;color:#f4f1eb;background:#0c0c10}.shell,.topbar{width:min(1140px,calc(100% - 3rem));margin:0 auto}.topbar{min-height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:750;letter-spacing:-.02em}.back-link{color:#aaa7a2;font-size:.9rem}.back-link:hover{color:#fff}.eyebrow,.kicker{color:var(--accent);font-size:.72rem;font-weight:750;letter-spacing:.13em;text-transform:uppercase}h1{margin:1.1rem 0 1.4rem;font-size:clamp(3rem,7vw,6.2rem);line-height:.93;letter-spacing:-.065em}h2{margin:.7rem 0 0;font-size:clamp(1.85rem,3.8vw,3.25rem);line-height:1.08;letter-spacing:-.045em}h3{line-height:1.3}.lede{max-width:720px;color:#c4c0ba;font-size:clamp(1.05rem,2vw,1.35rem);line-height:1.72}.section-copy{max-width:820px}.section-copy>p:last-child{margin-top:1.15rem;color:#aaa7a2;line-height:1.78}.hero{padding:7rem 0 6rem;display:grid;grid-template-columns:1fr 1fr;gap:clamp(2.5rem,7vw,6rem);align-items:center}.chips{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:2rem}.chips span{padding:.5rem .75rem;border:1px solid rgba(215,167,101,.35);border-radius:999px;color:var(--accent-soft);font-size:.72rem}.hero__visual{padding:1.2rem;border:1px solid rgba(255,255,255,.1);background:#121217}.hero__visual svg{width:100%;display:block}.hero__visual p{padding:.7rem .2rem 0;color:#77746f;font-size:.7rem}.guide line{stroke:rgba(255,255,255,.07)}.trace{fill:none;stroke:var(--accent);stroke-width:4;stroke-linecap:round}.trace--quiet{stroke:#eee9df;opacity:.25}.trace--secondary{stroke:#9aa69f;opacity:.6}.agent{fill:var(--accent)}.target{fill:none;stroke:#e5e0d8;stroke-width:3}.question-band,.parameter-section,.evidence-section,.design-space{background:var(--paper);color:var(--ink)}.question-grid{padding:5.5rem 0;display:grid;grid-template-columns:.45fr 1.55fr;gap:3rem}.question-grid .kicker,.parameter-section .kicker,.evidence-section .kicker,.design-space .kicker{color:#8b5b23}.question-grid p:last-child{max-width:760px;margin-top:1.5rem;color:#625f5a;line-height:1.8}.why,.early-probes,.movement-probes,.method-correction,.coding,.findings,.grammar,.status-section{padding:6rem 0}.concept-flow{list-style:none;margin-top:3rem;padding:0;display:grid;grid-template-columns:1fr auto 1fr auto 1fr;gap:.7rem;align-items:center}.concept-flow li{min-height:190px;padding:1.25rem;display:flex;flex-direction:column;border-top:2px solid var(--accent);background:#15151a}.concept-flow span{color:var(--accent);font-size:.68rem;text-transform:uppercase;letter-spacing:.1em}.concept-flow strong{margin:2.4rem 0 .5rem}.concept-flow small{color:#8e8a85}.concept-flow i,.revised-flow i,.mapping-diagram>i{color:#77736e;font-style:normal}.parameter-section,.lab-section,.study-b,.design-space,.limits-section,.next-section{padding:6rem 0}.parameter-section .section-copy>p:last-child,.design-space .section-copy>p:last-child{color:#625f5a}.parameter-grid{margin-top:3rem;display:grid;grid-template-columns:repeat(5,1fr)}.parameter-grid article{min-height:210px;padding:1.15rem;border-top:1px solid #b98649;border-right:1px solid rgba(24,23,25,.12);background:rgba(255,255,255,.38)}.parameter-grid span,.preset-head span,.meaning-grid article>span,.coding-flow span,.space-legend span,.grammar-grid article>span{color:#8b5b23;font:700 .7rem var(--font-mono)}.parameter-grid h3{margin:3rem 0 .65rem;font-size:.9rem}.parameter-grid p{color:#706c66;font-size:.79rem;line-height:1.6}.probe-row{margin-top:3rem;display:grid;grid-template-columns:repeat(4,1fr);gap:.85rem}.probe-row article{padding:1rem;border:1px solid rgba(255,255,255,.1);background:#141419}.probe-row svg,.preset-grid svg{width:100%;display:block}.probe-row path,.preset-grid path{fill:none;stroke:var(--accent);stroke-width:3;stroke-linecap:round;stroke-linejoin:round}.probe-row h3{margin:.65rem 0;font-size:.9rem}.probe-row p{color:#918d87;font-size:.78rem;line-height:1.58}.turning-point{margin-top:1rem;padding:1.2rem;display:grid;grid-template-columns:1fr auto 1.4fr auto 1.2fr;gap:1rem;align-items:center;border-left:2px solid var(--accent);background:#15151a;font-size:.82rem}.turning-point span{color:#a39f99}.turning-point i{color:#706d68;font-style:normal}.asset-placeholder{min-height:220px;margin-top:1rem;padding:1.5rem;display:flex;flex-direction:column;align-items:center;justify-content:center;border:1px dashed rgba(215,167,101,.55);background:rgba(215,167,101,.04);text-align:center}.asset-placeholder span{color:var(--accent);font-size:.68rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.asset-placeholder strong{margin:.8rem 0 .4rem}.asset-placeholder p{max-width:560px;color:#88847e;font-size:.8rem}.asset-placeholder--dark{background:#15151a}.lab-section,.study-b,.limits-section,.next-section{background:#15151a}.version-timeline{list-style:none;margin-top:3rem;padding:0;border-top:1px solid rgba(255,255,255,.12)}.version-timeline li{padding:1.25rem 0;display:grid;grid-template-columns:90px 1fr;gap:2rem;border-bottom:1px solid rgba(255,255,255,.1)}.version-timeline>li>span{color:var(--accent);font:700 .8rem var(--font-mono)}.version-timeline h3{font-size:.95rem}.version-timeline p{margin-top:.45rem;color:#99958f;font-size:.84rem;line-height:1.65}.preset-grid{margin-top:3rem;display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem}.preset-grid article{padding:1rem;border:1px solid rgba(255,255,255,.1);background:#131318}.preset-head{display:flex;justify-content:space-between}.preset-head small{color:#77736e;font-size:.65rem;text-transform:uppercase}.preset-grid circle{fill:var(--accent)}.preset-grid h3{margin:.5rem 0 .2rem;font-size:.88rem}.preset-grid p{color:#837f79;font-size:.7rem}.timing-dots circle{fill:#eee9df}.study-a{padding:6rem 0;background:#211b14}.study-grid,.evidence-grid,.mapping-grid,.limits-grid,.next-grid{display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(3rem,8vw,7rem)}.study-meta{margin-top:2.5rem;display:flex;flex-wrap:wrap;gap:.6rem}.study-meta strong,.study-meta span{padding:.5rem .7rem;border:1px solid rgba(215,167,101,.35);font-size:.72rem}.study-meta strong{color:var(--accent)}.questions>p{padding:1rem 0;display:grid;grid-template-columns:42px 1fr;border-top:1px solid rgba(255,255,255,.12);color:#c4c0ba}.questions span{color:var(--accent);font:700 .7rem var(--font-mono)}.questions aside{margin-top:1.5rem;padding:1.2rem;border-left:2px solid var(--accent);color:#a6a19b;font-size:.84rem;line-height:1.7}.decision-grid{margin-top:3rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem}.decision-grid article{min-height:240px;padding:1.2rem;display:flex;flex-direction:column;border-top:2px solid #807b74;background:#15151a}.decision-grid span{color:#aaa49c;font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.decision-grid h3{margin:3rem 0 .7rem}.decision-grid p{color:#908c86;font-size:.82rem;line-height:1.65}.decision-grid .decision-problem{border-color:#b66c5e}.decision-grid .decision-final{border-color:var(--accent)}.revised-flow{list-style:none;margin-top:.8rem;padding:1.2rem;display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;gap:.6rem;align-items:center;background:#15151a}.revised-flow li{text-align:center;font-size:.78rem}.meaning-grid{margin-top:3rem;display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem}.meaning-grid article{min-height:300px;padding:1.2rem;border-top:2px solid var(--accent);background:#0f0f13}.meaning-grid article>span{color:var(--accent)}.meaning-grid ul,.grammar-grid ul{margin-top:2.5rem;padding-left:1rem;color:#aaa59f;font-size:.83rem;line-height:1.9}.coding-flow{margin-top:3rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem}.coding-flow article{min-height:130px;padding:1.1rem;display:flex;flex-direction:column;justify-content:space-between;border:1px solid rgba(255,255,255,.1);background:#141419}.coding-flow span{color:var(--accent)}.coding blockquote{margin-top:1rem;padding:1.3rem;border-left:3px solid var(--accent);background:#211b14;font-size:1.1rem}.coding-note{margin-top:1rem;color:#8f8b85;font-size:.82rem}.evidence-section{padding:6rem 0}.evidence-grid{align-items:center}.evidence-grid>div:first-child>p:last-child{margin-top:1.3rem;color:#625f5a;line-height:1.8}.asset-placeholder--image{min-height:420px;margin-top:0;border-color:#9d7444;background:#dedbd5}.asset-placeholder--image p{color:#68645e}.finding-grid{margin-top:3rem;display:grid;grid-template-columns:repeat(2,1fr);gap:1rem}.finding-grid article{min-height:245px;padding:1.3rem;border-top:1px solid rgba(255,255,255,.16);background:#131318}.finding-grid span{color:var(--accent);font:700 .72rem var(--font-mono)}.finding-grid h3{margin:2.5rem 0 .8rem;max-width:430px}.finding-grid p{color:#96918b;line-height:1.68}.mapping-section{padding:6rem 0;background:#201c17}.mapping-grid{align-items:center}.mapping-grid>div:first-child>p:last-child{margin-top:1.3rem;color:#aaa49d;line-height:1.8}.mapping-diagram{display:grid;grid-template-columns:1fr auto 1.25fr auto 1fr;gap:.6rem;align-items:center}.mapping-diagram article{min-height:150px;padding:1rem;display:flex;flex-direction:column;justify-content:space-between;border:1px solid rgba(215,167,101,.35);text-align:center}.mapping-diagram span{color:#a69f96;font-size:.65rem;text-transform:uppercase}.mapping-center{background:#342818}.mapping-center b{color:var(--accent)}.asset-placeholder--large{min-height:560px;margin-top:3rem}.space-legend{margin-top:1rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem}.space-legend article{padding:1.2rem;border-top:2px solid #9d7444;background:rgba(255,255,255,.4)}.space-legend p{margin-top:1.2rem;color:#68645e;font-size:.82rem;line-height:1.65}.grammar-grid{margin-top:3rem;display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem}.grammar-grid article{min-height:300px;padding:1.2rem;border-top:2px solid var(--accent);background:#141419}.grammar-grid article>span{color:var(--accent)}.grammar-grid h3{margin:2.5rem 0 0}.limits-grid ul{display:grid;grid-template-columns:1fr 1fr;align-content:start;list-style:none}.limits-grid li{padding:1rem;border-top:1px solid rgba(255,255,255,.12);color:#aaa59e}.limits-grid>div>p:last-child,.next-grid>div:last-child>p{margin-top:1.2rem;color:#aaa59e;line-height:1.8}.status-section{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(3rem,8vw,7rem)}.status-section>div:last-child>p{color:#aaa59e;line-height:1.85}.status-section>div:last-child>span{display:inline-block;margin-top:1.5rem;padding:.55rem .8rem;border:1px solid rgba(215,167,101,.4);color:var(--accent);font-size:.72rem}.next-section{background:var(--accent);color:#18130d}.next-section .kicker{color:#5f3b13}.next-grid>div:last-child>p{color:#433323}.next-grid ul{margin-top:1.5rem;display:flex;flex-wrap:wrap;gap:.5rem;list-style:none}.next-grid li{padding:.5rem .7rem;border:1px solid rgba(24,19,13,.3);font-size:.75rem}.footer{padding:4rem 0;display:grid;grid-template-columns:1fr 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.footer>p{color:#827e78}.footer>a:not(.back-link){font-size:clamp(1.3rem,3vw,2.3rem);font-weight:700}.footer .back-link{grid-column:2}
@media(max-width:900px){.shell,.topbar{width:min(100% - 2rem,1140px)}.topbar{min-height:68px}.hero,.question-grid,.study-grid,.evidence-grid,.mapping-grid,.limits-grid,.next-grid,.status-section{grid-template-columns:1fr}.hero{padding:5rem 0 4rem}.question-grid,.why,.parameter-section,.early-probes,.lab-section,.movement-probes,.study-a,.method-correction,.study-b,.coding,.evidence-section,.findings,.mapping-section,.design-space,.grammar,.limits-section,.status-section,.next-section{padding-top:4rem;padding-bottom:4rem}.parameter-grid{grid-template-columns:repeat(2,1fr)}.probe-row,.preset-grid,.meaning-grid,.grammar-grid{grid-template-columns:repeat(2,1fr)}.decision-grid,.space-legend{grid-template-columns:1fr}.revised-flow,.concept-flow,.mapping-diagram{grid-template-columns:1fr}.revised-flow i,.concept-flow i,.mapping-diagram>i{transform:rotate(90deg);text-align:center}.asset-placeholder--image,.asset-placeholder--large{min-height:360px}.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}
@media(max-width:560px){.topbar{align-items:flex-start;gap:1rem;padding:1rem 0}.back-link{text-align:right}.parameter-grid,.probe-row,.preset-grid,.meaning-grid,.coding-flow,.finding-grid,.grammar-grid,.limits-grid ul{grid-template-columns:1fr}.turning-point{grid-template-columns:1fr}.turning-point i{transform:rotate(90deg);text-align:center}.version-timeline li{grid-template-columns:1fr;gap:.5rem}.asset-placeholder--image,.asset-placeholder--large{min-height:290px}.space-legend{grid-template-columns:1fr}}
.probe-row .probe-agent{fill:#f4f1eb;stroke:#0c0c10;stroke-width:1.5}.probe-note{max-width:720px;margin-top:1.2rem;color:#77736e;font-size:.75rem;line-height:1.65}.evidence-figure{margin:2rem 0 0}.evidence-figure img{width:100%;height:auto;display:block;border:1px solid rgba(255,255,255,.12);background:#f4f3f1}.evidence-figure figcaption{padding:.85rem 0 0;color:#8f8b85;font-size:.75rem;line-height:1.6}.evidence-figure--dark img{border-color:rgba(215,167,101,.28)}.evidence-figure--paper{margin-top:0}.evidence-figure--paper img{border-color:rgba(24,23,25,.16)}.evidence-figure--paper figcaption{color:#68645e}.evidence-figure--large{margin-top:3rem}
.probe-atlas{margin-top:3rem}.probe-atlas img{border-color:rgba(215,167,101,.22)}.parameter-audit{margin-top:1.5rem;border:1px solid rgba(215,167,101,.3);background:#141419}.parameter-audit summary{padding:1.15rem 1.3rem;display:flex;align-items:center;justify-content:space-between;gap:1rem;cursor:pointer;list-style:none}.parameter-audit summary::-webkit-details-marker{display:none}.parameter-audit summary span{color:var(--accent);font-size:.68rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase}.parameter-audit summary strong{font-size:.86rem}.parameter-table-wrap{overflow-x:auto;border-top:1px solid rgba(255,255,255,.1)}.parameter-audit table{width:100%;min-width:1180px;border-collapse:collapse;font-size:.68rem}.parameter-audit th,.parameter-audit td{padding:.72rem .65rem;border-right:1px solid rgba(255,255,255,.07);border-bottom:1px solid rgba(255,255,255,.07);text-align:right;white-space:nowrap}.parameter-audit thead th{color:#aaa59e;font-weight:600}.parameter-audit tbody th{color:var(--accent);text-align:left}.parameter-audit>p{padding:1rem 1.3rem;color:#817d77;font-size:.72rem;line-height:1.6}.data-pipeline{padding:6rem 0;background:var(--paper);color:var(--ink)}.data-pipeline .kicker{color:#8b5b23}.data-pipeline .section-copy>p:last-child{color:#625f5a}.data-counts{margin-top:3rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem}.data-counts article{padding:1.2rem;border-top:2px solid #9d7444;background:rgba(255,255,255,.45)}.data-counts strong{display:block;font-size:2.4rem}.data-counts span{display:block;margin-top:.35rem;font-weight:700}.data-counts small{display:block;margin-top:.45rem;color:#716d67}.data-stage-grid{margin-top:1rem;padding:0;display:grid;grid-template-columns:repeat(4,1fr);gap:.8rem;list-style:none}.data-stage-grid li{min-height:220px;padding:1.15rem;border:1px solid rgba(24,23,25,.12);background:rgba(255,255,255,.28)}.data-stage-grid span{color:#8b5b23;font:700 .7rem var(--font-mono)}.data-stage-grid h3{margin:2.5rem 0 .65rem}.data-stage-grid p{color:#6c6862;font-size:.8rem;line-height:1.68}.coding-example{margin-top:1rem;padding:1.4rem;display:grid;grid-template-columns:1.2fr .8fr;gap:2rem;background:#17171b;color:#f4f1eb}.coding-example h3{margin:.65rem 0 1.4rem}.coding-example dl{margin:0}.coding-example dl div{padding:.75rem 0;border-top:1px solid rgba(255,255,255,.1)}.coding-example dt{color:var(--accent);font-size:.68rem;text-transform:uppercase}.coding-example dd{margin:.35rem 0 0;color:#bbb7b1}.coding-example__result{display:grid;grid-template-columns:1fr;align-content:start}.coding-example__result span{margin-top:.72rem;color:#8f8b85;font-size:.65rem;text-transform:uppercase}.coding-example__result strong{margin-top:.18rem;font:700 .8rem var(--font-mono);color:var(--accent-soft)}.audit-note{margin-top:1rem;padding:1.2rem;border-left:3px solid #9d7444;background:rgba(255,255,255,.42)}.audit-note p{margin-top:.45rem;color:#625f5a;line-height:1.7}
@media(max-width:900px){.data-pipeline{padding:4rem 0}.data-stage-grid{grid-template-columns:repeat(2,1fr)}.coding-example{grid-template-columns:1fr}.probe-atlas img{min-width:0}}
@media(max-width:560px){.parameter-audit summary{align-items:flex-start;flex-direction:column}.data-counts,.data-stage-grid{grid-template-columns:1fr}.data-stage-grid li{min-height:0}}
.evidence-matrix-section{padding:6rem 0}.evidence-matrix-section .section-copy>p:last-child{color:#aaa7a2}.evidence-matrix-wrap{margin-top:3rem;overflow-x:auto;border-top:2px solid var(--accent)}.evidence-matrix{width:100%;min-width:1080px;border-collapse:collapse;background:#131318;font-size:.78rem}.evidence-matrix th,.evidence-matrix td{padding:1.15rem 1rem;border-right:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.1);vertical-align:top;text-align:left;line-height:1.65}.evidence-matrix thead th{color:#8f8b85;font-size:.66rem;letter-spacing:.08em;text-transform:uppercase}.evidence-matrix tbody th{width:110px;color:var(--accent);font-size:.9rem}.evidence-matrix td{color:#aaa69f}.evidence-matrix td:nth-child(4){width:150px}.evidence-matrix td span{display:inline-block;padding:.32rem .5rem;border:1px solid rgba(215,167,101,.35);color:var(--accent-soft);font-size:.66rem;white-space:nowrap}.evidence-matrix td:last-child{color:#d2cec7}
@media(max-width:900px){.evidence-matrix-section{padding:4rem 0}}
.table-scroll-note{display:none}@media(max-width:900px){.table-scroll-note{display:block;margin:1.5rem 0 -1.5rem;color:#77736e;font-size:.72rem}}
</style>

<style lang="scss" scoped>
@use './styles/research-detail-system';
</style>

<style lang="scss" scoped>
.space-legend article {
  color: var(--research-text);
  border-top-color: var(--research-accent);
  background: var(--research-bg);
}
.space-legend span { color: var(--research-accent); }
.space-legend p { color: var(--research-muted); }
.case-study .kicker { color: var(--research-accent); }
.question-grid,
.study-grid,
.mapping-grid { border-top: 0; }
.coding-example__result { border: 0; }
.questions aside {
  color: #c4c0ba;
  border-left: 0;
  background: #211b14;
}
.limits-section,
.next-section { padding-block: 0; }
.limits-grid,
.next-grid { padding-block: 3rem; border-top: 0; }
.status-section { padding-block: 3rem; }
.next-grid > div:last-child > p { color: var(--research-muted); }

.extension-section {
  padding-block: 6rem;
  color: var(--research-text);
  background: var(--research-bg);
  border-top: 1px solid var(--research-line);
}
.extension-section--surface { background: var(--research-surface); }
.extension-layout {
  display: grid;
  grid-template-columns: minmax(230px, 4fr) minmax(0, 8fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
}
.extension-copy {
  color: var(--research-muted);
  font-size: .94rem;
  line-height: 1.78;
}
.extension-copy p + p { margin-top: 1rem; }
.research-transition {
  margin: 2rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr auto 1.2fr auto 1fr;
  gap: .65rem;
  align-items: center;
  list-style: none;
}
.research-transition li:not([aria-hidden]) {
  min-height: 110px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid var(--research-line);
}
.research-transition li[aria-hidden] {
  color: var(--research-accent);
  text-align: center;
}
.research-transition span,
.structural-grid article > span,
.condition-card header > span,
.motion-timeline > li > span,
.procedure-list span,
.result-grid article > span,
.reflection-grid article > span,
.subsection-heading > span {
  color: var(--research-accent);
  font: 700 .68rem/1.4 var(--font-mono);
}
.research-transition strong { font-size: .86rem; }
.embodiment-comparison {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  border-block: 1px solid var(--research-line);
}
.embodiment-comparison article {
  padding: 1.3rem;
  border-right: 1px solid var(--research-line);
}
.embodiment-comparison article:last-child { border-right: 0; }
.embodiment-comparison svg {
  width: 100%;
  max-height: 180px;
  display: block;
  fill: var(--research-bg);
  stroke: var(--research-accent);
  stroke-width: 2;
}
.embodiment-comparison svg path { fill: none; }
.embodiment-comparison .comparison-body {
  stroke-width: 8;
  stroke-linecap: round;
}
.embodiment-comparison .comparison-target { fill: none; }
.embodiment-comparison h3 { margin-top: 1.2rem; }
.embodiment-comparison ul {
  margin-top: 1rem;
  padding-left: 1rem;
  color: var(--research-muted);
  font-size: .82rem;
  line-height: 1.8;
}
.extension-subsection {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--research-line);
}
.subsection-heading {
  display: flex;
  gap: 1rem;
  align-items: baseline;
}
.structural-grid {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  border-block: 1px solid var(--research-line);
}
.structural-grid article {
  min-height: 170px;
  padding: 1.1rem;
  border-right: 1px solid var(--research-line);
}
.structural-grid article:last-child { border-right: 0; }
.structural-grid h3,
.result-grid h3,
.reflection-grid h3 { margin-top: 2.5rem; }
.structural-grid p,
.capability-list p,
.condition-card p,
.expectation-grid p,
.result-grid p,
.reflection-grid p {
  margin-top: .65rem;
  color: var(--research-muted);
  font-size: .8rem;
  line-height: 1.65;
}
.research-placeholder {
  aspect-ratio: 4 / 3;
  padding: 1rem;
  display: grid;
  place-items: center;
  border: 1px dashed var(--research-line);
  background: var(--research-surface);
  text-align: center;
}
.research-placeholder > span {
  max-width: 90%;
  color: var(--research-muted);
  font: 700 .64rem/1.55 var(--font-mono);
  letter-spacing: .04em;
}
.research-placeholder--wide {
  margin-top: 1rem;
  aspect-ratio: 16 / 9;
}
.research-placeholder--animation {
  margin-top: 1rem;
  aspect-ratio: 16 / 10;
}
.research-placeholder--data { margin-top: 1rem; }
.prototype-figure {
  margin: 0;
  aspect-ratio: 4 / 3;
  display: grid;
  place-items: center;
  overflow: hidden;
  border: 1px solid var(--research-line);
  background: #f4f3f1;
}
.prototype-figure img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}
.prototype-figure--wide {
  margin-top: 1rem;
  aspect-ratio: 16 / 9;
}
.placeholder-grid {
  margin-top: 1rem;
  display: grid;
  gap: 1rem;
}
.placeholder-grid--four { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.placeholder-grid--two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.capability-list {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid var(--research-line);
}
.capability-list article {
  padding: 1rem;
  border-right: 1px solid var(--research-line);
  border-bottom: 1px solid var(--research-line);
}
.capability-list article:last-child { border-right: 0; }
.documentation-list {
  margin: 1.5rem 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  border-top: 1px solid var(--research-line);
}
.documentation-list li {
  margin-right: 1rem;
  padding: .8rem 1rem .8rem 0;
  color: var(--research-muted);
  font-size: .76rem;
}
.integrity-note {
  margin-top: 1rem;
  padding-left: 1rem;
  color: var(--research-muted);
  border-left: 2px solid var(--research-accent);
  font-size: .76rem;
  line-height: 1.6;
}
.condition-grid,
.expectation-grid,
.control-grid {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
.condition-card {
  padding: 1.2rem;
  border-top: 2px solid var(--research-accent);
  background: var(--research-bg);
}
.condition-card header {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  gap: .8rem;
}
.condition-card header h3 { font-size: 1.15rem; }
.condition-rationale {
  margin-top: 1.4rem!important;
  padding-top: 1rem;
  border-top: 1px solid var(--research-line);
}
.condition-rationale strong {
  margin-bottom: .45rem;
  display: block;
  color: var(--research-text);
  font-size: .72rem;
}
.motion-timeline {
  margin: 1.2rem 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--research-line);
}
.motion-timeline li {
  padding: .75rem 0;
  display: grid;
  grid-template-columns: 2rem 5rem 1fr;
  gap: .6rem;
  border-bottom: 1px solid var(--research-line);
}
.motion-timeline strong { font-size: .75rem; }
.motion-timeline small {
  color: var(--research-muted);
  font-size: .72rem;
  line-height: 1.5;
}
.condition-spec { margin: 1rem 0 0; }
.condition-spec div {
  padding: .65rem 0;
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1rem;
  border-bottom: 1px solid var(--research-line);
}
.condition-spec dt {
  color: var(--research-muted);
  font-size: .68rem;
}
.condition-spec dd {
  margin: 0;
  font-size: .72rem;
}
.condition-media { margin: 1rem 0 0; }
.condition-media .research-placeholder { margin-top: 0; }
.condition-media figcaption {
  padding-top: .55rem;
  color: var(--research-muted);
  font-size: .68rem;
}
.table-wrap {
  margin-top: 1.5rem;
  overflow-x: auto;
  border-top: 2px solid var(--research-accent);
}
.motion-parameter-table {
  width: 100%;
  min-width: 850px;
  border-collapse: collapse;
  font-size: .72rem;
}
.motion-parameter-table th,
.motion-parameter-table td {
  padding: .85rem;
  border-right: 1px solid var(--research-line);
  border-bottom: 1px solid var(--research-line);
  text-align: left;
  vertical-align: top;
  line-height: 1.55;
}
.motion-parameter-table th { color: var(--research-accent); }
.motion-parameter-table td { color: var(--research-muted); }
.motion-parameter-table td:first-child { color: var(--research-text); }
.motion-parameter-table code { color: var(--research-text); }
.research-question {
  margin: 1.5rem 0 0;
  padding: 1.2rem;
  border-left: 3px solid var(--research-accent);
  background: var(--research-surface);
  color: var(--research-text);
  font-size: clamp(1rem, 2vw, 1.3rem);
  line-height: 1.55;
}
.expectation-grid article,
.control-grid article {
  padding: 1.1rem;
  border-top: 1px solid var(--research-line);
  background: var(--research-surface);
}
.control-grid article > span {
  color: var(--research-accent);
  font: 700 .68rem/1.4 var(--font-mono);
}
.control-grid ul {
  margin: 1rem 0 0;
  padding-left: 1rem;
  color: var(--research-muted);
  font-size: .78rem;
  line-height: 1.8;
}
.procedure-list {
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--research-line);
}
.procedure-list li {
  padding: .9rem 0;
  display: grid;
  grid-template-columns: 3rem 1fr;
  border-bottom: 1px solid var(--research-line);
}
.procedure-list p {
  color: var(--research-muted);
  font-size: .8rem;
  line-height: 1.6;
}
.evaluation-status {
  margin-top: 1.5rem;
  padding: .55rem .75rem;
  display: inline-block;
  color: var(--research-accent);
  border: 1px solid var(--research-accent);
  font: 700 .66rem/1.4 var(--font-mono);
}
.result-grid {
  margin-top: 1.5rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}
.result-grid article,
.reflection-grid article {
  padding: 1.1rem;
  border-top: 1px solid var(--research-line);
  background: var(--research-bg);
}
.result-placeholder {
  min-height: 120px;
  margin-top: 1rem;
  padding: 1rem;
  display: grid;
  place-items: center;
  border: 1px dashed var(--research-line);
  color: var(--research-muted);
  font: 700 .62rem/1.5 var(--font-mono);
  text-align: center;
}
.reflection-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

@media (max-width: 900px) {
  .limits-grid,
  .status-section,
  .next-grid { padding-block: 2.5rem; }
  .extension-section { padding-block: 4rem; }
  .extension-layout { grid-template-columns: 1fr; gap: 2rem; }
  .research-transition { grid-template-columns: 1fr; }
  .research-transition li[aria-hidden] { transform: rotate(90deg); }
  .embodiment-comparison,
  .structural-grid { grid-template-columns: 1fr; }
  .embodiment-comparison article,
  .structural-grid article {
    min-height: 0;
    border-right: 0;
    border-bottom: 1px solid var(--research-line);
  }
  .embodiment-comparison article:last-child,
  .structural-grid article:last-child { border-bottom: 0; }
  .capability-list,
  .placeholder-grid--four { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .capability-list article:nth-child(even) { border-right: 0; }
  .condition-grid,
  .result-grid { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .capability-list,
  .placeholder-grid--four,
  .placeholder-grid--two,
  .expectation-grid,
  .control-grid,
  .reflection-grid { grid-template-columns: 1fr; }
  .capability-list article { border-right: 0; }
  .motion-timeline li { grid-template-columns: 1.7rem 4.2rem 1fr; }
  .condition-spec div { grid-template-columns: 1fr; gap: .25rem; }
  .research-placeholder--wide { aspect-ratio: 4 / 3; }
}
</style>
