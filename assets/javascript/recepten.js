document.getElementById("ontbijt_button").onclick = function() {
    if(
        parseInt(localStorage.getItem("sgl_weight")) >
        parseInt(localStorage.getItem("sgl_idealweight"))
    ){
        location.href = "./pages_recepten/page_ontbijt_afvallen.html";
        
    }
    else {
        location.href = "./pages_recepten/page_ontbijt_aankomen.html";
    }
}
