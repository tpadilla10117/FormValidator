
/* When user clicks, toggle content: */
function dropdownToggler() {
document.getElementById("bookADemo_dropdown_element").classList.toggle("active");
console.log("We clicked");
};

/* Logic to Map out Radio btns: */
const radioBtns = [ 
{
    id: 1,
    name: 'Real-time Analytics',
},
{
    id: 2,
    name: 'Query Response Time',
},
{
    id: 3,
    name: 'High Concurrency',
},
{
    id: 4,
    name: 'Fast Data Ingest',
},
{
    id: 5,
    name: 'Scalability',
},
{
    id: 6,
    name: 'Document Storage',
},
{
    id: 7,
    name: 'Full Text Search',
},
{
    id: 8,
    name: 'Price',
},
];


/*radioBtns.map( btns => {
return (
    <p key={btns.id}>{btns.name}</p>
)
}); */

/* Logic to map out Radio buttons: */

    let tester = document.getElementById('radiobtn-parentwrapper');

    const mappedBtns = radioBtns.map( (btns, index) => {
    return `
        <input class='radiobtn' type='radio' key=${index}>${btns.name}</input> 
    `
    });

    tester.innerHTML = mappedBtns;

        