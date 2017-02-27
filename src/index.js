// es6 polyfill
import Button from './components/button';
const icomponents = {
    iButton: Button
};
const install = function (Vue, opts = {}) {
    Object.keys(icomponents).forEach((key) => {
        Vue.component(key, icomponents[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(icomponents, {install});   // eslint-disable-line no-undef
