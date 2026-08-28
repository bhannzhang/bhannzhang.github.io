import { createApp } from 'vue'
import './style.scss'
import AppliedResearchProject from './AppliedResearchProject.vue'
import { appliedProjects } from './content/appliedProjects.js'

createApp(AppliedResearchProject, { project: appliedProjects.evEnergy }).mount('#app')
