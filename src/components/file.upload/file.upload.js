/**
 * Fileupload
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
            this.result = response.data.data;
          } else {
            response && response.data && window.alert(response.data.msg);
          }
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