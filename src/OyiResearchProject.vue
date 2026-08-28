<template>
  <main class="case-study">
    <header class="topbar">
      <a class="brand" :href="homeUrl">Bihan Zhang</a>
      <a class="back-link" :href="`${homeUrl}#research-projects`"><span aria-hidden="true">&larr;</span> Back to research projects</a>
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
        <div><p class="kicker">Research question</p><h2>What makes a conversational system feel like a social presence rather than a voice interface?</h2></div>
        <div class="prose"><p>OYI extends my earlier research on legible multimodal communication from autonomous mobility toward embodied social interaction. The project asks how a small physical robot can establish continuity across repeated conversations without relying on human-like appearance.</p><p>The study focuses on embodiment, conversational memory, structured guidance, and light as an additional social signal—not on diagnosing emotion or replacing professional mental-health care.</p></div>
      </section>

      <section class="metrics-band"><div class="shell metric-grid"><div><strong>32</strong><span>participants</span></div><div><strong>5 days</strong><span>longitudinal interaction</span></div><div><strong>16 + 16</strong><span>experimental and control groups</span></div><div><strong>Mixed methods</strong><span>scales, interaction records, and interviews</span></div></div></section>

      <section class="shell implementation">
        <div class="section-intro"><p class="kicker">Embodied implementation</p><h2>Built as a working research artifact</h2><p class="prose">I developed the form, physical enclosure, interaction behavior, and study protocol as one connected research system. The articulated arms are part of the physical construction; the evaluated interaction concentrated on voice dialogue and ambient light feedback.</p></div>
        <div class="evidence-grid">
          <figure><img :src="asset('physical-prototype.jpg')" alt="Front view of the 3D-printed OYI physical prototype" /><figcaption><strong>Physical form.</strong> A 3D-printed body with a black face panel and articulated arm joints.</figcaption></figure>
          <figure><img :src="asset('light-feedback.jpg')" alt="OYI physical prototype illuminated with green ambient light" /><figcaption><strong>Multimodal feedback.</strong> Internal RGB lighting turns the body into an ambient social signal.</figcaption></figure>
        </div>
      </section>

      <section class="system-section"><div class="shell system-grid">
        <div><p class="kicker">System architecture</p><h2>Conversation, continuity, and embodiment</h2></div>
        <div class="system-flow">
          <article><span>01</span><strong>Voice dialogue</strong><p>Speech input and model-enabled conversational response</p></article>
          <i aria-hidden="true">→</i>
          <article><span>02</span><strong>Interaction logic</strong><p>Persona configuration, structured prompts, and dialogue guidance</p></article>
          <i aria-hidden="true">→</i>
          <article><span>03</span><strong>Persistent memory</strong><p>Session continuity, user profile, and longitudinal context</p></article>
          <i aria-hidden="true">→</i>
          <article><span>04</span><strong>Embodied output</strong><p>Voice response and coordinated ambient RGB light</p></article>
        </div>
      </div></section>

      <section class="shell design-language">
        <div class="section-intro"><p class="kicker">Design development</p><h2>From a friendly non-humanoid form to a research prototype</h2><p class="prose">The visual language explored a rounded body, cat-like cues, expressive face states, and movable arms. Website text describes only implemented or clearly labeled concept features.</p></div>
        <div class="design-crops">
          <figure class="design-crop"><svg viewBox="820 70 860 980" preserveAspectRatio="xMidYMid slice"><image :href="asset('design-development.jpg')" width="3368" height="1190" /></svg><figcaption>Form exploration</figcaption></figure>
          <figure class="design-crop design-crop--render"><img :src="asset('hero-clean-v2.png')" alt="Refined OYI companion robot concept" /><figcaption>Refined concept</figcaption></figure>
        </div>
      </section>

      <section class="demo-section"><div class="shell demo-grid">
        <div><p class="kicker">Interaction demo</p><h2>Mandarin voice dialogue with responsive light feedback</h2><p class="prose">The original interaction was developed and studied in Mandarin. The video shows the implemented sequence: the user speaks, OYI responds, and the body light changes as an additional interaction cue.</p></div>
        <figure class="video-frame"><video controls playsinline preload="metadata" :poster="asset('light-feedback.jpg')"><source :src="media('oyi-interaction-demo.mp4')" type="video/mp4" />Your browser does not support embedded video.</video><figcaption>Functional OYI prototype interaction demo</figcaption></figure>
      </div></section>

      <section class="shell study">
        <div><p class="kicker">Study design</p><h2>Repeated interaction rather than a one-time usability test</h2></div>
        <div class="study-grid">
          <article><span>Experimental condition</span><h3>Structured social interaction</h3><p>Guided dialogue, conversational continuity, active prompting, and coordinated light feedback.</p></article>
          <article><span>Control condition</span><h3>General voice interaction</h3><p>Basic voice conversation and general daily topics without the full structured interaction design.</p></article>
          <article><span>Evaluation</span><h3>Experience across five days</h3><p>Pre/post measures, post-study scales, interaction records, and semi-structured interviews.</p></article>
        </div>
      </section>

      <section class="analysis"><div class="shell analysis__inner"><div><p class="kicker">Analytical focus</p><h2>From therapeutic claims toward social HRI questions</h2></div><div class="analysis-list"><p><span>Companionship</span>When does a robot move from being perceived as a device to a social partner?</p><p><span>Continuity</span>How does remembered context affect relationship-building across repeated sessions?</p><p><span>Embodiment</span>What does a physical body add beyond a general conversational AI interface?</p><p><span>Multimodality</span>How do voice and ambient light work together without making unsupported emotion-recognition claims?</p></div></div></section>

      <section class="disclosure"><div class="shell disclosure__inner"><strong>Evidence boundary</strong><p>This page presents an independent completed study and distinguishes concept imagery from the functional prototype. OYI used model-enabled dialogue configuration and persistent memory; it does not claim foundation-model training, automated camera-based emotion recognition, clinical diagnosis, or therapeutic efficacy.</p></div></section>

      <section class="limitation"><div class="shell limitation__inner"><div><p class="kicker">Limitation</p><h2>Beyond one-to-one interaction</h2></div><p>This study focused on one-to-one interaction between a single participant and OYI. Future work could extend the research to multi-user, single-robot settings and examine how shared attention, turn-taking, and conversational roles shape the relationship.</p></div></section>
    </article>

    <footer class="footer shell"><p>Interested in this research?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
