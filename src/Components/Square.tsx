import React from "react";
import styled from "styled-components";
import DiscordIcon from "../Icons/Discord";
import YoutubeIcon from "../Icons/Youtube";

type ContainerProps = {
  color?: string;
  textColor: string;
  column: number;
  row: number;
  size: number;
  icon?: string;
};

const Container = styled.div<ContainerProps>`
  grid-column: ${({ column, size }) => `${column}/${column + size}`};
  grid-row: ${({ row, size }) => `${row}/${row + size}`};
  color: white;
  padding: 10px;
  margin: 5px;
  border-radius: 3px;
  background-color: ${({ color }) => (color ? color : "")};
  color: ${({ textColor }) => (textColor ? textColor : "")};
  ${({ icon }) => icon && `background-image: ${icon}`};
  ${({ icon }) => icon && `background-size: 50%`};
  ${({ icon }) => icon && `background-repeat: no-repeat`};
  ${({ icon }) => icon && `background-position: center`};

  aspect-ratio: 1;
  position: relative;
  display: flex;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const Icon = styled.div`
  margin: auto auto;
  svg {
    width: 50px;
    height: 50px;
    fill: white;
  }
`;

const Label = styled.span`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
`;

const Link = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

type Platform = "youtube" | "discord" | "league";

type Props = {
  platform?: Platform;
  url?: string;
  label?: string;
  children?: any;
  column: number;
  row: number;
  size: number;
  icon?: string;
};

function Square({
  column,
  row,
  size,
  children,
  label,
  platform,
  icon,
  url,
}: Props) {
  const getPlatformIcon = (platform?: Platform) => {
    switch (platform) {
      case "discord":
        return <DiscordIcon />;
      case "youtube":
        return <YoutubeIcon />;
      case "league":
      default:
        return;
    }
  };

  const getPlatformColor = (platform?: Platform) => {
    switch (platform) {
      case "discord":
        return "#7289da";
      case "youtube":
        return "#ff0000";
      case "league":
      default:
        return "#ffffff";
    }
  };

  const getTextColor = (platform?: Platform) => {
    switch (platform) {
      case "discord":
      case "youtube":
        return "#ffffff";
      case "league":
      default:
        return "#000";
    }
  };

  const platformColor = getPlatformColor(platform);
  const textColor = getTextColor(platform);
  const platformIcon = getPlatformIcon(platform);

  const uglyLink = url && <Link href={url} target={"_blank"} />;

  return (
    <Container
      column={column}
      row={row}
      size={size}
      color={platformColor}
      textColor={textColor}
      icon={icon}
    >
      {url && uglyLink}
      {platformIcon && <Icon>{platformIcon}</Icon>}
      {label && <Label>{label}</Label>}
      {children}
    </Container>
  );
}

export default Square;
