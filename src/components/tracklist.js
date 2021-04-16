import React, {useEffect, useState} from "react"
import "../styles/index.scss"

const Tracklist = () => {

    // const options = {  weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}
    // const today = new Date().toLocaleTimeString('en-us', options).split(' ', 4).join(' ').slice(0,-1)

    const request = require('request')
    const client_id = 'fe75f206e45d40dc81c0e21dfba40054'
    const client_secret = '21068bd3ec2e48d2bc4fa04fdd8d7fba'
    const [tracks, setTrack] = useState([])
    
    useEffect(() => {
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        }
        request.post(authOptions, function(error, response, body) {
            if (!error && response.statusCode === 200) {
                var token = body.access_token
                var options = {
                    url: 'https://api.spotify.com/v1/playlists/0Jbyjzx2J6nmlHjOwp26hi/tracks',
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                }
                request.get(options, function(error, response, body) {
                    setTrack(body.items)
                })
            }
        })
    })    

    return (
        <div id="playlist-container">
            <div className="load-track">
                {/* :) Today is {today}. It's nice to meet you. */}
                <span class="circle"></span>
                <div id="circle-text">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                        <defs>
                            <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                        </defs>
                        <circle cx="150" cy="100" r="75" fill="none"/>
                        <g>
                            <use xlinkHref="#circlePath" fill="none"/>
                            <text fill="#000">
                                <textPath xlinkHref="#circlePath">Songs That I Have Been Listening To Lately</textPath>
                            </text>
                        </g>
                    </svg>
                </div>
            </div>
            {tracks.slice(0, 10).map((item, index) => (
                <div className="track noselect" key={index}>
                    <a href={item.track.external_urls.spotify} target="_blank" rel="noopener noreferrer">{item.track.name}</a>
                </div>
            ))}
        </div>
    )
}

export default Tracklist
