document.getElementById("formulario-teste").addEventListener("submit", function (e) {
  e.preventDefault();
  const dados = Object.fromEntries(new FormData(e.target));

  const texto = `
MEMORIAL DESCRITIVO - CASO DE TESTE

Projeto: ${dados.projeto}

Contextualização Geral:
O presente relatório descreve o caso de teste referente ao projeto "${dados.projeto}", abordando detalhadamente seu contexto funcional e técnico. ${dados.contextualizacao}

Plano e Suíte de Testes:
${dados.plano}

Nome do Caso de Teste:
${dados.nome}

Prioridade: ${dados.prioridade}
Status: ${dados.status}

Executor Responsável: ${dados.executor}
Data de Criação: ${dados.data}

Pré-condições:
${dados.pre}

Passos para Execução:
${dados.passos}

Critérios de Aceitação:
${dados.criterios}

Resultado Obtido:
${dados.resultado}

Observações Técnicas:
${dados.observacoes}

Comentários Complementares:
${dados.comentarios}

Ferramenta de Automação: ${dados.ferramenta}
Nome do Arquivo do Script: ${dados.arquivo}

Código Completo do Script:
------------------------------------------------------------
${dados.codigo}
------------------------------------------------------------

Conclusão:

Este memorial descritivo sintetiza o escopo, a criticidade e os detalhes técnicos do caso de teste apresentado, ressaltando sua importância fundamental para garantir a qualidade e a estabilidade da plataforma testada. A elaboração cuidadosa deste relatório, enriquecido com contextualizações robustas, tem o objetivo de fornecer uma base sólida para o entendimento, a execução e a validação do teste, além de servir como documento referencial para etapas futuras do projeto.

Recomenda-se, ainda, o desenvolvimento de testes complementares focados em outras dimensões, tais como testes para dispositivos móveis, acessibilidade e performance, garantindo assim uma cobertura completa e uma experiência final otimizada para todos os usuários.
  `.trim();

  const relatorio = document.getElementById("relatorio");
  relatorio.textContent = texto;
  relatorio.style.display = "block";
  document.getElementById("copiar").style.display = "inline-block";
});

document.getElementById("copiar").addEventListener("click", () => {
  const texto = document.getElementById("relatorio").textContent;
  navigator.clipboard.writeText(texto);
  alert("Relatório copiado com sucesso!");
});

function mostrarAba(id) {
  document.getElementById("formulario").style.display = id === "formulario" ? "block" : "none";
  document.getElementById("exemplo").style.display = id === "exemplo" ? "block" : "none";
}
