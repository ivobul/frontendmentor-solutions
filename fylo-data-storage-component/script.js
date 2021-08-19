setInterval(function () {
  const progress = document.getElementById('file');
    if (progress.value < 81.5) {
      progress.value += 8.15;
    }
}, 1000);