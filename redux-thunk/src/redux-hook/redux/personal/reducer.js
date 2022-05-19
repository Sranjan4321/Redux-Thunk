import { LOGIN, OFFICIAL, OTHERS, PERSONAL } from "./action";

const intState = {
  Ptodo: [],
  Oftodo: [],
  Othtodo: [],
};

export const PTodoReducer = (state = intState, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case PERSONAL:
      return {
        ...state,
        Ptodo: payload.filter((elem) => elem.personal === true),
      };
    case OFFICIAL:
      return {
        ...state,
        Oftodo: payload.filter((elem) => elem.official === true),
      };
    case OTHERS:
      return {
        ...state,
        Othtodo: payload.filter((elem) => elem.other === true),
      };
    default:
      return state;
  }
};
