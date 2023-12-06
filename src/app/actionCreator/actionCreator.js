import axios from 'axios';
export const startActionCreator = () => ({
  type: 'rotate',
  payload: true,
});

export const stopActionCreator = () => {
  console.log('Stop Action')
  return (dispatch) => {
    dispatch({
      type: 'rotate',
      payload: false,
    });
  };
};

export function fetchTodos() {
  return async (dispatch, getState) => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    dispatch({ type: 'set', payload: res.data });
  };
}
