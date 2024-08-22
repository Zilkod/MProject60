$("document").ready(function() {
  $gif = $("img").first()

  $("#gif-trigger").on("click", function() {
    src = $gif.attr("src")

    $gif.attr("src", src)
  })
})
