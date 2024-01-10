import map from "./images/restaurant-location.png"

function createContactMain(){
    const divContent = document.querySelector("#content")
    const main = document.createElement("main")
    main.classList = "contact-main"
    const phone = document.createElement("p")
    phone.textContent = "📞 123456789"
    const address = document.createElement("p")
    address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA"
    const img = document.createElement("img")
    img.src = map
    
    main.appendChild(phone)
    main.appendChild(address)
    main.appendChild(img)
    divContent.appendChild(main)
}

export {createContactMain}