//Operaciones aritméticas básicas con dos números solicitados al usuario.
document.write("<h2>Mostrar la suma, resta, multiplicación, división y módulo entre dos números.</h2>");

//Pedir los dos números al usuario
let num1 = prompt("Calculemos la suma, resta, multiplicación,división y módulo entre dos números. Ingresa el primer número: ");
let num2 = prompt("Ingresa el segundo número");

//Calcular la suma, resta, multiplicación, división y resto de los números ingresados por el usuario.
let suma = parseInt(num1)+parseInt(num2);
let resta = parseInt(num1)-parseInt(num2);
let multiplica = parseInt(num1)*parseInt(num2);
let divide = parseInt(num1)/parseInt(num2);
let modulo = parseInt(num1)%parseInt(num2);

document.write(" La suma entre "+num1+" y "+num2+" es "+suma+". <br>");
document.write(" La resta entre "+num1+" y "+num2+" es "+resta+". <br>");
document.write(" La multiplicación entre "+num1+" y "+num2+" es "+multiplica+". <br>");
document.write(" La división entre "+num1+" y "+num2+" es "+divide+". <br>");
document.write(" El resto entre "+num1+" y "+num2+" es "+modulo+". <br>");

document.write("<hr>");

//Transformar temperatura de grados Celcius a Kelvin y Farenheit.
document.write("<h2>Transformar temperatura de grados Celsius a Farenheit y Kelvin.</h2>");

// Preguntar al usuario la temperatura que quiere transformar
let temp = prompt("Transformemos grados Celcius a Farenheit y Kelvin. Ingresa la temperatura que quieres transformar: ");

//Calcular las equivalencias.
let Farenheit = parseInt(temp) * 1.8 + 32;
let Kelvin = parseInt(temp) + 273.15;

//Mostrar las equivalencias de la temperatura ingresada por el usuario.
document.write("La temperatura en grados Celsius ("+temp+"°C) equivale a:<br>");
document.write(Farenheit + " °F.<br>");
document.write(Kelvin + " °K.<br>");

document.write("<hr>");

//Transformar días en años, meses, semanas, días y horas.
document.write("<h2>Transformar días a años, semanas, días, y horas.</h2>");

// Preguntar al usuario la cantidad de días que quiere transformar.
let dia = prompt("Indica la cantidad de días que quieres transformar en años, meses, semanas, dias y horas: ");

// Calcular las equivalencias.
let anos = parseInt(dia) * 0.00274;
let meses = parseInt(dia) * 0.033; //mes de 30 días
let semanas = parseInt(dia) * 0.1429; 
let dias = parseInt(dia) * 1;
let horas = parseInt(dia) * 24;

// Mostrar los resultados de las equivalencias.
document.write(dia + " días, equivalen a:<br>");
document.write(anos + " años.<br>");
document.write(meses + " meses.<br>");
document.write(semanas + " semanas.<br>");
document.write(dias + " días.<br>");
document.write(horas + " horas.<br>");

document.write("<hr>");

//Calculos con 5 números.
document.write("<h2>Cálculo de suma y promedio entre 5 números.</h2>");

// Preguntar al usuario los cinco números que quiere calcular.
let num3 = prompt("Calculemos la suma y el promedio entre 5 números. Ingresa el primer número:");

//Pedir los cinco números al usuario.
let num4 = prompt("Ingresa el segundo número");
let num5 = prompt("Ingresa el tercer número");
let num6 = prompt("Ingresa el cuarto número");
let num7 = prompt("Ingresa el quinto número");

//Calcular la suma y promedio de los cinco números que ingresó el usuario.
let sumar = parseInt(num3)+parseInt(num4)+parseInt(num5)+parseInt(num6)+parseInt(num7);
let promedio = (parseInt(num3)+parseInt(num4)+parseInt(num5)+parseInt(num6)+parseInt(num7)/5);

//Mostrar la suma y el promedio de los cinco números.
document.write(" La suma entre "+num3+", "+num4+", "+num5+", "+num6+" y "+num7+" es "+sumar+". <br>");
document.write(" El promedio entre "+num3+", "+num4+", "+num5+", "+num6+" y "+num7+" es "+promedio+". <br>");