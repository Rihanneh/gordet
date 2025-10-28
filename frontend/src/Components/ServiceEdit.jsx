import { Edit, maxLength, ReferenceInput, regex, required, SimpleForm, TextInput } from 'react-admin';

const validateTitle = [required("Ce champ est obligatoire"), maxLength(50)];
const validateSlug = [required("Ce champ est obligatoire"), maxLength(50), regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Le slug est invalide')];
const validateContent = required("Ce champ est obligatoire");
const validateImage = required("Ce champ est obligatoire");


export const ServiceEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" validate={validateTitle} />
            <TextInput source="slug" validate={validateSlug} />
            <TextInput source="content" validate={validateContent} />
            <ReferenceInput source="imageId" reference="images" label="image" link="show" validate={validateImage}/>
        </SimpleForm>
    </Edit>
);