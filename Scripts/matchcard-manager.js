document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".widget-content");
  const matches = Array.from(container.querySelectorAll(".match-event"));
  const now = new Date();

  matches.sort((a, b) => {
    const aStart = new Date(a.querySelector(".match-date").dataset.start);
    const bStart = new Date(b.querySelector(".match-date").dataset.start);
    const aEnd = new Date(a.querySelector(".match-date").dataset.gameends);
    const bEnd = new Date(b.querySelector(".match-date").dataset.gameends);

    const aEnded = now > aEnd;
    const bEnded = now > bEnd;

    if (aEnded && !bEnded) return 1;
    if (!aEnded && bEnded) return -1;

    return aStart - bStart;
  });

  matches.forEach(match => container.appendChild(match));
});



 <!--Don't remove this code-->
<script src="https://cdnjs.cloudflare.com/ajax/libs/luxon/1.28.0/luxon.min.js"></script>

<script>
function updateCountdown(eventStartDateTime, eventEndDateTime, countdownClock) {
    var now = luxon.DateTime.utc();
    var startDistance = eventStartDateTime.diff(now).valueOf();
    var endDistance = eventEndDateTime.diff(now).valueOf();

    if (startDistance > 0) {
        var countdownInterval = setInterval(function () {
            startDistance -= 1000; // Subtract 1 second every second
            if (startDistance <= 0) {
                clearInterval(countdownInterval); // Clear the interval when countdown reaches 0
                countdownClock.innerHTML = "Live Now";
            } else {
                var startDuration = getTimeRemaining(startDistance);
                countdownClock.innerHTML = formatDuration(startDuration);
            }
        }, 1000);
    } else if (endDistance > 0) {
        countdownClock.innerHTML = "Live Now";
    } 
}

function getTimeRemaining(distance) {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function formatDuration(duration) {
    return duration.days + "d " + duration.hours + "h " + duration.minutes + "m " + duration.seconds + "s";
}

function createCountdown(countdownElement) {
    var startDateTime = luxon.DateTime.fromISO(countdownElement.getAttribute("data-start"));
    var endDateTime = luxon.DateTime.fromISO(countdownElement.getAttribute("data-gameends"));

    updateCountdown(startDateTime, endDateTime, countdownElement);
}

// Call createCountdown for each countdown clock with the class "match-date"
var countdownElements = document.querySelectorAll(".match-date");
countdownElements.forEach(function (element) {
    createCountdown(element);
});


    </script>
<script>
        // Your JavaScript code here
        function convertToUserTimezone(kathmanduTime) {
            var userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            var kathmanduOffset = 5.75 * 60; // Kathmandu timezone offset in minutes (+5 hours and 45 minutes)
            var userOffset = new Date().getTimezoneOffset(); // User's timezone offset in minutes (negative for behind UTC)
            var offsetDifference = (userOffset + kathmanduOffset) * 60 * 1000; // Convert to milliseconds
    
            var userTime = new Date(kathmanduTime.getTime() - offsetDifference);
    
            var options = {
                month: 'short', // Display month in abbreviated format (e.g., Jan, Feb)
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            };
    
            return userTime.toLocaleString(undefined, options);
        }
    
        // Get all elements with class "eventDateInKathmandu" and update their text content
        var eventDatesInKathmandu = document.querySelectorAll(".eventDateInKathmandu");
    
        for (var i = 0; i < eventDatesInKathmandu.length; i++) {
            var matchDateElement = eventDatesInKathmandu[i].previousElementSibling;
            var eventDateTime = matchDateElement.getAttribute("data-start");
    
            if (eventDateTime) {
                var userTimezone = convertToUserTimezone(new Date(eventDateTime));
                eventDatesInKathmandu[i].textContent = userTimezone;
            }
        }
    </script>
