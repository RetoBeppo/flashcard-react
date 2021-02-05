import React from 'react'
import _ from 'lodash'
import { Table } from 'reactstrap'
import QuestionnaireTableElement from './QuestionnaireTableElement'

const QuestionnaireTable = ({ qs, update, _delete }) => 
    <Table hover>
        <tbody>
        { 
            _.map(qs, questionnaire => 
                <QuestionnaireTableElement 
                    key={ questionnaire.id } 
                    questionnaire={ questionnaire }
                    update={ update }
                    _delete={ _delete } />
            ) 
        }
        </tbody>
    </Table>

export default QuestionnaireTable