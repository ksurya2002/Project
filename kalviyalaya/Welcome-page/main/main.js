// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".content");
//     document.querySelectorAll(".navigation").forEach(function (link) {
//         link.addEventListener("click", function (data) {
//             data.preventDefault();
//             sections.forEach(function (section) {
//                 section.style.display = "none";
//             });
//             const targetId = this.getAttribute("href").substring(1);
//             document.getElementById(targetId).style.display = "block";
//         });
//     });
//     document.getElementById("home").style.display = "block";
// });

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".content");
    document.querySelectorAll(".navigation a").forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            sections.forEach(function (section) {
                section.style.display = "none";
            });
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.style.display = "block";
            }
        });
    });
    document.getElementById("home").style.display = "block";
});
