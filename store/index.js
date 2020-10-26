import firebase from "@/plugins/firebase";

export const state = () => ({
  user: {
    isLoggedin: false,
    uid: "",
    name: ""
  }
});

export const mutations = {
  setUser(state, user) {
    state.user = user;
    console.log("mutation", user, state.user);
  }
};

export const actions = {
  login({ commit }) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        const user = {
          isLoggedin: true,
          uid: result.user.uid,
          name: result.user.displayName
        };
        console.log(
          "success : " + user.uid + " : " + user.name + ":" + user.isLoggedin
        );
        commit("setUser", user);
      })
      .catch(function(error) {
        var errorCode = error.code;
        console.log("error : " + errorCode);
      });
  }
};

export const getters = {
  getUser(state) {
    return state.user;
  }
};
