var togglebtn = document.querySelector('.togglebtn');
var navlinks = document.querySelector('.navlinks');
const translation = {
    en: {
        title_site: "Portfolio",
        text_home: "Home",
        text_resume: "Resume",
        text_projects: "Projects",
        text_contact: "Contact",
        text_h5: "Hi, I'm",
        text_field: "Undergraduate Student Researcher",
        text_description: "As an undergraduate student in Computer Engineering at the Pontifical Catholic University of Campinas (PUC-Campinas), I am passionate about technology and always seeking new challenges and opportunities to learn, grow, and develop.",
        title_text: "About me",
        text_description2: "Currently, I am studying in my sixth semester at PUC-CAMPINAS, and I have learned solve many problems through projects during my undergraduate program. The developed projects include: creating a program that orders different-sized vectors and calculates the processing time of the sorting; a van management system; the implementation of a coprocessor on the R8 processor; and other projects.",
        text_description3: "As a result of these experiences, I can say that my graduation is teaching me to improve as a person and professional, and helping me develop skills to solve complex problems.",
        text_description4: "Besides working on this projects, I am doing a Scientific Initiation project, which involves research and implementation on calculating the amplitude of hand motion. The objective is to find a solution to precisely quantify hand motion. This technology can be used by physical therapists.",
        text_description5: "I know that this course is very challenging, but I love it. I feel that it is the right path for me, and I want to love to work in this field.",
        text_download_cv: "Download CV",
        text: "Projects",
        project_title: "Vector Manipulation and Amplitude Calculation of the Hands",
        text_description6: "The objetive of this project is develop and studing methods to calculate the amplitude of the hands. I am developing this project in the SISI laboratory at the University Pontifical Catholic of Campinas. All this made part of my Scientific Initiation.",
        text_repository: "In progress",
        project_title2: "Implementation of the MPU in R8 Processor",
        text_description7: "This project was developed in the discipline of Computer Architecture. The objective was to create a co-processor to calculate and manipulate matrices. For more details about the project, refer to the repository.",
        text_repository2: "Repository",
        text_contact: "Contact",
        title_text2: "Contact me", 
        text_description8: "If you want to contact me, you can send me an email or follow me on social media.",
        input_name: "Enter your name",
        input_email: "Enter your e-mail",
        input_message: "Enter your message",
        btn: "Send",
        text_footer: "All rights are reserved.",
    },
    pt_br: {
        title_site: "Portfólio",
        text_home: "Início",
        text_resume: "Resumo",
        text_projects: "Projetos",
        text_contact: "Contato",
        text_h5: "Olá, eu sou",
        text_field: "Estudante e Pesquisadora",
        text_description: "Como graduanda do curso de Engenharia da Computação na Pontifícia Universidade Católica de Campinas, sou apaixonada por tecnologia e em busca de novos desafios e oportunidades para aprender, crescer e desenvolver.",
        text_download_cv: "Baixar CV",
        title_text: "Sobre mim",
        text_description2: "Atualmente, estou cursando o sexto semestre na PUC-Campinas e, durante o curso de graduação, aprendi (e continuo aprendendo) a resolver diversos problemas por meio de projetos. Dentre os projetos já realizados, destaco alguns: a criação de um programa que ordenava vetores de diferentes tamanhos e calculava o tempo de processamento da ordenação; um sistema gerenciador de vans; a implementação de um coprocessador no processador R8; além de outros projetos que envolveram diversos conhecimentos.",
        text_description3: "A partir dessas experiências, posso destacar a importância da graduação no meu desenvolvimento pessoal e profissional, especialmente na habilidade de resolver e solucionar problemas complexos.",
        text_description4: "Além dos projetos realizados durante a graduação, destaco um projeto que estou desenvolvendo na minha Iniciação Científica. Trata-se de uma pesquisa e desenvolvimento para calcular a amplitude de movimentos das mãos, com o objetivo de encontrar uma solução para quantificar com precisão o movimento das mãos. A aplicação dessa tecnologia pode ser utilizada, por exemplo, por fisioterapeutas.",
        text_description5: "Dito tudo isso, tenho consciência de que este curso é muito desafiador, mas eu o amo. Sinto que estou no caminho certo e busco futuramente trabalhar nessa área da tecnologia.",
        text: "Projetos",
        project_title: "Manipulação de Vetores e Cálculo de Amplitude das Mãos",
        text_description6: "O objetivo deste projeto é desenvolver e estudar métodos para calcular a amplitude das mãos. Estou desenvolvendo este projeto no laboratório SISI da Pontifícia Universidade Católica de Campinas. Tudo isso faz parte da minha Iniciação Científica.",
        text_repository: "Em progresso",
        project_title2: "Implementação do MPU no Processador R8",
        text_description7: "Este projeto foi desenvolvido na disciplina de Arquitetura de Computadores. O objetivo era criar um co-processador para calcular e manipular matrizes. Para mais detalhes sobre o projeto, consulte o repositório.",
        text_repository2: "Repositório",
        text_contact: "Contato",
        title_text2: "Entre em contato",
        text_description8: "Se você deseja entrar em contato comigo, pode me enviar um e-mail ou me seguir nas redes sociais.",
        input_name: "Digite seu nome",
        input_email: "Digite seu e-mail",
        input_message: "Digite sua mensagem",
        btn: "Enviar",
        text_footer: "Todos os direitos reservados.",
    }
};

