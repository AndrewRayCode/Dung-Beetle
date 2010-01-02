/*
* COPYRIGHT INFORMATION: DO NOT REMOVE THIS HEADER
* Javascript based DOM/CSS inspector by Andrew Ray
* AndrewRay.me
*/
var valid_css_elements = [
	'background', 'background-attachment', 'background-color', 'background-image', 'background-position',
	'background-repeat', 'border', 'border-collapse', 'border-color', 'border-spacing', 'border-style',
	'border-width', 'bottom', 'caption-side', 'clear', 'clip', 'color', 'content', 'counter-increment',
	'counter-reset', 'cursor', 'direction', 'display', 'empty-cells', 'float', 'font', 'font-family',
	'font-size', 'font-style', 'font-variant', 'font-weight', 'height', 'left', 'letter-spacing',
	'line-height', 'list-style', 'list-style-image', 'list-style-position', 'list-style-type', 'margin',
	'max-height', 'max-width', 'min-height', 'min-width', 'orphans', 'outline', 'outline-color',
	'outline-style', 'outline-width', 'overflow', 'padding', 'page-break-after', 'page-break-before',
	'page-break-inside', 'position', 'quotes', 'right', 'table-layout', 'text-align', 'text-decoration',
	'text-indent', 'text-transform', 'top', 'unicode-bidi', 'vertical-align', 'visibility', 'white-space',
	'widows', 'width', 'word-spacing', 'z-index'];
var dung_colors = ['AliceBlue', 'AntiqueWhite', 'Aqua', 'Aquamarine', 'Azure', 'Beige', 'Bisque', 'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown',
	'BurlyWood', 'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue', 'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan',
	'DarkGoldenRod', 'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta', 'DarkOliveGreen', 'Darkorange', 'DarkOrchid', 'DarkRed',
	'DarkSalmon', 'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue',
	'DimGray', 'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod',
	'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen',
	'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon',
	'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta',
	'Maroon', 'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen',
	'MediumTurquoise', 'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'Navy', 'OldLace', 'Olive',
	'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff',
	'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell',
	'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato',
	'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen']
var input_ac_words = ['top', 'bottom', 'left', 'right', 'center', '!important', 'solid', 'inset', 'ridge', 'none', 'dashed', 'dotted', 'relative', 'absolute', 'no-repeat', 'repeat-x', 'repeat-y', 'scroll', 'pointer', 'text']
var outline_top, outline_left,outline_bottom, outline_right, dung_beetle, dung_display, dung_vertical_divide, dung_push, console_cursor,
	console_upsize, dung_styler, dung_resize,dung_header,body, current_element, current_dom_node, CSS, dung_beetle, console, console_input,
	console_buttons, dung_color_hover, dung_dom_positions, dung_mouse_position, dung_padding, dung_margin;
var dung_status = {'enabled':false};

window.addEvent('domready', function() {
	body = new Element(document.body);
	$('inspect').addEvent('click', function() {
		if(this.value == 'Start Dung Beetle Demo') {
			startDungBeetle();
			this.value = 'Stop Dung Beetle Demo';
		} else {
			stopDungBeetle();
			this.value = 'Start Dung Beetle Demo';
		}
	});
	startDungBeetle();
});

