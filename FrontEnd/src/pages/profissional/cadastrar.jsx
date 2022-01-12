import React from 'react';
import Layout from '../../components/Layout'
import { Form, Col, FormGroup, Input, Label, Row, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup/dist/yup';
import * as yup from "yup";
import { postProfissional } from '../../services/profissional/profissionalService'
import 'react-toastify/dist/ReactToastify.css';

const validationPost = yup.object().shape({
     nome: yup.string().required("Nome é um campo obrigatório"),
    idade: yup.number().integer().required("Idade é um campo obrigatório").typeError('Idade é um campo obrigatório'),
    telefone: yup.string().required("Telefone é um campo obrigatório"),
    profissao: yup.string().required("Profissao é um campo obrigatório"),
    salario: yup.number().required("Salario  é um campo obrigatório").typeError('Idade é um campo obrigatório')
})

const errorColor = {
    color: 'red'
};

export default function Cadastrar() {
    
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(validationPost)
    })

    const profissionalSubmit = values => postProfissional(values);


    return (
        <Layout>
            <h2>Cadastrar</h2>
            <Form onSubmit={handleSubmit(profissionalSubmit)}>
                <Row>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="nomeId">
                                Nome
                            </Label>
                            <Input
                                id="nomeId"
                                name="nome"
                                innerRef={register}
                                maxLength="100"
                            />
                            <p style={errorColor}>{errors.nome?.message}</p>
                        </FormGroup>
                    </Col>
                    <Col md={2}>
                        <FormGroup>
                            <Label for="idadeId">
                                Idade
                            </Label>
                            <Input
                                id="idadeId"
                                name="idade"
                                innerRef={register}
                                type="number"
                            />
                            <p style={errorColor}>{errors.idade?.message}</p>
                        </FormGroup>
                    </Col>
                    <Col md={3}>
                        <Label for="telefoneId">
                            Telefone
                        </Label>
                        <Input
                            id="telefoneId"
                            name="telefone"
                            innerRef={register}
                            maxLength="11"
                        />
                        <p style={errorColor}>{errors.telefone?.message}</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <FormGroup>
                            <Label for="profissaoId">
                                Profissão
                            </Label>
                            <Input
                                id="profissaoId"
                                name="profissao"
                                innerRef={register}
                                maxLength="100"
                            />
                            <p style={errorColor}>{errors.profissao?.message}</p>
                        </FormGroup>
                    </Col>
                    <Col md={5}>
                        <Label>
                            Salario
                        </Label>
                        <Input
                            id="salarioId"
                            name="salario"
                            innerRef={register}
                        />
                        <p style={errorColor}>{errors.salario?.message}</p>
                    </Col>
                </Row>
                <Button
                    color="success"
                    type="submit"
                >
                    Salvar
                </Button>
            </Form>
        </Layout>
    )
};