import Home from '../components/pages/Home.vue'
import HomeView from '../components/pages/HomeView.vue'
import About from '../components/pages/About.vue'
import Projects from '../components/pages/Projects.vue'
import Now from '../components/pages/Now.vue'
import Timeline from '../components/pages/Timeline.vue'

export const routes = [
	{ 	
		path: '/', 
		component: Home, 
		children:[
			{path: '', component: HomeView},
			{path: '/about', component: About},
			{path: '/projects', component: Projects},
			{path: '/now', component: Now},
			{path: '/timeline', component: Timeline}
		]
	}
]
