import { apiListContentActionsVariants } from "./apiListContentActionVariants";

export interface apiListActions {
    name: string,
    checked: boolean,
    actionVariants: apiListContentActionsVariants[]
}