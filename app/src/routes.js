import PageHome from './components/PageHome.vue'
import PageContactUs from './components/PageContactUs.vue'
import PageBlog from './components/PageBlog.vue'
import PageInfo from './components/PageInfo.vue'

const routes = [
    { path: '/', component: PageHome },
    { path: '/contact', component: PageContactUs },
    { path: '/blog', component: PageBlog },
    { path: '/info', component: PageInfo },
];

export default routes;