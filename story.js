app.storyText = function ($scope) {

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
        id: 0,
        type: "Info",
        message: "<b>Cras</b> efficitur sapien vel neque hendrerit, id rutrum ante dictum. <br /><br />"
        + "Sed facilisis erat fringilla neque posuere faucibus. In venenatis nisi id sapien iaculis vehicula."
        + "Morbi posuere, sapien sed dignissim sodales, enim odio viverra ipsum, vitae lacinia risus sapien ut quam."
        + "Quisque ultricies massa congue bibendum sodales. Cras viverra commodo imperdiet."
        + "Mauris blandit fermentum ex vitae luctus. Aenean eu porttitor velit, vitae elementum augue."
    };

    $scope.logImpatience = { id: 0, type: "Warning", message: "Extreme impatience detected. Please remain calm." };
    $scope.logBroadcastReturn = { id: 0, type: "Warning", message: "Signal returned no response." };

    // Unlock events
    $scope.logPumpsUnlocked = { id: 0, type: "Info", message: "Compliance check completed. Releasing Pump blueprints." };
    $scope.logFirstPump = { id: 0, type: "Info", message: "Automatic pumping routine started." };
    $scope.logFactoryUnlocked = { id: 0, type: "Info", message: "Excellent results. Releasing Factory blueprints." };
    $scope.logFirstFactory = { id: 0, type: "Info", message: "Factory installed. Releasing advanced extraction blueprints." };
    $scope.logFirstWell = { id: 0, type: "Info", message: "Automatic well routine started." };
    $scope.logFirstExtractor = { id: 0, type: "Info", message: "Metal extractors active." };

    $scope.logAutomationUnlocked = { id: 0, type: "Info", message: "Peak efficiency. Releasing Robotics blueprints." };
    $scope.logFirstAutomation = { id: 0, type: "Info", message: "Robotics laboratory installed." };

    $scope.logArray = [
        {
            id: 0,
            type: "Story",
            message: "Broadcast from <b>Origin</b><br /><br />"
            + "Congratulations " + $scope.username + "! It looks like you're getting "
            + "the hang of things out there. You won't be needing us any more, but don't "
            + "worry - if you get lonely "
            + "there are plenty others in this region just like you.<br /><br />"
            + "We're leaving this entirely in your hands.<br /><br />"
            + "Goodbye and good luck!"
        },

        {
            id: 0,
            type: "Story",
            message: "Broadcast from <b>Moloko</b><br /><br />"
            + "<b>Successful initiatives:</b> <br /><br />"
            + "Water fluoridation, aggressive waste recycling, new sport 'Bowling'.<br /><br />"
            + "<b>Failed initiatives:</b> <br /><br />"
            + "Tesselated yoga.<br /><br />"
        },

        {
            id: 0,
            type: "Story",
            message: "Broadcast from <b>84-B</b><br /><br />"
            + "Population has reached 400 million. All clear. <br /><br />"
            + "<b>01110000 01101100 01100101 01100001 01110011 01100101 00100000 "
            + "01101101 01100001 01101011 01100101 00100000 01101001 01110100 00100000 01110011 01110100 01101111 01110000</b>"
        },

        {
            id: 0,
            type: "Story",
            message: "Broadcast from <b>Rosson-III</b><br /><br />"
            + "It looks like the Swarm has mutated (again). <br /><br />"
            + "I don't think anyone is willing to admit that this might have gotten out of hand. "
            + "This makes the fourth planet they've spread to so far. We're going to need to keep an eye on that. <br /><br />"
            + "Not close up though. It's disgusting."
        },


        
    ];


};