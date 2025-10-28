import { Edit, email, minLength, PasswordInput, required, SimpleForm, TextInput } from 'react-admin';

const validateEmail = [required("Ce champ est obligatoire"), email("L'email n'est pas valide")]; 
const validatePassword = [required("Ce champ est obligatoire"), minLength(8, "Il faut au moins 8 caractères")];

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="email" type="email" validate={validateEmail} />
            <PasswordInput source="password" validate={validatePassword} />
        </SimpleForm>
    </Edit>
);