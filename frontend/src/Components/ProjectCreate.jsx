import { Create, DateInput, required, SimpleForm, TextInput } from 'react-admin';
import { ProjectImagesInput, transformProjectPayload } from './ProjectImagesInput';

const validateTitle = required("Ce champ est obligatoire");
const validateSlug = required("Ce champ est obligatoire");
const validateDate = required("Ce champ est obligatoire");

export const ProjectCreate = () => (
    <Create transform={transformProjectPayload}>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" validate={validateTitle} />
            <TextInput source="slug" validate={validateSlug} />
            <TextInput source="description" />
            <DateInput source="date" validate={validateDate}/>
            <ProjectImagesInput />
        </SimpleForm>
    </Create>
);
