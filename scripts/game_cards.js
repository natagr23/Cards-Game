// initialize local storage variable to empty string
localStorage.setItem('selected_id', '');

// array with winning pairs
const list_pairs = [['td1', 'td9'], ['td2', 'td10'], ['td3', 'td11'],
['td4', 'td12'], ['td5', 'td13'], ['td6', 'td14'], ['td7', 'td15'], ['td8', 'td16']]
 
// loop through all td elements
document.querySelectorAll('td').forEach((element) => {
    element.addEventListener('click', () => {
        // check if element was discovered
        if (element.classList.contains('bg-red')) {
            console.log("Element previously discovered")
            return;
        }

        // check if image must be hidden or not
        if (element.firstElementChild.classList.contains('hidden')) {
            element.firstElementChild.classList.remove('hidden');
        }
        else {
            element.firstElementChild.classList.add('hidden');
        }

        // get TD ids
        const id_previously_selected = localStorage.getItem('selected_id');
        const current_id = element.id;

        // if no id selected, means first click, save it to local storage  and return
        if (id_previously_selected === '') {
            localStorage.setItem('selected_id', current_id);
            console.log(`setting current icon to ${current_id}`);
            return;
        }

        // search for winning couples
        for (const pair of list_pairs) {
            if ( pair.includes(current_id) && pair.includes(id_previously_selected)) {
                // found match!
                console.log(`Match found: ${current_id} and ${id_previously_selected}`);
                
                // delete elements from HTML
                //document.getElementById(id_previously_selected).remove();
                //document.getElementById(current_id).remove();

                document.getElementById(id_previously_selected).classList.add('bg-red');
                document.getElementById(id_previously_selected).classList.remove('bg-blue-lighter');

                document.getElementById(current_id).classList.add('bg-red');
                document.getElementById(current_id).classList.remove('bg-blue-lighter');

                // reset selected id
                localStorage.setItem('selected_id', '');

                return;
            }
        }

        // if not found, hide both icons
        document.getElementById(id_previously_selected).firstElementChild.classList.add('hidden');
        document.getElementById(current_id).firstElementChild.classList.add('hidden');

        // if user fail to select the correct pair, reset selection
        localStorage.setItem('selected_id', '');
    });
});