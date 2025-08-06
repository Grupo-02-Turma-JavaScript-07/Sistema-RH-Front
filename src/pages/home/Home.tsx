function Home() {
    return (
        <>
<div className="relative h-[80vh] flex items-start m- bg-black text-white overflow-hidden">
    
    <img
        src="https://ik.imagekit.io/iyc9bztrf8/premium_photo-1661397029055-2c5da6951c4a.png?updatedAt=1754496647525" 
        alt="Imagem de fundo personalizada"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
    />


    <div className=" z-10 px-6 pt-24 max-w-3x1 w-full ml-40 h-full mt-30">
        <h1 className="font-marko text-3xl md:text-5xl font-bold mb-4">
        Olá! Este é o <span className="text-cyan-400 ">[Flow G2 RH]</span>
        </h1>
        <p className="text-2xl font-bold font-zain mb-6">
        O Flow G2 RH é um sistema de
        gerenciamento de Recursos Humanos<br />
        criado para auxiliar empresas no
        controle dos dados essenciais de seus<br />
        colaboradores.
        </p>
        <a
        href="#recursos"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded shadow-md"
        >
        Veja nossos serviços !
        </a>
    </div>
    </div>
    <section className="bg-gray-200">
        <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
            <h3 className="text-3xl md:text-5xl mb-6 font-bold text-blue-600">Sobre</h3>
            <p className="text-black leading-relaxed ">
                O Flow G2 RH é uma solução completa de gestão de Recursos Humanos desenvolvida para otimizar o controle e a organização dos dados dos colaboradores dentro das empresas.
                Com uma interface moderna, intuitiva e fácil de usar, o sistema foi projetado para atender às necessidades do setor de RH, permitindo o cadastro, visualização, atualização e exclusão de registros de funcionários de forma prática e eficiente.
                Além disso, o Flow G2 RH contribui diretamente para a melhoria da comunicação interna, o alinhamento das equipes e o cumprimento das obrigações legais relacionadas à gestão de pessoas.
                Ideal para empresas que buscam automatizar processos e centralizar informações, o sistema torna a rotina do RH mais ágil, transparente e segura — apoiando a tomada de decisões estratégicas e o crescimento sustentável do negócio.
            </p>
            </div>

            <div className="flex justify-center">
            <img
                src="https://ik.imagekit.io/iyc9bztrf8/istockphoto-1362181407-2048x2048.jpg?updatedAt=1754501332531"
                alt="Gestão de pessoas"
                className="w-full max-w-md h-auto rounded-lg shadow-md"
            />
            </div>
        </div>
        </div>
    </section>
    </>
    )
}

export default Home