const list = document.querySelector('#list');
        const menu = document.querySelector('#menu');

        list.addEventListener('click', () => {
            if(menu.classList.contains('hidden')){
                menu.classList.remove('hidden');
            }else{
                menu.classList.add('hidden');
            }
        })