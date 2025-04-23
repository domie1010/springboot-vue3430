const base = {
    get() {
        return {
            url : "http://localhost:8080/xianlvyouguanli/",
            name: "xianlvyouguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/xianlvyouguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "西安旅游管理系统"
        } 
    }
}
export default base
