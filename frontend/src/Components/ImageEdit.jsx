import { Edit, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const ImageEdit = () => (
    <Edit>
         <SimpleForm>
            <TextInput source="id" readOnly />
            <ImageInput source="image" > 
                <ImageField source="path" />
            </ImageInput>
            <TextInput source="service" />
            <TextInput source="projects" />
        </SimpleForm>
    </Edit>
);
