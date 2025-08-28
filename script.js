function getElement(id){
    return document.getElementById(id);
}

const histryContainer = getElement("histry-container");

function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

document.querySelectorAll(".call-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const title = getElement(`title-${index + 1}`).innerText;
        const number = getElement(`number-${index + 1}`).innerText;


        const newHistry = document.createElement("div");
        newHistry.className = "histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4";
        newHistry.innerHTML = `
        
        <h1 class="text-1xl font-semibold">${title}</h1>
        <h1 class="text-1xl text-gray-400">${number}</h1>
         <h2 class="text-xs text-gray-500 mt-1">Call Time: ${getCurrentTime()}</h2>

        `;

        histryContainer.appendChild(newHistry);
    
    });
});

// clear history functionality 
const clearButton = getElement("clear-btn");
clearButton.addEventListener("click", () =>{
    histryContainer.innerHTML = "";
    
});



