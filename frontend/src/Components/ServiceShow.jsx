import { DateField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ServiceShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="slug" />
            <TextField source="content" />
            <DateField source="createdAt" showTime={true} />
            <DateField source="updatedAt" showTime={true} />
        </SimpleShowLayout>
    </Show>
);
