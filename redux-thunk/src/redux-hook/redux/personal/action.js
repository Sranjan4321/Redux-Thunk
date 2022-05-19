export const LOGIN = "LOGIN";
export const PERSONAL = "PERSONAL";
export const OFFICIAL = "OFFICIAL";
export const OTHERS = "OTHERS";

export const Persnols = (payload) => ({
  type: PERSONAL,
  payload,
});

export const Officials = (payload) => ({
  type: OFFICIAL,
  payload,
});

export const Others = (payload) => ({
  type: OTHERS,
  payload,
});

export const AddTodo = () => (dispatch) => {
  fetch(" http://localhost:8080/data")
    .then((res) => res.json())
    .then((d) => dispatch(Persnols(d)));
};
