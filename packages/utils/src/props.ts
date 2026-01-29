import { type PropType } from "vue";

export const definePropType = <T>(val: any): PropType<T> => val;

export const mergeProps = (...args: any[]) => {
    const result: any = {};
    for (const props of args) {
        for (const key in props) {
            if (key === "class") {
                if (result.class !== props.class) {
                    result.class = [result.class, props.class].filter(Boolean).join(" ");
                }
            } else if (key === "style") {
                result.style = { ...result.style, ...props.style };
            } else {
                result[key] = props[key];
            }
        }
    }
    return result;
}
