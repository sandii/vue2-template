import {
  GetterTree,
  MutationTree,
  ActionTree,
} from 'vuex';

interface State {
  test: any[];
}
const state: State = {
  test: [],
};
const getters: GetterTree<State, State> = {
};
const mutations: MutationTree<State> = {
};
const actions: ActionTree<State, State> = {
};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
