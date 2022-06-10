function testimonialCarousel() {
  $.ajax({
    type: "GET",
    url: "https://smileschool-api.hbtn.info/quotes",
    dataType: "JSON",
    error: function () {
      console.log("JSON failed to query data");
    },
    success: function (res) {
      for (let id in res) {
        $("#carouselInnerQuotes").append(`<div class="carousel-item active">
								<div class="d-flex align-items-center pt-5">
											<img src="${res[id].pic_url}" alt="Profile 1" class="rounded-circle">
											<div class="text-white testimonial-text">
												<h4>${res[id].text}</h4>
												<p class="font-weight-bold">${res[id].name}</p>
												<p class="font-italic">${res[id].title}</p>
											</div>
										  </div>
										</div>`);

        if (id === 0) $(".carousel-inner").first().addClass("active");
      }
    },
  });
}

function tutorialsCarousel() {
  $.ajax({
    type: "GET",
    url: "https://smileschool-api.hbtn.info/popular-tutorials",
    dataType: "JSON",
    error: function () {
      console.log("JSON failed to query data");
    },
    success: function (res) {
      for (let id in res) {
        $("#carouselInner")
          .append(`<div class="carousel-inner w-100" role="listbox">
							<div class="col-md-6 col-lg-3">
								<div class="carousel-item active">
									<div class="card card-body">
										<div class="video">
											<img class="img-fluid vid-gb-img" src="${res[id].thumb_url}" alt="Thumbnail ${id}">
											<img src="images/play.png" alt="" class="play-btn">
										</div>
										<h5 class="card-title font-weight-bold mt-3">Diagonal Smile</h5>
										<p class="card-text">${res[id].title}</p>
										<div class="tutorial-author d-flex align-items-center">
											<img src="${res[id].author_pic_url}" alt="" class="rounded-circle circle-thumbnail">
											<span class="ml-2 font-weight-bold">${res[id].author}</span>
										</div>
										<div class="d-flex justify-content-space-between mr-auto">
											<img src="./images/star_on.png" class="mt-2" alt="Star Rating">
											<img src="./images/star_on.png" class="mt-2" alt="Star Rating">
											<img src="./images/star_on.png" class="mt-2" alt="Star Rating">
											<img src="./images/star_on.png" class="mt-2" alt="Star Rating">
											<img src="./images/star_off.png" class="mt-2" alt="Star Rating">
										</div>
									</div>
								</div>
							</div>`);
							
        if (id === 0) $(".carousel-inner").first().addClass("active");
      }
    },
  });
}

document.addEventListener("DOMContentLoaded", function () {
  testimonialCarousel();
  tutorialsCarousel();
});
