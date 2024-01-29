document.addEventListener('DOMContentLoaded', function () {
  const video = document.querySelector('.video');
  const openInNewTabButton = document.getElementById('openInNewTab');

  openInNewTabButton.addEventListener('click', function () {
      // Get the video source URL
      const videoSource = video.querySelector('source').getAttribute('src');

      // Open the video in a new tab
      window.open(videoSource, '_blank');
  });
});
