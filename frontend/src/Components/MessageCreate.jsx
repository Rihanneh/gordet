import { Create, email, maxLength, minLength, required, SimpleForm, TextInput } from 'react-admin';

const validateFname = [required("Ce champ est obligatoire"), minLength(2, "Il faut au moins deux caractère"), maxLength(30)];
const validateLname = [required("Ce champ est obligatoire"), minLength(2, "Il faut au moins deux caractère"), maxLength(30)];
const validateEmail = [required("Ce champ est obligatoire"), email("L'email n'est pas valide")];
const validateSubject = required("Ce champ est obligatoire");
const validateMessege = required("Ce champ est obligatoire");
export const MessageCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly/>
            <TextInput source="firstName" validate={validateFname}/>
            <TextInput source="lastName" validate={validateLname}/>
            <TextInput source="companyName" />
            <TextInput source="email" type="email" validate={validateEmail}/>
            <TextInput source="subject" validate={validateSubject}/>
            <TextInput source="message" multiline minRows={4} validate={validateMessege}/>
        </SimpleForm>
    </Create>
);
