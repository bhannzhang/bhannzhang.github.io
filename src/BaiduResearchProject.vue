<template>
  <main class="case-study">
    <ResearchPageTopbar :home-url="homeUrl" />

    <article>
      <section class="hero shell">
        <p class="eyebrow">Industry–University Collaboration · Student Project Lead</p>
        <h1>Automotive HMI Research: From Benchmarking to User Evaluation</h1>
        <p class="lede">
          An industry–university research collaboration with Baidu Apollo exploring how visual interface design
          influences information comprehension, interaction usability, and driver workload.
        </p>
        <div class="chips" aria-label="Project metadata">
          <span>Automotive HMI</span><span>Mixed-Method Research</span><span>Baidu Apollo Collaboration</span><span>2019</span>
        </div>
        <BaiduEvidenceFigure :figure="figures.hero" size="hero" priority />
      </section>

      <section class="shell editorial-section">
        <div class="section-heading"><p class="kicker">01 · Project Context</p><h2>Understanding Automotive Interface Design Across Brands</h2></div>
        <div class="section-body prose">
          <p>This project examined how the visual design of automotive center-stack interfaces supports information comprehension and interaction during driving. Conducted as part of an industry–university collaboration with Baidu Apollo, the research investigated interface layout, typography, color, and iconography across different vehicle systems.</p>
          <p>The work combined cross-brand interface analysis with user research and simulator-based evaluation, with the broader goal of informing automotive HMI design guidelines.</p>
        </div>
        <BaiduEvidenceFigure class="section-figure" :figure="figures.context" size="wide" />
      </section>

      <section class="section-surface">
        <div class="shell editorial-section">
          <div class="section-heading"><p class="kicker">02 · Research Approach</p><h2>Connecting Interface Patterns with User Experience</h2></div>
          <div class="section-body prose">
            <p>The research brought together three complementary perspectives: comparative analysis of existing vehicle interfaces, qualitative investigation of drivers’ experiences, and controlled evaluation of selected interface variables.</p>
            <p>Together, these methods allowed the team to examine both the design characteristics observed across products and the human factors relevant to their use.</p>
          </div>
          <ol class="method-strip" aria-label="Three complementary research methods">
            <li><span>01</span><div><h3>Cross-Brand Benchmarking</h3><p>Comparative analysis of interface elements.</p></div></li>
            <li><span>02</span><div><h3>Qualitative User Research</h3><p>Focus groups and interviews.</p></div></li>
            <li><span>03</span><div><h3>Experimental Evaluation</h3><p>Simulator-based testing of interface design variables.</p></div></li>
          </ol>
        </div>
      </section>

      <section class="shell benchmark-section">
        <div class="section-heading"><p class="kicker">03 · Cross-Brand Benchmarking</p><h2>Deconstructing Automotive Interfaces into Comparable Elements</h2></div>
        <div class="section-body prose">
          <p>The benchmarking research documented interface characteristics across multiple vehicle systems, organizing observations by functional contexts such as navigation, multimedia, vehicle settings, and voice interaction.</p>
          <p>Interfaces were examined through four main dimensions: layout patterns, typography, color usage, and iconography. This structure helped identify recurring visual conventions and differences across products.</p>
        </div>
        <div class="evidence-block">
          <div class="evidence-copy"><span>A</span><h3>Layout Patterns</h3><p>The analysis categorized common center-stack layouts, including card-based, list-based, and divider-based arrangements, and compared their occurrence across major vehicle functions.</p><small>Source material · original benchmarking report, approximately pp. 3–8</small></div>
          <BaiduEvidenceFigure :figure="figures.layout" size="wide" />
        </div>
        <div class="evidence-block evidence-block--typography">
          <div class="evidence-copy"><span>B</span><h3>Typography — Title Size Distribution Across Interface Functions</h3><p>To examine typographic hierarchy across automotive center-stack interfaces, primary and secondary title sizes were compared across five functional contexts: Home, Navigation, Multimedia, Vehicle Settings, and Voice Control.</p><small>Source material · original benchmarking report, approximately pp. 9–20</small></div>
          <div class="typography-analysis">
            <figure class="typography-figure">
              <a :href="figures.primaryTypography.src" target="_blank" rel="noopener noreferrer" aria-label="Open Figure A at full resolution">
                <img :src="figures.primaryTypography.src" :alt="figures.primaryTypography.alt" loading="lazy" />
                <span>Open full-resolution figure ↗</span>
              </a>
              <figcaption><strong>Figure A — Primary Title Sizes.</strong> Primary title font-size distribution across five automotive interface functions, based on historical cross-brand benchmarking records.</figcaption>
            </figure>
            <figure class="typography-figure">
              <a :href="figures.secondaryTypography.src" target="_blank" rel="noopener noreferrer" aria-label="Open Figure B at full resolution">
                <img :src="figures.secondaryTypography.src" :alt="figures.secondaryTypography.alt" loading="lazy" />
                <span>Open full-resolution figure ↗</span>
              </a>
              <figcaption><strong>Figure B — Secondary Title Sizes.</strong> Secondary title font-size distribution across the same five interface functions.</figcaption>
            </figure>
            <section class="typography-findings" aria-labelledby="typography-findings-title">
              <div><p class="mini-label">Key Findings</p><h4 id="typography-findings-title">Typography Hierarchy</h4></div>
              <p class="typography-findings__note">Descriptive patterns from the historical records; recurring values indicate frequency in the sample, not design quality or performance.</p>
              <div class="table-scroll">
                <table>
                  <thead><tr><th>Interface function</th><th>Primary title</th><th>Secondary title</th></tr></thead>
                  <tbody>
                    <tr><th>Home</th><td>Broad variation; no single concentrated range</td><td>24 pt frequently observed</td></tr>
                    <tr><th>Navigation</th><td>Commonly around 36–40 pt</td><td>24 pt frequently observed</td></tr>
                    <tr><th>Multimedia</th><td>Several observations around 20–26 pt; larger values also present</td><td>20 pt appears repeatedly; distribution varies</td></tr>
                    <tr><th>Vehicle Settings</th><td>20 pt appears frequently; substantial variation and large outliers</td><td>14 pt and 24 pt both appear repeatedly; no single dominant range</td></tr>
                    <tr><th>Voice Control</th><td>Commonly around 28–32 pt</td><td>Commonly around 24–32 pt</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="typography-conclusion">Title-size conventions varied across interface functions and vehicle systems. While some functional contexts exhibited recurring typographic sizes, others showed considerable variation, suggesting that a single universal title-size convention was not evident in this historical sample.</p>
            </section>
            <section class="character-length-analysis" aria-labelledby="character-length-title">
              <div class="character-length-analysis__intro">
                <p class="mini-label">Character Length</p>
                <h4 id="character-length-title">Character Length Distribution Across Interface Functions</h4>
                <p>Beyond font size, the length of textual information is another important dimension of automotive interface typography. This analysis examined the distribution of recorded character lengths across five interface contexts: Home, Navigation, Multimedia, Vehicle Settings, and Voice Control.</p>
              </div>
              <figure class="typography-figure character-length-figure">
                <h5>Character Length Distribution Across Five Automotive Interface Functions</h5>
                <a :href="figures.characterLengthSvg.src" target="_blank" rel="noopener noreferrer" aria-label="Open character-length distribution figure at full resolution">
                  <picture>
                    <source :srcset="figures.characterLengthSvg.src" type="image/svg+xml" />
                    <img :src="figures.characterLengthPng.src" :alt="figures.characterLengthSvg.alt" loading="lazy" />
                  </picture>
                  <span>Open full-resolution figure ↗</span>
                </a>
                <figcaption>Distribution of recorded text lengths across five automotive interface functions. Each dot represents one non-zero historical observation, with repeated values stacked vertically. Short vertical markers indicate the median character length within each function.</figcaption>
              </figure>
              <section class="typography-findings character-length-findings" aria-labelledby="character-length-findings-title">
                <div><p class="mini-label">Descriptive Findings</p><h4 id="character-length-findings-title">Key Findings — Character Length</h4></div>
                <p class="typography-findings__note">These observations describe the retained historical dataset; they do not define optimal interface design.</p>
                <dl class="character-length-findings__grid">
                  <div><dt>Home</dt><dd>Character lengths showed considerable variation across the recorded home-screen observations, rather than clustering around a single uniform length.</dd></div>
                  <div><dt>Navigation</dt><dd>Most first-level navigation labels were relatively short, while longer secondary text entries were also documented. Some recorded navigation text reached 34 characters.</dd></div>
                  <div><dt>Multimedia</dt><dd>Multimedia interfaces exhibited a mixture of short labels and longer textual content, reflecting variation in the amount of information displayed.</dd></div>
                  <div><dt>Vehicle Settings</dt><dd>Vehicle-settings interfaces showed a broad range of character lengths, including longer records reaching 34 characters.</dd></div>
                  <div><dt>Voice Control</dt><dd>Voice-control interfaces contained both short and extended text entries. The historical report documented a maximum observed character length of 23 characters.</dd></div>
                </dl>
                <p class="typography-conclusion">Character length varied across automotive interface functions, reflecting differences in information content and presentation. While shorter labels were common in several functional contexts, longer text entries also appeared, particularly in navigation and vehicle settings. These observations highlight the need to consider text length alongside font size and visual hierarchy when analyzing automotive HMI typography.</p>
                <p class="character-length-method">Descriptive visualization reconstructed from retained historical benchmarking records. Blank and zero-marked entries were excluded as unverified observations.</p>
              </section>
            </section>
          </div>
        </div>
        <div class="evidence-block evidence-block--color">
          <div class="evidence-copy"><span>C</span><h3>Color Distribution Across Automotive Interface Functions</h3><p>The benchmarking study examined color usage across five automotive interface contexts: Home, Navigation, Multimedia, Vehicle Settings, and Voice Control.</p><p>Two categories of color usage were compared: page theme colors and functional indication colors. The latter included colors used for navigation or transition cues, focus indication, and operability-related feedback.</p><small>Source material · original benchmarking report, approximately pp. 21–32</small></div>
          <div class="color-analysis">
            <figure class="typography-figure color-figure">
              <h4>Page Theme vs. Functional Indication Colors</h4>
              <a :href="figures.colorDistribution.src" target="_blank" rel="noopener noreferrer" aria-label="Open color-distribution figure at full resolution">
                <img :src="figures.colorDistribution.src" :alt="figures.colorDistribution.alt" loading="lazy" />
                <span>Open full-resolution figure ↗</span>
              </a>
              <figcaption><strong>Figure — Color Distribution Across Interface Functions.</strong> Comparative visualization of page theme and functional indication colors across five automotive HMI contexts, reconstructed from historical benchmarking documentation.<br />Hue represents the observed color family. Radial displacement is used only to reduce marker overlap and does not encode a measured variable.</figcaption>
            </figure>
            <section class="typography-findings color-findings" aria-labelledby="color-findings-title">
              <div><p class="mini-label">Descriptive Findings</p><h4 id="color-findings-title">Key Findings — Color Usage</h4></div>
              <p class="typography-findings__note">The reconstructed figure supports descriptive comparison only; individual marker locations and sample counts have not been independently verified.</p>
              <ol class="color-findings__list">
                <li><span>01 · Recurring Color Families</span><p>Historical observations included recurring cool and warm hue families across different automotive interface functions, although the balance and distribution varied between contexts.</p></li>
                <li><span>02 · Color Roles</span><p>Page theme colors and functional indication colors served different interface purposes. The latter were associated with interaction cues such as navigation, focus, and operability feedback.</p></li>
                <li><span>03 · Cross-Context Variation</span><p>The observed color distributions were not identical across the five functional contexts, suggesting variation in how existing automotive interfaces applied color.</p></li>
              </ol>
              <p class="typography-conclusion">Color usage across the sampled automotive interfaces exhibited recurring hue families as well as differences between functional contexts and color roles. Distinguishing page theme colors from functional indication colors provided a more structured way to document visual conventions and interaction-related color cues.</p>
              <p class="character-length-method">Descriptive analysis based on retained historical benchmarking materials. The visualization does not establish the usability or effectiveness of individual color choices.</p>
            </section>
          </div>
        </div>
        <div class="evidence-block evidence-block--iconography">
          <div class="evidence-copy"><span>D</span><h3>Iconography Across Automotive Interface Functions</h3><p>The benchmarking study examined iconography across automotive center-stack interfaces, focusing on three dimensions: visual style, relative dimensions, and spacing conventions. Comparing these characteristics across interface functions helped document recurring design patterns and variations in icon presentation.</p><small>Source material · original benchmarking report, approximately pp. 33–46</small></div>
          <div class="iconography-analysis">
            <section class="iconography-part" aria-labelledby="icon-type-title">
              <div class="iconography-part__intro"><p class="mini-label">Part A</p><h4 id="icon-type-title">A. Icon Type Distribution</h4><p>Icons were classified into three visual categories: linear (outline), filled (solid), and hybrid (combined outline and filled elements). Their distribution was compared across Navigation, Multimedia, Vehicle Settings, Voice Control, and Home interfaces.</p></div>
              <figure class="typography-figure iconography-figure">
                <a :href="figures.iconTypeSvg.src" target="_blank" rel="noopener noreferrer" aria-label="Open icon-type distribution figure at full resolution">
                  <picture><source :srcset="figures.iconTypeSvg.src" type="image/svg+xml" /><img :src="figures.iconTypePng.src" :alt="figures.iconTypeSvg.alt" loading="lazy" /></picture>
                  <span>Open full-resolution figure ↗</span>
                </a>
                <figcaption><strong>Figure A — Icon Type Distribution Across Automotive Interface Functions.</strong> Distribution of linear, filled, and hybrid icon styles across five automotive interface contexts. Counts for Navigation, Multimedia, Vehicle Settings, and Voice Control were reconstructed from the retained benchmarking chart; Home is presented using the available percentages.</figcaption>
              </figure>
              <section class="typography-findings iconography-findings" aria-labelledby="icon-type-findings-title">
                <div><p class="mini-label">Descriptive Statistics</p><h4 id="icon-type-findings-title">Key Findings — Icon Types</h4></div>
                <p class="typography-findings__note">Home percentages are historical rounded values; exact sample counts cannot be inferred from them.</p>
                <div class="table-scroll"><table><thead><tr><th>Interface</th><th>Linear</th><th>Filled</th><th>Hybrid</th></tr></thead><tbody><tr><th>Navigation</th><td>17 (81.0%)</td><td>2 (9.5%)</td><td>2 (9.5%)</td></tr><tr><th>Multimedia</th><td>11 (52.4%)</td><td>4 (19.0%)</td><td>6 (28.6%)</td></tr><tr><th>Vehicle Settings</th><td>15 (78.9%)</td><td>1 (5.3%)</td><td>3 (15.8%)</td></tr><tr><th>Voice Control</th><td>7 (53.8%)</td><td>1 (7.7%)</td><td>5 (38.5%)</td></tr><tr><th>Home</th><td>58%</td><td>29%</td><td>13%</td></tr></tbody></table></div>
                <p class="typography-conclusion">Linear icons represented the largest share across all five interface contexts, particularly in Navigation and Vehicle Settings. Multimedia and Voice Control showed comparatively greater use of hybrid icon styles, indicating variation in visual conventions across different interface functions.</p>
              </section>
            </section>

            <section class="iconography-part" aria-labelledby="icon-dimensions-title">
              <div class="iconography-part__intro"><p class="mini-label">Part B</p><h4 id="icon-dimensions-title">B. Icon Dimensions Across Interface Functions</h4><p>To compare icon sizes across different display formats, icon dimensions were normalized relative to the corresponding screen dimensions. Icon length was divided by screen length, while icon width was divided by screen width. This allowed the study to document relative icon dimensions across five interface contexts.</p></div>
              <figure class="typography-figure iconography-figure">
                <a :href="figures.iconDimensions.src" target="_blank" rel="noopener noreferrer" aria-label="Open normalized icon-dimensions figure at full resolution"><img :src="figures.iconDimensions.src" :alt="figures.iconDimensions.alt" loading="lazy" /><span>Open full-resolution figure ↗</span></a>
                <figcaption><strong>Figure B — Normalized Icon Dimensions.</strong> Scatter plots of normalized icon dimensions across five automotive interface functions. The horizontal axis represents icon length divided by screen length; the vertical axis represents icon width divided by screen width. Each observation represents a documented icon-size pair.</figcaption>
              </figure>
              <section class="typography-findings iconography-findings" aria-labelledby="icon-dimensions-findings-title">
                <div><p class="mini-label">Descriptive Findings</p><h4 id="icon-dimensions-findings-title">Key Findings — Icon Dimensions</h4></div>
                <p class="typography-findings__note">The normalized ratios describe relative dimensions, not absolute physical sizes or recommended design thresholds.</p>
                <ol class="color-findings__list"><li><span>01 · Smaller Relative Dimensions</span><p>Many icon observations were concentrated in the lower portions of the normalized length–width space, indicating repeated use of relatively small icon dimensions.</p></li><li><span>02 · Variation Across Functions</span><p>The distribution of normalized icon dimensions differed across interface functions, suggesting that relative icon sizing was not uniform across the sampled systems.</p></li><li><span>03 · Larger Individual Observations</span><p>Several larger normalized dimensions were also recorded, particularly along the length axis. These observations contributed to the overall variability in icon presentation.</p></li></ol>
                <p class="typography-conclusion">Icon dimensions varied across automotive interface functions, with many observations concentrated in relatively small normalized size ranges and a smaller number of larger icons. Examining length and width jointly revealed variation in both relative scale and proportions.</p>
                <p class="character-length-method">Illustrative reconstruction from historical benchmarking charts rather than the original editable dataset. Marker positions should not be interpreted as independently verified exact measurements.</p>
              </section>
            </section>

            <section class="iconography-part" aria-labelledby="icon-spacing-title">
              <div class="iconography-part__intro"><p class="mini-label">Part C</p><h4 id="icon-spacing-title">C. Icon Spacing Distribution</h4><p>Icon spacing was also compared across five automotive interface functions. The historical benchmarking records documented recurring spacing values and their frequencies, providing an overview of how icon separation varied among existing in-vehicle interfaces.</p></div>
              <figure class="typography-figure iconography-figure">
                <a :href="figures.iconSpacingSvg.src" target="_blank" rel="noopener noreferrer" aria-label="Open icon-spacing distribution figure at full resolution">
                  <picture><source :srcset="figures.iconSpacingSvg.src" type="image/svg+xml" /><img :src="figures.iconSpacingPng.src" :alt="figures.iconSpacingSvg.alt" loading="lazy" /></picture>
                  <span>Open full-resolution figure ↗</span>
                </a>
                <figcaption><strong>Figure C — Icon Spacing Distribution Across Interface Functions.</strong> Frequency profiles of recorded icon-spacing values across Navigation, Multimedia, Vehicle Settings, Voice Control, and Home interfaces. The figure was reconstructed from retained historical benchmarking charts.</figcaption>
              </figure>
              <section class="typography-findings iconography-findings" aria-labelledby="icon-spacing-findings-title">
                <div><p class="mini-label">Descriptive Findings</p><h4 id="icon-spacing-findings-title">Key Findings — Icon Spacing</h4></div>
                <p class="typography-findings__note">The original spacing scale is retained without interpreting it as pixels or physical distance.</p>
                <ol class="color-findings__list"><li><span>01 · Recurring Spacing Values</span><p>Icon-spacing records were concentrated around several recurring discrete values rather than being evenly distributed across the entire observed range.</p></li><li><span>02 · Main Observed Range</span><p>Many recorded observations appeared between 0.5 and 3, with repeated use of spacing values such as 0.5, 1, 1.5, 2, and 2.5.</p></li><li><span>03 · Variation Between Functions</span><p>Navigation, Multimedia, Vehicle Settings, Voice Control, and Home interfaces exhibited different spacing profiles, reflecting variation in documented layout practices.</p></li><li><span>04 · Less Frequent Large Values</span><p>Larger recorded spacing values were less frequent in the retained charts.</p></li></ol>
                <p class="typography-conclusion">The historical icon-spacing records showed recurring spacing values alongside differences between interface functions. These distributions describe observed layout conventions rather than validated spacing recommendations.</p>
                <p class="character-length-method">Reconstructed from a historical chart screenshot. Some densely overlapping labels and low-frequency observations could not be independently verified; precise frequency totals, medians, and modes are therefore not reported.</p>
              </section>
            </section>

            <section class="iconography-synthesis" aria-labelledby="iconography-synthesis-title"><p class="mini-label">Closing Synthesis</p><h4 id="iconography-synthesis-title">Research Synthesis — Iconography</h4><p>Across the sampled automotive interfaces, iconography varied in visual style, normalized dimensions, and spacing. Linear icon styles were widespread, while relative icon sizes and spacing conventions differed between functional contexts. Together, these observations provided a descriptive basis for examining consistency and variation in automotive HMI icon design.</p></section>
          </div>
        </div>
        <p class="integrity-note"><strong>Evidence boundary.</strong> Historical statistical inconsistencies will be checked against the original tables before any data visualization is reconstructed.</p>
      </section>

      <section class="section-surface">
        <div class="shell editorial-section qualitative-section">
          <div class="section-heading"><p class="kicker">04 · Qualitative Research</p><h2>Investigating Drivers’ Everyday Interaction Experiences</h2></div>
          <div class="section-body prose">
            <p>Focus group discussions and interview activities explored how drivers interpreted and interacted with in-vehicle interfaces. The discussion guide covered interface organization, text legibility, color-based state communication, and the recognition and operability of icons.</p>
            <p>Questions were grounded in everyday vehicle-use scenarios, including navigation, multimedia control, vehicle settings, warning messages, and transitions between concurrent functions.</p>
          </div>
          <ul class="topic-grid" aria-label="Qualitative research topics">
            <li><span>01</span>Layout and information organization</li><li><span>02</span>Typography and legibility</li><li><span>03</span>Color and interface state</li><li><span>04</span>Icon comprehension and operability</li>
          </ul>
          <BaiduEvidenceFigure class="section-figure" :figure="figures.focusGroup" size="wide" />
        </div>
      </section>

      <section class="shell simulator-section">
        <div class="section-heading"><p class="kicker">05 · Simulator-Based Evaluation</p><h2>Evaluating Typography under Driving and Stationary Conditions</h2></div>
        <div class="section-body prose">
          <p>A driving-simulator study was designed to examine how text layout parameters affected information comprehension, usability, workload, and driving performance. The experiment compared text line length, character spacing, and line spacing across three display formats and two vehicle states: driving and stationary.</p>
          <p>Participants performed a primary driving task while responding to secondary information-reading tasks on a simulated center-stack display. The protocol combined task performance, subjective assessments, and planned behavioral and physiological measurements.</p>
        </div>
        <div class="protocol-block">
          <div class="subsection-title"><span>A</span><div><p>Historical protocol</p><h3>Experimental Design</h3></div></div>
          <div class="protocol-grid">
            <article><span>Typography variables</span><ul><li>Line length</li><li>Character spacing</li><li>Line spacing</li></ul></article>
            <article><span>Driving conditions</span><ul><li>Moving</li><li>Stationary</li></ul></article>
            <article><span>Display formats</span><ul><li>Landscape</li><li>Widescreen</li><li>Portrait</li></ul></article>
            <article class="protocol-sample"><span>Planned sample</span><strong>30 participants</strong><p>Three protocol groups of 10. This is the planned design; completed-sample data has not yet been verified for public presentation.</p></article>
          </div>
        </div>
        <div class="protocol-block"><div class="subsection-title"><span>B</span><div><p>Driving scenario</p><h3>Route and Task Schedule</h3></div></div><BaiduEvidenceFigure :figure="figures.route" size="diagram" /></div>
        <div class="protocol-block"><div class="subsection-title"><span>C</span><div><p>Study setup</p><h3>Experimental Procedure</h3></div></div><BaiduEvidenceFigure :figure="figures.procedure" size="diagram" /></div>
        <div class="protocol-block"><div class="subsection-title"><span>D</span><div><p>Study materials</p><h3>Interface Stimuli</h3></div></div><BaiduEvidenceFigure :figure="figures.stimuli" size="diagram" /></div>
        <div class="protocol-block">
          <div class="subsection-title"><span>E</span><div><p>Planned measurements</p><h3>Measures</h3></div></div>
          <ul class="measure-list"><li><span>01</span>Reading comprehension and task completion</li><li><span>02</span>Usability and subjective workload</li><li><span>03</span>Eye-tracking measures</li><li><span>04</span>Physiological responses</li><li><span>05</span>Driving behavior and vehicle-control measures</li></ul>
          <p class="integrity-note">These are the protocol’s intended measurements. The page does not claim that every measure was successfully collected and analyzed.</p>
          <div class="figure-pair testing-figures"><BaiduEvidenceFigure :figure="figures.pilot" /><BaiduEvidenceFigure :figure="figures.simulator" /></div>
        </div>
      </section>

      <section class="section-surface">
        <div class="shell outputs-section">
          <div class="section-heading"><p class="kicker">06 · Research Outputs &amp; Reflection</p><h2>Translating Interface Observations into Design Knowledge</h2></div>
          <div class="section-body prose">
            <p>The project brought together descriptive interface analysis, qualitative user research, and controlled experimental methods to support the development of automotive HMI design recommendations.</p>
            <p>It provided early experience in translating visual design questions into measurable research variables and connecting interface-level decisions with driver comprehension and workload.</p>
          </div>
          <div class="outputs-grid">
            <article><span>Deliverable</span><h3>Internal white paper</h3><p>A 12,000-word synthesis of the benchmarking research and design recommendations.</p></article>
            <article><span>Communication</span><h3>Project presentation</h3><p>The research was presented at Baidu headquarters.</p></article>
            <article><span>My role</span><h3>Student Project Lead</h3><p>I organized the benchmark, developed the synthesis structure, and translated the evidence into research and design guidance.</p></article>
            <article><span>Method reflection</span><h3>From visual questions to testable variables</h3><p>The project connected interface analysis with qualitative and simulator-based research methods.</p></article>
          </div>
          <BaiduEvidenceFigure class="section-figure" :figure="figures.outputs" size="wide" />
          <p class="confidentiality-note"><strong>Public documentation.</strong> This portfolio reconstruction uses retained historical process materials and publicly shareable research documentation. The final client deliverables are not reproduced.</p>
        </div>
      </section>
    </article>

    <footer class="footer shell"><p>Interested in this research?</p><a href="mailto:Zhangbihan621@outlook.com">Zhangbihan621@outlook.com</a><a class="back-link" :href="homeUrl">Return to Bihan Zhang’s academic website</a></footer>
  </main>
