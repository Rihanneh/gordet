import { Edit, Show, SimpleForm, SimpleShowLayout, TextField, TextInput } from 'react-admin';

export const ServiceShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="slug" />
            <TextField source="content" />
            <TextField source="imageId" />
            <TextField source="image" />
            <DateField source="createdAt" showTime={true} />
            <DateField source="updatedAt" showTime={true} />
        </SimpleShowLayout>
    </Show>
);