import React from "react";
import {List, Datagrid, TextField, 
    Create, SimpleForm, TextInput, BooleanInput,
    Filter, SearchInput } from 'react-admin';

const CustomerFilter = (props) => (
<Filter {...props}>
    <SearchInput placeholder='Customer Email' 
                    source='email' resettable alwaysOn />
</Filter>

)

function CustomerList(props){
    return (
        <List { ...props } filters={<CustomerFilter/>}>
            <Datagrid>
                <TextField source="id"/>
                <TextField source="first_name"/>
                <TextField source="last_name"/>
                <TextField source="email"/>
                <TextField source="activebool" label='Active' />
            </Datagrid>
        </List>
    );
}

export const CustomerCreate: React.FC = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="id"/>
                <TextInput source="store_id"/>
                <TextInput source="first_name"/>
                <TextInput source="last_name"/>
                <TextInput source="email"/>
            </SimpleForm>
        </Create>
    )
}
export default CustomerList;