import firebase from "@/plugins/firebase";
export default ({ route, store, redirect }) => {
  if (!store.getters["index/getUser"]) {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const IUser = {
          isLoggedin: true,
          uid: user.uid,
          name: user.displayName
        };
        console.log("tag", IUser);
        store.commit("setUser", IUser);
      } else {
        if (route.name !== "login") redirect("/accounts/login");
      }
    });
  }
};
