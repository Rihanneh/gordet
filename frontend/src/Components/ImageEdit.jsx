import { Edit, ImageField, ImageInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ImageEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <ImageInput source="path" >
                <ImageField source="src" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);
