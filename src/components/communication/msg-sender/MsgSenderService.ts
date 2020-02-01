import Twilio from 'twilio'
export const sendSms = (from: string, to: string, msg: string) => {
    try {
        const client = Twilio(process.env.REACT_APP_ACC_SID, process.env.REACT_APP_AUTH_TOKEN)
        return client.messages.create({
            body: msg,
            from,
            to,
            statusCallback: 'http://postb.in/1234abcd',
        })
    } catch (error) {
        console.log("Failed with error: ", error)
    }
}