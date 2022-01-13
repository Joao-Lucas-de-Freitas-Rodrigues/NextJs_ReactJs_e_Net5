import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../api/config';
import { useEffect, useState } from "react";
import { getProfissional } from '../../services/profissional/profissionalService'
import Layout from '../../components/Layout'
import { Table, Button } from "reactstrap";
import { HiOutlinePencilAlt, HiOutlineTrash, HiOutlineX, HiPlus } from "react-icons/hi";
import Styles from '../../styles/home.module.css';
import Router from 'next/router';

const Profissional = () => {

    const [profissionais, setProfissionais] = useState([]);

    useEffect(() => {
        try {
            (async () => {
                setProfissionais(await getProfissional())
            })()
        } catch (error) {
            console.log(error)
        }
    }, []);

    async function Excluir(id) { 
        await api.delete(`/Profissional/${id}`)
        setProfissionais(await getProfissional())
    }

    return (
        <Layout titulo='Home'>
            <div className={Styles.titulo}>
                <h2>Profissionais Cadastrados</h2>
                <div className={Styles.adicionar}>
                    <Button
                        color="primary"
                        onClick={() => Router.push('/profissional/cadastrar')}
                    >
                        <HiPlus size={20} />Cadastrar
                    </Button>
                </div>
            </div>
            <Table responsive='true' className="table">
                <thead>
                    <tr>
                        <th>
                            Nome
                        </th>
                        <th>
                            Idade
                        </th>
                        <th>
                            Profissão
                        </th>
                        <th>
                            Telefone
                        </th>
                        <th>
                            Salario(R$)
                        </th>
                        <th>
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {profissionais.map((item) => (
                        <tr key={item.id}>
                            <td>{item.nome}</td>
                            <td>{item.idade}</td>
                            <td>{item.profissao}</td>
                            <td>{item.telefone}</td>
                            <td>{item.salario}</td>
                            <td>
                                <div className={Styles.home}>
                                    <Button
                                        color="primary"
                                        onClick={() => { Router.push(`/profissional/editar/${item.id}`) }}
                                    >
                                        <HiOutlinePencilAlt size={22} />
                                    </Button>
                                    <Button
                                        color="danger"
                                        onClick={() => { Excluir(item.id) }}
                                    >
                                        <HiOutlineTrash size={22} />
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Layout >
    )
}

export default Profissional;