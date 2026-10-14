const btn_reservar = document.getElementById("reservar");
const caixaCarregando = document.getElementById("caixa-carregando");

btn_reservar.form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    caixaCarregando.style.display = "flex";
    setTimeout(() => {
        caixaCarregando.style.display = "none";
        alert("Reserva realizada com sucesso! Entraremos em contato em breve.");
    }, 2000);
});
