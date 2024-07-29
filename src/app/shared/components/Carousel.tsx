import styled from "@emotion/styled";
import Glide, {
  Controls,
  Images,
  Keyboard,
  Swipe,
} from "@glidejs/glide/dist/glide.modular.esm";
import IconButton from "@mui/joy/IconButton";
import { useEffect, useRef } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

import { ChildrenProps } from "src/app/types/prop";

interface CarouselProps extends ChildrenProps {
  readonly styles: string;
}

const CarouselContainer = styled.div<CarouselProps>`
  ${(props) => props.styles}
`;
const CarouselControl = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 0.5rem;
`;

export function Carousel(props: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      new Glide(ref.current, { type: "carousel" }).mount({
        Controls,
        Images,
        Keyboard,
        Swipe,
      });
    }
  }, [ref]);

  return (
    <CarouselContainer ref={ref} className="glide" styles={props.styles}>
      <div className="glide__track" data-glide-el="track">
        <div className="glide__slides">{props.children}</div>
      </div>
      <CarouselControl data-glide-el="controls">
        <IconButton
          aria-label="Next carousel slide"
          data-glide-dir="<"
          variant="outlined"
        >
          <IoArrowBack />
        </IconButton>
        <IconButton
          aria-label="Previous carousel slide"
          data-glide-dir=">"
          variant="outlined"
        >
          <IoArrowForward />
        </IconButton>
      </CarouselControl>
    </CarouselContainer>
  );
}

export default Carousel;
