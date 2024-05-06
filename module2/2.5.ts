{
  // function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const resGeneric = createArrayWithGeneric<string>("Bangladesh");

  type User = { id: number; name: string };

  const resGenericObj = createArrayWithGeneric<User>({
    id: 222,
    name: "Sejan",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resTuple = createArrayWithTuple<string, number>("Bangladesh", 222);

  type User2 = { id: number; name: string };

  const resTuple2 = createArrayWithTuple<string, { name: string }>(
    "Bangladesh",
    { name: "Asia" }
  );

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    name: "Mr. X",
    email: "x@emailcom",
    devType: "NLWD",
  });
  const student2 = addCourseToStudent({
    name: "Mr. Y",
    email: "y@emailcom",
    hasWatch: "Apple Watch",
  });

  //
}
