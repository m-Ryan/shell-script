import manager from './shell';
const ManagerConfig = {
	name: '项目web管理',
	choices: [
		{
			name: '克隆项目到目录',
			method() {
				manager.clone();
			}
		},
		{
			name: '安装依赖',
			method(again: () => void) {
				manager.install();
				again();
			}
		},
		{
			name: '获取更新',
			method(again: () => void) {
				manager.pull();
				again();
			}
		},
		{
			name: '项目发布',
			method() {
				manager.start();
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

export default ManagerConfig;
