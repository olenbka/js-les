/************Урок 1************/
/***********/
let cels = 20
let fahr = (9 / 5) * cels + 32
alert(fahr)
alert((9/5)*cels+32)

/***********/
let admin 
let name = 'Vasilij'
admin = name
alert(admin)

/***********/ 

let a = 1000
let b = '108'
let c = a+b
alert(c)      /* Вернет 1000108 */


/*****************Урок 2************/
/********* Задача 1************/

var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 /* ++a означает что мы к переменной а прибавляем единицу */
d = b++; alert(d); // 1 /* ++ после переменной означает, что мы прибавляем единицу, но выводим предыдущее 		
            значение переменной */
c = (2+ ++a); alert(c); // 5 /* т.к. в первом примере мы прибавили единицу в переменную а ее значение стало равно 	
                2.В данном примере прибавляем еще единицу и а становится равно 3, отсюда ответ 5 */
d = (2+ b++); alert(d); // 4 /* т.к. во втором примере мы прибавили единицу в переменную b ее значение стало равно 	
                2.В данном примере прибавляем еще единицу и а становится равно 3, но выводим 			
                предыдущее значение т.е. 2, отсюда получаем 4 */
alert(a); // 3	/* прибавили единицу в примере 1 и примере 3 */
alert(b); // 3	/* прибавили единицу в примере 2 и примере 4 */


/********* Задача 2************/

var a = 2;
var x = 1 + (a *= 2); /* X будет равен 5 т.к. оператор *= это сокращенный оператор, полностью он будет выглядеть x 	
            = 1 + (a = a * 2 ) */


/********* Задача 3************/
var a = 5;
var b = 3;
if (a > 0 && b > 0){
    x = a - b;
    alert(x);
} else if (a < 0 && b < 0){
    x = a * b;
    alert (x);
    }
  else if (a > 0 && b < 0 || a < 0 && b > 0) {
    x = a + b;
    alert (x);
  }

/********* Задача 4************/
var a = +prompt ('Введите число от 1 до 15');
switch (a) {
case 1:
    alert ( 'Ваше число 1');
    break;
case 2:
    alert ( 'Ваше число 2');
    break;
case 3:
    alert ( 'Ваше число 3');
    break;
case 4:
    alert ( 'Ваше число 4');
    break;
case 5:
    alert ( 'Ваше число 5');
    break;
case 6:
    alert ( 'Ваше число 6');
    break;
case 7:
    alert ( 'Ваше число 7');
    break;
case 8:
    alert ( 'Ваше число 8');
    break;
case 9:
    alert ( 'Ваше число 9');
    break;
case 10:
    alert ( 'Ваше число 10');
    break;
case 11:
    alert ( 'Ваше число 11');
    break;
case 12:
    alert ( 'Ваше число 12');
    break;
case 13:
    alert ( 'Ваше число 13');
    break;
case 14:
    alert ( 'Ваше число 14');
    break;
case 15:
    alert ( 'Ваше число 15');
    break;
}



/********* Задача 5************/
var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div (a, b) {
    return a / b;
}

function mult (a, b) {
    return a * b;
}
/********* Задача 6************/

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
        }
}
