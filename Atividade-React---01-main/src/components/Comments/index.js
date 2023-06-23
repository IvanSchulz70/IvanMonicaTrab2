const commentarios = [{
    "filme": "Questão de Tempo", "comenatarios": [{
        "usuario": "ivan",
        "comentario": "Top demais! Chorei muito."
    },
    {
        "usuario": "ivan",
        "comentario": "Top demais! Chorei muito."
    },
    {
        "usuario": "ivan",
        "comentario": "muito legal"
    }
    ]
},
{
    "filme": "A Vida Secreta de Walter Mitty", "comenatarios": [{
        "usuario": "ivan",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "ivan",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
},
{
    "filme": "Senhor dos Anéis: A Sociedade do Anel", "comenatarios": [{
        "usuario": "ivan",
        "comentario": "Muito bom, gostei demais!"
    },
    {
        "usuario": "ivan",
        "comentario": "Muito bom, gostei muito!"
    }
    ]
}
]

export default function Comments({ filme }) {
    const comentariosFilme = commentarios.filter(f =>
        f.filme === filme
    );
    return (
        <div className="container text-center">
            {comentariosFilme[0].comenatarios.map((comment, i) => (
                <div className="row">
                    <div className="col-md-3" key={i.toString()}>
                        {comment.usuario}
                    </div>
                    <div className="col-md-9" key={i.toString()}>
                        {comment.comentario}
                    </div>
                </div>
            ))}
        </div>
    )
}