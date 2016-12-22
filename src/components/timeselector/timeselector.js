/**
 * Timeselector
 */

import Component from '../common/component';


'use strict';

/**
 * Timeselector component
 *
 * @export
 * @class Timeselector
 * @extends {Component}
 */
export default class Timeselector extends Component {
  constructor($rootScope, $scope, $document){
    'ngInject';
    super();
    this.rootScope = $rootScope;
    this.scope = $scope;
    $document.bind("click", function(event){
      $scope.controller.showFlag = false;
      $scope.$apply();
    });
  }
  /**
   * @override
   */
  _initDefaultValue() {
    this.showFlag = false;
    //判断时间列表参数是否合法
    if(this.timeList && this.timeList instanceof Array){
      this.timeNodes = this.timeList;
    }
    if(!this.timeList || (this.timeList && !(this.timeList instanceof Array))){
      this.timeNodes = ['30分钟','60分钟','3小时','6小时','1天','7天'];
    }
    //判断初始时间参数是否合法
    if(this.stateTime && typeof (this.stateTime) == 'string'){
      this.select(this.stateTime);
    }else{
      this.stateTime = this.timeNodes && this.timeNodes[2];
      this.index = this.stateTime;
      this.sendTimer();
    }
    this.locationTrack();
  }

  /**
   * @override
   */
  _createClassName() {}
  /**
   * @override
   */
  _launch() {}

  /**
   * 格式化时间点
   */
  formatData(timenode){
    let millisecond = /^(\d+)(毫秒|millisecond|ms)$/, second = /^(\d+)(秒|second|s)$/, minute = /^(\d+)(分钟|minute|min|m)$/, hour = /^(\d+)(小时|hour|h)$/, day = /^(\d+)(天|day|days|d)$/, reg = /\d+/g, num = null;
    if(millisecond.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0];
    }
    if(second.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0]*1000;
    }
    if(minute.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0]*1000*60;
    }
    if(hour.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0]*1000*60*60;
    }
    if(day.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0]*1000*24*60*60;
    }
    return this.timer;
  }

  /**
   * 选择时间点
   * @param timenode
   */
  select(timenode, e){
    this.index = this.stateTime =timenode;
    this.showFlag = false;
    this.formatData(timenode);
    this.sendTimer();
}

  /**
   * 控制时间节点显示
   */
  showList($event){
    $event.stopPropagation();
    if(this.showFlag){
      this.showFlag = false;
    }else{
      this.showFlag = true;
    }
  }

  /**
   * 排序
   */
  //sortTimeNode(){
  //  let arrayMS = [], arrayS = [], arrayM = [], arrayH = [], arrayD = [];
  //  for(var i=0; i<this.timeNodes.length; i++){
  //    if(this.timeNodes[i].indexOf('毫秒') >0 || this.timeNodes[i].indexOf('ms') >0){
  //      arrayMS.push(this.timeNodes[i]);
  //    }
  //    if(this.timeNodes[i].indexOf('秒') >0 || this.timeNodes[i].indexOf('s') >0){
  //      arrayS.push(this.timeNodes[i]);
  //    }
  //    if(this.timeNodes[i].indexOf('分钟') >0 || this.timeNodes[i].indexOf('m') >0){
  //      arrayM.push(this.timeNodes[i]);
  //    }
  //    if(this.timeNodes[i].indexOf('小时') >0 || this.timeNodes[i].indexOf('h') >0){
  //      arrayH.push(this.timeNodes[i]);
  //    }
  //    if(this.timeNodes[i].indexOf('天') >0 || this.timeNodes[i].indexOf('d') >0){
  //      arrayD.push(this.timeNodes[i]);
  //    }
  //  }
  //  this.sortAry(arrayMS, '毫秒', 'ms');
  //  console.log(arrayH);
  //  this.sortAry(arrayS, '秒', 's');
  //  console.log(arrayM);
  //  this.sortAry(arrayM, '分钟', 'm');
  //  console.log(arrayD);
  //  this.sortAry(arrayH, '小时', 'h');
  //  this.sortAry(arrayD, '天', 'd');
  //  this.timeNodes = arrayMS.concat(arrayS).concat(arrayM).concat(arrayH).concat(arrayD);
  //  console.log(this.timeNodes);
  //}
  //
  //sortAry(array, str1, str2) {
  //  array = ['700天', '50天'];
  //  str1 = '天';
  //  str2 = 'd';
  //  for(let i = 0; i < array.length; i++) {
  //    array[i].replace(str1, '');
  //    array[i].replace(str2, '');
  //  }
  //  array.sort(function (a, b) {
  //    return a - b;
  //  });
  //  for(let i=0; i<array.length; i++){
  //    array[i] += str1;
  //  }
  //  console.log('排序后的',array);
  //  return array;
  //}

  /**
   * 获取按钮的位置,由于时间列表显示左右
   * 这里有一个问题,如果页面中有多个事件选择器,只会计算第一个的距离,
   */
  locationTrack(){
    let winWidth = document.body.clientWidth, half_winWidth = winWidth/2;
    let btnOffset = document.getElementById('menuBtn').offsetLeft;
    if(btnOffset > half_winWidth){
      this.btnOnRight = true;
    }
  }

  /**
   * 向scope广播选择的时间点
   */
  sendTimer(){
    this.rootScope.$broadcast('timeselector',this.timer);
}

}
