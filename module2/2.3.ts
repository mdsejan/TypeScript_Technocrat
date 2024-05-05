{
  // generic type

  // আমরা যদি কোন টাইপ  কে generalized করতে পারি অর্থাৎ আমরা ডাইনমিকভাবে যেকোনো সময়ে আমাদের প্রয়োজন অনুসারে আমরা টাইপ তৈরি করতে পারি এবং সেটিকে পুনরায় ব্যবহার করতে পারি তাকে generic type বলে।

  type GenericArray<T> = Array<T>;

  //   const rollNumber: number[] = [3, 6, 8];
  //   const rollNumber: Array<number> = [3, 6, 8];
  const rollNumber: GenericArray<number> = [3, 6, 8];

  //   const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. Z"];
  //   const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];
  const mentors: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

  //   const boolArray: boolean[] = [true, false, true];
  //   const boolArray: Array<boolean> = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "Sejan",
      age: 24,
    },
    {
      name: "Jhankar Mahbub",
      age: 37,
    },
  ];

  const add = (x: number, y: number) => x + y;

  add(20, 30);

  //generic tuple

  type GenericTuple<X, Y> = [X, Y];

  const manush: GenericTuple<string, string> = ["Mr. X", "Mr. Y"];
  const UserWithId: GenericTuple<
    number,
    { name: string; age: number; email: string }
  > = [123, { name: "Md Sejan", age: 24, email: "a@mail.com" }];
}
