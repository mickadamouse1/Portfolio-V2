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

  window.addEventListener('resize', () => {
    navUnderline.style.transition = "none";
    applyActiveStyle(activeButton);
  });

  const arrNavItems = [btnHome, btnAbout, btnSkills, btnProjects];

  for (let i = 0; i < arrNavItems.length; i++) {
    arrNavItems[i].addEventListener('click', () => {
      navUnderline.style.transition = ".5s ease";
      activeButton = arrNavItems[i];
      applyActiveStyle(arrNavItems[i]);
    });
  }

  navHamburger.addEventListener('click', () => {
    if (navItems.classList.contains("navExpanded")) {
      navItems.classList.remove("navExpanded");
    } else {
      navItems.classList.add("navExpanded");
    }
  });

  applyActiveStyle = element => {
    const arr = [btnHome, btnAbout, btnSkills, btnProjects];
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove("active");
    }

    element.classList.toggle("active");

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

  iconLinkedin.addEventListener('click', () => window.open("https://www.linkedin.com/in/michael-chambers-31500219a/"));

  iconGithub.addEventListener('click', () => window.open("https://github.com/mickadamouse1"));

  // /////////////////////////////////////////////////// //

  // SKILLS 

  const btnSkillsDropDownArrow = document.getElementById('btnSkillsDropDownArrow');
  var yyu = document.getElementsByClassName('learningSkillsCard');

  btnSkillsDropDownArrow.addEventListener('click', () => {
    groupSkillsLearning.classList.toggle("skillsExpanded");
    if (yyu[0].classList.contains('fadeOut')) {
      setTimeout(function (){
        for (let i = 0; i < yyu.length; i++) {
          yyu[i].classList.toggle('fadeOut');
          yyu[i].classList.toggle('fadeIn');
        }
      }, 100);
    } else {
      for (let i = 0; i < yyu.length; i++) {
        yyu[i].classList.toggle('fadeOut');
        yyu[i].classList.toggle('fadeIn');
      }
    }
    
  });
}