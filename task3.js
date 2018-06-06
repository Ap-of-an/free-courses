let str = process.argv[2];
str = str.replace(/\W/g, '');
let c = str.replace(/\D/g, '');
let b = str.replace(/[aeiouyAEIOUYаеёиоуыэюяАЕЁИОУЫЭЮЯ0123456789]/g,'');
let a = str.replace(/[qwrtpsdfghjklzxcvbnmQWRTPSDFGHJKLZXCVBNMйцкнгшщзхъфвпрлджчсмтьбЙЦКНГШЩЗХЪФВПРЛДЖЧСМТЬБ0123456789]/g,'');

process.stdout.write(a + " " + b + " " + c);