const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

function applyTranslation(language) {
    document.getElementById('title_site').textContent = translation[language].title_site;
    document.getElementById('text_home').textContent = translation[language].text_home;
    document.getElementById('text_resume').textContent = translation[language].text_resume;
    document.getElementById('text_projects').textContent = translation[language].text_projects;
    document.getElementById('text_contact').textContent = translation[language].text_contact;
    document.getElementById('text_h5').textContent = translation[language].text_h5;
    document.getElementById('text_field').textContent = translation[language].text_field;
    document.getElementById('text_description').textContent = translation[language].text_description;
    document.getElementById('text_download_cv').textContent = translation[language].text_download_cv;
    document.getElementById('title_text').textContent = translation[language].title_text;
    document.getElementById('text').textContent = translation[language].text;
    document.getElementById('text_description2').textContent = translation[language].text_description2;
    document.getElementById('text_description3').textContent = translation[language].text_description3;
    document.getElementById('text_description4').textContent = translation[language].text_description4;
    document.getElementById('text_description5').textContent = translation[language].text_description5;
    document.getElementById('project_title').textContent = translation[language].project_title;
    document.getElementById('project_title2').textContent = translation[language].project_title2;
    document.getElementById('text_description6').textContent = translation[language].text_description6;
    document.getElementById('text_repository').textContent = translation[language].text_repository;
    document.getElementById('text_repository2').textContent = translation[language].text_repository2;
    document.getElementById('text_contact').textContent = translation[language].text_contact;
    document.getElementById('title_text2').textContent = translation[language].title_text2;
    document.getElementById('text_description7').textContent = translation[language].text_description7;
    document.getElementById('text_description8').textContent = translation[language].text_description8;
    document.getElementById('input_name').setAttribute('placeholder', translation[language].input_name);
    document.getElementById('input_email').setAttribute('placeholder', translation[language].input_email);
    document.getElementById('input_message').setAttribute('placeholder', translation[language].input_message);
    document.querySelector('.btn-group-contact').textContent = translation[language].btn;
    document.getElementById('footer_translation').textContent = translation[language].text_footer;

    const cvButton = document.getElementById('text_download_cv');
    if (language === 'pt_br') {
        cvButton.href = 'curriculum/CV_Taynara.pdf';
    }
    document.getElementById('language-selector').value = language;
}

document.getElementById('language-selector').addEventListener('change', function () {
    const selectedLanguage = this.value;
    applyTranslation(selectedLanguage);
    sessionStorage.setItem("language-selector", selectedLanguage);
});

window.addEventListener('load', function () {
    const savedLanguage = sessionStorage.getItem('language-selector');
    applyTranslation(savedLanguage || 'pt_br');
});

togglebtn.addEventListener("click", function () {
    this.classList.toggle('click');
    navlinks.classList.toggle('open');
});
