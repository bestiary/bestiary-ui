export declare const BCard: import('../utils/with-install').SFCWithInstall<{
    new (...args: any[]): import('vue').CreateComponentPublicInstanceWithMixins<Readonly<import('vue').ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, import('vue').PublicProps, {
        readonly header: string;
        readonly shadow: import('./card.types').CardShadow;
        readonly bodyStyle: Record<string, string>;
    }, true, {}, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, {}, HTMLDivElement, import('vue').ComponentProvideOptions, {
        P: {};
        B: {};
        D: {};
        C: {};
        M: {};
        Defaults: {};
    }, Readonly<import('vue').ExtractPropTypes<{
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
    }>> & Readonly<{}>, {}, {}, {}, {}, {
        readonly header: string;
        readonly shadow: import('./card.types').CardShadow;
        readonly bodyStyle: Record<string, string>;
    }>;
    __isFragment?: never;
    __isTeleport?: never;
    __isSuspense?: never;
} & import('vue').ComponentOptionsBase<Readonly<import('vue').ExtractPropTypes<{
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
}>> & Readonly<{}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, {
    readonly header: string;
    readonly shadow: import('./card.types').CardShadow;
    readonly bodyStyle: Record<string, string>;
}, {}, string, {}, import('vue').GlobalComponents, import('vue').GlobalDirectives, string, import('vue').ComponentProvideOptions> & import('vue').VNodeProps & import('vue').AllowedComponentProps & import('vue').ComponentCustomProps & (new () => {
    $slots: {
        header?(_: {}): any;
        default?(_: {}): any;
        footer?(_: {}): any;
    };
})>;
export default BCard;
export * from './card.types';
