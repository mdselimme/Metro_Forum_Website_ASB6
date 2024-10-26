
const loadingSpinner = (value) => {

    const box = document.getElementById("post-div-box");
    const div = document.createElement("div");
    div.classList.add("text-center", "mt-20");
    div.innerHTML = `<span class="loading loading-infinity text-secondary loading-lg"></span>`;
    if(value){  
        box.appendChild(div);
    }
};