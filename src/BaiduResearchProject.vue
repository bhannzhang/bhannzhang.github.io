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
        <section class="benchmark-scope" aria-labelledby="benchmark-scope-title">
          <div class="benchmark-scope__intro">
            <p class="mini-label">Cross-Brand HMI Benchmarking</p>
            <h3 id="benchmark-scope-title">26 Vehicles Surveyed</h3>
            <p>The benchmarking study examined center-stack interfaces across 26 vehicles, combining in-person inspections with online research to document visual and interaction patterns across automotive brands.</p>
          </div>
          <ul class="brand-gallery" aria-label="Twenty automotive brands and brand series represented in the benchmarking study">
            <li v-for="brand in benchmarkBrands" :key="brand.name" :title="brand.name">
              <img v-if="brand.logoSrc" :src="brand.logoSrc" :alt="brand.name" loading="lazy" />
              <span v-else>{{ brand.name }}</span>
            </li>
          </ul>
        </section>
        <section class="layout-summary" aria-labelledby="layout-summary-title">
          <div class="evidence-copy">
            <span>A</span>
            <h3 id="layout-summary-title">Interface Layout &amp; Information Hierarchy</h3>
            <p>The benchmarking study also examined primary and secondary interface layouts across automotive center-stack systems, focusing on information organization, functional hierarchy, and navigation structures.</p>
            <p class="layout-summary__observation">Layout configurations varied in information density, navigation depth, and the visibility of functional entry points. These dimensions informed the subsequent comparison of alternative interface arrangements in simulator-based evaluations.</p>
          </div>
        </section>
        <div class="evidence-block evidence-block--typography">
          <div class="evidence-copy"><span>B</span><h3>Typography — Title Size Distribution Across Interface Functions</h3><p>To examine typographic hierarchy across automotive center-stack interfaces, primary and secondary title sizes were compared across five functional contexts: Home, Navigation, Multimedia, Vehicle Settings, and Voice Control.</p><small>Source material · original benchmarking report, approximately pp. 9–20</small></div>
          <div class="typography-analysis">
            <figure class="typography-figure">
              <a :href="figures.primaryTypography.src" target="_blank" rel="noopener noreferrer" aria-label="Open Figure A at full resolution">
                <img :src="figures.primaryTypography.src" :alt="figures.primaryTypography.alt" loading="lazy" />
              </a>
              <figcaption><strong>Figure A — Primary Title Sizes.</strong> Primary title font-size distribution across five automotive interface functions, based on historical cross-brand benchmarking records.</figcaption>
            </figure>
            <figure class="typography-figure">
              <a :href="figures.secondaryTypography.src" target="_blank" rel="noopener noreferrer" aria-label="Open Figure B at full resolution">
                <img :src="figures.secondaryTypography.src" :alt="figures.secondaryTypography.alt" loading="lazy" />
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
                <a :href="figures.iconDimensions.src" target="_blank" rel="noopener noreferrer" aria-label="Open normalized icon-dimensions figure at full resolution"><img :src="figures.iconDimensions.src" :alt="figures.iconDimensions.alt" loading="lazy" /></a>
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
          <div class="section-heading"><p class="kicker">04 · Qualitative Research</p><h2>Qualitative Research — Understanding Drivers and Refining Experiments</h2></div>
          <div class="section-body prose"><p>Before conducting the simulator-based evaluations, qualitative research was used to understand drivers' everyday interactions with automotive center-stack interfaces and examine how proposed interface variations might affect information acquisition and operation. In-depth interviews documented usage patterns, while subsequent focus-group discussions helped refine the experimental tasks, scenarios, and design variables.</p></div>

          <section class="qualitative-part" aria-labelledby="interview-research-title">
            <div class="subsection-title"><span>01</span><div><p>In-depth interviews</p><h3 id="interview-research-title">Understanding Everyday Center-Stack Usage</h3></div></div>
            <p class="qualitative-context">Ten participants (five male and five female) were interviewed about their everyday use of automotive center-stack interfaces. The interviews examined frequently used functions, typical interaction behaviors, and design-related concerns across navigation, multimedia, climate control, vehicle settings, and other functions.</p>
            <figure class="qualitative-figure"><h4>In-depth Interview Findings — Usage Patterns and Design Concerns</h4><a :href="figures.interviewFindings.src" target="_blank" rel="noopener"><img :src="figures.interviewFindings.src" :alt="figures.interviewFindings.alt" loading="lazy" /></a><figcaption>Summary of self-reported center-stack function usage, frequently mentioned operations, and design-related concerns from ten historical interviews. Valid response counts vary between questionnaire items.</figcaption></figure>
            <section class="qualitative-findings" aria-labelledby="interview-findings-title"><p class="mini-label">Key findings — In-depth interviews</p><h4 id="interview-findings-title">Interview Observations</h4><ol><li><span>01 · Function Usage Varied</span><p>Reported usage frequencies differed across center-stack functions. Climate control, rear-view camera, and music functions received relatively high recorded frequency scores, while navigation and vehicle settings were used less frequently in the retained responses.</p></li><li><span>02 · Familiar Operations Dominated</span><p>Commonly described interactions included playing music through a smartphone connection, switching tracks, adjusting volume, and using navigation services. Some participants relied on smartphones rather than the in-vehicle navigation interface.</p></li><li><span>03 · Design Concerns Extended Beyond Appearance</span><p>Open-ended responses highlighted concerns related to information accessibility, icon recognition, visual feedback, and text readability, suggesting that interface evaluation should consider both visual presentation and interaction demands.</p></li></ol><p class="qualitative-conclusion">The interviews revealed differences in how drivers engaged with automotive center-stack functions, alongside recurring concerns about information accessibility and interface readability. These observations provided contextual input for selecting realistic interaction tasks and visual design parameters in subsequent experiments.</p></section>
          </section>

          <section class="qualitative-part" aria-labelledby="focus-group-title">
            <div class="subsection-title"><span>02</span><div><p>Focus group</p><h3 id="focus-group-title">From Qualitative Findings to Experimental Decisions</h3></div></div>
            <p class="qualitative-context">Following the initial interviews, a focus-group evaluation was conducted to review proposed interface variations and refine the next stage of simulator-based experiments. Participants examined representative interface stimuli covering layout, typography, color, and iconography, followed by discussions about information acquisition, visual recognition, and interaction difficulty. The historical protocol used a 55-inch display to present interface examples for discussion.</p>
            <figure class="qualitative-photo"><a :href="figures.focusGroup.src" target="_blank" rel="noopener"><img :src="figures.focusGroup.src" :alt="figures.focusGroup.alt" loading="lazy" /></a><figcaption><strong>Focus-group session.</strong> Participants reviewed interface variations and discussed the experimental tasks and design variables.</figcaption></figure>
            <figure class="decision-matrix-figure"><h4>From Qualitative Findings to Experimental Decisions</h4><table class="decision-matrix"><thead><tr><th scope="col">Qualitative Finding</th><th scope="col">Research Implication</th><th scope="col">Experimental Decision</th></tr></thead><tbody><tr><td data-label="Qualitative Finding">Drivers preferred using center-stack functions when road conditions were relatively stable and safe.</td><td data-label="Research Implication">Secondary-task conditions should reduce unnecessary driving-context variability.</td><td data-label="Experimental Decision">Use relatively stable urban-road scenarios, with interaction tasks assigned to straight-road segments and a target driving speed of 35–40 km/h.</td></tr><tr><td data-label="Qualitative Finding">Drivers often avoided reading lengthy information while moving but paid attention to vehicle warning messages.</td><td data-label="Research Implication">Text-reading tasks should reflect situations where drivers have a realistic need to inspect information.</td><td data-label="Experimental Decision">Use vehicle warning messages, including tire-pressure and engine-related alerts, as representative reading tasks.</td></tr><tr><td data-label="Qualitative Finding">Participants differentiated between finding information and completing an interface operation.</td><td data-label="Research Implication">Information acquisition and task execution should be evaluated as distinct aspects of interaction.</td><td data-label="Experimental Decision">Consider eye-tracking-based information acquisition measures alongside task-completion performance.</td></tr><tr><td data-label="Qualitative Finding">Icon size and spacing were discussed in relation to recognition and visual comfort, while icon-to-text spacing was particularly associated with visual appearance.</td><td data-label="Research Implication">Different icon-related parameters should be examined separately.</td><td data-label="Experimental Decision">Manipulate icon size, icon-to-icon spacing, and icon-to-text spacing as distinct experimental factors.</td></tr><tr><td data-label="Qualitative Finding">Alternative layouts involved trade-offs between information clarity, navigation depth, and interaction effort.</td><td data-label="Research Implication">Layout comparisons should control task demands to support meaningful interpretation.</td><td data-label="Experimental Decision">Compare primary and secondary layouts using matched functional tasks and consistent operation-step requirements.</td></tr></tbody></table><figcaption>Traceable relationships between retained qualitative findings, their research implications, and the experimental decisions documented for the simulator-based studies.</figcaption></figure>
            <section class="qualitative-findings" aria-labelledby="focus-group-findings-title"><p class="mini-label">Key findings — Focus group</p><h4 id="focus-group-findings-title">From Discussion to Experimental Design</h4><ol><li><span>01 · Scenario Refinement</span><p>Participants' descriptions of everyday driving behavior informed the selection of relatively stable driving conditions and the placement of secondary interaction tasks.</p></li><li><span>02 · Experimental Operationalization</span><p>Focus-group feedback helped translate broad interface concerns into more specific experimental manipulations, including typography parameters, icon dimensions, spacing, and layout alternatives.</p></li><li><span>03 · Differentiating Evaluation Outcomes</span><p>The discussions highlighted the importance of distinguishing visual recognition and information acquisition from the effort required to complete an interaction.</p></li></ol><p class="qualitative-conclusion">Qualitative inquiry informed the experimental program by grounding task selection in drivers' reported behavior, refining the driving context, and clarifying which interface parameters and outcome measures should be examined. This established a traceable connection between user research and the subsequent simulator-based evaluation.</p></section>
          </section>
        </div>
      </section>

      <section class="shell simulator-section">
        <div class="section-heading"><p class="kicker">05 · Simulator-Based Evaluation</p><h2>Driving Simulator Experiments &amp; Results</h2></div>
        <div class="section-body prose"><p>Following the cross-brand benchmarking research, a series of driving-simulator evaluations examined how automotive HMI design variables influenced information comprehension, task performance, perceived workload, and driving behavior. The experimental program investigated typography, color, iconography, and interface layout through controlled variations of selected visual design parameters.</p></div>

        <section class="protocol-block simulator-framework" aria-labelledby="simulator-framework-title">
          <div class="subsection-title"><span>01</span><div><p>Experimental research framework</p><h3 id="simulator-framework-title">From Design Variables to Human Factors Evaluation</h3></div></div>
          <div class="framework-variables">
            <article><span>A · Typography</span><ul><li>Line length</li><li>Character spacing</li><li>Line spacing</li></ul></article>
            <article><span>B · Color</span><ul><li>Hue</li><li>Saturation</li><li>Brightness</li></ul></article>
            <article><span>C · Iconography</span><ul><li>Icon size</li><li>Icon-to-icon spacing</li><li>Icon-to-text spacing</li></ul></article>
            <article><span>D · Layout</span><ul><li>Primary interface layout</li><li>Secondary interface layout</li></ul></article>
          </div>
          <p class="framework-bridge">Driving Scenario <span>+</span> Secondary HMI Task</p>
          <ul class="measure-list measure-list--six"><li><span>01</span>Task completion and response time</li><li><span>02</span>Information comprehension</li><li><span>03</span>Subjective workload and usability</li><li><span>04</span>Eye-tracking measurements</li><li><span>05</span>Physiological measurements</li><li><span>06</span>Driving-control measurements</li></ul>
          <p class="integrity-note">These categories document the intended measurement framework. The retained records do not verify that every proposed measure produced a complete analyzable dataset.</p>
        </section>

        <section class="protocol-block simulator-environment" aria-labelledby="simulator-environment-title">
          <div class="subsection-title"><span>02</span><div><p>Environment and procedure</p><h3 id="simulator-environment-title">Driving Context and Experimental Procedure</h3></div></div>
          <p class="protocol-intro">The experimental protocols incorporated simulated urban driving while participants performed secondary HMI tasks on a center-stack display. Depending on the study, tasks involved reading vehicle-status information, responding to interface prompts, navigating between functions, or interacting with alternative interface layouts.</p>
          <ol class="procedure-sequence"><li><span>01</span>Participant introduction and familiarization</li><li><span>02</span>Simulator practice</li><li><span>03</span>Driving and secondary HMI tasks</li><li><span>04</span>Data collection</li><li><span>05</span>Post-task assessments and interviews</li></ol>
          <p class="protocol-note">Relevant protocols specified a target speed of approximately 35–40 km/h. Typography included moving and stationary conditions. Iconography and layout focused on driving. The color document retains a driving protocol, while earlier stationary-condition text appears as deleted draft material.</p>
          <div class="environment-figures">
            <figure class="simulator-figure"><a :href="figures.route.src" target="_blank" rel="noopener"><img :src="figures.route.src" :alt="figures.route.alt" loading="lazy" /></a><figcaption><strong>Figure 1 — Campus Driving Route and Task Schedule.</strong> Historical simulator route showing typography tasks assigned to moving and stopped segments.</figcaption></figure>
            <figure class="simulator-figure"><a :href="figures.simulatorEnvironment.src" target="_blank" rel="noopener"><img :src="figures.simulatorEnvironment.src" :alt="figures.simulatorEnvironment.alt" loading="lazy" /></a><figcaption><strong>Figure 2 — Driving Simulator Environment.</strong> The historical simulator setup used for the driving and secondary HMI tasks.</figcaption></figure>
          </div>
          <figure class="simulator-figure simulator-figure--procedure"><a :href="figures.procedure.src" target="_blank" rel="noopener"><img :src="figures.procedure.src" :alt="figures.procedure.alt" loading="lazy" /></a><figcaption><strong>Figure 3 — Three-Column Experimental Procedure.</strong> Historical workflow coordinating the simulator, participant, and center-stack task sequence.</figcaption></figure>
        </section>

        <section class="protocol-block simulator-studies" aria-labelledby="simulator-studies-title">
          <div class="subsection-title"><span>03</span><div><p>Variables and stimuli</p><h3 id="simulator-studies-title">Experimental Conditions and Interface Stimuli</h3></div></div>

          <article class="experiment-study"><div class="experiment-study__copy"><p class="mini-label">A · Typography Experiment</p><h4>Reading Vehicle-Status Messages</h4><p>The typography experiment manipulated line length, character spacing, and line spacing across landscape, widescreen, and portrait displays. Participants read vehicle-status messages during moving or stationary tasks, allowing the study to examine comprehension, usability, and workload.</p><dl><div><dt>Variables</dt><dd>Three typography variables, each with three planned levels</dd></div><div><dt>Context</dt><dd>Moving and stationary conditions</dd></div><div><dt>Planned sample</dt><dd>30 participants divided into three protocol groups; final valid sample not verified</dd></div></dl></div><div class="stimuli-grid stimuli-grid--three"><figure v-for="item in figures.typographyStimuli" :key="item.label"><a :href="item.src" target="_blank" rel="noopener"><img :src="item.src" :alt="item.alt" loading="lazy" /></a><figcaption>{{ item.label }}</figcaption></figure></div></article>

          <article class="experiment-study"><div class="experiment-study__copy"><p class="mini-label">B · Color Experiment</p><h4>Recognizing Functional Color States</h4><p>The color experiment investigated hue, saturation, and brightness in relation to recognizing and interacting with center-stack controls. Historical stimuli varied interface colors while participants responded to functional prompts during simulated driving.</p><dl><div><dt>Variables</dt><dd>Hue, saturation, and brightness across alternative display formats</dd></div><div><dt>Context</dt><dd>Driving is retained in the revised protocol; stationary scenarios appear only in deleted draft text</dd></div><div><dt>Sample note</dt><dd>Conflicting calculations and revision marks prevent verification of a final participant count</dd></div></dl></div><div class="stimuli-grid stimuli-grid--three"><figure v-for="item in figures.colorStimuli" :key="item.label"><a :href="item.src" target="_blank" rel="noopener"><img :src="item.src" :alt="item.alt" loading="lazy" /></a><figcaption>{{ item.label }}</figcaption></figure></div></article>

          <article class="experiment-study"><div class="experiment-study__copy"><p class="mini-label">C · Iconography Experiment</p><h4>Navigating from the Home Interface</h4><p>The iconography experiment examined icon size, spacing between icons, and spacing between icons and text. Participants performed navigation tasks from the home interface while driving under simulated urban-road conditions.</p><dl><div><dt>Variables</dt><dd>Three icon variables, each with three planned levels; landscape, widescreen, and portrait formats</dd></div><div><dt>Tasks</dt><dd>Home to Multimedia, Navigation, and Vehicle Settings</dd></div><div><dt>Planned sample</dt><dd>30 participants divided into three protocol groups; final valid sample not verified</dd></div></dl></div><div class="stimuli-grid stimuli-grid--three"><figure v-for="item in figures.iconStimuli" :key="item.label"><a :href="item.src" target="_blank" rel="noopener"><img :src="item.src" :alt="item.alt" loading="lazy" /></a><figcaption>{{ item.label }}</figcaption></figure></div></article>

          <article class="experiment-study"><div class="experiment-study__copy"><p class="mini-label">D · Layout Experiment</p><h4>Comparing Primary and Secondary Arrangements</h4><p>The layout experiment compared primary and secondary interface arrangements during navigation and multimedia interactions. Participants completed functional tasks while operating a simulated vehicle, allowing alternative layouts to be evaluated in relation to interaction performance and workload.</p><dl><div><dt>Variables</dt><dd>Primary and secondary layouts across alternative display formats</dd></div><div><dt>Tasks</dt><dd>Enter Multimedia, locate a specified song, and play or save content</dd></div><div><dt>Planned sample</dt><dd>20 participants divided into two protocol groups; final valid sample not verified</dd></div></dl></div><div class="stimuli-grid stimuli-grid--two"><figure v-for="item in figures.layoutStimuli" :key="item.label"><a :href="item.src" target="_blank" rel="noopener"><img :src="item.src" :alt="item.alt" loading="lazy" /></a><figcaption>{{ item.label }}</figcaption></figure></div></article>
        </section>

        <section class="protocol-block simulator-results" aria-labelledby="simulator-results-title">
          <div class="subsection-title"><span>04</span><div><p>Formal experiment evidence</p><h3 id="simulator-results-title">Representative Experimental Results</h3></div></div>
          <div class="result-group"><div class="result-group__intro"><p class="mini-label">A · Color Experiment</p><h4>Response Time Across Day–Night and Color Conditions</h4><p>Descriptive comparison of response-time patterns across daytime and nighttime driving scenes, different hue conditions, and target-to-background contrast ratios, reconstructed from historical post-experiment analysis figures.</p></div><figure class="simulator-figure simulator-figure--result"><a :href="figures.colorResponseTime.src" target="_blank" rel="noopener"><img :src="figures.colorResponseTime.src" :alt="figures.colorResponseTime.alt" loading="lazy" /></a><figcaption><strong>Figure 4 — Color Experiment Response-Time Results.</strong> Consolidated visual reconstruction from historical formal-experiment charts. Individual data points have not been independently checked against the original editable dataset.</figcaption></figure><p class="result-observation"><strong>Descriptive observation.</strong> Across the retained charts, response-time patterns varied between daytime and nighttime scenes and across color-contrast conditions. Nighttime conditions generally showed higher mean response times in the displayed comparisons, while the magnitude of variation differed across hue and contrast combinations.</p></div>

          <div class="result-group"><div class="result-group__intro"><p class="mini-label">B · Supporting Measures</p><h4>Gaze-Related and Driving-Control Indicators</h4><p>In addition to response time, the formal analysis included gaze-related and driving-control indicators. These measures were examined alongside task performance to characterize driver behavior under different visual conditions.</p></div><div class="supporting-results"><figure v-for="item in figures.drivingMeasures" :key="item.src" class="simulator-figure"><a :href="item.src" target="_blank" rel="noopener"><img :src="item.src" :alt="item.alt" loading="lazy" /></a><figcaption>{{ item.caption }}</figcaption></figure></div></div>

          <div class="result-group"><div class="result-group__intro"><p class="mini-label">C · Layout Experiment</p><h4>Perceived Difficulty Across Screen Arrangements</h4><p>Historical results documented perceived difficulty across screen configurations and vertical interaction patterns, including vertical scrolling and page-based navigation. The scale definition and participant-level data have not been recovered, so the chart is presented descriptively.</p></div><figure class="simulator-figure simulator-figure--result"><a :href="figures.layoutDifficulty.src" target="_blank" rel="noopener"><img :src="figures.layoutDifficulty.src" :alt="figures.layoutDifficulty.alt" loading="lazy" /></a><figcaption><strong>Figure 7 — Layout Experiment Difficulty Ratings.</strong> Historical post-experiment chart comparing alternative display formats and vertical interaction patterns.</figcaption></figure></div>

          <section class="simulator-conclusions" aria-labelledby="simulator-conclusions-title"><p class="mini-label">Research conclusions</p><h4 id="simulator-conclusions-title">Key Findings — Simulator-Based Evaluation</h4><ol class="color-findings__list"><li><span>01 · Evaluated in Driving Contexts</span><p>The research examined interface elements through practical driving and secondary-task scenarios rather than static visual comparison alone.</p></li><li><span>02 · Performance and Driver Behavior</span><p>The evaluation framework combined interaction performance, subjective measures, and driving-related indicators to investigate the broader consequences of HMI design variations.</p></li><li><span>03 · Outcomes Varied Across Conditions</span><p>The retained post-experiment figures document variation in response time and other recorded indicators across visual and driving conditions. These descriptive patterns support further examination but do not independently establish causal or statistically significant effects.</p></li></ol><p class="typography-conclusion">The simulator-based studies extended the cross-brand benchmarking research by examining selected interface design variables under controlled driving conditions. Combining experimental tasks with behavioral and subjective measures provided a broader basis for evaluating automotive HMI design decisions.</p></section>
        </section>
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
          <figure class="project-photo-figure"><div class="project-photo-grid"><a v-for="item in figures.headquartersVisit" :key="item.src" :href="item.src" target="_blank" rel="noopener"><img :src="item.src" :alt="item.alt" loading="lazy" /></a></div><figcaption><strong>Baidu headquarters presentation visit.</strong> Site documentation and the project presentation from the 2019 collaboration.</figcaption></figure>
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
const evidenceImage = (filename) => `${homeUrl}images/research/automotive-benchmarking/${filename}`
const pendingFigure = (filename, label, caption) => ({ src: '', expectedSrc: evidenceImage(filename), label, caption })

