{
  // utility type
  // pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type nameAge = Pick<Person, "name" | "age">;

  // Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  // Required
  type PersonRequired = Required<Person>;

  //Partial
  type PersonPartial = Partial<Person>;

  //ReadOnly
  type PersonReadOnly = Readonly<Person>;

  const person1: PersonReadOnly = {
    name: "Mr. XY",
    age: 60,
    contactNo: "01729",
  };

  // Record Type***

  //   type MyObj = {
  //     a: string;
  //     b: string
  //   }

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  const obj1: MyObj = {
    a: "aa",
    b: "bb",
    c: "cc",
  };

  //
}
