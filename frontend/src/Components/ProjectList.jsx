import { DataTable, List, EditButton } from 'react-admin';


export const ProjectList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="slug" />
            <DataTable.Col source="description" />
            <DataTable.Col source="date" />
            <DataTable.Col source="createdAt" />
            <DataTable.Col source="updatedAt" />
            <DataTable.Col source="images" />
            <EditButton />
        </DataTable>
    </List>
);