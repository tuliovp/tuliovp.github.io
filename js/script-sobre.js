console.log('entrou');

  $(document).ready(function () {
    $('a.servicos').click(function() {

        window.location.href = "index.html";
        $('a.servicos').click(function() {
        $('html, body').animate({
        scrollTop: $("div.main-div").offset().top
        }, 1000) 
        })
    })
  });

