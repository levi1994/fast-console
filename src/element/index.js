import $ from 'jquery';

function Element($node) {
  this.$root = $node;

  // 拿到html节点。copy一个
  var $html = $("html").clone();
  var rootDom = `<div class="rootnode"></div>`;
  var $rootNode = $(rootDom);

  var flush = setTimeout(function() {
    $rootNode.empty();
    resolveHtml($html, $rootNode);
  }, 1000);

  // 将rootNode插入页面
  $(".element-pane").append($rootNode);

  // 点击父节点展开
  $rootNode.on("click", ".node", function(e) {
    $(this).toggleClass("drop");
    $(this).children().each(function() {
      $(this).toggleClass("open");
    });
    e.stopPropagation();
  });
}

// 将$node中的子节点封装为自定义的node，
// 并append至$target中
function resolveHtml($node, $target) {
  var $cnode = $('<div class="node iconfont"></div>');
  if ($node.get(0).localName === 'html') {
    $cnode.addClass("open");
  }
  // 如果有子节点，则遍历所有节点
  if ($node.children().length > 0) {
    $cnode.append(getElementHtml($node.get(0)));
    $node.children().each(function(key, val) {

      // 处理子节点，并添加到$cnode
      let childNodes = resolveHtml($(val), $cnode);
    });
  } else {
    $cnode.append(getElementHtml($node.get(0)));
    // 添加内容节点
    let d = `<div class="textnode iconfont"></div>`;

    let $content;
    // write here
    if ($node.html()) {
      $content = $(d).append($node.html());
      $cnode.append($content);
    } else {
      // 去掉之前的图标
      $cnode.addClass("nocontent");
    }
  }
  $target.append($cnode);
}

// 根据节点信息构造可显示的节点
function getElementHtml(node) {
  let start = '<' + node.localName + ' ';
  let end = '>';
  var $result = $('<span class="v-content"></span>');
  var $start = $('<span class="tagstyle"></span>').text(start);
  var $end = $('<span class="tagstyle"></span>').text(end);
  var attributes = node.attributes;
  var $attributes = $('<span class="attribute"></span>');
  for (let val of attributes) {
    var $key = $('<span class="key"></span>').text(val.name);
    var $equals = $('<span class="equals"></span>').text("=");
    var $value = $('<span class="value"></span>').text('"' + val.value + '" ');
    $attributes.append($key).append($equals).append($value);
  }
  $result.append($start).append($attributes).append($end);
  return $result;
}

export default Element;
