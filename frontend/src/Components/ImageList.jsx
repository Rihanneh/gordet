import { DataTable, List, EditButton, DateField } from 'react-admin';


export const ImageList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="path" />
            <DataTable.Col source="createdAt" >
                <DateField source="createdAt" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="updatedAt" >
                <DateField source="updatedAt" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="service" />
            <DataTable.Col source="projects" />
            <EditButton />
        </DataTable>
    </List>
);