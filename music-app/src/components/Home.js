import {useState, useEffect} from 'react';
import Player from './Player';

function Home() {
  const [songs] = useState([
    {
      title: "Joy is coming",
      artist: "Fido",
      img_src: "./images/fido.jpg",
      src: "./music/Joy is coming.mp3",
    },
    {
      title: "Military",
      artist: "Asake",
      img_src: "./images/asake.jpg",
      src: "./music/Asake_-_Military.mp3"
    },
    {
      title: "Jay Jay",
      artist: "Ruger",
      img_src: "./images/Ruger_(Singer).jpg",
      src: "./music/ruger jay jay.mp3"
    },
    {
      title: "Safe Haven",
      artist: "Omahlay",
      img_src: "./images/omahlay.jpg",
      src: "./music/safe haven.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div>
       <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
        /> 
    </div>
  );
}

export default Home;
