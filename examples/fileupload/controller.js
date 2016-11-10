import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import data from './data';

export default class FileUploadTestController {
  constructor($timeout, $sce, $scope) {
    'ngInject';

    this.model = '';

    /**
     * 默认情况
     */
    this.html1 = $sce.trustAsHtml(Prism.highlight(data['html1'], Prism.languages.html));
    this.js1 = $sce.trustAsHtml(Prism.highlight(data['js1'], Prism.languages.javascript));
  }
}