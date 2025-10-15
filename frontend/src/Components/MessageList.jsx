import { DataTable, EmailField, List, EditButton, DateField } from 'react-admin';


export const MessageList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="firstName" />
            <DataTable.Col source="lastName" />
            <DataTable.Col source="companyName" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="subject" />
            <DataTable.Col source="message" />
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