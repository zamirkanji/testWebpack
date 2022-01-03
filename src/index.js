import _ from 'lodash';
import './style.css';
import IMG from './IMG_0730.jpeg';
// import myName from './myName'; 
import {myName, logTest} from './myName';
import printMe from './print.js';

import Data from './data.xml';
import Notes from './data.csv';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`

console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`

console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component () {
    const element = document.createElement('div');
    const btn = document.createElement('button');
    
    // Lodash, now imported by this script
    // element.textContent = _.join(['hello', 'webpack'], ' ');
    element.textContent = myName('Zamir');
    element.classList.add('hello');

    btn.textContent = 'Click me!';
    btn.addEventListener('click', printMe);

    element.appendChild(btn);

    // const myImg = new Image();
    // myImg.src = IMG;
    // element.appendChild(myImg);

    console.log(Data);
    console.log(Notes);

    return element;
}

logTest('Test');



document.body.appendChild(component());