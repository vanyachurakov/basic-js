function catMouse(map, moves) {
  //coding and coding...
  let cat = [];
  let mouse = [];
  let arr = [];
  let tries = 0;
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {}
  }

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] == 'C') {
        cat.push(i);
        cat.push(j);
      }
      if (map[i][j] == 'm') {
        mouse.push(i);
        mouse.push(j);
      }
    }
  }
  if (mouse.length == 0 || cat.length == 0) {
    return 'boring without two animals';
  } else {
    tries = mouse[0] + mouse[1] - cat[0] - cat[1];
  }
  return tries < moves ? 'Caught!' : 'Escaped!';
}

catMouse(
  `..C......
  .........
  ....m....`,
  5
);
