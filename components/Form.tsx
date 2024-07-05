'use client'

import React, { useRef, useState } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Terminal } from "lucide-react";
import {
    Alert,
    AlertDescription,
    AlertTitle,
  } from "@/components/ui/alert";
import { useRouter } from 'next/navigation';

const Form: React.FC = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const inputNameRef = useRef<HTMLInputElement | null>(null);
    const inputEmailRef = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const inputName = inputNameRef.current;
        const inputEmail = inputEmailRef.current;
    
        if (!inputName || !inputEmail) return;

        setIsLoading(true);

        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email })
            });
            const data = await res.json();

            if (data.success) {
                router.push('/download');
              } else {
                setAlertMessage('Houve um erro ao enviar o E-book, tente novamente.');
              }
          } catch (error) {
            setAlertMessage('Houve um erro ao enviar o E-book, tente novamente.');
            console.log(error);
          } finally {
            setIsLoading(false);
          }
          inputName.value = '';
          inputEmail.value = '';
          setShowAlert(true);
    }

    return (
    <>
        <form onSubmit={handleSubmit} className={`flex flex-col space-y-7 ${showAlert ? 'mb-5' : ''}`}>
        <div className="flex flex-col">
        <Label className="text-lg" htmlFor="name">Nome:</Label>
        <Input 
            required 
            className="box-inner-shadow text-black h-12 text-base" 
            id="name" 
            name="name" 
            ref={inputNameRef}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"/>
        </div>
        <div className="flex flex-col mb-5">
        <Label className="text-lg" htmlFor="email">Email:</Label>
        <Input 
            type="email" 
            required 
            ref={inputEmailRef}
            className="box-inner-shadow text-black h-12 text-base" 
            id="email" 
            name="email" 
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@dominio.com"/>
        </div> 
        <button disabled={isLoading} 
                className={`btn ${isLoading ? 'bg-disable' : ''} px-5 min-[420px]:px-8 py-4 text-base min-[420px]:text-lg font-extrabold rounded-md uppercase tracking-wider`}
                type="submit">
            {isLoading ? 'Enviando...' : 'Receber E-book'}
        </button>
        </form>   
        {showAlert && (
        <Alert className='mt-5'>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Resultado</AlertTitle>
            <AlertDescription>
                {alertMessage}
            </AlertDescription>
        </Alert>
          )}     
    </>
    )
}

export default Form;