<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>TV Player</title>
    <meta name="referrer" content="no-referrer">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script src="/Player/jwplayer.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/disable-devtool@latest"></script>
    <script>
        function getParam(sname) {
            var params = location.search.substr(location.search.indexOf("?") + 1);
            var sval = params.replace("url=", "");
            return sval;
        }
        var sv = getParam("sv");

        $(document).ready(function() {
            $("img").on("contextmenu", function() {
                return false;
            });
        });

        function init() {
            // Get the `src` parameter from the URL.
            const urlParams = new URLSearchParams(window.location.search);
            const srcParam = urlParams.get('src');
            const videoUrl = urlParams.get('url');

            if (srcParam) {
                // Show the iframe player
                document.getElementById('iframe').src = srcParam;
                document.getElementById('jwPlayer').style.display = 'none';
            } else if (videoUrl) {
                // Show the JW Player
                jwplayer("jwPlayer").setup({
                    file: videoUrl,
                });
                document.getElementById('iframe').style.display = 'none';
            }

            // Wait until the iframe is loaded and then unmute
            document.getElementById('iframe').onload = function() {
                var iframe = document.getElementById('iframe').contentWindow;
                iframe.postMessage('{"event":"command","func":"unMute","args":""}', '*');
            };
        }
    </script>
    <style>
        #container {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: #8a0000;
            color: #fff;
            overflow: hidden;
        }
        #iframe, #jwPlayer {
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
    <style>
        .video-js {
            width: 100%;
            height: 100%;
        }
        body {
            text-align: center;
            margin: 0px;
        }
        #videojs {
            width: 100%;
            height: 100%;
        }
        .streaming-dimensions {
            width: 100% !important;
            height: 100% !important;
        }
    </style>
</head>
<body onload="init()">
    <iframe id="iframe" allowfullscreen="allowfullscreen" allowtransparency="true" frameborder="0" height="100%" marginheight="0" marginwidth="0" sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation" src width="100%"></iframe>
    <div id="jwPlayer"></div>
    <div id="text">www.yono-tv.com</div>
</body>
</html>
