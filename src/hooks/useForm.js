import { useState } from 'react'

export const useForm = () => {

        const initialState = {}

        const [values, setValues] = useState(initialState)


        const handleInputChange = ( { target } ) => {

            setValues({
                ...values, 
                [ target.name ] : target.value 
            })
        }

        const reset = () => {
            setValues(initialState)
        }


  return [ useState, handleInputChange, reset ]
}

