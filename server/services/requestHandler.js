import FetchService from './FetchService';

const fetchService = new FetchService();

async function submitForm(e, form) {
    console.log("enter");
    e.preventDefault();
    const btnSubmit = document.getElementById('submit');
    btnSubmit.disabled = true;
    setTimeout(() => btnSubmit.disabled = false, 2000);
    const jsonFormData = buildJsonFormData(form);
    const headers = buildHeaders();
    const response = await fetchService.performPostHttpRequest(`http://localhost:3000/api/request`, headers, jsonFormData); // Uses JSON Placeholder
    console.log(response);
}

function buildHeaders(authorization = null) {
    const headers = {
        "Content-Type": "application/json",
    };
    return headers;
}

function buildJsonFormData(form) {
    const jsonFormData = { };
    for(const pair of new FormData(form)) {
        jsonFormData[pair[0]] = pair[1];
    }
    return jsonFormData;
}


$(document).ready(function(){
$(".btnRegister1").click(function(){
    submitForm(e,this);
});
});