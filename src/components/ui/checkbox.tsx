import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import * as React from "react";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={`peer h-4 w-4 bg-card hover:bg-blue-80 border border-blue-40 shrink-0 rounded ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blue-40 data-[state=checked]:text-foreground ${className}`}
        {...props}
    >
        <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
            <Check className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

const styles = {
    unchecked: {
        height: "1rem",
        width: "1rem",
        border: "1px solid",
        flexShrink: 0,
        borderRadius: "0.25rem",
        outline: "2px solid transparent",
        outlineOffset: "2px",
        cursor: "pointer",
        backgroundColor: "white",
        borderColor: "#0075b1",
        "&[data-state='checked']": {
            backgroundColor: "#0075b1",
            color: "#fff",
        },
        "&[data-state='checked']:hover": {
            backgroundColor: "#cbd5e0",
        },
        "&:hover": {
            backgroundColor: "#f3f4f6",
        },
        "&:focus-visible": {
            outlineColor: "#0075b1",
            ring: "2px solid #0075b1",
            ringOffsetColor: "#fff",
        },
        "&:disabled": {
            cursor: "not-allowed",
            opacity: 0.5,
        },
        "&:disabled:hover": {
            backgroundColor: "#fff",
        },
        "&:focus-visible:not(:focus-visible)": {
            outlineWidth: 0,
        },
        transitionProperty: "background-color",
        transitionDuration: "150ms",
    },
    checked: {
        height: "1rem",
        width: "1rem",
        border: "1px solid",
        flexShrink: 0,
        borderRadius: "0.25rem",
        outline: "2px solid transparent",
        outlineOffset: "2px",
        cursor: "pointer",
        backgroundColor: "#0075b1",
        borderColor: "#0075b1",
        "&[data-state='checked']:hover": {
            backgroundColor: "#cbd5e0",
        },
        "&:hover": {
            backgroundColor: "#f3f4f6",
        },
        "&:focus-visible": {
            outlineColor: "#0075b1",
            ring: "2px solid #0075b1",
            ringOffsetColor: "#fff",
        },
        "&:disabled": {
            cursor: "not-allowed",
            opacity: 0.5,
        },
        "&:disabled:hover": {
            backgroundColor: "#fff",
        },
        "&:focus-visible:not(:focus-visible)": {
            outlineWidth: 0,
        },
        transitionProperty: "background-color",
        transitionDuration: "150ms",
    },
    text: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "currentColor",
        pointerEvents: "none" as "none",
    },
    icon: {
        height: "1rem",
        width: "1rem",
    },
};

const Checkbox2 = ({
    checked,
    onCheckedChange,
}: {
    checked: boolean;
    onCheckedChange: () => void;
}) => {
    return (
        <button
            type="button"
            role="checkbox"
            aria-checked={checked}
            data-state={checked ? "checked" : ""}
            value="on"
            style={checked ? styles.checked : styles.unchecked}
            onClick={onCheckedChange}
        >
            <span data-state={checked ? "checked" : ""} style={styles.text}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    style={styles.icon}
                >
                    <path d="M20 6 9 17l-5-5"></path>
                </svg>
            </span>
        </button>
    );
};

export { Checkbox, Checkbox2 };
