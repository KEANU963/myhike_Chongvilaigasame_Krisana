//---------------------------------------------------
// This function loads the parts of your skeleton 
// (navbar, footer, and other things) into html doc. 
//---------------------------------------------------
// function loadSkeleton(){
//     $("nav#navbarPlaceholder").load('./text/nav.html'); // load text file in the server, not on the computer
//     $("nav#footerPlaceholder").load('./text/footer.html');
// }
// loadSkeleton();  //invoke the function


(() => {
    $('#navbarPlaceholder').load('./text/nav.html');
    $('#footerPlaceholder').load('./text/footer.html');
  })();
  