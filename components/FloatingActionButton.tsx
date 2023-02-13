import { tw } from "twind";

type FloatingActionButtonProps = {
  className: string;
  onClickFloatingActionButton: () => void;
};

export default function FloatingActionButton({
  className,
  onClickFloatingActionButton,
}: FloatingActionButtonProps) {
  return (
    <button
      class={tw`w-50 h-50 rounded-full p-3 rounded-full bg-gray-400 hover:bg-gray-600 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none ${className}`}
      onClick={onClickFloatingActionButton}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="50"
        height="50"
        viewBox="0 0 630 654"
      >
        <path
          fill="transparent"
          stroke="#FFFCF9"
          stroke-width="50"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-time="1664108636741"
          d="M8.9453125,321.44140625 L8.9453125,321.44140625 9.19140625,321.44140625 10.13671875,320.96484375 11.98046875,320.22265625 14.359375,319.42578125 16.73828125,319.42578125 19.1171875,319.42578125 22.08203125,319.42578125 25.0546875,319.42578125 27.43359375,319.42578125 29.8125,319.42578125 32.78515625,319.42578125 35.1640625,319.42578125 38.13671875,319.42578125 40.515625,319.42578125 41.87890625,319.42578125 44.8515625,319.42578125 47.82421875,319.42578125 49.66796875,319.42578125 52.046875,319.42578125 56.37109375,319.90625 58.75,320.30078125 61.72265625,320.72265625 64.6953125,320.72265625 67.66796875,320.72265625 71.2890625,321.171875 74.26171875,321.171875 77.8828125,321.171875 81.50390625,321.62109375 83.34765625,321.98828125 89.24609375,322.5234375 92.21875,322.9453125 95.19140625,323.3671875 98.8125,324.26953125 101.78515625,324.69140625 103.1484375,325.03125 106.12109375,325.453125 111.203125,325.9609375 114.17578125,325.9609375 117.1484375,325.9609375 120.12109375,325.9609375 123.7421875,325.9609375 127.36328125,324.6015625 131.6875,323.15625 136.76953125,321.12109375 142.66796875,319.51171875 148.56640625,317.36328125 153.546875,315.8671875 159.4453125,314.79296875 164.52734375,313.7734375 169.609375,313.26171875 173.93359375,313.26171875 177.5546875,313.26171875 179.3984375,313.26171875 183.01953125,313.26171875 185.3984375,313.26171875 187.77734375,313.26171875 189.62109375,313.26171875 191.46484375,313.26171875 192.828125,313.6015625 194.671875,313.6015625 196.03515625,313.6015625 197.87890625,313.6015625 199.71484375,313.6015625 202.6875,313.6015625 205.66015625,313.6015625 208.6328125,313.6015625 212.25390625,313.6015625 216.578125,313.6015625 220.19921875,314.05078125 224.515625,314.05078125 228.83984375,314.53125 232.4609375,314.53125 236.78515625,315.01171875 240.40625,315.01171875 244.73046875,315.01171875 249.0546875,315.01171875 253.3125,315.01171875 257.63671875,315.01171875 261.9609375,315.01171875 267.04296875,315.51953125 271.3671875,316 276.44921875,316.5078125 280.7734375,316.98828125 285.85546875,317.49609375 290.9375,318.00390625 296.01953125,318.51171875 301.1015625,319.52734375 305.42578125,320.48828125 307.80078125,320.8828125 311.421875,321.78515625 314.39453125,322.6328125 316.7734375,323.02734375 319.15234375,323.421875 320.515625,323.76171875 321.453125,324.07421875 322.390625,324.38671875 322.6484375,324.64453125 323.21875,324.64453125 323.4765625,324.64453125 323.734375,324.64453125 324.3046875,324.64453125 325.66796875,324.64453125 327.51171875,324.64453125 330.4765625,323.37109375 334.09765625,321.55859375 337.71875,319.74609375 342.01953125,318.30859375 344.3984375,317.51171875 347.359375,316.23828125 350.98046875,315.33203125 356.0625,314.3125 357.42578125,314.3125 362.5078125,314.3125 365.48046875,314.3125 368.453125,314.3125 371.42578125,314.3125 375.046875,314.3125 378.66796875,314.3125 381.640625,314.3125 383.484375,314.3125 386.45703125,314.3125 389.4296875,314.734375 391.80859375,315.12890625 394.1875,315.5234375 396.56640625,315.91796875 400.1875,316.8203125 403.16015625,317.2421875 406.1328125,318.08984375 409.75390625,318.5390625 413.375,318.98828125 416.99609375,319.4375 418.83984375,319.8046875 422.4609375,320.25390625 427.54296875,320.25390625 431.1640625,320.25390625 435.48828125,320.25390625 440.5703125,320.25390625 446.46875,320.25390625 452.3671875,320.25390625 459.13671875,320.25390625 465.03515625,320.25390625 471.8046875,320.25390625 477.703125,320.25390625 482.78515625,320.25390625 485.16015625,319.85546875 488.78125,319.40234375 492.40234375,318.94921875 494.78125,318.94921875 497.16015625,318.55078125 499.00390625,318.1796875 501.3828125,318.1796875 503.2265625,317.80859375 505.0703125,317.80859375 507.44921875,317.41015625 511.0703125,317.41015625 513.44921875,317.01171875 516.4140625,317.01171875 520.03515625,317.01171875 524.359375,317.01171875 529.44140625,317.01171875 534.5234375,317.01171875 540.421875,317.01171875 546.3203125,317.01171875 551.40234375,317.01171875 557.30078125,317.01171875 559.6796875,317.01171875 564.00390625,317.01171875 567.625,317.01171875 573.5234375,317.01171875 577.14453125,317.01171875 580.765625,317.01171875 585.0546875,317.01171875 589.37890625,317.01171875 593,317.01171875 597.32421875,317.01171875 601.6484375,317.01171875 603.4921875,317.01171875 606.46484375,317.01171875 608.84375,317.01171875 611.22265625,317.01171875 613.6015625,317.01171875 614.96484375,317.01171875 616.328125,317.01171875 617.265625,317.01171875 618.203125,317.01171875 618.7734375,317.01171875 619.03125,317.01171875 619.2890625,317.01171875 619.546875,317.01171875 619.546875,316.7734375 619.546875,316.51171875 619.546875,316.2734375 "
        />
        <path
          fill="transparent"
          stroke="#FFFCF9"
          stroke-width="50"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-time="1664108641224"
          d="M299.65234375,10.07421875 L299.65234375,10.07421875 299.65234375,10.3046875 299.65234375,11.66796875 299.65234375,14.640625 299.65234375,18.26171875 299.65234375,24.15625 299.65234375,30.0546875 299.65234375,38.73828125 299.65234375,46.4375 299.65234375,51.51953125 299.65234375,59.21875 299.65234375,67.90234375 299.65234375,75.6015625 299.65234375,83.30078125 299.65234375,90.0703125 299.65234375,95.15234375 299.65234375,97.53125 300.1328125,101.85546875 300.58203125,105.4765625 301.00390625,108.44921875 301.3984375,110.828125 301.79296875,113.20703125 302.15625,115.0390625 302.5234375,116.8828125 302.890625,118.7265625 303.23046875,120.08984375 303.5703125,121.453125 303.91015625,122.81640625 304.25,124.1796875 304.58984375,125.54296875 304.58984375,126.90625 304.9296875,128.26953125 305.296875,130.11328125 305.63671875,131.4765625 305.9765625,132.83984375 306.65625,134.203125 307.0234375,136.046875 307.76171875,137.890625 308.44140625,139.25390625 308.80859375,141.09765625 309.65625,144.0703125 310.3359375,145.43359375 310.703125,147.27734375 311.44140625,149.12109375 312.796875,152.7421875 313.109375,153.6796875 313.90234375,156.05859375 314.26953125,157.90234375 314.6640625,160.28125 315.56640625,163.90234375 315.56640625,166.28125 315.56640625,169.25390625 315.56640625,172.2265625 315.56640625,174.0703125 315.56640625,177.04296875 315.56640625,179.421875 315.16796875,181.80078125 314.76953125,184.1796875 314.76953125,186.55859375 314.3984375,188.40234375 314.3984375,190.23046875 314.3984375,192.07421875 314.3984375,193.91796875 314.3984375,196.296875 314.3984375,199.26953125 314.3984375,200.6328125 314.84765625,204.25390625 315.1875,205.6171875 315.609375,208.58984375 315.609375,210.96875 316.05859375,214.58984375 316.05859375,217.5625 316.05859375,220.53515625 316.05859375,223.5078125 316.05859375,226.48046875 316.05859375,229.453125 316.05859375,233.77734375 315.60546875,237.3984375 315.12109375,241.72265625 314.15625,246.046875 313.671875,250.37109375 313.1875,254.6953125 312.67578125,259.77734375 312.19140625,264.1015625 311.6796875,269.18359375 311.6796875,273.5078125 311.6796875,277.83203125 311.6796875,280.2109375 311.6796875,283.83203125 311.6796875,289.73046875 311.6796875,293.33203125 311.6796875,296.953125 311.6796875,300.57421875 311.6796875,304.1953125 311.6796875,308.51953125 311.6796875,312.140625 311.6796875,315.76171875 311.6796875,319.3828125 311.2265625,323.00390625 311.2265625,326.625 310.3203125,330.24609375 309.89453125,333.21875 309.44140625,336.83984375 309.44140625,340.4609375 308.98828125,344.08203125 308.98828125,347.703125 308.98828125,352.02734375 308.98828125,355.6484375 308.98828125,359.97265625 308.98828125,364.296875 308.98828125,369.37890625 309.49609375,374.4609375 310.00390625,379.54296875 310.51171875,384.625 311.52734375,389.70703125 312.03515625,394.7890625 312.54296875,399.87109375 313.078125,405.76953125 313.61328125,411.66796875 313.61328125,417.56640625 313.61328125,422.6484375 313.61328125,427.73046875 314.12109375,432.8125 314.12109375,434.65625 314.12109375,438.98046875 314.12109375,441.953125 314.515625,444.33203125 314.515625,446.7109375 314.85546875,448.07421875 314.85546875,449.4375 314.85546875,450.375 315.140625,450.9453125 315.140625,451.515625 315.140625,451.7734375 315.140625,452.03125 315.42578125,452.6015625 315.7109375,453.171875 315.7109375,454.109375 315.99609375,454.6796875 316.30859375,455.6171875 316.30859375,456.1875 316.30859375,456.7578125 316.59375,457.328125 316.59375,457.8984375 316.8515625,458.15625 316.8515625,458.72265625 316.8515625,459.29296875 316.8515625,459.859375 317.109375,460.1171875 317.109375,460.6875 317.109375,461.2578125 317.109375,461.828125 317.109375,462.3984375 317.39453125,462.96875 317.39453125,463.5390625 317.39453125,464.4765625 317.39453125,465.83984375 317.70703125,466.77734375 317.70703125,468.140625 317.70703125,469.50390625 317.70703125,471.3203125 317.70703125,472.68359375 318.07421875,474.52734375 318.07421875,477.5 318.07421875,478.86328125 318.5234375,482.484375 318.5234375,483.84765625 318.5234375,485.69140625 318.5234375,487.53515625 318.86328125,488.8984375 318.86328125,489.8359375 318.86328125,490.40625 318.86328125,490.9765625 319.12109375,491.234375 319.12109375,491.4921875 319.12109375,491.75 319.37890625,491.75 319.62109375,491.75 319.87890625,491.75 320.13671875,492.0078125 320.39453125,492.0078125 320.65234375,492.265625 321.22265625,492.55078125 321.48046875,492.80859375 321.73828125,493.06640625 321.99609375,493.32421875 322.25390625,493.58203125 322.51171875,493.83984375 322.51171875,494.09765625 322.51171875,494.33984375 322.51171875,494.91015625 322.51171875,495.48046875 322.51171875,497.32421875 322.51171875,499.140625 322.51171875,502.11328125 322.51171875,505.734375 322.05859375,509.35546875 321.6875,511.19921875 321.26171875,514.171875 320.86328125,516.55078125 320.4921875,518.39453125 320.15625,519.734375 320.15625,520.671875 319.8671875,521.2421875 319.8671875,521.8125 319.8671875,522.0703125 319.8671875,522.328125 319.8671875,522.5859375 319.6328125,522.5859375 319.6328125,522.84375 319.6328125,523.078125 319.6328125,523.3125 319.6328125,523.078125 319.6328125,522.50390625 320.203125,522.21484375 320.7734375,521.640625 321.33984375,521.35546875 321.91015625,521.06640625 322.48046875,521.06640625 322.73828125,521.06640625 322.99609375,521.06640625 323.25390625,521.06640625 323.51171875,521.06640625 323.76953125,521.06640625 324.08203125,522.00390625 324.39453125,522.94140625 324.39453125,523.87890625 324.39453125,525.2421875 324.39453125,526.1796875 324.39453125,526.75 324.39453125,527.3203125 324.39453125,527.890625 324.39453125,528.4609375 324.39453125,528.71875 324.39453125,528.9765625 324.39453125,529.234375 324.39453125,529.47265625 324.39453125,529.71484375 323.67578125,529.71484375 "
        />
        <path
          fill="transparent"
          stroke="#FFFCF9"
          stroke-width="50"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-time="1664108643140"
          d="M323.67578125,528.1953125 L323.67578125,528.1953125 323.67578125,528.66015625 323.67578125,530.0234375 323.67578125,530.28125 323.67578125,532.66015625 323.67578125,534.0234375 323.67578125,534.59375 323.67578125,537.56640625 323.67578125,538.13671875 323.67578125,539.98046875 323.67578125,541.34375 323.67578125,542.69921875 323.67578125,544.0625 323.67578125,545 323.67578125,545.9375 323.67578125,546.875 323.67578125,547.1328125 323.67578125,548.49609375 323.67578125,548.75390625 323.67578125,549.32421875 323.67578125,549.89453125 323.67578125,550.46484375 323.67578125,551.40234375 323.67578125,551.97265625 323.67578125,553.3359375 323.67578125,554.2734375 323.67578125,555.63671875 323.67578125,557 323.67578125,558.36328125 323.67578125,559.30078125 323.67578125,560.6640625 323.67578125,562.02734375 323.67578125,562.96484375 323.67578125,563.90234375 323.67578125,564.83984375 323.67578125,565.41015625 323.67578125,566.34765625 323.67578125,567.28515625 323.67578125,568.22265625 323.67578125,568.79296875 323.67578125,569.73046875 323.67578125,570.66796875 323.67578125,572.03125 323.67578125,572.96875 323.67578125,574.33203125 323.67578125,575.6953125 323.67578125,577.05859375 323.67578125,578.421875 323.67578125,581.39453125 323.67578125,582.33203125 323.67578125,584.17578125 323.3046875,586.01953125 323.3046875,587.86328125 323.3046875,589.2265625 323.3046875,590.58984375 323.3046875,591.52734375 323.3046875,592.46484375 323.3046875,593.03515625 323.3046875,593.60546875 323.3046875,594.17578125 323.3046875,594.43359375 323.3046875,595.00390625 323.3046875,595.57421875 323.3046875,596.14453125 323.3046875,597.08203125 323.3046875,598.01953125 323.3046875,599.3828125 323.3046875,600.73828125 323.3046875,603.1171875 323.3046875,604.4765625 323.3046875,606.3203125 323.3046875,608.1640625 323.671875,610.0078125 323.671875,611.8515625 323.671875,612.7890625 323.671875,614.15234375 323.671875,614.72265625 323.671875,615.29296875 323.671875,615.86328125 323.671875,616.12109375 323.671875,616.37890625 323.671875,616.63671875 323.671875,616.89453125 323.91015625,616.89453125 323.91015625,617.125 323.91015625,617.359375 323.91015625,617.58984375 323.91015625,617.84765625 323.91015625,618.41796875 323.91015625,619.35546875 323.91015625,620.71875 323.91015625,622.08203125 323.91015625,623.4453125 323.91015625,625.82421875 323.91015625,627.66796875 323.91015625,629.51171875 323.91015625,630.875 323.91015625,632.23828125 323.91015625,633.6015625 323.91015625,634.5390625 323.91015625,635.4765625 323.91015625,635.734375 323.91015625,636.3046875 323.91015625,636.5625 323.91015625,636.8203125 323.91015625,637.078125 323.91015625,637.3203125 323.91015625,637.55859375 323.91015625,637.81640625 323.91015625,638.07421875 323.91015625,638.64453125 323.91015625,638.90234375 323.91015625,639.47265625 323.91015625,640.41015625 323.91015625,640.98046875 323.91015625,641.91796875 323.91015625,642.48828125 323.91015625,643.42578125 323.91015625,643.99609375 323.91015625,644.25390625 323.91015625,644.51171875 323.91015625,644.76953125 323.91015625,645.02734375 "
        />
      </svg>
    </button>
  );
}
