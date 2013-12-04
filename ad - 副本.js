if(self.frameElement && self.frameElement.tagName=="IFRAME"){
    console.log(self.frameElement);
} else {

    var iframe;
    var div;
    var divBefore;
    var img;
    var imgBefore;

    try {
        div = document.createElement('<div id="bm-div">');
        divBefore = document.createElement('<div id="bm-divBefore">');
        img = document.createElement('<img id="bm-img">');
        imgBefore = document.createElement('<img id="bm-imgBefore">');
        iframe = document.createElement('<iframe name="bmiframe">');
    } catch (ex) {
        div = document.createElement('div');
        divBefore = document.createElement('div');        
        img = document.createElement('img');
        imgBefore = document.createElement('img');
        iframe = document.createElement('iframe');
    }
    // div
    div.id = 'bm-div';
	var style = 'width:100%;position:absolute;height:100px;font-size:0; bottom:0px; left:0px;z-index:9999;';
	div.setAttribute('style',style);
    // divBefore
    divBefore.id = 'bm-divBefore';
	divBefore.setAttribute('style','height:100px;');

    // img
    img.id = 'bm-img';
    img.style = 'vertical-align:top;width:100%;';
    img.src = 'http://120.31.131.241/wifiad/ad.gif';

    // imgBefore
    imgBefore.id = 'bm-imgBefore';
    imgBefore.style = 'vertical-align:top;width:100%;';
    imgBefore.src = 'http://120.31.131.241/wifiad/ad.gif';

    // iframe
    iframe.id = 'bm-id';
    iframe.name = 'bmiframe';
	iframe.marginheight = 0;
	iframe.marginwidth = 0;
	iframe.setAttribute('style', "border:none;height:100%;width:100%;");
    iframe.src = "http://192.168.0.8:81/wifiad/iframe.html";

    
    document.body.appendChild(divBefore);
    //document.getElementById('bm-divBefore').appendChild(imgBefore);
    
    document.body.appendChild(div);
    document.getElementById('bm-div').appendChild(iframe);
    //document.getElementById('bm-div').appendChild(img);

} 
