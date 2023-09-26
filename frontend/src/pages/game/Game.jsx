
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FootNavBar from '../../component/footbar/FootNavBar';
import Navbar from '../../component/navbar/Navbar';

const GameWrapper = styled.div`
  text-align: center;
  background-color: #069861;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #fff; /* Text color */
  min-height: 100vh; /* Ensure the game takes up the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GameHeader = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Scoreboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Score = styled.div`
  font-size: 18px;
`;

const Lives = styled.div`
  font-size: 18px;
`;

const MaterialContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const MaterialCard = styled.div`
  cursor: pointer;
  width: 150px;
`;

const MaterialImage = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border: 2px solid #ddd;
  overflow: hidden;
  transition: transform 0.2s;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
  }

  &:hover {
    transform: scale(1.1); /* Add a slight zoom effect on hover */
  }
`;

const CorrectIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
`;

const WrongIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
  width: 30px;
  height: 30px;
`;

function shuffleArray(array) {
  let newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const imagePaths = {
  1: {
    // Shuffle the order of images for round 1
    images: shuffleArray([
      {
        path: require('../../component/gamechoices/notplastic/1.jpg'),
        recyclable: false,
      },
      {
        path: require('../../component/gamechoices/plastic/1.jpg'),
        recyclable: true,
      },
      // Add more images for round 1
    ]),
  },
  2: {
    // Shuffle the order of images for round 1
    images: shuffleArray([
      {
        path: require('../../component/gamechoices/notplastic/2.jpg'),
        recyclable: false,
      },
      {
        path: require('../../component/gamechoices/plastic/2.jpg'),
        recyclable: true,
      },
      // Add more images for round 1
    ]),
  },
  3: {
    // Shuffle the order of images for round 1
    images: shuffleArray([
      {
        path: require('../../component/gamechoices/notplastic/3.jpg'),
        recyclable: false,
      },
      {
        path: require('../../component/gamechoices/plastic/3.jpg'),
        recyclable: true,
      },
      // Add more images for round 1
    ]),
  },
  4: {
    // Shuffle the order of images for round 1
    images: shuffleArray([
      {
        path: require('../../component/gamechoices/notplastic/4.jpg'),
        recyclable: false,
      },
      {
        path: require('../../component/gamechoices/plastic/4.jpg'),
        recyclable: true,
      },
      // Add more images for round 1
    ]),
  },
  5: {
    // Shuffle the order of images for round 1
    images: shuffleArray([
      {
        path: require('../../component/gamechoices/notplastic/5.jpg'),
        recyclable: false,
      },
      {
        path: require('../../component/gamechoices/plastic/5.jpg'),
        recyclable: true,
      },
      // Add more images for round 1
    ]),
  },
  6: {
    // Shuffle the order of images for round 1
    images: shuffleArray([
      {
        path: require('../../component/gamechoices/notplastic/6.jpg'),
        recyclable: false,
      },
      {
        path: require('../../component/gamechoices/plastic/6.jpg'),
        recyclable: true,
      },
      // Add more images for round 1
    ]),
  },
  // Add more image paths for rounds 3, 4, and 5 here
};

const Game = () => {
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [round, setRound] = useState(1);
  const [userChoices, setUserChoices] = useState([]);
  const [materialImages, setMaterialImages] = useState({
    notPlastic: '',
    plastic: '',
  });

  useEffect(() => {
    // Load images for the current round
    setMaterialImages({
      notPlastic: imagePaths[round].notPlastic,
      plastic: imagePaths[round].plastic,
    });
  }, [round]);

  const handleMaterialClick = (id, recyclable) => {
    if (!userChoices.includes(id)) {
      setUserChoices([...userChoices, id]);
      if (recyclable) {
        setScore(score + 1);
      } else {
        setLives(lives - 1);
      }
      // Add a delay to reset the user choice and move to the next round
      setTimeout(() => {
        setUserChoices(userChoices.filter(choiceId => choiceId !== id));
        setRound(round + 1);
      }, 1000); // Adjust the delay as needed
    }
  };

  return (
    <>
    <GameWrapper>
      <Navbar />
      <GameHeader>Recycling Game</GameHeader>
      <div>Click on the recyclable materials</div>
      <Scoreboard>
        <Score>Score: {score}</Score>
        <Lives>Lives: {lives}</Lives>
      </Scoreboard>
      <div>Round: {round}</div>
      <MaterialContainer>
        {round <= 5 && lives > 0 
  ? imagePaths[round].images.map((image, index) => (
    <MaterialCard
      key={index}
      onClick={() => handleMaterialClick(index, image.recyclable)}
    >
      <MaterialImage
        className={`${userChoices.includes(index) ? 'chosen' : ''}`}
      >
        {userChoices.includes(index) && !image.recyclable ? (
          <WrongIcon src="https://sweetclipart.com/multisite/sweetclipart/files/x_mark_red.png" alt="Wrong" />
        ) : null}
        {userChoices.includes(index) && image.recyclable ? (
          <CorrectIcon src="https://openclipart.org/image/2400px/svg_to_png/167549/Kliponious-green-tick.png" alt="Correct" />
        ) : null}
        <img src={image.path} alt="Material" />
      </MaterialImage>
    </MaterialCard>
  ))
: (
  <div>
    <h2>Game Over!</h2>
    <p>Your score: {score}</p>
  </div>
)}
</MaterialContainer>
</GameWrapper>
<FootNavBar />
</>
);
};

export default Game;