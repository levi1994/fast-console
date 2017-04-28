import template from './resource/template.html';
import RQ from './RQ.js';
import $ from 'jquery';

function Network($node) {

  var html = template;
  this.$network = $(html);
  this.$root = $node;

  this.$root.find(".network-pane").append(this.$network);

  // 获得performance
  var performance = this._performance = window.webkitPerformance || window.performance;

  // 加载性能详情
  this._performanceTiming = performance.timing;

  // 放置异步请求
  this._request = [];

  var self = this;

  // resource的数量
  let _resourceSize = 0;

  // 资源加载详情
  var inter = setInterval(function() {
    self._resourceTimingData = performance.getEntries();

    // 大小变化后重新渲染你
    if (self._resourceTimingData.length !== _resourceSize) {
      _resourceSize = self._resourceTimingData.length;
      self._renderResource();
    }
  }, 1000);

  // 重写XHR
  this._overrideXHR();

  // 绑定事件
  this._bindEvent();

}

Network.prototype._renderResource = function() {
  let list = this._resourceTimingData;
  this.$network.find(".r-content").empty();

  let dom = `<div class="r-item">
              <div class="name"></div>
              <div class="time"></div>
              <div class="fullname"></div>
            </div>`;
  let $item = $(dom);
  for (let val of list) {
    let $myitem = $item.clone();
    $myitem.find(".time").text(parseInt(val.responseEnd - val.connectStart, 0) + 'ms');
    let nameArr = val.name.split("/");
    let shortname = nameArr[nameArr.length - 1];
    $myitem.find(".name").text(shortname);
    $myitem.find(".fullname").text(val.name);
    this.$network.find(".r-content").append($myitem);
  }
};

// 重写XHR
Network.prototype._overrideXHR = function() {

  // 获得XMLHttpRequest原型
  let xhrProto = window.XMLHttpRequest.prototype;
  var self = this;

  // 缓存一个
  let _send = xhrProto.send;
  let _open = xhrProto.open;

  // 重写xhr prototype 的open
  xhrProto.open = function(method, url) {
    let xhr = this;

    // 创建一个RQ对象，使用对象中的方法处理请求状态
    let req = xhr.req = new RQ(xhr, method, url, self);

    // 如果状态改变，出发RQ对象中相应的操作
    xhr.addEventListener('readystatechange', function() {
      switch (xhr.readyState) {
      // readystate为4,说明请求处理完毕
      case 4: return req.handleDone();
      }
    });

    return _open.apply(this, arguments);
  };

  // 重写xhr prototype 的send
  xhrProto.send = function(data) {
    var req = this.req;
    if (req) req.handleSend(data);

    return _send.apply(this, arguments);
  };
};

Network.prototype._addRequest = function(id, data) {
  this._request[id] = data;
};

Network.prototype._updateRequest = function(id, data) {
  var target = this._request[id];

  if (!target) return;

  $.extend(target, data);

  target.time = target.endTime - target.startTime;
  target.displayTime = target.time;

  if (target.done && (target.status < 200 || target >= 300)) target.hasErr = true;

  this._renderXHR();
};

// render xhr
Network.prototype._renderXHR = function() {
  this.$network.find('.x-content').empty();
  for (let val of this._request) {
    let dom = `<div class="x-item">
                <div class="type"></div>
                <div class="status"></div>
                <div class="method"></div>
                <div class="time"></div>
                <div class="fullname"></div>
              </div>`;
    let $item = $(dom);
    $item.find(".type").text(val.type);
    $item.find(".status").text(val.status);
    $item.find(".method").text(val.method);
    $item.find(".time").text(val.time + 'ms');
    if (val.method === 'GET') {
      $item.find(".fullname").text(val.url);
    } else {
      $item.find(".fullname").text(val.data);
    }
    if (val.status !== 200) {
      $item.addClass('error');
    }
    this.$network.find('.x-content').append($item);
    $item.click(function() {
      showDetail(val);
    });
  }
};

Network.prototype._bindEvent = function() {
  var $network = this.$network;
  $network.find(".back").click(function() {
    $('.network-detail').hide();
    $('.network-info').show();
  });
};

function showDetail(data) {
  $('.network-info').hide();
  var $detail = $('.network-detail');
  $detail.find('.t-method').text('[' + data.method + ']');
  $detail.find('.t-url').text(data.url);
  $detail.find('.m-url').text(data.url);
  $detail.find('.m-method').text(data.method);
  $detail.find('.m-param').text(JSON.stringify(getParams(data)));
  $detail.find('.m-status').text(data.status);
  $detail.find('.m-body').text(data.xhr.response);
  $detail.show();
}

function getParams(data) {
  let str;
  if (data.method === 'GET') {
    str = data.url.split('?')[1];
  } else {
    str = data.data;
  }

  let result = {};
  let parr = str.split('&');
  for (var val of parr) {
    var sarr = val.split('=');
    result[sarr[0]] = sarr[1];
  }
  return result;
}

export default Network;
