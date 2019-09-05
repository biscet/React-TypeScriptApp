import dispatcher from "../Entities/Dispatcher"

import ReduceStore from "flux"

interface ActionTypes {
  type: string
}

export default class Store extends ReduceStore<number> {
  getInitialState(): number {
    return 0
  }

  reduce(state: number, action: ActionTypes): number {
    switch (action.type) {
      case "increment":
        return state + 1

      case "square":
        return state * state

      default:
        return state
    }
  }
}
