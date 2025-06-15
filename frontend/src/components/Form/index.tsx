import { useState } from 'react'
import estilos from './Form.module.scss'
import { useCarrinhoContext } from '../../hooks/useCarrinhoContext';
import InputMask from 'react-input-mask';

const Form = () => {
    const { carrinho } = useCarrinhoContext(); 

    const [formData, setFormData] = useState({
        nome: '',
        endereco: '',
        bairro: '',
        telefone: '',
        cpfCnpj: '',
        email: '',
        enderecoEntrega: '',
        bairroEntrega: '',
        dataEvento: '',
        infoExtras: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const dadosFormulario = {
            nome: formData.nome,
            endereco: formData.endereco,
            bairro: formData.bairro,
            telefone: formData.telefone,
            cpfCnpj: formData.cpfCnpj,
            enderecoEntrega: formData.enderecoEntrega || '',
            bairroEntrega: formData.bairroEntrega,
            dataEvento: formData.dataEvento,
            infoExtras: formData.infoExtras || '',
            email: formData.email,
            produtos: carrinho.map(produto => ({
                id: produto.id,
                nome: produto.nome,
                descricao: produto.descricao,
                imagem: produto.imagem,
                categoria: produto.categoria,
                quantidade: produto.quantidade
            }))
        };

         console.log(dadosFormulario)

        try {
            const response = await fetch('http://localhost:8000/enviar-email/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dadosFormulario)
            });
            console.log(dadosFormulario)
            const data = await response.json();
            if (response.ok) {
                alert('Orçamento enviado com sucesso!');
            } else {
                alert(`Erro ao enviar: ${data.message}`);
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                alert(`Erro ao conectar com o servidor: ${error.message}`);
            } else {
                alert('Erro desconhecido ao conectar com o servidor.');
            }
        }
        
    };

    return (
        <form onSubmit={handleSubmit} className={estilos.Form}>
            <input type="text" name="nome" placeholder="Nome" value={formData.nome} onChange={handleChange} required />
            <input type="text" name="endereco" placeholder="Endereço" value={formData.endereco} onChange={handleChange} required />

            <div className={estilos.DuasColunas}>
                <input type="text" name="bairro" placeholder="Bairro" value={formData.bairro} onChange={handleChange} required />
                <InputMask
                    mask="(99) 99999-9999"
                    name="telefone"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className={estilos.DuasColunas}>
                <InputMask
                    mask={formData.cpfCnpj.length > 14 ? "99.999.999/9999-99" : "999.999.999-99"}
                    name="cpfCnpj"
                    placeholder="CPF/CNPJ"
                    value={formData.cpfCnpj}
                    onChange={handleChange}
                    required
                />
                <input type="email" name="email" placeholder="E-mail" value={formData.email} onChange={handleChange} required />
            </div>

            <input type="text" name="enderecoEntrega" placeholder="Endereço de Entrega Completo" value={formData.enderecoEntrega} onChange={handleChange} />

            <div className={estilos.DuasColunas}>
                <input type="text" name="bairroEntrega" placeholder="Bairro de Entrega" value={formData.bairroEntrega} onChange={handleChange} required />
                <InputMask
                    mask="99/99/9999"
                    name="dataEvento"
                    placeholder="Data de Entrega"
                    value={formData.dataEvento}
                    onChange={handleChange}
                    required
                />
            </div>

            <textarea name="infoExtras" placeholder="Informações Extras" rows={4} value={formData.infoExtras} onChange={handleChange}></textarea>

            <button type="submit">Enviar Orçamento</button>
        </form>
    );
};

export default Form;
