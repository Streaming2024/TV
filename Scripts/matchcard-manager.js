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
