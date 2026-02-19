import clsx from "clsx";
import useMacbookStore from "../store";
import { Canvas } from "@react-three/fiber";
import StudioLights from "./three/StudioLights";
import ModelSwitcher from "./three/ModelSwitcher";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import {
  BLACK_COLOR,
  SILVER_COLOR,
  SCALE_14_INCH,
  SCALE_16_INCH,
} from "../constants";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const [deviceColor, setDeviceColor] = useState(color.label);
  const [deviceScale, setDeviceScale] = useState(scale.label);

  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

  const handleColorChange = (color) => {
    setColor(color);
    setDeviceColor(color.label);
  };

  const handleScaleChange = (scale) => {
    setScale(scale);
    setDeviceScale(scale.label);
  };

  return (
    <section id="product-viewer">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info">
          MacBook Pro {deviceScale} in {deviceColor}
        </p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              className={clsx(
                "bg-neutral-300",
                color.value === SILVER_COLOR.value && "active",
              )}
              onClick={() => handleColorChange(SILVER_COLOR)}
            />
            <div
              className={clsx(
                "bg-neutral-900",
                color.value === BLACK_COLOR.value && "active",
              )}
              onClick={() => handleColorChange(BLACK_COLOR)}
            />
          </div>

          <div className="size-control">
            <div
              className={clsx(
                scale.value === 0.06
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
              onClick={() => handleScaleChange(SCALE_14_INCH)}
            >
              <p>14"</p>
            </div>
            <div
              className={clsx(
                scale.value === 0.08
                  ? "bg-white text-black"
                  : "bg-transparent text-white",
              )}
              onClick={() => handleScaleChange(SCALE_16_INCH)}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />
        <ModelSwitcher
          scale={isMobile ? scale.value - 0.03 : scale.value}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
};

export default ProductViewer;
