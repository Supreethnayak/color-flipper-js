let arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

let hexValue = '#';
for (i=0;i<6;i++){
    hexValue += arr[Math.floor(Math.random()*arr.length)];
    document.body.style.background = hexValue;
    document.querySelector('.hex-value').textContent = hexValue;
    document.querySelector('.hex-value').style.color = hexValue;
}