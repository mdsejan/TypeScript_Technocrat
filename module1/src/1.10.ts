{
  // Union types

  type FrontendDeveloper = "fakibazDeveloper" | "juniorDeveloper";
  type FullstackDeveloper = "frontendDeveloper" | "expertDeveloper";

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "juniorDeveloper";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "O+" | "A+" | "B+";
  };

  const user1: User = {
    name: "Sejan",
    gender: "male",
    bloodGroup: "B+",
  };

  // Intersection Type

  type FrontEDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type Fullstackdeveloper = FrontEDeveloper & BackendDeveloper;

  const Fullstackdeveloper: Fullstackdeveloper = {
    skills: ["HTML", "CSS", "Express JS"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
