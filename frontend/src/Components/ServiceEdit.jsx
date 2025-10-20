import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ServiceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="content" />
            <TextInput source="imageId" />
            <TextInput source="image" />
            <ReferenceInput source="imageId" reference="images" label="image" link="show" />

        </SimpleForm>
    </Edit>
);