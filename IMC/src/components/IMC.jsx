import React, { useState } from 'react';

const IMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [mensagem, setMensagem] = useState('');

    const CalcIMC = () => {
        const alturaM = altura / 100; // Converte altura para metros
        const calcIMC = (peso / (alturaM ** 2)).toFixed(2); // Calcula o IMC
        setResultado(calcIMC); // Armazena o resultado no estado

        // Define a mensagem com base no valor do IMC
        let msg = '';
        if (calcIMC < 18.5) {
            msg = 'Abaixo do peso';
        } else if (calcIMC >= 18.5 && calcIMC < 24.9) {
            msg = 'Peso normal';
        } else if (calcIMC >= 25 && calcIMC < 29.9) {
            msg = 'Sobrepeso';
        } else {
            msg = 'Obesidade';
        }
        setMensagem(msg); 
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h1>Calculadora de IMC</h1>
            <p>Calcule seu IMC</p>

            <input
                type="number"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                placeholder="Peso (Kg)"
                style={{ margin: '5px' }}
            />

            <input
                type="number"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                placeholder="Altura (cm)"
                style={{ margin: '5px' }}
            />

            <button 
                onClick={CalcIMC} 
                style={{ marginLeft: '10px', padding: '5px 10px' }}>
                Calcular IMC
            </button>

            <h2>Seu IMC: {resultado}</h2>
            <h3>{mensagem}</h3>

            {/* Exibir a tabela de IMC */}
            <img 
                src="https://viverbem.unimedbh.com.br/wp-content/uploads/2021/06/tabela-IMC.png" 
                alt="Tabela de IMC"
                style={{ marginTop: '20px', width: '80%', maxWidth: '600px' }} 
            />
        </div>
    );
};

export default IMC;
