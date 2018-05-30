process.argv.shift();
process.argv.shift(); // удалить перед релизом

var str = process.argv.join('').toLowerCase();
if (str[str.length - 1] == '?') {
  str = str.slice(0, -1);
}

var flag = true;
for (let i = 0, j = str.length - 1; i < j; i++, j--) {
  if (str[i] != str[j]) { flag = false; break; }
}

if (flag) {  process.stdout.write("YES"); } 
else { process.stdout.write("NO"); }