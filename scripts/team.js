/******************************************************************************\
|                                                                              |
|                                    team.js                                   |
|                                                                              |
|******************************************************************************|
|                                                                              |
|        This defines the functionality for team web pages.                    |
|                                                                              |
|        Author(s): Abe Megahed                                                |
|                                                                              |
|        This file is subject to the terms and conditions defined in           |
|        'LICENSE.txt', which is part of this source code distribution.        |
|                                                                              |
|******************************************************************************|
|  Copyright (C) 2024 Data Science Institute, Univeristy of Wisconsin-Madison  |
\******************************************************************************/

$(document).ready(() => {

	// add lightbox triggers
	//
	$('.lightbox').fancybox({

		// options
		//
		openEffect: 'elastic',
		closeEffect: 'elastic',
		type : "image"
	});

	// set initial state
	//
	if (!$('.manual-skin-tone input').is(':checked')) {
		$('.manual-skin-tone.panel').hide();
	}
	if (!$('.color-thief-analyzer input').is(':checked')) {
		$('.color-thief-analyzer.panel').hide();
	}
	if (!$('.skin-tone-classifier input').is(':checked')) {
		$('.skin-tone-classifier.panel').hide();
	}
	if (!$('.deep-face-classifier input').is(':checked')) {
		$('.deep-face-classifier.panel').hide();
	}

	// add tooltip triggers
	//
	$('[data-toggle="tooltip"]').tooltip({
		trigger: 'hover'
	});

	$('.manual-skin-tone input').change((event) => {
		if (event.target.checked) {
			$('.manual-skin-tone.panel').show();
		} else {
			$('.manual-skin-tone.panel').hide();
		}
	});

	// add control callbacks
	//
	$('.manual-skin-tone input').change((event) => {
		if (event.target.checked) {
			$('.manual-skin-tone.panel').show();
		} else {
			$('.manual-skin-tone.panel').hide();
		}
	});
	$('.color-thief-analyzer input').change((event) => {
		if (event.target.checked) {
			$('.color-thief-analyzer.panel').show();
		} else {
			$('.color-thief-analyzer.panel').hide();
		}
	});
	$('.skin-tone-classifier input').change((event) => {
		if (event.target.checked) {
			$('.skin-tone-classifier.panel').show();
		} else {
			$('.skin-tone-classifier.panel').hide();
		}
	});
	$('.deep-face-classifier input').change((event) => {
		if (event.target.checked) {
			$('.deep-face-classifier.panel').show();
		} else {
			$('.deep-face-classifier.panel').hide();
		}
	});
});