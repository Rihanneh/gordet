import { Edit, maxLength, ReferenceInput, required, SimpleForm, TextInput, RichTextInput } from 'react-admin';

const validateTitle = [required("Ce champ est obligatoire"), maxLength(50)];
const validateSlug = [required("Ce champ est obligatoire"), maxLength(50)];
const validateContent = required("Ce champ est obligatoire");


export const ServiceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" validate={validateTitle} />
            <TextInput source="slug" validate={validateSlug} />
            <RichTextInput source="content" validate={validateContent} />
            <ReferenceInput source="imageId" reference="images" label="image" link="show" />
        </SimpleForm>
    </Edit>
);