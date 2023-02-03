const myLinks = [
    ["Inicio", "/"],
    ["Teste", "/teste.html"],
    ["Currículo", "/curriculo.html"],
    ["GitHub", "https://github.com/marcosantonioalves448"],
    ]

class MyHeader extends HTMLElement{
    connectedCallback() {
        //createElement = cria uma elemento HTML baseado numa TAG especificada
        const header = document.createElement("header");
        const titleDiv = document.createElement("div");
        const pageTitle = document.createElement("h1");

        pageTitle.textContent = "Meu Site";
        titleDiv.appendChild(pageTitle);   
        header.appendChild(titleDiv);
        header.appendChild(navBar(myLinks));
        this.appendChild(header);

    }

}

function navBar(webpageList) {
    //Essa função pega uma lista de sites, e gera uma barra de navegação
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    //Esse loop cria um item de lista com um link para cada um dos elementos do webpageList
    for(let i = 0; i < webpageList.length; i++){
        let li = document.createElement("li");
        let a = document.createElement("a");
        li.setAttribute("class", "mynavbar");
        a.setAttribute("href", webpageList[i][1]);
        a.textContent = webpageList[i][0];
        li.appendChild(a);
        ul.appendChild(li);
    }

    //adiciono minha lista não ordenada ao meu nav, e retorno meu nav
    nav.appendChild(ul);  
    return nav;    
}

function addCss(){
    let myCss = document.createElement("link");
    myCss.setAttribute("rel", "stylesheet");
    myCss.setAttribute("href", "/estilo.css");
    document.head.appendChild(myCss);
}

addCss();
customElements.define("my-header", MyHeader);