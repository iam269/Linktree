document.addEventListener('DOMContentLoaded', () => {
  // Detectare device
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  const qrContainer = document.getElementById('qrContainer');

  if (!isMobile) {
    // Creare QR doar pe PC
    new QRCode(qrContainer, {
      text: window.location.href,
      width: 120,
      height: 120,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } else {
    // Ascunde containerul pe mobil
    qrContainer.style.display = 'none';
  }

  // Share button
  const shareBtn = document.getElementById('shareBtn');
  shareBtn.addEventListener('click', () => {
    if (navigator.share) {
      navigator.share({
        title: 'Cristian Dascălu - Linktree',
        url: window.location.href
      }).catch(console.error);
    } else {
      alert('Funcția de distribuire nu este suportată în acest browser.');
    }
  });
});
