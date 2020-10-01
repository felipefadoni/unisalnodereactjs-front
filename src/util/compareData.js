const compareData = (objA, objB) => {
  return new Date(objA.date_limit) < new Date(objB.date_limit)
    ? -1
    : new Date(objA.date_limit) > new Date(objB.date_limit)
    ? 1
    : 0;
};

export default compareData;
