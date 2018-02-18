/**
 * Adds view image button to Google’s image search. 
 * Do not expect any updates, follow ups or any fixes. 
 * Use it at your own discretion. 
 * 
 */


$(document).ready(function () {

	// Most likely not an image search
	if (window.location.href.indexOf("tbm=isch") == -1) return;

	console.log("View Image is back!");

	// Get the initial document height
	var docHeight = $(document).height();

	// For simplicity, doc's height increases => (likely) more images have been loaded
	// => reattach the click event again. Might not be very effecient especially with higher number of images, of course. 
	$(document).on('scroll', function () {

		if (docHeight < $(document).height()) {
			$("div.rg_bx.rg_di.rg_el.ivg-i").off();
			$("div.rg_bx.rg_di.rg_el.ivg-i").on("click", viewImageHandler);
			docHeight = $(document).height();
		}
	});

	// When ready .. 
	$("div.rg_bx.rg_di.rg_el.ivg-i").on("click", viewImageHandler);

	// Adds my beloved button back! And handle the related stuff! 
	function viewImageHandler(e) {

		// Usually in 3s
		tabels = $("#_YTc").find('table._FKw.irc_but_r');

		if (tabels.length > 0) {

			$(tabels).each((index, elm) => {

				var tds = $(elm).find("td");

				if (tds.length >= 2) {
					viewImageElm = $(elm).find("#viewimage");

					if (viewImageElm.length == 0) {

						tr = $(elm).find('tr');

						if (tr.length != 0) {
							// YES!
							$(tr).append('<td id="viewimage"><a class="i17628" data-noload="" role="button" tabindex="0" ><span id="openviewimage" class="_WKw">View Image</span></a></td>');
						}
					}

					// The viewImage span we've added
					btnViewImage = $(elm).find("#viewimage").find("#openviewimage");

					$(btnViewImage).each((i, v) => {

						// No more than one event
						$(v).off();

						$(v).on("click", (ev) => {

							// Find the image in the current view
							imagetoview = $(v).closest("div.irc_b.i8152.irc_mmc").prev().prev();

							imgUrl = $(imagetoview).find("img.irc_mi");

							window.open($(imgUrl).attr('src'), '_blank');

						});
					});
				}
			});
		}
	}
});
