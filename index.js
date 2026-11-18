let resultado = document.getElementById('resultado');
let forma = document.getElementById("forma")

document.getElementById('pix').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);
let valorAPagar = ((preco + frete) * 0.90).toFixed(2);
forma.innerText = `Forma: PIX`
resultado.innerText = `Total : R$ ${valorAPagar}`;
document.getElementById('preco').value =
document.getElementById('frete').value =
document.getElementById('preco').focus()
}
document.getElementById('dinheiro').onclick = () => {
let preco = Number(document.getElementById('preco').value);
let frete = Number(document.getElementById('frete').value);
let valorAPagar = ((preco + frete) * 0.90).toFixed(2);
forma.innerText = 'Forma: PIX'
resultado.innerText = 'Total : R$ ${valorAPagar}';
document.getElementById('preco').value =
document.getElementById('frete').value =
document.getElementById('preco').focus()

}