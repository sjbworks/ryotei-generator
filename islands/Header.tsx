/** @jsx h */
import { h } from "preact";
import { tw } from "twind";

interface HeaderProps {
  onClickClearButton: () => void;
}

export default function Header({ onClickClearButton }: HeaderProps) {
  return (
    <header class={tw`flex mt-5 pt-3`}>
      <svg
        width="60"
        height="50"
        viewBox="0 0 184 175"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse
          cx="119.83"
          cy="26.0344"
          rx="25.5695"
          ry="26.0344"
          fill="#1D1D1D"
        />
        <path
          d="M90.5413 66.0538C72.5738 65.4777 63.8115 71.3952 56.1387 85.5414"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M150.006 164.59C140.856 136.273 129.465 124.88 109.468 118.397"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M107.05 117.745C108.495 119.228 109.996 104.857 112.46 70.4415"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M135.172 67.8446C155.082 68.3109 164.792 63.5206 173.294 52.0689"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M58.9287 155.216C84.1803 156.122 96.4949 146.823 107.278 124.593"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <circle cx="9.5" cy="166.5" r="7.5" fill="#1D1D1D" />
        <rect
          x="35.7881"
          y="101.418"
          width="13.6503"
          height="48.7678"
          transform="rotate(31.2236 35.7881 101.418)"
          fill="#1D1D1D"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        width="200"
        height="50"
        viewBox="0 0 608 169"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.2038 13.6367C11.2038 41.0695 9.95956 68.8027 11.7071 96.1814C13.0364 117.006 17.9986 137.705 17.9986 158.593"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M15.7334 13.6367C36.3744 13.6367 70.3408 6.57415 87.96 19.2991C97.9268 26.4974 96.8761 48.3256 92.7415 58.4323C83.0179 82.2011 41.4594 95.1747 17.9983 95.1747"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M50 86C50 95.4925 65.1122 117.805 73.7105 125.111C81.7579 131.949 93.6952 146.047 103 150"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M130 22.5433C130.727 36.7134 144.854 56.5822 156.289 65.5037C159.299 67.8519 167.239 79.1818 171.842 77.8991C173.215 77.5167 173.671 74.1714 174.132 73.0488C176.036 68.4058 179.915 64.4585 183.211 60.7303C189.39 53.7401 197.409 45.7866 202.158 37.7873C204.286 34.2025 205.837 30.3895 207.526 26.6238C208.607 24.2141 209.032 17.9598 211 17"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M172 87.9897L171 150"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M243.119 38.6423C252.918 38.6423 265.26 36.7354 274.485 40.3356C288.326 45.7367 304.323 61.8256 306.98 77.1043C309.734 92.9385 309.687 110.501 306.255 126.291C303.746 137.832 286.423 146.055 275.856 147.336C251.468 150.292 232.233 115.118 228.282 94.9242C223.495 70.4572 238.618 59.1581 251.827 41.5451"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M237.313 58.9619C239.554 70.7244 253.943 80.1545 262.632 87.2642C265.662 89.7432 267.599 93.5479 271.421 95.2469C282.782 100.296 291.099 112.748 299.724 121.372"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M311.334 18.3229C324.141 29.8496 350.574 16.7215 364.713 14.2913C373.087 12.852 381.817 9.82064 390.435 11.1466C398.097 12.3254 403.548 16.5336 410.029 19.7743"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M362.134 38.6422C362.134 29.1269 361.238 57.7493 362.456 67.1864C363.892 78.3187 366.488 90.9681 366.488 101.939C366.488 117.271 367.939 132.022 367.939 147.497"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M449.057 31.9338C441.784 31.9338 463.558 33.5817 470.828 33.3852C484.412 33.0181 497.793 30.4824 511.467 30.4824"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M441.801 30.4824C441.801 67.3694 447.606 104.113 447.606 140.789"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M447.605 85.6355C468.267 85.6355 488.616 84.1841 508.564 84.1841"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M450.509 133.532H523.079"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M541.142 10.0659C547.674 10.0659 553.993 12.9687 560.735 12.9687C567.964 12.9687 573.653 12.2914 580.329 10.0659"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M562.912 33.2881C562.912 52.2869 560.882 72.9022 565.492 91.344C567.014 97.4299 567.464 123.373 573.072 126.178"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
        <path
          d="M561.363 148.303C570.532 148.303 592.379 151.584 597.648 141.046"
          stroke="#1D1D1D"
          stroke-width="20"
          stroke-linecap="round"
        />
      </svg>
      <button
        onClick={onClickClearButton}
        class={tw`ml-auto px-5 rounded-full border-2 border-gray-200 focus:outline-none`}
      >
        Clear
      </button>
    </header>
  );
}
