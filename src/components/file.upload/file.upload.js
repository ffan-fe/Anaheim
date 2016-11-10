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
  constructor($scope) {
    'ngInject';
    super();
    this.$scope = $scope;
  }
  /**
   * @override 
   */
  _initDefaultValue() {
    this.config = {
      button: {
        type: 'primary',
        size: '',
        disabled: false,
        className: '',
      },
    };
  }
  /**
   * @override 
   */
  _createClassName() {
    this.config.button.className = classNames({
      'btn': true,
      'bp-btn': true,
      [`btn-${this.config.button.size}`]: !!this.config.button.size,
      [`bp-btn-${this.config.button.type}`]: true
    });
  }
  /**
   * @override 
   */
  _launch() {}
}