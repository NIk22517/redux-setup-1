const _Environments = {
  production: {
    env: "production",
    USER_URL: "https://userdetailbackend.onrender.com",
  },
  development: {
    env: "development",
    USER_URL: "https://userdetailbackend.onrender.com",
  },
  local: {
    env: "local",
    USER_URL: "https://userdetailbackend.onrender.com",
  },
};

const getEnvironment = () => {
  let env = "";
  if (window.location.href.includes("localhost")) {
    env = "local";
  } else if (window.location.href.includes("development")) {
    env = "development";
  } else {
    env = "production";
  }
  return _Environments[env];
};

const Environment = getEnvironment();
module.exports = Environment;
