<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#research-projects`"><span aria-hidden="true">&larr;</span> Back to research</a>
    </header>

    <article>
      <section class="hero shell">
        <div class="eyebrow">Intelligent-Cockpit UX Research · 2019</div>
        <h1>Cross-Brand Benchmarking for Intelligent-Cockpit Interface Guidelines</h1>
        <p class="lede">
          A Baidu collaboration that transformed heterogeneous evidence from 26 automotive brands into a
          systematic interface-analysis framework, an internal white paper, and actionable UI/UX guidelines.
        </p>
        <div class="chips"><span>Student Project Lead</span><span>26 brands</span><span>12,000-word synthesis</span><span>Presented at Baidu HQ</span></div>
        <div class="benchmark-visual" aria-label="Abstract visualization of the cross-brand comparison">
          <div class="matrix">
            <span v-for="n in 26" :key="n" :class="{ active: [2, 5, 9, 13, 18, 22, 25].includes(n) }"></span>
          </div>
          <div class="flow-arrow" aria-hidden="true">&rarr;</div>
          <div class="framework-card"><small>Synthesis framework</small><strong>Evidence → Pattern → Guideline</strong></div>
        </div>
      </section>

      <section class="shell two-column">
        <div><p class="kicker">Research question</p><h2>How can fragmented interface examples become defensible design guidance?</h2></div>
        <div class="prose">
          <p>
            Automotive interfaces vary by display format, information architecture, brand language, and interaction
            behavior. The challenge was not simply to collect examples, but to build a consistent comparison method
            that could reveal patterns across products and support design decisions.
          </p>
          <p>
            I led the student research work, organized the benchmark, developed the synthesis structure, and
            translated the findings into guidelines that could be communicated to both research and design audiences.
          </p>
        </div>
      </section>

      <section class="confidentiality">
        <div class="shell confidentiality__inner">
          <span class="lock" aria-hidden="true">NDA</span>
          <div><p class="kicker">Public disclosure boundary</p><h2>Method and contribution are public; client deliverables are not.</h2></div>
          <p>
            This page intentionally excludes the final white paper, proprietary interface screenshots, internal data,
            and client-specific recommendations. The visuals below are abstract reconstructions of the research process.
          </p>
        </div>
      </section>

      <section class="shell approach">
        <p class="kicker">Research approach</p>
        <h2>A repeatable path from collection to synthesis</h2>
        <ol class="steps">
          <li><span>01</span><div><h3>Define a common unit of comparison</h3><p>Structured the benchmark so products with different display formats could be examined using shared criteria.</p></div></li>
          <li><span>02</span><div><h3>Capture interface evidence</h3><p>Documented representative systems and interaction states across 26 automotive brands.</p></div></li>
          <li><span>03</span><div><h3>Code recurring design patterns</h3><p>Compared evidence across information architecture, layout, typography, color, and icon behavior.</p></div></li>
          <li><span>04</span><div><h3>Translate patterns into guidelines</h3><p>Synthesized findings into a 12,000-word internal white paper and presented the work at Baidu headquarters.</p></div></li>
        </ol>
      </section>

      <section class="lenses">
        <div class="shell">
          <p class="kicker">Analysis framework</p>
          <h2>Five lenses made unlike systems comparable</h2>
          <div class="lens-grid">
            <article><span>01</span><h3>Information architecture</h3><p>Depth, grouping, navigation, and the relationship between primary and secondary functions.</p></article>
            <article><span>02</span><h3>Layout & hierarchy</h3><p>Spatial organization across landscape, portrait, and widescreen display configurations.</p></article>
            <article><span>03</span><h3>Typography</h3><p>Text hierarchy, size, density, spacing, and the legibility of instructional and status information.</p></article>
            <article><span>04</span><h3>Color & state</h3><p>Brand color, selection, activation, feedback, and day–night presentation logic.</p></article>
            <article><span>05</span><h3>Icon behavior</h3><p>Icon scale, spacing, control grouping, state changes, and consistency across interface levels.</p></article>
          </div>
        </div>
      </section>

      <section class="shell outcomes">
        <div><p class="kicker">Research outcomes</p><h2>Evidence at scale, converted into a usable design language</h2></div>
        <div class="outcome-grid">
          <div><strong>26</strong><span>automotive brands benchmarked</span></div>
          <div><strong>12,000</strong><span>words in the internal white paper</span></div>
          <div><strong>5</strong><span>core public analysis lenses</span></div>
        </div>
        <div class="impact">
          <p>The project was presented at Baidu headquarters.</p>
          <p>The work was recognized by Apollo Lab for its methodological rigor.</p>
          <p>The framework turned a large collection of examples into traceable design guidance rather than a visual trend report.</p>
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
const homeUrl = import.meta.env.BASE_URL
</script>

