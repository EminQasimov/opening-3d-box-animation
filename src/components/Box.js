import React from "react";
import styled, { css } from "styled-components";
import badge from "../assets/badge.png";
import {
	jello,
	animLeft,
	animRight,
	animFront,
	animBack,
	bounce
} from "./animationNames";

const BouncedBox = styled.div`
	animation: ${bounce} 0.3s ease-in;
	transform: scale3d(0.6, 0.5, 0.6);
	div {
		box-sizing: border-box;
	}
`;

const JelloBox = styled.div`
	width: 300px;
	height: 300px;
	margin: 150px auto;
	perspective: 1500px;
	animation: ${jello} 0.7s;
	animation-delay: 0.3s;
`;

const Box = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transform-style: preserve-3d;
	transform: rotate3d(1, 0, 0, -23deg) rotate3d(0, 1, 0, 50deg)
		translate3D(150px, 100px, -150px);
`;

const Side = styled.div`
	position: absolute;
	font-size: 30px;
	width: 100%;
	height: 100%;
	background: linear-gradient(to left, #f1e767 0%, #feb645 100%);
`;

const Front = styled(Side)`
	background: url("${badge}"), linear-gradient(to left, #f1e767 0%, #feb645 100%);
	background-repeat: no-repeat;
	background-size: 100px,auto;
	background-position: 10% 80%;
	transform: translate3d(0,0,150px);
`;

const Back = styled(Side)`
	background: linear-gradient(
		45deg,
		#020201 0%,
		#7c5620 50%,
		#8e6425 51%,
		#f6d55a 100%
	);
	transform: rotate3d(0, 1, 0, 180deg) translate3d(0, 0, 150px);
`;

const Left = styled(Side)`
	transform: rotate3d(0, 1, 0, -90deg) translate3d(0, 0, 150px);
`;

const Right = styled(Side)`
	transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, 150px);
	background: linear-gradient(to left, #0a0a0a 0%, #7a551f 1%, #feb645 100%);
`;

const Bottom = styled(Side)`
	transform: rotate3d(1, 0, 0, -90deg) translate3d(0, 0, 150px);
`;

const Cover = styled(Side)`
	transform-style: preserve-3d;
	background: transparent;
	border: none;
	transform: rotate3d(1, 0, 0, 90deg) translate3d(0, 0, 150px);
`;

const CoverSide = css`
	position: absolute;
	width: 50%;
	height: 100%;
	background-color: #f1e767;
	border: 1px solid #888;
	background: linear-gradient(to bottom, #f1e767 0%, #feb645 100%);
	animation: ${animLeft} 1s ease-in-out 0.5s 1 normal forwards;
`;

const CoverLeft = styled.div`
	${CoverSide}
	transform-origin: left center;
`;

const CoverRight = styled.div`
	${CoverSide}
	right: 0;
	animation-name: ${animRight};
	transform-origin: right center;
`;

const CoverFront = styled.div`
	${CoverSide}
	width: 100%;
	height: 50%;
	animation-name: ${animFront};
	transform-origin: center top;
`;

const CoverBack = styled.div`
	${CoverSide}
	bottom: 0;
	width: 100%;
	height: 50%;
	animation-name: ${animBack};
	transform-origin: center bottom;
`;

export default function() {
	return (
		<BouncedBox>
			<JelloBox>
				<Box>
					<Cover>
						<CoverLeft />
						<CoverRight />
						<CoverFront />
						<CoverBack />
					</Cover>
					<Front />
					<Back />
					<Left />
					<Right />
					<Bottom />
				</Box>
			</JelloBox>
		</BouncedBox>
	);
}
