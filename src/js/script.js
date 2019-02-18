window.addEventListener('DOMContentLoaded',()=>
{
//const cartWrapper = document.getElementById("id");
const   cartWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open = document.querySelector('#cart'),//alya getElementById
        goodsBtn = document.querySelectorAll('.goods__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelectorAll('.goods__title');

//селекторы это все что угодно на страннице класс, вложенность класов .class > .name

function openCart()
{
    cart.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeCart(){
    cart.style.display = 'none';
    document.body.style.overflow='';
}

open.addEventListener('click',openCart);
close.addEventListener('click',closeCart);



goodsBtn.forEach(function(btn,i){
    btn.addEventListener('click', ()=>{
        let item = products[i].cloneNode(true),
            trigger = item.querySelector('button'),
            removeBtn = document.createElement('div'),
            empty = cartWrapper.querySelector('.empty');
        trigger.remove();

        removeBtn.classList.add('goods__item-remove');    
        removeBtn.innerHTML = '&times';
        item.appendChild(removeBtn);

        cartWrapper.appendChild(item);
        if(empty){
            empty.style.display = "none";
        }
        
        item.addEventListener('click',()=>{
            item.remove();
            //console.log(products.length);
            //if(products.length==0)empty.display = 'block';
        ;});

    });
});
});
