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

const emailValidator = require("email-validator")

function validateEmail(data){
    if(data === "" || data == null)
        return false
    return emailValidator.validate(data)
}

function validatePassword(data){
    if(data === "" || data == null)
        return false
    if(data.length < 8)
        return false
    if(data.length > 100)
        return false
    return true
}

function validateFirstName(data){
    if(data === "" || data == null)
        return false
    if(data.length > 50)
        return false
    return true
}

function validateLastName(data){
    if(data === "" || data == null)
        return false
    if(data.length > 50)
        return false
    return true
}

function validateSchool(data){
    if(data === "" || data == null)
        return false
    return data === "Hamilton Southeastern High School"
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
            return false
    }
}