/**
 * File.upload component define
 */

import controller from './file.upload';
import template from './template.html';

'use strict';

/**
 * @type {Object}
 * @property {String}   type        - binding symbol is @, 此类型针对的是样式, 比如选了primary class会出现 `bp-btn-primary`, 默认值是primary, 可选值[default, primary, danger]
 * @property {String}   size        - binding symbol is @, 按钮大小, 和bootstrap一样, 不填则是默认大小
 * @property {Boolean}  disabled    - binding symbol is <, 禁用状态
 * @property {Boolean}  loading     - binding symbol is <, 是否支持加载，默认不支持
 */
let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    /**
     * 类型, 会改变按钮的样式
     * @type {String}
     */
    type: '@',
    /**
     * 沿用bootstrap 改变大小
     * @type {String}
     */
    size: '@',
    /**
     * 是否禁用	
     * @type {Boolean}
     */
    disabled: '<',
    /**
     * 是否支持加载	
     * @type {Boolean}
     */
    loading: '<',
  }
}

export default componentDefine;