import { DefineGetters } from "vuex-type-helper";
import {State} from "./index";

export interface Getters {
  messages: State["messages"];
}

export const getters: DefineGetters<Getters, State> = {
  messages(state) {
    return state.messages;
  }
};
