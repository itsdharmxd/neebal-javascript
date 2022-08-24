// we use  lodash-es  because it gives pleanty of functions
// es stands for morderjs were we can use  import

/**
 *  we use
 * Babel = >for backward compatibility and browser compatibility
 * webpack or parcel for building module  which is complrezed in size and many optimization 
 */

// for running in browser
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es'

let state= {
    name:'india',
    lang:'hindi'
}

let shallowCopy=state // Object.assign({},state)
let deepcopy=cloneDeep(state)

state.name='pakistan'

console.log(shallowCopy)
console.log(deepcopy)

/**  dev-dependency means we are  not  going to include 
 * this on code but we need this dependency for devlopment purpose
 * 
 *   parcel is a devtool so --save-dev
 * 
 *   npm i parcel --save-dev   => 
 */