import { DateField, ImageField, ReferenceField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const ImageShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <ImageField source="path" />
            <TextField source="service" />
            <TextField source="projects" />
            <DateField source="updatedAt" showTime={true} />
            <DateField source="createdAt" showTime={true} />
            <ReferenceField source="serviceId" reference="services" label="service" link="show" />
        </SimpleShowLayout>
    </Show>
);
