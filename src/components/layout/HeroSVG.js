import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

export const styles = theme => {
  return {
    svgContainer: {
      overflow: 'hidden',
    },
    svg: {
      width: '35.71em',
      [theme.breakpoints.down('sm')]: {
        width: '28.57em',
        transform: 'scaleX(-1)',
      },
      [theme.breakpoints.down('xs')]: {
        width: '19.29em',
      },
      '@media (max-width: 350px)': {
        width: '16.43em',
      },
    },
    secondaryMain: {
      fill: theme.palette.secondary.main,
    },
    secondaryDark: {
      fill: theme.palette.secondary.dark,
    },
  };
};

const HeroSVG = React.forwardRef(function HeroSVG(props, ref) {
  const { classes } = props;

  return (
    <Box className={classes.svgContainer} ref={ref}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        data-name='Layer 1'
        viewBox='0 0 802.027 590.916'
        className={classes.svg}
      >
        <path
          fill='#e6e6e6'
          d='M464.906 218.808H802.027V228.697H464.906z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M492.774 136.101H578.178V221.505H492.774z'
        ></path>
        <path
          className={clsx(classes.secondaryDark)}
          d='M509.855 153.182H561.097V204.42399999999998H509.855z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M684.259 136.101H705.835V221.505H684.259z'
        ></path>
        <path
          fill='#ccc'
          d='M684.259 149.586H705.835V159.47500000000002H684.259z'
        ></path>
        <path fill='#ccc' d='M684.259 192.737H705.835V202.626H684.259z'></path>
        <path
          fill='#e6e6e6'
          d='M650.997 136.101H672.573V221.505H650.997z'
        ></path>
        <path
          fill='#ccc'
          d='M650.997 149.586H672.573V159.47500000000002H650.997z'
        ></path>
        <path fill='#ccc' d='M650.997 192.737H672.573V202.626H650.997z'></path>
        <path
          fill='#e6e6e6'
          d='M921.902 290.643H943.4780000000001V376.04699999999997H921.902z'
          transform='rotate(-26.34 502.968 681.273)'
        ></path>
        <path
          fill='#ccc'
          d='M911.133 306.647H932.7090000000001V316.536H911.133z'
          transform='rotate(-26.34 492.198 659.52)'
        ></path>
        <path
          fill='#ccc'
          d='M930.279 345.319H951.855V355.208H930.279z'
          transform='rotate(-26.34 511.344 698.192)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M524.688 170.382L535.554 189.201 546.419 208.02 524.688 208.02 502.958 208.02 513.823 189.201 524.688 170.382z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M543.567 173.978L554.432 192.797 565.298 211.616 543.567 211.616 521.837 211.616 532.702 192.797 543.567 173.978z'
        ></path>
        <circle cx='551.209' cy='162.171' r='6.293' fill='#e6e6e6'></circle>
        <path
          fill='#e6e6e6'
          d='M663.892 237.602H1001.013V247.491H663.892z'
          transform='rotate(-180 732.96 165.276)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M887.741 154.895H973.145V240.299H887.741z'
          transform='rotate(-180 830.95 120.326)'
        ></path>
        <path
          className={clsx(classes.secondaryDark)}
          d='M904.821 171.976H956.063V223.218H904.821z'
          transform='rotate(-180 830.95 120.326)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M760.084 154.895H781.66V240.299H760.084z'
          transform='rotate(-180 671.379 120.326)'
        ></path>
        <path
          fill='#ccc'
          d='M760.084 168.38H781.66V178.269H760.084z'
          transform='rotate(-180 671.379 96.053)'
        ></path>
        <path
          fill='#ccc'
          d='M760.084 211.531H781.66V221.42000000000002H760.084z'
          transform='rotate(-180 671.379 139.205)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M793.347 154.895H814.923V240.299H793.347z'
          transform='rotate(-180 704.641 120.326)'
        ></path>
        <path
          fill='#ccc'
          d='M793.347 168.38H814.923V178.269H793.347z'
          transform='rotate(-180 704.641 96.053)'
        ></path>
        <path
          fill='#ccc'
          d='M793.347 211.531H814.923V221.42000000000002H793.347z'
          transform='rotate(-180 704.641 139.205)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M721.427 154.895H743.003V240.299H721.427z'
          transform='rotate(-153.66 614.641 143.607)'
        ></path>
        <path
          fill='#ccc'
          d='M732.197 170.9H753.773V180.78900000000002H732.197z'
          transform='rotate(-153.66 625.41 121.854)'
        ></path>
        <path
          fill='#ccc'
          d='M713.051 209.571H734.6270000000001V219.46H713.051z'
          transform='rotate(-153.66 606.265 160.526)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M742.244 34.634L731.379 53.453 720.514 72.272 742.244 72.272 763.975 72.272 753.109 53.453 742.244 34.634z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M723.365 38.23L712.5 57.049 701.635 75.868 723.365 75.868 745.096 75.868 734.231 57.049 723.365 38.23z'
        ></path>
        <circle cx='715.724' cy='26.424' r='6.293' fill='#e6e6e6'></circle>
        <path
          fill='#e6e6e6'
          d='M663.892 509.097H1001.013V518.986H663.892z'
          transform='rotate(-180 732.96 436.77)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M887.741 426.39H973.145V511.794H887.741z'
          transform='rotate(-180 830.95 391.821)'
        ></path>
        <path
          className={clsx(classes.secondaryDark)}
          d='M904.821 443.471H956.063V494.713H904.821z'
          transform='rotate(-180 830.95 391.821)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M760.084 426.39H781.66V511.794H760.084z'
          transform='rotate(-180 671.379 391.821)'
        ></path>
        <path
          fill='#ccc'
          d='M760.084 439.875H781.66V449.764H760.084z'
          transform='rotate(-180 671.379 367.549)'
        ></path>
        <path
          fill='#ccc'
          d='M760.084 483.027H781.66V492.916H760.084z'
          transform='rotate(-180 671.379 410.7)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M793.347 426.39H814.923V511.794H793.347z'
          transform='rotate(-180 704.641 391.821)'
        ></path>
        <path
          fill='#ccc'
          d='M793.347 439.875H814.923V449.764H793.347z'
          transform='rotate(-180 704.641 367.549)'
        ></path>
        <path
          fill='#ccc'
          d='M793.347 483.027H814.923V492.916H793.347z'
          transform='rotate(-180 704.641 410.7)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M721.427 426.39H743.003V511.794H721.427z'
          transform='rotate(-153.66 614.641 415.102)'
        ></path>
        <path
          fill='#ccc'
          d='M732.197 442.395H753.773V452.284H732.197z'
          transform='rotate(-153.66 625.41 393.35)'
        ></path>
        <path
          fill='#ccc'
          d='M713.051 481.067H734.6270000000001V490.956H713.051z'
          transform='rotate(-153.66 606.265 432.02)'
        ></path>
        <path
          fill='#e6e6e6'
          d='M742.244 306.129L731.379 324.948 720.514 343.768 742.244 343.768 763.975 343.768 753.109 324.948 742.244 306.129z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M723.365 309.725L712.5 328.544 701.635 347.364 723.365 347.364 745.096 347.364 734.231 328.544 723.365 309.725z'
        ></path>
        <circle cx='715.724' cy='297.919' r='6.293' fill='#e6e6e6'></circle>
        <ellipse
          cx='397.129'
          cy='562.711'
          fill='#e6e6e6'
          rx='397.129'
          ry='28.205'
        ></ellipse>
        <path
          className={clsx(classes.secondaryMain)}
          d='M906.373 733.048c-64.755-11.526-135.567-9.61-209.846 0 33.855-28.581 63.074-57.163 29.219-85.744 66.039 13.624 75.289 12.245 148.752 0-17.04 28.581 14.836 57.163 31.875 85.744z'
          transform='translate(-198.987 -154.542)'
        ></path>
        <path
          d='M906.373 733.048c-64.755-11.526-135.567-9.61-209.846 0 33.855-28.581 63.074-57.163 29.219-85.744 66.039 13.624 75.289 12.245 148.752 0-17.04 28.581 14.836 57.163 31.875 85.744z'
          opacity='0.2'
          transform='translate(-198.987 -154.542)'
        ></path>
        <path
          className={clsx(classes.secondaryMain)}
          d='M890.578 720.854c-55.007-9.2-115.159-7.67-178.257 0 28.76-22.814 53.58-45.628 24.821-68.442 56.098 10.875 63.955 9.774 126.36 0-14.475 22.814 12.602 45.628 27.076 68.442z'
          transform='translate(-198.987 -154.542)'
        ></path>
        <circle cx='670.64' cy='500.244' r='29.309' fill='#2f2e41'></circle>
        <path
          fill='#a0616a'
          d='M537.591 466.249L557.899 469.634 568.053 498.967 538.72 517.019 504.873 466.249 536.463 466.249 537.591 466.249z'
        ></path>
        <circle cx='595.13' cy='463.993' r='47.385' fill='#a0616a'></circle>
        <path
          fill='#2f2e41'
          d='M532.372 445.919s-115.077 12.41-135.385 10.154-29.333-4.513-29.333-4.513-13.539 18.051-6.77 25.949a48.822 48.822 0 0013.539 11.282s12.41-3.385 21.436 0 100.41 18.051 116.205 4.513 20.308-47.385 20.308-47.385z'
          transform='translate(-198.987 -154.542)'
        ></path>
        <path
          fill='#2f2e41'
          d='M540.27 697.51s-75.59-21.437-89.129-116.206v-9.026s-14.956 26.238-20.308 31.59c-6.205 6.205-28.205 62.051-27.077 67.693s0 7.897 0 7.897l-32.718-3.385V665.92s17.488-52.461 18.616-64.872 43.436-98.718 43.436-98.718 15.795-32.718 42.872 0 29.333 55.282 29.333 55.282l34.975 67.693zM371.038 448.175l-36.102-12.41s-33.847-24.82-25.95 0 44.001 78.974 54.155 73.333 22.365-19.643 19.644-21.667-20.772-16.692-11.747-39.256z'
          transform='translate(-198.987 -154.542)'
        ></path>
        <path
          fill='#2f2e41'
          d='M375.402 659.259l-29.144 14.233s-35.243 5.422-15.588 15.588 73.876 21.01 76.587 11.522 1.635-25.236-1.216-24.818-22.506 2.452-30.639-16.525z'
          transform='translate(-198.987 -154.542)'
        ></path>
        <path
          fill='#575a89'
          d='M525.603 623.048s-14.667 63.18 10.154 76.718 198.565 15.795 212.103-9.026 6.77-24.82 6.77-24.82l-36.103-40.616 29.333-2.256s0-9.026-10.154-10.154-41.744-12.41-68.82-4.513-42.873-15.795-42.873-15.795z'
          transform='translate(-198.987 -154.542)'
        ></path>
        <path
          fill='#3f3d56'
          d='M307.437 271.069L288.257 375.993 420.258 360.198 443.95 265.428 307.437 271.069z'
        ></path>
        <path
          fill='#fff'
          d='M311.386 275.018L295.591 368.659 415.745 354.557 438.873 269.377 311.386 275.018z'
        ></path>
        <path
          fill='#b3b3b3'
          d='M292.77 377.121L288.257 375.993 286.001 380.505 322.104 480.916 325.499 479.618 326.616 473.019 292.77 377.121z'
        ></path>
        <path
          fill='#d0cde1'
          d='M288.257 374.864L324.36 479.788 460.873 459.48 420.258 360.198 288.257 374.864z'
        ></path>
        <path
          fill='#3f3d56'
          d='M306.309 371.48L306.309 377.121 406.719 365.839 405.591 360.198 306.309 371.48z'
        ></path>
        <path
          fill='#3f3d56'
          d='M308.565 382.762L324.36 426.762 427.027 414.352 408.976 372.608 308.565 382.762z'
        ></path>
        <path
          fill='#a0616a'
          d='M636.167 599.355l-3.384-9.026s-25.95-45.128-39.488-36.102 28.206 53.026 28.206 53.026h13.538zM550.423 606.124l-3.384-13.538s-9.026-41.744 6.77-39.487 20.307 41.743 20.307 41.743l-1.128 9.026z'
          transform='translate(-198.987 -154.542)'
        ></path>
        <path
          fill='#575a89'
          d='M577.5 600.483s-29.333-4.512-30.461 2.257-6.77 108.308 21.436 111.692 168.103 18.052 153.436-16.923-37.23-30.461-37.23-30.461l-95.898 10.154z'
          transform='translate(-198.987 -154.542)'
        ></path>
        <path
          fill='#575a89'
          d='M467.078 458.916L437.181 438.044 417.437 453.275 442.258 480.352 467.078 458.916z'
        ></path>
        <path
          d='M386.976 479.224L391.488 522.096 469.335 517.583 401.642 516.455 386.976 479.224z'
          opacity='0.2'
        ></path>
        <circle cx='618.521' cy='472.603' r='56.41' fill='#2f2e41'></circle>
        <path
          className={clsx(classes.secondaryMain)}
          d='M328.309 307.736L398.258 305.301 405.027 279.531 332.822 281.71 328.309 307.736z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M310.258 322.403L416.309 319.018 417.437 314.505 311.386 318.239 310.258 322.403z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M308.001 333.685L414.053 330.3 415.181 325.787 309.129 329.521 308.001 333.685z'
        ></path>
        <path
          fill='#e6e6e6'
          d='M306.873 342.71L412.924 339.326 414.053 334.813 308.001 338.546 306.873 342.71z'
        ></path>
      </svg>
    </Box>
  );
});

HeroSVG.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeroSVG);
