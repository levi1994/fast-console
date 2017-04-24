import css from './resource/index.css';
import initMain from './main';
import initConsole from './console';

console.log(css);

// 初始化主界面
var $node = initMain();
initConsole($node);

console.log($node);
