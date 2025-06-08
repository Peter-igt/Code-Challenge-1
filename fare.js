const readline = require('readline');

function estimateTransactionFee(amountToSend) {
    // Calculate 1.5% of the amount
    let fee = amountToSend * 0.015;
  
    // Apply minimum and maximum fee constraints
    if (fee < 10) {
        fee = 10;
    } else if (fee > 70) {
        fee = 70;
    }
  
    // Calculate total amount to be debited
    const totalAmount = amountToSend + fee;
  
    // Display results in the console
    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${totalAmount}`);
    console.log(`\nSend Money Securely!`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Unatuma Pesa Ngapi? (KES): ", (userInput) => {
    const amount = Number(userInput);

    // Validate input
    if (!isNaN(amount) && amount > 0) {
        estimateTransactionFee(amount);
    } else {
        console.log("Tafadhali ingiza kiasi halali cha pesa."); // Please enter a valid amount
    }

    rl.close();
});
