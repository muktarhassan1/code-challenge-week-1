function checkSpeed() {
    
    let speed = parseInt(prompt("Enter the speed of the car:"));

    
    const speedLimit = 70;

    
    if (isNaN(speed) || speed < 0) {
        alert("Please enter a valid positive number for speed.");
        return;
    }

    
    if (speed <= speedLimit) {
        alert("Ok");
    } else {
        
        let excessSpeed = speed - speedLimit;
        let demeritPoints = Math.floor(excessSpeed / 5);
        
        
        alert("Demerit points: " + demeritPoints);
    }
}


checkSpeed(75);
