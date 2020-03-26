import React, { useState } from 'react'
import './styles.css'
import { FiLogIn } from 'react-icons/fi'
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import { Link, useHistory } from 'react-router-dom'
import api from "../../services/api"

export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault()

        try {
            const response = await api.post('sessions', { id })

            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        } catch (error) {
            alert(`Falha no login, tente novamente.`)
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="Logo Be The Hero"></img>

                <form onSubmit={ handleLogin }>
                    <h1>FAÇA O SEU LOGIN</h1>

                    <input
                    placeholder="Digite seu ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />

                    <button className="button" type="submit">ENTRAR</button>

                    <Link className="back-link" to="/register">
                        < FiLogIn size={20}/> Faça um cadastro
                    </Link>
                </form>
            </section>

            <img src={ heroesImg } alt="Heroes" />
        </div>
    )
}