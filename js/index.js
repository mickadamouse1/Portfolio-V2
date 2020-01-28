window.onload = () => {
  const btnHome = document.getElementById("btnHome");
  const btnAbout = document.getElementById("btnAbout");
  const btnSkills = document.getElementById("btnSkills");
  const btnProjects = document.getElementById("btnProjects");
  const btnContactMe = document.getElementById("btnContactMe");

  const navUnderline = document.getElementById("underline");

  // /////////////////////////////////////////////////// //

  // NAVIGATION BAR 

  navUnderline.style.display = "block";

  let activeButton = btnHome;

  window.addEventListener('resize', function() {
    navUnderline.style.transition = "none";
    applyActiveStyle(activeButton);
  });

  const arrNavItems = [btnHome, btnAbout, btnSkills, btnProjects];

  for (let i = 0; i < arrNavItems.length; i++) {
    arrNavItems[i].onclick = () => {
      navUnderline.style.transition = ".5s ease";
      activeButton = arrNavItems[i];
      applyActiveStyle(arrNavItems[i]);
    }
  }

  navHamburger.onclick = function() {
    if (navItems.classList.contains("navExpanded")) {
      navItems.classList.remove("navExpanded");
    } else {
      navItems.classList.add("navExpanded");
    }
  }

  const applyActiveStyle = element => {
    const arr = [btnHome, btnAbout, btnSkills, btnProjects];
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove("active");
    }
    if (!element.classList.contains("active")) element.classList.toggle("active");

    centerAlignElements(navUnderline, element);
  }
  
  centerAlignElements = (fromElement, toElement) => {
    const fromElementPos = fromElement.getBoundingClientRect();
    const toElementPos = toElement.getBoundingClientRect();
    const centerPos = (toElementPos.width - fromElementPos.width) / 2;
    fromElement.style.left = toElementPos.x + centerPos;
    fromElement.style.top = toElementPos.y + 21;
  }

  centerAlignElements(navUnderline, btnHome);

  // /////////////////////////////////////////////////// //

  // ABOUT ME 

  iconLinkedin.onclick = () => window.open("https://www.linkedin.com/in/michael-chambers-31500219a/");

  iconGithub.onclick = () => window.open("https://github.com/mickadamouse1");

  btnSkillsDropDownArrow.onclick = () => groupSkillsLearning.classList.toggle("skillsExpanded");
}
