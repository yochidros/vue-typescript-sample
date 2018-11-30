
import { DefineActions } from "vuex-type-helper";
import {State, Mutations, Getters } from "./index";

export interface Actions {
  pushMessages: {
    value: string;
  };

  fetchChannels: {
  };
}

export const actions: DefineActions<Actions, State, Mutations, Getters> = {

  pushMessages({ commit }, { value }) {
    commit('addMessages', { value });
  },

  fetchChannels({ commit }, { } ) {
    async function fetchAPI() {
      const response = await fetch('https://us-central1-demoapp-1779c.cloudfunctions.net/v1/channels').catch(null);
      const json = await response.json();
      commit('setChannels', { value: json.channels });
    }

    fetchAPI();
  }
};


