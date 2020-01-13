window.onload = () => {
  const btnHome = document.getElementById("btnHome");
  const btnAbout = document.getElementById("btnAbout");
  const btnSkills = document.getElementById("btnSkills");
  const btnProjects = document.getElementById("btnProjects");
  const btnContactMe = document.getElementById("btnContactMe");

  const navUnderline = document.getElementById("underline");

  btnHome.onclick = function() {
    navUnderline.style.left = "1.7em";
    applyActiveStyle(btnHome);
  }

  btnAbout.onclick = function() {
    navUnderline.style.left = "5.995em";
    applyActiveStyle(btnAbout);
  }

  btnSkills.onclick = function() {
    navUnderline.style.left = "10.595em";
    applyActiveStyle(btnSkills);
  }

  btnProjects.onclick = function() {
    navUnderline.style.left = "15.65em";
    applyActiveStyle(btnProjects);
  }

  iconLinkedin.onclick = function() {
    window.open("https://www.linkedin.com/in/michael-chambers-31500219a/");
  }

  iconGithub.onclick = function() {
    window.open("https://github.com/mickadamouse1");
  }

  btnSkillsDropDownArrow.onclick = function() {
    groupSkillsLearning.classList.toggle("skillsExpanded");
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
