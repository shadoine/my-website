 $(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.about-me').offset().top }, 'slow');
      return false;
    });
  });
 const emailBox = document.querySelector(".js-email p");

emailBox.addEventListener("click", () => {
  const selection = window.getSelection();
  const range = document.createRange();
  range.selectNodeContents(emailBox);
  selection.removeAllRanges();
  selection.addRange(range);
  try {
    document.execCommand("copy");
    selection.removeAllRanges();

    const original = emailBox.textContent;
    emailBox.textContent = "Copied!";
    emailBox.classList.add("success");

    setTimeout(() => {
      emailBox.textContent = original;
      emailBox.classList.remove("success");
    }, 1200);
  } catch (e) {
    console.log("Failed to copy");
  }
});
