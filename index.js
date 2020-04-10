// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(methodDriver, key, value) {
  let newDriver = Object.assign({}, methodDriver)
  newDriver[key] = value
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(methodDriver, key, value){
  methodDriver[key] = value;
  return methodDriver
}
