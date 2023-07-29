import { Bulb } from './Bulb/bulb.js';
const appElm = document.querySelector('#app');

// appElm.innerHTML = '';

appElm.append(Bulb({ isOn: true }), Bulb({ isOn: false }));
