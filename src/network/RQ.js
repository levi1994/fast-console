import { getFileName } from '../common/util.js';

let _uid = 0;

export default class RQ {
  constructor(xhr, method, url, network) {
    this.xhr = xhr;
    this.method = method;
    this.url = url;
    this.id = _uid++;
    this.network = network;
  }
  handleSend(data) {
    var self = this;
    this.network._addRequest(this.id, {
      url: self.url,
      data: data,
      method: this.method,
      xhr: this.xhr,
      startTime: new Date().valueOf()
    });
  }
  handleDone() {
    var xhr = this.xhr;
    var resType = xhr.responseType;

    var resTxt = (resType === '' || resType === 'text') ? xhr.responseText : '';

    // 报一个资源加载错误
    if (xhr.status !== 200) {
      console.error(this.method + '  ' + this.url + '  ' + xhr.status);
    }

    this.network._updateRequest(this.id, {
      type: xhr.getResponseHeader('content-type'),
      status: xhr.status,
      done: true,
      size: 0,
      time: Date.now(),
      resTxt: resTxt,
      endTime: new Date().valueOf()
    });
  }
}

function getType(contentType) {

  var type = contentType.split(';')[0].split('/');

  return {
    type: type[0],
    subType: type[1]
  };
}
