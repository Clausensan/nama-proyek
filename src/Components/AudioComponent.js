import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import PembacaanAudio from '../img/Pembacaan.mp3';
import 'tailwindcss/tailwind.css';

const AudioComponent = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="font-mono text-base/loose italic tracking-wide text-center first-letter:xxl">
        <h1 className="text-2xl first-letter: font-bold">Proklamasi</h1>
        <div>
          <p>
            Kami bangsa Indonesia dengan ini menyatakan Kemerdekaan Indonesia.<br />
            Hal - hal jang mengenai pemindahan kekoeasaan d.l.l., di-<br />selenggarakan dengan tjara saksama dan dalam tempo jang se-<br />singkat-singkatnja.<br />
          </p>
          <div>
            <p>
              Djakarta, hari 17 boelan 8 tahoen 05 <br />
              Atas nama bangsa Indonesia.<br />
              Soekarno/Hatta.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <ReactAudioPlayer
          src={PembacaanAudio}
          controls
          className="my-4"
        />
      </div>
    </div>
  );
};

export default AudioComponent;