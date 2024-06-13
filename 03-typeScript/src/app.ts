import { findGeroById } from "./services/hero.service"


const hero = findGeroById(1)
console.log(hero?.name ?? 'Hero not found')
