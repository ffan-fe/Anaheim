/**
 * File.upload component define
 */

import controller from './file.upload';
import template from './template.html';

'use strict';

/**
 * @type {Object}
 * @property {String}   type            - binding symbol is @, 标识上传的类型，默认file, 可选值：file, image
 * @property {String}   btnType         - binding symbol is @, 此类型针对的是按钮样式, 比如选了primary class会出现 `bp-btn-primary`, 默认值是primary, 可选值[default, primary, danger]
 * @property {String}   btnSize         - binding symbol is @, 按钮大小, 和bootstrap一样, 不填则是默认大小
 * @property {String}   btnContent      - binding symbol is @, 按钮展示的文本，（文件：默认展示'上传文件'  图片：默认展示'上传图片'）
 * @property {Bollean}  disabled        - binding symbol is @, 禁用
 * @property {Number}   minFileSize     - binding symbol is @, 上传图片的最小值
 * @property {Number}   maxFileSize     - binding symbol is @, 上传图片的最大值, 如5242880（1024*1024*5 = 5MB, 默认为5242880）
 * @property {String}   accept          - binding symbol is @, 接收的图片类型，多个以逗号隔开 (文件：默认为 '.xls, .xlsx'  图片：默认 'image/*')
 * @property {Number}   width           - binding symbol is <, 上传图片的宽度 和 高度同时使用
 * @property {Number}   height          - binding symbol is <, 上传图片的高度 和 宽度同时使用
 * @property {Number}   minWidth        - binding symbol is <, 上传图片的最小宽度
 * @property {Number}   maxWidth        - binding symbol is <, 上传图片的最大宽度
 * @property {Number}   minHeight       - binding symbol is <, 上传图片的最小高度
 * @property {Number}   maxHeight       - binding symbol is <, 上传图片的最大高度
 * @property {Bollean}  setMin          - binding symbol is <, 参数=true，与minHeight、minWidth同时使用，限制最小宽高比，且必须满足最小宽高比
 * @property {Object}   model           - binding symbol is =, 上传后的返回数据
 */
let componentDefine = {
  template,
  controller,
  controllerAs: 'controller',
  bindings: {
    type: '@',
    btnType: '@',
    btnSize: '@',
    btnContent: '@',
    disabled: '<',
    minFileSize: '<',
    maxFileSize: '<',
    accept: '@',
    width: '<',
    height: '<',
    minWidth: '<',
    maxWidth: '<',
    minHeight: '<',
    maxHeight: '<',
    setMin: '<',
    model: '='
  }
}

export default componentDefine;