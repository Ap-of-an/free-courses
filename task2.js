function myUmnojMatrix(matrix1, matrix2) {
    var rowsA = matrix1.length,
        colsA = matrix1[0].length,
        rowsB = matrix2.length,
        colsB = matrix2[0].length,
        C = [];

    for (let i = 0; i < rowsA; i++)
        C[i] = [];
    for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
            let t = 0;
            for (let j = 0; j < rowsB; j++)
                t += matrix1[i][j] * matrix2[j][k];
            C[i][k] = t;
        }
    }
    return C;
}

function myPowMatrix(matrix, n) {
    let result = []; // иннициализировать единичной матрицой
    for (let i = 0; i < matrix.length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (i == j) { result[i][j] = 1; }
            else { result[i][j] = 0; }
        }
    }

    while (n) {
        if (n % 2) {
            result = Object.create(myUmnojMatrix(result, matrix));
        }
        matrix = Object.create(myUmnojMatrix(matrix, matrix));
        n = Math.floor(n / 2);
    }

    return result;
}

function printMatrix(matrix) { // функция для тестирования
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            process.stdout.write(String(matrix[i][j]) + '\t');
        }
        process.stdout.write('\n');
    }
}
function myPrintMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            process.stdout.write(matrix[i][j] + '\t');
        }
        process.stdout.write('\n');
    }
}

function sum(a, b) {
    if (a.length == 0) a = '0'; 
    if (b.length == 0) b = '0'; 
    let arr_a = a.split('').reverse(),
        arr_b = b.split('').reverse(),
        res_str = [];

    let raz = Math.abs(a.length - b.length);
    if (a.length >= b.length) {
        for (let i = 0; i < raz; i++) {
            arr_b.push(0);
        }
    }
    else {
        for (let i = 0; i < raz; i++) {
            arr_a.push(0);
        }
    }

    let flag = false, max_l = Math.max(a.length, b.length),
        sc = 0; //sc - сумма цифр
    for (let i = 0; i < max_l; i++) {
        arr_a[i] = Number(arr_a[i]);
        arr_b[i] = Number(arr_b[i]);

    }

    for (let i = 0; i < max_l; i++) {
        sc = arr_a[i] + arr_b[i];
        if(flag) { sc += 1; flag = false; }
        if (sc > 9) {
            res_str.unshift(sc % 10);
            flag = true;
        }
        else { res_str.unshift(sc); }
    }
    if(flag) { // для самого высокого порядка, если в предыдущем получилось > 9
        res_str.unshift(1);
    }
    return res_str.join('');
}

function multiply(a, b) {    
    if (a.length == 0) a = '0'; 
    if (b.length == 0) b = '0'; 
    let base = 7;

    // получает на вход строку и количество цифр в одном элементе массива,
    // возвращает массив
    function strToArr(str, base) { 
        let arr = [];
        for (let i = 0, counter = 0; i < str.length; i += base, counter++) {
            arr[counter] = Number(str.slice(i, i+base));            
        }
        return arr;
    }

    let arr_a = strToArr(a, base),
        arr_b = strToArr(b, base);

    function countOst(arr, index) {
        let counter = 0;

        if (index > arr.length-1) { console.log("Ошибка: индекс больше длины массива"); }
        if (index == arr.length-1) { return 0; }
        if (index < arr.length-1) {
            // этим циклом находим количество оставшихся порядков числа 
            for (let j = index+1; j < arr.length; j++) {              
                counter += (arr[j] == 0) ? 1 : Math.ceil(Math.log10(arr[j] + 0.5)); 
            }
        }
        return counter;
    }

    function fill_zero(str, num_zero) {
        let rs = "";
        for (let i = 0; i < num_zero; i++) {
            rs += '0';       
        }
        return str + rs;
    }

    let temp = 0, count_zero = 0;
    let res_mtpl = "";
    for (let i = 0; i < arr_a.length; i++) {
        for (let j = 0; j < arr_b.length; j++) {
            temp = arr_a[i] * arr_b[j];
            count_zero = countOst(arr_a, i)+countOst(arr_b, j);
            temp = fill_zero(temp.toString(), count_zero);
            res_mtpl = sum(res_mtpl, temp);
        }
    }
    return res_mtpl;
}
