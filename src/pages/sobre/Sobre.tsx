function RhFlow() {
  return (
    <div id="sobre" className="flex flex-col items-center max-w-8xl mx-auto">
      <div className="relative h-[60vh] mb-4 w-full">
        <img
          src="https://i.imgur.com/Yz1EhUL.jpeg"
          alt="Imagem de capa RH Flow"
          className="w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white font-marko uppercase text-5xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Sobre Nós
            </h1>
          </div>
        </div>
      </div>

      <section
        className="flex flex-col md:flex-row items-center justify-between gap-12 px-12 py-10 "
        id="sobre"
      >
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-marko px-20 font-bold text-cyan-400 mb-4 text-left">
            O que é o RH Flow?
          </h2>
          <p className="text-gray-700 text-justify px-20 text-2xl font-zain leading-relaxed">
            O RH Flow é uma plataforma inovadora que facilita a gestão de
            recursos humanos, automatizando processos como recrutamento,
            integração de colaboradores, avaliação de desempenho e muito mais.
          </p>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://i.imgur.com/yS25L4F.png"
            alt="Ilustração RH"
            className="w-full max-w-md animate-fade-in rounded-3xl"
          />
        </div>
      </section>

      <section className="px-8 py-12 w-full max-w-4xl mx-auto text-gray-700 leading-relaxed text-justify text-2xl font-zain space-y-6 animate-fade-in-up -mt-10">
        <p>
          O Flow G2 RH é uma solução completa de gestão de Recursos Humanos
          desenvolvida para otimizar o controle e a organização dos dados dos
          colaboradores dentro das empresas.
        </p>
        <p>
          Com uma interface moderna, intuitiva e fácil de usar, o sistema foi
          projetado para atender às necessidades do setor de RH, permitindo o
          cadastro, visualização, atualização e exclusão de registros de
          funcionários de forma prática e eficiente.
        </p>
        <p>
          Além disso, o Flow G2 RH contribui diretamente para a melhoria da
          comunicação interna, o alinhamento das equipes e o cumprimento das
          obrigações legais relacionadas à gestão de pessoas.
        </p>
      </section>

      <section className="px-8 py-16 w-full max-w-7xl">
        <h2 className="text-4xl font-marko font-bold text-center text-cyan-300 mb-10">
          Principais Funcionalidades
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center mx-14">
          <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out">
            <i className="fas fa-user-plus text-5xl text-cyan-800 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Cadastro de Funcionários
            </h3>
            <p className="text-sm text-gray-600">
              Registro simples e eficiente de novos colaboradores.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out">
            <i className="fas fa-chart-line text-5xl text-cyan-800 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Desempenho e Metas
            </h3>
            <p className="text-sm text-gray-600">
              Acompanhe resultados com gráficos e relatórios estratégicos.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out">
            <i className="fas fa-calendar-check text-5xl text-cyan-800 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Controle de Ponto
            </h3>
            <p className="text-sm text-gray-600">
              Gerencie presença e horários com total praticidade.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out">
            <i className="fas fa-file-signature text-5xl text-cyan-800 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Assinatura Digital
            </h3>
            <p className="text-sm text-gray-600">
              Documentos legais assinados digitalmente com segurança.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out">
            <i className="fas fa-graduation-cap text-5xl text-cyan-800 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Treinamentos Internos
            </h3>
            <p className="text-sm text-gray-600">
              Capacitação da equipe com registro de progresso.
            </p>
          </div>

          <div className="p-6 bg-white shadow-md rounded-2xl border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition duration-300 ease-in-out">
            <i className="fas fa-comments text-5xl text-cyan-800 mb-4"></i>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              Feedback Estruturado
            </h3>
            <p className="text-sm text-gray-600">
              Promova conversas construtivas e melhorias constantes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cyan-100 px-8 py-12 flex justify-center items-center gap-20 w-full max-w-4xl mx-auto">
        <div className="max-w-md">
          <h2 className="text-2xl font-bold font-marko text-cyan-400 mb-6">Benefícios</h2>
          <ul className="list-disc list-inside text-justify text-2xl font-zain text-gray-700 space-y-2">
            <li>Mais eficiência nos processos de RH</li>
            <li>Redução de tempo em tarefas repetitivas</li>
            <li>Melhoria da experiência dos colaboradores</li>
          </ul>
        </div>

        <div className="max-w-md">
          <img
            src="src/assets/beneficios.png"
            alt="Benefícios"
            className="w-60"
          />
        </div>
      </section>

      <div className="bg-white px-8 py-12 space-y-12 animate-fade-in w-full max-w-4xl mx-auto">
        <div>
          <h2 className="text-3xl font-marko font-bold text-cyan-400 mb-4">
            Tecnologia e Segurança
          </h2>
          <p className="text-gray-700 text-justify text-2xl font-zain leading-relaxed">
            A plataforma utiliza tecnologias modernas com criptografia avançada,
            garantindo a proteção e confidencialidade dos dados.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-marko text-cyan-400 mb-4">
            Integração com Outros Sistemas
          </h2>
          <p className="text-gray-700 text-justify text-2xl font-zain leading-relaxed">
            O RH Flow possui integração com sistemas ERP, folha de pagamento e
            outras ferramentas corporativas, facilitando a sincronização de
            dados e reduzindo o retrabalho manual...
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-marko text-cyan-400 mb-4">
            Visão Futura
          </h2>
          <p className="text-gray-700 text-justify text-2xl font-zain leading-relaxed">
            Estamos continuamente aprimorando o RH Flow para incorporar
            inteligência artificial, análise preditiva e recursos de
            gamificação...
          </p>
        </div>
      </div>

      <section className="bg-cyan-600 text-white text-center px-8 py-16 rounded-t-3xl shadow-inner w-full max-w-4xl mx-auto">
        <h2 className="text-3xl font-marko font-bold mb-4">
          Pronto para transformar seu RH?
        </h2>
        <p className="mb-6 text-lg">
          Junte-se às empresas que já estão modernizando a gestão de pessoas com
          o RH Flow.
        </p>
        <button className="bg-white text-cyan-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
          Fale com um especialista
        </button>
      </section>

      <section className="bg-gray-100 px-8 py-12 text-center italic text-gray-700 w-full max-w-4xl mx-auto">
        <p className="text-lg">
          “A tecnologia não substitui o toque humano, mas potencializa a maneira
          como cuidamos das pessoas.”
        </p>
        <p className="mt-4 font-semibold">– Equipe RH Flow</p>
      </section>
    </div>
  );
}

export default RhFlow;
