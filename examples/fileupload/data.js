export default {
  html1:`
    <bp-file-upload model="vm.model"></bp-file-upload>
    `,
  js1:`
    this.model = '';
    `,
  html2:`
    <bp-file-upload disabled="vm.disabled"></bp-file-upload>
    `,
  js2:`
    this.disabled = true;
    `,
  html3:`
    <bp-file-upload
      model="vm.model"
      accept="{{vm.fileAccept}}"
      btn-content="{{vm.fileBtnContent}}"
      btn-size ="{{vm.btnSize}}"
      btn-type="{{vm.btnType}}"
      max-file-size="vm.maxFileSize"
    >
    </bp-file-upload>
    `,
  js3:`
    this.model = '';
    this.fileAccept = '.doc, .docx';
    this.fileBtnContent = "文件上传";
    this.btnSize = 'sm';
    this.btnType = 'default';
    this.maxFileSize = 1024 * 100;
    `,
  html4:`
    <bp-file-upload
      model="vm.model"
      type="{{vm.type}}"
    >
    </bp-file-upload>
    `,
  js4:`
    this.model = '';
    this.type = 'image';
    `,
  html5:`
    <bp-file-upload
      model="vm.model"
      type="{{vm.type}}"
      width="vm.width"
      height="vm.height"
    >
    </bp-file-upload>
    `,
  js5:`
    this.model = '';
    this.type = 'image';
    this.width = 1280;
    this.height = 720;
    `,
  html6:`
    <bp-file-upload
      model="vm.model"
      type="{{vm.type}}"
      min-file-size="vm.minFileSize"
      max-file-size="vm.maxFileSize"
    >
    </bp-file-upload>
    `,
  js6:`
    this.model = '';
    this.type = 'image';
    this.minFileSize = 1024 * 10;
    this.maxFileSize = 1024 * 100;
    `,
  html7:`
    <bp-file-upload
      model="vm.model"
      type="{{vm.type}}"
      min-width="vm.minWidth"
      max-width="vm.maxWidth"
      min-height="vm.minHeight"
      max-height="vm.maxHeight"
    >
    </bp-file-upload>
    `,
  js7:`
    this.model = '';
    this.type = 'image';
    this.minWidth = 1000;
    this.maxWidth = 1300;
    this.minHeight = 700;
    this.maxHeight = 900;
    `,
  html8:`
    <bp-file-upload
      model="vm.model"
      type="{{vm.type}}"
      min-width="vm.minWidth"
      min-height="vm.minHeight"
      set-min="vm.setMin"
    >
    </bp-file-upload>
    `,
  js8:`
    this.model = '';
    this.type = 'image';
    this.minWidth = 1000;
    this.minHeight = 700;
    this.setMin = true;
    `,
  html9:`
    <bp-file-upload
      model="vm.model"
      type="{{vm.type}}"
      accept="{{vm.imageAccept}}"
      btn-size="{{vm.btnSize}}"
      btn-type="{{vm.btnType}}"
      btn-content="{{vm.imageBtnContent}}"
    >
    </bp-file-upload>
    `,
  js9:`
    this.model = '';
    this.type = 'image';
    this.imageAccept = '.png';
    this.btnSize = 'sm';
    this.btnType = 'default';
    `,
}