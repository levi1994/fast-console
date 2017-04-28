import template from './resource/template.html';
import $ from 'jquery';

function Console($node) {

  var html = template;
  var $tools = $(html);

  this.$console = $tools;

  // 使用list存储所有日志信息
  this.logList = [];

  // 默认打印日志类型
  this.logType = 0;

  // 根节点（fast-console）
  this.$root = $node;

  // 将渲染tools面板
  this.$root.find('.console-pane').append($tools);

  this._overrideConsole();
  this._overrideOnerror();

  // 绑定事件
  this._bindEvent();

  setTimeout(() => {
    this._checkResource();
  }, 3000);


}

Console.prototype._overrideConsole = function() {
  // 代理console.log,console.warning,console.error
  let _log = window.console.log;
  let _warn = window.console.warn;
  let _error = window.console.error;
  let _info = window.console.info;

  console.log = message => {
    this.logList.push({message: message, type: 1});
    _log(message);
    this._printLog(this.logType);
  };
  console.warn = message => {
    this.logList.push({message: message, type: 2});
    _warn(message);
    this._printLog(this.logType);
  };
  console.info = message => {
    this.logList.push({message: message, type: 3});
    _info(message);
    this._printLog(this.logType);
  };
  console.error = message => {
    this.logList.push({message: message, type: 4});
    _error(message);
    this._printLog(this.logType);
  };
};

// 展示筛选后的日志
// type为筛选类型
// 1：log
// 2：warning
// 3: info
// 4: error
// 5: 系统错误
// 0：All
Console.prototype._printLog = function(type) {
  let filterArray;
  if (type === 0) {
    filterArray = this.logList;
  } else {
    filterArray = this.logList.filter(function(item) {
      return item.type === type;
    });
  }

  // 使用过滤后的list渲染列表
  this._render(filterArray);
};

Console.prototype._overrideOnerror = function() {
  let _onerror = window.onerror;

  var self = this;

  // 监听window.onError,type设为4
  window.onerror = function(message, source, lineno, colno, error) {
    self.logList.push({
      message: message + ":(" + error.message + ")",
      source: source,
      lineno: lineno,
      colno: colno,
      error: error,
      type: 4
    });
    self._printLog(self.logType);
    _onerror(message, source, lineno, colno, error);
  };
};

Console.prototype._render = function(array) {
  // 首先清空
  this.$root.find(".log-container").empty();
  let $logitem = $('<div class="logitem iconfont"></div>');

  // 然后渲染
  for (var key in array) {
    let $item = $logitem.clone();
    var data = array[key];
    resolveObject('', data['message'], $item, true);
    if (data.type === 2) {
      $item.addClass('t-warn');
    } else if (data.type === 5 || data.type === 4) {
      $item.addClass('t-error');
    } else if (data.type === 3) {
      $item.addClass('t-info');
    } else {
      $item.addClass('t-log');
    }

    this.$root.find('.log-container').append($item);
  }
};

Console.prototype._clear = function() {
  this.$root.find(".log-container").empty();
  this.logList = [];
};

Console.prototype._bindEvent = function() {
  var self = this;
  // 添加事件
  self.$root.on("click", ".tools > div", function() {
    self.$root.find(".tools > div").removeClass('focus');
    let $this = $(this);
    $this.addClass('focus');

    let type;
    if ($this.hasClass('log')) {
      type = 1;
    } else if ($this.hasClass('warn')) {
      type = 2;
    } else if ($this.hasClass('error')) {
      type = 4;
    } else if ($this.hasClass('info')) {
      type = 3;
    } else {
      type = 0;
    }

    self._printLog(type);
  });

  // 清空
  self.$root.on('click', '.tools > .clear', function() {
    self._clear();
  });

  // 点击父节点展开
  this.$console.on("click", ".node", function(e) {
    $(this).toggleClass("drop");
    $(this).children().each(function() {
      $(this).toggleClass("open");
    });
    e.stopPropagation();
  });

  // 执行代码
  $(".code-submit").click(function() {
    var code = $(".code-input").val();
    if (!code) {
      return;
    }
    $(".code-input").val("");
    console.log("> " + code);
    window.eval(code);
  });
};

// 递归将复杂对象渲染为html
function resolveObject(key, obj, $target, rootFlag) {
  var $cnode = $('<div class="node iconfont"></div>');
  if (rootFlag) {
    $cnode.addClass("open");
  }
  if (typeof obj === 'object') {
    $cnode.append(getObjectHtml(key, obj, rootFlag));
    // 如果有内容，则遍历
    for (let key in obj) {

      // 将子节点都渲染那到cnode上
      let childNodes = resolveObject(key, obj[key], $cnode);
    }
  } else {
    $cnode.append(getObjectHtml(key, obj, rootFlag));
    $cnode.addClass('nocontent');
  }
  $target.append($cnode);
}

function getObjectHtml(key, obj, rootFlag) {
  let isobj = '<span class="isObject">Object</span>';
  let $isobj = $(isobj);
  let domkey = '<span class="c-key"></span>';
  let domvalue = '<span class="c-value"></span>';
  let $key = $(domkey).text(key);
  let $value;
  let $result = $("<span></span>");
  if (!rootFlag) {
    $result.append($key).append(':');
  }
  if (typeof obj === 'object') {
    $value = $(domvalue).text(JSON.stringify(obj));
    $result.append($isobj);
  } else {
    $value = $(domvalue).text(obj);
  }
  $result.append($value);
  return $result;
}

// 检查资源是否加载成功
Console.prototype._checkResource = function() {
  // 获得所有的script,link标签
  let rearr = [];
  $("script").each(function(key, val) {
    var arr = $(val).attr("src").split("/");
    rearr.push(arr[arr.length - 1]);
  });
  $("link").each(function(key, val) {
    var arr = $(val).attr("href").split("/");
    rearr.push(arr[arr.length - 1]);
  });

  // 检测资源是否加载成功
  for (let val of rearr) {
    let flag = false;
    let sucRe = window.performance.getEntries();
    for (let en of sucRe) {
      let nameArr = en.name.split("/");
      let name = nameArr[nameArr.length - 1];
      if (val === name) {
        flag = true;
      }
    }
    if (!flag) {
      console.error("Source " + val + " load Error");
    }
  }
};


// 初始化console相关
export default Console;
