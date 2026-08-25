<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#research-projects`"><span aria-hidden="true">&larr;</span> Back to research</a>
    </header>

    <article>
      <section class="hero shell">
        <div class="eyebrow">Simulation Infrastructure &amp; Human Factors · Industry Collaboration</div>
        <h1>Real-World Digital Twin for Virtual Driving Evaluation</h1>
        <p class="lede">A field-to-simulation program that translated surveyed road geography into a modular Unity environment for repeatable virtual-driving and ADAS evaluation.</p>
        <div class="chips"><span>Team Lead</span><span>~500,000 m² modeled</span><span>Unity environment</span><span>NDA-safe case study</span></div>
        <div class="map-visual" role="img" aria-label="Abstract road network showing field observations translated into reusable digital scene modules">
          <div class="map-grid"></div>
          <div class="route route-a"></div><div class="route route-b"></div><div class="route route-c"></div>
          <span v-for="point in 7" :key="point" :class="`point point-${point}`"></span>
          <div class="map-label"><small>Field → Model → Test</small><strong>Geographic evidence became reusable research infrastructure</strong></div>
          <div class="coverage"><small>Modeled coverage</small><strong>~500,000 m²</strong></div>
        </div>
      </section>

      <section class="shell two-column">
        <div><p class="kicker">Infrastructure question</p><h2>How can a real road network become a controllable experimental environment?</h2></div>
        <div class="prose">
          <p>A geographically convincing scene is not automatically a useful research platform. Virtual-driving studies also require consistent road logic, modular conditions, repeatable configurations, and assets that can be recombined as research questions change.</p>
          <p>As team lead, I coordinated the route survey, scene decomposition, modeling workflow, progress tracking, and handoff into a shared Unity-based environment. The resulting system supported virtual-driving evaluation while preserving a traceable connection to real roads.</p>
        </div>
      </section>

      <section class="metrics-band">
        <div class="shell metric-grid">
          <div><strong>~500,000 m²</strong><span>real-world geography surveyed and modeled</span></div>
          <div><strong>5 layers</strong><span>weather, light, actors, facilities, and roads</span></div>
          <div><strong>3 families</strong><span>urban, highway, and local-road conditions</span></div>
          <div><strong>1 platform</strong><span>shared Unity environment for repeatable tests</span></div>
        </div>
      </section>

      <section class="shell workflow">
        <p class="kicker">Field-to-simulation workflow</p>
        <h2>Preserve geographic evidence while making the environment reusable</h2>
        <ol class="steps">
          <li><span>01</span><h3>Survey the route</h3><p>Recorded road length, lane count, intersections, surrounding structures, and mismatches between map imagery and current field conditions.</p></li>
          <li><span>02</span><h3>Decompose the environment</h3><p>Separated a continuous site into road geometries, markings, facilities, landmarks, and configurable environmental conditions.</p></li>
          <li><span>03</span><h3>Build modular assets</h3><p>Created reusable straight roads, curves, ramps, roundabouts, intersections, signs, barriers, and supporting scene objects.</p></li>
          <li><span>04</span><h3>Integrate in Unity</h3><p>Standardized FBX and material packages and organized assets for loading, assembly, and repeated experimental configuration.</p></li>
          <li><span>05</span><h3>Validate for testing</h3><p>Checked geometry, lane logic, visual correspondence, and coverage so the environment could support driving and ADAS studies.</p></li>
        </ol>
      </section>

      <section class="architecture">
        <div class="shell architecture__inner">
          <div><p class="kicker">Scene architecture</p><h2>Five layers separated what researchers need to control</h2><p class="prose">The material library distinguished visual context from functional road logic. That separation made scenes easier to recombine without rebuilding the complete environment for every study.</p></div>
          <div class="layers">
            <article v-for="(layer, index) in layers" :key="layer.title"><span>{{ String(index + 1).padStart(2, '0') }}</span><div><h3>{{ layer.title }}</h3><p>{{ layer.description }}</p></div></article>
          </div>
        </div>
      </section>

      <section class="shell system-architecture">
        <div class="system-architecture__heading">
          <p class="kicker">System architecture</p>
          <h2>From synchronized simulation state to multi-surface evaluation</h2>
          <p class="prose">The original project architecture connected the main and auxiliary test programs, synchronized vehicle state, data forwarding, monitoring, and the experimental display surfaces used across the simulation platform.</p>
        </div>
        <figure>
          <a :href="architectureDiagram" target="_blank" rel="noopener noreferrer" aria-label="Open the original system architecture diagram at full resolution">
            <img :src="architectureDiagram" alt="Original system architecture diagram connecting driving simulation, synchronized test programs, data forwarding, monitoring, and evaluation displays" />
          </a>
          <figcaption><strong>Original project architecture.</strong> Select the diagram to inspect the full-resolution version.</figcaption>
        </figure>
      </section>

      <section class="shell coverage-section">
        <div><p class="kicker">Coverage strategy</p><h2>A reusable grammar of roads—not one fixed cinematic scene</h2></div>
        <div class="road-types">
          <article><span>Urban</span><h3>Four- and six-lane roads</h3><p>Straights, angled and right-angle curves, intersections, ramps, roundabouts, crossings, traffic lights, and lane markings.</p></article>
          <article><span>Highway</span><h3>Single- and bidirectional corridors</h3><p>Three-lane segments, emergency lanes, merge and exit ramps, guardrails, distance markings, and speed-control assets.</p></article>
          <article><span>Site-specific</span><h3>Surveyed partner routes</h3><p>Road width, lane configuration, landmark placement, and observed changes were documented before geographic reconstruction.</p></article>
        </div>
      </section>

      <section class="translation">
        <div class="shell translation__inner">
          <div><p class="kicker">Research value</p><h2>The deliverable was not a render. It was an experimental substrate.</h2></div>
          <div class="value-list">
            <p><span>Traceability</span>Connect virtual road elements back to surveyed geography and documented road conditions.</p>
            <p><span>Repeatability</span>Allow teams to reconstruct comparable conditions across virtual-driving evaluations.</p>
            <p><span>Configurability</span>Vary environmental and traffic layers without rebuilding the base road network.</p>
            <p><span>Extensibility</span>Support later HMI, driver-behavior, and ADAS test scenarios on shared infrastructure.</p>
          </div>
        </div>
      </section>

      <section class="shell role-section">
        <div><p class="kicker">My contribution</p><h2>Leading coordination across field evidence, models, and experimental use</h2></div>
        <div class="role-grid"><article><strong>Scope</strong><p>Translated a large, ambiguous real-world site into a tractable modeling and validation plan.</p></article><article><strong>System</strong><p>Defined the modular scene logic connecting roads, traffic facilities, environmental layers, and ADAS-ready movement logic.</p></article><article><strong>Delivery</strong><p>Coordinated team progress and asset handoff so independently produced components formed one usable environment.</p></article></div>
      </section>

      <section class="disclosure"><div class="shell disclosure__inner"><strong>Public research summary</strong><p>The final simulator experience, partner-specific routes, detailed geographic references, internal data, and restricted deliverables are intentionally omitted. The system architecture diagram is included with the project lead’s approval; abstract visuals replace confidential simulator screenshots.</p></div></section>
    </article>

    <footer class="footer shell"><p>Interested in this research?</p><a href="mailto:bhannzhang@gmail.com">bhannzhang@gmail.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const architectureDiagram = `${import.meta.env.BASE_URL}images/projects/project4.jpg`
