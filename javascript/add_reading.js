
const readPostList = [];
const addReading = async (id) =>{
   
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const allData = data.posts;
    const findSingleData = allData.filter((myData)=>{
        return myData.id === id;
    });
 
  
        readPostList.push(findSingleData[0]);

    displayReadPost(readPostList);
};



const displayReadPost = (arr) =>{
    const readPostBox = document.getElementById("readpost");
    document.getElementById("read_count").innerText = arr.length;
    readPostBox.textContent = "";
    arr.forEach((element)=>{
       
        const div = document.createElement("div");
        div.classList.add("flex", "justify-between", "items-center", "bg-white", "p-3", "rounded-2xl", "mb-7") ;
        div.innerHTML = `
             <p class="text-[#12132D] text-base font-semibold">${element.title}</p>
                            <div>
                                <span class="mr-5 text-base font-normal text-[#12132D99] flex items-center"><i class="fa-solid fa-eye mr-2"></i> ${element.view_count}</span>
                            </div>
        `;
        readPostBox.appendChild(div);
    });
};