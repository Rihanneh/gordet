import { DateField, EmailField, SelectField, Show, SimpleShowLayout, TextField } from 'react-admin';

export const AppointmentShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="companyName" />
            <EmailField source="email" />
            <DateField source="appointmentDate" />
            <DateField source="appointmentTime" showTime showDate={false} />
            <TextField source="subject" />
            <TextField source="message" />
            <SelectField source="status" />
            <DateField source="updatedAt" showTime={true} />
            <DateField source="createdAt" showTime={true} />
        </SimpleShowLayout>
    </Show>
);
