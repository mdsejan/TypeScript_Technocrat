// Reference Type --> Object

const user: {
  company: "P Hero"; // type --> literal type
  readonly company2: string; // type --> literal type ==> 2nd way
  firstName: string;
  middleName?: string; // Optional type
  lastName: string;
  isMarried: boolean;
} = {
  company: "P Hero",
  company2: "P Hero BD",
  firstName: "Abir",
  middleName: "Hasan",
  lastName: "Sejan",
  isMarried: false,
};
