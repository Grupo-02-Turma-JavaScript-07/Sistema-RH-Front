function ListaColaborador() {
    const colaboradores = [
        {
            id: 1,
            foto: "https://writestylesonline.com/wp-content/uploads/2018/11/Three-Statistics-That-Will-Make-You-Rethink-Your-Professional-Profile-Picture-1024x1024.jpg",
            nome: "Ana Paula Martins",
            salario: 5200.50,
            cargo: "Desenvolvedora Frontend",
            dataAdmissao: "2021-03-15T00:00:00Z"
        },
        {
            id: 2,
            nome: "Carlos Eduardo Silva",
            foto: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww",
            salario: 7800.00,
            cargo: "Engenheiro de Software",
            dataAdmissao: "2020-07-01T00:00:00Z"
        },
        {
            id: 3,
            nome: "Fernanda Rocha",
            foto: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
            salario: 4200.75,
            cargo: "Analista de QA",
            dataAdmissao: "2022-01-10T00:00:00Z"
        },
        {
            id: 4,
            nome: "João Vitor Mendes",
            foto: "https://www.shutterstock.com/image-photo/smiling-african-american-millennial-businessman-600nw-1437938108.jpg",
            salario: 6300.00,
            cargo: "Product Owner",
            dataAdmissao: "2019-11-20T00:00:00Z"
        },
        {
            id: 5,
            nome: "Mariana Lopes",
            foto: "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
            salario: 3900.00,
            cargo: "Assistente Administrativo",
            dataAdmissao: "2023-05-05T00:00:00Z"
        }
    ];

    return (
        <div>
            <h1>Lista de Colaboradores</h1>
            <ul>
                {colaboradores.map((colaborador) => (
                    <li key={colaborador.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                        <img src={colaborador.foto} alt={colaborador.nome} style={{ width: '100px', borderRadius: '50%' }} />
                        <h2>{colaborador.nome}</h2>
                        <p>Cargo: {colaborador.cargo}</p>
                        <p>Salário: R$ {colaborador.salario.toFixed(2)}</p>
                        <p>Data de Admissão: {new Date(colaborador.dataAdmissao).toLocaleDateString()}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListaColaborador;
