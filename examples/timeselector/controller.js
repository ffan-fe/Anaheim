/**
 * Created by zhaoran on 2016/12/14.
 */
export default class timeSelector {
  constructor($scope){
    'ngInject';
    this.scope = $scope;
    this.scope.$on('timeselector',function(event, data){
      console.log('时间点', data);
    })
  }
}
