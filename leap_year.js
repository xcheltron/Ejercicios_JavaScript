const leap_year = 1600;

if(leap_year % 400 === 0 || (leap_year % 4 === 0 && leap_year % 100 !== 0)){
    console.log("Año bisiesto")
}else{
    console.error("no es año bisiesto puñeton")
}