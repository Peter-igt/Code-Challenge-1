//ingredients per cup
const WaterPerCup = 250; // in ml
const MilkPerCup = 100;  // in ml
const TeaPerCup = 2;     // in tsp
const SugarPerCup = 1;   // in tsp

const readline = require('readline');

//calculations
function calculateIngredients(cups) { 
  const water = WaterPerCup * cups;
  const milk = MilkPerCup * cups;
  const tea = TeaPerCup * cups;
  const sugar = SugarPerCup * cups;

  //output
  console.log(`For ${cups} cups of chai, you need:`);
  console.log(`${water} ml of water`);
  console.log(`${milk} ml of milk`);
  console.log(`${tea} tsp of tea`);
  console.log(`${sugar} tsp of sugar`);
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('How many cups of chai do you want to make? ', (answer) => {
  const cups = parseInt(answer);
  if (isNaN(cups) || cups <= 0) {
    console.log('Please enter a valid number of cups.');
  } else {
    calculateIngredients(cups);
  }
  rl.close();
});