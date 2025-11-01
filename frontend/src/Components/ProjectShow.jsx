import { ArrayField, DateField, ImageField, RichTextField, Show, SimpleShowLayout, SingleFieldList, TextField } from 'react-admin';

export const ProjectShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="slug" />
            <RichTextField source="description" />
            <DateField source="date" />
            <DateField source="createdAt" showTime={true} />
            <DateField source="updatedAt" showTime={true} />
            <ArrayField source="images">
                <SingleFieldList linkType={false}>
                    <ImageField source="src" title="title" />
                </SingleFieldList>
            </ArrayField>
        </SimpleShowLayout>
    </Show>
);
