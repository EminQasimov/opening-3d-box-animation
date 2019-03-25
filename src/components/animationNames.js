import { keyframes } from "styled-components";

export const jello = keyframes`
  0% {
      transform: scale3d(1, 1, 1);
  }
  30% {
      transform: scale3d(1.25, 0.75, 1);
  }
  40% {
      transform: scale3d(0.75, 1.25, 1);
  }
  75% {
      transform: scale3d(1.05, 0.95, 1);
  }
  100% {
      transform: scale3d(1, 1, 1);
  }
`;

export const bounce = keyframes`
  0% {
    transform:  translate3d(0,-295px,0) scale3d(0.5, 0.5, 0.5) 
  }
  100% {
    transform:  translate3d(0,0,0) scale3d(0.6, 0.5, 0.6)
  }
`;

export const animLeft = keyframes`
	from{
		transform: rotate3d(0,1,0,0deg);
	}
	50%{
		transform: rotate3d(0,1,0,-190deg);
	}
	70%{
		transform: rotate3d(0,1,0,-150deg);
	}
	to{
		transform: rotate3d(0,1,0,-190deg);
	}
`;

export const animRight = keyframes`
	from{
		transform: rotate3d(0,1,0, 0deg);
	}
	50%{
		transform: rotate3d(0,1,0, 170deg);
	}
	70%{
		transform: rotate3d(0,1,0, 100deg);
	}
	to{ 
		transform: rotate3d(0,1,0, 140deg);
	}
`;
export const animFront = keyframes`
	from{
		transform: rotate3d(1,0,0, 0deg);
	}
	50%{
		transform: rotate3d(1,0,0, 190deg);
	}
	70%{
		transform: rotate3d(1,0,0, 130deg);
	}
	to{
		transform: rotate3d(1,0,0, 140deg);
	}
`;

export const animBack = keyframes`
	from{
		transform: rotate3d(1,0,0, 0deg);
	}
	50%{
		transform: rotate3d(1,0,0, -190deg);
	}
	70%{
		transform: rotate3d(1,0,0, -150deg);
	} 
	to{
		transform: rotate3d(1,0,0, -190deg);
	}
`;
