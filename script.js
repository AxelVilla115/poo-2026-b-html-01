const btn = document.getElementById("btn");
var clicked = false;
btn.addEventListener("click", () => {
    if (clicked) {
        return;
    }
    const contact = document.getElementById("contact");
    const mensaje = document.createElement("p");
    const textfield = document.getElementById("textfield");
    if (textfield.value == "") {
        mensaje.textContent = "Mensaje Generico";
    } else {
        mensaje.textContent = textfield.value;
    }
    mensaje.style.color = "#d3d3d3";
    mensaje.style.fontWeight = "bold";
    contact.appendChild(mensaje);
    btn.disabled = true;
    textfield.disabled = true;
    btn.style.backgroundColor = "#444c57";
    btn.textContent = "Mensaje enviado";
    btn.style.cursor = "default";
    clicked = true;
});