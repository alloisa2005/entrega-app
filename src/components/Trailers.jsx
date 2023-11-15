import React from "react";
import YouTubePlayer from "./YoutubePlayer";

const Trailers = ({ trailer1, trailer2, trailer3 }) => {
  let cantCol = 1;
  if (trailer1 && trailer2 && trailer3) cantCol = 3;
  else if (trailer1 && trailer2) cantCol = 2;  

  return (
    <div className="contenedor my-8">
      <p className="text-2xl font-bold border-b-2 border-black">Trailers</p>

      <div
        className={`grid grid-cols-1 ${
          cantCol === 1
            ? "md:grid-cols-1"
            : cantCol === 2
            ? "md:grid-cols-2"
            : "md:grid-cols-3"
        } items-center justify-between w-full gap-6 mt-4`}
      >
        {trailer1 && <YouTubePlayer videoId={trailer1} />}
        {trailer2 && <YouTubePlayer videoId={trailer2} />}
        {trailer3 && <YouTubePlayer videoId={trailer3} />}
      </div>
    </div>
  );
};

export default Trailers;
