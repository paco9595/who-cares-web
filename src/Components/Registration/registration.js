import React, { Component } from 'react'
import { Title, TextArea, HeaderSection, CentralContainer, Button, Subtitle } from './styled'
import axios from 'axios'


export class Registration extends Component {
    state = {
        selfInputText: ""
    }
    onClickHandler = () => {
        console.log(this.state.selfInputText)

        /* axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      }) */

    }
    onTodoChange = (e) => {
        this.setState({ selfInputText: e })

    }
    render() {
        return <CentralContainer>
            <HeaderSection>
                <Title>Describe YourSelf</Title>
            </HeaderSection >
            <br></br>
            <TextArea
                onChange={e => this.onTodoChange(e.target.value)}
            ></TextArea>
            <br></br>
            <br></br>
            <Subtitle>
                For better results determining your <br /> Personality type, sign up with
            </Subtitle>
            <br></br>
            <img src={require("../../Assets/social.png")} />
            <br></br>
            <br></br>
            <Button onClick={this.onClickHandler}>Sign Up</Button>
        </CentralContainer >
    }
}