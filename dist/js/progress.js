function loadProgress(id, targetValue, duration = 3000) {
    const progress = document.getElementById(id);
    const startTime = performance.now();
    const startValue = 0;

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progressRatio = Math.min(elapsed / duration, 1); // clamp to 1

        const easedValue = Math.round(startValue + (targetValue - startValue) * easeOutCubic(progressRatio));
        progress.value = easedValue;

        if (progressRatio < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}


function onScrollHalfPage() {
    const scrollTop = window.scrollY || window.pageYOffset;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const scrolledPercent = (scrollTop + windowHeight) / fullHeight * 100;

    if (scrolledPercent >= 70) {
        loadProgress("html", 100);
        loadProgress("css", 90);
        loadProgress("express", 90);
        loadProgress("react", 60);
        loadProgress("javascript", 95);
        loadProgress("linux", 55);
        window.removeEventListener("scroll", checkScroll);
    }
}

function checkScroll() {
    onScrollHalfPage();
}

window.addEventListener("scroll", checkScroll);