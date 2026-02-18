// Select element
const container = document.getElementById("container");
const btn = document.getElementById("btnBlock");
// Add event
btn.addEventListener("click", displayBlock);



function displayBlock(){
    // Create block element with title and paragraphe
    const block = document.createElement("div");
    block.style.backgroundColor = "red";
    block.id = "block";

    // Title
    const title = document.createElement("h3");
    title.textContent = "This is title";

    // Title button delete 
    const btnTitleDelete = document.createElement("button");
    btnTitleDelete.textContent = "Delete title";
    btnTitleDelete.style.backgroundColor = "blue";
    
    // Title button change background color
    const btnTitleChangeBackgroundColor = document.createElement("button");
    btnTitleChangeBackgroundColor.textContent = "Change title background color";
   

    // Paragraphe
    const paragraphe = document.createElement("p");
    paragraphe.textContent = "This is a paragraphe";

    // Paragraphe button delete 
    const btnParagrapheDelete = document.createElement("button");
    btnParagrapheDelete.textContent = "Delete paragraphe";
    btnParagrapheDelete.style.backgroundColor = "green";
    
    
    // Paragraphe button change background color
    btnParagrapheChangeBackgroundColor = document.createElement("button");
    btnParagrapheChangeBackgroundColor.textContent = "Change paragraphe background color";

    // Include paragraphe and title in block
    block.appendChild(title);
    block.appendChild(btnTitleDelete);
    block.appendChild(btnTitleChangeBackgroundColor);
    block.appendChild(paragraphe);
    block.appendChild(btnParagrapheChangeBackgroundColor);    
    block.appendChild(btnParagrapheDelete);
    container.appendChild(block);

   
    btnTitleDelete.addEventListener("click", function() {
        title.style.display = "none";
    });
    btnParagrapheDelete.addEventListener("click",function () {
        paragraphe.style.display = "none";
    });

    btnTitleChangeBackgroundColor.addEventListener("click", function(){
        title.style.backgroundColor = "yellow";
    })

    btnParagrapheChangeBackgroundColor.addEventListener("click", function (){
        paragraphe.style.backgroundColor = "orange";
    })

    
     
}
 