const layers = [
  { title: 'Weather', description: 'Sky and atmospheric conditions for environmental variation.' },
  { title: 'Lighting', description: 'Illumination states that shape visibility and perception.' },
  { title: 'Traffic actors', description: 'Vehicles and other participants needed for scenario composition.' },
  { title: 'Road facilities', description: 'Signals, signs, barriers, crossings, and supporting objects.' },
  { title: 'Road system', description: 'Surface geometry, markings, and a separate movement-logic layer for vehicle and ADAS behavior.' },
]
</script>

<style lang="scss" scoped>
.case-study { --mint:#74e2c1; --mint-soft:#caffef; min-height:100vh; color:#f4faf8; background:radial-gradient(circle at 82% 7%,rgba(21,124,110,.2),transparent 32rem),#091011; }
.shell,.topbar{width:min(1120px,calc(100% - 3rem));margin:0 auto}.topbar{min-height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:700}.back-link{color:#9ca8a5;font-size:.9rem}.back-link:hover{color:#fff}.hero{padding:7rem 0 5rem}.eyebrow,.kicker{color:var(--mint);font-size:.75rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}h1{max-width:1050px;margin:1.2rem 0 1.5rem;font-size:clamp(2.7rem,6.2vw,5.6rem);line-height:1;letter-spacing:-.055em}h2{margin-top:.75rem;font-size:clamp(1.8rem,3.5vw,3rem);line-height:1.1;letter-spacing:-.035em}.lede{max-width:830px;color:#b9c6c2;font-size:clamp(1.08rem,2vw,1.35rem);line-height:1.7}.chips{display:flex;flex-wrap:wrap;gap:.6rem;margin:2.1rem 0 3rem}.chips span{padding:.55rem .85rem;border:1px solid rgba(116,226,193,.35);border-radius:999px;color:var(--mint-soft);font-size:.78rem}
.map-visual{position:relative;aspect-ratio:16/8.5;overflow:hidden;border:1px solid rgba(116,226,193,.18);border-radius:1.25rem;background:linear-gradient(145deg,#0f2929,#11151a)}.map-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(116,226,193,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(116,226,193,.08) 1px,transparent 1px);background-size:72px 72px}.route{position:absolute;height:70px;border:2px dashed rgba(202,255,239,.64);border-left:0;border-right:0;transform-origin:center;background:#183435}.route-a{width:120%;left:-10%;top:45%;transform:rotate(-12deg)}.route-b{width:75%;left:-5%;top:25%;transform:rotate(54deg)}.route-c{width:75%;right:-10%;top:30%;transform:rotate(-52deg)}.point{position:absolute;width:13px;height:13px;border-radius:50%;background:var(--mint);box-shadow:0 0 18px var(--mint)}.point-1{left:17%;top:58%}.point-2{left:32%;top:38%}.point-3{left:47%;top:47%}.point-4{left:62%;top:58%}.point-5{left:74%;top:40%}.point-6{left:83%;top:30%}.point-7{left:90%;top:20%}.map-label{position:absolute;left:2.5rem;bottom:2.5rem;display:flex;flex-direction:column;gap:.45rem;max-width:410px}.map-label small,.coverage small{color:#8eadA5;text-transform:uppercase;letter-spacing:.14em}.map-label strong{font-size:1.25rem}.coverage{position:absolute;right:2.5rem;top:2.5rem;padding:1rem 1.2rem;display:flex;flex-direction:column;gap:.35rem;border:1px solid rgba(116,226,193,.35);border-radius:.85rem;background:rgba(6,22,22,.78)}.coverage strong{font-size:1.55rem}
.two-column,.coverage-section,.translation__inner,.role-section{padding:6rem 0;display:grid;grid-template-columns:.85fr 1.15fr;gap:clamp(3rem,8vw,7rem);border-top:1px solid rgba(255,255,255,.1)}.prose{color:#aebbb7;line-height:1.8}.prose p+p{margin-top:1.25rem}.metrics-band{padding:3rem 0;background:#dff4ed;color:#10231f}.metric-grid{display:grid;grid-template-columns:repeat(4,1fr)}.metric-grid div{min-height:140px;padding:1.2rem;display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid rgba(16,35,31,.15)}.metric-grid div:last-child{border-right:0}.metric-grid strong{font-size:clamp(1.45rem,2.5vw,2.35rem);letter-spacing:-.05em}.metric-grid span{color:#536c65;font-size:.8rem;line-height:1.5}.workflow{padding:6rem 0}.steps{margin-top:3rem;list-style:none;display:grid;grid-template-columns:repeat(5,1fr)}.steps li{min-height:270px;padding:1.25rem;border-top:1px solid #357768;border-right:1px solid rgba(255,255,255,.08)}.steps span,.layers span{color:var(--mint);font:600 .8rem var(--font-mono)}.steps h3{margin:2.7rem 0 .6rem;font-size:1rem}.steps p,.layers p,.road-types p,.role-grid p{color:#96a49f;font-size:.85rem;line-height:1.65}
.architecture{padding:6rem 0;background:#111a1b}.architecture__inner{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(3rem,7vw,6rem)}.architecture .prose{margin-top:1.5rem}.layers{border-top:1px solid #357768}.layers article{padding:1.15rem 0;display:grid;grid-template-columns:4rem 1fr;gap:1rem;border-bottom:1px solid rgba(255,255,255,.1)}.layers h3{margin-bottom:.4rem}.road-types{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.road-types article{min-height:250px;padding:1.4rem;border:1px solid rgba(116,226,193,.18);border-radius:1rem;background:#0e1819}.road-types span{color:var(--mint);font-size:.72rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase}.road-types h3{margin:3rem 0 .75rem;font-size:1.15rem}.translation{background:#dff4ed;color:#10231f}.translation__inner{border:0}.translation .kicker{color:#267362}.value-list p{padding:1rem 0;display:grid;grid-template-columns:7rem 1fr;gap:1rem;border-top:1px solid rgba(16,35,31,.16);color:#48635c;line-height:1.65}.value-list span{color:#166b59;font-size:.76rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.role-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem}.role-grid article{padding:1.35rem;border-top:1px solid #357768;background:#0d1718}.role-grid strong{color:var(--mint-soft)}.role-grid p{margin-top:2rem}.disclosure{padding:2.5rem 0;background:#121a1b}.disclosure__inner{display:grid;grid-template-columns:.45fr 1.55fr;gap:2rem}.disclosure strong{color:var(--mint-soft)}.disclosure p{color:#9ca9a5;line-height:1.65}.footer{padding:4rem 0;display:grid;grid-template-columns:1fr 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.footer>p{color:#84918d}.footer>a:not(.back-link){font-size:clamp(1.4rem,3vw,2.4rem);font-weight:700;letter-spacing:-.04em}.footer .back-link{grid-column:2}
.system-architecture{padding:6rem 0;border-top:1px solid rgba(255,255,255,.1)}.system-architecture__heading{display:grid;grid-template-columns:.8fr 1.2fr;column-gap:clamp(3rem,8vw,7rem);margin-bottom:2.5rem}.system-architecture__heading .kicker{grid-column:1}.system-architecture__heading h2{grid-column:1}.system-architecture__heading .prose{grid-column:2;grid-row:1 / span 2}.system-architecture figure{padding:1rem;border:1px solid rgba(116,226,193,.18);border-radius:1rem;background:#f4f1f7}.system-architecture img{display:block;width:100%;border-radius:.55rem}.system-architecture figcaption{padding:.85rem .35rem 0;color:#74827e;font-size:.8rem}.system-architecture figcaption strong{color:#334b45}
@media(max-width:820px){.shell,.topbar{width:min(100% - 2rem,1120px)}.topbar{min-height:68px}.hero{padding:4.5rem 0 3.5rem}.map-visual{aspect-ratio:4/3}.map-label{left:1rem;bottom:1rem;max-width:65%}.map-label strong{font-size:.9rem}.coverage{right:1rem;top:1rem;padding:.7rem}.coverage strong{font-size:1rem}.two-column,.coverage-section,.translation__inner,.role-section,.architecture__inner{padding:4rem 0;grid-template-columns:1fr;gap:2rem}.metric-grid,.steps,.road-types,.role-grid{grid-template-columns:1fr}.metric-grid div{min-height:105px;border-right:0;border-bottom:1px solid rgba(16,35,31,.15)}.metric-grid div:last-child{border-bottom:0}.workflow,.architecture{padding:4rem 0}.steps li{min-height:auto;border-right:0}.steps h3{margin-top:1.25rem}.road-types article{min-height:200px}.disclosure__inner,.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}
@media(max-width:820px){.system-architecture{padding:4rem 0}.system-architecture__heading{grid-template-columns:1fr;gap:1.25rem}.system-architecture__heading .kicker,.system-architecture__heading h2,.system-architecture__heading .prose{grid-column:1;grid-row:auto}.system-architecture figure{padding:.55rem}.system-architecture figcaption{font-size:.72rem}}
</style>
