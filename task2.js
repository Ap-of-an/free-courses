function fib_fast(n) {
    if (n == 0) { return '0'; }
    if (n == 1 || n == -1) { return '1'; }
    
    let fib_N = ""; 
    if (n < -1) {
        n = Math.abs(n);
        if (!(n % 2)) { fib_N += '-'; }
    }
    
    // Числа представлены ввиде массивов. В каждом элементе массива не более 15-и цифр
    const BASE = 15; // максимальное количество знаков в одном элементе массива 
    const MAX = 999999999999999; // Math.pow(10, BASE) - 1; // максимальное число в одном элементе массива 
    const stepen10 = 1000000000000000; //Math.pow(10, BASE); // вспомогательное число
    
    function sum(a, b) {
        let result;
        let max_size, min_size;
        let arrLong, arrShort;
        if (a.length >= b.length) {
            arrLong = a;
            arrShort = b;
        } else {
            arrLong = b;
            arrShort = a;
        }
        max_size = arrLong.length;
        min_size = arrShort.length;

        result = new Array(max_size + 1).fill(0);

        let lindx_arrL = arrLong.length - 1,
            lindexRes = result.length - 1,
            lindx_arrS = arrShort.length - 1;
        let temp = 0,
            flag = false;
        for (let i = 0; i < min_size; i++) {
            temp = arrLong[lindx_arrL - i] + arrShort[lindx_arrS - i] + result[lindexRes - i];
            if (temp > MAX) {
                result[lindexRes - i] = temp % stepen10;
                result[lindexRes - i - 1] = 1;
            } else {
                result[lindexRes - i] = temp;
            }
        }
        for (let i = min_size; i < max_size; i++) {
            temp = result[lindexRes - i] + arrLong[lindx_arrL - i];
            if (temp > MAX) {
                result[lindexRes - i] = temp % stepen10;
                result[lindexRes - i - 1] = 1;
            } else {
                result[lindexRes - i] = temp;
            }
        }
        if (!result[0])
            result.shift();
        return result;
    }

    let c = [];
    c[0] = [0];
    c[1] = [1];
    for (let i = 2; i <= n; i++) {
        c[i % 2] = sum(c[0], c[1]);
    }
    let t = c[n % 2];
    fib_N += t[0].toString();
    let counter = 0;
    for (let i = 1; i < t.length; i++) {
        counter = (t[i] == 0) ? 1 : Math.ceil(Math.log10(t[i] + 0.5));
        while (counter < BASE) {
            fib_N += '0';
            counter++;
        }
        fib_N += t[i].toString();
    }
    return fib_N;
}

process.stdout.write(fib_fast(Number(process.argv[2])));