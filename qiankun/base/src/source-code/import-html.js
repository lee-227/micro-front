import {getResource} from './util'
export const importHtml = async (url) => {
    const html = await getResource(url);
    const template = document.createElement('div');
    template.innerHTML = html;
    const scripts = template.querySelectorAll('script')
    const getExternalScripts = () => {
        return Promise.all(Array.from(scripts).map((script) => {
            const src = script.getAttribute('src');
            if (!src) {
                return Promise.resolve(script.innerHTML)
            } else {
                return getResource(
                    src.startsWith('http') ? src : `${url}${src}`
                )
            }
        }))
    }
    const execScripts = async () => {
        const scripts = await getExternalScripts();
        const module = {exports: {}};
        const exports = module.exports;
        // eslint-disable-next-line no-eval
        scripts.forEach(code => eval(code));
        return module.exports;
    }
    return {
        template,
        getExternalScripts,
        execScripts
    }
}