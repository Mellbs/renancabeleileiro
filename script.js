
// CONFIGURAÇÃO DO WHATSAPP

const telefone = "55019971124012"; // Substitua pelo número de telefone desejado, incluindo o código do país (ex: 55 para Brasil)

const mensagem = "Olá, Renan! Gostaria de agendar um horário. Poderia me informar os horários disponíveis?";

// GERA O LINK DO WHATSAPP

const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

// ADICIONA O LINK A TODOS OS BOTÕES

document.querySelectorAll(".btn-whatsapp").forEach((botao) => {
    botao.href = linkWhatsApp;
    botao.target = "_blank";
    botao.rel = "noopener noreferrer";
});
