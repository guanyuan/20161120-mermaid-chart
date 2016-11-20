mermaidAPI.initialize({
  startOnLoad:false
});
(function(){
  // Example of using the API
  var element = document.querySelector("#graphDiv");

  var insertSvg = function(svgCode, bindFunctions){
    element.innerHTML = svgCode;
  };

  var graphDefinition = 'graph LR\nid1((SIT)) --- id2((UAT))\nid2((UAT)) --- id3((PROD))\nid1((SIT)) --- id4((STAGE))\nstyle id1 fill:#f9f,stroke:#333,stroke-width:4px;';
  var graph = mermaidAPI.render('graphDiv', graphDefinition, insertSvg);
})();