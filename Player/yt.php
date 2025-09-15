<?php
// Get video ID from URL (?url=xxxx)
$videoId = isset($_GET['url']) ? $_GET['url'] : 'dnPu5t4CGJM'; // default video
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>YouTube Player</title>
    <link rel="stylesheet" href="https://cdn.plyr.io/3.7.8/plyr.css" />
    <style>
        body {
            margin: 0;
            background: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .plyr__video-embed {
            width: 100vw;
            height: 100vh;
        }
        .live-indicator {
            position: absolute;
            top: 20px;
            left: 20px;
            background: #ff0000;
            color: #fff;
            padding: 5px 10px;
            border-radius: 4px;
            font-weight: bold;
            display: none;
            z-index: 10;
        }
        .player-info {
            position: absolute;
            top: 20px;
            right: 20px;
            color: #fff;
            background: rgba(0,0,0,0.7);
            padding: 5px 10px;
            border-radius: 4px;
            display: none;
            z-index: 10;
        }
    </style>
</head>
<body>
    <div class="live-indicator">LIVE</div>
    <div class="player-info" id="player-info"></div>

    <div id="player" 
        data-plyr-provider="youtube" 
        data-plyr-embed-id="<?php echo htmlspecialchars($videoId); ?>"
        data-poster="https://nirutv.online/logo/image.png">
    </div>

    <script src="https://cdn.plyr.io/3.7.8/plyr.polyfilled.js"></script>
    <script>
        const player = new Plyr('#player', {
            autoplay: true,
            muted: false,
            controls: [
                'play-large','rewind','play','fast-forward','progress',
                'current-time','duration','mute','volume','captions',
                'settings','pip','airplay','fullscreen'
            ],
            settings: ['quality','speed','captions'],
            speed: { selected: 1, options: [0.5, 1, 1.5, 2] },
            quality: {
                default: 'auto',
                options: ['auto',1080,720,480,360],
                forced: true
            },
            youtube: {
                noCookie: true,
                rel: 0,
                modestbranding: 1,
                iv_load_policy: 3
            }
        });

        const liveIndicator = document.querySelector('.live-indicator');
        const playerInfo = document.getElementById('player-info');
        let isLiveStream = false;

        function formatTime(seconds) {
            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds % 3600) / 60);
            const s = Math.floor(seconds % 60);
            return [h, m > 9 ? m : h ? '0' + m : m || '0', s > 9 ? s : '0' + s]
                .filter(Boolean)
                .join(':');
        }

        player.on('ready', () => {
            setInterval(() => {
                if (!isLiveStream && player.duration > 0) {
                    const remaining = player.duration - player.currentTime;
                    playerInfo.style.display = 'block';
                    playerInfo.textContent = `${formatTime(remaining)} remaining`;
                }
            }, 1000);
        });
    </script>
</body>
</html>
