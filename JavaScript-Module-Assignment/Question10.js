// Function to print the message based on the traffic light color
function trafficControl(lightColor) {
    if (lightColor === 'red') {
        console.log('The traffic light is red: Vehicles must stop.');
    } else if (lightColor === 'yellow') {
        console.log('The traffic light is yellow: Vehicles should slow down and prepare to stop.');
    } else if (lightColor === 'green') {
        console.log('The traffic light is green: Vehicles can go.');
    } else {
        console.log('Invalid traffic light color. Please enter red, yellow, or green.');
    }
}

// Accept the traffic light color (for example, change this value to test different cases)
let trafficLightColor = 'red';
trafficControl(trafficLightColor);

// Test other traffic light colors
trafficLightColor = 'yellow';
trafficControl(trafficLightColor);

trafficLightColor = 'green';
trafficControl(trafficLightColor);

trafficLightColor = 'blue';
trafficControl(trafficLightColor);
