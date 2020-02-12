window.onload = () => {
  const btnAbout = document.getElementById('btnAbout');
  const btnSkills = document.getElementById('btnSkills');
  const btnProjects = document.getElementById('btnProjects');
  const btnContact = document.getElementById('btnContact');

  const navUnderline = document.getElementById('underline');

  const classSkillsExpanded = document.getElementsByClassName('skillsExpanded');
  const learningSkillsCard = document.getElementsByClassName('learningSkillsCard');
  const groupSkillsLearning = document.getElementById('groupSkillsLearning');

  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //

  // NAVIGATION BAR 

  navUnderline.style.display = 'block';

  let activeButton = btnAbout;
  
  /////////////////////////////////////////////////////////////////////////////////////////

  window.addEventListener('resize', () => {
    navUnderline.style.transition = 'none';
    if (activeButton !== btnContact) applyActiveStyle(activeButton);

    // resets the colour of the "Contact Me" button when the window is resized
    if (window.innerWidth <= 786 && btnContact.style.background !== 'none') btnContact.style.background = 'none';
    if (window.innerWidth > 786 && btnContact.style.backgroundColor !== '#20c997') btnContact.style.background = '#20c997';

    // Removes the transition from expanding skills to prevent smooth scaling when window is resized.
    skillsDropdownTransition('none', 'none');

    // Closes nav dropdown when page expands to certain width
    if (window.innerWidth > 786 && navItems.classList.contains('navExpanded')) navItems.classList.remove('navExpanded');
  });

  /////////////////////////////////////////////////////////////////////////////////////////

  const arrNavItems = [btnAbout, btnSkills, btnProjects, btnContact];

  for (let i = 0; i < arrNavItems.length; i++) {
    // This variable is used to create the name of the section each nav item will scroll to.
    let x = arrNavItems[i].id;

    arrNavItems[i].addEventListener('click', () => {
      navUnderline.style.transition = '.5s ease';
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


  /////////////////////////////////////////////////////////////////////////////////////////

  navHamburger.addEventListener('click', () => {
    if (navItems.classList.contains('navExpanded')) {
      navItems.classList.remove('navExpanded');
    } else {
      navItems.classList.add('navExpanded');
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////

  // This applies the active styling to each navigation link when they are clicked.

  applyActiveStyle = element => {
    const arr = [btnAbout, btnSkills, btnProjects];
    for (var i = 0; i < arr.length; i++) {
      arr[i].classList.remove('active');
    }
    element.classList.toggle('active');

    if (element !== btnContact && navUnderline.classList.contains('fadeOut')) navUnderline.classList.remove('fadeOut');

    if (element === btnContact) {
      navUnderline.style.transition = '.1s ease';
      navUnderline.classList.add('fadeOut');

      // This only applies when the nav isnt a dropdown
      if (window.innerWidth > 786) {
        btnContact.style.transition = '.25s ease';
        btnContact.style.background = '#212529';

        // after .25 seconds, reset the color
        setTimeout(() => {
          btnContact.style.background = '#20c997';

          // another timeout stops the animation from ending too early
          setTimeout(() => {
            btnContact.style.transition = 'none';
          }, 250)
        }, 250);
      }
      
    }

    if (element !== btnContact) centerAlignElements(navUnderline, element);
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////

  // This is used to position the nav links underline.

  centerAlignElements = (fromElement, toElement) => {
    const fromElementPos = fromElement.getBoundingClientRect();
    const toElementPos = toElement.getBoundingClientRect();
    const centerPos = (toElementPos.width - fromElementPos.width) / 2;
    fromElement.style.left = toElementPos.x + centerPos;
    fromElement.style.top = toElementPos.y + 23;
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  // Sets up the navigation bar when the page loads.

  centerAlignElements(navUnderline, btnAbout);

  applyActiveStyle(btnAbout);

  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //

  // SKILLS 

  /////////////////////////////////////////////////////////////////////////////////////////

  const btnSkillsDropDownArrow = document.getElementById('btnSkillsDropDownArrow');
  var classSkillCard = document.getElementsByClassName('learningSkillsCard');

  btnSkillsDropDownArrow.addEventListener('click', () => {
    groupSkillsLearning.style.transition = '.5s ease';
    groupSkillsLearning.classList.toggle('skillsExpanded');
    if (classSkillCard[0].classList.contains('fadeOut')) {
      setTimeout(() => {
        for (let i = 0; i < classSkillCard.length; i++) {
          classSkillCard[i].classList.toggle('fadeOut');
          classSkillCard[i].classList.toggle('fadeIn');
        }
        skillsDropdownTransition('.5s ease', '.75s ease');
      }, 100);
    } else {
      for (let i = 0; i < classSkillCard.length; i++) {
        classSkillCard[i].classList.toggle('fadeOut');
        classSkillCard[i].classList.toggle('fadeIn');
      }
      skillsDropdownTransition('.5s ease', '.25s ease');
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////

  const skillsDropdownTransition = (x, y) => {
    if (groupSkillsLearning.classList.contains('skillsExpanding')) classSkillsExpanded[0].style.transition = x;
    groupSkillsLearning.style.transition = x;

    for (let i = 0; i < learningSkillsCard.length; i++) {
      learningSkillsCard[i].style.transition = y;
    }
  }


  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //

  // CONTACT ME 

  const btnCopyEmail = document.getElementById('btnCopyEmail');

  /////////////////////////////////////////////////////////////////////////////////////////

  btnCopyEmail.addEventListener('click', (event) => {
    var txtEmail = document.getElementById('txtEmail');
    txtEmail.focus();
    txtEmail.select();
    document.execCommand('copy');

    popup.style.opacity = 1;
    setTimeout(() => {
      popup.style.opacity = 0;
    }, 1500);
  });

  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //

  // BUG FIXES

  // Scrolls to top when page loads

  setTimeout(() => {
    window.scrollTo(0, 0);
  },0);

}