import { Edit, PasswordInput, SimpleForm, TextInput } from 'react-admin';

export const UserEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="email" type="email"/>
            <PasswordInput source="password" />
        </SimpleForm>
    </Edit>
);