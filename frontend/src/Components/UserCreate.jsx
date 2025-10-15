import { Create, PasswordInput, SimpleForm, TextInput } from 'react-admin';

export const UserCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="email" type="email"/>
            <PasswordInput source="password" />
        </SimpleForm>
    </Create>
);