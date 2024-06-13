// const { getAge, getUUID } = require("../plugins");
//


interface BuildMakerPersonOptions {
  getUUID: () => string;
  getAge: (birthdate: string) => number
}


interface PersonOption {
  name: string;
  birthdate: string
}

export const buildMakePerson = ({ getUUID, getAge }: BuildMakerPersonOptions) => {
  return ({ name, birthdate }: PersonOption) => {
    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};

