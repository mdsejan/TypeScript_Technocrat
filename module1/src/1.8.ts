{
  // =========> destrugturing <============

  // Object destrugturing

  const user = {
    id: 345,
    name: {
      firstName: "Abir",
      middleName: "Hasan",
      lastName: "Sejan",
    },
    conatctNo: "0178628328238",
    address: "Bangladesh",
  };

  const {
    conatctNo,
    name: { middleName: midName },
  } = user;

  // Array destrugturing

  const myFriends = ["imran", "rakib", "sobuj", "riham", "rayhan", "tuhin"];

  const [, , bestFriend, ...rest] = myFriends;
}
