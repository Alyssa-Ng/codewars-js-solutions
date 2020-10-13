//https://www.codewars.com/kata/530017aac7c0f49926000084

function pluck(objs, name) {
  let result = [];
  for(obj of objs) obj.hasOwnProperty(name) ? result.push(obj[name]) : result.push(undefined);
  return result;
}
