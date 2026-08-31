<script setup>
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
  { number: '01', title: 'Perceptual salience is not semantic specificity.', text: 'Slow speed and curvature were readily noticed, but did not map to one stable meaning.' },
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
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#research-projects`"><span aria-hidden="true">&larr;</span> Back to selected research</a>
    </header>

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
          <p>Conceptual overview—not a participant-facing stimulus.</p>
        </div>
      </section>

      <section class="question-band">
        <div class="shell question-grid">
          <p class="kicker">01 · Research question</p>
          <div><h2>Can movement alone make a machine feel intentional?</h2><p>Instead of giving robots faces, limbs, or human-like gestures, this exploration treats movement itself as a communication material. The agent is intentionally non-anthropomorphic.</p></div>
        </div>
      </section>

      <section class="shell why">
        <div class="section-copy"><p class="kicker">02 · Why movement?</p><h2>Remove the familiar social signals.</h2><p>Social robots often rely on faces, gaze, arms, gesture, or humanoid form. This study asks what remains when those signals are removed—and whether speed, acceleration, pause, reversal, curvature, and oscillation still invite interpretations of intention or agency.</p></div>
        <ol class="concept-flow" aria-label="Initial conceptual model"><li><span>Input</span><strong>Kinematics</strong><small>measurable motion</small></li><i>↓</i><li><span>Transformation</span><strong>Movement quality</strong><small>temporal pattern</small></li><i>↓</i><li><span>Interpretation</span><strong>Perceived meaning</strong><small>state · intention · agency</small></li></ol>
      </section>

      <section class="parameter-section">
        <div class="shell">
          <div class="section-copy"><p class="kicker">03 · From intuition to parameters</p><h2>Avoid semantic labels too early.</h2><p>I did not begin by designing a “happy” or “hesitant” animation. The first step was to decompose motion into lower-level properties that could be manipulated systematically.</p></div>
          <div class="parameter-grid"><article v-for="([name, text], index) in parameters" :key="name"><span>{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ name }}</h3><p>{{ text }}</p></article></div>
        </div>
      </section>

      <section class="shell early-probes">
        <div class="section-copy"><p class="kicker">04 · Early motion probes</p><h2>Intuition was useful—and too entangled.</h2><p>Early Figma probes gave the question a visible form, but they also changed too many variables at once. The problem shifted from inventing expressive motions to isolating what produced an interpretation.</p></div>
        <div class="probe-row"><article v-for="probe in earlyProbes" :key="probe.name"><svg viewBox="0 0 120 76" role="img" :aria-label="`${probe.name} early movement hypothesis`"><path :d="probe.path"/><circle class="probe-agent" r="4"><animateMotion :path="probe.path" :dur="probe.duration" repeatCount="indefinite" /></circle></svg><h3>{{ probe.name }}</h3><p>{{ probe.issue }}</p></article></div>
        <div class="turning-point"><strong>Initial probes</strong><i>→</i><span>Too many variables changed together</span><i>→</i><strong>Build a parameterized movement lab</strong></div>
        <p class="probe-note">These web animations reconstruct the motion logic of the early Figma probes; they are presented as formative hypotheses, not study stimuli.</p>
      </section>

      <section class="lab-section">
        <div class="shell">
          <div class="section-copy"><p class="kicker">05 · Building Movement Lab</p><h2>The research tool evolved with the study.</h2><p>Movement Lab is a researcher-side Processing tool for manipulating parameters, building presets, and running repeatable sessions—not a participant-facing final product.</p></div>
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
          <div><p class="kicker">07 · Study A · Movement → Meaning</p><h2>Open interpretation, not emotion guessing.</h2><div class="study-meta"><strong>n = 6</strong><span>exploratory pilot</span><span>randomized probes</span></div></div>
          <div class="questions"><p><span>01</span>What do you think this object was doing?</p><p><span>02</span>If it had a state or intention, how would you describe it?</p><p><span>03</span>What part of the movement made you think that?</p><aside>The study did not test whether participants “guessed the correct emotion.” It explored how meaning emerged from movement.</aside></div>
        </div>
      </section>

      <section class="shell method-correction">
        <div class="section-copy"><p class="kicker">08 · Why Study B changed</p><h2>A method correction before data collection.</h2><p>The initial plan asked participants to express a meaning by adjusting Movement Lab sliders. That interface would have primed them with the researcher-defined parameter space and turned elicitation into a UI task.</p></div>
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
          <div class="section-copy"><p class="kicker">10 · From records to evidence</p><h2>Data Cleaning and Coding</h2><p>The analysis kept raw descriptions separate from researcher interpretation, preserved presentation order, and documented each revision from open coding to final aggregation.</p></div>
          <div class="data-counts"><article><strong>72</strong><span>Study A records</span><small>6 participants × 12 probes</small></article><article><strong>24</strong><span>Study B records</span><small>6 participants × 4 meanings</small></article><article><strong>3</strong><span>coding layers</span><small>behaviour · state/intention · cue</small></article></div>
          <ol class="data-stage-grid"><li v-for="stage in dataStages" :key="stage.step"><span>{{ stage.step }}</span><h3>{{ stage.title }}</h3><p>{{ stage.text }}</p></li></ol>
          <div class="coding-example"><div><p class="kicker">An anonymized worked example</p><h3>P06 · translated from Chinese</h3><dl><div><dt>Behaviour</dt><dd>“It was moving at varying speeds.”</dd></div><div><dt>State / intention</dt><dd>“Hesitant.”</dd></div><div><dt>Movement cue</dt><dd>“It paused.”</dd></div></dl></div><div class="coding-example__result"><span>Behaviour code</span><strong>variable_speed_motion</strong><span>State code</span><strong>hesitation</strong><span>Cue code</span><strong>pause_present</strong><span>Review status</span><strong>manual review</strong></div></div>
          <aside class="audit-note"><strong>Quality-control rule</strong><p>Known preset manipulations were never used to infer what a participant perceived. Ambiguous cases could remain unspecified, and negations such as “no hesitation” or “no pause” were manually checked before aggregation.</p></aside>
        </div>
      </section>

      <section class="shell coding">
        <div class="section-copy"><p class="kicker">11 · Coding was iterative</p><h2>Separate what participants said from what the researcher knew.</h2><p>The first coding pass joined behavior, state, and cue text to increase keyword matches. This created cross-layer contamination. Coding v2 restricted each raw response to its own code layer and added manual review and negation checks.</p></div>
        <div class="coding-flow"><article><span>Behaviour_Raw</span><strong>Behaviour codes only</strong></article><article><span>State_Intention_Raw</span><strong>State codes only</strong></article><article><span>Movement_Cue_Raw</span><strong>Cue codes only</strong></article></div>
        <blockquote>Participant did not perceive it → do not code it.</blockquote>
        <p class="coding-note">Manual review also checked negation such as “no hesitation,” “no pause,” and “no reversal” to reduce keyword false positives.</p>
      </section>

      <section class="evidence-section">
        <div class="shell evidence-grid">
          <div><p class="kicker">12 · Perception map</p><h2>How movement was perceived</h2><p>In this exploratory pilot, direct movement tended to be associated with calmness and stability, while pauses and reversals more often shifted interpretation toward hesitation. High-frequency oscillation was more often read as playful or energetic.</p></div>
          <figure class="evidence-figure evidence-figure--paper"><img :src="homeUrl + 'images/research/movement-language/perception-heatmap.webp'" alt="Heatmap showing perceived states and intentions across twelve movement probes in an exploratory pilot with six participants" loading="lazy"><figcaption>Exploratory pilot, n = 6. Values indicate the number of participants whose responses were coded into each descriptive category.</figcaption></figure>
        </div>
      </section>

      <section class="shell findings">
        <div class="section-copy"><p class="kicker">13 · What emerged</p><h2>Four preliminary observations.</h2></div>
        <div class="finding-grid"><article v-for="finding in findings" :key="finding.number"><span>{{ finding.number }}</span><h3>{{ finding.title }}</h3><p>{{ finding.text }}</p></article></div>
      </section>

      <section class="mapping-section">
        <div class="shell mapping-grid">
          <div><p class="kicker">14 · Bidirectional mapping</p><h2>Perception and production reveal different evidence.</h2><p>Convergence does not imply a one-to-one vocabulary. It shows where features converge, remain ambiguous, depend on temporal context, or require a relational context.</p></div>
          <div class="mapping-diagram"><article><span>Movement features</span><strong>Movement</strong></article><i>→</i><article class="mapping-center"><span>Study A</span><strong>Perception</strong><b>↕</b><span>Study B</span><strong>Production</strong></article><i>←</i><article><span>Prompts</span><strong>Meaning</strong></article></div>
        </div>
      </section>

      <section class="shell evidence-matrix-section">
        <div class="section-copy"><p class="kicker">15 · A × B evidence matrix</p><h2>Where perception and production converge—and where they do not.</h2><p>The table keeps the two study directions visible before they are synthesized into a design space. Convergence labels are descriptive summaries of this exploratory pilot, not inferential results.</p></div>
        <p class="table-scroll-note">Swipe horizontally to compare all evidence columns →</p><div class="evidence-matrix-wrap"><table class="evidence-matrix"><thead><tr><th>Meaning</th><th>Study A · perception</th><th>Study B · production</th><th>Convergence</th><th>Design implication</th></tr></thead><tbody><tr v-for="row in evidenceMatrix" :key="row.meaning"><th>{{ row.meaning }}</th><td>{{ row.studyA }}</td><td>{{ row.studyB }}</td><td><span>{{ row.convergence }}</span></td><td>{{ row.implication }}</td></tr></tbody></table></div>
      </section>

      <section class="design-space">
        <div class="shell">
          <div class="section-copy"><p class="kicker">16 · Movement–meaning design space</p><h2>An exploratory design space emerging from the pilot.</h2><p>This is not a validated model. It organizes the difference between perceptual salience and semantic specificity while keeping under-tested relational motion visible.</p></div>
          <figure class="evidence-figure evidence-figure--paper evidence-figure--large"><img :src="homeUrl + 'images/research/movement-language/movement-meaning-design-space.webp'" alt="Exploratory movement-meaning design space plotting movement features by perceptual salience and semantic specificity" loading="lazy"><figcaption>Exploratory synthesis of Movement → Meaning and Meaning → Movement evidence. Positions summarize qualitative patterns rather than inferential effect sizes.</figcaption></figure>
          <div class="space-legend"><article><span>Promising patterns</span><p>Pause / interruption · reversal / correction · high-frequency oscillation</p></article><article><span>Visible, semantically broad</span><p>Slow speed · curved / indirect path · curvature direction</p></article><article><span>Relational / under-tested</span><p>Object-relative inspection / orbit emerged in Study B and was not formally tested in Study A.</p></article></div>
        </div>
      </section>

      <section class="shell grammar">
        <div class="section-copy"><p class="kicker">17 · An emerging movement grammar</p><h2>From isolated parameters toward layered organization.</h2><p>The exploration gradually shifted from treating movement as individual settings toward considering how motion is composed across kinematic, temporal, goal-related, and relational layers.</p></div>
        <div class="grammar-grid"><article v-for="item in grammar" :key="item.level"><span>{{ item.level }}</span><h3>{{ item.title }}</h3><ul><li v-for="value in item.items" :key="value">{{ value }}</li></ul></article></div>
      </section>

      <section class="limits-section">
        <div class="shell limits-grid"><div><p class="kicker">18 · What the current lab cannot yet express</p><h2>Participant ideas exposed new dimensions.</h2><p>These are not simply software bugs. They are motion structures that emerged beyond the first researcher-defined parameter space.</p></div><ul><li v-for="item in labLimits" :key="item">{{ item }}</li></ul></div>
      </section>

      <section class="shell status-section">
        <div><p class="kicker">19 · Current status</p><h2>Ongoing direction, paused pilot.</h2></div>
        <div><p>This research direction remains in progress, while the current pilot is paused for synthesis. Rather than treating the study as a finished vocabulary, I am using it to articulate a preliminary movement–meaning design space and identify questions for future embodied experiments.</p><span>Exploratory · preliminary · not a validated framework</span></div>
      </section>

      <section class="next-section">
        <div class="shell next-grid"><div><p class="kicker">20 · Possible next direction</p><h2>Point → object → physical non-anthropomorphic agent</h2></div><div><p>A future iteration could test whether these movement patterns remain legible when transferred from a screen-based point to a physical robotic body.</p><ul><li>relational motion</li><li>object-relative inspection</li><li>target distance</li><li>event-triggered behavior</li></ul></div></div>
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
