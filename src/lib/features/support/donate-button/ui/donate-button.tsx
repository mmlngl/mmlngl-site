import { cva, type VariantProps } from "class-variance-authority";
import type { FC, HTMLAttributes } from "react";
import { cn } from "~lib/shared/design-system/utils";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      button: "inline-block",
      link: "",
    },
    size: {
      default: "w-28 md:w-42",
      sm: "w-18",
    },
  },
  compoundVariants: [
    {
      variant: "link",
      class: "w-auto",
    },
  ],
  defaultVariants: {
    size: "default",
    variant: "button",
  },
});

export type DonateButtonProps = HTMLAttributes<"a"> &
  VariantProps<typeof buttonVariants>;

export const DonateButton: FC<DonateButtonProps> = ({
  size,
  className,
  variant = "button",
  ...props
}) => {
  return (
    <a
      href="https://www.buymeacoffee.com/mmlngl"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(buttonVariants({ size, variant, className }))}
      {...props}
    >
      <span
        aria-hidden={variant === "button"}
        className={cn({
          "sr-only": variant === "button",
        })}
      >
        Buy Me Coffee Page
      </span>
      {variant === "button" ? (
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me a Coffee"
          className="height: 60px !important;width: 217px !important;"
        />
      ) : null}
    </a>
  );
};
