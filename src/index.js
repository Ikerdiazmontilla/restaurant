import "./style.css"
import {createHeader, createIndexMain} from  './load.js'
import { createMenuMain } from './menu.js'
import { createContactMain } from './contact.js'



createHeader()
createIndexMain()

const divContent = document.querySelector("#content")


const home = document.querySelector("#home")
home.classList.add("active")
console.log(home.classList)
const menu = document.querySelector("#menu")
const contact = document.querySelector("#contact")

function changeContent(event){
    const currentMain = document.querySelector("main")
    const id = event.target.id
    divContent.removeChild(currentMain)
    if(id === "menu"){
        if(home.classList.contains("active") ){
            home.classList.remove("active")
            home.addEventListener("click", changeContent)
        }
        if(contact.classList.contains("active")){
            contact.classList.remove("active")
            contact.addEventListener("click", changeContent)
        }
        createMenuMain()
    }
    else if(id === "contact"){
        if(home.classList.contains("active")){
            home.classList.remove("active")
            home.addEventListener("click", changeContent)
        }
        if(menu.classList.contains("active")){
            menu.classList.remove("active")
            menu.addEventListener("click", changeContent)
        }
        createContactMain()
    }
    else if(id === "home"){
        if(contact.classList.contains("active")){
            contact.classList.remove("active")
            contact.addEventListener("click", changeContent)
        }
        if(menu.classList.contains("active")){
            menu.classList.remove("active")
            menu.addEventListener("click", changeContent)
        }
        createIndexMain()
    }
    event.target.classList.add("active")
    event.target.removeEventListener("click", changeContent)
}

menu.addEventListener("click",changeContent)
contact.addEventListener("click", changeContent)






