import { DateInput, Edit, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const ProjectEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="description" />
            <DateInput source="date" />
            <TextInput source="images" label="Image (URL)" />
        </SimpleForm>
    </Edit>
);