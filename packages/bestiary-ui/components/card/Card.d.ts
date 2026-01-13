declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    readonly shadow: {
        readonly type: import('vue').PropType<import('./card.types').CardShadow>;
        readonly default: "always";
    };
    readonly header: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly bodyStyle: {
        readonly type: import('vue').PropType<Record<string, string>>;
        readonly default: () => {};
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    readonly shadow: {
        readonly type: import('vue').PropType<import('./card.types').CardShadow>;
        readonly default: "always";
    };
    readonly header: {
        readonly type: StringConstructor;
        readonly default: "";
    };
    readonly bodyStyle: {
        readonly type: import('vue').PropType<Record<string, string>>;
        readonly default: () => {};
    };
}>> & Readonly<{}>, {
    readonly header: string;
    readonly shadow: import('./card.types').CardShadow;
    readonly bodyStyle: Record<string, string>;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
