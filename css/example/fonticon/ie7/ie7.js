/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'fonticon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'data-icon-smiley': '&#xe602;',
		'data-icon-sad': '&#xe603;',
		'data-icon-point-up': '&#xe604;',
		'data-icon-point-right': '&#xe605;',
		'data-icon-point-down': '&#xe606;',
		'data-icon-point-left': '&#xe607;',
		'data-icon-notification': '&#xe608;',
		'data-icon-close': '&#xe609;',
		'data-icon-checkmark': '&#xe60a;',
		'data-icon-checkmark2': '&#xe60b;',
		'data-icon-minus': '&#xe60c;',
		'data-icon-plus': '&#xe60d;',
		'data-icon-arrow-up': '&#xe60e;',
		'data-icon-arrow-right': '&#xe60f;',
		'data-icon-arrow-down': '&#xe610;',
		'data-icon-arrow-left': '&#xe611;',
		'data-icon-paragraph-justify': '&#xe612;',
		'data-icon-apple': '&#xe601;',
		'data-icon-android': '&#xe600;',
		'data-icon-windows8': '&#xe613;',
		'data-icon-list': '&#xe614;',
		'data-icon-arrow-left2': '&#xe615;',
		'data-icon-arrow-down2': '&#xe616;',
		'data-icon-arrow-up2': '&#xe617;',
		'data-icon-arrow-right2': '&#xe618;',
		'data-icon-arrow-left3': '&#xe619;',
		'data-icon-arrow-down3': '&#xe61a;',
		'data-icon-arrow-up3': '&#xe61b;',
		'data-icon-arrow-right3': '&#xe61c;',
		'data-icon-arrow-left4': '&#xe61d;',
		'data-icon-arrow-down4': '&#xe61e;',
		'data-icon-arrow-up4': '&#xe61f;',
		'data-icon-uniE620': '&#xe620;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/data-icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
