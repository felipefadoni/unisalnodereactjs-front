const compareData = (objA, objB) => {
  return new Date(objA.date_limit) - new Date(objB.date_limit);
};

export default compareData;

