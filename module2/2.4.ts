{
  // interface - generic

  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmailabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmailabWatch> = {
    name: "Sejan",
    computer: {
      brand: "asus",
      model: "X-225UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "kw66",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  }

  interface YamahaBike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: "Ashik",
    computer: {
      brand: "HP",
      model: "X-25UR",
      releaseYear: 2019,
    },
    smartWatch: {
      brand: "Apple Watch",
      model: "kw667",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamah",
      engineCapacity: "100cc",
    },
  };

  //
}
