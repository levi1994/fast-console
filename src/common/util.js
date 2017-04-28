export function getFileName(str) {
  let nameArr = str.splice("/");
  return nameArr[nameArr.length - 1];
}
