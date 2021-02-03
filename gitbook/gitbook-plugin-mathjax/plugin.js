require(["gitbook"], function(gitbook) {
  window.addEventListener('load', function (event) {
    MathJax.Hub.Config({
      tex2jax: {}
    });

    gitbook.events.bind("page.change", function() {
      MathJax.Hub.Typeset()
    });
  });
});
