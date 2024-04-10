window.onload = function() {
    document.addEventListener("DOMContentLoaded", function() {
        const categoriaDropdownBtn = document.getElementById("categoriaDropdownBtn");
        const categoriaDropdownContent = document.getElementById("categoriaDropdownContent");

        categoriaDropdownBtn.addEventListener("mouseover", function() {
            categoriaDropdownContent.style.display = "block";
        });

        categoriaDropdownBtn.addEventListener("mouseout", function() {
            categoriaDropdownContent.style.display = "none";
        });
    });
};