document
  .getElementById("container")
  .addEventListener("click", function (event) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.width = "12px";
    dot.style.height = "12px";
    dot.style.borderRadius = "50%";
    dot.style.backgroundColor = "blue";
    dot.style.position = "absolute";

   
    dot.style.left = event.clientX - 5 + "px"; 
    dot.style.top = event.clientY - 5 + "px";

   
    document.getElementById("container").appendChild(dot);
  });
