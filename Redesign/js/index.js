window.onload = () => {
  const btnHome = document.getElementById("btnHome");
  const btnAbout = document.getElementById("btnAbout");
  const btnSkills = document.getElementById("btnSkills");
  const btnProjects = document.getElementById("btnProjects");
  const btnContactMe = document.getElementById("btnContactMe");

  const navUnderline = document.getElementById("underline");

  btnHome.onclick = function() {
    navUnderline.style.left = "1.2em";
    applyActiveStyle(btnHome);
  }

  btnAbout.onclick = function() {
    navUnderline.style.left = "6em";
    applyActiveStyle(btnAbout);
  }

  btnSkills.onclick = function() {
    navUnderline.style.left = "10.7em";
    applyActiveStyle(btnSkills);
  }

  btnProjects.onclick = function() {
    navUnderline.style.left = "15.7em";
    applyActiveStyle(btnProjects);
  }

  const applyActiveStyle = (element) => {
    const arr = [btnHome, btnAbout, btnSkills, btnProjects];
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove("active");
    }
    if (!element.classList.contains("active")) element.classList.toggle("active");
  }

  // 1.2 - 6 - 10.7 - 15.7

}