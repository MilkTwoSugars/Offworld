app.domeGenerator = function ($scope) {

    $scope.canvasHeight = 500;
    $scope.canvasWidth = 1000;

    // Building models
    $scope.buildingOne = { maxHeight: ($scope.canvasHeight/2), color: "LightSalmon" };
    $scope.buildingTwo = { maxHeight: ($scope.canvasHeight/3), color: "CadetBlue" };
    $scope.buildingThree = { maxHeight: ($scope.canvasHeight/6), color: "DarkCyan" };

    // Find canvas
    $scope.initialiseCanvas = function () {
        $scope.canvas = document.getElementById("domeCanvas");
        $scope.layerOne = document.getElementById("canvasLayerOne");
        $scope.layerTwo = document.getElementById("canvasLayerTwo");
        $scope.layerThree = document.getElementById("canvasLayerThree");
        $scope.context = $scope.canvas.getContext('2d');
    }

    // Draw dome shape
    $scope.drawDome = function () {
        var bg = $scope.canvas.getContext("2d");
        var line = $scope.canvas.getContext("2d");
        var ground = $scope.canvas.getContext("2d");

        bg.fillStyle = "white";
        bg.fillRect(0, 0, $scope.canvasWidth, $scope.canvasHeight);

        line.beginPath();
        // Dome specifications: (x,y,r,...)
        line.arc(($scope.canvasWidth/2), $scope.canvasHeight, $scope.canvasHeight, Math.PI * 1, Math.PI * 2, false);
        line.closePath();
        line.lineWidth = 5;
        line.fillStyle = '#e3e1e1';
        line.fill();

        ground.lineWidth = 25;
        ground.strokeStyle = 'darkgrey'
        ground.beginPath();
        ground.moveTo(0, $scope.canvasHeight);
        ground.lineTo($scope.canvasWidth, $scope.canvasHeight);
        ground.stroke();
    }

    $scope.generateBuilding = function (buildModel, selectedLayer) {

        // Width of building
        var randomNumber = Math.floor(Math.random() * ($scope.canvasWidth / 7)) + 1;

        // Height of building
        var heightOfBuilding = Math.floor(Math.random() * buildModel.maxHeight) + 1;

        // Location of building along horizontal axis
        var randomNumber3 = Math.floor(Math.random() * ($scope.canvasWidth - ($scope.canvasWidth / 3))) + ($scope.canvasWidth / 10);

        // Prepare building
        var building = selectedLayer.getContext("2d");
        building.beginPath();
        building.lineWidth = .25;
        building.strokeStyle = 'Black';
        building.fillStyle = buildModel.color;

        // Draw building (random horizontal start point, random vertical start point compensated, random width of cube, random height of cube taking into account building model)
        building.fillRect((randomNumber3), (($scope.canvasHeight - ($scope.canvasHeight / 100)) - heightOfBuilding), randomNumber, heightOfBuilding);
        building.strokeRect((randomNumber3), (($scope.canvasHeight - ($scope.canvasHeight / 100)) - heightOfBuilding), randomNumber, heightOfBuilding);
    }

    $scope.generateCity = function () {
        $scope.clearCanvas();
        $scope.drawDome();

        for (var i = 0; i < $scope.residences; i++) {
            $scope.generateBuilding($scope.buildingOne, $scope.layerOne);
        }
        for (var i = 0; i < $scope.labs; i++) {
            $scope.generateBuilding($scope.buildingTwo, $scope.layerTwo);
        }
        for (var i = 0; i < $scope.greenhouses; i++) {
            $scope.generateBuilding($scope.buildingThree, $scope.layerThree);
        }
    }

    $scope.constructBuildingOne = function () {
        $scope.generateBuilding($scope.buildingOne, $scope.layerOne);
    }

    $scope.constructBuildingTwo = function () {
        $scope.generateBuilding($scope.buildingTwo, $scope.layerTwo);
    }

    $scope.constructBuildingThree = function () {
        $scope.generateBuilding($scope.buildingThree, $scope.layerThree);
    }

    $scope.autoCity = function () {

        setInterval($scope.generateCity, 1000);
    }

    $scope.clearCanvas = function () {
        $scope.layerOne.getContext('2d').clearRect(0, 0, $scope.canvas.width, $scope.canvas.height);
        $scope.layerTwo.getContext('2d').clearRect(0, 0, $scope.canvas.width, $scope.canvas.height);
        $scope.layerThree.getContext('2d').clearRect(0, 0, $scope.canvas.width, $scope.canvas.height);

    }
};