import { Link, Typography } from "@mui/material";

import { footer_email, footer_link } from "./styles";
import { EmailProps } from "./types";

export const FooterEmail: React.FC<EmailProps> = ({ mailto, label }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    window.location.href = mailto;
    e.preventDefault();
  };

  return (
    <Link href={mailto} onClick={handleClick} sx={footer_link}>
      <Typography sx={footer_email}>{label}</Typography>
    </Link>
  );
};
