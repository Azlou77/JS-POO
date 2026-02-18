// Select element
const btn = document.getElementById("btnBlock");

// Add event
btn.addEventListener("click", displayBlock);



function displayBlock(){
    // Create block element with title and paragraphe
    const block = document.getElementById("block");
    const title = document.createElement("h3");
    title.textContent = "This is title";
    const paragraphe = document.createElement("p");
    paragraphe.textContent = "This is a paragraphe";

    // Include paragraphe and title in block
    block.appendChild(title);
    block.appendChild(paragraphe);
    

}
