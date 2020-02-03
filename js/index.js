window.onload = () => {
  const btnAbout = document.getElementById("btnAbout");
  const btnSkills = document.getElementById("btnSkills");
  const btnProjects = document.getElementById("btnProjects");
  const btnContact = document.getElementById("btnContact");

  const navUnderline = document.getElementById("underline");

  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //

  // NAVIGATION BAR 

  navUnderline.style.display = "block";

  let activeButton = btnAbout;

  window.addEventListener('resize', () => {
    navUnderline.style.transition = "none";
    if (activeButton !== btnContact) applyActiveStyle(activeButton);

    if (window.innerWidth <= 786 && btnContact.style.background !== 'none') btnContact.style.background = 'none';
    if (window.innerWidth > 786 && btnContact.style.backgroundColor !== '#20c997') btnContact.style.background = '#20c997';
  });

  const arrNavItems = [btnAbout, btnSkills, btnProjects, btnContact];

  for (let i = 0; i < arrNavItems.length; i++) {
    // This variable is used to create the name of the section each nav item will scroll to.
    let x = arrNavItems[i].id;

    arrNavItems[i].addEventListener('click', () => {
      navUnderline.style.transition = ".5s ease";
      activeButton = arrNavItems[i];
      applyActiveStyle(arrNavItems[i]);

      // smooth scrolling location (x.slice removes the "btn" from the variable name)
      document.querySelector('#section' + x.slice(3)).scrollIntoView({behavior: 'smooth'});

      // If the dropdown is enabled, after scrolling, disable it
      if (window.innerWidth <= 786) {
        setTimeout(() => {
          navItems.classList.toggle('navExpanded');
        }, 250);
      }
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
    const arr = [btnAbout, btnSkills, btnProjects];
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove("active");
    }
    element.classList.toggle("active");

    if (element !== btnContact && navUnderline.classList.contains('fadeOut')) navUnderline.classList.remove('fadeOut');

    if (element === btnContact) {
      navUnderline.style.transition = ".1s ease";
      navUnderline.classList.add('fadeOut');

      // This only applies when the nav isnt a dropdown
      if (window.innerWidth > 786) {
        btnContact.style.transition = ".25s ease";
        btnContact.style.background = "#212529";
        // after .25 seconds, reset the color
        setTimeout(() => {
          btnContact.style.background = "#20c997";
          // another timeout stops the animation from ending too early
          setTimeout(() => {
            btnContact.style.transition = "none";
          }, 250)
        }, 250);
      }
      
    }

    if (element !== btnContact) centerAlignElements(navUnderline, element);
  }
  
  centerAlignElements = (fromElement, toElement) => {
    const fromElementPos = fromElement.getBoundingClientRect();
    const toElementPos = toElement.getBoundingClientRect();
    const centerPos = (toElementPos.width - fromElementPos.width) / 2;
    fromElement.style.left = toElementPos.x + centerPos;
    fromElement.style.top = toElementPos.y + 21;
  }

  centerAlignElements(navUnderline, btnAbout);

  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //

  // ABOUT ME 

  iconLinkedin.addEventListener('click', () => window.open("https://www.linkedin.com/in/michael-chambers-31500219a/"));

  iconGithub.addEventListener('click', () => window.open("https://github.com/mickadamouse1"));

  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
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

  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //

  // BUG FIXES

  setTimeout(() => {
    window.scrollTo(0, 0);
  },0)
}