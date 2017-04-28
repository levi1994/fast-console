import template from './resource/template.html';
import $ from 'jquery';

function Main() {
  // 获得静态页面并转化为jquery node
  let html = template;
  let $node = $(html);

  // 将node添加至DOM
  $('body').append($node);

  // 为主界面添加事件
  var $main = $node.find('.main');
  $node.on('click', '.co-menu', function() {
    $node.find(".co-menu").removeClass('focus');
    var $this = $(this);
    $this.addClass('focus');
    $main.find('.pane').hide();
    if ($this.hasClass('console')) {
      $main.find('.console-pane').show();
    } else if ($this.hasClass('network')) {
      $main.find('.network-pane').show();
    } else if ($this.hasClass('element')) {
      $main.find('.element-pane').show();
    } else if ($this.hasClass('timeline')) {
      $main.find('.timeline-pane').show();
    }
  });

  $('.btn-block .all').on('click', function() {
    $(".btn-block").toggleClass('hover');
  });

  $('.open-console').click(function() {
    $('.fast-console').show();
    $(".btn-block").toggleClass('hover');
    $('.console').trigger('click');
  });
  $('.open-network').click(function() {
    $('.fast-console').show();
    $(".btn-block").toggleClass('hover');
    $('.network').trigger('click');
  });
  $('.open-element').click(function() {
    $('.fast-console').show();
    $(".btn-block").toggleClass('hover');
    $('.element').trigger('click');
  });

  return $node;
}

export default Main;
