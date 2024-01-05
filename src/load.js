function createHeader(){
    const divContent = document.querySelector("#content")
    const wrapper = document.createElement("div")
    wrapper.classList = "wrapper"
    const header = document.createElement("header")
    const h1 = document.createElement("h1")
    h1.textContent = "Galaxy Grill"
    header.appendChild(h1)
    const nav = document.createElement("nav")
    const home = document.createElement("a")
    home.textContent = "Home"
    home.id = "home"
    const menu = document.createElement("a")
    menu.textContent = "Menu"
    menu.id = "menu"
    const contact = document.createElement("a")
    contact.textContent = "Contact"
    contact.id = "contact"
    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(contact)
    wrapper.appendChild(header)
    wrapper.appendChild(nav)
    divContent.appendChild(wrapper)
}


function createIndexMain(){
    const divContent = document.querySelector("#content")
    const main = document.createElement("main")
    main.classList = "index-main"
    const h2 = document.createElement("h2")
    h2.textContent = "Embark on a Culinary Quest Across the Cosmos!"
    const img = document.createElement("img")
    img.src = "../src/images/chef.png"
    const p = document.createElement("p")
    p.textContent = "Welcome to Galaxy Grill – where starry flavors and galactic grills collide! Chef Zorg's zoomed in from Jupiter's diner scene to cook up some cosmic chow. Bite into a Meteor Meatloaf, sip on a starry Nebula Nectar, and top it off with a Supernova Sundae. Gear up, foodonauts – it's a flavor blast to the taste-budsphere!"
    p.classList = "index-p"
    main.appendChild(h2)
    main.appendChild(img)
    main.appendChild(p)
    divContent.appendChild(main)
}


export {createHeader, createIndexMain}
