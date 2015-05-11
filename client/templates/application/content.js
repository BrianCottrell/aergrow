/* Aergrow           */
/* by Brian Cottrell */
/* 05-10-2015        */

//Run when the page content is loaded
Template.pageContent.rendered = function(){
  //Set each image path for the image content page
  for(var i = 0; i < document.getElementsByClassName('image-element').length; i++){
    document.getElementsByClassName('image-element')[i].style.background = 'url("/images/aergrow-'+(i+1)+'.png")';
    document.getElementsByClassName('image-element')[i].style.backgroundSize = 'contain';
    document.getElementsByClassName('image-element')[i].style.backgroundRepeat = 'no-repeat';
  }
  //Select a page class for an content container and remove all content containers except for that seleced
  function setPage(page){
    for(var i = 0; i < document.getElementsByClassName('content-container').length; i++){
      document.getElementsByClassName('content-container')[i].style.display = 'none';
    }
    document.getElementsByClassName(page)[0].style.display = 'inline';
  }
  //Runs when the image page button is clicked
  function setImagePage(){
    setPage('image-page');
  }
  //Runs when the about page button is clicked
  function setAboutPage(){
    setPage('about-page');
  }
  //Runs when the contact page button is clicked
  function setContactPage(){
    setPage('contact-page');
  }
  //Add event handlers to each of the page select buttons
  document.getElementsByTagName('button')[0].addEventListener('click', setImagePage);
  document.getElementsByTagName('button')[1].addEventListener('click', setAboutPage);
  document.getElementsByTagName('button')[2].addEventListener('click', setContactPage);
  //Select the image page when the content is first loaded
  setPage('image-page');
};