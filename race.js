  let raceNumber = Math.floor(Math.random() * 100);

  var regEarly = true;
  
  var age = 18;

  if (age > 18) {
raceNumber += 1000

  }

if (age > 18 && regEarly == true) {
    console.log(`Your race starts at 9:30am and your race number is ${raceNumber}.`);

}

else if (age > 18 && regEarly == false) {
console.log(`Your race starts at 11:00am and your race number is ${raceNumber}.`);

}

else if (age <= 18) {
    console.log(`Your race starts at 12:30pm and your race number is ${raceNumber}.`);
}
