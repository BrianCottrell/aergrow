/* Aergrow           */
/* by Brian Cottrell */
/* 05-10-2015        */

Template.pageContent.rendered = function(){
  for(var i = 0; i < document.getElementsByClassName('image-element').length; i++){
    document.getElementsByClassName('image-element')[i].style.background = 'url("/images/aergrow-'+(i+1)+'.png")';
    document.getElementsByClassName('image-element')[i].style.backgroundSize = 'contain';
    document.getElementsByClassName('image-element')[i].style.backgroundRepeat = 'no-repeat';
  }

  function setPage(page){
    for(var i = 0; i < document.getElementsByClassName('content-container').length; i++){
      document.getElementsByClassName('content-container')[i].style.display = 'none';
    }
    document.getElementsByClassName(page)[0].style.display = 'inline';
  }

  function setImagePage(){
    setPage('image-page');
  }

  function setAboutPage(){
    setPage('about-page');
  }

  function setContactPage(){
    setPage('contact-page');
  }

  document.getElementsByTagName('button')[0].addEventListener('click', setImagePage);
  document.getElementsByTagName('button')[1].addEventListener('click', setAboutPage);
  document.getElementsByTagName('button')[2].addEventListener('click', setContactPage);

  setPage('image-page');
};