import { Create, DateInput, required, SelectInput, SimpleForm, TextInput, TimeInput } from 'react-admin';

const statusChoices = [
    { id: "PENDING", name: "Pending" },
    { id: "CONFIRMED", name: "Confirmed" },
    { id: "CANCELED", name: "Canceled" },
];

export const AppointmentCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="id" readOnly />
            <TextInput source="firstName" validate={[required()]} />
            <TextInput source="lastName" validate={[required()]} />
            <TextInput source="companyName" />
            <TextInput source="email" validate={[required()]} />
            <DateInput source="appointmentDate" defaultValue={new Date().toISOString()} validate={[required()]} />
            <TimeInput source="appointmentTime" validate={[required()]} />
            <TextInput source="subject" validate={[required()]} />
            <TextInput source="message" validate={[required()]} />
            <SelectInput source="status" choices={statusChoices} />
        </SimpleForm>
    </Create>
);