function startDungBeetle() {
	dung_status.enabled = true;
	dung_status.visualizing = false;

	document.addEvent('mousemove', dungMouseMove);

	dung_overlay = new Element('div', {'class':'dung_overlay'}).inject(document.body);
	dung_padding = {
		'top': new Element('div', {'class':'dung_padding'}).setStyles({'line-height':'0em', 'font-size':'0pt'}).inject(document.body),
		'right': new Element('div', {'class':'dung_padding'}).setStyles({'line-height':'0em', 'font-size':'0pt'}).inject(document.body),
		'bottom': new Element('div', {'class':'dung_padding'}).setStyles({'line-height':'0em', 'font-size':'0pt'}).inject(document.body),
		'left': new Element('div', {'class':'dung_padding'}).setStyles({'line-height':'0em', 'font-size':'0pt'}).inject(document.body)
	}
	dung_margin = {
		'top': new Element('div', {'class':'dung_margin'}).setStyles({'line-height':'0em', 'font-size':'0pt'}).inject(document.body),
		'right': new Element('div', {'class':'dung_margin'}).setStyles({'line-height':'0em', 'font-size':'0pt'}).inject(document.body),
		'bottom': new Element('div', {'class':'dung_margin'}).setStyles({'line-height':'0em', 'font-size':'0pt'}).inject(document.body),
		'left': new Element('div', {'class':'dung_margin'}).setStyles({'line-height':'0em', 'font-size':'0pt'}).inject(document.body)
	}

	outline_top = new Element('div', {'class':'dung_outline', 'display':'none'}).setStyles({'height':'2px', 'line-height':'0em', 'font-size':'0pt'}).inject(document.body);
	outline_left = new Element('div', {'class':'dung_outline', 'display':'none'}).setStyles({'width':'2px', 'line-height':'0em', 'font-size':'0pt'}).inject(document.body);
	outline_bottom = new Element('div', {'class':'dung_outline', 'display':'none'}).setStyles({'height':'2px', 'line-height':'0em', 'font-size':'0pt'}).inject(document.body);
	outline_right = new Element('div', {'class':'dung_outline', 'display':'none'}).setStyles({'width':'2px', 'line-height':'0em', 'font-size':'0pt'}).inject(document.body);
	dung_push = new Element('div', {'class':'dung_dung_dung'}).setStyles({'background':'transparent', 'width':'100px', 'height':'160px', 'margin':0, 'padding':0}).inject(document.body);
	dung_color_hover = new Element('div', {'class':'dung_color_view'}).inject(document.body);
	dung_color_hover.enabled = false;

	dung_beetle = new Element('div', {'class':'dung_beetle'})
		.inject(document.body)
		.setStyles({'height':'160px', 'width':parseInt(window.getSize().x)+'px', 'left':0});

	dung_resize = new Element('div', {'class':'dung_resize'}).inject(dung_beetle);
	dung_display = new Element('div', {'class':'dung_display'}).inject(dung_beetle);
	dung_styler = new Element('div', {'class':'dung_styler'}).inject(dung_beetle);
	dung_header = new Element('div', {'class':'dung_header'}).inject(dung_beetle);
	dung_console = new Element('div', {'class':'dung_console'}).inject(dung_beetle);
	console_input = new Element('textarea').inject(dung_beetle);
	console_cursor = new Element('div', {'class':'cursor'}).set('html','&#187;').inject(dung_beetle);
	console_upsize = new Element('div', {'class':'upsize dung_toggle_btns'}).inject(dung_beetle);
	dung_vertical_divide = new Element('div', {'class':'dung_vertical_divide'}).inject(dung_beetle);
	console_buttons = new Element('div', {'class':'console_buttons'}).inject(dung_beetle);
	console_buttons.innerHTML = '<span class="dung_execute">Execute</span><span class="dung_clear">Clear</span>';

	dung_beetle.makeResizable({
		'handle': dung_resize,
		'modifiers':{'x':false, 'y': 'top'},
		'onDrag': function() {
			this.limit = {'y':[1, (window.getSize().y.toInt() + window.getScroll().y.toInt())]};
			var height = window.getSize().y.toInt() - dung_beetle.getStyle('top').toInt() + window.getScroll().y.toInt();
			dung_beetle.setStyle('height', height+'px');
			stickConsole();
			dung_push.setStyle('height', height+'px');
		}
	});

	dung_vertical_divide.makeResizable({
		'handle': dung_vertical_divide,
		'modifiers':{'x':'left', 'y':false},
		'onDrag':function() {
			stickConsole();
		}
	});

	if(!$defined(console)) {
		console = {};
	}
	console.history = ["console.log('Dung Beetle:',dung_beetle);"];
	console.history_position = 0;
	console.mode = 1; //1: Inset one-line, 2: Full one-line, 3: Full multiline
	console_input.addEvent('keyup', consoleKeyEvent).addEvent('keyup', consoleKeyEvent);

	console.log = function() {
		var str = '<div class="console_response">';
		for(var x=0; x<arguments.length; x++) {
			str += formatObject(arguments[x])+' ';
		}
		dung_console.innerHTML += str+'&nbsp;</div>';
		new Fx.Scroll(dung_console, {'duration':0}).toBottom();
	}
	console.error = function(obj) {
		dung_console.innerHTML += '<div class="console_response"><span class="dung_error">'+formatObject(obj)+'</span></div>';
		new Fx.Scroll(dung_console, {'duration':0}).toBottom()
	}

	dung_header.innerHTML = '<span><a href="http://www.andrewray.me/dung-beetle/index.html">Dung Beetle</a></span>'+
		'<button type="button" id="dung_inspect" class="inspect">Inspect</button>'+
		'<button type="button" id="dung_show_console" class="console">Console</button>'+
		'<button type="button" id="dung_show_html" class="html active">HTML</button>'+
		'<div class="dung_toggle_btns" id="dung_close"></div>';

	$('dung_inspect').addEvent('click', function() {
		if(console.mode != 1) {
			setDungConsoleMode(1);
			$('dung_show_html').addClass('active');
		}

		if(dung_status.realtime_inspect) {
			stopDOMInspection();
		} else {
			startDOMInspection();
		}
	});

	$('dung_show_console').addEvent('click', function() {
		if(console.mode == 1) {
			if(dung_status.realtime_inspect) {
				stopDOMInspection();
			}
			setDungConsoleMode(2);
			$('dung_show_console').addClass('active');
		}
	});

	$('dung_show_html').addEvent('click', function() {
		if(console.mode != 1) {
			setDungConsoleMode(1);
			$('dung_show_html').addClass('active');
		}
	});

	$('dung_close').addEvent('click', function() {
		stopDungBeetle();
		$('inspect').value = 'Start Dung Beetle Demo';
	});

	console_upsize.addEvent('click', function() {
		if(console.mode == 2) {
			setDungConsoleMode(3);
			$('dung_show_console').addClass('active');
		} else {
			setDungConsoleMode(2);
			$('dung_show_console').addClass('active');
		}
	});

	dung_beetle.addEvent('click', consoleClick);
	dung_beetle.addEvent('mouseover', consoleHover);
	dung_beetle.addEvent('dblclick', consoleDblClick);

	window.addEvent('scroll', stickConsole);
	window.addEvent('resize', stickConsole);
	body.addEvent('mouseover', bodyHover);

	stickConsole();
	displayDOM();
	checkCSSLoaded();

	stickConsole();
	console.log('Dung Beetle:',dung_beetle);
}

function dungMouseMove(event) {
	dung_mouse_position = {'x':event.client.x.toInt(), 'y':event.client.y.toInt()+window.getScroll().y};
	if(dung_color_hover.enabled) {
		dung_color_hover.setStyles({'left':(dung_mouse_position.x+9)+'px', 'top':(dung_mouse_position.y+9)+'px'});
	}
}

// Change the display mode for the console
function setDungConsoleMode(mode) {
	dung_beetle.getElements('button').each(function(item) {
		item.removeClass('active');
	});
	switch(mode) {
		// Set to inline console on HTML page
		case 1:
			dung_vertical_divide.setStyle('display', 'block');
			console_cursor.setStyle('display', 'block');
			dung_display.setStyle('display', 'block');
			dung_styler.setStyle('display', 'block');
			console_input.setStyles({'width':'680px', 'left':'12px', 'height':'15px', 'bottom':'2px'});
			dung_console.setStyles({'width':'690px', 'height':'15px', 'bottom':'18px'});
			console_upsize.setStyle('display', 'none');
			console_buttons.setStyle('display', 'none');
		break;
		// Set to full console with one line input
		case 2:
			dung_vertical_divide.setStyle('display', 'none');
			dung_display.setStyle('display', 'none');
			dung_styler.setStyle('display', 'none');
			console_cursor.setStyle('display', 'block');
			console_input.setStyles({'width':(parseInt(window.getSize().x)-16)+'px', 'left':'2px', 'height':'15px', 'bottom':'2px'});
			dung_console.setStyles({'bottom':'18px', 'width':(parseInt(window.getSize().x)-6)+'px', 'height':(parseInt(dung_beetle.getStyle('height'))-46)+'px' });
			console_upsize.setStyles({'display':'block', 'bottom':'2px'}).set('class', 'dung_toggle_btns upsize');
			console_buttons.setStyle('display', 'none');
		break;
		// Set to full console with multiline input
		case 3:
			dung_vertical_divide.setStyle('display', 'block');
			dung_display.setStyle('display', 'none');
			dung_styler.setStyle('display', 'none');
			console_cursor.setStyle('display', 'none');
			console_input.setStyles({'bottom':'25px', 'left':(parseInt(window.getSize().x)-204)+'px', 'width':'200px', 'height':(parseInt(dung_beetle.getStyle('height'))-30)+'px'});
			dung_console.setStyles({'bottom':'2px', 'width':(parseInt(window.getSize().x)-210)+'px', 'height':(parseInt(dung_beetle.getStyle('height'))-30)+'px'});
			console_upsize.setStyles({'display':'block', 'bottom':'4px'}).set('class', 'dung_toggle_btns downsize');
			console_buttons.setStyle('display', 'block');
		break;
	}
	console.mode = mode;
	stickConsole();
}

