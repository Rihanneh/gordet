import { Create, DateInput, SimpleForm, TextInput } from 'react-admin';
import { ProjectImagesInput, transformProjectPayload } from './ProjectImagesInput';

export const ProjectCreate = () => (
    <Create transform={transformProjectPayload}>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="description" />
            <DateInput source="date" />
            <ProjectImagesInput />
        </SimpleForm>
    </Create>
);
