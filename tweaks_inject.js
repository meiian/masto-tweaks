document.body.addEventListener('click',function(e){
    if(e.target && (e.target.closest(".column-back-button") || e.target.closest(".column-header__back-button"))){
        e.stopPropagation();
            go_back(window.origin + "/web/getting-started")
     }
 });

async function go_back(url) {
    chrome.runtime.sendMessage({
        type: 'back'
    },
    function(response) {
        if(response.success === "yes" && window.location.toString() !== url) {
            go_back(url);
        }
    });
}
