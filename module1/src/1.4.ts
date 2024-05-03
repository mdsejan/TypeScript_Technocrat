// ===========>> Basic Data Types <=============

// String
let firstName: string = "Sejan";

// Number
let roll: number = 123;

//boolean
let isAdmin: boolean = true;

// undefined
let x: undefined = undefined;

// null
let y: null = null;

let d;

d = "2";
d = 2;
d = true;

// ======= non primitive =====

// Array
let friends: string[] = ["rasel", "rakib", "riham", "rayhan"];
let eligibleRollList: number[] = [1, 2, 3, 4];

eligibleRollList.push(5);

console.log(eligibleRollList);

// tuple --> array --> order --> type of values

let coordinates: [number, number] = [1, 5];

let ageName: [number, string, boolean] = [50, "Mr. X", true];
