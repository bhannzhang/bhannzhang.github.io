<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#prototypes`"><span aria-hidden="true">&larr;</span> Back to prototypes</a>
    </header>

    <article>
      <section class="hero shell">
        <div class="hero__copy">
          <p class="eyebrow">Independent Technical Prototyping · Soft Robotics · 2025</p>
          <h1>Pneumatic Soft Actuator Prototyping</h1>
          <p class="lede">A collection of three silicone pneumatic actuator architectures, developed to examine how cavity geometry and structural constraint translate air pressure into distinct movement profiles.</p>
          <div class="chips"><span>3 actuator architectures</span><span>Silicone casting</span><span>Electro-pneumatic control</span></div>
        </div>

        <div class="hero-diagrams" aria-label="Illustrations of three pneumatic actuator structures">
          <div class="hero-diagram hero-diagram--bellows">
            <svg viewBox="0 0 420 150" role="img" aria-label="Segmented bellows actuator illustration">
              <path class="skin" d="M35 109 C93 105 130 104 176 82 C223 59 280 48 381 48 L388 89 C295 87 250 93 207 110 C154 132 95 130 39 126 Z" />
              <path class="constraint" d="M38 121 C101 124 155 122 205 103 C250 86 299 82 388 83" />
              <path v-for="x in [96,141,186,231,276,321]" :key="x" class="separator" :d="`M${x} 101 L${x+10} 61`" />
              <path class="airline" d="M3 116 L58 116" /><path class="flow" d="M48 110 L58 116 L48 122" />
            </svg>
          </div>
          <div class="hero-diagram hero-diagram--tentacle">
            <svg viewBox="0 0 420 150" role="img" aria-label="Continuous tentacle actuator illustration">
              <path class="skin" d="M35 105 C112 105 181 100 237 80 C286 62 328 48 390 50 C355 74 334 97 319 126 C272 115 247 111 209 118 C151 129 92 128 37 123 Z" />
              <path class="constraint" d="M38 119 C101 124 154 120 207 111 C254 103 281 109 319 121" />
              <path class="cavity" d="M74 108 C143 108 191 102 233 89 C273 76 311 68 354 66 C324 83 309 98 298 111 C262 102 237 101 204 108 C155 118 112 119 74 116 Z" />
              <path class="airline" d="M3 114 L73 114" /><path class="flow" d="M63 108 L73 114 L63 120" />
            </svg>
          </div>
          <div class="hero-diagram hero-diagram--bloom">
            <svg viewBox="0 0 420 150" role="img" aria-label="Central expansion actuator illustration">
              <path class="skin" d="M35 105 C95 104 135 95 174 72 C203 55 235 43 271 45 C296 46 312 61 306 82 C329 78 353 89 358 108 C319 99 286 101 252 116 C183 145 112 129 37 123 Z" />
              <path class="constraint" d="M38 119 C111 128 179 131 247 109 C285 97 318 98 358 104" />
              <ellipse class="cavity" cx="205" cy="79" rx="33" ry="25" /><ellipse class="cavity" cx="272" cy="74" rx="31" ry="24" /><ellipse class="cavity" cx="323" cy="99" rx="26" ry="18" />
              <path class="airline" d="M3 114 L174 114" /><path class="flow" d="M164 108 L174 114 L164 120" />
            </svg>
          </div>
        </div>
      </section>

      <section class="principle">
        <div class="shell principle__inner">
          <div><p class="kicker">Shared actuation principle</p><h2>Asymmetric strain converts inflation into motion</h2></div>
          <div class="principle-copy">
            <p>Pressurized air expands the compliant cavities. A less-extensible base layer limits elongation along one side, creating a strain difference across the actuator thickness. The resulting imbalance produces bending; changing the cavity topology changes where deformation accumulates and therefore changes the movement profile.</p>
            <div class="principle-key"><span><i class="key key--air"></i>Pressurized cavity</span><span><i class="key key--body"></i>Silicone body</span><span><i class="key key--constraint"></i>Constrained layer</span></div>
          </div>
        </div>
      </section>

      <section class="actuator shell">
        <header class="actuator__header"><div><p class="kicker">Architecture 01</p><h2>Segmented Bellows</h2></div><p>Discrete chambers concentrate expansion into repeated bending units.</p></header>
        <div class="actuator__body">
          <figure class="demo"><video autoplay muted loop playsinline controls preload="metadata" :poster="asset('segmented-bellows-poster.jpg')"><source :src="media('segmented-bellows.m4v')" type="video/mp4" /></video><figcaption>Physical actuation demo · real fabricated prototype</figcaption></figure>
          <div class="analysis-list">
            <article><span>Cavity layout</span><p>A row of separated bellows forms discrete expansion zones along the upper surface.</p></article>
            <article><span>Constraint</span><p>The continuous lower layer resists extension while the chamber side expands.</p></article>
            <article><span>Movement</span><p>Local rotation accumulates chamber by chamber, producing a pronounced C-shaped bend.</p></article>
            <article><span>Engineering implication</span><p>The modular chamber sequence makes the deformation visually legible, but introduces more seams and potential leakage interfaces.</p></article>
          </div>
        </div>
        <div class="mechanism mechanism--segments" aria-label="Segmented cavity inflation analysis"><div class="state"><strong>Resting</strong><div class="segment-row"><i v-for="n in 6" :key="`r${n}`"></i></div></div><div class="pressure-arrow"><span>air pressure</span>→</div><div class="state state--inflated"><strong>Inflated</strong><div class="segment-row"><i v-for="n in 6" :key="`i${n}`"></i></div></div></div>
      </section>

      <section class="actuator actuator--light">
        <div class="shell">
          <header class="actuator__header"><div><p class="kicker">Architecture 02</p><h2>Continuous Tentacle</h2></div><p>A continuous tapered body distributes deformation into a progressive curl.</p></header>
          <div class="actuator__body actuator__body--reverse">
            <figure class="demo"><video autoplay muted loop playsinline controls preload="metadata" :poster="asset('continuous-tentacle-poster.jpg')"><source :src="media('continuous-tentacle.m4v')" type="video/mp4" /></video><figcaption>Physical actuation demo · real fabricated prototype</figcaption></figure>
            <div class="analysis-list">
              <article><span>Cavity layout</span><p>A continuous tapered geometry carries pneumatic expansion from the inlet toward the narrower distal end.</p></article>
              <article><span>Constraint</span><p>The lower surface limits axial extension and redirects expansion into curvature.</p></article>
              <article><span>Movement</span><p>Curvature develops progressively along the body, allowing the tip to roll inward into a compact spiral.</p></article>
              <article><span>Engineering implication</span><p>The smooth outer profile produces a more organic motion and fewer exposed transitions than the segmented bellows structure.</p></article>
            </div>
          </div>
          <div class="mechanism mechanism--tentacle" aria-label="Continuous cavity inflation analysis"><div class="state"><strong>Resting</strong><div class="tentacle-shape"></div></div><div class="pressure-arrow"><span>air pressure</span>→</div><div class="state state--inflated"><strong>Inflated</strong><div class="tentacle-shape"></div></div></div>
        </div>
      </section>

      <section class="actuator shell">
        <header class="actuator__header"><div><p class="kicker">Architecture 03</p><h2>Central Expansion / Blooming</h2></div><p>Localized enlarged cavities create alternating bulges and compound deformation.</p></header>
        <div class="actuator__body">
          <figure class="demo"><video autoplay muted loop playsinline controls preload="metadata" :poster="asset('central-expansion-poster.jpg')"><source :src="media('central-expansion.m4v')" type="video/mp4" /></video><figcaption>Physical actuation demo · real fabricated prototype</figcaption></figure>
          <div class="analysis-list">
            <article><span>Cavity layout</span><p>Enlarged chambers are concentrated along the actuator centerline rather than repeated as uniform bellows.</p></article>
            <article><span>Constraint</span><p>The thin connecting body and restrained base direct expansion into localized lobes.</p></article>
            <article><span>Movement</span><p>The chambers swell into a blooming profile while the carrier bends, producing a compound rather than uniform curve.</p></article>
            <article><span>Engineering implication</span><p>Localized volume change creates a distinctive expressive motion, but also concentrates stress around chamber transitions.</p></article>
          </div>
        </div>
        <div class="mechanism mechanism--bloom" aria-label="Central expansion cavity analysis"><div class="state"><strong>Resting</strong><div class="bloom-shape"><i></i><i></i><i></i></div></div><div class="pressure-arrow"><span>air pressure</span>→</div><div class="state state--inflated"><strong>Inflated</strong><div class="bloom-shape"><i></i><i></i><i></i></div></div></div>
      </section>

      <section class="control">
        <div class="shell control__inner">
          <div><p class="kicker">Technical integration</p><h2>One control chain, interchangeable actuator outputs</h2><p class="prose">The physical tests were driven through an Arduino-based electro-pneumatic system. A touch input triggered programmed control logic, which switched the valve and air pumps to inflate the connected silicone actuator.</p></div>
          <div class="system-flow"><article><span>01</span><strong>Touch sensor</strong></article><i>→</i><article><span>02</span><strong>Arduino UNO</strong></article><i>→</i><article><span>03</span><strong>Valve + pumps</strong></article><i>→</i><article><span>04</span><strong>Silicone actuator</strong></article></div>
        </div>
      </section>

      <section class="disclosure"><div class="shell disclosure__inner"><strong>Current evidence</strong><p>The page documents three fabricated actuator architectures, their observed motion, and the implemented control chain. The comparison is currently qualitative; curvature, response time, and pneumatic pressure will only be added if recoverable original measurements can be verified.</p></div></section>
    </article>

    <footer class="footer shell"><p>Interested in this work?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/soft-actuator/${filename}`
const media = (filename) => `${import.meta.env.BASE_URL}media/research/soft-actuator/${filename}`
</script>

<style lang="scss" scoped>
.case-study{--lime:#b8ef70;--violet:#c8b7ff;--orange:#ffb020;--ink:#121016;min-height:100vh;color:#f8f7fb;background:radial-gradient(circle at 80% 2%,rgba(103,142,59,.17),transparent 34rem),#0b0a0e}.shell,.topbar{width:min(1120px,calc(100% - 3rem));margin:0 auto}.topbar{min-height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:700}.back-link{color:#aaa5b0;font-size:.9rem}.back-link:hover{color:white}.eyebrow,.kicker{color:var(--lime);font-size:.72rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}h1{margin:1.15rem 0 1.4rem;font-size:clamp(2.7rem,6vw,5.5rem);line-height:.99;letter-spacing:-.055em}h2{margin-top:.7rem;font-size:clamp(1.8rem,3.6vw,3.1rem);line-height:1.1;letter-spacing:-.04em}.lede{max-width:720px;color:#c3bec8;font-size:clamp(1.05rem,2vw,1.3rem);line-height:1.7}.prose{color:#aaa4af;line-height:1.8}.hero{padding:7rem 0 6rem;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(2.5rem,7vw,6rem);align-items:center}.chips{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:2rem}.chips span{padding:.5rem .75rem;border:1px solid rgba(184,239,112,.28);border-radius:999px;color:#dcffad;font-size:.72rem}.hero-diagrams{display:grid;gap:.75rem}.hero-diagram{height:155px;padding:.25rem 1rem;border:1px solid rgba(255,255,255,.1);border-radius:1rem;background:rgba(255,255,255,.035)}.hero-diagram svg{width:100%;height:100%}.hero-diagram .skin{fill:rgba(221,242,230,.12);stroke:#d8f2e2;stroke-width:2}.hero-diagram .constraint{fill:none;stroke:var(--orange);stroke-width:4}.hero-diagram .separator{fill:none;stroke:#9dd0ae;stroke-width:2}.hero-diagram .cavity{fill:rgba(184,239,112,.16);stroke:var(--lime);stroke-width:1.5;stroke-dasharray:5 5}.hero-diagram .airline{fill:none;stroke:#9aa0aa;stroke-width:4}.hero-diagram .flow{fill:none;stroke:var(--lime);stroke-width:2}.principle{padding:5.5rem 0;background:#ece9f0;color:var(--ink)}.principle__inner{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(3rem,8vw,7rem)}.principle .kicker,.actuator--light .kicker{color:#547427}.principle-copy>p{color:#5e5963;line-height:1.85}.principle-key{display:flex;flex-wrap:wrap;gap:1.2rem;margin-top:2rem;color:#5e5963;font-size:.78rem}.principle-key span{display:flex;align-items:center;gap:.45rem}.key{width:1.5rem;height:.35rem;display:inline-block;border-radius:1rem}.key--air{background:var(--lime)}.key--body{background:#9fb8a7}.key--constraint{background:var(--orange)}.actuator{padding:6rem 0;border-top:1px solid rgba(255,255,255,.1)}.actuator--light{width:auto;background:#ece9f0;color:var(--ink)}.actuator--light>.shell{width:min(1120px,calc(100% - 3rem))}.actuator__header{display:grid;grid-template-columns:1fr .65fr;gap:3rem;align-items:end}.actuator__header>p{color:#aaa4af;line-height:1.7}.actuator--light .actuator__header>p{color:#615c66}.actuator__body{margin-top:3rem;display:grid;grid-template-columns:1fr 1fr;gap:clamp(2rem,5vw,4rem);align-items:start}.actuator__body--reverse .demo{order:2}.demo{margin:0;padding:.6rem;border-radius:1rem;background:#151319}.demo video{width:100%;max-height:560px;display:block;border-radius:.65rem;background:#050505;object-fit:contain}.demo figcaption{padding:.7rem .3rem .25rem;color:#9d96a1;font-size:.74rem}.actuator--light .demo{background:#d8d4dd}.actuator--light .demo figcaption{color:#5e5963}.analysis-list article{padding:1rem 0;display:grid;grid-template-columns:9rem 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.12)}.analysis-list span{color:#d9d0ee;font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.analysis-list p{color:#a6a0aa;line-height:1.65}.actuator--light .analysis-list article{border-color:rgba(18,16,22,.13)}.actuator--light .analysis-list span{color:#4d3f70}.actuator--light .analysis-list p{color:#615c66}.mechanism{margin-top:2.5rem;padding:1.4rem;display:grid;grid-template-columns:1fr auto 1fr;gap:2rem;align-items:center;border:1px solid rgba(255,255,255,.1);border-radius:1rem;background:#111015}.actuator--light .mechanism{border-color:rgba(18,16,22,.12);background:#dfdbe4}.state{display:grid;grid-template-columns:5rem 1fr;gap:1rem;align-items:center}.state strong{color:#8f8994;font-size:.7rem;text-transform:uppercase;letter-spacing:.08em}.pressure-arrow{display:flex;flex-direction:column;align-items:center;color:var(--lime);font-size:1.5rem}.pressure-arrow span{color:#8f8994;font-size:.63rem;letter-spacing:.08em;text-transform:uppercase}.segment-row{height:70px;display:flex;align-items:flex-end;gap:5px;border-bottom:4px solid var(--orange);transform-origin:left bottom}.segment-row i{width:12%;height:48px;border:2px solid #ccebd5;border-bottom:0;border-radius:7px 7px 0 0;background:rgba(184,239,112,.1)}.state--inflated .segment-row{transform:rotate(-13deg) skewY(-5deg)}.state--inflated .segment-row i{height:58px}.tentacle-shape{height:45px;border:2px solid #ccebd5;border-bottom:4px solid var(--orange);border-radius:24px 80% 80% 24px;background:linear-gradient(90deg,rgba(184,239,112,.08),rgba(184,239,112,.25));transform-origin:left}.state--inflated .tentacle-shape{height:75px;border-radius:80% 30% 70% 40%;transform:rotate(-15deg) skewX(-18deg)}.bloom-shape{height:60px;display:flex;align-items:flex-end;border-bottom:4px solid var(--orange)}.bloom-shape i{width:30%;height:22px;border:2px solid #ccebd5;border-bottom:0;border-radius:50% 50% 0 0;background:rgba(184,239,112,.1)}.state--inflated .bloom-shape i:nth-child(1){height:38px}.state--inflated .bloom-shape i:nth-child(2){height:58px}.state--inflated .bloom-shape i:nth-child(3){height:47px}.control{padding:6rem 0;background:#17151b}.control__inner{display:grid;grid-template-columns:.65fr 1.35fr;gap:clamp(3rem,7vw,6rem)}.control .prose{margin-top:1.4rem}.system-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;gap:.5rem;align-items:center}.system-flow article{min-height:155px;padding:1rem;display:flex;flex-direction:column;justify-content:space-between;border-top:2px solid var(--lime);background:#0f0d13}.system-flow span{color:var(--lime);font:600 .72rem var(--font-mono)}.system-flow strong{font-size:.85rem}.system-flow i{color:#706a74;font-style:normal}.disclosure{padding:2.6rem 0;background:#111015}.disclosure__inner{display:grid;grid-template-columns:.4fr 1.6fr;gap:2rem}.disclosure strong{color:#d8d0ea}.disclosure p{color:#9d96a2;line-height:1.65}.footer{padding:4rem 0;display:grid;grid-template-columns:1fr 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.footer>p{color:#85808a}.footer>a:not(.back-link){font-size:clamp(1.3rem,3vw,2.3rem);font-weight:700;letter-spacing:-.04em}.footer .back-link{grid-column:2}
@media(max-width:900px){.shell,.topbar,.actuator--light>.shell{width:min(100% - 2rem,1120px)}.topbar{min-height:68px}.hero,.principle__inner,.control__inner{grid-template-columns:1fr}.hero{padding:5rem 0 4rem}.hero-diagram{height:125px}.principle,.actuator,.control{padding:4rem 0}.actuator__header,.actuator__body{grid-template-columns:1fr}.actuator__body--reverse .demo{order:0}.mechanism{grid-template-columns:1fr}.pressure-arrow{transform:rotate(90deg)}.state{grid-template-columns:4.5rem 1fr}.system-flow{grid-template-columns:1fr}.system-flow article{min-height:auto}.system-flow i{transform:rotate(90deg);text-align:center}.disclosure__inner,.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}
</style>