const homeUrl = import.meta.env.BASE_URL
const asset = (filename) => `${import.meta.env.BASE_URL}images/research/oyi/${filename}`
const media = (filename) => `${import.meta.env.BASE_URL}media/research/oyi/${filename}`
</script>

<style lang="scss" scoped>
.case-study{--mint:#8ef3c5;--lilac:#c8b7ff;--ink:#13111b;min-height:100vh;color:#f8f7fb;background:radial-gradient(circle at 78% 6%,rgba(79,54,145,.3),transparent 34rem),#0b0a0f}.shell,.topbar{width:min(1120px,calc(100% - 3rem));margin:0 auto}.topbar{min-height:80px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.1)}.brand{font-weight:700}.back-link{color:#aaa5b4;font-size:.9rem}.back-link:hover{color:white}.eyebrow,.kicker{color:var(--mint);font-size:.72rem;font-weight:700;letter-spacing:.13em;text-transform:uppercase}h1{margin:1.15rem 0 1.4rem;font-size:clamp(2.7rem,6vw,5.5rem);line-height:.99;letter-spacing:-.055em}h2{margin-top:.7rem;font-size:clamp(1.8rem,3.6vw,3.1rem);line-height:1.1;letter-spacing:-.04em}.lede{max-width:760px;color:#c2bdca;font-size:clamp(1.05rem,2vw,1.3rem);line-height:1.7}.prose{color:#aaa4b2;line-height:1.8}.prose p+p{margin-top:1.2rem}.hero{padding:7rem 0 6rem;display:grid;grid-template-columns:.95fr 1.05fr;gap:clamp(2rem,6vw,5rem);align-items:center}.chips{display:flex;flex-wrap:wrap;gap:.55rem;margin-top:2rem}.chips span{padding:.5rem .75rem;border:1px solid rgba(142,243,197,.28);border-radius:999px;color:#c7ffe6;font-size:.72rem}.hero__visual{aspect-ratio:4/3;margin:0;overflow:hidden;border-radius:1.4rem;background:#15131b;position:relative}.hero__visual img{width:100%;height:100%;display:block;object-fit:cover}figcaption{color:#918b99;font-size:.76rem;line-height:1.5}.hero__visual figcaption{position:absolute;right:1rem;bottom:1rem;padding:.45rem .65rem;border-radius:.5rem;background:rgba(11,10,15,.78);color:#ddd8e3}.two-column,.implementation,.design-language,.study{padding:6rem 0;border-top:1px solid rgba(255,255,255,.1)}.two-column{display:grid;grid-template-columns:.8fr 1.2fr;gap:clamp(3rem,8vw,7rem)}.metrics-band{padding:3rem 0;background:#ede8f8;color:var(--ink)}.metric-grid{display:grid;grid-template-columns:repeat(4,1fr)}.metric-grid div{min-height:135px;padding:1.15rem;display:flex;flex-direction:column;justify-content:space-between;border-right:1px solid rgba(19,17,27,.14)}.metric-grid div:last-child{border-right:0}.metric-grid strong{font-size:clamp(1.4rem,3vw,2.35rem);letter-spacing:-.05em}.metric-grid span{color:#625b6d;font-size:.78rem}.section-intro{max-width:820px}.section-intro .prose{margin-top:1.2rem}.evidence-grid{margin-top:3.5rem;display:grid;grid-template-columns:1fr 1fr;gap:1rem}.evidence-grid figure{margin:0;padding:.65rem;border-radius:1rem;background:#15131b}.evidence-grid img{width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:.65rem}.evidence-grid figcaption{padding:.75rem .35rem .35rem}.evidence-grid strong{color:#e5e0e9}.system-section{padding:6rem 0;background:#17131d}.system-grid{display:grid;grid-template-columns:.55fr 1.45fr;gap:clamp(3rem,7vw,6rem)}.system-flow{display:grid;grid-template-columns:1fr auto 1fr auto 1fr auto 1fr;gap:.5rem;align-items:center}.system-flow article{min-height:210px;padding:1rem;display:flex;flex-direction:column;border-top:2px solid var(--mint);background:#0f0d14}.system-flow span{color:var(--mint);font:600 .76rem var(--font-mono)}.system-flow strong{margin:2.2rem 0 .7rem}.system-flow p{color:#948e9b;font-size:.78rem;line-height:1.55}.system-flow i{color:#6d6674;font-style:normal}.design-crops{margin-top:3rem;display:grid;grid-template-columns:1fr 1.2fr;gap:1rem}.design-crop{height:390px;border-radius:1rem;position:relative;overflow:hidden}.design-crop--render{height:390px}.demo-section{padding:6rem 0;background:#ece7f7;color:var(--ink)}.demo-grid{display:grid;grid-template-columns:.7fr 1.3fr;gap:clamp(3rem,7vw,6rem);align-items:start}.demo-section .kicker{color:#6547ba}.demo-section .prose{margin-top:1.2rem;color:#625b6d}.demo-note{margin-top:1.5rem;padding-top:1rem;border-top:1px solid rgba(19,17,27,.16);color:#766e80;font-size:.82rem;line-height:1.6}.video-frame{margin:0;padding:.65rem;border-radius:1rem;background:#111016}.video-frame video{width:100%;max-height:650px;display:block;border-radius:.65rem;background:#0b0a0f}.video-frame video::cue{font-size:70%;background:rgba(9,8,14,.82);color:#fff}.video-frame figcaption{padding:.7rem .35rem .3rem;color:#aca5b5}.study{display:grid;grid-template-columns:.55fr 1.45fr;gap:clamp(3rem,7vw,6rem)}.study-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:.8rem}.study-grid article{min-height:285px;padding:1.2rem;border:1px solid rgba(200,183,255,.2);border-radius:1rem;background:#15121a}.study-grid span{color:var(--lilac);font-size:.7rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.study-grid h3{margin:2.2rem 0 .8rem}.study-grid p{color:#9f98a7;font-size:.84rem;line-height:1.65}.analysis{padding:6rem 0;background:#17131d}.analysis__inner{display:grid;grid-template-columns:.65fr 1.35fr;gap:clamp(3rem,7vw,6rem)}.analysis-list p{padding:1rem 0;display:grid;grid-template-columns:8rem 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1);color:#aaa4b2;line-height:1.65}.analysis-list span{color:#d9d0f5;font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase}.disclosure{padding:2.6rem 0;background:#0f0d14}.disclosure__inner{display:grid;grid-template-columns:.4fr 1.6fr;gap:2rem}.disclosure strong{color:#d9d0f5}.disclosure p{color:#9d96a4;line-height:1.65}.footer{padding:4rem 0;display:grid;grid-template-columns:1fr 1fr;gap:1rem;border-top:1px solid rgba(255,255,255,.1)}.footer>p{color:#85808c}.footer>a:not(.back-link){font-size:clamp(1.3rem,3vw,2.3rem);font-weight:700;letter-spacing:-.04em}.footer .back-link{grid-column:2}
.design-crop{margin:0;background:#f3f3f3}.design-crop>svg,.design-crop>img{width:100%;height:100%;display:block;object-fit:cover}.design-crop>figcaption{position:absolute;left:.8rem;bottom:.8rem;padding:.4rem .55rem;border-radius:.4rem;background:rgba(11,10,15,.78);color:#eeeaf2;font-size:.7rem}
@media(max-width:900px){.shell,.topbar{width:min(100% - 2rem,1120px)}.topbar{min-height:68px}.hero,.two-column,.system-grid,.demo-grid,.study,.analysis__inner{grid-template-columns:1fr}.hero{padding:5rem 0 4rem}.two-column,.implementation,.design-language,.study{padding:4rem 0}.metric-grid,.evidence-grid,.study-grid{grid-template-columns:1fr}.metric-grid div{min-height:100px;border-right:0;border-bottom:1px solid rgba(19,17,27,.14)}.system-section,.demo-section,.analysis{padding:4rem 0}.system-flow{grid-template-columns:1fr}.system-flow i{transform:rotate(90deg);text-align:center}.system-flow article{min-height:auto}.design-crops{grid-template-columns:1fr}.design-crop,.design-crop--render{height:320px}.disclosure__inner,.footer{grid-template-columns:1fr}.footer .back-link{grid-column:auto}}
.limitation{padding:6rem 0;background:#17131d}.limitation__inner{display:grid;grid-template-columns:.65fr 1.35fr;gap:clamp(3rem,7vw,6rem);align-items:start}.limitation__inner p:last-child{margin:0;color:#aaa4b2;line-height:1.8}
@media(max-width:900px){.limitation{padding:4rem 0}.limitation__inner{grid-template-columns:1fr}}
</style>
