import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import NewLayout from './components/NewLayout.vue'
import Archives from './components/Archives.vue'
import Category from './components/Category.vue'
import Tags from './components/Tags.vue'
import Page from './components/Page.vue'
import Comment from './components/Comment.vue'
import { getPosts } from './serverUtils'

import './custom.css'

const pageSize = 10

export const themeConfig = {
    posts: await getPosts(pageSize),
    website: 'https://github.com/airene/vitepress-blog-pure', //copyright link
    // 评论的仓库地址
    comment: {
        repo: 'airene/vitepress-blog-pure',
        themes: 'github-light',
        issueTerm: 'pathname'
    },
    nav: [
        { text: 'Home', link: '/' },
        { text: 'Category', link: '/pages/category' },
        { text: 'Archives', link: '/pages/archives' },
        { text: 'Tags', link: '/pages/tags' },
        { text: 'About', link: '/pages/about' }
        // { text: 'Airene', link: 'http://airene.net' }  -- External link test
    ],
    search: {
        provider: 'local',
    },
    //outline:[2,3],
    outline:{
        label:'文章摘要'
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/airene/vitepress-blog-pure' }]
}

export default {
    ...DefaultTheme,
    Layout: NewLayout,
    enhanceApp({ app }) {
        // register global compoment
        app.component('Tags', Tags)
        app.component('Category', Category)
        app.component('Archives', Archives)
        app.component('Page', Page)
        app.component('Comment', Comment)
    }
} satisfies Theme
