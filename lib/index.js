import _Promise from 'babel-runtime/core-js/promise';
export default (function (url) {
    return new _Promise(function (resolve) {
        var doc = document;
        var head = doc.head || doc.getElementsByTagName('head')[0] || doc.documentElement;
        var node = doc.createElement('script');
        node.onload = function () {
            resolve();
        };
        node.onerror = function () {};
        node.async = true;
        node.src = url;
        head.appendChild(node);
    });
});