</template>

<script setup>
import ResearchPageTopbar from './components/ResearchPageTopbar.vue'
import BaiduEvidenceFigure from './components/BaiduEvidenceFigure.vue'

const homeUrl = import.meta.env.BASE_URL
const projectImage = (filename) => `${homeUrl}images/projects/${filename}`
const evidenceImage = (filename) => `${homeUrl}images/research/automotive-benchmarking/${filename}`
const pendingFigure = (filename, label, caption) => ({ src: '', expectedSrc: evidenceImage(filename), label, caption })

// Add verified historical files at the expected paths, then set `src` to `expectedSrc`.
const figures = {
  hero: pendingFigure('hero-research-documentation-collage.webp', 'Figure pending — Historical research-documentation collage', 'Planned collage of retained benchmarking pages, experimental materials, and project documentation.'),
  context: { src: projectImage('project2.jpg'), label: '', alt: 'Printed automotive HMI benchmarking materials from the Baidu Apollo collaboration', caption: 'Retained historical documentation from the automotive HMI benchmarking work.' },
  layout: pendingFigure('layout-pattern-classification.webp', 'Figure pending — Historical layout classification and frequency comparison', 'Layout patterns across navigation, multimedia, vehicle settings, and other center-stack functions.'),
  primaryTypography: { src: evidenceImage('automotive_primary_title_sizes.png'), alt: 'Primary title sizes across Home, Navigation, Multimedia, Vehicle Settings, and Voice Control interfaces' },
  secondaryTypography: { src: evidenceImage('automotive_secondary_title_sizes.png'), alt: 'Secondary title sizes across Home, Navigation, Multimedia, Vehicle Settings, and Voice Control interfaces' },
  characterLengthSvg: { src: evidenceImage('automotive_character_length_distribution.svg'), alt: 'Character-length distributions across Home, Navigation, Multimedia, Vehicle Settings, and Voice Control interfaces' },
  characterLengthPng: { src: evidenceImage('automotive_character_length_distribution.png'), alt: 'Character-length distributions across Home, Navigation, Multimedia, Vehicle Settings, and Voice Control interfaces' },
  colorDistribution: { src: evidenceImage('automotive_color_distribution_by_function.png'), alt: 'Page theme and functional indication color distributions across Home, Navigation, Multimedia, Vehicle Settings, and Voice Control interfaces' },
  iconTypeSvg: { src: evidenceImage('automotive_icon_type_distribution.svg'), alt: 'Linear, filled, and hybrid icon-type distributions across five automotive interface functions' },
  iconTypePng: { src: evidenceImage('automotive_icon_type_distribution.png'), alt: 'Linear, filled, and hybrid icon-type distributions across five automotive interface functions' },
  iconDimensions: { src: evidenceImage('automotive_icon_dimensions.png'), alt: 'Normalized icon length and width scatter plots across five automotive interface functions' },
  iconSpacingSvg: { src: evidenceImage('automotive_icon_spacing_distribution.svg'), alt: 'Icon-spacing frequency distributions across five automotive interface functions' },
  iconSpacingPng: { src: evidenceImage('automotive_icon_spacing_distribution.png'), alt: 'Icon-spacing frequency distributions across five automotive interface functions' },
  focusGroup: pendingFigure('focus-group-session.webp', 'Figure pending — Focus group session photograph', 'Authentic documentation of the focus-group or interview activity will be added here.'),
  route: pendingFigure('driving-simulator-task-schedule.webp', 'Figure pending — Driving simulator task schedule', 'Experimental driving route with scheduled text-reading tasks under moving and stationary conditions.'),
  procedure: pendingFigure('experimental-procedure-flow.webp', 'Figure pending — Historical three-lane experimental procedure', 'Original experimental flow connecting the simulator, driver, and center-stack display.'),
  stimuli: pendingFigure('typography-experiment-stimuli.webp', 'Figure pending — Typography experiment stimuli', 'Historical interface variations in line length, character spacing, and line spacing.'),
  pilot: pendingFigure('pilot-test-session.webp', 'Figure pending — Pilot-test photograph', 'Authentic pilot-test documentation will be added here.'),
  simulator: pendingFigure('simulator-test-session.webp', 'Figure pending — Driving simulator test photograph', 'Authentic simulator-testing documentation will be added here.'),
  outputs: pendingFigure('historical-project-outputs.webp', 'Figure pending — Historical report, presentation, or team research material', 'Publicly shareable evidence of the project outputs will be added here.'),
}
</script>

