mermaidAPI.initialize({
  startOnLoad:false
});
(function(){
  // Example of using the API
  var element = document.querySelector("#graphDiv");

  var insertSvg = function(svgCode, bindFunctions){
    element.innerHTML = svgCode;
  };

  var graphDefinition = 'graph LR\ndev-->sit\nsit-->uat';
  var graph = mermaidAPI.render('graphDiv', graphDefinition, insertSvg);
})();