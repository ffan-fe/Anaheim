import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data';

export default class FileUploadTestController {
  constructor($timeout, $sce, $scope) {
    'ngInject';

    this.type = 'image';
    this.btnType = 'default';
    this.btnSize = 'sm';
    this.imageBtnContent = "图片上传";
    this.fileBtnContent = "文件上传";
    this.imageAccept = '.png';
    this.fileAccept = '.doc, .docx';
    this.minFileSize = 1024 * 10;
    this.maxFileSize = 1024 * 100;
    this.width = 1280;
    this.height = 720;
    this.minWidth = 1000;
    this.maxWidth = 1300;
    this.minHeight = 700;
    this.maxHeight = 900;
    this.setMin = true;
    this.disabled = true;
    this.model = '';
    $scope.$watch(
      () => {
        return this.model;
      }, 
      (n, o) => {
        console.log("model ", n);
      }, true
    )
    
    // 默认文件上传
    this.html1 = $sce.trustAsHtml(Prism.highlight(data['html1'], Prism.languages.html));
    this.js1 = $sce.trustAsHtml(Prism.highlight(data['js1'], Prism.languages.javascript));
    // 置灰文件上传按钮
    this.html2 = $sce.trustAsHtml(Prism.highlight(data['html2'], Prism.languages.html));
    this.js2 = $sce.trustAsHtml(Prism.highlight(data['js2'], Prism.languages.javascript));
    // 限制上传文件的文件类型、按钮文本、按钮大小、文件最大值
    this.html3 = $sce.trustAsHtml(Prism.highlight(data['html3'], Prism.languages.html));
    this.js3 = $sce.trustAsHtml(Prism.highlight(data['js3'], Prism.languages.javascript));
    // 默认图片上传样式
    this.html4 = $sce.trustAsHtml(Prism.highlight(data['html4'], Prism.languages.html));
    this.js4 = $sce.trustAsHtml(Prism.highlight(data['js4'], Prism.languages.javascript));
    // 限制上传图片的宽高
    this.html5 = $sce.trustAsHtml(Prism.highlight(data['html5'], Prism.languages.html));
    this.js5 = $sce.trustAsHtml(Prism.highlight(data['js5'], Prism.languages.javascript));
    // 限制上传图片的最大值和最小值
    this.html6 = $sce.trustAsHtml(Prism.highlight(data['html6'], Prism.languages.html));
    this.js6 = $sce.trustAsHtml(Prism.highlight(data['js6'], Prism.languages.javascript));
    // 限制上传图片的最小宽度、最大宽度、最小高度、最大高度
    this.html7 = $sce.trustAsHtml(Prism.highlight(data['html7'], Prism.languages.html));
    this.js7 = $sce.trustAsHtml(Prism.highlight(data['js7'], Prism.languages.javascript));
    // 限制上传图片的最小宽高比 setMin必须传
    this.html8 = $sce.trustAsHtml(Prism.highlight(data['html8'], Prism.languages.html));
    this.js8 = $sce.trustAsHtml(Prism.highlight(data['js8'], Prism.languages.javascript));
    // 限制上传图片的文件类型、按钮大小、按钮样式
    this.html9 = $sce.trustAsHtml(Prism.highlight(data['html9'], Prism.languages.html));
    this.js9 = $sce.trustAsHtml(Prism.highlight(data['js9'], Prism.languages.javascript));
  }
}