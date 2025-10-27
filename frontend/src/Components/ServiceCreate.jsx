import { Create, maxLength, ReferenceInput, required, SimpleForm, TextInput } from 'react-admin';

const validateTitle = [required("Ce champ est obligatoire"), maxLength(50)];
const validateSlug = [required("Ce champ est obligatoire"), maxLength(50)];
const validateContent = required("Ce champ est obligatoire");


export const ServiceCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" validate={validateTitle} />
            <TextInput source="slug" validate={validateSlug} />
            <TextInput source="content" validate={validateContent} />
            <ReferenceInput source="imageId" reference="images" label="image" link="show" />
        </SimpleForm>
    </Create>
);