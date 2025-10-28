import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const MessageShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="companyName" />
            <TextField source="email" type="email"/>
            <TextField source="subject" />
            <TextField source="message" />
        </SimpleShowLayout>
    </Show>
);

