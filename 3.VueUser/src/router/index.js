import { createRouter, createWebHashHistory } from 'vue-router'
import index from '../views'
import home from '../views/pages/home.vue'
import login from '../views/pages/login.vue'
import yonghuList from '@/views/pages/yonghu/list'
import yonghuDetail from '@/views/pages/yonghu/formModel'
import yonghuAdd from '@/views/pages/yonghu/formAdd'
import yonghuRegister from '@/views/pages/yonghu/register'
import yonghuCenter from '@/views/pages/yonghu/center'
import yijifenleiList from '@/views/pages/yijifenlei/list'
import yijifenleiDetail from '@/views/pages/yijifenlei/formModel'
import yijifenleiAdd from '@/views/pages/yijifenlei/formAdd'
import xuexiziyuanList from '@/views/pages/xuexiziyuan/list'
import xuexiziyuanDetail from '@/views/pages/xuexiziyuan/formModel'
import xuexiziyuanAdd from '@/views/pages/xuexiziyuan/formAdd'
import kechengxinxiList from '@/views/pages/kechengxinxi/list'
import kechengxinxiDetail from '@/views/pages/kechengxinxi/formModel'
import kechengxinxiAdd from '@/views/pages/kechengxinxi/formAdd'
import newsList from '@/views/pages/news/list'
import shequxinxiList from '@/views/pages/shequxinxi/list'
import shequxinxiDetail from '@/views/pages/shequxinxi/formModel'
import shequxinxiAdd from '@/views/pages/shequxinxi/formAdd'
import kechengxuexiList from '@/views/pages/kechengxuexi/list'
import kechengxuexiDetail from '@/views/pages/kechengxuexi/formModel'
import kechengxuexiAdd from '@/views/pages/kechengxuexi/formAdd'
import kechengpaixingList from '@/views/pages/kechengpaixing/list'
import kechengpaixingDetail from '@/views/pages/kechengpaixing/formModel'
import kechengpaixingAdd from '@/views/pages/kechengpaixing/formAdd'
import ziyuanleixingList from '@/views/pages/ziyuanleixing/list'
import ziyuanleixingDetail from '@/views/pages/ziyuanleixing/formModel'
import ziyuanleixingAdd from '@/views/pages/ziyuanleixing/formAdd'
import erjifenleiList from '@/views/pages/erjifenlei/list'
import erjifenleiDetail from '@/views/pages/erjifenlei/formModel'
import erjifenleiAdd from '@/views/pages/erjifenlei/formAdd'
import storeupList from '@/views/pages/storeup/list'

const routes = [{
		path: '/',
		redirect: '/index/home'
	},
	{
		path: '/index',
		component: index,
		children: [{
			path: 'home',
			component: home
		}
		, {
			path: 'yonghuList',
			component: yonghuList
		}, {
			path: 'yonghuDetail',
			component: yonghuDetail
		}, {
			path: 'yonghuAdd',
			component: yonghuAdd
		}
		, {
			path: 'yonghuCenter',
			component: yonghuCenter
		}
		, {
			path: 'yijifenleiList',
			component: yijifenleiList
		}, {
			path: 'yijifenleiDetail',
			component: yijifenleiDetail
		}, {
			path: 'yijifenleiAdd',
			component: yijifenleiAdd
		}
		, {
			path: 'xuexiziyuanList',
			component: xuexiziyuanList
		}, {
			path: 'xuexiziyuanDetail',
			component: xuexiziyuanDetail
		}, {
			path: 'xuexiziyuanAdd',
			component: xuexiziyuanAdd
		}
		, {
			path: 'kechengxinxiList',
			component: kechengxinxiList
		}, {
			path: 'kechengxinxiDetail',
			component: kechengxinxiDetail
		}, {
			path: 'kechengxinxiAdd',
			component: kechengxinxiAdd
		}
		, {
			path: 'newsList',
			component: newsList
		}
		, {
			path: 'shequxinxiList',
			component: shequxinxiList
		}, {
			path: 'shequxinxiDetail',
			component: shequxinxiDetail
		}, {
			path: 'shequxinxiAdd',
			component: shequxinxiAdd
		}
		, {
			path: 'kechengxuexiList',
			component: kechengxuexiList
		}, {
			path: 'kechengxuexiDetail',
			component: kechengxuexiDetail
		}, {
			path: 'kechengxuexiAdd',
			component: kechengxuexiAdd
		}
		, {
			path: 'kechengpaixingList',
			component: kechengpaixingList
		}, {
			path: 'kechengpaixingDetail',
			component: kechengpaixingDetail
		}, {
			path: 'kechengpaixingAdd',
			component: kechengpaixingAdd
		}
		, {
			path: 'ziyuanleixingList',
			component: ziyuanleixingList
		}, {
			path: 'ziyuanleixingDetail',
			component: ziyuanleixingDetail
		}, {
			path: 'ziyuanleixingAdd',
			component: ziyuanleixingAdd
		}
		, {
			path: 'erjifenleiList',
			component: erjifenleiList
		}, {
			path: 'erjifenleiDetail',
			component: erjifenleiDetail
		}, {
			path: 'erjifenleiAdd',
			component: erjifenleiAdd
		}
		, {
			path: 'storeupList',
			component: storeupList
		}
		]
	},
	{
		path: '/login',
		component: login
	}
	,{
		path: '/yonghuRegister',
		component: yonghuRegister
	}
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
