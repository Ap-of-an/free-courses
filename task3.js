function division(str) {
  let gl = "aeiouаеёиоуыэюя",
    cogl = "bcdfghjklmnpqrstvwxyzбвгджзйклмнпрстфхцчшщ",
    cifr = "0123456789";
  let a = [], b = [], c = [];

  for (let i = 0; i < str.length; i++) {
    if (cogl.indexOf(str[i].toLowerCase()) != -1) {
      b.push(str[i]);
      continue;
    }
    if (gl.indexOf(str[i].toLowerCase()) != -1) {
      a.push(str[i]);
      continue;
    }
    if (cifr.indexOf(str[i].toLowerCase()) != -1) {
      c.push(str[i]);
      continue;
    }
  }
  let result = "";
  if(a.length) { result += a.join('') + " ";}
  if(b.length) { result += b.join('') + " ";}
  if(c.length) { result += c.join('') + " ";}
  return result;
}

process.stdout.write(division(process.argv[2]));