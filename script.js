function totalBill(amount, tax, fee) {
	const total = amount * tax * fee;
	return total;
}

const clienTotal1 = totalBill(65, 1.1025, 1.03);
const clienTotal2 = totalBill(560, 1.1025, 1.03);

console.log(`Total amount client 1 including tax and card fee is$${clienTotal1}`);
console.log(`Total amount client 2 including tax and card fee is$${clienTotal2}`);
