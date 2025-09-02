declare module "@iconscout/react-unicons" {
  import { FC, SVGProps } from "react";

  export type UniconProps = SVGProps<SVGSVGElement> & {
    size?: string | number;
    color?: string;
  };

  // Declare common icons you use
  export const UilEstate: FC<UniconProps>;
  export const UilClipboardNotes: FC<UniconProps>;
  export const UilUsersAlt: FC<UniconProps>;
  export const UilPackage: FC<UniconProps>;
  export const UilChart: FC<UniconProps>;
  export const UilUsdSquare: FC<UniconProps>;
  export const UilMoneyWithdrawal: FC<UniconProps>;
  export const UilTimes: FC<UniconProps>;
  export const UilSignOutAlt: FC<UniconProps>;
  export const UilBox: FC<UniconProps>;
  export const UilBars: FC<UniconProps>;
}
