/* Create Two input fields for name and city and take their values and
print it together on the page when the user clicks on add button. */
function button_click()
{
    let name = document.querySelector('#name').value;
    let city = document.querySelector('#city').value;
    document.querySelector('#display').innerHTML=`<h2> ${name} <br> ${city} </h2>`;
}
