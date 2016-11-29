/**
 * File.upload component entry
 * @author name
 */

import angular from 'angular';
import ngFileUpload from 'ng-file-upload';
import component from './file.upload.component';

'use strict';

export default angular.module('File.upload', [
  'ngFileUpload'
])
  .component('bpFileUpload', component);