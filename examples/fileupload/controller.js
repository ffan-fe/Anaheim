import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data';

export default class FileUploadTestController {
  constructor($timeout, $sce, $scope) {
    'ngInject';

    this.type = 'image';
    this.btnType = 'default';
    this.btnSize = 'sm';
    this.btnContent = "图片上传";
    this.minFileSize = 1024 * 10;
    this.maxFileSize = 1024 * 1024;
    // this.maxFileSize = 7340032;
    this.accept = '.png';
    this.width = 1280;
    this.height = 720;
    this.minWidth = 1000;
    this.maxWidth = 1300;
    this.minHeight = 700;
    this.maxHeight = 900;
    this.setMin = true;
    this.model = '';
    $scope.$watch(
      () => {
        return this.model;
      }, 
      (n, o) => {
        console.log("n ", n);
      }, true
    )
    /**
     * 默认情况
     */
    this.html1 = $sce.trustAsHtml(Prism.highlight(data['html1'], Prism.languages.html));
    this.js1 = $sce.trustAsHtml(Prism.highlight(data['js1'], Prism.languages.javascript));
  }
}