{
  // mapped types

  const arrOfNumbers: number[] = [1, 2, 3, 4, 5];

  const arrOfStrings: string[] = arrOfNumbers.map((number) =>
    number.toString()
  );

  console.log(arrOfStrings);

  type areaNumber = {
    height: number;
    width: string;
  };

  type Height = areaNumber["height"]; // lookup type

  // T = { height: string; width: number }
  // key => T["height"]

  type areaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: areaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };

  //
}
