<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#prototypes`"><span aria-hidden="true">&larr;</span> Back to prototypes</a>
    </header>

    <article>
      <section class="hero shell">
        <div class="hero__copy">
          <p class="eyebrow">Independent Technical Prototype · 2025–2026</p>
          <h1>Gesture-to-Motion Mapping for an Articulated Robotic Arm</h1>
          <p class="lede">A wearable flex-sensing interface that maps one finger’s continuous bending input into coordinated motion across two servo-actuated joints.</p>
          <div class="chips"><span>Flex sensor</span><span>Arduino UNO</span><span>Two-joint mapping</span><span>3D-printed mechanism</span></div>
        </div>
        <figure class="hero__visual"><img :src="asset('arm-front.jpg')" alt="Front view of the articulated robotic arm showing two servo-driven joints" /><figcaption>Functional physical prototype · front joint layout</figcaption></figure>
      </section>

      <section class="question">
        <div class="shell question__inner">
          <div><p class="kicker">Technical objective</p><h2>Translate a continuous body movement into coordinated mechanical articulation</h2></div>
          <div class="prose"><p>I designed the mechanical structure, fabricated the 3D-printed parts, assembled the electronics, and programmed the control logic. Rather than classifying a small set of symbolic gestures, the prototype preserves the continuous quality of finger bending and maps it directly to an articulated output.</p><p>The project is presented as a functional technical prototype. It did not include a formal user study or comparative evaluation.</p></div>
        </div>
      </section>

      <section class="pipeline shell">
        <div class="section-intro"><p class="kicker">Implemented control pipeline</p><h2>One analog input, two differentiated joint outputs</h2><p class="prose">The final Arduino program uses a calibrated flex-sensor signal to drive both joints. Filtering stabilizes the input, while different output gains create a coordinated movement closer to the kinematic rhythm of a bending finger.</p></div>
        <div class="flow" aria-label="Flex sensor to two joint control pipeline">
          <article><span>01</span><strong>Flex sensor</strong><p>Analog input on A0</p></article><i>→</i>
          <article><span>02</span><strong>Calibration</strong><p>Raw range 520–760</p></article><i>→</i>
          <article><span>03</span><strong>Smoothing</strong><p>Exponential filter α = 0.15</p></article><i>→</i>
          <article><span>04</span><strong>Angle mapping</strong><p>Constrained to 0–95°</p></article>
        </div>
        <div class="branch">
          <div class="branch__source"><span>Mapped bend angle</span><strong>θ</strong></div>
          <svg viewBox="0 0 260 150" aria-hidden="true"><path d="M0 75 H90 C140 75 120 25 180 25 H260 M90 75 C140 75 120 125 180 125 H260" /></svg>
          <article><span>Base joint · D9</span><strong>1.00 × θ</strong><p>Uses the full mapped bending angle.</p></article>
          <article><span>Distal joint · D10</span><strong>0.75 × θ</strong><p>Moves through a smaller range for coordinated articulation.</p></article>
        </div>
      </section>

      <section class="demo-section">
        <div class="shell">
          <div class="section-intro"><p class="kicker">Real-time demonstration</p><h2>Finger bending and arm motion remain continuously coupled</h2></div>
          <div class="demo-grid">
            <figure><video controls muted playsinline preload="metadata" :poster="asset('flex-overview-poster.jpg')"><source :src="media('flex-mapping-overview.m4v')" type="video/mp4" /></video><figcaption><strong>System overview.</strong> Wearable input, Arduino control hardware, and two-joint arm responding in one frame.</figcaption></figure>
            <figure><video controls muted playsinline preload="metadata" :poster="asset('flex-closeup-poster.jpg')"><source :src="media('flex-mapping-closeup.m4v')" type="video/mp4" /></video><figcaption><strong>Input close-up.</strong> Continuous deformation of the finger-mounted flex sensor drives the articulated response.</figcaption></figure>
          </div>
        </div>
      </section>

      <section class="implementation shell">
        <div class="section-intro"><p class="kicker">Mechanical implementation</p><h2>A two-link structure built around compact servo joints</h2><p class="prose">The enclosure and links were modeled for 3D printing, with the servos placed at the two rotational joints. The open-frame geometry keeps the transmission and joint relationship visible, supporting rapid adjustment during control testing.</p></div>
        <div class="evidence-grid">
          <figure><img :src="asset('arm-side.jpg')" alt="Side view showing servo placement and the articulated arm links" /><figcaption>Side view · servo placement and link relationship</figcaption></figure>
          <figure><img :src="asset('arm-front.jpg')" alt="Front view showing the two joint axes of the robotic arm" /><figcaption>Front view · two articulated joint axes</figcaption></figure>
        </div>
      </section>

      <section class="logic">
        <div class="shell logic__inner">
          <div><p class="kicker">Code-derived behavior</p><h2>Stability and motion character were designed in software</h2></div>
          <div class="logic-list">
            <article><strong>Input stabilization</strong><p><code>filtered = 0.85 × previous + 0.15 × raw</code> reduces sensor jitter without converting the input into discrete states.</p></article>
            <article><strong>Safe range</strong><p>The calibrated signal is mapped to 0–95° and constrained before being sent to either joint.</p></article>
            <article><strong>Differential mapping</strong><p>The upper joint’s 0.75 gain prevents both links from rotating identically and produces a more finger-like compound bend.</p></article>
            <article><strong>Update loop</strong><p>A programmed 15 ms delay supports responsive motion while keeping serial debugging available.</p></article>
          </div>
        </div>
      </section>

      <section class="disclosure"><div class="shell disclosure__inner"><strong>Evidence boundary</strong><p>This page documents an independently developed functional prototype and its implemented code path. It does not claim gesture-recognition classification, autonomous motion planning, force feedback, or findings from a user study.</p></div></section>
    </article>

    <footer class="footer shell"><p>Interested in this work?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/gesture-arm/${filename}`
const media = (filename) => `${import.meta.env.BASE_URL}media/research/gesture-arm/${filename}`
</script>

<style lang="scss" scoped>
.case-study{--cyan:#73e7e2;--violet:#c7b8ff;--ink:#121017;min-height:100vh;color:#f8f7fb;background:radial-gradient(circle at 82% 3%,rgba(43,126,126,.2),transparent 34rem),#0b0a0e}.shell,.topbar{width:min(1120px,calc(100% - 3rem));margin:0 auto}.topbar{min-height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:700}.back-link{color:#aaa5b0;font-size:.9rem}.back-link:hover{color:white}.eyebrow,.kicker{color:var(--cyan);font-size:.72rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}h1{margin:1.15rem 0 1.4rem;font-size:clamp(2.6rem,5.8vw,5.25rem);line-height:1;letter-spacing:-.055em}h2{margin-top:.7rem;font-size:clamp(1.8rem,3.6vw,3.05rem);line-height:1.1;letter-spacing:-.04em}.lede{max-width:720px;color:#c3bec8;font-size:clamp(1.05rem,2vw,1.3rem);line-height:1.7}.prose{color:#aaa4af;line-height:1.8}.prose p+p{margin-top:1.1rem}.hero{padding:7rem 0 6rem;display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(2.5rem,7vw,6rem);align-items:center}.chips{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:2rem}.chips span{padding:.5rem .75rem;border:1px solid rgba(115,231,226,.28);border-radius:999px;color:#bffffc;font-size:.72rem}.hero__visual{height:570px;margin:0;position:relative;overflow:hidden;border-radius:1.2rem;background:#14121a}.hero__visual img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 42%}.hero__visual figcaption{position:absolute;right:1rem;bottom:1rem;padding:.45rem .65rem;border-radius:.45rem;background:rgba(11,10,14,.82);color:#e1dce5;font-size:.72rem}.question{padding:5.5rem 0;background:#ebe9f0;color:var(--ink)}.question__inner{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(3rem,8vw,7rem)}.question .kicker{color:#297c7a}.question .prose{color:#5f5964}.pipeline,.implementation{padding:6rem 0}.section-intro{max-width:850px}.section-intro .prose{margin-top:1.2rem}.flow{margin-top:3rem;display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;gap:.55rem;align-items:center}.flow article{min-height:170px;padding:1rem;display:flex;flex-direction:column;border-top:2px solid var(--cyan);background:#151319}.flow span{color:var(--cyan);font:600 .74rem var(--font-mono)}.flow strong{margin:2rem 0 .6rem}.flow p{color:#99929e;font-size:.78rem;line-height:1.5}.flow i{color:#706a75;font-style:normal}.branch{margin-top:1rem;padding:1.2rem;display:grid;grid-template-columns:.55fr .65fr 1fr 1fr;gap:1rem;align-items:center;border:1px solid rgba(255,255,255,.1);border-radius:1rem;background:#111015}.branch__source{display:flex;flex-direction:column;gap:.55rem}.branch__source span,.branch article span{color:#8f8994;font-size:.68rem;letter-spacing:.08em;text-transform:uppercase}.branch__source strong{font-size:2.4rem;color:var(--cyan)}.branch svg{width:100%;height:120px}.branch svg path{fill:none;stroke:#696371;stroke-width:2}.branch article{min-height:115px;padding:1rem;border-left:2px solid var(--violet);background:#17141c}.branch article strong{display:block;margin:.65rem 0;color:#ded7f4;font-size:1.35rem}.branch article p{color:#938d99;font-size:.75rem;line-height:1.5}.demo-section{padding:6rem 0;background:#ebe9f0;color:var(--ink)}.demo-section .kicker{color:#297c7a}.demo-grid{margin-top:3rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem}.demo-grid figure{margin:0;padding:.65rem;border-radius:1rem;background:#d8d4dd}.demo-grid video{width:100%;max-height:610px;display:block;border-radius:.65rem;background:#08070a}.demo-grid figcaption{padding:.8rem .35rem .3rem;color:#625c67;font-size:.76rem;line-height:1.55}.demo-grid figcaption strong{color:#2e2932}.evidence-grid{margin-top:3rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem}.evidence-grid figure{height:560px;margin:0;position:relative;overflow:hidden;border-radius:1rem;background:#151319}.evidence-grid img{width:100%;height:100%;display:block;object-fit:cover;object-position:center}.evidence-grid figcaption{position:absolute;left:.8rem;bottom:.8rem;padding:.45rem .6rem;border-radius:.4rem;background:rgba(11,10,14,.82);color:#e4dfe7;font-size:.72rem}.logic{padding:6rem 0;background:#17151b}.logic__inner{display:grid;grid-template-columns:.65fr 1.35fr;gap:clamp(3rem,7vw,6rem)}.logic-list article{padding:1.2rem 0;display:grid;grid-template-columns:9rem 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.logic-list strong{color:#d9d1ed}.logic-list p{color:#a6a0aa;line-height:1.65}.logic-list code{color:#bffffc;font-size:.82rem}.disclosure{padding:2.6rem 0;background:#111015}.disclosure__inner{display:grid;grid-template-columns:.4fr 1.6fr;gap:2rem}.disclosure strong{color:#d8d0ea}.disclosure p{color:#9d96a2;line-height:1.65}.footer{padding:4rem 0;display:grid;grid-template-columns:1fr 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.footer>p{color:#85808a}.footer>a:not(.back-link){font-size:clamp(1.3rem,3vw,2.3rem);font-weight:700;letter-spacing:-.04em}.footer .back-link{grid-column:2}
@media(max-width:900px){.shell,.topbar{width:min(100% - 2rem,1120px)}.topbar{min-height:68px}.hero,.question__inner,.logic__inner{grid-template-columns:1fr}.hero{padding:5rem 0 4rem}.hero__visual{height:470px}.question,.pipeline,.demo-section,.implementation,.logic{padding:4rem 0}.flow{grid-template-columns:1fr}.flow article{min-height:auto}.flow i{transform:rotate(90deg);text-align:center}.branch{grid-template-columns:1fr}.branch svg{height:70px;transform:rotate(90deg)}.demo-grid,.evidence-grid{grid-template-columns:1fr}.evidence-grid figure{height:460px}.logic-list article{grid-template-columns:1fr}.disclosure__inner,.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}
</style>
