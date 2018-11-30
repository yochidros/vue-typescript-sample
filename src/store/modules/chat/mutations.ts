import { DefineMutations } from "vuex-type-helper";
import { State } from "./index";

export interface Mutations {
  addMessages: {
    value: string;
  };
}

export const mutations: DefineMutations<Mutations, State> = {
  addMessages(state, { value }) {
    var c = "abcdefghijklmnopqrstuvwxyz0123456789";
    var id = "";
    for (var i=0; i<8; i++){ id += c[Math.floor(Math.random()*c.length)]}
    state.messages.push({ id: id, message: value});
  },

};
