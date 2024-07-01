import { createStore } from 'vuex';

export default createStore({
  state: {
    expenses: []
  },
  mutations: {
    addExpense(state, expense) {
      state.expenses.push(expense);
    }
  },
  actions: {
    addExpense({ commit }, expense) {
      commit('addExpense', expense);
    }
  },
  getters: {
    totalExpenses: state => {
      return state.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  }
});
