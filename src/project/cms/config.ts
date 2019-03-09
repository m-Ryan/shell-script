import CMSBlog from './shell';
const CMSConfig = {
	name: 'cms内容管理系统',
	choices: [
		{
			name: '克隆项目到目录',
			method() {
				CMSBlog.clone();
			}
		},
		{
			name: '初始化项目',
			method(again: () => void) {
				CMSBlog.initStall();
				again();
			}
		},
		{
			name: '获取更新',
			method(again: () => void) {
				CMSBlog.pull();
				again();
			}
		},
		{
			name: '后端安装依赖',
			method() {
				CMSBlog.backendInstall();
			}
		},
		{
			name: '前端安装依赖',
			method() {
				CMSBlog.fontednInstall();
			}
		},
		{
			name: '前后端发布',
			method() {
				CMSBlog.start();
			}
		},
		{
			name: '后端发布',
			method() {
				CMSBlog.backendStart();
			}
		},
		{
			name: '前端发布',
			method() {
				CMSBlog.fontendStart();
			}
		},
		{
			name: '退出',
			method: () => {
				process.exit();
			}
		}
	]
};

export default CMSConfig;
