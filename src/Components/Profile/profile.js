import React, { PureComponent } from 'react'
import Chart from 'chart.js'
import {
    ProfileContainer,
    UserContainer,
    ImgContainer,
    InfoContainer,
    GraphContainer
} from './styled'
export class Profile extends PureComponent {
    state = { user: { name: '', letter: {}, response: '' } }
    componentDidMount() {
        let letters = { 'E': .2, 'S': .4, 'F': .2, 'P': .3, 'I': .5, 'N': .2, 'T': .4, 'J': 0.5 }
        const data = { user: JSON.parse(localStorage.getItem('userCookie')) }

        const ctx = document.getElementById("myChart");
        this.setState({ user: { name: data.user.name, response: data.user.response, letter: data.user.response.split('').forEach(letter => letters[letter] = .8) } })
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Extroversion', 'Sensing', 'Feeling', 'Perceiving', 'Introversion', 'Intuition', 'Thinking', 'Judging'],
                datasets: [{
                    label: data.user.name,
                    data: Object.values(letters),
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',

                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    display: false,

                },
                pointBorderWidth: 1
            }
        });
    }


    render() {
        return (
            <ProfileContainer>
                <GraphContainer>
                    <canvas id="myChart"></canvas>
                    <UserContainer>
                        <ImgContainer>
                            <img alt="user profle" src="https://via.placeholder.com/150/92c952" />
                        </ImgContainer>
                        <InfoContainer>
                            <h3>name: {this.state.user.name}</h3>
                            <p>type :{this.state.user.response}</p>
                        </InfoContainer>
                    </UserContainer>
                </GraphContainer>
            </ProfileContainer>
        )
    }
}