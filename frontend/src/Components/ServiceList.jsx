import { DataTable, List, EditButton } from 'react-admin';


export const ServiceList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="slug" />
            <DataTable.Col source="content" />
            <DataTable.Col source="createdAt" />
            <DataTable.Col source="updatedAt" />
            <DataTable.Col source="imageId" />
            <DataTable.Col source="image" />
            <EditButton />
        </DataTable>
    </List>
);