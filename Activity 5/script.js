function AddText() {

    const container = document.querySelector('.container');
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("value", "Something Text Here");

    container.appendChild(input);
}