var app = angular.module("offworldApp", ['ui.bootstrap', 'ngAnimate']);

app.controller("mainController", function ($scope, $timeout, $interval) {

    // Initialisation
    $scope.gameStarted = true;
    $scope.impatience = 0;

    $scope.username = "User";
    $scope.welcomeMessage = "Logging started for  " + $scope.username + ".";
    $scope.events = [{ type: "Start", message: $scope.welcomeMessage}];

    // Progress
    $scope.rigsAvailable = true;
    $scope.pumpsAvailable = false;
    $scope.pumpsActive = false;
    $scope.extractorsAvailable = false;
    $scope.extractorsActive = false;
    $scope.wellsAvailable = false;
    $scope.wellsActive = false;
    $scope.automationAvailable = true;

    $scope.showTabTwo = false;
    $scope.showTabThree = false;
    $scope.showTabFour = false;
    $scope.showTabFive = true;

    // States
    $scope.drillStatus = true;
    $scope.extractorStatus = true;
    $scope.signalStatus = true;
    $scope.broadcastStatus = true;
    $scope.factoryStatus = true;
    $scope.droneStatus = true;

    // Facilities
    $scope.totalRigs = 1;
    $scope.rigCost = 5;

    $scope.totalPumps = 0;
    $scope.pumpCost = 10;

    $scope.totalWells = 0;
    $scope.wellCost = 10;

    $scope.totalExtractors = 0;
    $scope.extractorCost = 10;

    // Factory
    $scope.factoryInput = "materialSelected";
    $scope.factoryOutput = "materialSelected";
    $scope.factoryQuantity = 1;
    $scope.factoryQuantityOutput = 1;
    $scope.factoryTimer = 100;
    $scope.factoryProcessingTime = 0;
    

    // Signal
    $scope.broadcastTimer = 100;

    // Drones
    $scope.droneTimer = 100;

    // Ore
    $scope.ore = 0;
    $scope.oreTimer = 100;

    $scope.automatedOre = false;
    $scope.oreAutomationCost = 10;

    // Metal
    $scope.metal = 0;
    $scope.metalTimer = 100;

    $scope.automatedMetal = false;
    $scope.metalAutomationCost = 25;

    // Water
    $scope.water = 0;
    $scope.waterCounter = 0;

    // Gas
    $scope.gas = 0;
    $scope.gasCounter = 0;

    // Material
    $scope.material = 0;

    // Alloy
    $scope.alloy = 0;

    // Component
    $scope.component = 0;

    // Fuel
    $scope.fuel = 0;

    // Waste
    $scope.waste = 0;

    // Drones
    $scope.drones = 0;

    // Timing
    $scope.oreInterval = 500; // Time in ms between ticks
    $scope.oreIncrement = 2; // Amount to be added each tick
    $scope.oreClock = 50; // Total number of ticks (where applicable)

    $scope.metalInterval = 500;
    $scope.metalIncrement = 1;
    $scope.metalClock = 100;

    $scope.waterInterval = 500;
    $scope.waterIncrement = 2;

    $scope.gasInterval = 500;
    $scope.gasIncrement = 1;

    $scope.factoryInterval = 500;
    $scope.factoryIncrement = 2;
    $scope.factoryClock = 50;

    $scope.broadcastInterval = 1000;
    $scope.broadcastIncrement = 1;
    $scope.broadcastClock = 100;

    $scope.droneInterval = 500;
    $scope.droneIncrement = 1;
    $scope.droneClock = 100;



    // Events
    $scope.eventCounter = 0;
    $scope.alert = { id: 0, message: "[Unlocking]" };
    $scope.alert2 = { id: 0, message: "Drilling..." };
    $scope.impatienceAlert = { id: 0, message: "Extreme impatience detected. Please remain calm." }
    $scope.firstPump = { id: 0, message: "Automatic pumping routine started." }
    $scope.pumpsUnlocked = { id: 0, message: "Compliance check completed: Releasing Pump blueprints." }
    $scope.broadcastReturn = { id: 0, message: "Signal returned no response." }

    // Game Controller

    $scope.startGame = function () {
        
        $scope.gameStarted = true;
    }

    // Events

    $scope.newEvent = function (x) {
        if ($scope.events.length == 6)
        {
            $scope.events.pop();
        }

        // Fucking angular bullshit
        x = angular.copy(x);

        x.id = $scope.eventCounter;
        $scope.eventCounter++;

        $scope.events.unshift(x);
    };

    // Ore

    $scope.getOreTimer = function () {
        return $scope.oreTimer;
    }

    $scope.drill = function () {
        if($scope.oreTimer == 100 && $scope.drillStatus == true)
        {
            $scope.drillStatus = false;
            $scope.oreTimer = 0;
            $scope.ore += $scope.totalRigs;
            $interval($scope.drillCooldown, $scope.oreInterval, $scope.oreClock);
        }
        
    }

    $scope.drillCooldown = function () {

        $scope.oreTimer += $scope.oreIncrement;
        if ($scope.oreTimer == 100 && $scope.drillStatus == false)
        {
            $scope.drillStatus = true;

            if ($scope.automatedOre == true) {
                $scope.drill();
            }
        }
        
    };

    // Metal

    $scope.getMetalTimer = function () {
        return $scope.metalTimer;
    };

    $scope.extract = function () {
        if ($scope.metalTimer == 100 && $scope.extractorStatus == true) {
            $scope.extractorStatus = false;
            $scope.metalTimer = 0;
            $scope.metal += $scope.totalExtractors;
            $interval($scope.extractorCooldown, $scope.metalInterval, $scope.metalClock);
        }

    };

    $scope.extractorCooldown = function () {

        $scope.metalTimer += $scope.metalIncrement;
        if ($scope.metalTimer == 100 && $scope.extractorStatus == false) {
            $scope.extractorStatus = true;

            if ($scope.automatedMetal == true)
            {
                $scope.extract();
            }
        }

    };

    // Water

    $scope.waterCooldown = function () {

        $scope.waterCounter += $scope.waterIncrement;

        if ($scope.waterCounter == 100) {
            $scope.addWater();
            $scope.waterCounter = 0;
        }
        
    };

    $scope.addWater = function () {
        $scope.water += $scope.totalPumps;
    }

    // Gas

    $scope.gasCooldown = function () {

        $scope.gasCounter += $scope.gasIncrement;

        if ($scope.gasCounter == 100) {
            $scope.addGas();
            $scope.gasCounter = 0;
        }

    };

    $scope.addGas = function () {
        $scope.gas += $scope.totalWells;
    }

    // Signal

    $scope.broadcast = function () {
        if ($scope.broadcastTimer == 100 && $scope.broadcastStatus == true) {
            $scope.broadcastStatus = false;
            $scope.broadcastTimer = 0;
            $interval($scope.broadcastCounter, $scope.broadcastInterval, $scope.broadcastClock);
        }

    }

    $scope.broadcastCounter = function () {

        $scope.broadcastTimer += $scope.broadcastIncrement;
        if ($scope.broadcastTimer >= 100 && $scope.broadcastStatus == false) {
            $scope.broadcastStatus = true;
            $scope.newEvent($scope.broadcastReturn);
        }

    };

    $scope.getBroadcast = function () {
        return $scope.broadcastTimer;
    }

    // Factory

    $scope.process = function (resource, quantity) {

        $scope.factoryOutput = resource;
        $scope.factoryQuantityOutput = quantity;
        $scope.factoryTimeCalculator();

        if ($scope.factoryTimer == 100 && $scope.factoryStatus == true && $scope.factoryUseResources() == true) {
            $scope.factoryTimer = 0;
            $scope.factoryStatus = false;
            $interval($scope.factoryCounter, $scope.factoryProcessingTime, $scope.factoryClock);
        }

    }

    $scope.factoryCounter = function () {

        $scope.factoryTimer += $scope.factoryIncrement;
        if ($scope.factoryTimer == 100 && $scope.factoryStatus == false)
        {
            $scope.factoryProduction();
            $scope.factoryStatus = true;
            
        }
    };

    $scope.getFactory = function () {
        return $scope.factoryTimer;
    }

    $scope.factoryUseResources = function () {
        switch ($scope.factoryOutput) {

            case "materialSelected":
                if ($scope.ore >= (1 * $scope.factoryQuantityOutput) && $scope.water >= (1 * $scope.factoryQuantityOutput)) {
                    $scope.ore -= (1 * $scope.factoryQuantityOutput);
                    $scope.water -= (1 * $scope.factoryQuantityOutput);
                    return true;
                } else {
                    return false;
                }

            case "alloySelected":
                if ($scope.ore >= (1 * $scope.factoryQuantityOutput) && $scope.metal >= (1 * $scope.factoryQuantityOutput)) {
                    $scope.ore -= 1;
                    $scope.metal -= 1;
                    return true;
                } else {
                    return false;
                }

            case "componentSelected":
                if ($scope.metal >= (1 * $scope.factoryQuantityOutput) && $scope.gas >= (1 * $scope.factoryQuantityOutput)) {
                    $scope.gas -= (1 * $scope.factoryQuantityOutput);
                    $scope.metal -= (1 * $scope.factoryQuantityOutput);
                    return true;
                } else {
                    return false;
                }

            case "fuelSelected":
                if ($scope.gas >= (1 * $scope.factoryQuantityOutput) && $scope.water >= (1 * $scope.factoryQuantityOutput)) {
                    $scope.gas -= (1 * $scope.factoryQuantityOutput);
                    $scope.water -= (1 * $scope.factoryQuantityOutput);
                    return true;
                } else {
                    return false;
                }

            default:
                return false;

        }
    }

    $scope.factoryProduction = function() {
        switch ($scope.factoryOutput) {

            case "materialSelected":
                $scope.material += (1 * $scope.factoryQuantityOutput);
                $scope.waste += (1 * $scope.factoryQuantityOutput);
                break;

            case "alloySelected":
                $scope.alloy += (1 * $scope.factoryQuantityOutput);
                $scope.waste += (1 * $scope.factoryQuantityOutput);
                break;

            case "componentSelected":
                $scope.component += (1 * $scope.factoryQuantityOutput);
                $scope.waste += (1 * $scope.factoryQuantityOutput);
                break;

            case "fuelSelected":
                $scope.fuel += (1 * $scope.factoryQuantityOutput);
                $scope.waste += (1 * $scope.factoryQuantityOutput);
                break;

            default:
                break;
                
        }
    }

    $scope.factoryTimeCalculator = function () {
        switch ($scope.factoryOutput) {

            case "materialSelected":
                $scope.factoryProcessingTime = $scope.factoryInterval;
                break;

            case "alloySelected":
                $scope.factoryProcessingTime = $scope.factoryInterval;
                break;

            case "componentSelected":
                $scope.factoryProcessingTime = $scope.factoryInterval * 2;
                break;

            case "fuelSelected":
                $scope.factoryProcessingTime = $scope.factoryInterval * 2;
                break;

            default:
                break;

        }
    }

    // Drones

    $scope.build = function () {
        if ($scope.droneTimer == 100 && $scope.droneStatus == true && $scope.alloy >= 2 && $scope.metal >= 2 && $scope.component >= 1 && $scope.fuel >= 1) {
            $scope.droneStatus = false;
            $scope.droneTimer = 0;
            $scope.alloy -= 2;
            $scope.metal -= 2;
            $scope.component -= 1;
            $scope.fuel -= 1;

            $interval($scope.droneCounter, $scope.droneInterval, $scope.droneClock);
        }

    }

    $scope.droneCounter = function () {

        $scope.droneTimer += $scope.droneIncrement;
        if ($scope.droneTimer >= 100 && $scope.droneStatus == false) {
            $scope.droneStatus = true;
            $scope.drones += 1;
        }

    };

    $scope.getDrones = function () {
        return $scope.droneTimer;
    }

    // Buy

    $scope.buyRig = function () {
        if ($scope.ore >= $scope.rigCost) {
            $scope.ore -= $scope.rigCost;
            $scope.totalRigs += 1;

            if ($scope.pumpsAvailable == false && $scope.totalRigs >= 2) {
                // Unlock water pumping
                $scope.showTabTwo = true;
                $scope.pumpsAvailable = true;
                $scope.newEvent($scope.pumpsUnlocked);
            }
        }
    };

    $scope.buyExtractor = function () {
        if ($scope.material >= $scope.extractorCost) {
            $scope.material -= $scope.extractorCost;
            $scope.totalExtractors += 1;

            if ($scope.extractorsActive == false) {
                // First Extractor only
                $scope.extractorsActive = true;
            }
        }
    };

    $scope.buyPump = function () {
        if ($scope.ore >= $scope.pumpCost) {
            $scope.ore -= $scope.pumpCost;
            $scope.totalPumps += 1;

            if ($scope.pumpsActive == false) {
                // First pump only
                
                $scope.pumpsActive = true;
                $interval($scope.waterCooldown, $scope.waterInterval);
                $scope.newEvent($scope.firstPump);
            }
        }

    };

    $scope.buyWell = function () {
        if ($scope.material >= $scope.wellCost) {
            $scope.material -= $scope.wellCost;
            $scope.totalWells += 1;

            if ($scope.wellsActive == false) {
                // First pump only

                $scope.wellsActive = true;
                $interval($scope.gasCooldown, $scope.gasInterval);
            }
        }

    };

    $scope.buyOreAutomation = function () {
        if($scope.automationAvailable && $scope.drones >= $scope.oreAutomationCost)
        {
            $scope.drones -= $scope.oreAutomationCost;
            $scope.automatedOre = true;
            $scope.drill();
        }
    }

    $scope.buyMetalAutomation = function () {
        if ($scope.automationAvailable && $scope.drones >= $scope.metalAutomationCost) {
            $scope.drones -= $scope.metalAutomationCost;
            $scope.automatedMetal = true;
            $scope.extract();
        }
    }

    // Misc

    $scope.debug = function()
    {
        $scope.ore += 100;
        $scope.water += 100;
        $scope.metal += 100;
        $scope.gas += 100;
        $scope.material += 100;
        $scope.alloy += 100;
        $scope.component += 100;
        $scope.fuel += 100;
        $scope.drones += 0;

        $scope.showTabTwo = true;
        $scope.showTabThree = true;
        $scope.showTabFour = true;
        $scope.pumpsAvailable = true;
        $scope.extractorsAvailable = true;
        $scope.wellsAvailable = true;

        $scope.newEvent($scope.alert);
    }

    $scope.impatienceCheck = function () {

        if ($scope.impatience <= 20) {
            $scope.impatience += 1;

        } else {

            $scope.newEvent($scope.impatienceAlert)
            $scope.impatience = 0;
        }
    };

});
