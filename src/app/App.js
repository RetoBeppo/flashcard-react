import React, { useEffect, useState } from 'react'
import { Container } from 'reactstrap'

import Header from './Header'
import QuestionnaireContainer from '../questionnaire/QuestionnaireContainer'
import Message from './Message'
import Footer from './Footer'

const App = () => {
    const [config, setConfig] = useState(null)
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        doFetch({
            url: 'application.json',
            dataFn: setConfig,
            errorFn: setError,
            messageFn: setMessage,
            errorText: 'Configuration error'

        })
    }, [])

    const renderQuestionnaireContainer = config =>
        config ? <QuestionnaireContainer serverUrl={`${config.url}/questionnaires`} /> : null

    const renderMessage = () =>
        error ? <Message message={message} /> : null

    return <Container>
        <Header title='Flashcard Client with React' subtitle='Version 2' />
        {renderQuestionnaireContainer(config)}
        {renderMessage()}
        <Footer message='@ The FHNW Team' />
    </Container>

}


export default App

