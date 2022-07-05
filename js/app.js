document.querySelectorAll('.dropdown-wrapper').forEach(function(dropwrap) {
    // 
const dropDownBtn = dropwrap.querySelector('.dropdown-btn')
const dropDownList = dropwrap.querySelector('.dropdown-list')
const list = dropwrap.querySelectorAll('.dropdown-list__item')
const dropDown = dropwrap.querySelector('.dropdown')
console.log(dropDown);
// 

dropDownBtn.addEventListener('click', function() {
    dropDownList.classList.toggle('visible')
    this.classList.toggle('active')
    dropDown.classList.toggle('show')
})
// 
list.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.stopPropagation()
        //console.log(this);
        dropDownBtn.innerText = this.innerText
        dropDownList.classList.remove('visible')
        dropDownBtn.classList.remove('active')
        dropDown.classList.toggle('show')
    })
})
// 
document.addEventListener('click', function(e) {
    //console.log('click window');
    if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('active')
        dropDownList.classList.remove('visible')
        dropDown.classList.toggle('show')
    }
})
// Закрыть по клавишам tab и esc
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab' || e.key === 'Escape') {
        dropDownBtn.classList.remove('active')
        dropDownList.classList.remove('visible')
        dropDown.classList.toggle('show')
    }
})
})
