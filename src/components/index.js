import datepicker from './datepicker/index.js'
import rangepicker from './rangepicker/index.js'
import checkboxtree from './checkboxtree/index.js'
import multiselect from './multiselect/index.js'
import 'angular-touch';
import './rangeinput/range';
import './rangeinput/range.less'


let componentModule = angular.module('bp.components', [
	datepicker.name,
	rangepicker.name,
	checkboxtree.name,
	multiselect.name,
	'ffan.range'
]);
export default componentModule;
