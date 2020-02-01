import React, { ChangeEvent, SyntheticEvent, useState } from "react"
import { Grid, Label, Input, Header, TextArea, Button, Container } from "semantic-ui-react"
import { sendSms } from "./MsgSenderService"

const MsgSender = () => {
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [content, setContent] = useState("")

    const handleFromNumber = (event: ChangeEvent, data: any) => {
        setFrom(data.value)
    }
    const handleToNumber = (event: ChangeEvent, data: any) => {
        setTo(data.value)
    }
    const handleContent = (event: SyntheticEvent, data: any) => {
        setContent(data.value)
    }
    const handleSubmit = async () => {
        /* TODO: Validate mandatory fields and phone numbers */
        const response = await sendSms(from, to, content)
        console.log("response: ", response)
    }

    return <Container>
        <Grid padded={"horizontally"}>
            <Grid.Row centered={true}>
                <Header>
                    Patient Connect
            </Header>
            </Grid.Row>
            <Grid.Row centered={true}>
                <Grid.Column>
                    <Label>From:</Label>
                </Grid.Column>
                <Grid.Column>
                    <Input className={"from-number"} onChange={handleFromNumber} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered={true}>
                <Grid.Column>
                    <Label>To:</Label>
                </Grid.Column>
                <Grid.Column>
                    <Input className={"to-number"} onChange={handleToNumber} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered={true}>
                <Grid.Column>
                    <Label>Content:</Label>
                </Grid.Column>
                <Grid.Column>
                    <TextArea className={"content"} onInput={handleContent} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered={true}>
                <Button
                    primary={true}
                    style={{ float: "right" }}
                    onClick={handleSubmit}
                >
                    Send
                </Button>
            </Grid.Row>
        </Grid>
    </Container>
}

export default MsgSender
