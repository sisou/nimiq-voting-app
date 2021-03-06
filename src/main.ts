import Vue from 'vue';
import App from './App.vue';

// On browser warning stop further execution.
if (window.hasBrowserWarning) {
    throw new Error('Execution aborted due to browser warning');
}

// Specify where the svg asset for the Nimiq identicons is located. The file gets copied to this location via
// the copy-webpack-plugin as specified in vue.config.js
window.NIMIQ_IQONS_SVG_PATH = `${process.env.BASE_URL}img/iqons.min.svg`;

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount('#app');
