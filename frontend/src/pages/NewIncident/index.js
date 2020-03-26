import React, { useState } from 'react'
import './styles.css'
import logoImg from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../services/api'

export default function NewIncident() {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')

    async function handleNewincident(e) {
        e.preventDefault()

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            })

            history.push('/profile')
        } catch (error) {
            alert('Falha ao cadastrar caso, tente novamente.')
        }
    }
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={ logoImg } alt="Logo Be The Hero"/>
                    <h1>Cadastro novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={20}/> Voltar para o painel
                    </Link>
                </section>

                <form onSubmit={ handleNewincident }>
                    <input
                        placeholder="Título do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <textarea
                        placeholder="Descrição do caso"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <input
                        placeholder="Valor em reais "
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <button className="button" type="submit" >Cadastrar</button>
                </form>
            </div>
        </div>
    )

}