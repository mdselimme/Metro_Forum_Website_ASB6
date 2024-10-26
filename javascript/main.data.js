
// Find and Display all Post Data 
const postAllData = (data) =>{
    
    const postBox = document.getElementById("post-div-box");
    postBox.textContent = "";
    // Though loop on data and display in the frontend 
    data.forEach(element => {
        const divBox = document.createElement("div");
        divBox.classList.add("discussion-box", "rounded-3xl", "bg-[#F3F3F5]", "p-12", "flex", "justify-between", "items-start" , "mb-8")
        divBox.innerHTML = `

                        <div class="w-[10%] mr-5 relative">
                            <img class="mx-auto w-20 h-20 rounded-full" src="${element.image}" alt="">
                            <div id="${element.id}" class="w-4 h-4 absolute top-1 right-1 active-bg rounded-full"></div>
                        </div>
    
                        <div class="w-[90%]">
    
                            <div class="mb-2">
                                <span class="text-[14px] text-[#12132DCC] mr-3">#${element.category}</span>
                                <span class="text-[14px] text-[#12132DCC]">Author: ${element.author.name}</span>
                            </div>
    
                           <div class="border-b-2 border-b-[#12132D40] border-dashed mb-5">
                            <h3 class="text-[#12132D] text-xl font-bold mb-3">${element.title}</h3>
    
                            <p class="font-normal text-[#12132D99] text-base mb-4">${element.description}</p>
                           </div>
    
                            <div class="flex justify-between items-center">
                                <ul class="flex items-center">
                                    <li class="mr-5 text-base font-normal text-[#12132D99]"><i class="fa-regular fa-message mr-2"></i> ${element.comment_count}</li>
                                    <li class="mr-5 text-base font-normal text-[#12132D99]"><i class="fa-solid fa-eye mr-2"></i> ${element.view_count}</li>
                                    <li class="text-base font-normal text-[#12132D99]"><i class="fa-regular fa-clock mr-2"></i> ${element.posted_time} min</li>
                                </ul>
                                <img onclick="addReading(${element.id})" src="./images/email.png" alt="email">
                            </div>
                        </div> 
                   
        `;
        postBox.appendChild(divBox);

        // Show Active or inactive writter 
        if(element.isActive){
            document.getElementById(`${element.id}`).classList.remove("active-bg");
            document.getElementById(`${element.id}`).classList.add("bg-[#10B981]");
        }
    });
};

