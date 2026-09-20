	import {
		createRouter,
		createWebHashHistory
	} from 'vue-router'
	import news from '@/views/news/list'
	import erjifenlei from '@/views/erjifenlei/list'
	import ziyuanleixing from '@/views/ziyuanleixing/list'
	import storeup from '@/views/storeup/list'
	import discusskechengxinxi from '@/views/discusskechengxinxi/list'
	import kechengxinxi from '@/views/kechengxinxi/list'
	import shequxinxi from '@/views/shequxinxi/list'
	import discussxuexiziyuan from '@/views/discussxuexiziyuan/list'
	import yijifenlei from '@/views/yijifenlei/list'
	import yonghu from '@/views/yonghu/list'
	import kechengpaixing from '@/views/kechengpaixing/list'
	import kechengxuexi from '@/views/kechengxuexi/list'
	import config from '@/views/config/list'
	import xuexiziyuan from '@/views/xuexiziyuan/list'
	import discussshequxinxi from '@/views/discussshequxinxi/list'

export const routes = [{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},{
		path: '/',
		name: '首页',
		component: () => import('../views/index'),
		children: [{
			path: '/',
			name: '首页Home',
			component: () => import('../views/HomeView.vue'),
			meta: {
				affix: true
			}
		}, {
			path: '/updatepassword',
			name: '修改密码',
			component: () => import('../views/updatepassword.vue')
		}
		
		,{
			path: '/news',
			name: '新闻资讯',
			component: news
		}
		,{
			path: '/erjifenlei',
			name: '二级分类',
			component: erjifenlei
		}
		,{
			path: '/ziyuanleixing',
			name: '资源类型',
			component: ziyuanleixing
		}
		,{
			path: '/storeup',
			name: '我的收藏',
			component: storeup
		}
		,{
			path: '/discusskechengxinxi',
			name: '课程信息评论',
			component: discusskechengxinxi
		}
		,{
			path: '/kechengxinxi',
			name: '课程信息',
			component: kechengxinxi
		}
		,{
			path: '/shequxinxi',
			name: '社区信息',
			component: shequxinxi
		}
		,{
			path: '/discussxuexiziyuan',
			name: '学习资源评论',
			component: discussxuexiziyuan
		}
		,{
			path: '/yijifenlei',
			name: '一级分类',
			component: yijifenlei
		}
		,{
			path: '/yonghu',
			name: '用户',
			component: yonghu
		}
		,{
			path: '/kechengpaixing',
			name: '课程排行',
			component: kechengpaixing
		}
		,{
			path: '/kechengxuexi',
			name: '课程学习',
			component: kechengxuexi
		}
		,{
			path: '/config',
			name: '轮播图',
			component: config
		}
		,{
			path: '/xuexiziyuan',
			name: '学习资源',
			component: xuexiziyuan
		}
		,{
			path: '/discussshequxinxi',
			name: '社区信息评论',
			component: discussshequxinxi
		}
		]
	},
]

const router = createRouter({
	history: createWebHashHistory(process.env.BASE_URL),
	routes
})

export default router