const benchmarkBrands = [
  { name: 'BMW', logoSrc: evidenceImage('brands/bmw.svg') },
  { name: 'Mercedes-Benz' },
  { name: 'GAC Trumpchi' },
  { name: 'Haval' },
  { name: 'Chery' },
  { name: 'Geely' },
  { name: 'Lynk & Co' },
  { name: 'Li Auto' },
  { name: 'Land Rover' },
  { name: 'EXEED' },
  { name: 'Roewe' },
  { name: 'MAXUS' },
  { name: 'Škoda', logoSrc: evidenceImage('brands/skoda.svg') },
  { name: 'Tesla', logoSrc: evidenceImage('brands/tesla.svg') },
  { name: 'WM Motor' },
  { name: 'NIO' },
  { name: 'Volvo', logoSrc: evidenceImage('brands/volvo.svg') },
  { name: 'XPeng' },
  { name: 'Changan' },
  { name: 'WEY' },
]

// Add verified historical files at the expected paths, then set `src` to `expectedSrc`.
const figures = {
  hero: pendingFigure('hero-research-documentation-collage.webp', 'Figure pending — Historical research-documentation collage', 'Planned collage of retained benchmarking pages, experimental materials, and project documentation.'),
  context: { src: evidenceImage('benchmarking-materials.jpg'), label: '', alt: 'Printed automotive HMI benchmarking materials from the Baidu Apollo collaboration', caption: 'Retained historical documentation from the automotive HMI benchmarking work.' },
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
  interviewFindings: { src: evidenceImage('automotive_indepth_interview_findings.svg'), alt: 'In-depth interview findings showing center-stack usage frequencies, reported operations, and design concerns' },
  focusGroup: { src: evidenceImage('focus-group-session.jpg'), alt: 'Historical focus-group session for the automotive HMI research' },
  route: { src: evidenceImage('simulator-route.png'), alt: 'Campus driving-simulator route with moving and stopped typography tasks' },
  simulatorEnvironment: { src: evidenceImage('simulator-environment.png'), alt: 'Historical driving simulator environment used for the automotive HMI experiments' },
  procedure: { src: evidenceImage('simulator-procedure.png'), alt: 'Three-column historical experimental procedure for simulator, participant, and center-stack display' },
  typographyStimuli: [
    { src: evidenceImage('typography-line-length.jpg'), alt: 'Historical landscape typography stimulus varying line length', label: 'Line length' },
    { src: evidenceImage('typography-character-spacing.jpg'), alt: 'Historical landscape typography stimulus varying character spacing', label: 'Character spacing' },
    { src: evidenceImage('typography-line-spacing.jpg'), alt: 'Historical landscape typography stimulus varying line spacing', label: 'Line spacing' },
  ],
  colorStimuli: [
    { src: evidenceImage('color-hue.jpg'), alt: 'Historical automotive HMI stimulus varying hue', label: 'Hue' },
    { src: evidenceImage('color-saturation.jpg'), alt: 'Historical automotive HMI stimulus varying saturation', label: 'Saturation' },
    { src: evidenceImage('color-brightness.jpg'), alt: 'Historical automotive HMI stimulus varying brightness', label: 'Brightness' },
  ],
  iconStimuli: [
    { src: evidenceImage('icon-size.jpg'), alt: 'Historical automotive HMI stimulus varying icon size', label: 'Icon size' },
    { src: evidenceImage('icon-spacing.jpg'), alt: 'Historical automotive HMI stimulus varying spacing between icons', label: 'Icon-to-icon spacing' },
    { src: evidenceImage('icon-text-spacing.jpg'), alt: 'Historical automotive HMI stimulus varying spacing between icons and text', label: 'Icon-to-text spacing' },
  ],
  layoutStimuli: [
    { src: evidenceImage('layout-primary.jpg'), alt: 'Historical primary automotive interface layout stimulus', label: 'Primary interface layout' },
    { src: evidenceImage('layout-secondary.jpg'), alt: 'Historical secondary automotive interface layout stimulus', label: 'Secondary interface layout' },
  ],
  colorResponseTime: { src: evidenceImage('color-response-time-results.png'), alt: 'Reconstructed color-experiment response-time distributions and supporting indicators across day and night scenes' },
  drivingMeasures: [
    { src: evidenceImage('color-driving-measures-extended.png'), alt: 'Historical color-experiment chart with response time, fixation, lane departure, steering, and vehicle speed indicators', caption: 'Figure 5 — Extended supporting-measures chart across day–night, hue, and contrast conditions.' },
    { src: evidenceImage('color-driving-measures-summary.png'), alt: 'Historical summary chart of response time, fixation, lane departure, steering, and vehicle speed indicators by day and night', caption: 'Figure 6 — Day–night summary of supporting gaze-related and driving-control measures.' },
  ],
  layoutDifficulty: { src: evidenceImage('layout-difficulty-results.png'), alt: 'Historical perceived-difficulty chart across screen formats and vertical scrolling or page-based navigation' },
  headquartersVisit: [
    { src: evidenceImage('baidu-headquarters-robot.jpg'), alt: 'Robotics display at Baidu headquarters during the project presentation visit' },
    { src: evidenceImage('baidu-headquarters-campus.jpg'), alt: 'Baidu headquarters campus during the project presentation visit' },
    { src: evidenceImage('baidu-headquarters-interior.jpg'), alt: 'Interior at Baidu headquarters during the project presentation visit' },
    { src: evidenceImage('baidu-headquarters-presentation.jpg'), alt: 'Automotive HMI research presentation at Baidu headquarters' },
  ],
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

.benchmark-scope {
  grid-column: 1 / -1;
  padding-top: 2.5rem;
  display: grid;
  grid-template-columns: minmax(220px, 3fr) minmax(0, 9fr);
  gap: clamp(2rem, 5vw, 5rem);
  border-top: 1px solid var(--benchmark-line);
}
.benchmark-scope__intro h3,
.layout-summary h3 { margin: .55rem 0 .85rem; color: var(--benchmark-text); font-size: 1.25rem; line-height: 1.3; }
.benchmark-scope__intro > p:last-child { margin: 0; color: var(--benchmark-muted); font-size: .84rem; line-height: 1.72; }
.brand-gallery {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(10, minmax(0, 1fr));
  gap: .75rem 1rem;
  list-style: none;
}
.brand-gallery li {
  min-width: 0;
  min-height: 58px;
  padding: .45rem .25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.brand-gallery img { width: auto; max-width: 68px; height: auto; max-height: 27px; display: block; opacity: .64; filter: grayscale(1) brightness(0) invert(1); transition: opacity var(--transition-fast); }
.brand-gallery span {
  color: var(--benchmark-muted);
  font: 600 clamp(.56rem, .72vw, .68rem)/1.25 var(--font-sans);
  letter-spacing: .015em;
}
.brand-gallery li:hover img { opacity: .9; }
.brand-gallery li:hover span { color: var(--benchmark-text); }
:global(.light) .brand-gallery img { opacity: .68; filter: grayscale(1) brightness(0); }

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

.layout-summary {
  grid-column: 1 / -1;
  max-width: 900px;
  padding-top: 2.75rem;
  border-top: 1px solid var(--benchmark-line);
}
.layout-summary .evidence-copy { max-width: 900px; }
.layout-summary__observation { margin-top: 1.4rem; padding-top: 1.4rem; border-top: 1px solid var(--benchmark-line); }

.integrity-note,
.confidentiality-note { padding: 1.25rem 0 0; color: var(--benchmark-muted); border-top: 1px solid var(--benchmark-line); font-size: .78rem; line-height: 1.65; }
.integrity-note { grid-column: 1 / -1; }
.integrity-note strong,
.confidentiality-note strong { color: var(--benchmark-text); }

.qualitative-part { grid-column: 1 / -1; padding-top: 3.5rem; display: grid; gap: 2.25rem; border-top: 1px solid var(--benchmark-line); }
.qualitative-context,
.qualitative-conclusion { max-width: 900px; margin: 0; color: var(--benchmark-muted); font-size: .86rem; line-height: 1.72; }
.qualitative-figure,
.qualitative-photo,
.decision-matrix-figure { margin: 0; min-width: 0; }
.qualitative-figure h4,
.decision-matrix-figure h4,
.qualitative-findings h4 { margin: 0 0 1rem; color: var(--benchmark-text); font-size: 1.2rem; line-height: 1.35; }
.qualitative-figure a,
.qualitative-photo a { display: block; color: var(--benchmark-muted); }
.qualitative-figure img,
.qualitative-photo img { width: 100%; height: auto; display: block; }
.qualitative-photo { max-width: 980px; }
.qualitative-figure figcaption,
.qualitative-photo figcaption,
.decision-matrix-figure figcaption { padding-top: .65rem; color: var(--benchmark-muted); font-size: .72rem; line-height: 1.6; }
.qualitative-photo figcaption strong { color: var(--benchmark-text); font-weight: 600; }

.qualitative-findings { padding-top: 2.75rem; border-top: 1px solid var(--benchmark-line); }
.qualitative-findings ol { margin: 1.5rem 0; padding: 0; list-style: none; border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.qualitative-findings li { display: grid; grid-template-columns: minmax(220px, 3fr) minmax(0, 9fr); border-bottom: 1px solid var(--benchmark-line); }
.qualitative-findings li:last-child { border-bottom: 0; }
.qualitative-findings li > span,
.qualitative-findings li > p { padding: 1rem 1.25rem; }
.qualitative-findings li > span { color: var(--benchmark-text); font-weight: 600; }
.qualitative-findings li > p { margin: 0; color: var(--benchmark-muted); border-left: 1px solid var(--benchmark-line); font-size: .78rem; line-height: 1.6; }

.decision-matrix { width: 100%; table-layout: fixed; border-collapse: collapse; border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.decision-matrix th,
.decision-matrix td { padding: 1rem 1.25rem; text-align: left; vertical-align: top; border-right: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.decision-matrix th:last-child,
.decision-matrix td:last-child { border-right: 0; }
.decision-matrix tbody tr:last-child td { border-bottom: 0; }
.decision-matrix th { color: var(--benchmark-accent); font: 600 .68rem/1.4 var(--font-mono); letter-spacing: .06em; text-transform: uppercase; }
.decision-matrix th:nth-child(1),
.decision-matrix td:nth-child(1),
.decision-matrix th:nth-child(3),
.decision-matrix td:nth-child(3) { width: 36%; }
.decision-matrix th:nth-child(2),
.decision-matrix td:nth-child(2) { width: 28%; }
.decision-matrix td { color: var(--benchmark-muted); font-size: .76rem; line-height: 1.62; }
.decision-matrix td:last-child { color: var(--benchmark-text); box-shadow: inset 2px 0 0 var(--benchmark-accent); }

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

.simulator-section { row-gap: 3.5rem; }
.simulator-section .protocol-block { gap: 2.25rem; }
.protocol-intro,
.protocol-note { max-width: 900px; color: var(--benchmark-muted); font-size: .86rem; line-height: 1.72; }
.protocol-note { padding-top: 1.25rem; border-top: 1px solid var(--benchmark-line); font-size: .75rem; }

.framework-variables { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.framework-variables article { padding: 1.25rem; border-right: 1px solid var(--benchmark-line); }
.framework-variables article:first-child { padding-left: 0; }
.framework-variables article:last-child { border-right: 0; }
.framework-variables span { display: block; margin-bottom: 1.25rem; color: var(--benchmark-accent); font: 600 .68rem/1.4 var(--font-mono); letter-spacing: .06em; text-transform: uppercase; }
.framework-variables ul { margin: 0; padding: 0; list-style: none; }
.framework-variables li { padding: .28rem 0; color: var(--benchmark-muted); font-size: .8rem; line-height: 1.5; }
.framework-bridge { margin: 0; padding: 1rem; color: var(--benchmark-text); border: 1px solid var(--benchmark-line); font: 600 .72rem/1.4 var(--font-mono); letter-spacing: .06em; text-align: center; text-transform: uppercase; }
.framework-bridge span { padding-inline: .8rem; color: var(--benchmark-accent); }
.measure-list--six { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.measure-list--six li { min-height: 100px; border-bottom: 1px solid var(--benchmark-line); }
.measure-list--six li:nth-child(3n) { border-right: 0; }
.measure-list--six li:nth-child(n+4) { border-bottom: 0; }

.procedure-sequence { margin: 0; padding: 0; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); list-style: none; border-top: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.procedure-sequence li { min-height: 118px; padding: 1.1rem; color: var(--benchmark-muted); border-right: 1px solid var(--benchmark-line); font-size: .78rem; line-height: 1.5; }
.procedure-sequence li:first-child { padding-left: 0; }
.procedure-sequence li:last-child { border-right: 0; }
.procedure-sequence span { display: block; margin-bottom: 1.5rem; color: var(--benchmark-accent); font: 600 .68rem/1.4 var(--font-mono); }
.environment-figures { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; align-items: start; }

.simulator-figure { margin: 0; min-width: 0; }
.simulator-figure a { display: block; color: var(--benchmark-muted); }
.simulator-figure img { width: 100%; height: auto; display: block; border: 1px solid var(--benchmark-line); background: #0d1016; object-fit: contain; }
.simulator-figure figcaption { padding-top: .65rem; color: var(--benchmark-muted); font-size: .72rem; line-height: 1.6; }
.simulator-figure figcaption strong { color: var(--benchmark-text); font-weight: 600; }
.simulator-figure--procedure { width: 100%; }
.simulator-figure--light img { background: #fff; }

.simulator-studies { gap: 0; }
.simulator-studies > .subsection-title { margin-bottom: 2.25rem; }
.experiment-study { padding-block: 2.75rem; display: grid; grid-template-columns: minmax(240px, 4fr) minmax(0, 8fr); gap: clamp(2rem, 5vw, 5rem); border-top: 1px solid var(--benchmark-line); }
.experiment-study:last-child { border-bottom: 1px solid var(--benchmark-line); }
.experiment-study__copy h4,
.result-group__intro h4,
.simulator-conclusions h4 { margin: .55rem 0 1rem; color: var(--benchmark-text); font-size: 1.2rem; line-height: 1.3; }
.experiment-study__copy > p:not(.mini-label),
.result-group__intro > p:not(.mini-label) { color: var(--benchmark-muted); font-size: .84rem; line-height: 1.72; }
.experiment-study dl { margin: 1.5rem 0 0; border-top: 1px solid var(--benchmark-line); }
.experiment-study dl > div { padding: .75rem 0; display: grid; grid-template-columns: 90px 1fr; gap: 1rem; border-bottom: 1px solid var(--benchmark-line); }
.experiment-study dt { color: var(--benchmark-text); font-size: .72rem; font-weight: 600; }
.experiment-study dd { margin: 0; color: var(--benchmark-muted); font-size: .72rem; line-height: 1.55; }
.stimuli-grid { display: grid; gap: .85rem; align-items: start; }
.stimuli-grid--three { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.stimuli-grid--two { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.stimuli-grid figure { margin: 0; min-width: 0; }
.stimuli-grid a { display: block; }
.stimuli-grid img { width: 100%; height: 210px; display: block; object-fit: contain; border: 1px solid var(--benchmark-line); background: #0d1016; }
.stimuli-grid figcaption { padding-top: .55rem; color: var(--benchmark-muted); font: 500 .66rem/1.4 var(--font-mono); }

.simulator-results { gap: 0; }
.simulator-results > .subsection-title { margin-bottom: 2.25rem; }
.result-group { padding-block: 3rem; display: grid; gap: 1.75rem; border-top: 1px solid var(--benchmark-line); }
.result-group__intro { max-width: 820px; }
.simulator-figure--result img { max-height: 900px; }
.result-observation { max-width: 900px; margin: 0; padding-top: 1.25rem; color: var(--benchmark-muted); border-top: 1px solid var(--benchmark-line); font-size: .84rem; line-height: 1.72; }
.result-observation strong { color: var(--benchmark-text); }
.supporting-results { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem; align-items: start; }
.supporting-results img { max-height: 760px; }
.simulator-conclusions { padding-top: 3rem; border-top: 1px solid var(--benchmark-line); }
.simulator-conclusions > .color-findings__list { margin-top: 2rem; }
.simulator-conclusions > .typography-conclusion { margin-top: 1.5rem; }

.outputs-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--benchmark-line); }
.outputs-grid article { min-height: 170px; padding: 1.35rem 1.5rem 1.35rem 0; border-right: 1px solid var(--benchmark-line); border-bottom: 1px solid var(--benchmark-line); }
.outputs-grid article:nth-child(even) { padding-left: 1.5rem; border-right: 0; }
.outputs-grid h3 { margin: 1.7rem 0 .55rem; }
.outputs-grid p { color: var(--benchmark-muted); font-size: .8rem; line-height: 1.6; }
.project-photo-figure { grid-column: 1 / -1; margin: 0; }
.project-photo-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .85rem; }
.project-photo-grid a { display: block; min-width: 0; background: #0d1016; }
.project-photo-grid img { width: 100%; aspect-ratio: 4 / 3; display: block; object-fit: contain; }
.project-photo-figure figcaption { padding-top: .65rem; color: var(--benchmark-muted); font-size: .72rem; line-height: 1.6; }
.project-photo-figure figcaption strong { color: var(--benchmark-text); font-weight: 600; }

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
  .benchmark-scope { grid-template-columns: 1fr; }
  .brand-gallery { grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .typography-findings { grid-template-columns: 1fr; }
  .typography-findings__note { grid-column: 1; }
  .character-length-findings__grid > div { grid-template-columns: 1fr; }
  .character-length-findings dd { padding-top: 0; border-left: 0; }
  .color-findings__list li { grid-template-columns: 1fr; }
  .color-findings__list p { padding-top: 0; border-left: 0; }
  .qualitative-findings li { grid-template-columns: 1fr; }
  .qualitative-findings li > p { padding-top: 0; border-left: 0; }
  .protocol-grid { grid-template-columns: 1fr; }
  .protocol-grid article { min-height: 0; padding: 1.1rem 0; border-right: 0; border-bottom: 1px solid var(--benchmark-line); }
  .protocol-grid article > span { margin-bottom: 1rem; }
  .protocol-grid .protocol-sample { grid-column: auto; grid-template-columns: 1fr; border-top: 0; }
  .measure-list { grid-template-columns: 1fr 1fr; }
  .measure-list li { min-height: 100px; }
  .measure-list li:nth-child(even) { border-right: 0; }
  .measure-list li:nth-child(-n+4) { border-bottom: 1px solid var(--benchmark-line); }
  .framework-variables { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .framework-variables article { border-bottom: 1px solid var(--benchmark-line); }
  .framework-variables article:nth-child(even) { border-right: 0; }
  .framework-variables article:nth-child(n+3) { border-bottom: 0; }
  .procedure-sequence { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .procedure-sequence li { min-height: 100px; border-bottom: 1px solid var(--benchmark-line); }
  .procedure-sequence li:nth-child(even) { border-right: 0; }
  .procedure-sequence li:last-child { border-bottom: 0; }
  .environment-figures,
  .experiment-study { grid-template-columns: 1fr; }
  .stimuli-grid img { height: 180px; }
  .supporting-results { grid-template-columns: 1fr; }
  .project-photo-grid { grid-template-columns: 1fr; }
}

@media (max-width: 620px) {
  .hero { padding-top: 3.5rem; }
  .brand-gallery {
    grid-template-columns: none;
    grid-template-rows: repeat(2, 58px);
    grid-auto-flow: column;
    grid-auto-columns: 112px;
    overflow-x: auto;
    overscroll-behavior-inline: contain;
  }
  .brand-gallery li { min-height: 58px; }
  .figure-pair,
  .measure-list,
  .outputs-grid,
  .framework-variables,
  .procedure-sequence,
  .stimuli-grid { grid-template-columns: 1fr; }
  .measure-list li { min-height: 0; padding: 1rem 0; border-right: 0; border-bottom: 1px solid var(--benchmark-line); }
  .measure-list li:last-child { border-bottom: 0; }
  .decision-matrix,
  .decision-matrix thead,
  .decision-matrix tbody,
  .decision-matrix tr,
  .decision-matrix td { display: block; width: 100%; }
  .decision-matrix thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); clip-path: inset(50%); white-space: nowrap; }
  .decision-matrix tr { padding: 1rem 0; border-bottom: 1px solid var(--benchmark-line); }
  .decision-matrix tbody tr:last-child { border-bottom: 0; }
  .decision-matrix td,
  .decision-matrix td:nth-child(n) { width: 100%; padding: .45rem 0; border: 0; box-shadow: none; }
  .decision-matrix td::before { display: block; margin-bottom: .25rem; content: attr(data-label); color: var(--benchmark-accent); font: 600 .62rem/1.4 var(--font-mono); letter-spacing: .06em; text-transform: uppercase; }
  .decision-matrix td:last-child { padding-left: .75rem; border-left: 2px solid var(--benchmark-accent); }
  .outputs-grid article,
  .outputs-grid article:nth-child(even) { min-height: 0; padding: 1.25rem 0; border-right: 0; }
  .outputs-grid h3 { margin-top: 1rem; }
  .framework-variables article,
  .framework-variables article:first-child,
  .procedure-sequence li,
  .procedure-sequence li:first-child { min-height: 0; padding: 1rem 0; border-right: 0; border-bottom: 1px solid var(--benchmark-line); }
  .framework-variables article:last-child,
  .procedure-sequence li:last-child { border-bottom: 0; }
  .measure-list--six li:nth-child(n) { border-right: 0; border-bottom: 1px solid var(--benchmark-line); }
  .measure-list--six li:last-child { border-bottom: 0; }
  .stimuli-grid img { height: auto; max-height: 320px; }
}
</style>
