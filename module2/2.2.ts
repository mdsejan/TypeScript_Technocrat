{
  // interface

  type User1 = {
    name: string;
    age: number;
  };

  interface User2 {
    name: string;
    age: number;
  }

  const user1: User2 = {
    name: "Sejan",
    age: 25,
  };

  //Js --> object, array --> object, Function --> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll2 = [1, 2, 3];

  type Add1 = (n1: number, n2: number) => number;

  interface Add2 {
    (n1: number, n2: number): number;
  }

  const add: Add2 = (n1, n2) => n1 + n2;
}
