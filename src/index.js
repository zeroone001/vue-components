// es6 polyfill
import Button from './components/button';
const iview = {
    iButton: Button
};
const install = function (Vue, opts = {}) {
    Object.keys(iview).forEach((key) => {
        Vue.component(key, iview[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(iview, {install});   // eslint-disable-line no-undef
