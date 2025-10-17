import { Create, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const ImageCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <ImageInput source="path" > 
                <ImageField source="src" />
            </ImageInput>
            <TextInput source="service" />
            <TextInput source="projects" />
        </SimpleForm>
    </Create>
);