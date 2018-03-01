// Copyright (c) 2017-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import React from 'react';

export default class StatusFocusIcon extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <svg
                    height='13'
                    width='13'
                    viewBox='0 0 70.900002 75.699997'
                    y='0px'
                    x='0px'
                    style={style}
                >
                    <g
                        transform='translate(-14.5,-12.2)'
                    >
                        <path
                            d='m 51.9,29 c 1.5,-6.1 7,-10.6 13.5,-10.6 h 1.4 l -0.1,-1.1 c -0.1,-1.2 -0.6,-3 -2.5,-4.8 l -0.4,-0.3 -0.5,0.1 c -8.5,1.5 -14.8,8.4 -15.7,16.8 -19.3,1 -33.1,14.3 -33.1,32.4 0,9.8 4.1,19.2 11.3,25.9 l 0.6,0.5 h 47.1 l 0.6,-0.5 C 81.3,80.7 85.4,71.3 85.4,61.5 85.4,43.2 71.4,29.8 51.9,29 Z M 72,83.8 H 28 C 22.2,78.1 18.8,70.4 18.6,62.3 H 22 v 3.8 c 0,0.6 0.4,1 1,1 0.6,0 1,-0.4 1,-1 v -3.8 h 6 v 3.8 c 0,0.6 0.4,1 1,1 0.6,0 1,-0.4 1,-1 v -3.8 h 7 v 3.8 c 0,0.6 0.4,1 1,1 0.6,0 1,-0.4 1,-1 v -3.8 h 8 v 7.1 c 0,0.6 0.4,1 1,1 0.6,0 1,-0.4 1,-1 v -7.1 h 8 v 3.8 c 0,0.6 0.4,1 1,1 0.6,0 1,-0.4 1,-1 v -3.8 h 7 v 3.8 c 0,0.6 0.4,1 1,1 0.6,0 1,-0.4 1,-1 v -3.8 h 6 v 3.8 c 0,0.6 0.4,1 1,1 0.6,0 1,-0.4 1,-1 v -3.8 h 3.4 C 81.1,70.4 77.7,78.2 72,83.8 Z M 77,60.4 H 69 60 50 40 31 23 18.6 C 19.1,44.4 32.2,33 50,33 67.8,33 80.9,44.5 81.4,60.4 Z'
                        />
                        <path
                            d='m 54.2,49.4 h -8.5 c -0.4,0 -0.7,0.2 -0.9,0.5 -0.2,0.3 -0.2,0.7 0,1 l 4.2,7.3 c 0.2,0.3 0.5,0.5 0.9,0.5 0.4,0 0.7,-0.2 0.9,-0.5 L 55,50.9 c 0.2,-0.3 0.2,-0.7 0,-1 -0.1,-0.3 -0.4,-0.5 -0.8,-0.5 z'
                        />
                    </g>
                </svg>
            </span>
        );
    }
}

const style = {
    fillRule: 'evenodd',
    clipRule: 'evenodd',
    strokeLinejoin: 'round',
    strokeMiterlimit: 1.41421,
};