import appMain from './components/appMain/appMain.vue'
import appEducation from './components/appEducation/appEducation.vue'
import appSkills from './components/appSkills/appSkills.vue'
import appExperience from './components/appExperience/appExperience.vue'

export const routes = [
  {
    path: '/',
    component: appMain
  },
  {
    path: '/education',
    component: appEducation
  },
  {
    path: '/skills',
    component: appSkills
  },
  {
    path: '/experience',
    component: appExperience
  }
]