<style lang="scss" scoped>
.case-study {
  --accent: #8bb8ff;
  --accent-soft: #c9ddff;
  min-height: 100vh;
  color: #f7f7fb;
  background: radial-gradient(circle at 82% 4%, rgba(42, 104, 190, .28), transparent 32rem), #090b10;
}
.shell, .topbar { width: min(1120px, calc(100% - 3rem)); margin: 0 auto; }
.topbar { min-height: 80px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,.1); }
.brand { font-weight: 700; letter-spacing: -.02em; }
.back-link { color: #b8bec9; font-size: .9rem; }
.back-link:hover { color: white; }
.hero { padding: 7rem 0 5rem; }
.eyebrow, .kicker { color: var(--accent-soft); font-size: .75rem; font-weight: 700; letter-spacing: .13em; text-transform: uppercase; }
h1 { max-width: 1020px; margin: 1.2rem 0 1.5rem; font-size: clamp(2.7rem, 6.2vw, 5.6rem); line-height: 1; letter-spacing: -.055em; }
h2 { margin-top: .75rem; font-size: clamp(1.8rem, 3.5vw, 3rem); line-height: 1.1; letter-spacing: -.035em; }
.lede { max-width: 790px; color: #bec3cd; font-size: clamp(1.08rem, 2vw, 1.35rem); line-height: 1.7; }
.chips { display: flex; flex-wrap: wrap; gap: .6rem; margin: 2.1rem 0 3rem; }
.chips span { padding: .55rem .85rem; border: 1px solid rgba(139,184,255,.35); border-radius: 999px; color: #dbe9ff; font-size: .78rem; }
.benchmark-visual { min-height: 390px; padding: clamp(1.5rem, 5vw, 4rem); display: grid; grid-template-columns: 1.4fr auto .8fr; align-items: center; gap: 2rem; border: 1px solid rgba(255,255,255,.1); border-radius: 1.25rem; background: linear-gradient(135deg, rgba(26,29,39,.96), rgba(26,42,66,.8)); }
.matrix { display: grid; grid-template-columns: repeat(7, 1fr); gap: .65rem; }
.matrix span { aspect-ratio: 1.35; border: 1px solid rgba(255,255,255,.15); border-radius: .45rem; background: rgba(255,255,255,.04); }
.matrix span.active { border: 0; background: linear-gradient(135deg, #a78bfa, #60a5fa); }
.flow-arrow { color: var(--accent); font-size: 2.5rem; }
.framework-card { padding: 1.5rem; border-radius: 1rem; background: #e8f1ff; color: #142238; }
.framework-card small { display: block; margin-bottom: .75rem; color: #41618b; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }
.framework-card strong { font-size: 1.35rem; line-height: 1.35; }
.two-column, .outcomes { padding: 6rem 0; display: grid; grid-template-columns: .85fr 1.15fr; gap: clamp(3rem, 8vw, 7rem); border-top: 1px solid rgba(255,255,255,.1); }
.prose { color: #b6bbc5; line-height: 1.8; }
.prose p + p { margin-top: 1.25rem; }
.confidentiality { padding: 5rem 0; background: #e9f2ff; color: #142238; }
.confidentiality .kicker { color: #285f9c; }
.confidentiality__inner { display: grid; grid-template-columns: auto 1.15fr .85fr; align-items: start; gap: 2.5rem; }
.confidentiality__inner > p { color: #4c5e73; line-height: 1.75; }
.lock { width: 58px; height: 58px; display: grid; place-items: center; border-radius: 50%; background: #18375e; color: white; font-size: .75rem; font-weight: 800; }
.approach { padding: 6rem 0; }
.steps { margin-top: 3rem; list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; }
.steps li { min-height: 170px; padding: 1.5rem; display: flex; gap: 1.25rem; border: 1px solid rgba(255,255,255,.09); border-radius: 1rem; background: #141820; }
.steps li > span, .lens-grid article > span { color: var(--accent); font: 600 .8rem var(--font-mono); }
.steps h3, .lens-grid h3 { margin-bottom: .55rem; font-size: 1rem; }
.steps p, .lens-grid p { color: #969da8; font-size: .87rem; line-height: 1.65; }
.lenses { padding: 6rem 0; background: #11141b; }
.lens-grid { margin-top: 3rem; display: grid; grid-template-columns: repeat(5, 1fr); }
.lens-grid article { min-height: 235px; padding: 1.4rem; border-top: 1px solid #526173; border-right: 1px solid rgba(255,255,255,.09); }
.lens-grid h3 { margin-top: 3rem; }
.outcomes { grid-template-columns: .8fr 1.2fr; }
.outcome-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: .75rem; }
.outcome-grid div { min-height: 150px; padding: 1.2rem; display: flex; flex-direction: column; justify-content: space-between; border-radius: 1rem; background: #e8f1ff; color: #142238; }
.outcome-grid strong { font-size: clamp(2rem, 4vw, 3.5rem); letter-spacing: -.06em; }
.outcome-grid span { color: #50637a; font-size: .8rem; }
.impact { grid-column: 2; display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.impact p { padding-top: 1rem; border-top: 1px solid rgba(255,255,255,.12); color: #b6bbc5; line-height: 1.65; }
.footer { padding: 4rem 0; display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; border-top: 1px solid rgba(255,255,255,.1); }
.footer > p { color: #8f96a2; }
.footer > a:not(.back-link) { font-size: clamp(1.4rem, 3vw, 2.4rem); font-weight: 700; letter-spacing: -.04em; }
.footer .back-link { grid-column: 2; }
@media (max-width: 800px) {
  .shell, .topbar { width: min(100% - 2rem, 1120px); }
  .topbar { min-height: 68px; }
  .hero { padding: 4.5rem 0 3.5rem; }
  .benchmark-visual { min-height: auto; grid-template-columns: 1fr; }
  .flow-arrow { transform: rotate(90deg); text-align: center; }
  .two-column, .outcomes, .confidentiality__inner { padding: 4rem 0; grid-template-columns: 1fr; gap: 2rem; }
  .confidentiality { padding: 0; }
  .approach, .lenses { padding: 4rem 0; }
  .steps, .lens-grid, .outcome-grid, .impact { grid-template-columns: 1fr; }
  .lens-grid article { min-height: auto; border-right: 0; }
  .lens-grid h3 { margin-top: 1.25rem; }
  .impact { grid-column: auto; }
  .footer { grid-template-columns: 1fr; }
  .footer .back-link { grid-column: auto; }
}
</style>
