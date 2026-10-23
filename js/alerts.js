export function redirectAlert(message, icono, url) {
    let timerInterval;
    Swal.fire({
        title: message,
        html: "esta ventana se cierrara en <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        icon: icono,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            window.location.href = url
        }
    })
}