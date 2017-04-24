import getHtml from './resource/html';
import $ from 'jquery';

// 初始化console相关
export default function($node) {

  var html = getHtml();
  var $tools = $(html);

  // 使用list存储所有日志信息
  let logList = [];

  // 默认打印日志类型
  let logType = 0;

  // 根节点（fast-console）
  let $root = $node;

  // 重写console.log,console.warning,console.error
  let _log = window.console.log;
  let _warning = window.console.warning;
  let _error = window.console.error;


  window.console.log = function(message) {
    logList.push({message: message, type: 1});
    _log(message);
    printLog($root, logType);
  };
  window.console.warning = function(message) {
    logList.push({message: message, type: 2});
    _warning(message);
    printLog($root, logType);
  };
  window.console.error = function(message) {
    logList.push({message: message, type: 3});
    _error(message);
    printLog($root, logType);
  };

  // 监听window.onError,type设为4
  window.onerror = function(message, source, lineno, colno, error) {
    logList.push({
      message: message,
      source: source,
      lineno: lineno,
      colno: colno,
      error: error,
      type: 4
    });
    printLog($root, logType);
  };

  // 展示筛选后的日志
  // type为筛选类型
  // 1：log
  // 2：warning
  // 3: error
  // 4: 系统错误
  // 0：All
  function printLog($root, type) {
    let filterArray;
    if (type === 0) {
      filterArray = logList;
    } else {
      filterArray = logList.filter(function(item) {
        return item.type === type || item.type === 4;
      });
    }

    // 使用过滤后的list渲染列表
    render($root, filterArray);
  }

  function render($root, array) {
    // 首先清空
    $root.find(".log-container").empty();
    let $logitem = $('<div class="logitem"></div>');

    // 然后渲染
    for (var key in array) {
      let $item = $logitem.clone();
      var data = array[key];
      $item.text(data.message);
      if (data.type === 2) {
        $item.addClass('t-warn');
      } else if (data.type === 3 || data.type === 4) {
        $item.addClass('t-error');
      }

      $root.find('.log-container').append($item);
    }
  }

  // 将渲染tools面板
  $root.find('.console-pane').append($tools);

  // 初始渲染所有log
  printLog($root, 0);

  // 添加事件
}
