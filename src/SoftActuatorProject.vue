<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#prototypes`"><span aria-hidden="true">&larr;</span> Back to prototypes</a>
    </header>

    <article>
      <section class="hero shell">
        <div class="hero__copy">
          <p class="eyebrow">Independent Prototype · Soft Robotics · 2025</p>
          <h1>Pneumatic Soft Actuator Prototyping</h1>
          <p class="lede">A hands-on exploration of how bio-inspired geometry, silicone fabrication, and electro-pneumatic control shape the motion and reliability of soft actuators.</p>
          <div class="chips"><span>Three morphologies</span><span>Ecoflex casting</span><span>Arduino control</span><span>Touch-triggered actuation</span></div>
        </div>
        <figure class="hero__visual">
          <img :src="asset('system-integration.jpg')" alt="Physical soft pneumatic actuators and the integrated prototype system" />
          <figcaption>Fabricated actuators and integrated physical prototype</figcaption>
        </figure>
      </section>

      <section class="shell two-column">
        <div><p class="kicker">Engineering question</p><h2>How does actuator morphology change movement, fabrication demands, and interaction possibilities?</h2></div>
        <div class="prose"><p>I explored three bio-inspired pneumatic structures derived from the movement logic of an elephant trunk, an octopus tentacle, and an earthworm. The work treated form, material behavior, fabrication, and control as a connected prototyping problem.</p><p>The current evidence supports comparative prototyping and qualitative validation. No claims about quantified curvature, response time, pressure, or performance are made on this page.</p></div>
      </section>

      <section class="morphology-band">
        <div class="shell">
          <div class="section-intro"><p class="kicker">Morphology exploration</p><h2>Three structures, three motion tendencies</h2></div>
          <div class="morphology-grid">
            <article><span>01</span><h3>Segmented bellows</h3><p>A repeated chamber structure explored multi-axis bending inspired by the flexibility of an elephant trunk.</p></article>
            <article><span>02</span><h3>Continuous tentacle</h3><p>A tapered continuous structure explored curling and coiling motion, and was selected for further integration.</p></article>
            <article><span>03</span><h3>Central expansion</h3><p>An expanding chamber arrangement explored axial extension and blooming movement inspired by an earthworm.</p></article>
          </div>
          <figure class="evidence evidence--wide"><img :src="asset('morphology-validation.jpg')" alt="Comparative morphology development and qualitative actuation validation" /><figcaption>Comparative morphology development and qualitative actuation sequences</figcaption></figure>
        </div>
      </section>

      <section class="shell process">
        <div class="section-intro"><p class="kicker">Fabrication</p><h2>From digital geometry to cast silicone actuators</h2><p class="prose">The fabrication workflow combined Rhino modeling, rigid 3D-printed molds, Ecoflex 00-30 silicone casting, demolding, sealing, and pneumatic supply integration. Air chambers were bonded to a non-stretchable layer so inflation would produce controlled bending rather than uniform expansion.</p></div>
        <figure class="evidence"><img :src="asset('fabrication-process.jpg')" alt="Mold design, silicone casting, demolding, and actuator fabrication process" /><figcaption>Digital modeling, mold fabrication, silicone casting, sealing, and assembly</figcaption></figure>
      </section>

      <section class="failure-section">
        <div class="shell failure-grid">
          <div><p class="kicker">Failure-driven iteration</p><h2>Reliability was learned through making</h2></div>
          <div class="failure-list">
            <article><strong>Air leakage</strong><p>Uneven adhesive and incomplete sealing produced pressure loss at chamber boundaries.</p></article>
            <article><strong>Over-inflation</strong><p>Excessive inflation caused rupture or delamination, revealing limits in wall thickness and bonding.</p></article>
            <article><strong>Bonding compatibility</strong><p>Weak interfaces made material preparation and adhesive selection part of the actuator design itself.</p></article>
          </div>
        </div>
      </section>

      <section class="shell integration">
        <div class="section-intro"><p class="kicker">System integration</p><h2>Touch-triggered electro-pneumatic control</h2><p class="prose">I assembled an Arduino-based control chain linking a touch sensor, valve, two air pumps, silicone tubing, and the selected actuator. The integrated prototype tested a simple interaction sequence in which touch initiates inflation and visible physical response.</p></div>
        <div class="system-flow" aria-label="Touch-triggered soft actuator control flow">
          <article><span>01</span><strong>Touch input</strong><p>Capacitive sensing detects contact.</p></article><i aria-hidden="true">→</i>
          <article><span>02</span><strong>Arduino logic</strong><p>Programmed control maps input to actuation.</p></article><i aria-hidden="true">→</i>
          <article><span>03</span><strong>Pneumatic drive</strong><p>Pumps and valve regulate airflow.</p></article><i aria-hidden="true">→</i>
          <article><span>04</span><strong>Soft motion</strong><p>The silicone body inflates and curls.</p></article>
        </div>
        <figure class="evidence"><img :src="asset('system-integration.jpg')" alt="Arduino, pumps, tubing, touch sensor, and soft actuator integration" /><figcaption>Control components, physical integration, and touch-triggered actuation</figcaption></figure>
      </section>

      <section class="extension"><div class="shell extension__inner"><div><p class="kicker">HRI extension</p><h2>From actuator behavior to expressive physical cues</h2></div><p>The next research step is not simply a more polished object. It is to investigate whether timing, amplitude, and movement morphology can function as legible nonverbal signals in human–robot interaction—for example, signaling attention, approach, hesitation, or response without relying on a humanoid body.</p></div></section>

      <section class="disclosure"><div class="shell disclosure__inner"><strong>Evidence boundary</strong><p>This page documents a completed exploratory prototype and qualitative comparison. Quantitative measurements of curvature, response time, and pneumatic pressure are not currently reported and remain a documentation task if original records can be recovered.</p></div></section>
    </article>

    <footer class="footer shell"><p>Interested in this work?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/soft-actuator/${filename}`
</script>

<style lang="scss" scoped>
.case-study{--lime:#b8ef70;--violet:#c8b7ff;--ink:#121016;min-height:100vh;color:#f8f7fb;background:radial-gradient(circle at 78% 4%,rgba(82,113,51,.22),transparent 34rem),#0b0a0e}.shell,.topbar{width:min(1120px,calc(100% - 3rem));margin:0 auto}.topbar{min-height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:700}.back-link{color:#aaa5b0;font-size:.9rem}.back-link:hover{color:white}.eyebrow,.kicker{color:var(--lime);font-size:.72rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}h1{margin:1.15rem 0 1.4rem;font-size:clamp(2.7rem,6vw,5.5rem);line-height:.99;letter-spacing:-.055em}h2{margin-top:.7rem;font-size:clamp(1.8rem,3.6vw,3.1rem);line-height:1.1;letter-spacing:-.04em}.lede{max-width:760px;color:#c3bec8;font-size:clamp(1.05rem,2vw,1.3rem);line-height:1.7}.prose{color:#aaa4af;line-height:1.8}.prose p+p{margin-top:1.2rem}.hero{padding:7rem 0 6rem;display:grid;grid-template-columns:.88fr 1.12fr;gap:clamp(2rem,6vw,5rem);align-items:center}.chips{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:2rem}.chips span{padding:.5rem .75rem;border:1px solid rgba(184,239,112,.28);border-radius:999px;color:#dcffad;font-size:.72rem}.hero__visual{height:540px;margin:0;overflow:hidden;border-radius:1.4rem;background:#eee;position:relative}.hero__visual img{width:100%;height:100%;object-fit:cover;object-position:center}.hero__visual figcaption{position:absolute;right:1rem;bottom:1rem;padding:.45rem .65rem;border-radius:.5rem;background:rgba(11,10,14,.82);color:#e6e1e8}.two-column,.process,.integration{padding:6rem 0;border-top:1px solid rgba(255,255,255,.1)}.two-column{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(3rem,8vw,7rem)}.section-intro{max-width:850px}.section-intro .prose{margin-top:1.2rem}.morphology-band{padding:6rem 0;background:#ebe8ef;color:var(--ink)}.morphology-band .kicker{color:#557526}.morphology-grid{margin:3rem 0;display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem}.morphology-grid article{min-height:250px;padding:1.25rem;border-top:3px solid #789f3f;background:#f7f5f9}.morphology-grid span{color:#668a34;font:700 .75rem var(--font-mono)}.morphology-grid h3{margin:3rem 0 .9rem;font-size:1.25rem}.morphology-grid p{color:#625d67;font-size:.86rem;line-height:1.7}.evidence{margin:3rem 0 0;padding:.65rem;border-radius:1rem;background:#151319}.evidence img{width:100%;display:block;border-radius:.65rem}.evidence figcaption{padding:.75rem .35rem .3rem;color:#a9a3ad;font-size:.76rem;line-height:1.5}.morphology-band .evidence{background:#dad6df}.morphology-band .evidence figcaption{color:#5f5963}.failure-section{padding:6rem 0;background:#17151b}.failure-grid{display:grid;grid-template-columns:.65fr 1.35fr;gap:clamp(3rem,7vw,6rem)}.failure-list article{padding:1.2rem 0;display:grid;grid-template-columns:9rem 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.failure-list strong{color:#d9d0ee}.failure-list p{color:#a6a0aa;line-height:1.65}.system-flow{margin-top:3rem;display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;gap:.5rem;align-items:center}.system-flow article{min-height:200px;padding:1rem;display:flex;flex-direction:column;border-top:2px solid var(--lime);background:#151319}.system-flow span{color:var(--lime);font:600 .76rem var(--font-mono)}.system-flow strong{margin:2rem 0 .7rem}.system-flow p{color:#98919d;font-size:.78rem;line-height:1.55}.system-flow i{color:#6d6672;font-style:normal}.extension{padding:6rem 0;background:#ebe8ef;color:var(--ink)}.extension__inner{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(3rem,8vw,7rem)}.extension .kicker{color:#557526}.extension p:last-child{color:#5e5963;line-height:1.8}.disclosure{padding:2.6rem 0;background:#111015}.disclosure__inner{display:grid;grid-template-columns:.4fr 1.6fr;gap:2rem}.disclosure strong{color:#d8d0ea}.disclosure p{color:#9d96a2;line-height:1.65}.footer{padding:4rem 0;display:grid;grid-template-columns:1fr 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.footer>p{color:#85808a}.footer>a:not(.back-link){font-size:clamp(1.3rem,3vw,2.3rem);font-weight:700;letter-spacing:-.04em}.footer .back-link{grid-column:2}
@media(max-width:900px){.shell,.topbar{width:min(100% - 2rem,1120px)}.topbar{min-height:68px}.hero,.two-column,.failure-grid,.extension__inner{grid-template-columns:1fr}.hero{padding:5rem 0 4rem}.hero__visual{height:430px}.two-column,.process,.integration,.morphology-band,.failure-section,.extension{padding:4rem 0}.morphology-grid{grid-template-columns:1fr}.morphology-grid article{min-height:auto}.system-flow{grid-template-columns:1fr}.system-flow i{transform:rotate(90deg);text-align:center}.system-flow article{min-height:auto}.failure-list article{grid-template-columns:1fr}.disclosure__inner,.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}
</style>
