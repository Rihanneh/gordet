import { Edit, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const ImageEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="image" />
            <TextInput source="service" />
            <TextInput source="projects" />
        </SimpleForm>
    </Edit>
);
