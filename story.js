﻿app.storyText = function ($scope) {

    // Total events
    $scope.eventCounter = 0;

    // Story progress tracking
    $scope.story = 0;

    // Build welcome message
    $scope.username = "User";
    $scope.logWelcome = "Logging started for  " + $scope.username + ".";

    // Initialise log array
    $scope.events = [{ type: "Start", message: $scope.logWelcome }];

    // Misc events
    $scope.logDebug = {
        id: 0, message: "<b>Cras</b> efficitur sapien vel neque hendrerit, id rutrum ante dictum. <br /><br />"
        + "Sed facilisis erat fringilla neque posuere faucibus. In venenatis nisi id sapien iaculis vehicula."
        + "Morbi posuere, sapien sed dignissim sodales, enim odio viverra ipsum, vitae lacinia risus sapien ut quam."
        + "Quisque ultricies massa congue bibendum sodales. Cras viverra commodo imperdiet."
        + "Mauris blandit fermentum ex vitae luctus. Aenean eu porttitor velit, vitae elementum augue."
    };

    $scope.logImpatience = { id: 0, message: "Extreme impatience detected. Please remain calm." };
    $scope.logBroadcastReturn = { id: 0, message: "Signal returned no response." };

    // Unlock events
    $scope.logPumpsUnlocked = { id: 0, message: "Compliance check completed. Releasing Pump blueprints." };
    $scope.logFirstPump = { id: 0, message: "Automatic pumping routine started." };
    $scope.logFactoryUnlocked = { id: 0, message: "Excellent results. Releasing Factory blueprints." }
    $scope.logFirstFactory = { id: 0, message: "Factory installed. Releasing advanced extraction blueprints." };
    $scope.logFirstWell = { id: 0, message: "Automatic well routine started." };
    $scope.logFirstExtractor = { id: 0, message: "Metal extractors active." };

    
    

    $scope.logAutomationUnlocked = { id: 0, message: "Peak efficiency. Releasing Robotics blueprints." };
    $scope.logFirstAutomation = { id: 0, message: "Robotics laboratory installed." };

    


};