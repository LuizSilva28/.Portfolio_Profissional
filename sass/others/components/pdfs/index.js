const pdfjsLib = require("pdfjs-dist");


let url = "/filesPdfs/css.pdf";

export function displayPDF(url) {
	pdfjsLib.GlobalWorkerOptions.workerSrc =
		"./pdfjs_worker.bundle.min.js";

	let pdfDoc = null,
		pageNum = 1,
		pageRendering = false,
		pageNumPending = null,
		scale = 0.6,
		canvas = document.getElementById("canvasPDF"),
		ctx = canvas.getContext("2d");

	function renderPage(num) {
		pageRendering = true;
		// Using promise to fetch the page
		pdfDoc.getPage(num).then(function (page) {
			var viewport = page.getViewport({ scale: scale });
			canvas.height = viewport.height;
			canvas.width = viewport.width;

			// Render PDF page into canvas context
			var renderContext = {
				canvasContext: ctx,
				viewport: viewport,
			};
			var renderTask = page.render(renderContext);

			// Wait for rendering to finish
			renderTask.promise.then(function () {
				pageRendering = false;
				if (pageNumPending !== null) {
					// New page rendering is pending
					renderPage(pageNumPending);
					pageNumPending = null;
				}
			});
		});

		// Update page counters
		document.getElementById("page_num").textContent = num;
	}

	function queueRenderPage(num) {
		if (pageRendering) {
			pageNumPending = num;
		} else {
			renderPage(num);
		}
	}

	function onPrevPage() {
		if (pageNum <= 1) {
			return;
		}
		pageNum--;
		const render = queueRenderPage(pageNum);
	}
	document.getElementById("prev").addEventListener("click", onPrevPage);

	function onNextPage() {
		if (pageNum >= pdfDoc.numPages) {
			return;
		}
		pageNum++;
		queueRenderPage(pageNum);
	}
	document.getElementById("next").addEventListener("click", onNextPage);

	pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
		pdfDoc = pdfDoc_;
		document.getElementById("page_count").textContent = pdfDoc.numPages;

		renderPage(pageNum);
	});
}