<style lang="scss" scoped>
@use './styles/research-detail-system';
</style>

<style lang="scss" scoped>
.case-study {
  --benchmark-accent: var(--color-primary-light);
  --benchmark-line: var(--color-border);
  --benchmark-text: var(--color-text);
  --benchmark-muted: var(--color-text-secondary);
  --benchmark-surface: var(--color-bg-secondary);
}

.hero { padding-top: 5.25rem; }
.hero h1 { max-width: 980px; }
.hero .lede { max-width: 820px; }

.editorial-section,
.benchmark-section,
.simulator-section,
.outputs-section {
  padding-block: 4.75rem;
  display: grid;
  grid-template-columns: minmax(230px, 4fr) minmax(0, 8fr);
  gap: 2rem clamp(3rem, 7vw, 7rem);
  align-items: start;
  border-top: 1px solid var(--benchmark-line);
}

.section-surface { border-top: 1px solid var(--benchmark-line); background: var(--benchmark-surface); }
.case-study article > section.section-surface { padding-block: 0 !important; }
.section-surface .editorial-section,
.section-surface .outputs-section { border-top: 0; }
.section-body { max-width: 720px; }
.section-figure,
.method-strip,
.topic-grid,
.outputs-grid,
.confidentiality-note { grid-column: 1 / -1; }
.section-figure { margin-top: 1rem; }

