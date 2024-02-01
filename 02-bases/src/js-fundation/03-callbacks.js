const users = [
  {
    id: 1,
    name: "Jhonny",
  },
  { id: 2, name: "Tamara" },
];

const getUserById = (id, callback) => {
  const user = users.find((i) => i.id === id);
  !user ? callback(`User not found with id ${id}`) : callback(null, user);
};

module.exports = { getUserById };
