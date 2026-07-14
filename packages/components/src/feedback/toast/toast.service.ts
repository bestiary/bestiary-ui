import { ref, inject, type Plugin, type Ref } from 'vue';
import type { ToastMessageOptions } from './toast.props';

export const ToastInjectionKey = Symbol('BToastService');

let messageIdCounter = 0;

export interface ToastServiceMethods {
    add: (message: ToastMessageOptions) => void;
    remove: (id: string) => void;
    removeGroup: (group: string) => void;
    removeAll: () => void;
    messages: Ref<ToastMessageOptions[]>;
}

export const useToast = (): ToastServiceMethods => {
    const service = inject<ToastServiceMethods>(ToastInjectionKey);
    if (!service) {
        throw new Error('useToast must be used within an app that has ToastService installed.');
    }
    return service;
};

export const ToastService: Plugin = {
    install: (app) => {
        const messages = ref<ToastMessageOptions[]>([]);

        const add = (message: ToastMessageOptions) => {
            const id = message.id || `b-toast-${messageIdCounter++}`;
            const msg = { ...message, id };
            messages.value = [...messages.value, msg];
        };

        const remove = (id: string) => {
            messages.value = messages.value.filter(msg => msg.id !== id);
        };

        const removeGroup = (group: string) => {
            messages.value = messages.value.filter(msg => msg.group !== group);
        };

        const removeAll = () => {
            messages.value = [];
        };

        const service: ToastServiceMethods = { add, remove, removeGroup, removeAll, messages };

        app.config.globalProperties.$toast = service;
        app.provide(ToastInjectionKey, service);
    }
};