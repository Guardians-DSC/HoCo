# :clock3: O HoCo

## :grey_question: O que é o HoCo

<p align=center>
  <img width=350 src='https://user-images.githubusercontent.com/42751604/130678288-4c854469-6d06-4c23-ba23-c89b1fa7cde0.png'/>
</p>
<br/>

<div align='center'>
  <p>
  Olá! Bem-vinde ao HoCo. O HoCo é uma plataforma com objetivo de prover (inicialmente) aos alunos da graduação de Ciência da Computação na UFCG <b> uma plataforma onde ele/ela pode salvar e gerenciar as suas horas complementares do curso</b>.
  </p>
</div>

## :dart: Objetivo

A falta de praticamente qualquer conhecimento sobre horas e atividades complementares do curso é um conhecido de longa data dos alunos da graduação de Ciência da Computação na UFCG e foi pensando nisso que o *HoCo* nasceu. 

**O projeto tem como objetivo sanar essa deficiência do curso provendo um lugar onde os alunos além de salvarem suas horas possam ter conhecimento do seu funcionamento e das normas atuais do curso.**


---

## :clipboard: Índice

- [O que é o HoCo](#grey_question-o-que-é-o-hoco)
- [Objetivo](#dart-objetivo)
- [Índice](#clipboard-índice)
- [Pré-requisitos](#gear-pré-requisitos)
- [Como executar o projeto](#running-como-executar-o-projeto)
- [Como contribuir](#handshake-como-contribuir)
- [Mantenedores](#pushpin-mantenedores)
- [Licença e Copyright](#pencil2-licença-e-copyright)


## :gear: Pré-requisitos

Para executar o projeto você precisa ter instalado na sua máquina o `docker` e `docker-compose`. Abaixo estão alguns links úteis para a instalação dessas dependências:

- [Link para instalação do docker](https://docs.docker.com/engine/install/ubuntu/)
- [Link para instalação do docker compose](https://docs.docker.com/compose/install/)

## :running: Como executar o projeto

**Siga os seguintes passos para a execução do projeto:**

1. Fazer o *clone* do projeto e dos seus submodulos de frontend e backend

```bash
  git clone --recursive-submodules https://github.com/Guardians-DSC/HoCo
```

2. Copiar variáveis de ambiente que estão dentro do arquivo `.env.example`

```bash
  cp .env.example .env
```

3. Executar o arquivo `docker-compose.yml` na raiz do projeto

```bash
  docker-compose up
```

Pronto! Simples assim e você já consegui executar localmente o projeto. Um aba se abrirá no seu navegador padrão com o projeto sendo executado localmente.

## :handshake: Como contribuir

Caso você esteja interessada(o)(e) no projeto e queira contribuir para algum dos projetos do HoCo por favor dê uma olhada nas [**issues**](https://github.com/Guardians-DSC/HoCo/issues) de cada projeto, se você achou uma issue que lhe interessa leia os documentos de **[Código de conduta]()** e **[Contribuindo]()** para saber mais detalhes.

⚠️ Ainda estamos trabalhando no projeto, caso você queira acompanhar o avanço do repositório dê um estrelinha ⭐ para você não perder as atualizações do rep.

## :pushpin: Mantenedores

- [Franciclaudio Dantas](https://github.com/claudiodantas)
- [Gustavo Farias](https://github.com/GusttaFS)
- [Leandra Oliveira](https://github.com/LeandraOS)
- [Rodrigo Eloy](https://github.com/RodrigoEC)

## :pencil2: Licença e Copyright

MIT © [Licença](https://github.com/Guardians-DSC/HoCo/blob/main/LICENSE)

<br/>
<div align=center>
  <p><i>No mais é isso! Obrigado por ler até aqui, espero que vocẽ tenha gostado do projeto!</i></p>
  <img width=400 src='https://user-images.githubusercontent.com/42751604/125959482-99171781-d212-4bc2-af3c-1d0adcf813dd.gif'/>
</div>
