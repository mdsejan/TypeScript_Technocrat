// Learning Function
// Normal Function
// Arrow Function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(2, 5);

const addArrow = (num1: number, num2: number): number => num1 + num2;

// Object --> function --> method

const poorUser = {
  name: "Sejan",
  balance: 0,
  addBalance(balance: number): number {
    return this.balance + balance;
  },
};

const richUser = {
  name: "Sejan",
  balance: 200,
  addBalance(balance: number): string {
    return `My New balance is: ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 2, 3, 4];
const newArray = arr.map((elem: number): number => elem * elem);
