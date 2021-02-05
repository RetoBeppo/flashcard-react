import React from 'react'
import Dialog from './Dialog'

/**
 * Passt einen bestehenden Questionnaire an.
 * 
 * @param questionnaire Der Questionnaire, der angepasst werden soll
 * @param update Die update Funktion
 */
const QuestionnaireUpdateDialog =  ({ questionnaire, update }) => 
    <Dialog 
        buttonLabel='Edit' 
        title='Edit Questionnaire' 
        actionButtonLabel='Save'
        questionnaire={ questionnaire } 
        actionFn={ update } 
        css='primary' />

export default QuestionnaireUpdateDialog
