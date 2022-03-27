// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function f(){ log.history = log.history || []; log.history.push(arguments); if(this.console) { var args = arguments, newarr; args.callee = args.callee.caller; newarr = [].slice.call(args); if (typeof console.log === 'object') log.apply.call(console.log, console, newarr); else console.log.apply(console, newarr);}};

// make it safe to use console.log always
(function(a){function b(){}for(var c="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","),d;!!(d=c.pop());){a[d]=a[d]||b;}})
(function(){try{console.log();return window.console;}catch(a){return (window.console={});}}());



var _requestAnimationFrame = window.requestAnimationFrame       ||
                             window.webkitRequestAnimationFrame ||
                             window.mozRequestAnimationFrame;

if (!isMobile()) {
    window.addEventListener('scroll', backgroundHandler);
    window.addEventListener('resize', backgroundHandler);
}

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

var bg = window.document.getElementById('bg');
var bgOffsetTop = bg.offsetTop;
var max;

function backgroundHandler() {
    _requestAnimationFrame(repositionImage);
}

function repositionImage() {

    max = max || Math.max($(document).height(), $(window).height());
    var windowHeight = window.document.documentElement.clientHeight;
    var scrollBottom = windowHeight + window.scrollY;
    var imageHeight = bg.clientHeight;
    var imageBottom = bg.offsetTop + imageHeight;

    if ( scrollBottom <= max) {
        var newTop = parseInt(bgOffsetTop) + parseInt(window.scrollY);
        bg.setAttribute('style', 'top: ' + newTop + 'px');
    }
}