// Recursive function to format an object for display in the console
function formatObject(obj) {
	var str = '';
	var type = $type(obj);
	if(type == 'string' ) {
		str += '"<span class="dung_string">'+obj+'</span>"';
	} else if(type == 'number' || type == 'boolean' || type == 'function') {
		str += '<span class="dung_'+type+'">'+obj+'</span>';
	} else if(type == 'array') {
		str += '[';
		for(var x=0; x<obj.length; x++) {
			str += formatObject(obj[x])+', ';
		}
		str = str.substring(0, str.length-2)+']';
	} else if(type == 'object') {
		str += '{';
		for(var x in obj) {
			str += '<span class="dung_string">'+x+'</span>:'+formatObject(obj[x])+', ';
		}
		str = str.substring(0, str.length-2)+'}';
	} else if(type == 'element') {
		var attrs = getElementAttributes(obj);
		str += '[<span class="dung_element">HTML '+obj.nodeName.toLowerCase()+'</span>'+(attrs.length >0 ? ':{' : '');
		for(var x=0; x<attrs.length; x++) {
			str += '<span class="dung_string">'+attrs[x].nodeName+'</span>="<span class="dung_string">'+attrs[x].nodeValue+'</span>", ';
		}
		str = (attrs.length >0 ? str.substring(0, str.length-2)+'}' : str)+']';
	} else {
		str += '<span class="dung_other">'+obj+'</span>';
	}
	return str;
}

function stopDOMInspection() {
	//Stop DOM inspection
	$('dung_inspect').toggleClass('active');
	hideOutlines();
	dung_status.realtime_inspect = false;
	body.removeEvent('click', bodyClick);
	body.removeEvent('mouseover', bodyHover);
}
function startDOMInspection() {
	//Start DOM inspection
	$('dung_inspect').toggleClass('active');
	dung_status.realtime_inspect = true;
	dung_status.indung_lock = false;
	showOutlines();
	body.addEvent('click', bodyClick);
	body.addEvent('mouseover', bodyHover);
}

function checkCSSLoaded() {
	for(var x=0; x <document.styleSheets.length; x++) {
		var styleSheet = document.styleSheets[x];
		try {
			$pick(styleSheet.rules, styleSheet.cssRules);
		} catch(e) {
			setTimeout(function(){checkCSSLoaded();}, 100);
			return;
		}
	}
	CSS = parseCSS();
}

function parseCSS() {
	var css={};
	for(var x=0; x <document.styleSheets.length; x++) {
		var styleSheet = document.styleSheets[x];
		css[styleSheet.href] = {};
		var rules = $pick(styleSheet.rules, styleSheet.cssRules);
		for(var i=0; i<rules.length; i++) {;
			css[styleSheet.href][rules[i]['selectorText']] = rules[i]['style']['cssText'];
		}
	}
	return css;
}

function showOutlines() {
	if(outline_top.getStyle('display') == 'none') {
		toggleOutlines();
	}
}
function hideOutlines() {
	if(outline_top.getStyle('display') != 'none') {
		toggleOutlines();
	}
}

// Handles hovering over body elements
function bodyHover(event) {
	if(dung_status.realtime_inspect) {
		outlineElement(event);
	} else if(dung_status.visualizing) {
		hideElementVisuals();
	}
}

// Handles click on the actual page. Only active at certain times
function bodyClick(event) {
	dung_status.indung_lock = true;

	if(current_dom_node) {
		current_dom_node.removeClass('dung_dom_selected');
	}

	if(!event.target.className || !event.target.className.test(/dung/)) {
		inspectElement(event);
		highlightInDOMView(new Event(event).target);
	} else {
		highlightInDOMView(current_element);
	}
	stopDOMInspection();
}

// Show or hide the blue outlines around elements being inspected
function toggleOutlines() {
	if(outline_top.getStyle('display') == 'none') {
		outline_top.setStyle('display', 'block');
		outline_bottom.setStyle('display', 'block');
		outline_right.setStyle('display', 'block');
		outline_left.setStyle('display', 'block');
	} else {
		outline_top.setStyle('display', 'none');
		outline_bottom.setStyle('display', 'none');
		outline_right.setStyle('display', 'none');
		outline_left.setStyle('display', 'none');
	}
}

function stopDungBeetle(event) {
	dung_status.enabled = false;
	stopDOMInspection();
	body.removeEvent('mouseover', bodyHover);
	dung_beetle.dispose();
	outline_top.dispose();
	outline_bottom.dispose();
	outline_right.dispose();
	outline_left.dispose();
	dung_push.dispose();
	window.removeEvent('scroll', stickConsole);
}

