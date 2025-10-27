import { Create, DateInput, maxLength, regex, required, SimpleForm, TextInput } from 'react-admin';
import { ProjectImagesInput, transformProjectPayload } from './ProjectImagesInput';
import { RichTextInput } from 'ra-input-rich-text';


const validateTitle = required("Ce champ est obligatoire");
const validateSlug = [required("Ce champ est obligatoire"), maxLength(50), regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Le slug est invalide')];
const validateDate = required("Ce champ est obligatoire");

export const ProjectCreate = () => (
    <Create transform={transformProjectPayload}>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" validate={validateTitle} />
            <TextInput source="slug" validate={validateSlug} />
            <RichTextInput source="description" />
            <DateInput source="date" validate={validateDate}/>
            <ProjectImagesInput />
        </SimpleForm>
    </Create>
);
