/**
 * Created by zhaoran on 2016/12/14.
 */
import template from './template.html';
import controller from './controller.js';
import timeselectorCss from './timeselector.less'
import timeselector from '../../src/components/timeselector/index.js'

'use strict';

export default angular.module('timer',[
    timeselector.name
  ])
  .component('timer', {
    template,
    controller,
    controllerAs: 'vm'

})
