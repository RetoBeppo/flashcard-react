import React from 'react'
import Dialog from './Dialog'


const QuestionnaireCreateDialog = ({ create }) => {

    return <Dialog
        buttonLabel='Add Questionnaire'
        title='Add Questionnaire'
        actionButtonLabel='Save'
        questionnaire={{ title: '', description: '' }}
        actionFn={create}
        css='success' />
}

export default QuestionnaireCreateDialog