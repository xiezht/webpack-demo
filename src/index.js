import _ from 'lodash'
import { cube } from './math'


function component() {

  var element = document.createElement('pre')

  element.innerHTML = [
    'Helelo webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n')

  return element
}

let element = component()
document.body.appendChild(element)

