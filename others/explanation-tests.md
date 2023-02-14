1. Testes "Unitários": unidade da sua aplicação.

    ° Ex.: Uma função para 'formatar datas';
    ° Ex.: Uma função para 'enviar um documento';

2. Testes de "Integração": comunicação entre 2 ou mais unidades.

    ° Ex.: A função 'mostrar hora' se comunica com a função 'formatar datas';
    ° Ex.: A função 'compartilhar docs' se comunica com a função 'enviar um documento';

3. Testes "e2e": simula um usuário que realizar diversas operações.

    ° Ex.: Front-End -> simula um cadastro na aplicação
    ° Ex.: Back-End -> simula requisições HTTP, WebSockets.

4. Pirâmide de Testes:

    ° e2e -> Não depende de tecnologia, de arquitetura, de estrutura (barreira de entrada: LOW);
    ° Unitários -> Base de testes de uma aplicação;
