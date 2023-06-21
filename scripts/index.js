document.addEventListener("DOMContentLoaded", function () {
  window.toggleNav = function (event) {
    // renamed function to reflect updated behavior
    event.stopPropagation();
    var sidebarIsOpen =
      document.getElementById("mySidepanel").style.width === "250px";

    if (sidebarIsOpen) {
      document.getElementById("mySidepanel").style.width = "0";
    } else {
      document.getElementById("mySidepanel").style.width = "250px";
    }
  };

  document.addEventListener("click", function (event) {
    var isClickInside = document
      .getElementById("mySidepanel")
      .contains(event.target);
    var sidebarIsOpen =
      document.getElementById("mySidepanel").style.width === "250px";
    if (!isClickInside && sidebarIsOpen) {
      window.toggleNav(event); // updated to use toggleNav function
      console.log("toggle sidebar");
    }
  });
});
