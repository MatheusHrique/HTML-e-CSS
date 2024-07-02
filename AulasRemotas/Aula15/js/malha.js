$(document).ready(function() {
let $sitelading = $('#site-landing');
$sitelading.polygonizr({
  nodeFancyEntrance: true,
  restNodeMovements: 0,
  node3dRotate: true,
  node3dRotateDepthAlpha: 0,
  node3dDepthDistance: 50,
  duration: 10,
  nodeFillColor: ["255, 255, 255", "13, 147, 141", "15, 162, 180", "78, 196, 208"],
  nodeFillColorColoringSchema: "random",
  nodeFillGradientColor: ["255, 255, 255", "224, 240, 230", "227, 241, 242", "234, 237, 225"],
  nodeFillGradientColoringSchema: "random",
  nodeDotColor: ["13, 147, 141", "15, 162, 180", "10, 170, 222", "153, 151, 194", "114, 202, 188", "57, 96, 171"],
  nodeDotColoringSchema: "random",
  nodeLineColor: ["13, 147, 141", "15, 162, 180", "10, 170, 222", "114, 202, 188"],
  nodeLineColoringSchema: "random",
  nodeMovementDistance: 10,
  randomizePolygonMeshNetworkFormation: false,
  specifyPolygonMeshNetworkFormation: function (i) {
    var turningDistance = Math.min((this.canvasWidth, this.canvasHeight) / 2) / this.numberOfNodes;
    var forEachNode = {
      // Archimedean spiral.
      x: (this.canvasWidth / 2) + (i * turningDistance * Math.PI / 180) * Math.cos((i * turningDistance) * Math.PI / 180) * turningDistance,
      y: (this.canvasHeight / 2) + (i * turningDistance * Math.PI / 180) * Math.sin((i * turningDistance) * Math.PI / 180) * turningDistance
    };
    return forEachNode;
  }
});

// Update size.
$(window).resize(function () {
  $sitelading.polygonizr("stop");
  $sitelading.polygonizr({
    nodeFancyEntrance: false,
    canvasHeight: $(this).height(),
    canvasWidth: $(this).width()
  });

  $sitelading.polygonizr("refresh");
});

});