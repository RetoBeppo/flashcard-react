import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import QuestionnaireTable from './QuestionnaireTable'
import QuestionnaireCreateDialog from './QuestionnaireCreateDialog'


const ID = 'id'
const DEFAULT_ID = 0

const QuestionnaireContainer = ({ serverUrl }) => {

  let [qs, setQuestionnaires] = useState([])

  const readAll = () => {
    fetch(serverUrl)
      .then(response => response.json())
      .then(json => setQuestionnaires(json))
      .catch(error => console.error(error))
  }

  useEffect(readAll, [])

  const id = qs =>
    _.get(_.maxBy(qs, ID), ID, DEFAULT_ID) + 1

  {/*}
  const create = questionnaire =>
    setQuestionnaires(_.concat(qs, { id: id(qs), ...questionnaire }))

  const update = questionnaire =>
    setQuestionnaires(_.map(qs, q => q.id === questionnaire.id ? questionnaire : q))

  const _delete = id =>
setQuestionnaires(_.reject(qs, { id: id }))*/}



    // Async Await Syntax
    const create = async questionnaire => {
      try {
          const response = await fetch(serverUrl, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json; charset=utf-8'
              },
              body: JSON.stringify(questionnaire)
          })
          if(response.ok) {
              questionnaire = await response.json()
              setQuestionnaires( _.concat(qs, questionnaire))
          }
          else {
              console.log(`Create war nicht erfolgreich. Status: ${ response.status }`)
          }
      }
      catch(error) {
          console.log(`Network Error: ${ error }`)
      }
  }

  const update = questionnaire => {
      fetch(`${serverUrl}/${questionnaire.id}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify(questionnaire)
      })
      .then(response => {
          if (response.ok) {
              return response.json()
          }
          throw new Error(`Update war nicht erfolgreich. Status: ${ response.status }`);
      })
      .then(questionnaire => setQuestionnaires(_.map(qs, q => q.id === questionnaire.id ? questionnaire : q)))
      .catch(error => console.error(error))
  }

  const _delete = id => {
      fetch(`${serverUrl}/${id}`, {
          method: 'DELETE'
      })
      .then(response => {
          if (response.ok) {
              setQuestionnaires( _.reject(qs, { id: id }))
          }
          else {
              throw new Error(`Delete war nicht erfolgreich. Status: ${ response.status }`);
          }
      })
      .catch(error => console.error(error))
  }

  return <div>
    <QuestionnaireCreateDialog create={create} />
    <h3>Questionnaires</h3>
    <QuestionnaireTable qs={qs} update={update} _delete={_delete} />
  </div>
}


export default QuestionnaireContainer