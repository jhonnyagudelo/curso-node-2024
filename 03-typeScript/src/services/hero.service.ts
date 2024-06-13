import { heroes } from "../data/heroes"



export const findGeroById = (id: number) => {
  return heroes.find((hero) => hero.id === id)
}
