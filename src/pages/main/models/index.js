

export default {
  namespace: 'main',
  state: {

  },
  effects: {
    * getData(_, { call, put }) {

    },
  },
  reducers: {
    changeState(state, { payload }) {
      return {...state, ...payload};
    },
  },
};
