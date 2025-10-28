import { DateField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const UserShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="email" />
            <DateField source="createdAt" showTime={true} />
            <DateField source="updatedAt" showTime={true} />
        </SimpleShowLayout>
    </Show>
);