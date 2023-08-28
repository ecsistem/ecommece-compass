export function formatarPreco(preco, moeda = 'R$', casasDecimais = 2) {
    const precoFormatado = `${moeda} ${preco.toFixed(casasDecimais).replace('.', ',').replace(/\d(?=(\d{3})+,)/g, '$&.')}`;
    return precoFormatado;
}