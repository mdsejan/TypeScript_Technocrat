{
  // type assertion

  let anything: any;

  anything = "next level web dev";

  anything = 222;

  // (anything as number).

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertedValue = parseInt(value) * 1000;
      return `The Converted Value is: ${convertedValue}`;
    }
    if (typeof value === "number") {
      return value * 1000;
    }
  };

  const result1 = kgToGm(`150`) as string;
  const result2 = kgToGm(40) as number;

  console.log(result1, result2);

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
