{
  // spread operator
  // rest operator
  // destrugturing

  // learn spread operator

  const brost1: string[] = ["Mir", "Firoz", "Ahmed"];
  const brost2: string[] = ["Akash", "Ashik", "Riham"];

  brost1.push(...brost2);

  const mentors1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentors2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid",
  };

  const mentorList = {
    ...mentors1,
    ...mentors2,
  };

  // learn rest operator

  const greetFriends = (...friends: string[]) => {
    // console.log(`Hi ${friend1} ${friend2} ${friend3}`);

    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Abul", "kabul", "babul", "ubul", "labul");
}
