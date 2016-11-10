import template from './template.html';
import controller from './controller';
import FileUpload from '../../src/components/file.upload/index.js';

export default angular.module('fileUploadShow', [
  FileUpload.name,
])
  .component('fileUploadShow', {
    template,
    controller,
    controllerAs: 'vm'
  });
