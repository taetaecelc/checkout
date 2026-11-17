let resultado = document.getElementById('resultado')
document.getElementById('pix').onclick = ()=>{
    let preco = number(document.getElementById('preco').value);
    let frete = number(document.getElementById('frete').value);
    let valorApagar = (preco + frete) * 0.90
    resultado.innerText = `${valorApagar}`
}