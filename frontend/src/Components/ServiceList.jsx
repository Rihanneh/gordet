import { DataTable, List, EditButton, DateField } from 'react-admin';


export const ServiceList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="slug" />
            <DataTable.Col source="content" />
            <DataTable.Col source="createdAt" >
                <DateField source="createdAt" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="updatedAt" >
                <DateField source="updatedAt" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="imageId" />
            <DataTable.Col source="image" />
            <EditButton />
        </DataTable>
    </List>
);