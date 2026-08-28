<template>
  <main class="case-study" :style="{ '--accent': project.accent }">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#prototypes`"><span aria-hidden="true">&larr;</span> Back to selected projects</a>
    </header>

    <article>
      <section class="hero shell">
        <p class="eyebrow">{{ project.eyebrow }}</p>
        <h1>{{ project.title }}</h1>
        <p class="lede">{{ project.lede }}</p>
        <div class="chips"><span v-for="chip in project.chips" :key="chip">{{ chip }}</span></div>
        <ol class="hero-flow" aria-label="Project evidence flow">
          <li v-for="(step, index) in project.process" :key="step"><span>{{ String(index + 1).padStart(2, '0') }}</span><strong>{{ step }}</strong></li>
        </ol>
      </section>

      <section class="timeline-band">
        <div class="shell timeline">
          <article v-for="entry in project.timeline" :key="entry.date"><strong>{{ entry.date }}</strong><div><span>{{ entry.label }}</span><p>{{ entry.text }}</p></div></article>
        </div>
      </section>

      <section class="shell framing">
        <div><p class="kicker">Project question</p><h2>{{ project.question }}</h2></div>
        <div class="prose"><p v-for="paragraph in project.overview" :key="paragraph">{{ paragraph }}</p><aside><strong>My role</strong><p>{{ project.role }}</p></aside></div>
      </section>

      <section class="metric-band"><div class="shell metrics"><article v-for="metric in project.metrics" :key="metric.label"><strong>{{ metric.value }}</strong><span>{{ metric.label }}</span></article></div></section>

      <section class="shell methods">
        <p class="kicker">Method and implementation</p><h2>Evidence first, then translation</h2>
        <ol class="method-grid"><li v-for="(method, index) in project.methods" :key="method.title"><span>{{ String(index + 1).padStart(2, '0') }}</span><h3>{{ method.title }}</h3><p>{{ method.text }}</p></li></ol>
      </section>

      <section class="evidence-section">
        <div class="shell"><p class="kicker">Selected evidence</p><h2>Source material, separated from the portfolio layout</h2>
          <div class="evidence-grid"><figure v-for="item in project.evidence" :key="item.src" :class="{ wide: item.wide }"><img :src="item.src" :alt="item.alt" loading="lazy" /><figcaption><strong>{{ item.title }}</strong><span>{{ item.caption }}</span></figcaption></figure></div>
        </div>
      </section>

      <section class="shell pipeline-section">
        <div><p class="kicker">Transformation logic</p><h2>A traceable path from observation to output</h2><p class="prose">The diagram below is rebuilt as HTML so the reasoning remains readable without relying on a portfolio board.</p></div>
        <ol class="pipeline"><li v-for="(stage, index) in project.pipeline" :key="stage.title"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><h3>{{ stage.title }}</h3><p>{{ stage.text }}</p></div></li></ol>
      </section>

      <section v-if="project.comparison" class="comparison-section"><div class="shell comparison-inner"><div><p class="kicker">Recorded cabin-noise comparison</p><h2>Three test speeds, retained as measurement evidence</h2><p>Values below reproduce the documented comparison and are not inferred from the visualization.</p></div><div class="comparison-table"><div class="row head"><span>Condition</span><span>Test tire</span><span>Reference tire</span></div><div v-for="row in project.comparison" :key="row.condition" class="row"><strong>{{ row.condition }}</strong><span>{{ row.test }}</span><span>{{ row.reference }}</span></div></div></div></section>

      <section class="translation-section"><div class="shell translation"><div><p class="kicker">Research value</p><h2>What this case demonstrates</h2></div><p>{{ project.translation }}</p></div></section>

      <section class="shell boundaries">
        <div><p class="kicker">Interpretation boundary</p><h2>What the evidence does—and does not—support</h2></div>
        <ul><li v-for="limit in project.limitations" :key="limit">{{ limit }}</li></ul>
      </section>

      <section class="credits-section"><div class="shell"><p class="kicker">Contribution record</p><h2>Authorship and collaboration</h2><div class="credits"><article v-for="credit in project.credits" :key="credit.party"><strong>{{ credit.party }}</strong><p>{{ credit.contribution }}</p></article></div></div></section>
    </article>

    <footer class="footer shell"><p>Interested in this work?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
