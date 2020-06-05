import * as browser from 'webextension-polyfill'

const state = {
  countries: [],
  pingTimeMss: [],
  protocols: [],
  countryFilter: [],
  pingTimeMsFilter: [],
  protocolFilter: [],
  favorites: true
};

const actions = {
  updateChoices({ commit }, newProxies) {
    const uniqueCountries = new Set(newProxies.map(proxy => proxy.country));
    const allProtocols = [...new Set(newProxies.map(proxy => proxy.protocol))];

    const update = {
      countries: [...uniqueCountries].sort(),
      pingTimeMss: [300, 1000, 3000],
      protocols: allProtocols
    };

    commit('updateChoices', update);
  },
  update({ commit }) {
    return browser.runtime.sendMessage({ name: 'poll-state' }).then(({ filters }) => commit('update', filters));
  },
  save({ state }) {
    browser.runtime.sendMessage({
      name: 'update-state',
      message: { filters: state }
    })
  }
};

const mutations = {
  resetFilters(state) {
    state.countryFilter = [];
    state.pingTimeMsFilter = [];
    state.protocolFilter = [];
    state.favorites = true;
  },
  updateChoices(state, { countries, pingTimeMss, protocols }) {
    state.countries = countries;
    state.pingTimeMss = pingTimeMss;
    state.protocols = protocols;
  },
  update(state, inbound) {
    state = Object.assign(state, inbound);
  },
  setFavoriteState(state, favoriteState) {
    state.favorites = favoriteState;
  },
  setCountryFilter(state, countryFilter) {
    state.countryFilter = countryFilter;
  },
  setPingTimeMsFilter(state, pingTimeMsFilter) {
    state.pingTimeMsFilter = pingTimeMsFilter;
  },
  setProtocolFilter(state, protocolFilter) {
    state.protocolFilter = protocolFilter;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
