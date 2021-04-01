export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,

  /*  token:
    "BQAZv83qr1cri24b9QGQ1C10yE4Yu-lwpaeD26cLdtM4kRwFBtfqIPzP_C0mnkuHCsChbj_qz7EiaJ2tb7350xrVLX6KTS7Lg0wK2MO94eYPG5NvLdqqNyvudq7Nem1BEJpzXZ-SDxfCugm3TFSgZRyInuQ-q44rlGu4mKHo06AxSOAXpYGb", */
};

const reducer = (state, action) => {
  console.log(action);

  // Action > type, [payload]

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