// Show the margin and padding of an element
function visualizeElement(elem) {
	dung_status.visualizing = true;
	var pos = elem.getPosition();
	var padding = {
		'top':elem.getStyle('padding-top').toInt(),
		'left':elem.getStyle('padding-left').toInt(),
		'bottom':elem.getStyle('padding-bottom').toInt(),
		'right':elem.getStyle('padding-right').toInt()
	}
	var size = {
		'x':elem.getSize().x.toInt() - padding.left - padding.right,
		'y':elem.getSize().y.toInt() - padding.top - padding.bottom
	}
	var margin = {
		'top':elem.getStyle('margin-top').toInt(),
		'left':elem.getStyle('margin-left').toInt(),
		'bottom':elem.getStyle('margin-bottom').toInt(),
		'right':elem.getStyle('margin-right').toInt()
	}

	dung_overlay.setStyles({'display':'block', 'left':(pos.x+padding.left)+'px', 'top':(pos.y+padding.top)+'px', 'width':size.x+'px', 'height':size.y+'px'});
	dung_padding.top.setStyles({'display':'block', 'left':pos.x+'px', 'top':pos.y+'px', 'width':(padding.left+padding.right+size.x)+'px', 'height':(padding.top)+'px'});
	dung_padding.left.setStyles({'display':'block', 'left':pos.x+'px', 'top':(pos.y+padding.top)+'px', 'width':(padding.left)+'px', 'height':(size.y)+'px'});
	dung_padding.bottom.setStyles({'display':'block', 'left':pos.x+'px', 'top':(pos.y+padding.top+size.y)+'px', 'width':(padding.left+padding.right+size.x)+'px', 'height':(padding.bottom)+'px'});
	dung_padding.right.setStyles({'display':'block', 'left':(pos.x+size.x+padding.left)+'px', 'top':(pos.y+padding.top)+'px', 'width':(padding.left)+'px', 'height':(size.y)+'px'});

	dung_margin.top.setStyles({'display':'block', 'left':(pos.x-margin.left)+'px', 'top':(pos.y-margin.top)+'px', 'width':(padding.left+padding.right+size.x+margin.left+margin.right)+'px', 'height':(margin.top)+'px'});
	dung_margin.left.setStyles({'display':'block', 'left':(pos.x-margin.left)+'px', 'top':(pos.y)+'px', 'width':(margin.left)+'px', 'height':(size.y+padding.top+padding.bottom)+'px'});
	dung_margin.bottom.setStyles({'display':'block', 'left':(pos.x-margin.left)+'px', 'top':(pos.y+size.y+padding.bottom+padding.top)+'px', 'width':(padding.left+padding.right+size.x+margin.left+margin.right)+'px', 'height':(margin.bottom)+'px'});
	dung_margin.right.setStyles({'display':'block', 'left':(pos.x+size.x+padding.left+padding.right)+'px', 'top':(pos.y)+'px', 'width':(margin.right)+'px', 'height':(size.y+padding.top+padding.bottom)+'px'});
}
function hideElementVisuals() {
	dung_status.visualizing = false;
	dung_overlay.setStyle('display', 'none');
	dung_padding.top.setStyle('display', 'none');
	dung_padding.left.setStyle('display', 'none');
	dung_padding.bottom.setStyle('display', 'none');
	dung_padding.right.setStyle('display', 'none');

	dung_margin.top.setStyle('display', 'none');
	dung_margin.left.setStyle('display', 'none');
	dung_margin.bottom.setStyle('display', 'none');
	dung_margin.right.setStyle('display', 'none');

}

// Display the blue outlines around an element to show it's position
function outlineElement(event) {
	var elem;
	if($type(event) == 'element') {
		elem = event;
	} else {
		var e = new Event(event).stop();
		elem = new Element(e.target);
		if(elem.className && elem.className.match('dung')) {return;}

		if(dung_status.indung_lock != true) {
			if(current_dom_node) {
				current_dom_node.removeClass('dung_dom_selected');
			}
			highlightInDOMView(e.target);
			inspectElement(event);
		}
	}

	if(!elem.className.match('dung') && elem != body) {
		var pos = elem.getPosition();
		var size = elem.getSize();

		outline_top.setStyles({'top':pos.y, 'left':pos.x, 'width':size.x});
		outline_bottom.setStyles({'top':pos.y+size.y, 'left':pos.x, 'width':(parseInt(size.x)+2)+'px'});
		outline_right.setStyles({'top':pos.y, 'left':pos.x+size.x, 'height':size.y});
		outline_left.setStyles({'top':pos.y, 'left':pos.x, 'height':size.y});
	}
}

// Given an element in the body, highlight the respective element in the DOM view
function highlightInDOMView(element) {
	var view_element = findInDOMView(element);
	current_dom_node = view_element.getFirst();
	current_dom_node.addClass('dung_dom_selected');
	var fx = new Fx.Scroll(dung_display, {'duration':300}).start(0, current_dom_node.dung_position);
}

// Returns div containing view element in DOM viewer (returns "tag_open" div of found DOM node)
function findInDOMView(element, parent) {
	var found = false;
	if(!$defined(parent)) { parent = dung_display;}
	if(element.className) {
		if(element.className.match('dung_beetle')) {
			return null;
		}
	}

	if(parent.hover_highlight == element) {
		return parent;
	} else {
		var nodes=parent.childNodes;
		if(nodes.length) {
			for(var x=0; x<nodes.length; x++) {
				var find = findInDOMView(element, nodes[x]);
				if(find) return find;
			}
		}
	}
}

// Display everything inside the body tag and highlight it
function displayDOM(parent, element) {
	if(!$defined(parent)) { parent = dung_display; dung_display.empty()}
	element = $pick(element, body);
	if(element.className) {
		if(element.className.match('dung')) {
			return;
		}
	}

	if($type(element) == 'textnode') {
		var text = new Element('span').inject(parent);
		text.innerHTML = element.nodeValue;
		//text.hover_highlight = element.parentNode;
	} else if(element.nodeName == '#text') {
		parent.dispose();
	} else {
		var tag_open = new Element('div', {'class':'dung_tag_open'}).set('text', '<'+element.nodeName.toLowerCase()).inject(parent);
		var tag_close = new Element('div', {'class':'dung_tag_close'}).set('text', '</'+element.nodeName.toLowerCase()+'>');
		parent.hover_highlight = element;
		tag_open.hover_highlight = element;
		tag_open.dung_position = tag_open.getPosition(dung_display).y
		tag_close.hover_highlight = element;

		var attributes = getElementAttributes(element);
		var styles = '';
		if(attributes.length) {
			for(var x=0; x<attributes.length; x++) {
				styles += '<span class="dung_html_attr"> <span class="dung_html_prop">'+attributes[x].nodeName+'</span>="<span class="dung_attr_edit">'+attributes[x].nodeValue+'</span><span class="dung_html_attr">"</span></span>';
			}
		}
		tag_open.innerHTML += styles;

		var nodes=element.childNodes;
		if(nodes.length) {
			for(var x=0; x<nodes.length; x++) {
				var node = new Element('div', {'class':'dung_node'}).inject(parent);
				displayDOM(node, nodes[x]);
			}
			tag_open.innerHTML += '&gt;';
			tag_close.inject(parent);
		} else {
			tag_open.innerHTML += ' /&gt;';
		}
	}
}

