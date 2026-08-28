<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#prototypes`">← Back to prototypes</a>
    </header>

    <article>
      <section class="hero shell">
        <div>
          <p class="eyebrow">Independent Technical Prototype · 2024</p>
          <h1>Multimodal Menstrual-Cycle Sensing and Situated Pain Logging</h1>
          <p class="lede">A two-part interaction prototype combining physiological sensing with visible or discreet reminders, then extending pressure input into a real-time way to express the intensity, duration, and rhythm of menstrual pain.</p>
          <div class="chips"><span>Temperature</span><span>Heart rate + SpO₂</span><span>LED + vibration</span><span>Pressure input</span><span>Arduino + Processing</span></div>
        </div>

        <div class="hero__map" aria-label="System architecture">
          <div class="map-inputs"><article><span>INPUT 01</span><strong>Temperature</strong></article><article><span>INPUT 02</span><strong>Heart rate + SpO₂</strong></article></div>
          <i>↓</i>
          <article class="map-controller"><span>CURRENT LOGIC</span><strong>Arduino threshold trigger</strong><small>status shown on OLED</small></article>
          <i>↓</i>
          <div class="map-outputs"><article><span>LIGHT MODE</span><strong>Visible LED cue</strong></article><article><span>SHY MODE</span><strong>Discreet vibration</strong></article></div>
        </div>
      </section>

      <section class="question-band"><div class="shell question-grid"><div><p class="kicker">Interaction questions</p><h2>Can intimate health feedback adapt to visibility—and can pain be recorded without reducing it to one number?</h2></div><div class="prose"><p>I independently developed the hardware integration, Arduino behavior, OLED interface, feedback modes, pressure interaction, serial communication, and Processing visualization.</p><p>The project consists of two connected explorations: privacy-sensitive cycle reminders and an embodied alternative to retrospective pain scales.</p></div></div></section>

      <section class="modes shell">
        <div class="section-intro"><p class="kicker">Part 01 · Adaptive feedback</p><h2>One sensing path, two levels of visibility</h2><p class="prose">The implemented prototype combines temperature and heart-rate / blood-oxygen readings with preset thresholds. The OLED is a planned user-facing interface rather than a temporary debugging display.</p></div>
        <div class="mode-grid">
          <article class="mode-card mode-card--light"><span>Mode A</span><h3>Light Mode</h3><p>An LED strip makes the reminder ambient and explicitly visible. The recorded prototype demonstrates multiple color states while the OLED identifies the active mode.</p><div class="mode-signal"><i></i><i></i><i></i><i></i><i></i></div></article>
          <article class="mode-card mode-card--shy"><span>Mode B</span><h3>Shy Mode</h3><p>A vibration motor shifts the same reminder into a private tactile channel when the user prefers less publicly legible feedback.</p><div class="vibration-mark"><i></i><b></b><i></i></div></article>
        </div>
      </section>

      <section class="evidence"><div class="shell">
        <div class="section-intro"><p class="kicker">Implemented hardware</p><h2>Functional states extracted from the recorded prototype</h2></div>
        <div class="evidence-grid">
          <figure class="evidence-grid__wide"><img :src="asset('system-overview.webp')" alt="Arduino prototype with physiological sensors, OLED display, LED strip, and vibration output" /><figcaption>Complete benchtop system · sensing, interface, and two feedback channels</figcaption></figure>
          <figure><img :src="asset('oled-interface.webp')" alt="OLED interface showing temperature and interaction mode" /><figcaption>User-facing OLED status interface</figcaption></figure>
          <figure><img :src="asset('shy-mode.webp')" alt="OLED interface showing Shy mode beside the vibration hardware" /><figcaption>Shy Mode · discreet tactile feedback</figcaption></figure>
          <figure><img :src="asset('light-mode-green.webp')" alt="Green LED feedback state in Light Mode" /><figcaption>Light Mode · green LED state</figcaption></figure>
          <figure><img :src="asset('light-mode-red.webp')" alt="Red LED feedback state in Light Mode" /><figcaption>Light Mode · red LED state</figcaption></figure>
        </div>
      </div></section>

      <section class="pain shell">
        <div class="section-intro"><p class="kicker">Part 02 · Situated pain logging</p><h2>Pressure turns a difficult-to-describe sensation into a temporal interaction trace</h2><p class="prose">Conventional scales ask a person to recall pain as a single level. This prototype instead treats pressing as an in-the-moment expression: how hard, how long, and how often the sensor is pressed can preserve different qualities of the experience.</p></div>
        <div class="pain-flow">
          <article><span>01</span><strong>Press</strong><p>A force-sensitive input captures an intentional physical expression.</p></article><i>→</i>
          <article><span>02</span><strong>Sample</strong><p>Arduino reads pressure as a changing analog signal.</p></article><i>→</i>
          <article><span>03</span><strong>Transmit</strong><p>Serial communication passes the live values to Processing.</p></article><i>→</i>
          <article><span>04</span><strong>Visualize + log</strong><p>Processing renders the events over time and creates a pain record.</p></article>
        </div>
        <div class="mapping-grid"><article><span>PRESSURE</span><strong>Relative intensity</strong><div class="glyph glyph--pressure"><i></i><i></i><i></i></div></article><article><span>DURATION</span><strong>Sustained experience</strong><div class="glyph glyph--duration"><i></i></div></article><article><span>REPETITION</span><strong>Short or pulsing episodes</strong><div class="glyph glyph--rhythm"><i></i><i></i><i></i><i></i></div></article></div>
      </section>

      <section class="processing"><div class="shell processing-grid">
        <div><p class="kicker">Real-time output</p><h2>A Processing interface preserves the sequence of pain-expression events</h2><p>The recorded screen shows pressure events accumulating across time. Circle size and visual intensity provide an immediate representation of changing input while the system builds an event history.</p><div class="implementation"><strong>Implemented chain</strong><span>Pressure sensor → Arduino → Serial → Processing → timestamped visual log</span></div></div>
        <figure><img :src="asset('pain-visualization.webp')" alt="Processing interface displaying a timeline of menstrual pain pressure events" /><figcaption>Menstrual Pain Record · real-time Processing visualization</figcaption></figure>
      </div></section>

      <section class="future shell"><div><p class="kicker">Future direction</p><h2>Move from fixed thresholds toward context-aware, user-adjustable feedback</h2></div><div class="future-list"><article><strong>Personalized interpretation</strong><p>Replace universal thresholds with longitudinal baselines that reflect an individual user’s daily physiological patterns.</p></article><article><strong>Conversational adjustment</strong><p>Allow daily questions and user-reported state to modify reminder timing, mode, and sensitivity instead of relying on sensor thresholds alone.</p></article><article><strong>Evaluation</strong><p>Study whether visible and private feedback choices improve comfort, understanding, and willingness to use the system.</p></article></div></section>

      <section class="boundary"><div class="shell boundary__inner"><strong>Evidence boundary</strong><p>This page documents an independently built interaction prototype. Preset thresholds demonstrate the sensing-to-feedback pipeline; they do not establish menstrual prediction accuracy. Pressure patterns are exploratory representations of subjective experience, not clinical pain measurements. No diagnostic performance, treatment outcome, or user-study result is claimed.</p></div></section>
    </article>

    <footer class="footer shell"><p>Interested in this work?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/menstrual-sensing/${filename}`
</script>

<style lang="scss" scoped>
.case-study{--accent:#ff7fbb;--violet:#9d72ff;--blue:#79d6ff;--ink:#171019;min-height:100vh;color:#fbf7fa;background:radial-gradient(circle at 82% 2%,rgba(157,114,255,.18),transparent 34rem),#0c090d}.shell,.topbar{width:min(1120px,calc(100% - 3rem));margin:0 auto}.topbar{min-height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:700}.back-link{color:#aca3ad;font-size:.9rem}.eyebrow,.kicker{color:var(--accent);font-size:.72rem;font-weight:750;letter-spacing:.13em;text-transform:uppercase}h1{margin:1.1rem 0 1.4rem;font-size:clamp(2.65rem,5.7vw,5.2rem);line-height:.98;letter-spacing:-.058em}h2{margin:.7rem 0 0;font-size:clamp(1.85rem,3.6vw,3.05rem);line-height:1.08;letter-spacing:-.04em}.lede{max-width:720px;color:#c5bbc5;font-size:clamp(1.05rem,2vw,1.28rem);line-height:1.72}.prose{color:#aaa0aa;line-height:1.82}.prose p+p{margin-top:1rem}.hero{padding:7rem 0 6rem;display:grid;grid-template-columns:1.05fr .95fr;gap:clamp(2.5rem,7vw,6rem);align-items:center}.chips{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:2rem}.chips span{padding:.5rem .75rem;border:1px solid rgba(255,127,187,.3);border-radius:999px;color:#ffd2e7;font-size:.72rem}.hero__map{min-height:510px;padding:1.4rem;display:flex;flex-direction:column;justify-content:center;gap:.7rem;border:1px solid rgba(255,255,255,.1);border-radius:1rem;background:#151117}.hero__map>i{color:#746c76;text-align:center;font-style:normal}.map-inputs,.map-outputs{display:grid;grid-template-columns:1fr 1fr;gap:.65rem}.hero__map article{padding:1rem;border-top:2px solid var(--blue);background:#1d1820}.hero__map span{color:var(--blue);font:650 .66rem ui-monospace,SFMono-Regular,monospace}.hero__map strong{display:block;margin:.8rem 0 .2rem}.hero__map small{color:#9f95a0}.map-controller{border-color:var(--accent)!important}.map-outputs article{border-color:var(--violet)}.map-outputs span{color:#c7b2ff}.question-band,.evidence,.processing{background:#eee9ee;color:var(--ink)}.question-grid,.future{padding:6rem 0;display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(3rem,8vw,7rem)}.question-band .kicker,.evidence .kicker,.processing .kicker{color:#a13770}.question-band .prose,.evidence .prose{color:#655b65}.modes,.pain{padding:6rem 0}.section-intro{max-width:850px}.mode-grid{margin-top:3rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem}.mode-card{min-height:300px;padding:1.5rem;display:flex;flex-direction:column;border-top:2px solid var(--accent);background:#171318}.mode-card>span,.pain-flow span,.mapping-grid span{color:var(--accent);font:650 .7rem ui-monospace,SFMono-Regular,monospace}.mode-card h3{margin:2.5rem 0 .8rem;font-size:1.45rem}.mode-card p{max-width:440px;color:#a69da7;line-height:1.7}.mode-signal{margin-top:auto;display:flex;gap:.6rem}.mode-signal i{width:1rem;height:1rem;border-radius:50%;background:#65f2a6;box-shadow:0 0 24px rgba(101,242,166,.7)}.mode-signal i:nth-child(n+4){background:#ff556c;box-shadow:0 0 24px rgba(255,85,108,.65)}.vibration-mark{height:50px;margin-top:auto;display:flex;align-items:center;justify-content:center;gap:1rem}.vibration-mark b{width:42px;height:42px;border-radius:50%;background:var(--violet)}.vibration-mark i{width:35px;height:35px;border:2px solid rgba(157,114,255,.65);border-width:0 2px;border-radius:50%}.evidence{padding:6rem 0}.evidence-grid{margin-top:3rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem}.evidence-grid figure{height:470px;margin:0;position:relative;overflow:hidden;border-radius:1rem;background:#d7d0d8}.evidence-grid__wide{grid-column:1/-1;height:560px!important}.evidence-grid img{width:100%;height:100%;display:block;object-fit:cover;object-position:center 56%}.evidence-grid figcaption,.processing figcaption{position:absolute;left:.75rem;bottom:.75rem;padding:.48rem .65rem;border-radius:.4rem;background:rgba(23,16,25,.84);color:#fff;font-size:.72rem}.pain-flow{margin-top:3rem;display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;gap:.55rem;align-items:center}.pain-flow article{min-height:185px;padding:1rem;display:flex;flex-direction:column;border-top:2px solid var(--accent);background:#171318}.pain-flow strong{margin:2rem 0 .6rem}.pain-flow p{color:#9f96a0;font-size:.8rem;line-height:1.6}.pain-flow>i{color:#776e78;font-style:normal}.mapping-grid{margin-top:1rem;display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem}.mapping-grid article{padding:1.2rem;background:#141015}.mapping-grid strong{display:block;margin:1rem 0}.glyph{height:58px;display:flex;align-items:end;gap:.45rem}.glyph i{display:block;background:var(--violet);border-radius:999px}.glyph--pressure i{width:18px;height:18px}.glyph--pressure i:nth-child(2){width:32px;height:32px}.glyph--pressure i:nth-child(3){width:50px;height:50px}.glyph--duration i{width:86%;height:16px}.glyph--rhythm i{width:16px;height:35px}.glyph--rhythm i:nth-child(2){margin-left:1.4rem;height:50px}.glyph--rhythm i:nth-child(3){margin-left:.2rem;height:24px}.glyph--rhythm i:nth-child(4){margin-left:1.8rem;height:43px}.processing{padding:6rem 0}.processing-grid{display:grid;grid-template-columns:.9fr 1.1fr;gap:clamp(3rem,7vw,6rem);align-items:center}.processing-grid>div>p{margin-top:1.5rem;color:#655c66;line-height:1.8}.processing figure{height:620px;margin:0;position:relative;overflow:hidden;border-radius:1rem;background:#171019}.processing img{width:100%;height:100%;object-fit:cover;object-position:center 55%}.implementation{margin-top:2rem;padding:1.2rem;border-left:3px solid #a13770;background:#ded6de}.implementation strong,.implementation span{display:block}.implementation span{margin-top:.5rem;color:#625963;font-size:.82rem;line-height:1.6}.future-list article{padding:1.2rem 0;display:grid;grid-template-columns:10rem 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.12)}.future-list strong{color:#f4deeb}.future-list p{color:#a69ca7;line-height:1.65}.boundary{padding:2.8rem 0;background:#171218}.boundary__inner{display:grid;grid-template-columns:.4fr 1.6fr;gap:2rem}.boundary strong{color:#f4deeb}.boundary p{color:#9e949f;line-height:1.7}.footer{padding:4rem 0;display:grid;grid-template-columns:1fr 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.footer>p{color:#857d86}.footer>a:not(.back-link){font-size:clamp(1.3rem,3vw,2.3rem);font-weight:700}.footer .back-link{grid-column:2}
@media(max-width:900px){.shell,.topbar{width:min(100% - 2rem,1120px)}.topbar{min-height:68px}.hero,.question-grid,.processing-grid,.future{grid-template-columns:1fr}.hero{padding:5rem 0 4rem}.hero__map{min-height:auto}.question-grid,.modes,.evidence,.pain,.processing,.future{padding:4rem 0}.pain-flow{grid-template-columns:1fr}.pain-flow>i{transform:rotate(90deg);text-align:center}.pain-flow article{min-height:auto}.evidence-grid figure,.evidence-grid__wide{height:450px!important}.future-list article{grid-template-columns:1fr}.boundary__inner,.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}@media(max-width:620px){.mode-grid,.evidence-grid,.mapping-grid,.map-inputs,.map-outputs{grid-template-columns:1fr}.evidence-grid__wide{grid-column:auto}.evidence-grid figure,.evidence-grid__wide{height:430px!important}}
</style>
