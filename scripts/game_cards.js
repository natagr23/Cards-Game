// const div_all = document.querySelectorAll('div');
// console.log(div_all);

// const td_all = document.getElementsByTagName('td');
// console.log(td_all);

// const id_td_container = td_all.getElementsByTagName('id')
// console.log(id_td_container);


const div_all = document.querySelectorAll('div');
console.log(div_all);

console.log(div_all[3].firstElementChild);

const td_all = document.querySelectorAll('td');
console.log(td_all);

// const id_td_container = td_all.querySelector('id')
// console.log(id_td_container)

console.log(td_all[1]);


for (let i = 0; i < 17; i++ ) {
    // if (i===5){
    //     continue;
    //     }
        
            td_all[i].addEventListener('click', () => {
                
            if (div_all[i+3].firstElementChild.classList.contains('hidden')
            ) {
                div_all[i+3].firstElementChild.classList.remove('hidden');
            }
            else {
                div_all[i+3].firstElementChild.classList.add('hidden');
            }
        }
        )
    }
    //const new_p = copy_div.querySelector('p');

    // const div_container = document.getElementById('div_container');