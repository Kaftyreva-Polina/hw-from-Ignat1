import {UserType} from "../HW8"

type ActionType =
    | { type: "sort"; payload: "up" | "down" }
    | { type: "check"; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort": {
            return state.map(el => ({...el})).sort((a, b) => (action.payload === "up")
                ? a.name.localeCompare(b.name)
                : b.name.localeCompare(a.name))
        }
        case "check": {
            return state.map(el => ({...el})).filter(el => el.age >= 18)
                .sort((a,b) => a.age - b.age)
        }
        default:
            return state
    }
}
