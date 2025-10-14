import { DataTable, List, EditButton } from 'react-admin';


export const ImageList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="path" />
            <DataTable.Col source="createdAt" />
            <DataTable.Col source="updatedAt" />
            <DataTable.Col source="service" />
            <DataTable.Col source="projects" />
            <EditButton />
        </DataTable>
    </List>
);