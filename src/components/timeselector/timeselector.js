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
    //判断传递的时间列表参数是否合法
    if(this.timeList && this.timeList instanceof Array){
      this.timeNodes = this.timeList;
    }
    if(!this.timeList || (this.timeList && !(this.timeList instanceof Array))){
      this.timeNodes = ['30分钟','60分钟','3小时','6小时','1天','7天'];
    }
    //判断传递的初始时间参数是否合法
    if(this.stateTime && typeof (this.stateTime) == 'string'){
      this.select(this.stateTime);
    }else{
      this.stateTime = this.timeNodes && this.timeNodes[0];
      this.select(this.stateTime);
    }
    this.sortList();
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
    let millisecond = /^(\d+)毫秒$/, second = /^(\d+)秒$/, minute = /^(\d+)分钟$/, hour = /^(\d+)小时$/, day = /^(\d+)天$/, reg = /\d+/g, num = null;
    if(millisecond.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0];
      console.log('毫秒',this.timer);
    }
    if(second.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0]*1000;
      console.log('秒',this.timer);
    }
    if(minute.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0]*1000*60;
      console.log('分钟',this.timer);
    }
    if(hour.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0]*1000*60*60;
      console.log("小时",this.timer);
    }
    if(day.test(timenode)){
      num = reg.exec(timenode);
      this.timer = num[0]*1000*24*60*60;
      console.log('天',this.timer);
    }
    return this.timer;
  }

  /**
   * 选择时间点
   * @param timenode
   */
  select(timenode){
    this.index = timenode;
    this.showFlag = false;
    this.formatData(timenode);
    this.sendTimer();
}

  /**
   * 控制时间节点显示
   */
  showList($event){
    $event.stopPropagation();
    //console.log('scope',this.scope);
    //console.log('this',this);
    if(this.showFlag){
      this.showFlag = false;
    }else{
      this.showFlag = true;
    }
  }

  /**
   * 排序
   */
  sortList(){
    let sourceList = this.timeNodes, completeList = [], num = null;
    for(let i=0; i<sourceList.length; i++){
      num = this.formatData(sourceList[i]);
      completeList.push(num);
    }
    completeList.sort(function(a, b){
      return b-a;
    });
    console.log('排序后的',completeList);
    return completeList;
  }

  /**
   * 向scope广播选择的时间点
   */
  sendTimer(){
    this.rootScope.$broadcast('timeselector',this.timer);
}

}
