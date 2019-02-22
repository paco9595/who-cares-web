import React, { PureComponent } from 'react'
import Chart from 'chart.js'
import { personality } from './../personalityData'
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
                        this.hexToRgb(personality[data.user.response].color, .2),
                    ],
                    borderColor: [
                        this.hexToRgb(personality[data.user.response].color, 1),

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

    hexToRgb = (hex, opasity) => {
        // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
        var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function (m, r, g, b) {
            return r + r + g + g + b + b;
        });

        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)},${parseInt(result[3], 16)},${opasity})`
    }
    render() {
        return (
            <ProfileContainer>
                <GraphContainer>
                    <UserContainer>
                        <InfoContainer>
                            <h2>name: {(this.state.user.name).toUpperCase()}</h2>
                            <p><strong>type: </strong>{this.state.user.response}</p>
                            <p><strong>description: </strong>Spontaneous, energetic and enthusiastic people – life is never boring around them.</p>
                        </InfoContainer>
                        {/* <ImgContainer>
                                <img alt="user profle" src="https://via.placeholder.com/150/92c952" />
                            </ImgContainer> */}
                    </UserContainer>
                    <br></br>
                    <canvas id="myChart"></canvas>
                </GraphContainer>
            </ProfileContainer>
        )
    }
}