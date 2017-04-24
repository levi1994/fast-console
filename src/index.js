import css from './resource/index.css';
import $ from 'jquery';

console.log(css);
var html = `<div class="fast-console" id="fast-console">
            	<div class="co-header">
            		<div class="co-menu console focus">Console</div>
            		<div class="co-menu network">Network</div>
            		<div class="co-menu element">Element</div>
            	</div>
            	<div class="main">
                <div class="console-pane pane">console</div>
                <div class="network-pane pane">network</div>
                <div class="element-pane pane">element</div>
            	</div>
            </div>`;

var $node = $(html);
$('body').append($node);
var $main = $node.find('.main');
$node.on('click', '.co-menu', function() {
  $node.find(".co-menu").removeClass('.focus');
  var $this = $(this);
  $this.addClass('.focus');
  $main.find('.pane').hide();
  if ($this.hasClass('console')) {
    $main.find('.console-pane').show();
  } else if ($this.hasClass('network')) {
    $main.find('.network-pane').show();
  } else if ($this.hasClass('element')) {
    $main.find('.element-pane').show();
  }
});
console.log($node);
