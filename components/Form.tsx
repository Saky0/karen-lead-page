'use client'

import React, { useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

const Form: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });
            const data = await res.json();
            console.log(data);
            if (data) {
                alert('E-book Enviado com Sucesso!');
            } else {
                alert('Houve um erro, tente novamente.');
            }
          } catch (error) {
            console.error(error);
            alert('Houve um erro ao enviar o formulário. Verifique a conexão e tente novamente.');
          }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col space-y-7">
            <div className="flex flex-col">
            <Label className="text-lg" htmlFor="name">Nome:</Label>
            <Input 
                required 
                className="box-inner-shadow text-black h-12 text-base" 
                id="name" 
                name="name" 
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome"/>
            </div>
            <div className="flex flex-col mb-5">
            <Label className="text-lg" htmlFor="email">Email:</Label>
            <Input 
                type="email" 
                required 
                className="box-inner-shadow text-black h-12 text-base" 
                id="email" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@dominio.com"/>
            </div> 
            <button className="btn px-5 min-[420px]:px-8 py-4 text-base min-[420px]:text-lg font-extrabold rounded-md uppercase tracking-wider" type="submit">Receber E-book</button>
        </form>
    )
}

export default Form;