
/* When user clicks, toggle content: */
function dropdownToggler() {
document.getElementById("bookADemo_dropdown_element").classList.toggle("active");
console.log("We clicked");
};

/* When user clicks outside of dropdown, close it: */
    window.onclick = function(event) {
        if(!event.target.matches('.bookADemo_form_dropbtn')) {
            let dropdowns = document.getElementsByClassName('dropdown-content');
            for (let i = 0; i < dropdowns.length; i++) {
                let openDropdown = dropdowns[i];
                if(openDropdown.classList.contains('active')) {
                    openDropdown.classList.remove('active');
                }
            }
        }
    };

/* Logic to Map out Radio btns: */
    const radioBtns = [ 
        {
            id: 1,
            name: 'Real-time Analytics',
        },
        {
            id: 2,
            name: 'Scalability',
        },
        {
            id: 3,
            name: 'Query Response Time',
        },
        {
            id: 4,
            name: 'Document Storage',
        },
        {
            id: 5,
            name: 'High Concurrency',
        },
        {
            id: 6,
            name: 'Full Text Search',
        },
        {
            id: 7,
            name: 'Fast Data Ingest',
        },
        {
            id: 8,
            name: 'Price',
        },
    ];

    let dropDownItems = [
        {
            id: 1,
            name: '1-10'
        },
        {
            id: 2,
            name: '11-15'
        },
        {
            id: 3,
            name: '51-100'
        },
        {
            id: 4,
            name: '101-250'
        },
        {
            id: 5,
            name: '250-1000'
        },
        {
            id: 6,
            name: '1000+'
        },
    ];

/* Logic to map out Business Size dropdown: */
    let businessDropdown = document.getElementById('bookADemo_dropdown');
    const mappedItems = dropDownItems.map ((items, index) => {
        return `
            <li class='bookADemo_dropdown_li' key=${index}>${items.name}</li>
        `
    }).join('');

    businessDropdown.innerHTML = mappedItems;


/*radioBtns.map( btns => {
return (
    <p key={btns.id}>{btns.name}</p>
)
}); */

/* Logic to map out Radio buttons: */

    let tester = document.getElementById('radiobtn-parentwrapper');

    const mappedBtns = radioBtns.map( (btns, index) => {
    return `<li class='radiobtn_content' key=${index}>
                <input class='radiobtn_input' type='radio' key=${index} value=${btns.name}/>
                <label key=${index} class='radiobtn_label' for=${btns.name}>${btns.name}</label> 
            </li>
    `
    }).join('');

    tester.innerHTML = mappedBtns;

/* Logic for form btn state: */
/* TODO: may need to change */
    function btnClicked() {
        let button = document.getElementById('bookADemo_form_btn');
        console.log("cleicked the button");
        button.style.backgroundColor = '#8800CC';
    };


    /* '#8800CC' */