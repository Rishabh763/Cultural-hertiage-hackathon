import React, { useRef, useState } from 'react';

function Collection() {


  const info = [
    {
      "IndianVisualArt": {
        "HeritagePaintings": [
          {
            "name": "Rastrapati Bhavan",
            "description": "Collection of heritage paintings located in Rastrapati Bhavan."
          },
          {
            "name": "Dhuli Painting",
            "description": "Traditional art form known for its intricate designs and vibrant colors."
          },
          {
            "name": "Warli Painting",
            "description": "Ancient tribal art depicting daily life and nature using simple geometric shapes."
          },
          {
            "name": "Gonda Painting",
            "description": "Art form originating from Gonda district, known for its cultural significance."
          },
          {
            "name": "Santal Painting",
            "description": "Traditional art of the Santal tribe, portraying their folklore and rituals."
          },
          {
            "name": "Madhubani Painting",
            "description": "Famous art form from Bihar, characterized by intricate patterns and themes."
          }
        ]
      },
      "IndianDanceAndMusic": {
        "MusicAndDance": {
          "AvandhaVadhya": {
            "name": "Percussion Instruments",
            "description": "Includes instruments like tabla, mridangam, and dholak, adding rhythm to music."
          },
          "TatVadhya": {
            "name": "String Instruments",
            "description": "Stringed instruments like sitar, veena, and sarod, producing melodious tunes."
          },
          "GhanVadhya": {
            "name": "Solid Instruments",
            "description": "Instruments made of solid materials like bells, cymbals, and gongs, creating resonance."
          },
          "ShushirVadhya": {
            "name": "Wins Instruments",
            "description": "Wind instruments such as flute, shehnai, and bansuri, producing soothing sounds."
          }
        },
        "Dance": {
          "name": "Statewise Cultural Dance",
          "description": "Diverse dance forms representing the cultural heritage of different Indian states."
        }
      },
      "IndianCuisineAndFood": {
        "FoodAndCuisine": [
          {
            "name": "Statewise Food and Cuisine",
            "description": "Explore the culinary delights of each Indian state, from North to South and East to West."
          },
          {
            "name": "Recipes of Food",
            "description": "Discover authentic recipes passed down through generations, capturing the essence of Indian cuisine."
          },
          {
            "name": "Spices of Food",
            "description": "Learn about the aromatic spices that add flavor and depth to Indian dishes."
          },
          {
            "name": "Festival Special Cuisines",
            "description": "Delve into festive delicacies prepared during special occasions, celebrating India's rich cultural diversity."
          },
          {
            "name": "Food Gallery",
            "description": "Visual feast showcasing mouthwatering dishes and culinary traditions from across India."
          }
        ]
      }
    }
  ];
  

  return (
    <div className='grids ' >
    
      <div class="grandparent">
      <img src="/assets/food.jpg" alt="food" />
       <div class="content">
         <a href="https://en.wikipedia.org/wiki/Indian_cuisine">
           <span class="title">
             Indian Cuisine And Food
           </span>
         </a>
     
         <p class="desc">
         "Explore the vibrant flavors and rich culinary heritage of Indian cuisine."
         </p>
     
         <a class="action" href="#">
           Find out more
           <span aria-hidden="true">
             →
           </span>
         </a>
       </div>
       </div>

      <div class="grandparent">
      <img src="/assets/dance.jpg" alt="dance" />
       <div class="content">
         <a href="https://en.wikipedia.org/wiki/Indian_art">
           <span class="title">
           Indian Dance And Music
           </span>
         </a>
     
         <p class="desc">
         "Explore the rhythmic harmony of Indian dance and music traditions."
           
         </p>
     
         <a class="action" href="#">
           Find out more
           <span aria-hidden="true">
             →
           </span>
         </a>
       </div>
       </div>

      <div class="grandparent">
      <img src="/assets/art.jpg" alt="art" />
       <div class="content">
         <a href="https://en.wikipedia.org/wiki/Dance_in_India">
           <span class="title">
             Indian Visual Art
           </span>
         </a>
     
         <p class="desc">
         "Explore the vibrant tapestry of Indian artistry, rich in history and cultural diversity."
         </p>
     
         <a class="action" href="#">
           Find out more
           <span aria-hidden="true">
             →
           </span>
         </a>
       </div>
     </div>
        
    
  </div>

  );
}


export default Collection;
