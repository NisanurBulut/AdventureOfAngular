import { IWand } from "./wand.model";

export interface IPersonType
  {
    name: string,
    species: string,
    gender: string,
    house:string,
    dateOfBirth: string,
    yearOfBirth: number,
    ancestry: string,
    eyeColour:string,
    hairColour: string,
    wand: IWand,
    patronus: string,
    hogwartsStudent: string,
    hogwartsStaff: string,
    actor: string,
    alive: string,
    image: string
    }
