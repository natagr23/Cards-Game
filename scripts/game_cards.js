const sgv_container = document.getElementById('sgv1')
console.log(sgv_container);

const td_1 = document.getElementById('td1')
console.log(td_1);

td_1.addEventListener('click', () => {
    sgv_container.removeAttribute('hidden')
    });




