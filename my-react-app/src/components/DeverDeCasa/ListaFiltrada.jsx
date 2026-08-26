import { useState } from "react";

const ListaFiltrada = () => {
    const produtos = [
        { id: 1, nome: 'TV', preco: 1500, categoria: 'Eletrônicos' },
        { id: 2, nome: 'Celular', preco: 2500, categoria: 'Eletrônicos' },
        { id: 3, nome: 'Sofa', preco: 1200, categoria: 'Mobilia' },
        { id: 4, nome: 'Teclado', preco: 80, categoria: 'Eletrônicos' },
        { id: 5, nome: 'Mousepad', preco: 1700, categoria: 'Acessórios' },

    ];


    const produtosCaros = produtos.filter((produto) => produto.preco > 1000)


    return (


        <>
            <h1>Lista de Produtos acima de 1000 reais</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Categoria</th>
                    </tr>

                </thead>
                <tbody>
                    {produtosCaros.map((produto) => (
                        <tr>
                            <td>{produto.nome}</td>
                            <td>R$ {produto.preco}</td>
                            <td>{produto.categoria}</td>
                        </tr>

                    ))}




                </tbody>
            </table>
        </>





    );


}

export default ListaFiltrada;

