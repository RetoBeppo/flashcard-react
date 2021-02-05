import React from 'react'
import Dialog from './Dialog'


const QuestionnaireShowDialog = ({ questionnaire }) => 
    <Dialog 
        buttonLabel='Show' 
        title='Show Questionnaire' 
        actionButtonLabel='Close' 
        questionnaire={ questionnaire }  
        isReadOnly={ true } />

export default QuestionnaireShowDialog