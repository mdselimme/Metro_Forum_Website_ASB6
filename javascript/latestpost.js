


const findAllLatestPost = async () =>{
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await response.json();
    displayAllLatestPost(data);
};


const displayAllLatestPost = (posts) =>{
    const postMainDiv = document.getElementById("latest-post-main");
    posts.forEach(post => {
        const postdiv = document.createElement("div");
        postdiv.classList.add("card", "bg-base-100", "m-5", "shadow-xl");
        postdiv.innerHTML = `
         <figure class="px-10 pt-10">
                              <img
                                src="${post.cover_image}"
                                alt="Shoes"
                                class="rounded-xl" />
                            </figure>

                            <div class="card-body items-start text-start">
                              <span class="text-base text-[#12132D99] font-medium"><i class="fa-regular fa-calendar"></i> ${post.author?.posted_date ? post.author?.posted_date : "No Date Found"}</span>
                              <h2 class="text-[#12132D] font-bold text-lg my-2 leading-7">${post.title}</h2>
                              <p class="text-base font-medium leading-6 text-[rgba(18,19,45,0.6)]">${post.description}</p>

                              <div class="my-2 flex items-center">

                                <div class="avatar mr-5">
                                <div class="w-20 rounded-full">
                                    <img src="${post.profile_image}" />
                                </div>
                                </div>

                                <div>
                                    <h3 class="text-base text-[#12132D] font-bold">${post.author.name}</h3>
                                    <span id="author_designation" class="text-[14px] font-normal text-[rgba(18,19,45,0.6)]">${post.author.designation ? post.author?.designation : "No Title Found"}</span>
                                </div>

                              </div>

                            </div>
        `;
        postMainDiv.appendChild(postdiv)
    });
};


findAllLatestPost();