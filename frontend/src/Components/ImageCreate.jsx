import { Create, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const ImageCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <ImageInput source="image" />
            <TextInput source="service" />
            <TextInput source="projects" />
        </SimpleForm>
    </Create>
);