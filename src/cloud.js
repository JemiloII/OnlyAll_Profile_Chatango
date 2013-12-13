var clouds = [];
var NUM_CLOUDS = 50;

function createCloud() {
    var width = $(window).width();
    var height = $(window).height();

    var cloud = $("<div>").addClass("cloud").appendTo($("#world"));
    cloud.data("x", parseInt(Math.random() * width / 2 - width / 4));
    cloud.data("y", parseInt(Math.random() * height / 4 + height * 0.7));
    cloud.data("z", parseInt(Math.random() * 10) * 100);
    cloud.data("angle", parseInt(Math.random() * 360));
    cloud.data("rotation", (Math.random() - 0.5) / 5);

    updateCloud(cloud);
    return cloud;
}

function updateCloud(cloud) {
    var z = cloud.data("z");

    var transform = "translate3d(" + cloud.data("x") + "px," + cloud.data("y") + "px, " + cloud.data("z") + "px) rotateZ(" + cloud.data("angle") + "deg)";
    cloud.css({
        "-webkit-transform": transform,
        "opacity": z / 1000

    });
    z += 1;
    if (z == 1000) {
        z = 0;
    }
    cloud.data("z", z);
    cloud.data("angle", cloud.data("angle") + cloud.data("rotation"));
}

function updateClouds() {
    for (var i = 0; i < NUM_CLOUDS; i++) {
        updateCloud(clouds[i]);
    }
    setTimeout(updateClouds, 30);
}

$(function() {
    for (var i = 0; i < NUM_CLOUDS; i++) {
        clouds.push(createCloud());
    }
    updateClouds();

});