import { DateInput, Edit, email, maxLength, minLength, required, SelectInput, SimpleForm, TextInput, TimeInput } from 'react-admin';

const statusChoices = [
    { id: "PENDING", name: "Pending" },
    { id: "CONFIRMED", name: "Confirmed" },
    { id: "CANCELED", name: "Canceled" },
];

const validateFname = [required("Ce champ est obligatoire"), minLength(2, "Il faut au moins deux caractère"), maxLength(30)];
const validateLname = [required("Ce champ est obligatoire"), minLength(2, "Il faut au moins deux caractère"), maxLength(30)];
const validateEmail = [required("Ce champ est obligatoire"), email("L'email n'est pas valide")];
const validateDate = required("Ce champ est obligatoire");
const validateTime = required("Ce champ est obligatoire");
const validateSubject = required("Ce champ est obligatoire");
const validateMessege = required("Ce champ est obligatoire");
const validateStatus = required("Ce champ est obligatoire");

export const AppointmentEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="firstName" validate={validateFname} />
            <TextInput source="lastName" validate={validateLname} />
            <TextInput source="companyName" />
            <TextInput source="email" validate={validateEmail} />
            <DateInput source="appointmentDate" defaultValue={new Date().toISOString()} validate={validateDate} />
            <TimeInput source="appointmentTime" validate={validateTime} />
            <TextInput source="subject" validate={validateSubject} />
            <TextInput source="message" validate={validateMessege} />
            <SelectInput source="status" choices={statusChoices} validate={validateStatus} />
        </SimpleForm>
    </Edit>
);
