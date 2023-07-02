import { registerApplication, start as singleSpaStart } from '../single-spa/src/my-single-spa';
import { importHtml } from './import-html';

const _app = [];
export const registerMicroApps = (apps) => {
  apps.forEach((app) => {
    const activeWhen = (location) => {
      return location.pathname.startsWith(app.activeRule);
    };
	const props = {};
    registerApplication(app.name, async () => {
			const {template, execScripts} = await importHtml(app.entry);
			const container = document.querySelector(app.container);
			container.appendChild(template);
			window.__POWERED_BY_QIANKUN__ = true;
			window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__ = app.entry;
			props.container = container;
			return execScripts();
		}, activeWhen, props);
  });
};

export const start = () => singleSpaStart()
