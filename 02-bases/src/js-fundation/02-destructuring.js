console.log(process.env);

const { SHELL } = process.env;

const characters = ["Flash", "Superman", "Baman"];

const [, , Baman] = characters;

console.log(Baman);
