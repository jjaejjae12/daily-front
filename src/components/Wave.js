import React from 'react'
import Wave from 'react-wavify'

function WaveEffect() {
    return (
        <>
            <Wave fill='#FCC4C4'
                paused={false}
                options={{
                    height: 50,
                    amplitude: 65,
                    speed: 1,
                    points: 3
                }}
                style={{
                    position: 'absolute',
                    top: '-30vh',
                    // backgroundColor:'red',
                }}
            />
            <Wave fill='#FCE9E9'
                paused={false}
                options={{
                    height: 40,
                    amplitude: 70,
                    speed: 1,
                    points: 2
                }}
                style={{
                    position: 'absolute',
                    top: '-20vh',
                }}
            />

        </>
    );
}

export default WaveEffect;