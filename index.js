let resultado = document.getElementById('resultado');
let forma = document.getElementById("forma")

document.getElementById('pix').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);
let valorAPagar = ((preco + frete) * 0.90).toFixed(2);
forma.innerText = `Forma: PIX`
resultado.innerText = `Total : R$ ${valorAPagar}`;
document.getElementById('preco').value = " "
document.getElementById('frete').value = " "
document.getElementById('preco').focus()
}
document.getElementById('dinheiro').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);
let valorAPagar = ((preco + frete) * 0.90).toFixed(2);
forma.innerText = 'Forma: dinheiro'
resultado.innerText = `Total : R$ ${valorAPagar}`;
document.getElementById('preco').value = " "
document.getElementById('frete').value = " "
document.getElementById('preco').focus()
}
document.getElementById('cartao').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);
let valorAPagar = ((preco + frete)).toFixed(2);
forma.innerText = 'Forma: cartao'
resultado.innerText = `Total : R$ ${valorAPagar}`;
document.getElementById('preco').value = " "
document.getElementById('frete').value = " "
document.getElementById('preco').focus()
}
document.getElementById('parcelado').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);
let valorAPagar = ((preco + frete) * 1.1).toFixed(2);
forma.innerText = 'Forma: parcelado'
resultado.innerText = `Total : R$ ${valorAPagar}`;
document.getElementById('preco').value = " "
document.getElementById('frete').value = " "
document.getElementById('preco').focus()
}