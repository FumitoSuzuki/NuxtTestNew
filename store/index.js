/*
 * NuxtServerInit should be defined in the store index.
 * This is the method that will be executed during the initial load.
 * https://ja.nuxtjs.org/docs/2.x/directory-structure/store/#the-nuxtserverinit-action
 */
export const actions = {
  async nuxtServerInit({ dispatch, commit, getters }) {
    await dispatch('contentful/initialize')
  },
}
