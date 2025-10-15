import { DateField, ImageField, Show, SimpleShowLayout, TextField, TextInput } from 'react-admin';

export const ProjectShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="slug" />
            <TextField source="description" />
            <DateField source="date" />
            <DateField source="createdAt" showTime={true} />
            <DateField source="updatedAt" showTime={true} />
            <ImageField source="images" />
        </SimpleShowLayout>
    </Show>
);