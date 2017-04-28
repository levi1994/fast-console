import $ from 'jquery';
import template from './resource/template.html';

function Timeline($node) {

  this.$root = $node;
  this.$timeline = $(template);

  this.$root.find(".timeline-pane").append(this.$timeline);
  // 获取加载时间

  var timeInter = setInterval(function() {
    $(".stage").empty();
    var timeline = getTimeline();
    for (let key in timeline) {

      var $item = $("<div></div>");
      $item.append($("<span class='tl-name'></span>").text(key));
      $item.append($("<span class='tl-value'></span>").text(timeline[key]));
      $(".stage").append($item);
    }
  }, 1000);

}

function getTimeline() {
  var timing = window.performance.timing;

  var timeline = {
    loadTime: 0,
    domReadyTime: 0,
    redirectTime: 0,
    appcacheTime: 0,
    unloadEventTime: 0,
    lookupDomainTime: 0,
    connectTime: 0,
    requestTime: 0,
    initDomTreeTime: 0,
    loadEventTime: 0
  };

  timeline.loadTime = timing.domComplete - timing.connectStart;
  timeline.domReadyTime = timing.domComplete;
  timeline.redirectTime = timing.redirectEnd - timing.redirectStart;
  // appcacheTime
  timeline.unloadEventTime = timing.unloadEventEnd - timing.unloadEventStart;
  timeline.lookupDomainTime = timing.domainLookupEnd - timing.domainLookupStart;
  timeline.connectTime = timing.connectEnd - timing.connectStart;
  timeline.requestTime = timing.responseEnd - timing.requestStart;
  timeline.initDomTreeTime = timing.domComplete - timing.domLoading;
  timeline.loadEventTime = timing.loadEventEnd - timing.loadEventStart;

  return timeline;
}

export default Timeline;
