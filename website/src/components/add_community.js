import * as React from "react"
import { StyledRow, StyledCell } from "baseui/table"
import { StyledBodyCell } from "baseui/table-grid"
import { FormControl } from "baseui/form-control"
import { Input } from "baseui/input"
import { Checkbox } from 'baseui/checkbox'
import { Button } from 'baseui/button'
import { useAddResource } from '../context/ResourcesContext'

const CommunityRow = () => {

    const [number, setNumber] = React.useState("")
    const [address, setAddress] = React.useState("")
    const [website, setWebsite] = React.useState("")
    const [name, setName] = React.useState("")
    const [checkboxes, setCheckboxes] = React.useState([ true, true ])
    const addResrc = useAddResource()
    
    const selectedBox = (e, index) => {
        const nextCheckboxes = [...checkboxes]
        nextCheckboxes[index] = e.currentTarget.checked
        setCheckboxes(nextCheckboxes)
    }

    const addResource = () => {
        const result = { number, address, website, name, checkboxes }
        addResrc(result)
    }

    return (
        <StyledRow key={'nothing'}>
            <StyledCell> 
                <StyledBodyCell> 
                    <FormControl label={() => "Name of Community"} >
                        <Input value={name} onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                    <FormControl label={() => "Avaible to which communities"}>
                        <Checkbox
                            checked={checkboxes[0]}
                            onChange={(e) => selectedBox(e,0)}
                            labelPlacement="left"
                        >
                            Korean
                        </Checkbox>
                    </FormControl>
                    <Checkbox
                        checked={checkboxes[1]}
                        onChange={(e) => selectedBox(e,1)}
                        labelPlacement="left"
                    >
                        Chinese
                    </Checkbox>
                </StyledBodyCell> 
            </StyledCell>
            <StyledCell> 
                <StyledBodyCell> 
                    <FormControl label={() => "Phone Number"} >
                        <Input
                            name="number"
                            value={number}
                            onChange={event => setNumber(event.currentTarget.value)}
                        />
                    </FormControl>
                    <FormControl label={() => "Address"} >
                        <Input value={address} onChange={(e) => setAddress(e.target.value)} />
                    </FormControl>
                    <FormControl label={() => "Website"} >
                        <Input value={website} onChange={(e) => setWebsite(e.target.value)} />
                    </FormControl>
                </StyledBodyCell> 
            </StyledCell>
            <StyledCell> <StyledBodyCell> 
                <Button onClick={addResource}>Add Resource</Button>
            </StyledBodyCell> </StyledCell>
        </StyledRow>
    )
}

export default CommunityRow