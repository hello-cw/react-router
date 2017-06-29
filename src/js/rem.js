(function(win, doc) {

	// Init devicePixelRatio
	const initPixelRatio = ()=> {
		const $html = doc.documentElement;
		let dpr = win.devicePixelRatio;
		let rdpr = null;

		if (dpr >= 3) dpr = 3;
		else if (dpr === 2) dpr = 2;
		else dpr = 1;

		rdpr = 1 / dpr;

		$html.setAttribute('data-dpr', dpr);
	};

	// Update Font Size
	const updateWinFontSize = ()=> {
		const designWidth = 750;
		const maxWidth = 750;

		let deviceWidth = doc.body.clientWidth;

		if(deviceWidth > maxWidth){
			deviceWidth = maxWidth;
		}

		doc.documentElement.style.fontSize = deviceWidth * 100 / 750 + 'px';
	};


	win.addEventListener('resize', ()=>{
		updateWinFontSize();
	});

	doc.addEventListener('DOMContentLoaded', ()=>{
		initPixelRatio();
		updateWinFontSize();
	});

})(window, document);
