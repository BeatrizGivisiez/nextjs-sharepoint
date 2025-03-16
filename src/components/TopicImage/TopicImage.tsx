import Image from "next/image";

import { PALETTE } from "@/app/theme/styles/constantes";
import { Box, Container, Typography } from "@mui/material";

import {
  topicImage,
  topicImage_bigEllipsis,
  topicImage_center,
  topicImage_containerDesktop,
  topicImage_containerMobile,
  topicImage_description,
  topicImage_icon,
  topicImage_phoneBox,
  topicImage_smallEllipsis,
  topicImage_title,
  topicImage_topic,
  topicImage_topicTextStacker,
  topicImage_wrapper,
} from "./styles";
import { TopicImageProps, TopicProps } from "./types";

export const TopicImage = ({
  backgroundImg,
  backgroundImgAlt,
  children,
}: TopicImageProps) => {
  return (
    <Box sx={topicImage}>
      <Container sx={topicImage_containerDesktop}>
        <Box sx={topicImage_center}>
          <Box sx={topicImage_bigEllipsis} />
        </Box>
        <Box sx={topicImage_center}>
          <Box sx={topicImage_smallEllipsis} />
        </Box>
        <Box sx={topicImage_center}>
          <Image src={backgroundImg} alt={backgroundImgAlt} />
        </Box>
        <Box sx={topicImage_wrapper}>{children}</Box>
      </Container>
      <Container sx={topicImage_containerMobile}>
        <Box sx={topicImage_phoneBox}>
          <Box sx={topicImage_smallEllipsis} />
          <Box sx={topicImage_bigEllipsis} />
          <Image src={backgroundImg} alt={backgroundImgAlt} />
        </Box>
        <Box sx={topicImage_wrapper}>{children}</Box>
      </Container>
    </Box>
  );
};

export const Topic = ({ title, description, icon: Icon }: TopicProps) => {
  return (
    <Box sx={topicImage_topic}>
      <Box sx={topicImage_icon}>
        {Icon && <Icon color={PALETTE.SECONDARY_MAIN} weight="duotone" />}
      </Box>
      <Box sx={topicImage_topicTextStacker}>
        <Typography sx={topicImage_title}>{title}</Typography>
        <Typography sx={topicImage_description}>{description}</Typography>
      </Box>
    </Box>
  );
};
