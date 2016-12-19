/**
 * Timeselector component define
 */

import controller from './timeselector';
import template from './template.html';
import './timeselector.less'

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    defaultTime: '=?defaultTime',
    timeNodes: '=?timeNodes',
    forRight: '=?forRight'
  }
}

export default componentDefine;
