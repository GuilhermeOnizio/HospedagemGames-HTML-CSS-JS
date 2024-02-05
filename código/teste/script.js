function toggleAnswer(id) {
    const answerElement = document.getElementById(`answer${id}`);
    
    // Verifica se a resposta está visível
    const isAnswerVisible = answerElement.style.display === 'block' || getComputedStyle(answerElement).display === 'block';
  
    // Alterna a visibilidade da resposta
    answerElement.style.display = isAnswerVisible ? 'none' : 'block';
  }
  