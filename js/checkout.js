
function sumMoney(){
    var x = document.getElementsByClassName('list_order')[0];
    var list_order = x.getElementsByClassName('_product');
    var sum = 0;
    for (var i = 0; i < list_order.length; i++)
    {
        var price = list_order[i].getElementsByClassName("_price")[0].innerHTML;
        price = price.replaceAll(',', '');
        sum += parseInt(price);
    }
    document.getElementById('_total').textContent = formatMoney(sum);
}