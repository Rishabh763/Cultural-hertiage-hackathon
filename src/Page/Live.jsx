import React from 'react'

function Live() {
  return (
    <div className='feature-map' >
        <h1>Enjoy your Live stream</h1>
        <h2 >Join our live stream to explore India's cultural heritage! Experience iconic landmarks, traditional arts, and vibrant festivals in real time.</h2>
        <iframe className='aspect-ratio-video max-w-6xl'  src="https://www.youtube.com/embed/D5FVQK78pws?si=aMMMN5LMQ7M6BD0m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default Live