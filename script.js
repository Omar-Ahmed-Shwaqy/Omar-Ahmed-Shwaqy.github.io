const root=document.documentElement;
const saved=localStorage.getItem("theme");
if(saved==="light") root.classList.add("light");
document.getElementById("theme").addEventListener("click",()=>{root.classList.toggle("light");localStorage.setItem("theme",root.classList.contains("light")?"light":"dark")});
document.querySelector(".menu").addEventListener("click",()=>{const n=document.querySelector("nav");n.style.display=n.style.display==="flex"?"none":"flex";n.style.position="absolute";n.style.top="76px";n.style.left="0";n.style.right="0";n.style.padding="20px";n.style.background="var(--surface)";n.style.flexDirection="column"});
