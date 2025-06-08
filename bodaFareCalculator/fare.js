const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Unafika wapi Mkubwa? Kilometer ngapi unataka kusafiri? ", (answer) => {
    let distanceInKm = Number(answer);

    // Constants for fare calculation
    const baseFare = 50; // Fixed base fare (KES)
    const chargePerKm = 15; // KES per km

    // Calculate total fare
    let totalFare = baseFare + (distanceInKm * chargePerKm);

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}`);
    console.log("Panda Pikipiki!");

    rl.close();
});