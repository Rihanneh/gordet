import { DateInput, Edit, SimpleForm, TextInput } from 'react-admin';
import { ProjectImagesInput, transformProjectPayload } from './ProjectImagesInput';

export const ProjectEdit = () => (
    <Edit transform={transformProjectPayload}>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="title" />
            <TextInput source="slug" />
            <TextInput source="description" />
            <DateInput source="date" />
            <ProjectImagesInput />
        </SimpleForm>
    </Edit>
);
