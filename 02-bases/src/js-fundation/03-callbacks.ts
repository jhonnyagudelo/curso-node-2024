interface User {
  id: number;
  name: string
}

const users: User[] = [
  {
    id: 1,
    name: "Jhonny",
  },
  { id: 2, name: "Tamara" },
];

export const getUserById = (id: number, callback: (err?: string, user?: User) => void) => {
  const user = users.find((i) => i.id === id);
  !user ? callback(`User not found with id ${id}`) : callback(undefined, user);
};

