   $(".show-more").click(function () {
      var $this = $(this);
      $this.text($this.text() == "(Show Less)" ? "(Show More)" : "(Show Less)");
      $(".text").toggleClass("show-more-height");
    });