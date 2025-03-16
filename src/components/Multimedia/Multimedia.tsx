import * as React from "react";
import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Button, Typography } from "@mui/material";
import { Download, Play } from "@phosphor-icons/react";
import {
  multimedia_button,
  multimedia_card,
  multimedia_card_video,
  multimedia_card_video_poster,
  multimedia_cardTitle,
  multimedia_textStacker,
} from "./styles";
import { MultimediaProps } from "./types";

interface Source {
  src: string;
  type: string;
}

export const Multimedia = ({ id, logo, title, video }: MultimediaProps) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const playButtonRef = React.useRef<HTMLDivElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      if (playButtonRef.current) {
        playButtonRef.current.style.display = "none";
      }
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      if (playButtonRef.current) {
        playButtonRef.current.style.display = "block";
      }
    }
  };

  return (
    <>
      {logo && (
        <Box sx={multimedia_card}>
          <img src={logo ?? ""} alt="Image Banner" />
          <Box sx={multimedia_textStacker}>
            <Typography sx={multimedia_cardTitle}>{title}</Typography>
            <Button
              sx={multimedia_button}
              variant="contained"
              endIcon={<Download weight="regular" size={22} color={PALETTE.BLACK} />}
              onClick={() => window.open(logo ?? "", "_blank")}
            >
              Descarregar
            </Button>
          </Box>
        </Box>
      )}

      {video && (
        <Box sx={multimedia_card_video}>
          <Box
            ref={playButtonRef}
            sx={multimedia_card_video_poster}
            onClick={handlePlayVideo}
          >
            <Play size={64} color={PALETTE.WHITE} />
          </Box>
          <video
            width="320"
            height="240"
            controls
            preload="metadata"
            ref={videoRef}
            onPause={handlePauseVideo}
            onPlay={handlePlayVideo}
          >
            <source src={video} type="video/mp4" />
            <source
              src={video.replace(/\.mp4$/, ".mkv") ?? ""}
              type="video/x-matroska"
            />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>
          <Box sx={multimedia_textStacker}>
            <Typography sx={multimedia_cardTitle}>{title}</Typography>
          </Box>
        </Box>
      )}
    </>
  );
};
