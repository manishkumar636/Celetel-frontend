
//For local setup -- LOcal Host
const local = {
  apiUrl: "http://localhost:",
  encryptionkey: "",
  PORT: '8600/api',
  API_BASEURL: "http://localhost:8600",
  SOCKET_URL: "ws://localhost:8600"
};

// For Staging server --  

const staging = {
  apiUrl: "",
  encryptionkey: "",
  PORT: '8600/api',
  API_BASEURL: "https://celetel-testing.onrender.com",
  // API_BASEURL: "http://3.111.149.149:8600",
  SOCKET_URL: ""
};



//For staging server port KEY can not be remove its using in application



console.log("process.env.REACT_APP_ENV :", process.env.REACT_APP_ENV);

if (process.env.REACT_APP_ENV === "local") module.exports = local;
// else if (process.env.REACT_APP_ENV === "dev") module.exports = dev;
else if (process.env.REACT_APP_ENV === "staging") module.exports = staging;




else module.exports = staging;

// else module.exports = dev;

// else module.exports = local



