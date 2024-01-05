// Create header
const divContent = document.querySelector("#content")

function createHeader(){
    const wrapper = document.createElement("div")
    wrapper.classList = "wrapper"
    const header = document.createElement("header")
    const h1 = document.createElement("h1")
    h1.textContent = "Galaxy Grill"
    header.appendChild(h1)
    const nav = document.createElement("nav")
    const home = document.createElement("a")
    home.textContent = "Home"
    const menu = document.createElement("a")
    menu.textContent = "Menu"
    const contact = document.createElement("a")
    contact.textContent = "Contact"
    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(contact)
    wrapper.appendChild(header)
    wrapper.appendChild(nav)
    divContent.appendChild(wrapper)
}
createHeader()


function createIndexMain(){
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


function createMenuMain() {
    const main = document.createElement("main");
    main.className = "menu-main";

    const titles = ["Galactic Grub", "Stellar Sips", "Dessert Constellations"];
    const items = [
        [
            { name: "Meteor Meatloaf", img: "../src/images/meteor-metloaf.png", desc: "A loaf of meat so good, it's out of this world! Served with a side of asteroid mashed potatoes." },
            { name: "Cosmic Chicken Nuggets", img: "../src/images/cosmic-chicken-nuggets.png", desc: "These nuggets have been seasoned with our secret space spice and come with a dipping sauce made from the milk of the Milky Way." },
            { name: "Big Bang Burger", img: "../src/images/big-bang-burger.png", desc: "A burger so big, it caused a flavor explosion. Topped with a galaxy of cheese and a ring of onion." }
        ],
        [
            { name: "Nebula Nectar", img: "../src/images/nebula-nectar.png", desc: "A cosmic concoction of fruit juices that looks like a swirling nebula in your glass." },
            { name: "Martian Margarita", img: "../src/images/martian-margarita.png", desc: "A classic margarita with a twist of red Martian dust for that out-of-this-world flavor." },
            { name: "Black Hole Smoothie", img: "../src/images/black-hole-smoothie.png", desc: "A dark, rich smoothie with a gravitational pull of flavors. It's impossible to escape its deliciousness." }
        ],
        [
            { name: "Supernova Sundae", img: "../src/images/supernova-sundae.png", desc: "An explosion of ice cream, whipped cream, and star-shaped sprinkles." },
            { name: "UFO (Unbelievably Fantastic Oreo) Shake", img: "../src/images/ufo.png", desc: "A milkshake with Oreos that's so mysteriously good, it must be from another galaxy." }
        ]
    ];

    titles.forEach((title, index) => {
        const h2 = document.createElement("h2");
        h2.textContent = title;
        main.appendChild(h2);

        items[index].forEach(item => {
            const div = document.createElement("div");

            const h3 = document.createElement("h3");
            h3.textContent = item.name;
            div.appendChild(h3);

            const img = document.createElement("img");
            img.src = item.img;
            img.alt = item.name;
            div.appendChild(img);

            const p = document.createElement("p");
            p.textContent = item.desc;
            div.appendChild(p);

            main.appendChild(div);
        });
    });

    divContent.appendChild(main);
}



function createContactMain(){
    const main = document.createElement("main")
    main.classList = "contact-main"
    const phone = document.createElement("p")
    phone.textContent = "📞 123456789"
    const address = document.createElement("p")
    address.textContent = "🏠 Hollywood Boulevard 42, Los Angeles, USA"
    const img = document.createElement("img")
    img.src = "../src/images/restaurant-location.png"
    
    main.appendChild(phone)
    main.appendChild(address)
    main.appendChild(img)
    divContent.appendChild(main)
}

createContactMain()
