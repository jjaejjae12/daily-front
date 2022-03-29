import React from 'react'
import Wave from 'react-wavify'

function WaveEffect() {
    return (
        <>
            <div style={{
                position: 'relative',
                top: '90vh',
                backgroundColor: '#FCE9E9',
                height: '10vh',

            }}>
                <Wave fill='#FCC4C4'
                    paused={false}
                    options={{
                        height: 50,
                        amplitude: 65,
                        speed: 0.5,
                        points: 3
                    }}
                    style={{
                        position: 'absolute',
                        top: '-20vh'
                    }}
                />
                <Wave fill='#FCE9E9'
                    paused={false}
                    options={{
                        height: 40,
                        amplitude: 70,
                        speed: 0.5,
                        points: 2
                    }}
                    style={{
                        position: 'absolute',
                        top: '-20vh',
                    }}
                />
            </div>
        </>
    );
}

export default WaveEffect;