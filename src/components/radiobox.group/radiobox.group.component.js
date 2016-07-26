/**
 * Radio component define
 */

import controller from './radiobox.group';
import template from './template.html';
import './radiobox.group.less';

'use strict';

let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    /**
     * 是否被禁用
     * @type {Boolean}
     */
    disabled: '<',

    /**
     * model
     * @type {String}
     */
    model: '=?model',

    /**
     * list
     * @type {String}
     */
    list: '=?list',

    /**
     * Is display li to inline
     *
     * @type {Boolean}
     */
    inline: '=?inline'

  }
};

export default componentDefine;