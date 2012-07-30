if (document.getElementById("tester") != undefined) 
{ 
document.write('<p class="yes">Thanks for allowing us to display ads. You\'re awesome. <a href="http://enigmaboard.com/donate">Want to donate?</a></p>'); 
}
else 
{ 
document.write('<p class="no">We\'ve detected that you\'re blocking our ads. We need money to keep us online and almost all of that comes from displaying small, out-of-the-way ads. <strong><a href="http://enigmaboard.com/donate">Want to donate?</a></strong><!-- end .content --></p>'); 
}