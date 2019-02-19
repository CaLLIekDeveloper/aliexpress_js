window.addEventListener('DOMContentLoaded', () => {
    //const cartWrapper = document.getElementById("id");
    const cartWrapper = document.querySelector('.cart__wrapper'),
        cart = document.querySelector('.cart'),
        close = document.querySelector('.cart__close'),
        open = document.querySelector('#cart'), //alya getElementById
        goodsBtn = document.querySelectorAll('.goods__btn'),
        products = document.querySelectorAll('.goods__item'),
        confirm = document.querySelector('.confirm'),
        badge = document.querySelector('.nav__badge'),
        totalCost = document.querySelector('.cart__total > span'),
        titles = document.querySelectorAll('.goods__title');

    //селекторы это все что угодно на страннице класс, вложенность класов .class > .name

    function openCart() {
        cart.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeCart() {
        cart.style.display = 'none';
        document.body.style.overflow = '';
    }

    open.addEventListener('click', openCart);
    close.addEventListener('click', closeCart);



    goodsBtn.forEach(function (btn, i) {
        btn.addEventListener('click', () => {
            let item = products[i].cloneNode(true),
                trigger = item.querySelector('button'),
                removeBtn = document.createElement('div'),
                empty = cartWrapper.querySelector('.empty');
            trigger.remove();

            showConfirm();
            
            removeBtn.classList.add('goods__item-remove');
            removeBtn.innerHTML = '&times';
            item.appendChild(removeBtn);

            cartWrapper.appendChild(item);
            if (empty) {
                empty.style.display = "none";
            }

            item.addEventListener('click', () => {
                item.remove();
                if(cartWrapper.querySelectorAll('.goods__item').length==0)empty.style.display = 'block';
                calcGoods();
            });
            calcGoods();
        });
    });

    function sliceTitle() {
        titles.forEach(function (item) {
            if (item.textContent.length < 70) return;
            const str = item.textContent.slice(0, 71) + '...';
            //const str = `${item.textContent.slice(0,71)} ...`;
            item.textContent = str;
        });
    }
    sliceTitle();

    function showConfirm() {
        confirm.style.display = 'block';
        let counter = 100;
        const id = setInterval(frame, 10);

        function frame() {
            if (counter == 10) {
                clearInterval(id);
                confirm.style.display='none';
            } else {
                counter--;
                confirm.style.transform = `translateY(-${counter}px)`;
                confirm.style.opacity = '.' + counter;
            }
        }
    }

    //setInterval - запускать скрипт каждые 30 секунд
    //setTimeout - запускать скрипт через определенное время

    function calcGoods()
    {
        const items = cartWrapper.querySelectorAll('.goods__item');
        badge.textContent = items.length;
        calcTotal();
    }

    function calcTotal()
    {
        const prices = document.querySelectorAll('.cart__wrapper > .goods__item > .goods__price > span');
        let total = 0;
        prices.forEach(function(item)
        {
            total+= +item.textContent;
        });
        cart.querySelector('.cart__total > span').textContent = total;
    }

});