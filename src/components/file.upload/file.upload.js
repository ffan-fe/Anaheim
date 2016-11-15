/**
 * @ngdoc directive
 * @name fileupload.directive:bpFileUpload
 * @restrict E
 * @description
 * - 上传文件组件
 * - 上传图片组件
 * 
 * @param {String}   type      	   - binding symbol is @, 是单个时间组件还是时间范围组件
 * @param {String}   model       	 - binding symbol is =?, 单个时间值
 * @param {String}   startModel    - binding symbol is =?, 范围时间组件，开始时间值
 * @param {String}   endModel      - binding symbol is =?, 范围时间组件，结束时间值
 * @param {String}   min       		 - binding symbol is <, 最小时间限制
 * @param {String}   max   			   - binding symbol is <, 最大时间限制
 * @param {String}   startView  	 - binding symbol is @, 开始时间视图
 * @param {String}   minView       - binding symbol is @, 最小时间视图
 * @param {Number}   minuteStep    - binding symbol is <, 分钟间隔
 * @param {String}   modelType     - binding symbol is @, 显示的格式 YYYY-MM-DD 还是其他，默认到分
 * @param {Boolean}  startDisabled - binding symbol is <, 开始时间Disabled
 * @param {Boolean}  endDisabled   - binding symbol is <, 结束时间Disabled
 * @param {Boolean}  disabled      - binding symbol is <, Disabled状态
 * @param {Array}    placeholders  - binding symbol is <, placeholders
 * @param {String}   separator     - binding symbol is @, 范围时间分隔符，默认'至'
 *
 更多例子的[传送门](https://ffan-fe.github.io/Anaheim/#/fileupload)
 */
import Component from '../common/component';
import classNames from 'classnames';

'use strict';

/**
 * File.upload component
 * 
 * @export
 * @class Fileupload
 * @extends {Component}
 */
export default class Fileupload extends Component {
  constructor($scope, Upload) {
    'ngInject';
    super();
    this.$scope = $scope;
    this.Upload = Upload;
  }
  /**
   * @override 
   */
  _initDefaultValue() {
    this.base = {
      type: 'file',
      btnType: 'primary'
    };
    this.imageConfig = {
      fileName: null,
      fileType: null,
      fileSize: null,
      minFileSize: null,
      width: null,
      height: null,
      minWidth: null,
      maxWidth: null,
      minHeight: null,
      maxHeight: null,
      setMin: false
    };
    this.extendConfig(this.base);
    this.setDefaultValue();
  }
  /**
   * extend this.base
   */
  extendConfig(params) {
    angular.forEach(params, (item, index) => {
      if (this[index] && !angular.isUndefined(this[index])) {
        params[index] = this[index];
      }
    })
  }
  /**
   * accept设置默认值，文件默认为'.xls, .xlsx'，图片默认为支持所有图片类型
   */
  setDefaultValue() {
    if (this.base.type == 'file') {
      this.base.accept = '.xls, .xlsx';
      this.base.btnContent = '上传文件';
    } else if (this.base.type == 'image') {
      this.base.accept = 'image/*';
      this.base.btnContent = '上传图片';
    }
    if (this.accept && !angular.isUndefined(this.accept))
      this.base.accept = this.accept;
    if (this.btnContent && !angular.isUndefined(this.btnContent))
      this.base.btnContent = this.btnContent;
  }
  /**
   * 上传
   */
  uploadFile($file) {
    let file = $file;
    if (file) {
      this.Upload.upload({
        url: this.getPostUrl(),
        data: this.getPostParams(file)
      }).then(
        response => {
          if (response && response.data && response.data.status == 200) {
            this.model = response.data.data;
          } else {
            response && response.data && window.alert(response.data.msg);
          }
          this.disabled = false;
        }
      )
    }
  }
  /**
   * 获取接口地址
   */
  getPostUrl() {
    let url = '/System/files/ajaxFilesUpload';
    if (this.base.type == 'image') 
      url = '/System/files/ajaxImageUpload';
    return url;
  }
  /**
   * 转换上传的参数
   */
  getPostParams(file) {
    let result = {};
    if (this.base.type == 'file') {
      result = this.getFilePostParams(file);
    } else if (this.base.type == 'image'){
      result = this.getImagePostParams(file);
    }
    return result;
  }
  /**
   * 转换上传文件的参数
   */
  getFilePostParams(file) {
    let postParams = {};
    postParams.Filedata = file && file;
    if (this.base.accept) {
      postParams.inputType = this.stringToArr(this.base.accept).toString();
    }
    if (this.maxFileSize) postParams.fileSize = this.maxFileSize;
    return postParams;
  }
  /**
   * 将字符串去掉 '.'' 转换为数组
   */
  stringToArr(type) {
    let typeArr = type.split(",");
    angular.forEach(typeArr, (item, index) => {
      typeArr[index] = item.trim().substr(1);
    })
    return typeArr;
  }
  /**
   * 转换上传图片的参数
   */
  getImagePostParams(file) {
    let result = {};
    this.extendConfig(this.imageConfig);
    let postParams = angular.copy(this.imageConfig);
    postParams.fileName = file && file;
    angular.forEach(postParams, (item, index) => {
      if(item) result[index] = item;
    })
    this.shiftParams(result);
    console.log("getImagePostParams ", result);
    return result;
  }
  /**
   * 转换参数名称为接口需要的
   */
  shiftParams(result) {
    // width 和 height 必须同时使用， setType为true使宽高生效
    if (result.width && result.height) result.setType = true;
    if (this.maxFileSize) result.fileSize = this.maxFileSize;
    result.fileType = this.accept && JSON.stringify(this.stringToArr(this.accept));
  }
  /**
   * @override 
   */
  _createClassName() {
    this.base.className = classNames({
      'btn': true,
      'bp-btn': true,
      [`btn-${this.btnSize}`]: !!this.btnSize,
      [`bp-btn-${this.base.btnType}`]: true
    });
  }
  /**
   * @override 
   */
  _launch() {}
}