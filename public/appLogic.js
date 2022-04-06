
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

/* When user clicks, toggle content: */
function dropdownHandler(input) {
    console.log("Ran")
    /* event.preventDefault(); */
    /* let element = document.getElementById("bookADemo_dropdown_li"); */
    console.log("The clicked element: ", input);
    /* dropdownArr.push(input); */
    return input;
};

    function dropdownValue(value) {
       
        console.log("We clicked the dropdown item")
        console.log("Value from dropdownValue: ", value);
        
    }

/* Logic to map out Business Size dropdown: */
    let businessDropdown = document.getElementById('dropdownOptions');

    let dropdownShow = document.querySelector('.bookADemo_form_dropbtn');
    dropdownShow.onclick = function() {
        dropdownShow.classList.toggle('active');
    };

    function show(text) {
        console.log("We clicked the dropdown item")
        console.log("Value from dropdownValue: ", text);
        document.querySelector('.bookADemo_form_textBox').value = text
    };

/* Logic for toggle dropdown if click outside: */
    document.addEventListener('click', function(event) {
        let clickedInside = dropdownShow.contains(event.target);

        if(!clickedInside) {
            console.log("Clicked outside")
            dropdownShow.classList.remove('active');
        }
    });

    const mappedItems = dropDownItems.map ((items, index) => {
        return `
            <li id='bookADemo_dropdown_li' class='bookADemo_dropdown_li' value='${items.name}' name='dropdownSelector' key=${index} onclick={show('${items.name}')}>${items.name}</li>
        `
    }).join('');

    businessDropdown.innerHTML = mappedItems;


/* Logic to map out Radio buttons: */

    let tester = document.getElementById('radiobtn-parentwrapper');
    function radioHandler(value) {
        console.log('clicked');
        console.log(value)
    }

/* TODO: need to make sure getting right inputs : */
    const mappedBtns = radioBtns.map( (btns, index) => {
    return `<li class='radiobtn_content' key=${index}>
                <input class='radiobtn_input' type='radio' key=${index} value='${btns.name}' name="selector" onclick={radioHandler(value)} />
                <label key=${index} class='radiobtn_label' for='${btns.name}'>${btns.name}</label> 
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

    let formSelector = document.querySelector('bookADemo_form');
    let formData = new FormData(form);

/* TODO: This runs in the email input if Regex is false: */
    function setIcon() {
        failureIcon[0].style.opacity = "1";
    }

    let validationHandling = (id, serial, message) => {
        
        if (id.value.trim() === "" ) {
            errorMsg[serial].innerHTML = message;
            id.style.border = "1px solid red";
            
            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
            console.log("An email is required")
            
            return 'An email is required.'
          } else if(regex.test(id.value) === false) {
            errorMsg[serial].innerHTML = message;
            id.style.border = "1px solid red";
            
            console.log(regex.test(id.value))
    
            failureIcon[serial].style.opacity = "1";
            successIcon[serial].style.opacity = "0";
          }
          
          else {
            errorMsg[serial].innerHTML = "";
            id.style.border = "1px solid green";
            
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
          }
    }
    
    /* Submit event listener: */
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log("Submitted a form")
        console.log("An email address from submitted form: ", form['email'].value)
        console.log("The radio selection: ", form['selector'].value)
        console.log("The dropdown value: ", document.querySelector('.bookADemo_form_textBox').value );
        
        validationHandling(email, 0, "Email cannot be blank");
        console.log("Form data: ",formData )

        if(form['selector'].value === 'Document Storage' 
            || form['selector'].value === 'Price' 
            || form['selector'].value === 'Full Text Search'
            || document.querySelector('.bookADemo_form_textBox').value === '1-10') {

            console.log("This is unqualified")
            window.location.href = "./unqualifiedPg.html";

        } else if(form['email'].value && form['selector'].value && document.querySelector('.bookADemo_form_textBox').value) {
            window.location.href = "./qualifiedPg.html"
        }
    });