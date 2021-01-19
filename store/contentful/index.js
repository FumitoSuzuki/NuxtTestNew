/*
 * state section
 * This is the state of the store.
 * https://vuex.vuejs.org/ja/guide/state.html
 */
export const state = () => ({
  displayLimit: 3,
  pageNumber: 1,
})
/*
 * getters section
 * Define a method to get the object.
 * https://vuex.vuejs.org/ja/guide/getters.html
 */
export const getters = {
  // entry: (state) => (id) => {
  //   const entries = state.contents.allEntries
  //   return entries.find((entry) => entry.id === id)
  // },
  entry(state) {
    return (id) => {
      const entries = state.contents.allEntries
      return entries.find((entry) => entry.id === id)
    }
  },
  allEntries(state) {
    return state.contents.allEntries
  },
  allTags(state) {
    return state.contents.allTags
  },
  selectTags(state) {
    return state.tags.selectTags
  },
  selectEntries(state) {
    const entries = state.contents.allEntries
    const selects = state.tags.selectTags
    return entries.filter((entry) => {
      const exists = entry.tags.some((slug) => {
        return selects.some((select) => select.slug === slug)
      })
      if (exists) return entry
    })
  },
  /*
   * Note that this property is a function.
   * Get value as onThisPage (optional)
   */
  onThisPage(state, getters) {
    return (quantity) => {
      const start = (state.pageNumber - 1) * state.displayLimit
      let limit = state.displayLimit + start
      if (quantity) limit = quantity
      return getters.selectEntries.slice(start, limit)
    }
  },
  numberOfPage(state, getters) {
    const displayLimit = state.displayLimit
    let totalEntries = getters.selectEntries.length
    if (!totalEntries) totalEntries = 1
    return Math.ceil(totalEntries / displayLimit)
  },
  entryCount(state, getters) {
    return getters.selectEntries.length
  },
}
/*
 * actions section
 * Define asynchronous processing such as external linkage.
 * https://vuex.vuejs.org/ja/guide/actions.html
 */
export const actions = {
  async initialize({ dispatch, commit, getters }) {
    await dispatch('contents/initialize')
    await dispatch('tags/initialize', getters.allTags)
  },
}
/*
 * mutation section
 * Define a method to change the state of the store.
 * https://vuex.vuejs.org/ja/guide/mutations.html
 */
export const mutations = {
  delTag(state, slug) {
    const deleted = state.tags.selectTags.filter((item) => item.slug !== slug)
    state.tags.selectTags = deleted
  },
  addTag(state, slug) {
    const allTags = state.contents.allTags
    const selected = state.tags.selectTags
    const isAlready = selected.some((item) => item.slug === slug)
    if (!isAlready) {
      const insert = allTags.find((item) => item.slug === slug)
      selected.push(insert)
    }
    state.tags.selectTags = selected
  },
  pageNumber(state, number) {
    state.pageNumber = number
  },
}
