import { State } from "vuex-class";
import {mutations} from "./mutations";
import {getters} from "./getters";
import {actions} from "./actions";

export { Actions } from "./actions";
export { Mutations } from "./mutations";
export { Getters } from "./getters";

export interface State {
  messages: Array<{
    id: string,
    message: string
  }>;
}

export function createChatStore() {
  const state: State = {
    messages: []
  };

  return {
    namespaced: true,
    state,
    actions,
    getters,
    mutations
  }
}
