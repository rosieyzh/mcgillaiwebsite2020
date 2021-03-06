import React from 'react';
import styled from '@emotion/styled';

import wrnchLogo from './sponsors-img/wrnch.png';
import intactLogo from './sponsors-img/Intactlab.png';
import nvidiaLogo from './sponsors-img/nvidia.png';
import microsoftLogo from './sponsors-img/microsoft-white.png';
import squarepoint from './sponsors-img/squarepoint.png';

const LogoRow = styled('div')`
    display: flex;
    padding-bottom: 15px;
    max-height: 108px;

    @media screen and (min-width: 480px) {
        padding-bottom: 25px;
    }

    @media screen and (min-width: 1024px) {
        padding-bottom: 30px;
    }

    :last-child {
        padding-bottom: 0;
    }
`;

const LogoWrapper = styled('a')`
    flex-grow: 1;
    flex-basis: 0;
    text-align: center;
    display: flex;
    align-items: center;
    padding: 10px;
    padding-top: 0;
`;

const LogoImage = styled('img')`
    width: 100%;
    height: auto;
    max-height: 100%;
    object-fit: contain;
    -webkit-user-drag: none;
`;

const Logo = ({ alt, src, href }) => (
    <LogoWrapper href={href} target="_blank" rel="noopener">
        <LogoImage alt={alt} src={src} />
    </LogoWrapper>
);

export default () => (
    <React.Fragment>
        <LogoRow>
            <Logo
                alt="microsoft"
                src={microsoftLogo}
                href="https://careers.microsoft.com/us/en"
            />
        </LogoRow>
        <LogoRow>
            <Logo
                alt="wrnch"
                src={wrnchLogo}
                href="https://wrnch.ai/careers/"
            />

            <Logo
                alt="intactlab"
                src={intactLogo}
                href="https://careers.intact.ca/ca/en/"
            />
        </LogoRow>
        <LogoRow>
            <Logo
                alt="nvidia"
                src={nvidiaLogo}
                href="https://www.nvidia.com/en-us/about-nvidia/careers/"
            />
            <Logo
                alt="squarepoint"
                src={squarepoint}
                href="https://www.squarepoint-capital.com/"
            />
        </LogoRow>
    </React.Fragment>
);
