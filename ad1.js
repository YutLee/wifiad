(function() {
/**
 * 检测对象是否为数组
 * @param {Object} 用于测试是否为数组的对象
 * @return {boolean}
 * @memberOf _global_
 */
function isArray(variable) {
	return Object.prototype.toString.call(variable) === '[object Array]';
}

/**
 * 获取dom对象的css
 * @param obj {Element} 元素对象
 * @param prop {Element} 元素属性
 * @return {object}
 */
function css(obj, prop) {     
    if (obj.currentStyle) {     
        return obj.currentStyle[prop];     
    }     
    else if (window.getComputedStyle) {       
        propprop = prop.replace (/([A-Z])/g, "-$1");           
        propprop = prop.toLowerCase ();        
         return document.defaultView.getComputedStyle (obj,null)[prop];     
    }      
    return null; 
}  

function getWindow() {
	var winWidth, winHeight;
	//获取窗口宽度 
	if (window.innerWidth) {
		winWidth = window.innerWidth; 
	}else if ((document.body) && (document.body.clientWidth)) {
		winWidth = document.body.clientWidth; 
	}
	//获取窗口高度 
	if (window.innerHeight) {
		winHeight = window.innerHeight; 
	}else if ((document.body) && (document.body.clientHeight)) {
		winHeight = document.body.clientHeight; 
	}
	//通过深入Document内部对body进行检测，获取窗口大小 
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) { 
		winHeight = document.documentElement.clientHeight; 
		winWidth = document.documentElement.clientWidth; 
	} 
	return {width: winWidth, height: winHeight};
}

function bind(target, type, handler) {
	if(target.addEventListener) {
		target.addEventListener(type, handler);
	}else if(target.attachEvent){
		target.attachEvent('on' + type, handler);
	}
}

function init() {
	var url = 'http://192.168.0.209/ad/iframe.html',
		prarm = '',
		src = url + prarm,
		id = 'baimi-iframe',
		adId = 'baimi-ad',
		div,
		close,
		html = document.getElementsByTagName('html')[0],
		winTop = window.top.document,
		newIframe,
		htmlHeight,
		bodyHeight,
		divHeight,
		htmlStyle,
		style,
		scale = 100 / 640; // 广告图片比例
	
	function setStyle(){ 
		var css = '#baimi-ad{background-color:#fff;position: fixed; left:0; bottom: 0; width: 100%; height: 100px; overflow: hidden;z-index:99999999999;_position:absolute; _margin-top: 0; _left:0; _top:expression(documentElement.scrollTop+(documentElement.clientHeight-this.offsetHeight))}' 
					+ '#baimi-iframe{display: block; width: 100%; height:100%; border:0; vertical-align: top;}'
					+ '#baimi-chose{font-family:Verdana;font-size:14px;position: absolute;top:0;right:0;display:inline-block;width:20px;height:20px;cursor:pointer;line-height:20px;text-align:center;color:#333;border:1px solid #ddd;background-color:#efefef;}';
		if(document.all){ 
			window.style = css; 
			document.createStyleSheet("javascript:style"); 
		}else{ 
			var style = document.createElement('style'); 
			style.type = 'text/css'; 
			style.innerHTML = css;
			document.getElementsByTagName('HEAD').item(0).appendChild(style); 
		} 
	} 
	alert(!winTop.getElementById(id) && !winTop.getElementById(adId) && !window.frameElement);
	if(!winTop.getElementById(id) && !winTop.getElementById(adId) && !window.frameElement) {
		setStyle();
		div = document.createElement('div');
		close = document.createElement('span');
		newIframe = document.createElement('iframe');
		newIframe.src = src;
		newIframe.id = id;
		newIframe.frameBorder = '0';
		newIframe.marginWidth = '0';
		newIframe.marginHeight = '0';
		newIframe.scrolling = 'no';
		newIframe.width = '100%';
		newIframe.height = '100%';
		div.id = adId;
		close.id = 'baimi-chose';
		close.innerText = 'x';
		document.body.appendChild(div);
		div.appendChild(close);
		div.appendChild(newIframe);
		divHeight = scale * getWindow().width;
		div.style.height = divHeight + 'px';
		
		bind(close, 'click', function(e) {
			div.style.display = 'none';
			html.setAttribute('style', htmlStyle);
		});
		
		window.onload = load;
	}

	function load() {
		htmlStyle = html.getAttribute('style') || '';
		htmlHeight = html.offsetHeight;
		bodyHeight = document.body.offsetHeight;
		html.style.height = Math.max(htmlHeight, bodyHeight) + div.offsetHeight + 'px';
	};
	
	function setDivHeight(e) {
		divHeight = scale * getWindow().width;
		div.style.height = divHeight + 'px';	//窗口大小改变时重新获取设置div高度
	}
	
	bind(window, 'resize', setDivHeight);
}

init();

})();