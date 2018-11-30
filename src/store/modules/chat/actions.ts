
import { DefineActions } from "vuex-type-helper";
import {State, Mutations, Getters } from "./index";

export interface Actions {
  pushMessages: {
    value: string;
  };
}

export const actions: DefineActions<Actions, State, Mutations, Getters> = {

  pushMessages({ commit }, { value }) {
    commit('addMessages', { value });
  }
};

