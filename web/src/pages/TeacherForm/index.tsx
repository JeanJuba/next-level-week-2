import React, { useState } from 'react';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';


function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ])

    /**
     * Maneira correta de adicionar novos valores a um array existente no
     * state
     */
    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas"
                description="O primeiro passo é preencher esse formulário de inscrição" />

            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />
                    <TextArea name="bio" label="Biografia" />
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select
                        name="subject"
                        label="Matéria"
                        options={[
                            { value: 'Artes', label: "Artes" },
                            { value: 'Biologia', label: "Biologia" },
                            { value: 'Ciências', label: "Ciências" },
                            { value: 'Educação Física', label: "Educação Física" },
                            { value: 'Física', label: "Física" },
                            { value: 'Geografia', label: "Geografia" },
                            { value: 'História', label: "História" },
                            { value: 'Matemática', label: "Matemática" },
                            { value: 'Português', label: "Português" },
                            { value: 'Química', label: "Química" },
                        ]} />
                    <Input name="cost" label="Custo da sua hora por aula" />
                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {/**
                            Após um map o primeiro div, option etc... deve ter
                            uma chave única
                         */}
                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select
                                    name="week_day"
                                    label="Dia da Semana"
                                    options={[
                                        { value: '0', label: "Domingo" },
                                        { value: '1', label: "Segunda-feira" },
                                        { value: '2', label: "Terça-feira" },
                                        { value: '3', label: "Quarta-feira" },
                                        { value: '4', label: "Quinta-feira" },
                                        { value: '5', label: "Sexta" },
                                        { value: '6', label: "Sábado" },
                                    ]} />

                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        );
                    })}

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar Cadastro
                    </button>
                </footer>
            </main>

        </div>
    );
}


export default TeacherForm;