.method-strip {
  margin: 1.25rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  list-style: none;
  border-top: 1px solid var(--benchmark-line);
  border-bottom: 1px solid var(--benchmark-line);
}
.method-strip li { min-height: 150px; padding: 1.35rem 1.5rem; display: grid; grid-template-columns: auto 1fr; gap: 1.25rem; border-right: 1px solid var(--benchmark-line); }
.method-strip li:first-child { padding-left: 0; }
.method-strip li:last-child { border-right: 0; }
.method-strip span,
.evidence-copy > span,
.subsection-title > span,
.topic-grid span,
.measure-list span,
.outputs-grid article > span { color: var(--benchmark-accent); font: 600 .68rem/1.4 var(--font-mono); letter-spacing: .08em; text-transform: uppercase; }
.method-strip h3 { margin: 0 0 .55rem; }
.method-strip p { color: var(--benchmark-muted); font-size: .82rem; line-height: 1.6; }

.benchmark-section > .section-heading,
.simulator-section > .section-heading,
.outputs-section > .section-heading { grid-column: 1; }
.benchmark-section > .section-body,
.simulator-section > .section-body,
.outputs-section > .section-body { grid-column: 2; }

.evidence-block,
.protocol-block { grid-column: 1 / -1; padding-top: 3.5rem; border-top: 1px solid var(--benchmark-line); }
.evidence-block { display: grid; grid-template-columns: minmax(220px, 3fr) minmax(0, 9fr); gap: clamp(2rem, 5vw, 5rem); }
.evidence-copy h3 { margin: .75rem 0 1rem; font-size: 1.25rem; }
.evidence-copy p { color: var(--benchmark-muted); font-size: .88rem; line-height: 1.72; }
.evidence-copy small { display: block; margin-top: 1.25rem; color: var(--benchmark-muted); font-size: .68rem; line-height: 1.5; }
.figure-pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; }

