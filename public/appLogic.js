
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

    /* export let dropdownArr = []; */

/* When user clicks, toggle content: */
function dropdownHandler(input) {
    console.log("Ran")
    /* event.preventDefault(); */
    /* let element = document.getElementById("bookADemo_dropdown_li"); */
    console.log("The clicked element: ", input);
    dropdownArr.push(input);
    return input;
};

/* Logic to map out Business Size dropdown: */
    let businessDropdown = document.getElementById('bookADemo_dropdown');
    const mappedItems = dropDownItems.map ((items, index) => {
        return `
            <li id='bookADemo_dropdown_li' class='bookADemo_dropdown_li' value=${items.name} key=${index} onclick={dropdownHandler('${items.name}')}>${items.name}</li>
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
                <input class='radiobtn_input' type='radio' key=${index} value=${btns.name} name="selector"/>
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


/* Form Validation Logic: */

    let id = (id) => document.getElementById(id);
    let classes = (classes) => document.getElementsByClassName(classes);
    let form = id('bookADemo_form');
    let email = id('bookADemo_form_input');
    let errorMsg = classes("error");
    let successIcon = classes("success-icon");
    let failureIcon = classes("failure-icon");
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');


  /*   document
  .getElementById("Email").setAttribute(
    "pattern",
    "^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$"
  ).setAttribute(
    "oninvalid",
    "setCustomValidity('Please enter business email')"
  ).setAttribute("onchange", "try{setCustomValidity('')}catch(e){}')") */


    let validationHandling = (id, serial, message) => {
        if (id.value.trim() === "" ) {
            errorMsg[serial].innerHTML = message;
            id.style.border = "1px solid red";
            
            // icons
            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
            console.log("An email is required")
            
            return 'An email is required.'
          } else if(regex.test(id.value) === false) {
            errorMsg[serial].innerHTML = message;
            id.style.border = "1px solid red";
            /* id.setCustomValidity('Please enter business email'); */
            console.log(regex.test(id.value))
            // icons
            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
          }
          
          else {
            errorMsg[serial].innerHTML = "";
            id.style.border = "1px solid green";
            
            // icons
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
          }
    }
    
    /* Submit event listener: */
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Submitted a form")
        validationHandling(email, 0, "Email cannot be blank");
        console.log("Form data: ",form )
    })