// Show an element's styles and highlight it in the DOM. Takes in click event on element or element in body
function inspectElement(mixed) {
	var elem;
	if($type(mixed) == 'event') {
		var e = new Event(mixed).stop();
		elem = new Element(e.target);
	} else {
		elem = mixed;
	}
	current_element = elem.className.test(/dung/) ? current_element : elem;
	var full_selector = getFullSelector(current_element);
	var element_selector = getSelector(current_element);

	var str = '<div class="dung_css_selector"><div class="css_title"><span>element.style</span><span><img src="dung_cancel_gray.gif" alt="Cancel this CSS Selector"/>{</span></div>';
	if(elem.get('style').length > 1) {
		var styles = elem.get('style').split(';');
		for(var x=0; x<styles.length; x++) {
			if(styles[x].trim().length > 0) {
				var pair = styles[x].split(':');
				str += '<div class="dung_pair"><div class="cancel"></div><span class="dung_attr">'+pair[0].toLowerCase()+'</span>: <span class="dung_val">'+dungColorize(pair[1].toLowerCase().replace(';', ''))+'</span>;</div>';
			}
		}
	}
	dung_styler.innerHTML = str + '<span>}</span></div><br />';

	// Determine inherited styles. This loop determines what styles from the stylesheet affect the given element.
	var uses = false;
	for(var stylesheet in CSS) {
		var css_styles = [];
		for(var rule in CSS[stylesheet]) {
			if(matchFullSelector(rule, full_selector)) {
				css_styles[css_styles.length] = {'weight':getSelectorWeight(rule, element_selector), 'html':'<div class="dung_css_selector"><div class="css_title"><span>'+rule+'</span><span><img src="dung_cancel_gray.gif" alt="Cancel this CSS Selector"/>{</span></div>'};
				var rules = CSS[stylesheet][rule].split('; ');
				for(var x=0; x<rules.length; x++) {
					if(rules[x].length > 0) {
						var pair = rules[x].split(':');
						if(pair[0].indexOf('-moz') == -1) {
							css_styles[css_styles.length-1]['html'] += '<div class="dung_pair"><div class="cancel"></div><span class="dung_attr">'+pair[0].toLowerCase()+'</span>: <span class="dung_val">'+dungColorize(pair[1].toLowerCase().replace(';', ''))+'</span>;</div>';
						}
					}
				}
				css_styles[css_styles.length-1]['html'] += '<span>}</span></div><br />';
			}
		}
		css_styles.sort(weightedSort);
		for(var x=0; x<css_styles.length; x++) {
			dung_styler.innerHTML += css_styles[x]['html'];
		}
	}
}

// Gets the full selector to an element, including parents.
// Breaks nested elements like '<div><span class="content"><h3></h3></span></div>' into string 'div span.content h3'
function getFullSelector(element) {
	var str = getSelector(element);
	if(element.getParent()) {
		str = getFullSelector(element.getParent()) + ' '+str;
	}
	return str;
}

// Get the selector for an element, for example <div class="body" id="info"/> into div .body #info
function getSelector(element) {
	var str = element.nodeName.toLowerCase();

	var classes = element.className.split(' ');
	for(var x=0; x<classes.length; x++) {
		if(classes[x] != '') {
			str+=' .'+classes[x];
		}
	}
	if(element.id) {
		str+=' #'+element.id;
	}
	return str;
}

// Determines if a CSS selector affects an element by analyzing the element's full DOM parentage.
// For example, '.class div#id span h3' will match the selector of 'div#id h3'
function matchFullSelector(test, selector) {
	var regex = test.replace(/\./g, ' \\.').split(/[ ]+/).join(' [\\S\\s]*') + '( |$)';
	return selector.test(new RegExp(regex, 'i'));
}