.evidence-block--typography { display: block; }
.evidence-block--typography .evidence-copy { max-width: 760px; margin-bottom: 2.5rem; }
.typography-analysis { display: grid; gap: 3.25rem; }
.typography-figure { margin: 0; min-width: 0; }
.typography-figure a { display: block; color: var(--benchmark-muted); }
.typography-figure img { width: 100%; height: auto; display: block; border: 1px solid var(--benchmark-line); background: #0d1016; object-fit: contain; }
.typography-figure a > span { display: block; padding-top: .55rem; font: 500 .66rem/1.4 var(--font-mono); text-align: right; }
.typography-figure a:hover > span { color: var(--benchmark-text); }
.typography-figure figcaption { max-width: 860px; padding-top: .55rem; }
.typography-figure figcaption strong { color: var(--benchmark-text); font-weight: 600; }

.typography-findings { display: grid; grid-template-columns: minmax(220px, 3fr) minmax(0, 9fr); gap: 1.5rem clamp(2rem, 5vw, 5rem); padding-top: 2.75rem; border-top: 1px solid var(--benchmark-line); }
.typography-findings h4 { margin: .55rem 0 0; color: var(--benchmark-text); font-size: 1.25rem; line-height: 1.25; }
.typography-findings__note { max-width: 650px; color: var(--benchmark-muted); font-size: .78rem; line-height: 1.65; }
.table-scroll,
.typography-conclusion { grid-column: 1 / -1; }
.table-scroll { overflow-x: auto; border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.typography-findings table { width: 100%; min-width: 760px; border-collapse: collapse; color: var(--benchmark-muted); font-size: .78rem; line-height: 1.55; }
.typography-findings th,
.typography-findings td { padding: 1rem 1.25rem; border-right: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); text-align: left; vertical-align: top; }
.typography-findings th:last-child,
.typography-findings td:last-child { border-right: 0; }
.typography-findings tbody tr:last-child th,
.typography-findings tbody tr:last-child td { border-bottom: 0; }
.typography-findings thead th { color: var(--benchmark-accent); font: 600 .68rem/1.4 var(--font-mono); letter-spacing: .06em; text-transform: uppercase; }
.typography-findings tbody th { width: 20%; color: var(--benchmark-text); font-weight: 600; }
.typography-conclusion { max-width: 900px; color: var(--benchmark-muted); font-size: .86rem; line-height: 1.72; }

.character-length-analysis { display: grid; gap: 2.5rem; padding-top: 3.25rem; border-top: 1px solid var(--benchmark-line); }
.character-length-analysis__intro { max-width: 820px; }
.character-length-analysis__intro h4 { margin: .55rem 0 1rem; color: var(--benchmark-text); font-size: 1.25rem; line-height: 1.3; }
.character-length-analysis__intro > p:last-child { color: var(--benchmark-muted); font-size: .88rem; line-height: 1.72; }
.character-length-figure h5 { margin: 0 0 1rem; color: var(--benchmark-text); font-size: .9rem; line-height: 1.4; font-weight: 600; }
.character-length-figure picture { display: block; }
.character-length-findings__grid { grid-column: 1 / -1; margin: 0; border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.character-length-findings__grid > div { display: grid; grid-template-columns: minmax(180px, 2fr) minmax(0, 8fr); border-bottom: 1px solid var(--benchmark-line); }
.character-length-findings__grid > div:last-child { border-bottom: 0; }
.character-length-findings dt,
.character-length-findings dd { margin: 0; padding: 1rem 1.25rem; }
.character-length-findings dt { color: var(--benchmark-text); font-weight: 600; }
.character-length-findings dd { color: var(--benchmark-muted); border-left: 1px solid var(--benchmark-line); font-size: .78rem; line-height: 1.6; }
.character-length-method { grid-column: 1 / -1; max-width: 900px; padding-top: 1.25rem; color: var(--benchmark-muted); border-top: 1px solid var(--benchmark-line); font-size: .72rem; line-height: 1.65; }

.evidence-block--color { display: block; }
.evidence-block--color .evidence-copy { max-width: 820px; margin-bottom: 2.5rem; }
.evidence-block--color .evidence-copy p + p { margin-top: .75rem; }
.color-analysis { display: grid; gap: 3rem; }
.color-figure h4 { margin: 0 0 1rem; color: var(--benchmark-text); font-size: 1.25rem; line-height: 1.3; }
.color-figure figcaption { line-height: 1.65; }
.color-findings__list { grid-column: 1 / -1; margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.color-findings__list li { display: grid; grid-template-columns: minmax(220px, 3fr) minmax(0, 9fr); border-bottom: 1px solid var(--benchmark-line); }
.color-findings__list li:last-child { border-bottom: 0; }
.color-findings__list span,
.color-findings__list p { padding: 1rem 1.25rem; }
.color-findings__list span { color: var(--benchmark-text); font-weight: 600; }
.color-findings__list p { color: var(--benchmark-muted); border-left: 1px solid var(--benchmark-line); font-size: .78rem; line-height: 1.6; }

.evidence-block--iconography { display: block; }
.evidence-block--iconography > .evidence-copy { max-width: 820px; margin-bottom: 2.5rem; }
.iconography-analysis { display: grid; gap: 3.5rem; }
.iconography-part { display: grid; gap: 2.5rem; padding-top: 3rem; border-top: 1px solid var(--benchmark-line); }
.iconography-part__intro { max-width: 820px; }
.iconography-part__intro h4,
.iconography-synthesis h4 { margin: .55rem 0 1rem; color: var(--benchmark-text); font-size: 1.25rem; line-height: 1.3; }
.iconography-part__intro > p:last-child,
.iconography-synthesis > p:last-child { color: var(--benchmark-muted); font-size: .88rem; line-height: 1.72; }
.iconography-figure picture { display: block; }
.iconography-findings .table-scroll { grid-column: 1 / -1; }
.iconography-synthesis { max-width: 900px; padding-top: 3rem; border-top: 1px solid var(--benchmark-line); }

.integrity-note,
.confidentiality-note { padding: 1.25rem 0 0; color: var(--benchmark-muted); border-top: 1px solid var(--benchmark-line); font-size: .78rem; line-height: 1.65; }
.integrity-note { grid-column: 1 / -1; }
.integrity-note strong,
.confidentiality-note strong { color: var(--benchmark-text); }

.topic-grid {
  margin: 1rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  list-style: none;
  border-top: 1px solid var(--benchmark-line);
  border-bottom: 1px solid var(--benchmark-line);
}
.topic-grid li { min-height: 112px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; gap: 1.5rem; color: var(--benchmark-text); border-right: 1px solid var(--benchmark-line); font-size: .82rem; line-height: 1.5; }
.topic-grid li:first-child { padding-left: 0; }
.topic-grid li:last-child { border-right: 0; }

.protocol-block { display: grid; gap: 2rem; }
.subsection-title { display: flex; align-items: flex-start; gap: 1rem; }
.subsection-title p { margin-bottom: .25rem; color: var(--benchmark-muted); font: 500 .66rem/1.4 var(--font-mono); letter-spacing: .07em; text-transform: uppercase; }
.subsection-title h3 { margin: 0; font-size: 1.2rem; }
.protocol-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.protocol-grid article { min-height: 180px; padding: 1.35rem; border-right: 1px solid var(--benchmark-line); }
.protocol-grid article:first-child { padding-left: 0; }
.protocol-grid article:last-child { border-right: 0; }
.protocol-grid article > span { display: block; margin-bottom: 2.25rem; color: var(--benchmark-accent); font: 600 .68rem/1.4 var(--font-mono); letter-spacing: .08em; text-transform: uppercase; }
.protocol-grid ul { margin: 0; padding: 0; list-style: none; }
.protocol-grid li { padding: .3rem 0; color: var(--benchmark-muted); font-size: .84rem; }
.protocol-grid .protocol-sample { grid-column: 1 / -1; min-height: 0; padding: 1.35rem 0; display: grid; grid-template-columns: 1fr 1fr 2fr; gap: 1rem; align-items: start; border-top: 1px solid var(--benchmark-line); border-right: 0; }
.protocol-sample > span { margin: 0; }
.protocol-sample strong { font-size: 1.15rem; }
.protocol-sample p { color: var(--benchmark-muted); font-size: .78rem; line-height: 1.6; }

.measure-list { margin: 0; padding: 0; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); list-style: none; border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.measure-list li { min-height: 125px; padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; gap: 1rem; color: var(--benchmark-muted); border-right: 1px solid var(--benchmark-line); font-size: .78rem; line-height: 1.5; }
.measure-list li:first-child { padding-left: 0; }
.measure-list li:last-child { border-right: 0; }
.testing-figures { margin-top: .5rem; }

.outputs-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--benchmark-line); }
.outputs-grid article { min-height: 170px; padding: 1.35rem 1.5rem 1.35rem 0; border-right: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.outputs-grid article:nth-child(even) { padding-left: 1.5rem; border-right: 0; }
.outputs-grid h3 { margin: 1.7rem 0 .55rem; }
.outputs-grid p { color: var(--benchmark-muted); font-size: .8rem; line-height: 1.6; }

@media (max-width: 900px) {
  .editorial-section,
  .benchmark-section,
  .simulator-section,
  .outputs-section { padding-block: 3.5rem; grid-template-columns: 1fr; gap: 2rem; }
  .benchmark-section > .section-heading,
  .benchmark-section > .section-body,
  .simulator-section > .section-heading,
  .simulator-section > .section-body,
  .outputs-section > .section-heading,
  .outputs-section > .section-body { grid-column: auto; }
  .method-strip { grid-template-columns: 1fr; }
  .method-strip li { min-height: 0; padding: 1.1rem 0; border-right: 0; border-bottom: 1px solid var(--benchmark-line); }
  .method-strip li:last-child { border-bottom: 0; }
  .evidence-block { grid-template-columns: 1fr; }
  .typography-findings { grid-template-columns: 1fr; }
  .typography-findings__note { grid-column: 1; }
  .character-length-findings__grid > div { grid-template-columns: 1fr; }
  .character-length-findings dd { padding-top: 0; border-left: 0; }
  .color-findings__list li { grid-template-columns: 1fr; }
  .color-findings__list p { padding-top: 0; border-left: 0; }
  .topic-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .topic-grid li:nth-child(2) { border-right: 0; }
  .topic-grid li:nth-child(-n+2) { border-bottom: 1px solid var(--benchmark-line); }
  .protocol-grid { grid-template-columns: 1fr; }
  .protocol-grid article { min-height: 0; padding: 1.1rem 0; border-right: 0; border-bottom: 1px solid var(--benchmark-line); }
  .protocol-grid article > span { margin-bottom: 1rem; }
  .protocol-grid .protocol-sample { grid-column: auto; grid-template-columns: 1fr; border-top: 0; }
  .measure-list { grid-template-columns: 1fr 1fr; }
  .measure-list li { min-height: 100px; }
  .measure-list li:nth-child(even) { border-right: 0; }
  .measure-list li:nth-child(-n+4) { border-bottom: 1px solid var(--benchmark-line); }
}

@media (max-width: 620px) {
  .hero { padding-top: 3.5rem; }
  .figure-pair,
  .topic-grid,
  .measure-list,
  .outputs-grid { grid-template-columns: 1fr; }
  .topic-grid li,
  .measure-list li { min-height: 0; padding: 1rem 0; border-right: 0; border-bottom: 1px solid var(--benchmark-line); }
  .topic-grid li:last-child,
  .measure-list li:last-child { border-bottom: 0; }
  .outputs-grid article,
  .outputs-grid article:nth-child(even) { min-height: 0; padding: 1.25rem 0; border-right: 0; }
  .outputs-grid h3 { margin-top: 1rem; }
}
</style>
