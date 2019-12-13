function aboutClick(){
    //hiding  home section
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.remove("hidden");
    document.querySelector("#contactSection").classList.add("hidden");
}

function homeClick(){
    //hiding  home section
    document.querySelector("#homeSection").classList.remove("hidden");
    document.querySelector("#contactSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");
}

function contactClick(){
    //hiding  home section
    document.querySelector("#homeSection").classList.add("hidden");
    document.querySelector("#aboutSection").classList.add("hidden");
    document.querySelector("#contactSection").classList.remove("hidden");
}
