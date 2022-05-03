let colors = ['#5D3FD3','#de3e62','#367bb6','#ddd']
document.getElementById('clickBtn').addEventListener('click', function(event){
    event.preventDefault();
    const simpleColor = colors[Math.floor(Math.random()*colors.length)];
    document.body.style.background = simpleColor;
    document.querySelector('.hex-value').textContent = simpleColor;
    document.querySelector('.hex-value').style.color = simpleColor;
})