<template>
  <main class="case-study">
    <header class="topbar"><a class="brand" :href="homeUrl">Bihan Zhang</a><a class="back-link" :href="`${homeUrl}#prototypes`">← Back to prototypes</a></header>

    <article>
      <section class="hero shell">
        <div>
          <p class="eyebrow">Independent Technical Prototype · 2025</p>
          <h1>Multimodal EMG Sensing and Vibrotactile Feedback Prototype</h1>
          <p class="lede">A functional sensing prototype combining three-channel electromyography, two strain inputs, real-time signal visualization, and localized vibration at a simulated residual-limb site.</p>
          <div class="chips"><span>3-channel EMG</span><span>2 strain inputs</span><span>Processing visualization</span><span>Vibrotactile output</span></div>
        </div>
        <div class="hero__system" aria-label="Multimodal EMG and vibrotactile feedback architecture">
          <div class="sensor-stack">
            <article><span>CH 01</span><strong>EMG</strong><i></i></article>
            <article><span>CH 02</span><strong>EMG</strong><i></i></article>
            <article><span>CH 03</span><strong>EMG</strong><i></i></article>
            <article class="sensor-stack__strain"><span>IN 04–05</span><strong>Strain × 2</strong></article>
          </div>
          <svg viewBox="0 0 120 260" aria-hidden="true"><path d="M0 50 H45 V130 H120 M0 105 H45 M0 160 H45 M0 220 H45 V130" /></svg>
          <article class="processor"><span>Arduino + Processing</span><strong>Acquisition<br />State logic<br />Visualization</strong></article>
          <i class="system-arrow">→</i>
          <article class="feedback-node"><span>Output</span><strong>Localized<br />vibration</strong><div class="pulse"><i></i><i></i><i></i></div></article>
        </div>
      </section>

      <section class="objective"><div class="shell split"><div><p class="kicker">Technical objective</p><h2>Sense attempted movement and return an immediate tactile acknowledgement</h2></div><div class="prose"><p>I built and tested the complete sensing and feedback chain. The prototype used finger movement as a focused test case: muscle activity and auxiliary deformation inputs were monitored, while a vibration motor positioned at the simulated residual-limb site returned a localized tactile cue.</p><p>The work explores an interaction mechanism for rehabilitation contexts. It does not claim clinical pain reduction or restoration of proprioception.</p></div></div></section>

      <section class="pipeline shell">
        <div class="section-intro"><p class="kicker">Implemented system</p><h2>A multimodal path from attempted action to tactile output</h2></div>
        <div class="input-pair">
          <article><span>Input A</span><strong>3 × EMG channels</strong><p>Analog muscle-activity signals acquired through Arduino.</p></article>
          <b>+</b>
          <article><span>Input B</span><strong>2 × strain sensors</strong><p>Auxiliary deformation states support action-state detection.</p></article>
        </div>
        <div class="flow"><i>↓</i><article><span>01</span><strong>Serial acquisition</strong><p>Five numeric inputs are streamed for monitoring and integration.</p></article><i>→</i><article><span>02</span><strong>Signal display</strong><p>Processing renders three EMG traces in an 800-sample ring buffer.</p></article><i>→</i><article><span>03</span><strong>State logic</strong><p>Strain thresholds distinguish one- and two-sensor activation states.</p></article><i>→</i><article><span>04</span><strong>Vibration cue</strong><p>Distinct pulse patterns acknowledge the detected action state.</p></article></div>
      </section>

      <section class="evidence"><div class="shell">
        <div class="section-intro"><p class="kicker">Bench observations</p><h2>Three contraction conditions revealed both capability and sensor limits</h2><p class="prose">I conducted the rest, slight-contraction, and strong-contraction tests myself. Because the recoverable files do not contain the original numeric recordings, the page reports only the qualitative observations rather than reconstructing precise plots from a portfolio board.</p></div>
        <div class="response-grid">
          <article><span>01 · Rest</span><strong>Baseline noise remained visible</strong><div class="range range--rest"><i></i></div><p>Used as the reference condition for interpreting subsequent activity.</p></article>
          <article><span>02 · Slight contraction</span><strong>Partial separation</strong><div class="range range--slight"><i></i></div><p>Subtle activity could overlap the resting noise band with the low-cost EMG hardware.</p></article>
          <article><span>03 · Strong contraction</span><strong>Clear amplitude increase</strong><div class="range range--strong"><i></i></div><p>Stronger contraction produced the most legible response across the three channels.</p></article>
        </div>
        <div class="carrier-evidence"><figure><img :src="asset('device-cad.png')" alt="CAD wireframe of the wearable carrier" /><figcaption>CAD geometry · carrier for sensing and localized feedback components</figcaption></figure><figure><img :src="asset('device-render.jpg')" alt="Independent render of the wearable carrier" /><figcaption>Independent source render · physical-form proposal, not experimental evidence</figcaption></figure></div>
      </div></section>

      <section class="processing shell"><div><p class="kicker">Code-derived behavior</p><h2>Visualization and feedback were implemented as separate layers</h2></div><div class="logic-list">
        <article><strong>Baseline tracking</strong><p>An adaptive baseline with <code>α = 0.01</code> follows slow drift before the displayed signal is amplified.</p></article>
        <article><strong>Continuous display</strong><p>Three color-coded waveforms are maintained in an 800-sample circular buffer rather than reduced to discrete gesture labels.</p></article>
        <article><strong>Two feedback states</strong><p>One active strain input generates a single cue; simultaneous activation generates a short three-pulse pattern.</p></article>
        <article><strong>Observed limitation</strong><p>Low-cost EMG hardware produced limited separation between resting noise and subtle contraction, motivating future filtering and sensor-fusion work.</p></article>
      </div></section>

      <section class="boundary"><div class="shell boundary__inner"><strong>Evidence boundary</strong><p>This page documents a self-built functional prototype and qualitative self-testing. “Residual-limb site” describes the placement simulated in the prototype. No amputee participants, clinical efficacy study, pain-relief outcome, or validated intent-classification model is claimed.</p></div></section>
    </article>
    <footer class="footer shell"><p>Interested in this work?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/emg/${filename}`
</script>

<style lang="scss" scoped>
.case-study{--accent:#ff71d6;--blue:#70d9ff;--ink:#151019;min-height:100vh;color:#f9f7fb;background:radial-gradient(circle at 78% 2%,rgba(155,53,151,.22),transparent 36rem),#0a090d}.shell,.topbar{width:min(1120px,calc(100% - 3rem));margin:0 auto}.topbar{min-height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:700}.back-link{color:#aaa4af;font-size:.9rem}.eyebrow,.kicker{color:var(--accent);font-size:.72rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}h1{margin:1.1rem 0 1.4rem;font-size:clamp(2.55rem,5.5vw,5rem);line-height:1;letter-spacing:-.055em}h2{margin:.7rem 0 0;font-size:clamp(1.85rem,3.5vw,3rem);line-height:1.1;letter-spacing:-.04em}.lede{max-width:720px;color:#c2bbc6;font-size:clamp(1.05rem,2vw,1.28rem);line-height:1.7}.prose{color:#aba4af;line-height:1.8}.prose p+p{margin-top:1rem}.hero{padding:7rem 0 6rem;display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(2.5rem,7vw,6rem);align-items:center}.chips{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:2rem}.chips span{padding:.5rem .75rem;border:1px solid rgba(255,113,214,.3);border-radius:999px;color:#ffc8ef;font-size:.72rem}.hero__system{min-height:520px;padding:1.5rem;display:grid;grid-template-columns:1fr 70px .9fr auto .8fr;gap:.6rem;align-items:center;border:1px solid rgba(255,255,255,.1);border-radius:1rem;background:#121017}.sensor-stack{display:grid;gap:.55rem}.sensor-stack article,.processor,.feedback-node{padding:1rem;border-top:2px solid var(--blue);background:#19151d}.sensor-stack span,.processor span,.feedback-node span{color:var(--blue);font:600 .65rem var(--font-mono);text-transform:uppercase}.sensor-stack strong,.processor strong,.feedback-node strong{display:block;margin:.65rem 0;line-height:1.45}.sensor-stack article>i{height:16px;display:block;background:repeating-linear-gradient(90deg,transparent 0 5px,rgba(112,217,255,.7) 6px 8px,transparent 9px 14px);clip-path:polygon(0 45%,8% 45%,12% 0,16% 100%,21% 45%,100% 45%,100% 58%,22% 58%,16% 100%,11% 58%,0 58%)}.sensor-stack__strain{border-color:var(--accent)!important}.hero__system>svg{width:100%;height:260px}.hero__system>svg path{fill:none;stroke:#68616d;stroke-width:2}.processor{border-color:var(--accent)}.system-arrow{color:#746d79;font-style:normal}.feedback-node{border-color:var(--accent);text-align:center}.pulse{display:flex;justify-content:center;gap:.3rem}.pulse i{width:.5rem;height:1.2rem;border-radius:1rem;background:var(--accent);animation:pulse 1.3s ease-in-out infinite}.pulse i:nth-child(2){animation-delay:.15s}.pulse i:nth-child(3){animation-delay:.3s}@keyframes pulse{50%{opacity:.25;transform:scaleY(.45)}}.objective,.evidence{padding:5.5rem 0;background:#ece9f0;color:var(--ink)}.objective .kicker,.evidence .kicker{color:#a13388}.split,.processing{display:grid;grid-template-columns:.75fr 1.25fr;gap:clamp(3rem,8vw,7rem)}.objective .prose,.evidence .prose{color:#625b66}.pipeline,.processing{padding:6rem 0}.section-intro{max-width:850px}.input-pair{margin-top:3rem;display:grid;grid-template-columns:1fr auto 1fr;gap:1rem;align-items:center}.input-pair article{padding:1.3rem;border-top:2px solid var(--blue);background:#151219}.input-pair span,.flow span{color:var(--blue);font:600 .7rem var(--font-mono)}.input-pair strong{display:block;margin:1rem 0 .5rem}.input-pair p,.flow p{color:#99929e;font-size:.78rem;line-height:1.55}.input-pair b{color:#706a75}.flow{margin-top:1rem;display:grid;grid-template-columns:auto 1fr auto 1fr auto 1fr auto 1fr;gap:.55rem;align-items:center}.flow>i:first-child{display:none}.flow article{min-height:170px;padding:1rem;display:flex;flex-direction:column;border-top:2px solid var(--accent);background:#151219}.flow strong{margin:2rem 0 .6rem}.flow i{color:#6f6873;font-style:normal}.evidence .section-intro{margin-bottom:3rem}.response-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem}.response-grid article{padding:1.15rem;border-top:2px solid #a13388;background:#ddd8e1}.response-grid span{color:#8a276f;font:700 .68rem var(--font-mono);text-transform:uppercase}.response-grid strong{display:block;margin:1.5rem 0 .7rem}.response-grid p{color:#655e69;font-size:.78rem;line-height:1.6}.range{height:54px;margin:1rem 0;display:flex;align-items:center;border-top:1px solid rgba(21,16,25,.14);border-bottom:1px solid rgba(21,16,25,.14)}.range i{width:100%;height:10px;background:#8e8193;border-radius:999px}.range--slight i{height:22px;background:#9c5b88}.range--strong i{height:42px;background:#a13388}.carrier-evidence{margin-top:1rem;display:grid;grid-template-columns:1fr 1.35fr;gap:.75rem}.carrier-evidence figure{height:380px;margin:0;position:relative;overflow:hidden;border-radius:.8rem;background:#d8d3dc}.carrier-evidence img{width:100%;height:100%;object-fit:contain}.carrier-evidence figcaption{position:absolute;left:.7rem;bottom:.7rem;padding:.45rem .6rem;border-radius:.35rem;background:rgba(21,16,25,.82);color:#f5f1f7;font-size:.7rem}.logic-list article{padding:1.2rem 0;display:grid;grid-template-columns:9rem 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.logic-list strong{color:#ead8ed}.logic-list p{color:#a7a0aa;line-height:1.65}.logic-list code{color:#9ce9ff}.boundary{padding:2.6rem 0;background:#141116}.boundary__inner{display:grid;grid-template-columns:.4fr 1.6fr;gap:2rem}.boundary strong{color:#ead8ed}.boundary p{color:#9e97a2;line-height:1.65}.footer{padding:4rem 0;display:grid;grid-template-columns:1fr 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.footer>p{color:#85808a}.footer>a:not(.back-link){font-size:clamp(1.3rem,3vw,2.3rem);font-weight:700}.footer .back-link{grid-column:2}
@media(max-width:900px){.shell,.topbar{width:min(100% - 2rem,1120px)}.topbar{min-height:68px}.hero,.split,.processing{grid-template-columns:1fr}.hero{padding:5rem 0 4rem}.hero__system{min-height:390px;grid-template-columns:1fr}.hero__system>svg{display:none}.hero__system .system-arrow{display:block;transform:rotate(90deg);text-align:center}.objective,.pipeline,.evidence,.processing{padding:4rem 0}.flow{grid-template-columns:1fr}.flow>i{display:block!important;transform:rotate(90deg);text-align:center}.flow article{min-height:auto}.response-grid{grid-template-columns:1fr}.carrier-evidence{grid-template-columns:1fr}.carrier-evidence figure{height:340px}.logic-list article{grid-template-columns:1fr}.boundary__inner,.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}
</style>
