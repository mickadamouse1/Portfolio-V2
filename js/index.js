window.onload = function(){
  const btnHome = document.getElementById("btnHome");
  const btnAbout = document.getElementById("btnAbout");
  const btnProjects = document.getElementById("btnProjects");
  const btnContact = document.getElementById("btnContact");
  const btnLearnMore = document.getElementById("btnLearnMore");
  const nav = document.getElementById("nav");

  const scroll = (top) => {
    window.scrollTo({
      top: top,
      behavior: 'smooth'
    });
  }

  ///////////////////////////////////////////////

  const skillsSection = document.getElementById("skillsSection");

  // EVENT HANDLERS //

  btnLearnMore.onclick = function() {
    // scroll(getOffset(aboutSection)); Original Method
    scroll(aboutSection.offsetTop); // New Method
    if (nav.classList.contains("fadeOpacity")) {
      setTimeout(function(){
        nav.classList.toggle("fadeOpacity");
      }, 550);
    }
  }

  btnHome.onclick = function() {
    scroll(homeSection.offsetTop);
    setTimeout(function() {
      nav.classList.toggle("fadeOpacity");
    }, 550);
  }

  btnGoToSkills.onclick = function() {
    scroll(skillsSection.offsetTop);
    console.log(skillsSection.offsetTop)
  }

  // btnAbout.onclick = function() {
  //   scoll(get)
  // }

  //////////////////////////////////////////////



  // TOOLS //

  // Find location of element (Y-axis)
  const getOffset = (element) => {
    return element.getBoundingClientRect().top;
  }

  // when page loads, scroll to top.
  setTimeout(function() {
    scroll(0);
  });

  console.log(getOffset(aboutSection));
}
