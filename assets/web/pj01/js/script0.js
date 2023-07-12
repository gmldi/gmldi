let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
}

let cg = document.querySelector('.cg')

document.querySelector('.cg').onclick = () =>{
    category.classList.toggle('active');
    cg.classList.remove('active');
}

let category = document.querySelector('.category')

document.querySelector('.category').onclick = () =>{
    cg.classList.toggle('active');
    category.classList.remove('active');
}
