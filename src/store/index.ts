import Vue from 'vue';
import Vuex, {ActionContext} from 'vuex';
import {createModules} from "./modules";
import {mutations} from "./mutations";
import {actions} from "./actions";
import {getters} from "./getters";

// @ts-ignore
Vue.use(Vuex);

export type Store = ActionContext<{}, {}>;

export function createStore() {
  const state = {};
  const modules = createModules();

  return new Vuex.Store({
    modules,
    state,
    mutations,
    actions,
    getters
  });
}
