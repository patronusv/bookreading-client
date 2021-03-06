const isAuth = state => state.auth.token;
const getUserEmail = state => state.auth.user.email;
const getUserName = state => state.auth.user.name;
const getId = state => state.auth.user.id;
const getUserActiveTraining = state=> state.auth.user.activeTraining;

const authSelectors = { isAuth, getId, getUserEmail, getUserName, getUserActiveTraining };

export default authSelectors;
