import { Category } from "../types/category";
import { Local } from "../types/local";

type Data = {
  categories: Category[];
  locais: Local[];
};

export const data: Data = {
  categories: [
    {
      id: 1,
      title: "Praias",
      cover:
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-brasil.jpg",
    },
    {
      id: 2,
      title: "Patrimônios Culturais",
      cover:
        "https://tudocondo.com.br/assets/static/condominio-de-sitios-1-1024x576.b18189f.700baa10c618caaa5a57e3ee3de306e4.jpg",
    },
    {
      id: 3,
      title: "Natureza e Aventura",
      cover:
        "https://static.wixstatic.com/media/954288_33a1dc3db3e040eaad9d9d7bd75d4c11~mv2.jpg/v1/fill/w_776,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/954288_33a1dc3db3e040eaad9d9d7bd75d4c11~mv2.jpg",
    },
  ],
  locais: [
    {
      id: 1,
      idCategory: 1,
      image:
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2022/05/praia-do-forte-capa-3-820x430.jpg",
      title: "Praia do Forte",
      description: "Famosa pelas tartarugas marinhas e suas águas tranquilas.",
      km: 274,
    },
    {
      id: 2,
      idCategory: 2,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/43/ac/8f/pelourinho.jpg?w=1200&h=-1&s=1",
      title: "Pelourinho",
      description:
        "Centro histórico de Salvador, conhecido pela arquitetura colonial e rica história.",
      km: 368,
    },
    {
      id: 3,
      idCategory: 3,
      image:
        "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/10/chapada-diamantina-capa2019-02.jpg",
      title: "Chapada Diamantina",
      description:
        "Destino de aventura, com trilhas, cachoeiras e paisagens impressionantes.",
      km: 220,
    },
    {
      id: 4,
      idCategory: 1,
      image:
        "https://verdesmarias.eco.br/wp/media/2023/03/Boipeba-2-1280x720-1.jpeg",
      title: "Ilha de Boipeba",
      description: "Paraíso natural, com praias paradisíacas e mar cristalino.",
      km: 294,
    },
    {
      id: 5,
      idCategory: 2,
      image:
        "https://www.bahiatransportes.com.br/wp-content/uploads/elementor/thumbs/fr02-1-qa9umbkott5gorr4p0q38il6w5bss99xbvfptqq6i8.jpg",
      title: "Farol da Barra",
      description:
        "Ponto turístico em Salvador, famoso por sua vista deslumbrante do mar.",
      km: 372,
    },
    {
      id: 6,
      idCategory: 3,
      image:
        "https://www.viagenscinematograficas.com.br/wp-content/uploads/2021/12/Morro-de-SP-O-que-Fazer-Praias-14.jpg",
      title: "Morro de São Paulo",
      description:
        "Localizado na Ilha de Tinharé, combina aventura e belas praias.",
      km: 268,
    },
    {
      id: 7,
      idCategory: 1,
      image:
        "https://i0.wp.com/portonews.net/wp-content/uploads/2024/01/cidadebaiana_aloalobahia.jpeg?fit=990%2C763&ssl=1",
      title: "Porto Seguro",
      description:
        "Berço do descobrimento do Brasil, com belas praias e festas vibrantes.",
      km: 535,
    },
    {
      id: 8,
      idCategory: 2,
      image:
        "https://tourb.com.br/img/lugares/salvador/igreja-de-sao-francisco.jpg",
      title: "Igreja de São Francisco",
      description:
        "Uma das mais importantes construções barrocas do Brasil, localizada em Salvador.",
      km: 369,
    },
    {
      id: 9,
      idCategory: 3,
      image:
        "https://maequeviaja.com.br/wp-content/uploads/2017/08/Artigo_Riachinho_1_Paula-Porto.jpg",
      title: "Vale do Capão",
      description:
        "Refúgio na Chapada Diamantina, ideal para quem busca tranquilidade e natureza.",
      km: 233,
    },
    {
      id: 10,
      idCategory: 1,
      image:
        "https://itacareparadise.com.br/wp-content/uploads/02_blogpost_praias_desertas-2.jpg",
      title: "Praia de Itacaré",
      description: "Praia famosa pelo surf e suas belas paisagens naturais.",
      km: 199,
    },
    {
      id: 11,
      idCategory: 2,
      image: "https://tourb.com.br/img/lugares/salvador/elevador-lacerda.jpg",
      title: "Elevador Lacerda",
      description: "Símbolo de Salvador, conecta a Cidade Baixa à Cidade Alta.",
      km: 368,
    },
    {
      id: 12,
      idCategory: 3,
      image:
        "https://static.wixstatic.com/media/ff1499_5e81e11c0f774022a57b7634240fdaa2~mv2.jpg/v1/fill/w_640,h_500,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ff1499_5e81e11c0f774022a57b7634240fdaa2~mv2.jpg",
      title: "Cachoeira da Fumaça",
      description:
        "Uma das maiores cachoeiras do Brasil, na Chapada Diamantina.",
      km: 250,
    },
    {
      id: 13,
      idCategory: 1,
      image:
        "https://hoteisquintadosol.com/wp-content/uploads/2018/10/praia-do-espelho-19-1024x576.jpg",
      title: "Praia do Espelho",
      description:
        "Praia paradisíaca, considerada uma das mais belas do Brasil.",
      km: 504,
    },
    {
      id: 14,
      idCategory: 2,
      image: "https://tourb.com.br/img/lugares/salvador/igreja-do-bonfim.jpg",
      title: "Igreja de Bonfim",
      description:
        "Igreja icônica de Salvador, local de devoção e famosa pelas fitinhas.",
      km: 370,
    },
    {
      id: 15,
      idCategory: 3,
      image:
        "https://www.refugionaserra.com.br/wp-content/uploads/2021/10/gruta-da-lapa-doce-03.jpg",
      title: "Gruta da Lapa Doce",
      description: "Uma das maiores cavernas da Chapada Diamantina.",
      km: 290,
    },
    {
      id: 16,
      idCategory: 1,
      image:
        "https://imgmd.net/images/v1/guia/1605776/praia-da-ponta-do-muta.jpg",
      title: "Praia de Ponta do Mutá",
      description:
        "Praia tranquila, ideal para relaxar e apreciar o pôr do sol.",
      km: 320,
    },
    {
      id: 17,
      idCategory: 2,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/8/8f/Farol_da_Barra_com_nuvens_ao_fundo.jpg",
      title: "Forte de Santo Antônio",
      description:
        "Construção histórica que defendeu Salvador no período colonial.",
      km: 370,
    },
    {
      id: 18,
      idCategory: 3,
      image: "https://imgmd.net/images/v1/guia/1623506/poco-encantado.jpg",
      title: "Poço Encantado",
      description:
        "Lago subterrâneo de águas cristalinas na Chapada Diamantina.",
      km: 210,
    },
    {
      id: 19,
      idCategory: 1,
      image:
        "https://pousadacantodosol.com.br/wp-content/uploads/2021/06/Praia-Taipu-de-Fora-em-Barra-Grande.jpg",
      title: "Praia de Taipu de Fora",
      description: "Praia com piscinas naturais e cenário paradisíaco.",
      km: 250,
    },
    {
      id: 20,
      idCategory: 3,
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/a3/c2/73/abrolhos.jpg?w=1200&h=-1&s=1",
      title: "Parque Nacional de Abrolhos",
      description: "Arquipélago com rica vida marinha, ideal para mergulho.",
      km: 650,
    },
  ],
};
