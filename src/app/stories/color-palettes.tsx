import { useState, useEffect, useRef } from "react";
import cx from "classix";
import { Tooltip } from "@app/components/tooltip";

type Palettes = Record<string, string[]>;

export const ColorPalettes = () => {
  // Creates palette like: ["Lime100", "Lime200", "Lime300", ...]
  const creatColorVariables = (base: string, to = 10) => {
    return Array.from({ length: to }, (_, i) => {
      return `${base}${(i + 1) * 100}`;
    });
  };

  const renderPaletteWrapper = (palettes: Palettes) => (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries(palettes).map(([name, colors]) => (
        <div key={name} className="mb-2">
          <h4 className="mb-2 font-medium">{name}</h4>
          <ColorPalette colors={colors} />
        </div>
      ))}
    </div>
  );

  const colorPalettes: Palettes = {
    Lime: creatColorVariables("Lime"),
    Blue: creatColorVariables("Blue"),
    Green: creatColorVariables("Green"),
    Teal: creatColorVariables("Teal"),
    Yellow: creatColorVariables("Yellow"),
    Orange: creatColorVariables("Orange"),
    Red: creatColorVariables("Red"),
    Magenta: creatColorVariables("Magenta"),
  };

  const lightPalettes: Palettes = {
    Solid: ["Neutral0", ...creatColorVariables("Neutral"), "Neutral1100"],
    Alpha: [
      "Neutral100A",
      "Neutral200A",
      "Neutral300A",
      "Neutral400A",
      "Neutral500A",
    ],
  };

  const darkPalettes: Palettes = {
    DarkSolid: [
      "DarkNeutral-100",
      "DarkNeutral0",
      "DarkNeutral100",
      "DarkNeutral200",
      "DarkNeutral250",
      "DarkNeutral300",
      "DarkNeutral350",
      "DarkNeutral400",
      "DarkNeutral500",
      "DarkNeutral600",
      "DarkNeutral700",
      "DarkNeutral800",
      "DarkNeutral900",
      "DarkNeutral1000",
      "DarkNeutral1100",
    ],
    DarkAlpha: [
      "DarkNeutral-100A",
      "DarkNeutral100A",
      "DarkNeutral200A",
      "DarkNeutral250A",
      "DarkNeutral300A",
      "DarkNeutral350A",
      "DarkNeutral400A",
      "DarkNeutral500A",
    ],
  };

  return (
    <div className="sb-unstyled flex flex-col gap-8">
      {renderPaletteWrapper(colorPalettes)}
      <div>
        <h3 className="mb-2 text-xl font-bold text-font">
          Light mode neutrals
        </h3>
        <div
          style={{ background: "var(--Neutral100)" }}
          className="rounded p-2 text-[var(--Neutral1000)]"
        >
          {renderPaletteWrapper(lightPalettes)}
        </div>
      </div>
      <div>
        <h3 className="mb-2 text-xl font-bold text-font">Dark mode neutrals</h3>
        <div
          style={{ background: "var(--DarkNeutral0)" }}
          className="rounded p-2 text-[var(--DarkNeutral900)]"
        >
          {renderPaletteWrapper(darkPalettes)}
        </div>
      </div>
    </div>
  );
};

const ColorPalette = ({ colors }: ColorPaletteProps) => {
  const getColorValue = (variable: string) => {
    const htmlElement = document.documentElement;
    const style = getComputedStyle(htmlElement);
    return style.getPropertyValue(variable);
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const removeHexTransparency = (hex: string) => {
    if (hex.length === 7) return hex;

    return `#${hex.slice(-6)}`;
  };

  const isAlphaVariable = (colorVariable: string) =>
    colorVariable.slice(-1) === "A";

  const isDarkVariable = (colorVariable: string) =>
    colorVariable.includes("Dark");

  const isTextContrast = (colorVariable: string) => {
    if (isAlphaVariable(colorVariable)) {
      return !isDarkVariable(colorVariable);
    }

    const hexColor = getColorValue(colorVariable);
    const rgb = hexToRgb(removeHexTransparency(hexColor));

    if (!rgb) {
      return false;
    }

    const { r, g, b } = rgb;

    return r * 0.299 + g * 0.587 + b * 0.114 > 150;
  };

  return (
    <div className="rounded">
      {colors.map((color, i) => {
        const colorVariable = `--${color}`;

        return (
          <div
            key={i}
            className={cx(
              "flex justify-between p-2 text-xs",
              i === 0 ? "rounded-t" : "",
              i === colors.length - 1 ? "rounded-b" : ""
            )}
            style={{
              background: `var(${colorVariable})`,
              color: isTextContrast(colorVariable)
                ? "var(--Neutral1000)"
                : "var(--Neutral0)",
            }}
          >
            <span>{color}</span>
            <CopyButton colorValue={getColorValue(colorVariable)} />
          </div>
        );
      })}
    </div>
  );
};

interface ColorPaletteProps {
  colors: string[];
}

const CopyButton = ({ colorValue }: CopyButtonProps) => {
  const [hover, setHover] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);

  const columnRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    }

    return "";
  };

  const handleCopyClick = () => {
    copyTextToClipboard(colorValue)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    if (columnRef.current) {
      setButtonWidth(columnRef.current.offsetWidth);
    }
  }, []);

  return (
    <Tooltip
      title={
        isCopied ? "Copied!" : `Copy '${colorValue.toUpperCase()}' to clipboard`
      }
      className="z-50"
    >
      <button
        ref={columnRef}
        onClick={handleCopyClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="rounded p-1 hover:bg-background-neutral"
        style={{
          width: buttonWidth ? `${buttonWidth}px` : "auto",
        }}
      >
        {hover ? "Copy" : colorValue}
      </button>
    </Tooltip>
  );
};

interface CopyButtonProps {
  colorValue: string;
}
