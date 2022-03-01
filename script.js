console.log("Hello")

document.querySelectorAll("nav a").forEach(a => {
    a.onclick = () => {
        // console.log(a)
        document.querySelector("#toggler").checked = false;

    }

})
const projekty = [
    {
        title: "Projekt 1",
        desc: "Opis projektu 1",
        src: "img/tulips.jpg",
    },
    {   
        title: "Projekt 2",
        desc: "Opis projektu 2",
        src: "img/penguins.jpg",
    },
    {
        title: "Projekt 3",
        desc: "Opis projektu 3",
        src: "img/lighthouse.jpg",
    }

]
let currentProject = 0;
const displayProject = () => {
    const title = document.querySelector("#projekty h3");
    title.innerText = projekty[currentProject].title;
    const desc = document.querySelector("#projekty p");
    desc.innerText = projekty[currentProject].desc;
    const img = document.querySelector("#projekty img");
    img.src = projekty[currentProject].src;

}
displayProject();

document.querySelector(".right").onclick = () => {
    currentProject++;
    if(currentProject >= projekty.length) {
        currentProject = 0;
    }
    displayProject();
}

document.querySelector(".left").onclick = () => {
    currentProject--;
    if(currentProject < 0) {
        currentProject = projekty.length-1;
    }
    displayProject();

}