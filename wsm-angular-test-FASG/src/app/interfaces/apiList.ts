import { apiListActions } from "./apiListContentActions";
import { apiListContentActionsVariants } from "./apiListContentActionVariants";

export interface apiList {
    _id: number,
    name: string,
    sortOrder: string,
    creationDate: string,
    lastUpdate: string,
    status: string,
    itemVariants: apiListContentActionsVariants,
    categories: object,
    goals: object,
    actions: apiListActions,
}