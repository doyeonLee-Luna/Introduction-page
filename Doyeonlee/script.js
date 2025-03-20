document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY; // 현재 스크롤 위치

    function applyFadeEffect(element, fadeStart, fadeEnd) {
        if (!element) return;

        console.log(`Checking fade for ${element.id || element.className}, Scroll: ${scrollPosition}, Range: ${fadeStart}-${fadeEnd}`);

        if (scrollPosition < fadeStart) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        } else if (scrollPosition >= fadeEnd) {
            element.style.opacity = "0";
            element.style.transform = "translateY(-50px)"; // 위로 이동
        } else {
            let opacity = 1 - (scrollPosition - fadeStart) / (fadeEnd - fadeStart);
            opacity = Math.max(opacity, 0); // 최소 0 유지

            element.style.opacity = opacity.toString();
            element.style.transform = `translateY(${(1 - opacity) * -50}px)`; // 위로 이동
        }
    }

    function applyAppearEffect(element, appearStart, appearEnd) {
        if (!element) return;

        console.log(`Checking appear for ${element.id || element.className}, Scroll: ${scrollPosition}, Range: ${appearStart}-${appearEnd}`);

        if (scrollPosition < appearStart) {
            element.style.opacity = "0";
            element.style.transform = "translateY(50px)"; // 아래에서 시작
        } else if (scrollPosition >= appearEnd) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        } else {
            let opacity = (scrollPosition - appearStart) / (appearEnd - appearStart);
            opacity = Math.min(opacity, 1); // 최대 1 유지

            element.style.opacity = opacity.toString();
            element.style.transform = `translateY(${(1 - opacity) * 50}px)`; // 아래에서 위로 이동
        }
    }

    // 🏷️ fade out + fade in 적용 (서서히 사라지고 나타남)
    // myFluffySection이 스크롤 1800 이전에 사라짐
   

    // 🏷️ fade out + fade in 적용 (서서히 사라짐)
    applyFadeEffect(document.querySelector(".container"), 100, 300);
    applyFadeEffect(document.querySelector(".sign-image"), 100, 300);

    // 🏷️ fade in 적용 (서서히 나타남)
    applyAppearEffect(document.querySelector("#myFluffySection"), 500, 700);
    applyFadeEffect(document.querySelector("#myFluffySection"), 1600, 1800);
    applyAppearEffect(document.querySelector("#mbtiSection"), 1800, 2000);
    applyFadeEffect(document.querySelector("#mbtiSection"), 2300, 2500); // 범위 확장
    applyAppearEffect(document.querySelector(".fcontainer"), 2600, 2700);


});











/* #### typing */
const content = "Thank you for visiting !";
const text = document.querySelector(".title"); // .title 클래스를 가진 첫 번째 요소 선택
let textIdx = 0;

function typing() {

    // 문자열이 끝날 때까지 타이핑 진행
    if (textIdx < content.length) {
        let txt = content[textIdx++];
        text.innerHTML += txt;
    } else {
        // 타이핑이 끝났을 때 텍스트를 지우고 다시 시작
        setTimeout(() => {
            text.innerHTML = "";  // 텍스트 지우기
            textIdx = 0;  // 텍스트 인덱스 초기화
        }, 500);  // 텍스트가 완전히 타이핑된 후 500ms 후에 텍스트를 지우기
    }
}

// 타이핑 효과를 일정 시간 간격으로 실행
setInterval(typing, 200);  // 200ms 간격으로 타이핑 실행


// 맨 위로 스크롤하는 함수
document.getElementById("scrollToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
