import {gql} from '@apollo/client'

export const GET_APPOINTMENTS = gql`
    query getAppointments($parameters: Object){
        appointment(parameters: $parameters) {
        addonIDs
        amountPaid
        appointmentTypeID
        calendar
        calendarID
        calendarTimezone
        canClientCancel
        canClientReschedule
        canceled
        category
        certificate
        classID
        confirmationPage
        dateCreated
        date
        datetime
        datetimeCreated
        duration
        email
        endTime
        firstName
        lastName
        location
        notes
        paid
        payment
        phone
        price
        priceSold
        subCalendarID
        time
        timezone
        type
        }
    }
`
