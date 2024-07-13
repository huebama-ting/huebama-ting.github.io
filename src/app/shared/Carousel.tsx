import styled from "@emotion/styled";
import Glide, { Controls } from "@glidejs/glide/dist/glide.modular.esm";
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
  justify-content: center;
`;

export function Carousel(props: CarouselProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      new Glide(ref.current).mount({ Controls });
    }
  }, [ref]);

  return (
    <CarouselContainer ref={ref} className="glide" styles={props.styles}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{props.children}</ul>
      </div>
      <CarouselControl data-glide-el="controls">
        <IconButton data-glide-dir="<">
          <IoArrowBack />
        </IconButton>
        <IconButton data-glide-dir=">">
          <IoArrowForward />
        </IconButton>
      </CarouselControl>
    </CarouselContainer>
  );
}

export default Carousel;