defineProps({ project: { type: Object, required: true } })
const homeUrl = import.meta.env.BASE_URL
</script>

<style lang="scss" scoped>
.case-study { min-height: 100vh; color: #f7f7fb; background: radial-gradient(circle at 82% 5%, color-mix(in srgb, var(--accent) 19%, transparent), transparent 33rem), #090a0e; }
.shell, .topbar { width: min(1160px, calc(100% - 3rem)); margin: 0 auto; }
.topbar { min-height: 80px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,.1); }
.brand { color: #fff; font-weight: 750; letter-spacing: -.02em; }.back-link { color: #afb4bf; font-size: .9rem; }.back-link:hover { color: #fff; }
.hero { padding: 7rem 0 5rem; }.eyebrow,.kicker { color: var(--accent); font-size: .75rem; font-weight: 750; letter-spacing: .13em; text-transform: uppercase; }
h1 { max-width: 1080px; margin: 1.1rem 0 1.5rem; font-size: clamp(2.8rem, 6vw, 5.7rem); line-height: .98; letter-spacing: -.057em; }
h2 { margin: .7rem 0 0; font-size: clamp(1.8rem, 3.7vw, 3.15rem); line-height: 1.08; letter-spacing: -.04em; }
.lede { max-width: 820px; color: #bec2cc; font-size: clamp(1.05rem, 2vw, 1.35rem); line-height: 1.75; }
.chips { display: flex; flex-wrap: wrap; gap: .6rem; margin: 2rem 0 3.6rem; }.chips span { padding: .55rem .85rem; border: 1px solid color-mix(in srgb, var(--accent) 42%, transparent); border-radius: 999px; color: #e8e8ec; font-size: .78rem; }
.hero-flow { list-style: none; display: grid; grid-template-columns: repeat(5,1fr); padding: 0; border-top: 1px solid rgba(255,255,255,.14); }.hero-flow li { min-height: 130px; padding: 1.25rem 1rem 1rem 0; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid rgba(255,255,255,.09); }.hero-flow span,.method-grid li>span,.pipeline>li>span { color: var(--accent); font: 650 .74rem ui-monospace,SFMono-Regular,monospace; }.hero-flow strong { max-width: 130px; font-size: .92rem; line-height: 1.35; }
.timeline-band,.metric-band,.comparison-section,.credits-section { background: #12141a; }.timeline { padding: 2.8rem 0; display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; }.timeline article { padding: 1.4rem; display: grid; grid-template-columns: 110px 1fr; gap: 1.25rem; border-left: 2px solid var(--accent); background: #181b22; }.timeline article>strong { font-size: 1.2rem; }.timeline span { color: var(--accent); font-size: .72rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }.timeline p { margin-top: .55rem; color: #aab0bb; font-size: .88rem; line-height: 1.65; }
.framing,.pipeline-section,.boundaries,.translation { padding: 6rem 0; display: grid; grid-template-columns: .9fr 1.1fr; gap: clamp(3rem,8vw,7rem); }.prose { color: #b4b9c3; line-height: 1.82; }.prose p+p { margin-top: 1.25rem; }.prose aside { margin-top: 2rem; padding: 1.3rem 1.5rem; border-left: 2px solid var(--accent); background: rgba(255,255,255,.04); }.prose aside strong { color: #fff; }.prose aside p { margin-top: .55rem; }
.metric-band { padding: 2.2rem 0; }.metrics { display: grid; grid-template-columns: repeat(4,1fr); }.metrics article { min-height: 130px; padding: 1.2rem; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid rgba(255,255,255,.1); }.metrics strong { color: var(--accent); font-size: clamp(2rem,4vw,3.3rem); letter-spacing: -.06em; }.metrics span { color: #9da3ae; font-size: .78rem; }
.methods { padding: 6rem 0; }.method-grid { list-style: none; margin-top: 3rem; padding: 0; display: grid; grid-template-columns: repeat(5,1fr); }.method-grid li { min-height: 260px; padding: 1.25rem; border-top: 1px solid color-mix(in srgb,var(--accent) 65%,transparent); border-right: 1px solid rgba(255,255,255,.08); background: rgba(255,255,255,.025); }.method-grid h3 { margin: 3.4rem 0 .7rem; font-size: .98rem; }.method-grid p { color: #969ca8; font-size: .84rem; line-height: 1.68; }
.evidence-section { padding: 6rem 0; background: #eceef1; color: #171920; }.evidence-section .kicker { color: color-mix(in srgb,var(--accent) 72%,#28303b); }.evidence-grid { margin-top: 3rem; display: grid; grid-template-columns: repeat(2,1fr); gap: 1.1rem; }.evidence-grid figure { overflow: hidden; border-radius: .9rem; background: #fff; box-shadow: 0 12px 35px rgba(12,15,20,.09); }.evidence-grid figure.wide { grid-column: 1/-1; }.evidence-grid img { width: 100%; max-height: 620px; display: block; object-fit: contain; background: #090a0e; }.evidence-grid figcaption { padding: 1rem 1.15rem 1.2rem; display: grid; gap: .4rem; }.evidence-grid figcaption strong { font-size: .9rem; }.evidence-grid figcaption span { color: #666d78; font-size: .8rem; line-height: 1.55; }
.pipeline-section { align-items: start; }.pipeline { list-style: none; margin: 0; padding: 0; }.pipeline li { padding: 1.25rem 0; display: grid; grid-template-columns: 48px 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.12); }.pipeline h3 { font-size: .95rem; }.pipeline p { margin-top: .35rem; color: #969ca7; font-size: .85rem; line-height: 1.6; }
.comparison-inner { padding: 5rem 0; display: grid; grid-template-columns: .85fr 1.15fr; gap: 4rem; }.comparison-inner>div>p:last-child { margin-top: 1rem; color: #9da3ae; line-height: 1.65; }.comparison-table { border-top: 1px solid rgba(255,255,255,.15); }.comparison-table .row { padding: 1.1rem 0; display: grid; grid-template-columns: 1fr 1fr 1fr; border-bottom: 1px solid rgba(255,255,255,.1); }.comparison-table .head { color: var(--accent); font-size: .72rem; font-weight: 700; text-transform: uppercase; }.comparison-table .row span { color: #b9bec8; }
.translation-section { background: var(--accent); color: #101217; }.translation .kicker { color: #101217; }.translation>p { font-size: 1.05rem; line-height: 1.85; }
.boundaries ul { list-style: none; margin: 0; padding: 0; }.boundaries li { padding: 1.2rem 0 1.2rem 1.5rem; position: relative; border-top: 1px solid rgba(255,255,255,.12); color: #aeb4be; line-height: 1.7; }.boundaries li::before { content: '—'; position: absolute; left: 0; color: var(--accent); }
.credits-section { padding: 5.5rem 0; }.credits { margin-top: 2.5rem; display: grid; grid-template-columns: repeat(2,1fr); gap: 1rem; }.credits article { padding: 1.35rem; background: #1a1d24; }.credits p { margin-top: .55rem; color: #9ea4af; font-size: .86rem; line-height: 1.65; }
.footer { padding: 4rem 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.1); }.footer p { color: #8f95a0; }.footer>a:not(.back-link) { color: #fff; font-size: clamp(1.35rem,3vw,2.35rem); font-weight: 700; }.footer .back-link { grid-column: 2; }
@media(max-width:800px){.shell,.topbar{width:min(100% - 2rem,1160px)}.topbar{min-height:68px}.hero{padding:4.5rem 0 3.5rem}.hero-flow,.method-grid,.metrics{grid-template-columns:1fr 1fr}.hero-flow li:last-child,.method-grid li:last-child{grid-column:1/-1}.timeline,.framing,.pipeline-section,.boundaries,.translation,.comparison-inner{grid-template-columns:1fr;gap:2rem}.timeline article{grid-template-columns:90px 1fr}.framing,.pipeline-section,.boundaries,.translation,.methods,.evidence-section{padding:4rem 0}.evidence-grid,.credits{grid-template-columns:1fr}.evidence-grid figure.wide{grid-column:auto}.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}
@media(max-width:520px){.hero-flow,.method-grid,.metrics{grid-template-columns:1fr}.hero-flow li:last-child,.method-grid li:last-child{grid-column:auto}.timeline article{grid-template-columns:1fr}.comparison-table .row{grid-template-columns:1.1fr .9fr .9fr;font-size:.8rem}}
</style>
