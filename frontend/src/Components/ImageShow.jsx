import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const ImageShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ImageField source="image" />
            <TextField source="service" />
            <TextField source="projects" />
            <DateField source="updatedAt" showTime={true} />
            <DateField source="createdAt" showTime={true} />
        </SimpleShowLayout>
    </Show>
);
