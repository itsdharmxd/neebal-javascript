// we use  lodash-es  because it gives pleanty of functions
// es stands for morderjs were we can use  import

/**
 *  we use
 * Babel = >for backward compatibility and browser compatibility
 * babel is a transpilers
 * webpack or parcel for building module  which is complrezed in size and many optimization 
 */

// for running in browser
import cloneDeep from './node_modules/lodash-es/cloneDeep.js';


let state= {
    name:'india',
    lang:'hindi'
}

let shallowCopy=state // Object.assign({},state)
let deepcopy=cloneDeep(state)

state.name='pakistan'

console.log(shallowCopy)
console.log(deepcopy)