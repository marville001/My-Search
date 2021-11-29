const firebase = require("./firebase_connect");
module.exports = {
  saveDate: (req, callback) => {
    firebase.database().ref("links/").set({
      name: req.name,
      link: req.link,
      email: req.email,
      image: req.image,
    });
    callback(null, {
      status: 200,
      message: "link saved successfully",
    });
  },
};
