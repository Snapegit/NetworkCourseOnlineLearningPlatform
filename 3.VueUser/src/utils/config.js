const config = {
    get() {
        return {
            url : process.env.VUE_APP_BASE_API_URL + process.env.VUE_APP_BASE_API + '/',
            name: process.env.VUE_APP_BASE_API,
			menuList:[
				{
					name: '课程信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'课程信息',
							url:'/index/kechengxinxiList'
						},
					]
				},
				{
					name: '学习资源管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'学习资源',
							url:'/index/xuexiziyuanList'
						},
					]
				},
				{
					name: '社区信息管理',
					icon: '${frontMenu.fontClass}',
					child:[
						{
							name:'社区信息',
							url:'/index/shequxinxiList'
						},
					]
				},
			]
        }
    },
    getProjectName(){
        return {
            projectName: "网络课程在线学习平台"
        } 
    }
}
export default config
