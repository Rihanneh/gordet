import { Create, SimpleForm, TextInput } from 'react-admin';

export const ServiceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="content" />
            <TextInput source="imageId" />
            <TextInput source="image" />
        </SimpleForm>
    </Create>
);