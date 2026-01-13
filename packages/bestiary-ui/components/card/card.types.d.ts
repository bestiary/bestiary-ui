export type CardShadow = 'always' | 'hover' | 'never';
export declare const cardProps: {
    readonly shadow: {
        readonly type: import('vue').PropType<CardShadow>;
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
};
