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

  let autoScrolling = true;

  const arrNavItems = [btnAbout, btnSkills, btnProjects, btnContact];

  let navTimeouts = [];
  
  /////////////////////////////////////////////////////////////////////////////////////////

  window.addEventListener('resize', () => {
    navUnderline.style.transition = 'none';
    btnContact.style.transition = 'none';
    applyActiveStyle(activeButton);

    // Removes the transition from expanding skills to prevent smooth scaling when window is resized.
    skillsDropdownTransition('none', 'none');

    // Closes nav dropdown when page expands to certain width
    if (window.innerWidth > 786 && navItems.classList.contains('navExpanded')) {
      navItems.classList.remove('navExpanded');
    } 

    if (window.innerWidth < 786) {
      btnContact.style.background = 'none';

    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////

  // This is the onclick event for each nav item

  for (let i = 0; i < arrNavItems.length; i++) {
    // This variable is used to create the name of the section each nav item will scroll to.
    let x = arrNavItems[i].id;

    arrNavItems[i].addEventListener('click', () => {
      navUnderline.style.transition = '.5s ease';
      applyActiveStyle(arrNavItems[i]);

      // Clears previous timeouts to prevent overlapping executions
      while (navTimeouts.length > 0) {
        clearTimeout(navTimeouts[0]);
        navTimeouts.length = navTimeouts.length - 1;
      }

      // This stop the auto styling when scrolling past sections for 2 seconds
      autoScrolling = true;
      const y = setTimeout(() => {
        autoScrolling = false;
      }, 1000);
      navTimeouts.push(y);
    
      // smooth scrolling location (x.slice removes the "btn" from the variable name)
      // The timeout is necessary for Firefox browser support
      setTimeout(() => {
        document.querySelector('#section' + x.slice(3)).scrollIntoView({behavior: 'smooth'});
      }, 25);

      // If the dropdown is enabled, after scrolling, disable it
      if (window.innerWidth <= 786) {
        setTimeout(() => {
          navItems.classList.toggle('navExpanded');
        }, 250);
      }
    });
  }


  /////////////////////////////////////////////////////////////////////////////////////////

  // This expands and collapses the navigation drop down menu on smaller devices

  navHamburger.addEventListener('click', () => {
    navItems.classList.toggle('navExpanded');
  });

  /////////////////////////////////////////////////////////////////////////////////////////

  // This applies the active styling to each navigation link when they are clicked.

  applyActiveStyle = element => {
    activeButton = element;

    for (var i = 0; i < arrNavItems.length - 1; i++) {
      arrNavItems[i].classList.remove('active');
    }
    element.classList.toggle('active');
   

    if (element != btnContact && navUnderline.classList.contains('fadeOut')) {
      navUnderline.classList.remove('fadeOut');
      navUnderline.style.transition = '.5s ease'
      
      if (window.innerWidth > 786) {
        btnContact.style.background = '#20c997';
      } else {
        btnContact.style.color = '#212529ad';
      }
    }
    
    if (element == btnContact) {
      navUnderline.style.transition = '.1s ease';
      navUnderline.classList.add('fadeOut');

      // This only applies when the nav isnt a dropdown
      if (window.innerWidth > 786) {
        btnContact.style.background = '#212529';
        btnContact.style.color = '#fff'
      } else {
        btnContact.style.color = '#15202b';
      }
    } else {
      if (window.innerWidth > 786) {
        btnContact.style.background = '#20c997';
        btnContact.style.color = '#fff';
      } else {
        btnContact.style.background = 'none';
        btnContact.style.color = '#212529ad';
      }
    }
   
    if (element != btnContact) centerAlignElements(navUnderline, element);
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////

  // This is used to position the nav links underline.

  const centerAlignElements = (fromElement, toElement) => {
    const fromElementPos = fromElement.getBoundingClientRect();
    const toElementPos = toElement.getBoundingClientRect();
    const centerPos = (toElementPos.width - fromElementPos.width) / 2;
    fromElement.style.left = toElementPos.x + centerPos;
    fromElement.style.top = toElementPos.y + 23;
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  // This applies the active style of the nav as the user scrolls past each section

  setInterval(() => {
    let x = window.pageYOffset + 88;

    let aboutY = sectionAbout.offsetTop;
    let skillsY = sectionSkills.offsetTop;
    let projectsY = sectionProjects.offsetTop;

    if (x < skillsY && !autoScrolling && activeButton != btnAbout) {
      applyActiveStyle(btnAbout);
    } else if (x >= skillsY && x < projectsY && !autoScrolling && activeButton != btnSkills) {
      applyActiveStyle(btnSkills);
    } else if (x >= projectsY && x < projectsY + (sectionProjects.offsetHeight / 1.15) &&!autoScrolling && activeButton != btnProjects) {
      applyActiveStyle(btnProjects);
    } else if (x >= projectsY + (sectionProjects.offsetHeight / 1.15) && !autoScrolling && activeButton != btnContact) {
      applyActiveStyle(btnContact);
    }
  }, 200);

  /////////////////////////////////////////////////////////////////////////////////////////

  // This is used to prevent the nav transition from getting stuck at .1s ease (after page resize)

  window.addEventListener('scroll', () => {
    if (navUnderline.transition != '.5s ease') navUnderline.style.transition = '.5s ease';
    if (btnContact.style.transition != '.5s ease') {
      btnContact.style.transition = '.5s ease';
    }
  });

  /////////////////////////////////////////////////////////////////////////////////////////

  // Sets up the navigation bar when the page loads.

  centerAlignElements(navUnderline, btnAbout);

  applyActiveStyle(btnAbout);

  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //
  // /////////////////////////////////////////////////// //

  // SKILLS 

  /////////////////////////////////////////////////////////////////////////////////////////

  const skillInfo = document.getElementsByClassName('skillInfo');
  const keySkills = document.getElementsByClassName('keySkills');
  const keySkillCards = document.getElementsByClassName('skillCard');

  for (let i = 0; i < keySkillCards.length; i++) {
    keySkillCards[i].addEventListener('click', () => {
      skillInfo[i].classList.toggle('fadeOut');
      keySkills[i].classList.toggle('fadeOut');
    });
  }

  /////////////////////////////////////////////////////////////////////////////////////////

  const btnSkillsDropDownArrow = document.getElementById('btnSkillsDropDownArrow');
  const classSkillCard = document.getElementsByClassName('learningSkillsCard');

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

  const setStartDelay = timer => {
    const x = setTimeout(() => {
      autoScrolling = false;
    }, timer);
  }

  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;

  if (isChrome) {
    setStartDelay(900);
  } else {
    setStartDelay(250);
  }
}