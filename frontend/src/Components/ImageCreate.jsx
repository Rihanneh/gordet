import { Create, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const ImageCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <ImageInput source="path" label="pictures" >
                <ImageField source='src' title="title" />
            </ImageInput>
            <TextInput source="service" />
            <TextInput source="projects" />
        </SimpleForm>
    </Create>
);