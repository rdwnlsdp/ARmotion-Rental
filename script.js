// Simple interactions
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for nav links
  document.querySelectorAll('.nav a').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').substring(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth'});
    });
  });
});