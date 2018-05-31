function isPalindrom( str ) {
  str = str.split(' ').join('').toLowerCase();
  if (str[str.length - 1] == '?') {
    str = str.slice(0, -1);
  }
  for (let i = 0, j = str.length-1; i < j; i++, j--) {
    if (str[i] != str[j]) { return "NO"; }
  }
  return "YES";
}
process.stdout.write(isPalindrom(process.argv[1]));