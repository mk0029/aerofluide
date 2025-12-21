import { NAV_ICONS } from "@/helper/icons";
import React from "react";

// SVG templates as JSX with plain paths (no className on them)
const icons: Record<
  string,
  React.ReactElement<React.SVGProps<SVGSVGElement>>
> = {
  ...NAV_ICONS,
};

type IconName = keyof typeof icons;

type IconsProps = {
  name: IconName;
  className?: string;
} & React.SVGProps<SVGSVGElement>;

const Icons: React.FC<IconsProps> = ({ name, className = "", ...rest }) => {
  const rawSvg = icons[name];
  if (!rawSvg) return null;

  // clone the SVG and add className to it + className to each <path>
  const clonedPaths = React.Children.map(
    rawSvg.props.children,
    (child, index) => {
      if (React.isValidElement(child) && child.type === "path") {
        return React.cloneElement(
          child as React.ReactElement<React.SVGProps<SVGPathElement>>,
          {
            className: `path_${index + 1}`,
          }
        );
      }
      return child;
    }
  );

  return React.cloneElement(rawSvg, {
    className,
    ...rest,
    children: clonedPaths,
  });
};

export default Icons;
