import React from 'react'
import playlists from './List'
import PlayListRow from './PlayListRow'
// import './playlist.css'
import YoutubeContext from './YoutubeContent'
import SongRow from './SongRow'

const Playlist = () => {
    return (
        <YoutubeContext>
            <table>
                <tbody>
                    <tr>
                        <th>S. No</th>
                        <th>Playlists</th>
                        <th>Subscription</th>
                    </tr>
                    {playlists.map((item, index) => {
                        return (
                            <PlayListRow key={index} id={index} listItems={item} />
                        )
                    })}
                </tbody>

            </table>
            <br />
            <SongRow />
        </YoutubeContext>
    )
}

export default Playlist