<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <div class="topbar__actions">
        <a class="back-link" :href="`${homeUrl}#research-projects`"><span aria-hidden="true">&larr;</span> Back to research projects</a>
        <button class="theme-toggle" type="button" :aria-label="isLightMode ? 'Switch to dark mode' : 'Switch to light mode'" @click="toggleTheme">
          <svg v-if="isLightMode" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" /></svg>
          <svg v-else viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" /></svg>
        </button>
      </div>
    </header>

    <article>
      <section class="hero shell">
        <div class="hero__copy">
          <p class="eyebrow">Current Independent Research · Social HRI · 2026</p>
          <h1>OYI: Embodied Companion Robot for Social Interaction</h1>
          <p class="lede">An independent mixed-method research project exploring how physical embodiment, persistent dialogue, and ambient light feedback shape companionship and social presence.</p>
          <div class="chips"><span>Independent Research Lead</span><span>32 participants</span><span>5-day study</span><span>Voice + light</span></div>
        </div>
        <figure class="hero__visual">
          <img :src="asset('hri-hero-annotated.webp')" alt="A human participant and the OYI embodied agent connected through voice, light, and conversational memory" fetchpriority="high" />
          <figcaption>Contextual image illustrating one-to-one interaction with the functional OYI prototype.</figcaption>
        </figure>
      </section>

      <section class="shell two-column">
        <div><p class="kicker">Research question</p><h2>How can a conversational robot build a sense of social presence?</h2></div>
        <div class="prose"><p>OYI extends my earlier research on legible multimodal communication from autonomous mobility toward embodied social interaction. The project asks how a small physical robot can establish continuity across repeated conversations without relying on human-like appearance.</p><p>The study focuses on embodiment, conversational memory, structured guidance, and researcher-controlled light as an additional social signal.</p></div>
      </section>

      <section class="metrics-band"><div class="shell metric-grid"><div><strong>32</strong><span>participants</span></div><div><strong>5 days</strong><span>longitudinal interaction</span></div><div><strong>16 + 16</strong><span>experimental and control groups</span></div><div><strong>Mixed methods</strong><span>scales, interaction records, and interviews</span></div></div></section>

      <section class="shell implementation">
        <div class="section-intro"><p class="kicker">Embodied implementation</p><h2>Building the robot and study as one system</h2><p class="prose">I developed the form, physical enclosure, interaction behavior, and study protocol as one connected research system. The articulated arms are part of the physical construction; the evaluated interaction concentrated on voice dialogue and ambient light feedback.</p></div>
        <div class="evidence-grid">
          <figure><img :src="asset('physical-prototype.jpg')" alt="Front view of the 3D-printed OYI physical prototype" /><figcaption><strong>Physical form.</strong> A 3D-printed body with a black face panel and articulated arm joints.</figcaption></figure>
          <figure><img :src="asset('light-feedback.jpg')" alt="OYI physical prototype illuminated with green ambient light" /><figcaption><strong>Multimodal feedback.</strong> Internal RGB lighting turns the body into an ambient social signal.</figcaption></figure>
        </div>
      </section>

      <section class="system-section"><div class="shell system-grid">
        <div><p class="kicker">Technical implementation</p><h2>From speech input to embodied response</h2><p class="prose">The same core hardware and memory capability were used in both study conditions.</p></div>
        <div class="system-flow">
          <article><span>01 · Hardware</span><strong>Voice interface</strong><p>ESP32-S3 N16R8, display, microphone, and speaker inside a Xingzhi CUBE XiaoZhi AI dialogue module</p></article>
          <i aria-hidden="true">→</i>
          <article><span>02 · Model</span><strong>Dialogue logic</strong><p>DeepSeek-based conversation configured through system prompts and daily dialogue goals, without model fine-tuning</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03 · Context</span><strong>Persistent memory</strong><p>Prior conversation details carried across the five daily sessions in both conditions</p></article>
          <i aria-hidden="true">→</i>
          <article><span>04 · Output</span><strong>Voice + light</strong><p>Spoken responses in both conditions; researcher-controlled LED colour, brightness, and transitions in the experimental condition</p></article>
        </div>
      </div></section>

      <section class="shell design-language">
        <div class="section-intro"><p class="kicker">Design development</p><h2>From a friendly non-humanoid form to a research prototype</h2><p class="prose">The visual language explored a rounded body, cat-like cues, expressive face states, and movable arms. The functional prototype implemented the physical form, articulated arms, voice dialogue, memory, and ambient light used in the study.</p></div>
        <div class="design-crops">
          <figure class="design-crop"><svg viewBox="820 70 860 980" preserveAspectRatio="xMidYMid slice"><image :href="asset('design-development.jpg')" width="3368" height="1190" /></svg><figcaption>Form exploration</figcaption></figure>
          <figure class="design-crop design-crop--render"><img :src="asset('hero-clean-v2.png')" alt="Refined OYI companion robot concept" /><figcaption>Refined concept</figcaption></figure>
        </div>
      </section>

      <section class="multimodal-section"><div class="shell multimodal-inner">
        <div class="section-intro"><p class="kicker">Multimodal strategy</p><h2>Each channel had a defined role</h2><p class="prose">The broader concept included movement, facial display, touch, and temperature. The study focused on voice dialogue and researcher-controlled ambient light.</p></div>
        <div class="modality-grid">
          <article><span>Voice</span><strong>Guide the exchange</strong><p>Active openings, reflective follow-up, reframing prompts, and session summaries.</p><small>Experimental and control</small></article>
          <article><span>Memory</span><strong>Maintain continuity</strong><p>Earlier conversation details could be recalled across all five days.</p><small>Experimental and control</small></article>
          <article><span>Physical form</span><strong>Create object presence</strong><p>A compact 3D-printed body situated the conversation in a shared physical space.</p><small>Experimental and control</small></article>
          <article><span>Ambient light</span><strong>Make state visible</strong><p>Colour, brightness, and transitions supplemented the spoken response. The researcher controlled these cues during the study.</p><small>Experimental only · researcher controlled</small></article>
        </div>
        <p class="scope-note"><strong>Outside this evaluation:</strong> autonomous movement, touch feedback, temperature change, expressive face behaviour, and automatic emotion recognition.</p>
      </div></section>

      <section class="shell principles">
        <div><p class="kicker">Design principles</p><h2>Five principles derived from the study</h2></div>
        <ol class="principle-list">
          <li><span>01</span><p><strong>Clarify before advising.</strong> Reflect the situation and help users articulate what they think before offering suggestions.</p></li>
          <li><span>02</span><p><strong>Guide gradually and preserve exit points.</strong> Active prompts should deepen reflection without turning into repeated questioning.</p></li>
          <li><span>03</span><p><strong>Synchronise the modalities.</strong> Voice and light should communicate the same interaction state at the same moment.</p></li>
          <li><span>04</span><p><strong>Use memory as relationship continuity.</strong> Recall supports continuity when it enables relevant follow-up.</p></li>
          <li><span>05</span><p><strong>Pair social cues with clear boundaries.</strong> A companion-like form should not obscure system limits, privacy, or data use.</p></li>
        </ol>
      </section>

      <section class="demo-section"><div class="shell demo-grid">
        <div><p class="kicker">Interaction demo</p><h2>Mandarin voice dialogue with responsive light feedback</h2><p class="prose">The original interaction was developed and studied in Mandarin. The video shows the implemented sequence: the user speaks, OYI responds, and the body light changes as an additional interaction cue.</p></div>
        <figure class="video-frame"><video controls playsinline preload="metadata" :poster="asset('light-feedback.jpg')"><source :src="media('oyi-interaction-demo.mp4')" type="video/mp4" />Your browser does not support embedded video.</video><figcaption>Functional OYI prototype interaction demo</figcaption></figure>
      </div></section>

      <section class="shell study">
        <div><p class="kicker">Study design</p><h2>Two parallel conditions across five days</h2><p class="prose">Thirty-two participants were assigned to two groups of 16. The comparison evaluated the combined effect of structured guidance, active initiation, deeper follow-up, and researcher-controlled light.</p></div>
        <div>
          <div class="shared-baseline"><span>Held constant in both groups</span><p>16 participants · same OYI body and voice hardware · persistent memory · one daily topic · at least 10 minutes per day · five consecutive days</p></div>
          <div class="study-grid">
            <article><span>Experimental condition · n = 16</span><h3>Integrated interaction</h3><p>Structured guided reflection, active initiation, deeper follow-up, and researcher-controlled ambient light.</p></article>
            <div class="comparison-mark" aria-hidden="true">vs</div>
            <article><span>Control condition · n = 16</span><h3>General voice interaction</h3><p>Neutral open daily topics and general conversation, without structured guidance or ambient light.</p></article>
          </div>
          <p class="evaluation-line"><strong>Evaluation:</strong> pre/post measures, post-study scales, interaction records, and 32 semi-structured interviews.</p>
          <ol class="study-timeline" aria-label="Five-day interaction sequence">
            <li><span>Day 1</span>Build familiarity</li>
            <li><span>Day 2</span>Notice recurring thoughts</li>
            <li><span>Day 3</span>Explore other interpretations</li>
            <li><span>Day 4</span>Take another perspective</li>
            <li><span>Day 5</span>Review and carry forward</li>
          </ol>
        </div>
      </section>

      <section class="results-section"><div class="shell results-inner">
        <div class="section-intro"><p class="kicker">Results</p><h2>Changes observed over five days</h2><p class="prose">The integrated condition was associated with lower negative affect and stronger perceived empathy and social presence. Positive affect, self-regulation skills, usability, and overall trust did not differ significantly between conditions.</p></div>
        <div class="result-grid">
          <article><span class="result-label">Negative affect</span><strong>18.44 → 16.50</strong><p>Experimental-group mean decreased while the control-group mean increased from 19.38 to 20.56.</p><small>Time × condition interaction · p = .047</small></article>
          <article><span class="result-label">Perceived empathy</span><strong>61.44 vs 54.38</strong><p>Participants in the integrated condition rated OYI higher on perceived empathy.</p><small>RoPE · p = .024 · Hedges’ g = .83</small></article>
          <article><span class="result-label">Social presence</span><strong>55.13 vs 42.19</strong><p>The integrated condition produced a stronger sense that OYI was socially present in the interaction.</p><small>p = .012</small></article>
        </div>
        <p class="results-boundary"><strong>Other measures.</strong> The study found no significant condition-specific change in positive affect or the adapted self-regulation skills measure, and no significant usability difference. After correction, only the facilitating-conditions dimension of the trust scale differed; overall trust did not.</p>
        <div class="results-conclusion"><span>Conclusion</span><p>The integrated condition was associated with lower negative affect and stronger perceived empathy and social presence after five days. Because the features were evaluated together, the observed differences reflect the combined interaction.</p></div>
      </div></section>

      <section class="shell participant-insights">
        <div><p class="kicker">Participant insights</p><h2>Presence depended on continuity, timing, and legibility</h2></div>
        <div class="insight-grid">
          <article><span>What strengthened the experience</span><p>Participants described a stronger sense of being heard when OYI remembered earlier conversations, followed up on their situation, and paired voice with visible light feedback. Some interpreted the physical form and light as friend-like or comforting social cues.</p></article>
          <article><span>What limited the experience</span><p>Rapid or overly broad light changes, repeated questioning, generic advice, and speech interruptions made the robot feel more like a device. Privacy and data storage remained concerns even when participants were willing to share everyday experiences.</p></article>
        </div>
      </section>

      <section class="analysis"><div class="shell analysis__inner"><div><p class="kicker">Analytical focus</p><h2>From interface performance toward social HRI questions</h2></div><div class="analysis-list"><p><span>Companionship</span>When does a robot move from being perceived as a device to a social partner?</p><p><span>Continuity</span>How does remembered context affect relationship-building across repeated sessions?</p><p><span>Embodiment</span>What does a physical body add beyond a general conversational AI interface?</p><p><span>Multimodality</span>How do voice and researcher-controlled ambient light work together as social cues?</p></div></div></section>

      <section class="disclosure"><div class="shell disclosure__inner"><strong>Study scope</strong><p>This page documents an independent five-day study and distinguishes concept imagery from the functional prototype. OYI used model-enabled dialogue configuration, persistent memory, and researcher-controlled light feedback. Foundation-model training and automated emotion recognition were outside the implementation.</p></div></section>

      <section class="limitation"><div class="shell limitation__inner"><div><p class="kicker">Limitations and next steps</p><h2>Questions for a longer-term study</h2></div><div class="limitation-list"><p><strong>Short duration.</strong> Five days captured the beginning of a relationship; longer studies are needed to examine sustained use and lasting change.</p><p><strong>Focused sample.</strong> The 32 participants were primarily students in everyday, low-risk settings.</p><p><strong>Integrated condition.</strong> Structured dialogue, active prompting, and light feedback were evaluated together, so their individual contributions remain unresolved.</p><p><strong>Supervised light.</strong> The researcher controlled the ambient light during the study.</p><p><strong>Future interaction.</strong> Longer studies and multi-user settings could examine shared attention, turn-taking, and relationship continuity.</p></div></div></section>
    </article>

    <footer class="footer shell"><p>Interested in this research?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/oyi/${filename}`
const media = (filename) => `${import.meta.env.BASE_URL}media/research/oyi/${filename}`

const isLightMode = ref(false)

onMounted(() => {
  isLightMode.value = localStorage.getItem('theme') === 'light'
  document.documentElement.classList.toggle('light', isLightMode.value)
})

const toggleTheme = () => {
  isLightMode.value = !isLightMode.value
  document.documentElement.classList.toggle('light', isLightMode.value)
  localStorage.setItem('theme', isLightMode.value ? 'light' : 'dark')
}
</script>

<style lang="scss" scoped>
.case-study {
  --case-accent: var(--color-primary-light);
  --case-bg: var(--color-bg);
  --case-surface: var(--color-bg-secondary);
  --case-text: var(--color-text);
  --case-muted: var(--color-text-secondary);
  --case-line: var(--color-border);
  min-height: 100vh;
  color: var(--case-text);
  background: var(--case-bg);
}

.shell,
.topbar {
  width: min(1180px, calc(100% - 3rem));
  margin-inline: auto;
}

.topbar {
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--case-line);
}

.topbar__actions { display: flex; align-items: center; gap: 1.25rem; }
.brand { color: var(--case-text); font-size: .92rem; font-weight: 700; letter-spacing: -.01em; }
.back-link { color: var(--case-muted); font-size: .78rem; }
.back-link:hover { color: var(--case-text); }
.theme-toggle { width: 34px; height: 34px; padding: 7px; color: var(--case-muted); border: 1px solid var(--case-line); background: transparent; cursor: pointer; }
.theme-toggle:hover { color: var(--case-text); border-color: var(--case-muted); }
.theme-toggle svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.4; stroke-linecap: round; stroke-linejoin: round; }

.eyebrow,
.kicker,
.system-flow span,
.study-grid > article > span,
.insight-grid span,
.modality-grid > article > span,
.result-label,
.results-conclusion > span,
.shared-baseline > span {
  color: var(--case-accent);
  font: 600 .68rem/1.4 var(--font-mono);
  letter-spacing: .1em;
  text-transform: uppercase;
}

h1 { max-width: 900px; margin: 1rem 0 1.25rem; font-size: clamp(2.55rem, 5vw, 4.15rem); line-height: 1.03; letter-spacing: -.045em; }
h2 { margin: .65rem 0 0; font-size: clamp(1.65rem, 2.7vw, 2.25rem); line-height: 1.16; letter-spacing: -.03em; }
h3 { font-size: 1rem; line-height: 1.3; letter-spacing: -.01em; }
.lede { max-width: 720px; color: var(--case-muted); font-size: clamp(1rem, 1.5vw, 1.14rem); line-height: 1.7; }
.prose { color: var(--case-muted); font-size: .94rem; line-height: 1.78; }
.prose p + p { margin-top: 1rem; }
figcaption { color: var(--case-muted); font-size: .72rem; line-height: 1.5; }

.hero { padding: 5rem 0 4.5rem; }
.hero__copy { max-width: 930px; }
.chips { display: flex; flex-wrap: wrap; margin-top: 2.25rem; border-top: 1px solid var(--case-line); border-bottom: 1px solid var(--case-line); }
.chips span { padding: .72rem 1rem .72rem 0; margin-right: 1rem; color: var(--case-muted); font: 500 .7rem/1.4 var(--font-mono); }
.chips span + span::before { content: ""; display: inline-block; width: 1px; height: .8rem; margin-right: 1rem; vertical-align: -.1rem; background: var(--case-line); }
.hero__visual { margin: 3.5rem 0 0; border: 1px solid var(--case-line); }
.hero__visual img { width: 100%; max-height: 760px; display: block; object-fit: cover; }
.hero__visual figcaption { padding: .75rem 0 0; }

.two-column,
.implementation,
.design-language,
.study,
.participant-insights,
.principles,
.system-section,
.multimodal-section,
.demo-section,
.results-section,
.analysis,
.limitation {
  padding-block: 4.5rem;
  border-top: 1px solid var(--case-line);
}

.two-column,
.study,
.participant-insights,
.principles,
.system-grid,
.demo-grid,
.analysis__inner,
.limitation__inner {
  display: grid;
  grid-template-columns: minmax(230px, 4fr) minmax(0, 8fr);
  gap: clamp(3rem, 7vw, 7rem);
  align-items: start;
}

.section-intro { max-width: 780px; }
.section-intro .prose,
.system-grid > div > .prose,
.study > div > .prose,
.demo-grid > div > .prose { margin-top: 1rem; }

.metrics-band { border-top: 1px solid var(--case-line); border-bottom: 1px solid var(--case-line); }
.metric-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.metric-grid div { min-height: 104px; padding: 1.25rem 1.5rem 1.25rem 0; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid var(--case-line); }
.metric-grid div + div { padding-left: 1.5rem; }
.metric-grid div:last-child { border-right: 0; }
.metric-grid strong { font-size: clamp(1.3rem, 2.3vw, 1.85rem); font-weight: 600; letter-spacing: -.035em; }
.metric-grid span { color: var(--case-muted); font-size: .72rem; line-height: 1.45; }

.evidence-grid,
.design-crops { margin-top: 3rem; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }
.evidence-grid figure,
.design-crop,
.video-frame { margin: 0; }
.evidence-grid img { width: 100%; aspect-ratio: 4/5; display: block; object-fit: cover; border: 1px solid var(--case-line); }
.evidence-grid figcaption,
.design-crop figcaption,
.video-frame figcaption { padding-top: .75rem; }
.evidence-grid strong { color: var(--case-text); }

.system-section,
.multimodal-section,
.demo-section,
.results-section,
.analysis,
.limitation { background: var(--case-surface); }
.system-flow { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--case-line); border-bottom: 1px solid var(--case-line); }
.system-flow article { padding: 1.15rem; display: flex; flex-direction: column; border-right: 1px solid var(--case-line); }
.system-flow article:nth-of-type(4) { border-right: 0; }
.system-flow strong { margin: 1.25rem 0 .7rem; font-size: .92rem; }
.system-flow p { color: var(--case-muted); font-size: .76rem; line-height: 1.62; }
.system-flow i { display: none; }

.design-crop { min-height: 380px; position: relative; overflow: hidden; border: 1px solid var(--case-line); background: var(--case-surface); }
.design-crop > svg,
.design-crop > img { width: 100%; height: 380px; display: block; object-fit: cover; }
.design-crop figcaption { padding-inline: .75rem; padding-bottom: .75rem; }

.modality-grid { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 3rem; border-top: 1px solid var(--case-line); border-bottom: 1px solid var(--case-line); }
.modality-grid article { padding: 1.2rem; display: flex; flex-direction: column; border-right: 1px solid var(--case-line); }
.modality-grid article:last-child { border-right: 0; }
.modality-grid strong { margin: 1.25rem 0 .65rem; font-size: .92rem; }
.modality-grid p { color: var(--case-muted); font-size: .8rem; line-height: 1.65; }
.modality-grid small { margin-top: auto; padding-top: 1.25rem; color: var(--case-muted); font: 500 .66rem/1.45 var(--font-mono); }
.scope-note { margin: 1.25rem 0 0; color: var(--case-muted); font-size: .78rem; line-height: 1.7; }
.scope-note strong { color: var(--case-text); }

.principle-list { margin: 0; padding: 0; list-style: none; }
.principle-list li { padding: 1rem 0; display: grid; grid-template-columns: 2.5rem 1fr; gap: 1rem; border-top: 1px solid var(--case-line); }
.principle-list span { color: var(--case-accent); font: 600 .68rem var(--font-mono); }
.principle-list p { margin: 0; color: var(--case-muted); font-size: .9rem; line-height: 1.7; }
.principle-list strong { color: var(--case-text); }

.video-frame video { width: 100%; max-height: 650px; display: block; border: 1px solid var(--case-line); background: #050505; }
.video-frame video::cue { font-size: 70%; background: rgba(0,0,0,.82); color: #fff; }

.shared-baseline { margin-bottom: 1.5rem; padding: 1rem 0; border-top: 1px solid var(--case-line); border-bottom: 1px solid var(--case-line); }
.shared-baseline p { margin: .5rem 0 0; color: var(--case-muted); font-size: .78rem; line-height: 1.6; }
.study-grid { display: grid; grid-template-columns: 1fr auto 1fr; align-items: stretch; }
.study-grid article { padding: 1.2rem 0; border-top: 1px solid var(--case-line); border-bottom: 1px solid var(--case-line); }
.study-grid article:last-child { padding-left: 1.5rem; }
.study-grid h3 { margin: 2rem 0 .7rem; }
.study-grid p,
.insight-grid p { color: var(--case-muted); font-size: .82rem; line-height: 1.68; }
.comparison-mark { align-self: center; padding-inline: 1.5rem; color: var(--case-muted); font: 600 .68rem var(--font-mono); text-transform: uppercase; }
.evaluation-line { margin: 1rem 0 0; color: var(--case-muted); font-size: .78rem; line-height: 1.65; }
.evaluation-line strong { color: var(--case-text); }
.study-timeline { display: grid; grid-template-columns: repeat(5, 1fr); margin: 2rem 0 0; padding: 0; list-style: none; border-top: 1px solid var(--case-line); }
.study-timeline li { padding: 1rem .75rem; border-right: 1px solid var(--case-line); color: var(--case-muted); font-size: .72rem; line-height: 1.45; }
.study-timeline li:last-child { border-right: 0; }
.study-timeline span { display: block; margin-bottom: .35rem; color: var(--case-accent); font: 600 .64rem var(--font-mono); text-transform: uppercase; }

.result-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 3rem; border-top: 1px solid var(--case-line); border-bottom: 1px solid var(--case-line); }
.result-grid article { padding: 1.25rem; border-right: 1px solid var(--case-line); }
.result-grid article:last-child { border-right: 0; }
.result-grid strong { display: block; margin: 1.7rem 0 .7rem; font-size: clamp(1.45rem, 2.5vw, 2rem); font-weight: 600; letter-spacing: -.035em; }
.result-grid p { color: var(--case-muted); font-size: .8rem; line-height: 1.65; }
.result-grid small { display: block; margin-top: 1.25rem; color: var(--case-muted); font: 500 .66rem/1.45 var(--font-mono); }
.results-boundary { margin: 1.5rem 0 0; padding-top: 1.25rem; border-top: 1px solid var(--case-line); color: var(--case-muted); font-size: .88rem; line-height: 1.7; }
.results-boundary strong { color: var(--case-text); }
.results-conclusion { margin-top: 2rem; padding: 1.25rem 0; border-top: 1px solid var(--case-accent); border-bottom: 1px solid var(--case-line); }
.results-conclusion p { margin: .75rem 0 0; font-size: .95rem; line-height: 1.7; }

.insight-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--case-line); border-bottom: 1px solid var(--case-line); }
.insight-grid article { padding: 1.25rem; border-right: 1px solid var(--case-line); }
.insight-grid article:last-child { border-right: 0; }
.insight-grid p { margin-top: 1.25rem; }
.analysis-list p,
.limitation-list p { margin: 0; padding: 1rem 0; border-top: 1px solid var(--case-line); color: var(--case-muted); font-size: .88rem; line-height: 1.7; }
.analysis-list p { display: grid; grid-template-columns: 8rem 1fr; gap: 1rem; }
.analysis-list span { color: var(--case-text); font: 600 .68rem/1.5 var(--font-mono); letter-spacing: .08em; text-transform: uppercase; }
.limitation-list strong { color: var(--case-text); }

.disclosure { padding-block: 2.25rem; border-top: 1px solid var(--case-line); background: var(--case-bg); }
.disclosure__inner { display: grid; grid-template-columns: 4fr 8fr; gap: clamp(3rem, 7vw, 7rem); }
.disclosure strong { font-size: .82rem; }
.disclosure p { color: var(--case-muted); font-size: .82rem; line-height: 1.7; }

.footer { padding-block: 3rem; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid var(--case-line); }
.footer > p { color: var(--case-muted); font-size: .78rem; }
.footer > a:not(.back-link) { font-size: clamp(1.15rem, 2.5vw, 1.8rem); font-weight: 600; letter-spacing: -.025em; }
.footer .back-link { grid-column: 2; }

@media (max-width: 900px) {
  .shell, .topbar { width: min(100% - 2rem, 1180px); }
  .topbar { min-height: 64px; }
  .back-link { font-size: 0; }
  .back-link span { font-size: 1rem; }
  .hero { padding: 3.5rem 0 3rem; }
  .hero__visual { margin-top: 2.5rem; }
  .two-column, .study, .participant-insights, .principles, .system-grid, .demo-grid, .analysis__inner, .limitation__inner { grid-template-columns: 1fr; gap: 2.5rem; }
  .two-column, .implementation, .design-language, .study, .participant-insights, .principles, .system-section, .multimodal-section, .demo-section, .results-section, .analysis, .limitation { padding-block: 3rem; }
  .metric-grid { grid-template-columns: 1fr 1fr; }
  .metric-grid div:nth-child(2) { border-right: 0; }
  .metric-grid div:nth-child(n+3) { border-top: 1px solid var(--case-line); }
  .system-flow, .modality-grid, .result-grid { grid-template-columns: 1fr 1fr; }
  .system-flow article:nth-of-type(2), .modality-grid article:nth-child(2), .result-grid article:nth-child(2) { border-right: 0; }
  .system-flow article:nth-of-type(n+3), .modality-grid article:nth-child(n+3), .result-grid article:nth-child(3) { border-top: 1px solid var(--case-line); }
  .study-timeline { grid-template-columns: 1fr; }
  .study-timeline li { border-right: 0; border-bottom: 1px solid var(--case-line); }
  .study-timeline li:last-child { border-bottom: 0; }
  .disclosure__inner, .footer { grid-template-columns: 1fr; gap: 1rem; }
  .footer .back-link { grid-column: auto; font-size: .78rem; }
  .footer .back-link span { font-size: inherit; }
}

@media (max-width: 620px) {
  h1 { font-size: clamp(2.15rem, 12vw, 3rem); }
  .chips span { width: 50%; margin: 0; padding-right: .5rem; }
  .chips span + span::before { display: none; }
  .chips span:nth-child(even) { padding-left: .75rem; border-left: 1px solid var(--case-line); }
  .metric-grid, .evidence-grid, .design-crops, .system-flow, .modality-grid, .result-grid, .insight-grid, .study-grid { grid-template-columns: 1fr; }
  .metric-grid div { min-height: 96px; padding: 1rem 0; border-right: 0; border-top: 1px solid var(--case-line); }
  .metric-grid div:first-child { border-top: 0; }
  .metric-grid div + div { padding-left: 0; }
  .system-flow article, .modality-grid article, .result-grid article, .insight-grid article { min-height: auto; border-right: 0; border-top: 1px solid var(--case-line); }
  .system-flow article:first-child, .modality-grid article:first-child, .result-grid article:first-child, .insight-grid article:first-child { border-top: 0; }
  .design-crop, .design-crop > svg, .design-crop > img { min-height: 0; height: 300px; }
  .study-grid article:last-child { padding-left: 0; }
  .comparison-mark { padding: .75rem 0; text-align: center; }
  .analysis-list p { grid-template-columns: 1fr; gap: .35rem; }
}
</style>
