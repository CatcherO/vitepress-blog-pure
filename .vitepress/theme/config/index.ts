import { getPosts } from './serverUtils'

const pageSize = 1

export default {
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