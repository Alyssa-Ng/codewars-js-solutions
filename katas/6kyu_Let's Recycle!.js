//https://www.codewars.com/kata/5b6db1acb118141f6b000060

function recycle(array) {
  let materials = {'paper' : [],
                   'glass' : [],
                   'organic' : [],
                   'plastic' : []
                  };
  for(item of array){
    materials[item['material']].push(item['type']);
    if(item['secondMaterial'] !== undefined)  materials[item['secondMaterial']].push(item['type']);
  }
  return Object.values(materials);
}
