import { DataTable, List, EditButton, DateField, ImageField, FunctionField } from 'react-admin';


export const ProjectList = () => (
    <List>
        <DataTable>
            <DataTable.Col source="id" />
            <DataTable.Col source="title" />
            <DataTable.Col source="slug" />
            <DataTable.Col source="description" >
                <FunctionField render={record => record.description?.length > 25 ? record.description.substring(0, 25) + '...' : record.description} />
            </DataTable.Col>
            <DataTable.Col source="date" > 
                <DateField source="date" />
            </DataTable.Col>
            <DataTable.Col source="createdAt" > 
                <DateField source="createdAt" showTime={true} /> 
            </DataTable.Col>
            <DataTable.Col source="updatedAt" > 
                <DateField source="updatedAt" showTime={true} />
            </DataTable.Col>
            <DataTable.Col label="">
                <EditButton />
            </DataTable.Col>
        </DataTable>
    </List>
);