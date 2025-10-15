import { Create, DateInput, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const ProjectCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="description" />
            <DateInput source="date" />
            <TextInput source="images" label="Image (URL)" />
        </SimpleForm>
    </Create>
);