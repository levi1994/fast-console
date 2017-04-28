import css from './resource/index.css';
import initMain from './main';
import Console from './console';
import Network from './network';
import Element from './element';
import Timeline from './timeline';

// 初始化主界面
var $node = initMain();
var consoleComp = new Console($node);
var networkComp = new Network($node);
var elementComp = new Element($node);
var timelineComp = new Timeline($node);
