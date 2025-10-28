import { DataTable, EmailField, List, EditButton, UrlField, DateField } from 'react-admin';


export const AppointmentList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="firstName" />
            <DataTable.Col source="lastName" />
            <DataTable.Col source="companyName" />
            <DataTable.Col source="email">
                <EmailField source="email" />
            </DataTable.Col>
            <DataTable.Col source="appointmentDate" >
                <DateField source="appointmentDate" />
            </DataTable.Col>
            <DataTable.Col source="appointmentTime" >
                <DateField source="appointmentTime" />
            </DataTable.Col>
            <DataTable.Col source="subject" />
            <DataTable.Col source="message" />
            <DataTable.Col source="status" />
            <DataTable.Col source="createdAt" >
                <DateField source="createdAt" />
            </DataTable.Col>
            <DataTable.Col source="updatedAt" >
                <DateField source="updatedAt" />
            </DataTable.Col>
            <EditButton />
        </DataTable>
    </List>
);