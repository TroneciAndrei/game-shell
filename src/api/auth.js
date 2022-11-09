let initialize = false;

export const initializeGoogleAuth = async () => {
  return new Promise((resolve) => {
    if (initialize) {
      return;
    }

    window.addEventListener("load", () => {
      /*global google */
      google.accounts.id.initialize({
        client_id:
          "661582356448-9gess85i2etpd3l9rh8pendjrl4am79m.apps.googleusercontent.com",
        callback: (response) => {
          console.log(response);
        },
      });
      resolve();
      initialize = true;
    });
  });
};
