{
  // Type Alias

  type Student = {
    name: string;
    age: number;
    gender: string;
    constactNo?: string;
    address: string;
  };

  const student1: Student = {
    name: "Abir",
    age: 24,
    gender: "Male",
    constactNo: `01928739280`,
    address: "kalerPara, Dhunat, Bogura",
  };

  const student2: Student = {
    name: "Ashik",
    age: 28,
    gender: "Male",
    address: "kalerPara, Dhunat, Bogura",
  };

  const add = (num1: number, num2: number) => num1 + num2;
}
