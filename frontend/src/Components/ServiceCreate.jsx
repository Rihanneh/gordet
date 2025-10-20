import { Create, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const ServiceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="content" />
            <ReferenceInput source="imageId" reference="images" label="image" link="show" />

        </SimpleForm>
    </Create>
);