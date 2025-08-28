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






// // click button to add call history functionality is start
// function getElement(id) {
//   const element = document.getElementById(id);
//   return element;
// }

// document.getElementById("btn-1").addEventListener("click", function () {
//   const title = getElement("title-1").innerText;
//   const number = getElement("number-1").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");

//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// document.getElementById("btn-2").addEventListener("click", function () {
//   const title = getElement("title-2").innerText;
//   const number = getElement("number-2").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");





//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// document.getElementById("btn-3").addEventListener("click", function () {
//   const title = getElement("title-3").innerText;
//   const number = getElement("number-3").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");

//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// //  4 start
// document.getElementById("btn-4").addEventListener("click", function () {
//   const title = getElement("title-4").innerText;
//   const number = getElement("number-4").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");

//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// // 4 end
// //  5 start
// document.getElementById("btn-5").addEventListener("click", function () {
//   const title = getElement("title-5").innerText;
//   const number = getElement("number-5").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");

//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// // 5 end
// //  6 start
// document.getElementById("btn-6").addEventListener("click", function () {
//   const title = getElement("title-6").innerText;
//   const number = getElement("number-6").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");

//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// // 6 end
// //  7 start
// document.getElementById("btn-7").addEventListener("click", function () {
//   const title = getElement("title-7").innerText;
//   const number = getElement("number-7").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");

//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// // 7 end
// //  8 start
// document.getElementById("btn-8").addEventListener("click", function () {
//   const title = getElement("title-8").innerText;
//   const number = getElement("number-8").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");

//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// // 8 end
// //  9 start
// document.getElementById("btn-9").addEventListener("click", function () {
//   const title = getElement("title-9").innerText;
//   const number = getElement("number-9").innerText;

//   const histryContainer = getElement("histry-container");
//   const newHistry = document.createElement("div");

//   newHistry.innerHTML = `

// <div class="histry mt-5 bg-gray-100 mx-1 rounded-md py-2 px-4">
//           <h1 class="text-2xl font-semibold">${title}</h1>
//           <h1 class="text-2xl text-gray-400">${number}</h1>
//          </div>


// `;
//   histryContainer.appendChild(newHistry);
// });
// // 9 end

// // click button to add call history functionality is done







