<script setup>
import ParticlesBackground from './components/ParticlesBackground.vue';
import NavBar from './components/NavBar.vue';
import OverviewSection from './components/OverviewSection.vue';
import EducationSection from './components/EducationSection.vue';
import ResearchInterestsSection from './components/ResearchInterestsSection.vue';
import CurrentResearchSection from './components/CurrentResearchSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import PublicationsSection from './components/PublicationsSection.vue';
import PatentsSection from './components/PatentsSection.vue';
import SkillsSection from './components/SkillsSection.vue';
import AwardsSection from './components/AwardsSection.vue';
import WorkExperienceSection from './components/WorkExperience.vue';
import IndividualWorkSection from './components/IndividualWork.vue';
import FooterSection from './components/FooterSection.vue';
import BackToTopButton from './components/BackToTopButton.vue';
</script>

<template>
  <div class="app">
    <!-- Global Particles Background -->
    <ParticlesBackground />
    
    <!-- Navigation Bar -->
    <NavBar />
    
    <!-- Main Content Area -->
    <main class="main">
      <!-- Overview Section -->
      <OverviewSection />
      
      <!-- Research & Projects Section -->
      <section id="research-projects">
        <ResearchInterestsSection />
        <CurrentResearchSection />
        <ProjectsSection />
      </section>
      
      <!-- Publications Section -->
      <PublicationsSection />

      <!-- Patents Section -->
      <PatentsSection />

      <!-- Embodied & Interactive Prototypes -->
      <IndividualWorkSection />

      <!-- Education Section -->
      <EducationSection />

      <!-- Work Experience Section -->
      <WorkExperienceSection />

      <!-- Awards & Honors Section -->
      <AwardsSection />

      <!-- Method & Skills Section -->
      <SkillsSection />
    </main>
    
    <!-- Footer -->
    <FooterSection />
    
    <!-- Back to Top Button -->
    <BackToTopButton />
  </div>
</template>
