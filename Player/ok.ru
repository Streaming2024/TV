
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href='https://www.yosin-tv.net/favicon.ico' rel='icon' type='image/x-icon'/>
    <title> MID Player</title>
    <style>
                     /*Font Library https://fonts.google.com/ */
   @font-face{font-family:&#39;Neo Sans Arabic&#39;;font-style:normal;font-weight:normal;font-display:swap;src:local(&#39;Neo Sans Arabic&#39;),url(&#39;https://cdn.statically.io/gh/yallashoot808/yalla-shoot-new/6a47ce1e/NeoSansArabic.woff&#39;) format(&#39;woff&#39;)}

            
        /* Add your custom styles for the iframe container */
        #player-container {
            position: relative;
            overflow: hidden;
            padding-top: 56.25%; /* 16:9 aspect ratio (change based on your player's aspect ratio) */
        }

        #player-iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            border: 0;
        }
    </style>
  
  
    <style>
    #player-container {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: #000;
      color: #fff;
      overflow: hidden;
    }
    #iframe-iframe, #jwPlayer {
      height: 100vh !important;
      padding: 0;
      margin: 0;
    }
    body {
      height: 100vh;
      margin: 0;
      padding: 0;
    }
    #container {
      position: absolute;
      text-align: center;
    }
    video {
      outline: 0;
    }
    #text {
      position: fixed;
      border: 0;
      left: 0;
      width: 100%;
      color: #fff;
      bottom: 50px;
      text-align: center;
      font-family: tahoma;
      font-size: 20px;
      z-index: 9999;
    }
  </style>
  
</head>
<body>

<div id="player-container">
    <iframe id="player-iframe" allow="autoplay" allowfullscreen>  </iframe>
            <div id="text">www.yono-tv.com</div> 
</div>
	
<script>
    // Get the custom ID from the URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const customID = urlParams.get('yonotv');

    // Replace (custome_ID) in the original URL with the custom ID
    const originalURL = `//ok.ru/videoembed/${customID}?nochat=1&autoplay=1`;

    // Set the iframe source to the modified URL
    document.getElementById('player-iframe').src = originalURL;
</script>



	
	
</body>
</html>
