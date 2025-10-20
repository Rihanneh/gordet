import { DataTable, List, EditButton, DateField, ImageField, ReferenceField } from 'react-admin';


export const ImageList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="path" >
                <ImageField source="path" />
            </DataTable.Col>
            <DataTable.Col source="createdAt" >
                <DateField source="createdAt" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="updatedAt" >
                <DateField source="updatedAt" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="projects" />
            <DataTable.Col source="serviceId">
                <ReferenceField source="serviceId" reference="services" label="service" link="show" />
            </DataTable.Col>
            <EditButton />
        </DataTable>
    </List>
);
