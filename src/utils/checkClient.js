const checkClient = (callback) => {
  if (typeof window !== 'undefined') {
    callback();
  } else {
    return 'typeof window is undefined';
  }
};

export default checkClient;
