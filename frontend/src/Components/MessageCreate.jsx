import { Create, SimpleForm, TextInput } from 'react-admin';

export const MessageCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly/>
            <TextInput source="firstName" />
            <TextInput source="lastName" />
            <TextInput source="companyName" />
            <TextInput source="email" type="email"/>
            <TextInput source="subject" />
            <TextInput source="message" multiline minRows={4} />
        </SimpleForm>
    </Create>
);
