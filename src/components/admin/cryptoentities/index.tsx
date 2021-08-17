import React from "react";
import {List, Datagrid, 
    NumberField, TextField, DateField, 
    ArrayField, SingleFieldList, ChipField,
    Create, Edit, SimpleForm, EditButton,
    TextInput, NumberInput, SelectInput, AutocompleteInput,
    ArrayInput, AutocompleteArrayInput, SimpleFormIterator,
    DateTimeInput,
    Filter, SearchInput } from 'react-admin';
import SimpleChipField from "../simplechipfield";
// const CustomerFilter = (props) => (
// <Filter {...props}>
//     <SearchInput placeholder='Customer Email' 
//                     source='email' resettable alwaysOn />
// </Filter>

// )

const entitytypeChoices = [
    {id:"Project", name:"Project"}, 
    {id:"Person", name: "Person"}
]

const ecosystemChoices = [
    {id: "BTC", name: "BTC"},
    {id: "ETH", name: "ETH"},
    {id: "ADA", name: "ADA"},
    {id: "BNB", name: "BNB"},
    {id: "DOT", name: "DOT"},
    {id: "SOL", name: "SOL"},
    {id: "FTM", name: "FTM"},
    {id: "AVAX", name: "AVAX"},
]

const categoryChoices = [
    {id: "Layer1", name: "Layer1"},
    {id: "Layer2", name: "Layer2"},
    {id: "DEX", name: "DEX"},
    {id: "CEX", name: "CEX"},
    {id: "Aggregator", name: "Aggregator"},
    {id: "DeFi", name: "DeFi"},
    {id: "Middleware", name: "Middleware"},
    {id: "Privacy", name: "Privacy"},
    {id: "NFT", name: "NFT"},
    {id: "Gaming", name: "Gaming"},
    {id: "Innovation", name: "Innovation"},
    {id: "Hype", name: "Hype"},
]

function CryptoEntitiesList(props){
    return (
        <List { ...props } 
            //filters={<CustomerFilter/>}
            >
            <Datagrid>
                <EditButton/>
                <TextField source="name"/>
                <TextField source="symbol"/>
                <TextField source="entitytype"/>
                <TextField source="ecosystem" />
                
                <ArrayField source="category">
                    <SingleFieldList>
                        {/* <ChipField source="0"/> */}
                        <SimpleChipField record=""/>
                    </SingleFieldList>
                </ArrayField>

                <ArrayField source="affiliatedto">
                    <SingleFieldList>
                        {/* <ChipField source="0"/> */}
                        <SimpleChipField record=""/>
                    </SingleFieldList>
                </ArrayField>

                <TextField source="webpage" />
                <TextField source="twitter" />
                <TextField source="discord" />
                <TextField source="telegram" />
                <TextField source="medium" />
                <TextField source="repo" />
                <TextField source="hiring" />
                
                <TextField source="logolink" />

                <ArrayField source="otherlinks">
                    <SingleFieldList>
                        <ChipField />
                    </SingleFieldList>
                </ArrayField>

                <TextField source="value" />
                <DateField source="datetime"/>
            </Datagrid>
        </List>
    );
};

export const CryptoEEdit: React.FC = (props) => {
    return (
        <Edit {...props}>
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput source="symbol"/>
                <AutocompleteInput source="entitytype" 
                    choices={entitytypeChoices}
                />
                <AutocompleteInput source="ecosystem" 
                    choices={ecosystemChoices}
                />

                <ArrayInput source="category">
                    <SimpleFormIterator>
                    <AutocompleteInput source=""
                            choices={categoryChoices}
                        />
                    </SimpleFormIterator>
                </ArrayInput>

                <ArrayInput source="affiliatedto">
                    <SimpleFormIterator>
                        <AutocompleteInput source=""
                            choices={ecosystemChoices}
                        />
                    </SimpleFormIterator>
                </ArrayInput>

                <TextInput source="twitter" />
                <TextInput source="discord" />
                <TextInput source="telegram" />
                <TextInput source="medium" />
                <TextInput source="repo" />
                <TextInput source="hiring" />
                <TextInput source="webpage" />
                <TextInput source="logolink" />

                <ArrayInput source="otherlinks">
                    <SimpleFormIterator>
                        <TextInput source=""/>
                    </SimpleFormIterator>
                </ArrayInput>

                <TextInput source="value" />
                <DateTimeInput disable source="datetime" />
            </SimpleForm>
        </Edit>
    )
};

export const CryptoECreate: React.FC = (props) => {
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source="name"/>
                <TextInput source="symbol"/>
                <AutocompleteInput source="entitytype" 
                    choices={entitytypeChoices}
                />
                <AutocompleteInput source="ecosystem" 
                    choices={ecosystemChoices}
                />

                <ArrayInput source="category">
                    <SimpleFormIterator>
                    <AutocompleteInput source=""
                            choices={categoryChoices}
                        />
                    </SimpleFormIterator>
                </ArrayInput>

                <ArrayInput source="affiliatedto">
                    <SimpleFormIterator>
                        <AutocompleteInput source=""
                            choices={ecosystemChoices}
                        />
                    </SimpleFormIterator>
                </ArrayInput>

                <TextInput source="twitter" />
                <TextInput source="discord" />
                <TextInput source="telegram" />
                <TextInput source="medium" />
                <TextInput source="repo" />
                <TextInput source="hiring" />
                <TextInput source="webpage" />
                <TextInput source="logolink" />

                <ArrayInput source="otherlinks">
                    <SimpleFormIterator>
                        <TextInput source=""/>
                    </SimpleFormIterator>
                </ArrayInput>

                <TextInput source="value" />
                <DateTimeInput disable source="datetime" />
            </SimpleForm>
        </Create>
    )
};

export default CryptoEntitiesList;