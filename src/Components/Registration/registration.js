import React, { Component } from 'react'
import { Title, TextArea, HeaderSection, CentralContainer, Button, Subtitle } from './styled'
import axios from 'axios';
import { Link } from 'react-router-dom';

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
            <p>in {150 - this.state.selfInputText.length} characters</p>
            <Subtitle>
                For better results determining your <br /> Personality type, sign up with
            </Subtitle>
            <br></br>
            <img src={require("../../Assets/social.png")} />
            <br></br>
            <br></br>
            <Link style={{ background: 'none' }} to="/events">
                <Button onClick={this.onClickHandler}>Sign Up</Button>
            </Link>
        </CentralContainer >
    }
}