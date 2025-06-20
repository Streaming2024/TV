var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Mozilla: function() {
       return navigator.userAgent.match(/Mozilla/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
	Vivo: function() {
		return navigator.userAgent.match(/Vivo/i);
    },
    MacOSX: function() {
        return navigator.userAgent.match(/Macintosh/i);
    },
    Chrome: function() {
	return navigator.userAgent.match(/Chrome/i);
    },	
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() || isMobile.MacOSX());
    }
};

var embedded = "hembedplayer";
if (isMobile.any()){
    //embedded = "membedplayer";
}
if 	(isMobile.iOS() || isMobile.Vivo()){
    //embedded = "iembedplayer";
}

if (typeof(width) == 'undefined') width = 480;
if (typeof(height) == 'undefined') height = 320;
if (width < 480) width = 480;
if (height < 320) height = 320;
if (width < height) height = width;
if (isMobile.any()){
    var f_width = "100%";
	var f_height = "100%";
} else {
	f_height = height;
	f_width = width;
}
document.write('<iframe width='+f_width+' height='+f_height+' scrolling=no frameborder=0 scrolling=no allowtransparency=true marginwidth="0" marginheight="0" sandbox="allow-scripts allow-forms allow-same-origin" src=https://new.allover.top/'+embedded+'/'+channel+'/'+g+'/'+width+'/'+height+' allowfullscreen ></iframe>')
