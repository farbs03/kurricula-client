/*

Dependencies: 
    - email-validator

-----------------------------------------------------------
                    Field Validations:
            [fieldLabel] -> field to validate
-----------------------------------------------------------

    - Email Validity [email] (Using package "email-validator")
    - Password Validity [password]
        - Min: 8 chars
        - Max: 100 chars
    - First Name Valid [firstName]
        - Max: 50
    - Last Name Valid [lastName]
        - Max: 50
    - School [school]
        - Must be "Hamilton Southeastern High School"

*/

import LANG_DATA from "./lang/en_us.json"
const emailValidator = require("email-validator")

let lang = LANG_DATA.fieldValidation

function createResponse(data, msg) {
    return {
        valid: data,
        message: (msg==null)?"":msg
    }
}

function validateEmail(data){
    if(data === "" || data == null)
        return createResponse(false, lang.email.missing)
    let valid = emailValidator.validate(data)
    return createResponse(valid, valid?lang.email.valid:lang.email.invalid)
}

function validatePassword(data){
    if(data === "" || data == null)
        return createResponse(false, lang.password.missing)
    if(data.length < 8)
        return createResponse(false, lang.password.min)
    if(data.length > 100)
        return createResponse(false, lang.password.max)
    return createResponse(true, lang.password.valid)
}

function validateFirstName(data){
    if(data === "" || data == null)
        return createResponse(false, lang.firstName.missing)
    if(data.length > 50)
        return createResponse(false, lang.firstName.max)
    return createResponse(true, lang.firstName.valid)
}

function validateLastName(data){
    if(data === "" || data == null)
        return createResponse(false, lang.lastName.missing)
    if(data.length > 50)
        return createResponse(false, lang.lastName.max)
    return createResponse(true, lang.lastName.valid)
}

function validateSchool(data){
    if(data === "" || data == null)
        return createResponse(false, lang.school.missing)
    let valid = data === "Hamilton Southeastern High School"
    return createResponse(valid, valid?lang.school.valid:lang.school.invalid)
}

export default function validate(field, data) {
    switch(field) {
        case "email":
            return validateEmail(data)
        case "password":
            return validatePassword(data)
        case "firstName":
            return validateFirstName(data)
        case "lastName":
            return validateLastName(data)
        case "school":
            return validateSchool(data)
        default:
            return createResponse(false)
    }
}