import shell from './shell';
const CMSConfig = {
	name: 'project-manager-web',
	choices: [
		{
			name: '克隆前端项目到目录',
			method() {
				shell.clone();
			}
		},
		{
			name: '克隆后端项目到目录',
			method() {
				shell.clone();
			}
		},
		{
			name: '初始化项目',
			method(again: () => void) {
				shell.install();
				again();
			}
		},
		{
			name: '拉取前端静态资源',
			method(again: () => void) {
				shell.pull();
				again();
			}
		},
		{
			name: '获取后端更新',
			method(again: () => void) {
				shell.pull();
				again();
			}
		},
		{
			name: '发布',
			method() {
				shell.start();
			}
		},
		{
			name: '重置分支',
			method() {
				shell.reset();
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