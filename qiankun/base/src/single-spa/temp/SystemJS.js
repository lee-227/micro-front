const newMapUrl = {};
function processScripts() {
    Array.from(document.querySelectorAll('script')).forEach((script) => {
        if (script.type === 'systemjs-importmap') {
            const imports = JSON.parse(script.innerHTML).imports; // 映射包的路径
            Object.entries(imports).forEach(
                ([key, value]) => (newMapUrl[key] = value)
            );
        }
    });
}
function load(id) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        id = newMapUrl[id] || id;
        script.src = id;
        script.async = true;
        document.head.appendChild(script);
        script.addEventListener('load', function () {
            let _lastRegister = lastRegister;
            lastRegister = undefined;
            resolve(_lastRegister);
        });
    });
}
let lastRegister;
let globalMap = new Set();
let saveGlobalPro = () => {
    for (let p in window) {
        globalMap.add(p);
    }
};
saveGlobalPro();
function getGlobalLastPro() {
    let result;
    for (let p in window) {
        if (globalMap.has(p)) continue;
        result = window[p];
    }
    return result;
}
class SystemJS {
    import(id) {
        // 1.将script脚本进行解析

        return Promise.resolve(processScripts())
            .then(() => {
                // 2.获取最后一个斜杠的位置 + 文件名
                const lastSepIndex = location.href.lastIndexOf('/');
                const baseUrl = location.href.slice(0, lastSepIndex + 1);
                if (id.startsWith('./')) {
                    return baseUrl + id.slice(2);
                }
            })
            .then((id) => {
                // 根据路径加载文件
                let execute;
                return load(id)
                    .then((registeration) => {
                        function _export(result) {}
                        let declared = registeration[1](_export);
                        execute = declared.execute;
                        // 依赖列表，将在的依赖结果调用setters进行设置
                        return [registeration[0], declared.setters];
                    })
                    .then(([registration, setters]) => {
                        return Promise.all(
                            registration.map((dep, i) => {
                                const setter = setters[i]; // 加载依赖
                                return load(dep).then(() => {
                                    let p = getGlobalLastPro();
                                    setter(p);
                                });
                            })
                        );
                    })
                    .then(() => {
                        execute();
                    });
            });
    }
    register(deps, declare) {
        // 执行打包的模块
        lastRegister = [deps, declare];
    }
}
const System = new SystemJS();