// Determine CSS inheritance by "weight" of selectors (heaviest is most specific). Example: "#bob .hi" outweights ".hi"
function getSelectorWeight(string, current_selector) {
	var tags = string.match(/(^| )[a-zA-Z0-9]+(\.| |$)/g);
	var classes = string.match(/\.[^ ]+/g);
	var ids = string.match(/\#[^ ]+/g);
	return (tags ? tags.length : 0)
		+ (classes ? classes.length * 10 : 0)
		+ (ids ? ids.length * 100 : 0)
		+ (matchFullSelector(string, current_selector) ? 10000 : 0);
}

function compileStyles(style_group) {
	var styles = splatStyles(style_group);
	var selector = style_group.getFirst().getFirst().innerHTML;
	if(selector == 'element.style') {
		current_element.set('style', styles);
		var style = getCurrentStyleTag().getNext();
		style.innerHTML = styles;
	} else {
		addCSSRule(style_group.getFirst().getFirst().innerHTML, styles);
	}
}

// Take a style group and convert it to a string of all the styles, like "border:1px dotted green; color:red"
function splatStyles(style_group) {
	var style_pairs = style_group.getChildren();
	var str = '';

	// Splicing fails in IE so just start at 2 and end at -1 for the span tags
	for(var x=1; x<style_pairs.length-1; x++) {
		if(style_pairs[x].hasClass('canceled')) {
			continue;
		}

		// We have an active input
		var css = style_pairs[x].getFirst().getNext();
		var first = css.getFirst();
		var selector = (first && first.get('tag') == 'input') ? first.value : css.innerHTML;

		css = css.getNext();
		first = css.getFirst();
		var rule = (first && first.get('tag') == 'input') ? first.value : css.innerHTML;

		str += selector+': '+rule+'; ';
	}
	return dungStripTags(str.trim());
}

function addCSSRule(selector, attributes){
	var ss = document.styleSheets;
	
	// Edit an existing rule if we find it
	for(var x=0; x <ss.length; x++) {
		var styleSheet = ss[x];
		var rules = $pick(styleSheet.rules, styleSheet.cssRules);
		for(var i=0; i<rules.length; i++) {
			if(rules[i]['selectorText'] == selector) {
				if(styleSheet.rules) {
					document.styleSheets[x].rules[i]['style']['cssText'] = attributes;
				} else {
					document.styleSheets[x].cssRules[i]['style']['cssText'] = attributes;
				}
				return;
			}
		}
	}

	// Else add a new one
	if(document.styleSheets[0].insertRule) {
		// Non-IE
		document.styleSheets[0].insertRule(selector + '{'+attributes+'}', document.styleSheets[0].cssRules.length);
		// IE
	} else if(document.styleSheets[0].addRule) {
		document.styleSheets[0].addRule(selector, attributes, document.styleSheets[0].rules.length);
	} else {
		console.error('This browser does not support CSS editing');
	}
}

// 
function toggleCSSStyle(style_pair) {
	style_pair.toggleClass('canceled');
	compileStyles(style_pair.getParent());
}

// Toggle an entire selector, like turn off all styles under ".class"
function toggleCSSRule(css_group) {
	var selector_span = css_group.getFirst().getFirst();
	var selector = selector_span.innerHTML;
	css_group.toggleClass('canceled');
	selector_span.getNext().getFirst().src = css_group.hasClass('canceled') ? 'dung_cancel.gif' : 'dung_cancel_gray.gif';
	
	if(selector == 'element.style') {
		var style = getCurrentStyleTag().getNext();
		
		return;
	}

	var ss = document.styleSheets;
	for(var x=0; x <ss.length; x++) {
		var styleSheet = ss[x];
		var rules = $pick(styleSheet.rules, styleSheet.cssRules);
		for(var i=0; i<rules.length; i++) {
			var canceled = rules[i]['selectorText'].indexOf('#DungCancel ') > -1;
			var replaced = rules[i]['selectorText'].replace('#DungCancel ', '');
			if(selector.toLowerCase() == replaced.toLowerCase()) {
				var rule;
				if(styleSheet.rules) {
					rule = styleSheet.rules[i]['style']['cssText'];
					styleSheet.removeRule(i);
				} else {
					rule = styleSheet.cssRules[i]['style']['cssText'];
					styleSheet.deleteRule(i);
				}
				addCSSRule( (canceled ? replaced : '#DungCancel '+selector), rule);
				return;
			}
		}
	}
	console.error('Warning: Rule to toggle not found');
}


function inspectHover(event) {
	var e = new Event(event).stop();
	var elem = e.target;
}

// Turn an editable value into an input box
function editValue(mixed) {
	var elem;
	if($type(mixed) == 'event') {
		var e = new Event(mixed).stop();
		var elem = e.target;
	} else {
		elem = mixed;
	}

	var value = elem.innerHTML;
	var stripped = dungStripTags(value.trim());
	elem.set('text', '');

	var edit_input = new Element('input', {'class':'edit_input', 'style':'width:'+(stripped.length * 7)+'px;'});
	edit_input.original_value = value.trim();
	edit_input.inject(elem).set('value', stripped).focus();
	edit_input.select();

	edit_input.addEvent('keydown', inputKeyEvent);
	edit_input.addEvent('keyup', inputKeyEvent);
}

// Handles all major clicks on the console. Stops event bubbling and determines action
function consoleClick(event) {
	var clicked = new Element(event.target);
	if(clicked.hasClass('dung_color_hover')) {
		clicked = clicked.getParent();
	}
	var input = dung_beetle.getElement('input');

	// Don't do anything if we click on an active input
	if(clicked.get('tag') == 'input') {
		var e = new Event(event).stop();
		return;
	}

	// Dispose of any active inputs if clicking away (passing the input to the method fires its cancel function)
	if(input != null && input != clicked) {
		if(input.getParent().getParent().hasClass('dung_pair')) {
			inputKeyEvent(input);
		}
	}

	// Edit a CSS attribute or vlaue
	if(clicked.hasClass('dung_attr') || clicked.hasClass('dung_val') || clicked.hasClass('dung_html_prop') || clicked.hasClass('dung_attr_edit')) {
		editValue(clicked);
	} else if( (clicked.hasClass('dung_tag_open') || clicked.hasClass('dung_tag_close')) && clicked.getParent().getFirst() != current_dom_node) {
		var clicked = clicked.getParent().getFirst();
		clicked.addClass('dung_dom_selected');
		inspectElement(clicked.hover_highlight);
		if(current_dom_node) {
			current_dom_node.removeClass('dung_dom_selected');
		}
		current_dom_node = clicked;
	} else if(clicked.hasClass('cancel')) {
		toggleCSSStyle(clicked.getParent());
	} else if(clicked.src && clicked.src.indexOf('cancel') > -1) {
		toggleCSSRule(clicked.getParent().getParent().getParent());
	}

	// Execute multi-line script in console
	if(clicked.hasClass('dung_execute')) {
		executeConsole();
	} else if(clicked.hasClass('dung_clear')) {
		dung_console.innerHTML = '';
		console_input.value = '';
	}

	var e = new Event(event).stop();
}

function consoleHover(event) {
	var e = new Event(event).stop();
	var elem = new Element(e.target);
	var highlight = elem.hover_highlight;
	if(highlight && elem.hasClass('dung_tag_open')) {
		visualizeElement(highlight);
	} else if(dung_status.visualizing) {
		hideElementVisuals();
	}
	if(elem.hasClass('dung_color_hover')) {
		dung_color_hover.enabled = true;
		dung_color_hover.setStyles({'display':'block', 'background-color':elem.innerHTML});
	} else if(dung_color_hover.enabled == true) {
		dung_color_hover.enabled = false;
		dung_color_hover.setStyle('display', 'none');
	}
}

// Function to handle all console double clicks
function consoleDblClick(event) {
	var e = new Event(event);
	var elem = new Element(e.target);

	// Double click on a CSS rule, so insert a new element
	if(elem.hasClass('dung_css_selector') || elem.getParent().hasClass('dung_css_selector')) {
		var style_group = new Element('div', {'class':'dung_pair new'});
		var css_group = e.target.hasClass('dung_pair') || e.target.hasClass('css_title') ? e.target.getParent() : e.target;

		// Search for a style attribute on the element
		if(css_group.getFirst().getFirst().innerHTML == 'element.style') {
			var style = getCurrentStyleTag(); // The div of the attributes of the element
/* 			for(var x=0, children = current_dom_node.getChildren(); x<children.length; x++) {
				if(children[x].getFirst().innerHTML.toString() == 'style') {
					style = children[x].getFirst();
					break;
				}
			} */
			if(!$defined(style)) {
				var last = current_dom_node.getLast();
				var html = ' <span class="dung_html_prop">style</span>="<span class="dung_attr_edit"></span><span class="dung_html_attr">"</span>';
				if(last) {
					new Element('span', {'class':'dung_html_attr'}).inject(last, 'after').innerHTML = html;
				} else {
					current_dom_node.innerHTML = current_dom_node.innerHTML.substring(0, current_dom_node.innerHTML.length - 4) + '<span class="dung_html_attr">' + html + '</span>&gt;';
				}
			}
		}

		//Create the inputs
		style_group.injectBefore(css_group.getChildren()[1]).innerHTML = '<div class="cancel"></div><span class="dung_attr"><input class="edit_input" /></span>: <span class="dung_val"><input class="edit_input" /></span>;';

		// Wire the two inputs for clicking
		style_group.getFirst().getNext().getFirst().addEvent('keydown', inputKeyEvent).addEvent('keyup', inputKeyEvent).focus();
		style_group.getChildren()[2].getFirst().addEvent('keydown', inputKeyEvent).addEvent('keyup', inputKeyEvent);
	}
}

// Key handler for console
function consoleKeyEvent(event) {
	if(console.mode != 3) {
		console_input.value = console_input.value.replace(/[\n\r]/g, '');

		if(event.key == 'up') {
			console.history_position = Math.max(console.history_position-1, 0);
			console_input.value = console.history[console.history_position];
		} else if(event.key == 'down') {
			console.history_position = Math.min(console.history_position+1, console.history.length-1);
			console_input.value = console.history[console.history_position];
		}
	}
	if(event.key == 'enter' || (event.key == 'enter' && event.control  == true)) {
		if(console_input.value.toString() == 'clear()' || console_input.value == 'clear' || console_input.value == 'cls') {
			console.history_position++;
			console.history[console.history.length] = console_input.value;
			dung_console.innerHTML = '';
			console_input.value = '';
			return;
		}
		if(console.mode == 1 || console.mode == 2) {
			console_input.value = console_input.value.trim();
			console.history_position++;
			console.history[console.history.length] = console_input.value;
			console.history_position = console.history.length;
			executeConsole();
			console_input.value = '';
		} else if(event.control == true) {
			console_input.value = console_input.value.trim();
			executeConsole();
		}
	}
}

function executeConsole() {
	try {
		var kids = dung_console.getChildren().length;
		var res = eval(console_input.value);
		if($defined(res)) {
			console.log(res);
		} else {
			if( dung_console.getChildren().length == kids ) {
				console.log('Evaluated: '+console_input.value);
			}
		}
	} catch(e) {
		console.error(e);
	}
}

// Key event handler for all input fields when editing values. Determines action based on what input it is
function inputKeyEvent(mixed) {
	var event, input;
	if($type(mixed) == 'event') {
		event = mixed;
		input = event.target;
	} else {
		event = {'key':'esc'};
		input = mixed;
	}
	var parent = input.getParent();
	var grandparent = parent.getParent();
	var greatparent = grandparent.getParent();

	if(greatparent.getFirst().getFirst().innerHTML == 'element.style') {
		var style;
		for(var x=0, children = current_dom_node.getChildren(); x<children.length; x++) {
			if(children[x].getFirst().innerHTML.toString() == 'style') {
				style = children[x].getFirst().getNext();
			}
		}
		style.innerHTML = splatStyles(greatparent);
	}

	// They key event came from a CSS attribute, like "border" in "border: 3px solid blue"
	if(parent.hasClass('dung_attr')) {
		if(event.key != 'backspace') { autoComplete(input, valid_css_elements); }
		if(input.value.indexOf(':') > 1 || ((event.key == 'tab' || event.key == 'enter') && input.value.length > 0)) {
			input.value = input.value.replace(':', '').trim();
			input.getParent().innerHTML = dungColorize(input.value);

			// Either focus on the next box or...
			var nextInput = parent.getNext().getFirst();
			if(nextInput != null) {
				// Focus on the next area for editing, hack because IE does not focus, probably race condition
				setTimeout(function() {parent.getNext().getFirst().focus();}, 1);
			} else {
				new Event(event).stop();
				grandparent.removeClass('new');
				if(event.key == 'enter') {
					compileStyles(greatparent);
				} else {
					editValue(parent.getNext());
					setTimeout(function() {parent.getNext().getFirst().select();}, 1);
				}
			}
		} else if(event.key == 'esc' || event.key == 'enter' || event.key == 'tab') {
			input.value = input.value.trim();
			if(grandparent.hasClass('new')) {
				grandparent.destroy();
			} else {
				grandparent.removeClass('new');
				parent.innerHTML = input.original_value;
				input.destroy();
			}
		}
	// The key event came from a CSS value, like "3px solid blue" in "border: 3px solid blue"
	} else if(parent.hasClass('dung_val')) {
		compileStyles(greatparent);
		if(event.key != 'backspace') { autoComplete(input, input_ac_words); }
		if((event.key == 'tab' || event.key == 'enter') && input.value.length > 0) {
			input.value = input.value.replace(';', '').trim();
			input.getParent().innerHTML = dungColorize(input.value);
			grandparent.removeClass('new');
			compileStyles(greatparent);
		} else if((event.key == 'esc' || event.key == 'tab'|| event.key == 'enter') && !grandparent.hasClass('new')) {
			input.value = input.value.trim();
			if(grandparent.hasClass('new') || input.value.length == 0) {
				grandparent.destroy();
			} else {
				grandparent.removeClass('new');
				parent.innerHTML = input.original_value;
				input.destroy();
			}
		}
	// Event fired from DOM node
	} else if(parent.hasClass('dung_html_prop') || parent.hasClass('dung_attr_edit')) {
		var isAttribute = parent.hasClass('dung_html_prop');
		if(!isAttribute) {
			applyAttributes(greatparent);
		}
		current_dom_node = greatparent;
		current_element = current_dom_node.hover_highlight;
		if((input.value.indexOf('=') > 1 && isAttribute) || (event.key == 'tab' && input.value.length > 0)) {
			parent.innerHTML = input.value;
			input.destroy();
			applyAttributes(greatparent);
		} else if(event.key == 'enter' && input.value.trim().length > 0) {
			if(input.value != input.original_value) {
				 current_element.erase(input.original_value);
			}
			parent.innerHTML = input.value;
			applyAttributes(greatparent);
			input.destroy();
		} else if(event.key == 'enter' || event.key == 'tab') {
			if(isAttribute) {
				parent.innerHTML = input.original_value;
				parent.getNext().innerHTML = '';
			} else {
				parent.innerHTML = '';
			}
			applyAttributes(greatparent);
			grandparent.destroy();
		} else if(event.key == 'esc') {
			parent.innerHTML = input.original_value;
		}
	}

	// Auto size the input field
	input.setStyle('width', ((input.value.length * 7) + 8)+'px');
};

// Applies attributes set from DOM editing to the actual element in page body
function applyAttributes(tag_open, set_to) {
	var children = tag_open.getChildren();
	for(var x=0; x<children.length; x ++) {
		// Get the attribute (like "class") and the value (like "content") from either input box or already-compiled
		var first = children[x].getFirst().getFirst();
		var attr = first ? first.value : children[x].getFirst().innerHTML;

		first = children[x].getFirst().getNext().getFirst();
		var value = first ? first.value : children[x].getFirst().getNext().innerHTML;

		if(attr == 'style') {
			current_element.erase('style');
			var styles = value.split(';');
			for(var y=0; y<styles.length; y++) {
				var pair = styles[y].trim().split(':');
				current_element.setStyle(pair[0], pair[1]);
			}
		} else {
			current_element.set(attr, set_to ? null : value);
		}
	}
	inspectElement(current_element);
}

function getTags(elem) {
	if(elem == null) { return ''; }
	var holder = new Element('div', {});
	elem.clone().inject(holder);
	var tags = holder.innerHTML;
	//tags = tags.replace(/>([^<]+)</, '>'++'<');
	holder.dispose();
	return tags;
}

// Seat the console on the bottom of the screen
function stickConsole() {
	var scroll = window.getScroll();
	var w_size = window.getSize();
	var top_pos = (parseInt(scroll.y) + parseInt(w_size.y) - parseInt(dung_beetle.getStyle('height')))+'px';

	dung_beetle.setStyles({'top':top_pos, 'width':(parseInt(w_size.x)-(Browser.Engine.webkit ? 17 : 0))+'px', 'left':scroll.x});
	var height = parseInt(w_size.y) - parseInt(dung_beetle.getStyle('top')) + parseInt(scroll.y);

	var v_pos = parseInt(dung_vertical_divide.getStyle('left'));
	if(v_pos > parseInt(w_size.x)) {
		v_pos = parseInt(w_size.x) - 200;
		dung_vertical_divide.setStyle('left', v_pos+'px');
	}
	var width_before_divide = v_pos - 4;
	var width_after_divide = parseInt(w_size.x) - v_pos - 8;

	if(console.mode == 1) {
		dung_vertical_divide.setStyle('height', Math.max(height-28, 0)+'px');
		dung_styler.setStyles({'width':width_after_divide+'px', 'left':(v_pos+3)+'px', 'height':Math.max(height-30, 0)+'px'});
		dung_display.setStyles({'width':width_before_divide+'px', 'height':Math.max(height-65, 0)+'px'});
		console_input.setStyle('width', (width_before_divide-10)+'px');
		dung_console.setStyle('width', width_before_divide+'px');
	} else if(console.mode == 2) {
		console_input.setStyles({'width':(parseInt(w_size.x)-16)+'px', 'left':'12px'});
		dung_console.setStyles({'width':(parseInt(w_size.x)-6)+'px', 'height':Math.max(height-46, 0)+'px'});
	} else if(console.mode == 3) {
		dung_vertical_divide.setStyle('height', Math.max(height-28, 0)+'px');
		console_input.setStyles({'height': Math.max(height-48, 0)+'px', 'width':(width_after_divide+1)+'px', 'left':(v_pos+3)+'px'});
		dung_console.setStyles({'height':Math.max(height-30, 0)+'px', 'width':width_before_divide+'px'});
		console_buttons.setStyles({'width':(width_after_divide-15)+'px'});
	}
}

function isValidCSSAttr(str) {
	for(var x=0; x<valid_css_elements.length; x++) {
		if(valid_css_elements[x] == str) {
			return true;
		}
	}
	return false;
}

// Custom sort function for comparing CSS inheritence/importance
function weightedSort(a, b) {
	if ( a.weight < b.weight )
		return 1;
	if ( a.weight > b.weight )
		return -1;
	return 0;
}

// Get an array of all attributes of a DOM node
// For example <div class="foo" style="bar"> returns
//	[ {nodeName:'class', nodeValue:'foo'}, {nodeName:'style', nodeClass:'bar'} ]
function getElementAttributes(element) {
	var attrs = new Array();
	var hold = new Element('div');
	try {
		element = new Element(element).clone().set('text', '').inject(hold);
	} catch(e) {
		hold.dispose();
		return attrs;
	}

	var groups = hold.innerHTML.match(/([a-zA-Z0-9\-]+)=("[^">]+"[ >]|[^">]+[ >])/g);

	if(groups != null && groups != false && groups.length) {
		for(var x=0; x<groups.length; x++) {
			var pair = groups[x].split('=');
			attrs[x] = {
				'nodeName':pair[0],
				'nodeValue':pair[1].replace(/"| $/g, '').replace('>', '')
			};
		}
	}
	hold.dispose();
	return attrs;
}

