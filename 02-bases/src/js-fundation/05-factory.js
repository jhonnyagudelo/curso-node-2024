const { getAge, getUUID } = require("../plugins");
const obj = { name: "jhonny", birthdate: "1990-03-22" };

const buildPersonal = ({ name, birthdate }) => {
  return {
    id: getUUID(),
    name,
    birthdate,
    age: getAge(birthdate),
  };
};

const jhonnr = buildPersonal(obj);

console.log(jhonnr);
