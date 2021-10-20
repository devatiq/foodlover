

let icon = document.querySelector('#navicon');
let menu = document.querySelector('#sitenav');

icon.addEventListener('click', function(){

    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');

    }

})