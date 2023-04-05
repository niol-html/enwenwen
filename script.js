function removeLoading() {
    setTimeout(function() {
      $("#landingpage").removeClass("is-loading");
    }, 100);
  }
  
  $(document).ready(function() {
    removeLoading();
  });