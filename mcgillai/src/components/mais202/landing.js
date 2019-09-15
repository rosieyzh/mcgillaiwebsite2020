import React from 'react';
import styled from '@emotion/styled';

import { SectionBase,
		 HeadingUnderline } from '../commonstyles.js';

import Stats1 from './assets/stats_1.svg';
import Stats2 from './assets/stats_2.svg';
import Stats3 from './assets/stats_3.svg';
import Stats4 from './assets/stats_4.svg';

import Gallery from './gallery.js';

const Container = styled('div')`
	${SectionBase({
    heightPx: 600
  	})};
  	box-sizing: border-box;

  	.heading {
  		@media screen and (max-width: 575px) {
	    	font-size: 24px;
		}

		@media screen and (max-width: 500px) {
	    	font-size: 20px;
		}
  	}

  	.gallery {
  		padding-bottom: 0;
  	}
`;

const Column = styled('div')`
	font-size: 32px;
	display: inline-block;
	vertical-align:top;
	padding: 30px;
	width: 50%;
	
	@media screen and (max-width: 1200px) {
    	width: 100%;
    	padding: 10px;
	}
`;

const ContentContainer = styled('div')`
	text-align: center;
	@media screen and (max-width: 1050px) {
		padding-left: 20px;
	}
`;

const Title = styled('div')`
	font-family: 'Montserrat-Bold', monospace;
  	color: #FFFFFF;
  	text-align: center;

	> h1 {
		font-size: 80px;
		margin: 10px;
	}

	> h3 {
		font-size: 28px;
		margin: 10px;
	}

	> p {
		font-size: 20px;
		margin: 10px;
	}

`;

const StatsContainer = styled('div')`
	display: block;
`;

const StatsColumn = styled('div')`
	float: left;
	width: 25%;

	@media screen and (max-width: 767px) {
		width: 50%;
	}
`;

const StatsImage = styled('img')`
  	margin-left: auto;
  	margin-right: auto;
  	display: block;
  	width: 80%;
  	padding: 20px 0;

`;

class Landing extends React.Component {
	render() {
		return (
			<Container>
				<HeadingUnderline className='heading'>FOR STUDENTS, BY STUDENTS </HeadingUnderline>
				<ContentContainer>
				<Column>
					<Title>
						<h1>MAIS202</h1>
						<h3>ACCELERATED INTRODUCTION TO MACHINE LEARNING</h3>
						<p>2019-2020 Offerings: Fall 2019, Winter 2020</p>
					</Title>
				</Column>
				<Column className='gallery'>
					<Gallery />
				</Column>
				</ContentContainer>
				<StatsContainer>
				<StatsColumn>
					<StatsImage src={Stats1} />
				</StatsColumn>
				<StatsColumn>
					<StatsImage src={Stats2} />
				</StatsColumn>
				<StatsColumn>
					<StatsImage src={Stats3} />
				</StatsColumn>
				<StatsColumn>
					<StatsImage src={Stats4} />
				</StatsColumn>
				</StatsContainer>
			</Container>
		);
	}
}

export default Landing;