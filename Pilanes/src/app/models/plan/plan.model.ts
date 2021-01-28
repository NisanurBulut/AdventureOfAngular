import { ExerciseItemModel } from "../exercise/exercise-item.model";

export class PlanModel {
    id: number;
    exercises: ExerciseItemModel[]
    name:string;
}