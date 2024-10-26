

const searchByCategory = async () => {
    loadingSpinner(true);
    const findInput = document.getElementById("input-data");
    const findInputValue = findInput.value;
    const searchData = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${findInputValue}`);
    const data = await searchData.json();
    if(data.posts.length !==0){
        postAllData(data.posts);
    }
    findInput.value = "";
    loadingSpinner(false);
};


const mainAllData = async () =>{
    loadingSpinner(true);
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const datab = await res.json();
    const allData = datab.posts;
    postAllData(allData);
    loadingSpinner(false);
};

mainAllData();