// Auto-complete for input fields. Suggestions come from object
function autoComplete(input, match_obj) {
	var orig_value = input.value;
	if(orig_value.length == 0) {return;}

	var match = orig_value.match(/[^ ]+($)/);
	if( match == null) {return;}

	var wordToTest = match[0];

	for(var x=0; x <match_obj.length; x++) {
		var word = match_obj[x];
		if(word == wordToTest) {
			return;
		}
		if(word.indexOf(wordToTest) == 0) {
			input.value = orig_value.replace(new RegExp(word, 'g'), word.charAt(0)+'###'+word.substr(1));
			input.value = orig_value.replace(new RegExp(wordToTest+'$'), '') + word;
			input.value = input.value.replace('###', '');

			if(input.setSelectionRange) {
				input.setSelectionRange(orig_value.length, input.value.length);
			} else {
				range = input.createTextRange();
				range.findText(word.substr(wordToTest.length), -2);
				range.select();
			}
			break;
		}
	}
}

function getCurrentStyleTag() {
	for(var x=0, children = current_dom_node.getChildren(); x<children.length; x++) {
		if(children[x].getFirst().innerHTML.toString() == 'style') {
			return children[x].getFirst();
		}
	}
}

// Add spans to tags for color hovering
function dungColorize(str) {
	var regex = '('+dung_colors.join('|')+'|#[a-zA-Z0-9]+|rgb\\([0-9\\, ]+\\))';
	return str.replace(new RegExp(regex, 'gi'), '<span class="dung_color_hover" style="border-bottom:1px dotted $1">$1</span>');
}
// Strip all HTML tags from a value
function dungStripTags(str) {
	return str.replace(/\<[^>]+\>/g, '');
}

function stopKeyDown(event) {
	var e = new Event(event).stop();
}