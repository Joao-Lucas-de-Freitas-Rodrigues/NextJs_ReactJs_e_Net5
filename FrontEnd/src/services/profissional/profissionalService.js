import api from '../../api/config'
import Router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Alert } from 'reactstrap'

export async function getProfissional() {
    var response = await api.get('/Profissional')
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            return console.log(err)
        })
    return response;
}

export async function postProfissional(values) {
    var response = await api.post('/Profissional', values)
        .then(() => {
            Router.push('/profissional/home')
        })
        .catch((err) => {
            return console.log(err.response.status)
        })
    return response;
}

export async function getProfissionalId(id) {
    var response = await api.get('/Profissional/' + id)
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            return console.log(err.response.status)
        })
    return response;
}

export async function putProfissional(id, values) {
    var response = await api.put('/Profissional/' + id, values)
        .then(() => {
            console.log('Put')
            Router.push('/profissional/home')
        })
        .catch((err) => {
            return console.log(err.response.status)
        })
    return response;
}


