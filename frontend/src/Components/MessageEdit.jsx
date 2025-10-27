import { Edit, email, maxLength, minLength, required, SimpleForm, TextInput } from 'react-admin';

const validateFname = [required("Ce champ est obligatoire"), minLength(2, "Il faut au moins 2 caractère"), maxLength(30, "Il faut maximum 30 caractère")];
const validateLname = [required("Ce champ est obligatoire"), minLength(2, "Il faut au moins 2 caractère"), maxLength(30, "Il faut maximum 30 caractère")];
const validateEmail = [required("Ce champ est obligatoire"), email("L'email n'est pas valide")];
const validateSubject = required("Ce champ est obligatoire");
const validateMessege = [required("Ce champ est obligatoire"), minLength(10, "Il faut au moins 10 caractère"), maxLength(300, "Il faut maximum 300 caractère")];
export const MessageEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="firstName" validate={validateFname} />
            <TextInput source="lastName" validate={validateLname} />
            <TextInput source="companyName" />
            <TextInput source="email" type="email" validate={validateEmail} />
            <TextInput source="subject" validate={validateSubject} />
            <TextInput source="message" multiline minRows={4} validate={validateMessege} />
        </SimpleForm>
    </Edit>
);
