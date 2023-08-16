import React from "react";
import styled from "styled-components";

const AboutText = styled.div`
  padding: 26px 20px 26px 20px;
  ul {
    list-style: none;
    padding: 10px 20px;
  }
  .last-para {
    padding-top: 10px;
  }
`;

function About() {
  return (
    <AboutText>
      <h1>
        Introducing the Pokémon Trading Card App: Unleash Your Inner Trainer!
      </h1>

      <p>
        Are you ready to embark on a thrilling journey into the captivating
        world of Pokémon? Look no further than our cutting-edge Pokémon Trading
        Card App – your one-stop destination to dive into the excitement of
        collecting, trading, and battling with iconic Pokémon trading cards.
        With a range of powerful features, our app offers an unparalleled
        experience that caters to both seasoned trainers and curious newcomers.
        Let's explore the extraordinary features that make our app stand out
        from the rest:
      </p>
      <ul>
        <li>
          <h3>1. Comprehensive Card Collection:</h3>
          <p>
            Discover a vast collection of Pokémon trading cards from various
            sets and series. Our app offers a comprehensive library, featuring
            cards from different generations, each meticulously designed to
            capture the essence of the Pokémon universe.
          </p>
        </li>

        <li>
          <h3>2. Set Exploration:</h3>
          <p>
            Delve into the expansive world of Pokémon sets, each with its own
            unique theme, artwork, and strategy. Uncover the stories behind each
            set and uncover the cards that hold the key to your deck's success.
          </p>
        </li>

        <li>
          <h3>3. Set Details and Visualization:</h3>
          <p>
            Ever wondered about the intricacies of a Pokémon set? Our app
            provides in-depth set details, including set name, series, release
            date, and card count. Visualize the stunning artwork of each set and
            bring the magic of Pokémon to life on your device.
          </p>
        </li>

        <li>
          <h3>4. Search and Filter:</h3>
          <p>
            Effortlessly search and filter through the vast card collection.
            Find cards based on name, type, rarity, and more. Our user-friendly
            search and filter options ensure that you locate your desired cards
            with ease.
          </p>
        </li>

        <li>
          <h3>5. Card Details and Types:</h3>
          <p>
            Get up close and personal with your favorite cards. Explore detailed
            card information, including attack points, weaknesses, and
            abilities. Immerse yourself in the strategic aspects of the game by
            analyzing the card types, strengths, and interactions.
          </p>
        </li>

        <li>
          <h3>6. User-Friendly Interface:</h3>
          <p>
            Our app boasts a sleek and intuitive user interface that guides you
            seamlessly through your Pokémon journey. Whether you're a beginner
            or a seasoned player, you'll feel right at home navigating our app's
            features.
          </p>
        </li>

        <li>
          <h3>7. Continuous Updates:</h3>
          <p>
            Stay on the cutting edge of the Pokémon trading card world with
            regular updates. New sets, cards, and features are introduced to
            keep the experience fresh and exciting.
          </p>
        </li>

        <li>
          <h3>8. Community Engagement:</h3>
          <p>
            Connect with fellow trainers, share strategies, and participate in
            discussions within our vibrant community. Forge new friendships and
            discover tips and tricks to enhance your Pokémon experience.
          </p>
        </li>
      </ul>
      <p class="last-para">
        Embark on an adventure like no other with the Pokémon Trading Card App.
        Embrace the thrill of collecting, strategizing, and immersing yourself
        in the captivating world of Pokémon. Unleash your inner trainer today
        and experience the magic firsthand!
      </p>
    </AboutText>
  );
}

export default About;
