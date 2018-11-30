import { DefineGetters } from "vuex-type-helper";
import {State} from "./index";

export interface Getters {
  messages: State["messages"];
  channels: State["channels"];
}

export const getters: DefineGetters<Getters, State> = {

  messages(state) {
    return state.messages;
  },

  channels(state) {
    return state.channels;
  }

};
