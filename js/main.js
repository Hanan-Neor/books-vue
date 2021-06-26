// import './pages/book-app.js';
// import './cmps/app-header.js';
import appHeader from './cmps/app-header.js';
// import './cmps/app-footer.js';
import appFooter from './cmps/app-footer.js';
import bookApp from './pages/book-app.js';
import homePage from './pages/home-page.js';
import aboutPage from './pages/about-page.js';
import bookDetails from './pages/book-details.js'
import bookAdd from './pages/book-add.js';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/add',
        component: bookAdd
    },
    {
        path: '/book/:bookId', // : => Param
        component: bookDetails
    }

]

const router = new VueRouter({routes});


new Vue({
    el: '#app',
    // router : router,
    router,
    template: `
    <section>
        <app-header/>
        <router-view />
        <app-footer/>
        </section>
`,

    data() {
        return {
            user: 5,

        }
    },
    components: {
        bookApp,
        appHeader,
        appFooter,

    },

})