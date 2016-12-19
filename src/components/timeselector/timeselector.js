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
    if(this.defaultTime){
      this.select(this.defaultTime);
    }
    if(!this.timeNodes){
      this.timeNodes = ['30分钟','60分钟','3小时','6小时','1天','7天'];
    }
    this.sendTimer();
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
   * 选择时间点
   * @param timenode
   */
  select(timenode){
    this.index = timenode;
    let minute = /^(\d+)分钟$/;
    let hour = /^(\d+)小时$/;
    let day = /^(\d+)天$/;
    let reg = /\d+/g;
    if(minute.test(timenode)){
      let num = reg.exec(timenode);
      this.timer = num[0]*60;
      this.showFlag = false;
      this.sendTimer();
      console.log('分钟',this.timer);
      console.log('数据类型',typeof (this.timer));
    }
    else if(hour.test(timenode)){
      let num = reg.exec(timenode);
      this.timer = num[0]*60*60;
      this.showFlag = false;
      this.sendTimer();
      console.log("小时",this.timer);
      console.log('数据类型',typeof (this.timer));
    }
    else if(day.test(timenode)){
      let num = reg.exec(timenode);
      this.timer = num[0]*24*60*60;
      this.showFlag = false;
      this.sendTimer();
      console.log('天',this.timer);
      console.log('数据类型',typeof (this.timer));
    }
    else{
      let num = reg.exec(timenode);
      this.timer = num[0];
      this.showFlag = false;
      this.sendTimer();
      console.log('秒',this.timer);
      console.log('数据类型',typeof (this.timer));
    }
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
   * 向scope广播选择的时间点
   */
  sendTimer(){
    this.rootScope.$broadcast('Timer',this.timer);
}

}
