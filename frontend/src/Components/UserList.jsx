import { DataTable, EmailField, List, EditButton, DateField } from 'react-admin';


export const UserList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="createdAt" > 
                <DateField source="createdAt" showTime={true} />
            </DataTable.Col>
            <DataTable.Col source="updatedAt" > 
                <DateField source="updatedAt" showTime={true} />
            </DataTable.Col>
            <EditButton />
        </DataTable>
    </List>
);