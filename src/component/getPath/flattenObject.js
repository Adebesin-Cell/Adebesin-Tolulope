export const flattenObj = (a) => {
  let result = {};

  for (const i in a) {
    if (typeof a[i] === "object" && !Array.isArray(a[i])) {
      const temp = flattenObj(a[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = a[i];
    }
  }
  return result;
};
