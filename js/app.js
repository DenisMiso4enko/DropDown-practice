// 
const dropDownBtn = document.querySelector('.dropdown-btn')
const dropDownList = document.querySelector('.dropdown-list')
const list = document.querySelectorAll('.dropdown-list__item')
const dropDown = document.querySelector('.dropdown')
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
    })
})
// 
document.addEventListener('click', function(e) {
    //console.log('click window');
    if (e.target !== dropDownBtn) {
        dropDownBtn.classList.remove('active')
        dropDownList.classList.remove('visible')
    }
})